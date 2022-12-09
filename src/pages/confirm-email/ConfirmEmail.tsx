// Core
import React, {FC, memo} from 'react'
import {Redirect} from 'react-router-dom'
// Hook
import {useConfirmEmailEf} from './useConfirmEmailEf'
import {useRouter} from "hooks"


type PropsType = {
    children?: never
}

const ConfirmEmail: FC<PropsType> = memo(() => {
    const {query} = useRouter()

    const {
        lang,
        // @ts-ignore
    } = useConfirmEmailEf(query.token)

    return <Redirect to={`/${lang}/signin`}/>
})

export default ConfirmEmail
