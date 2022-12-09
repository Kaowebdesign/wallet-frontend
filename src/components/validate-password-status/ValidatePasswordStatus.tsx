// Core
import React, {FC, memo} from 'react'
// Style
import './ValidatePasswordStatus.scss'
// Hooks
import {useValidatePasswordStatusEf} from './useValidatePasswordStatusEf'
// Elements
import {Typography} from 'elements'
// Icons
import {Close, Check} from 'icons'


type PropsType = {
    children?: never
    password: string
}

type ItemProps = {
    children?: never
    status: boolean
    title: string
}

type Valid = {
    lowercase: boolean
    uppercase: boolean
    number: boolean
    special: boolean
    minimum: boolean
}

const data = (valid: Valid) => (
    [
        {status: valid.lowercase, title: 'One lowercase character'},
        {status: valid.uppercase, title: 'One uppercase character'},
        {status: valid.number, title: 'One number'},
        {status: valid.special, title: 'One special character'},
        {status: valid.minimum, title: '8 characters minimum'},
    ] as Array<ItemProps>
)


const Item: FC<ItemProps> = ({status, title}) => (
    <div className={'validate-password-status__item'}>
        <div className={'validate-password-status__icon'}>
            {
                status ?  <Check/> : <Close/>
            }
        </div>
        <div className={'validate-password-status__info'}>
            <Typography type={"text-12"} color={status ? "primary" : "error"}>
                {title}
            </Typography>
        </div>
    </div>
)

const validator = (password: any, validPassword: boolean, handlerValidPassword: (mode: boolean) => void) => {
    const data =  {
        lowercase: false ,
        uppercase: false,
        number: false,
        special: false,
        minimum: false,
    } as Valid

    if (password.length) {
        if (/[A-Z]/.exec(password)) data.uppercase = true
        if (/[a-z]/.exec(password)) data.lowercase = true
        if (/[0-9]/.exec(password)) data.number = true
        if (/\W/.exec(password)) data.special = true
        if (password.length >= 8) data.minimum = true

        if (data.special && data.minimum && data.number && data.lowercase && data.uppercase) {
            !validPassword && handlerValidPassword(true)
        } else {
            validPassword && handlerValidPassword(false)
        }

        return data
    } else {
        !validPassword && handlerValidPassword(false)
        return data
    }
}

const ValidatePasswordStatus: FC<PropsType> = memo(({password}) => {
    const {
        validPassword,
        handlerValidPassword,
    } = useValidatePasswordStatusEf()

    return (
        <div className={'validate-password-status'}>
            <Typography type={"text-18"} color={"primary"}>
                Password Strength:
            </Typography>
            {
                data(validator(password, validPassword, handlerValidPassword)).map(elem => <Item key={elem.title} {...elem} />)
            }
        </div>
    )
})

export default ValidatePasswordStatus
