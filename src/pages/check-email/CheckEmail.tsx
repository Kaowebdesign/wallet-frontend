// Core
import React, {FC, memo} from 'react'
import {NavLink, Redirect} from 'react-router-dom'
// Hook
import {useCheckEmailEf} from './useCheckEmailEf'
// Elements
import {Auth, Button, Typography} from "elements"



type PropsType = {
    children?: never
}

const CheckEmail: FC<PropsType> = memo(() => {
    const {
        successSignup, isAuth, notFoundRedirect, lang,
    } = useCheckEmailEf()

    if (isAuth) return <Redirect to={`/${lang}/cabinet`}/>
    if (!successSignup) return <Redirect to={`/${lang}/`}/>
    if (notFoundRedirect) return <Redirect to={`/${lang}/signin`}/>

    return (
        <Auth className={'sign'}>
            <div className="sign__wrapper">
                <Typography className={'sign__title'} type={"title-36"} color={"primary"} weight={"medium"}>
                    Check your email
                </Typography>

                <Typography className={'sign__text'} type={"text-18"} color={"primary"}>
                    We have sent a link for password recovery to your <b>{successSignup}</b>
                </Typography>

                <NavLink to={`/${lang}/signin`}>
                    <Button
                        style={{marginTop: 32}}
                        loaderPosition={"center"}
                        size={"full"}
                        type={"submit"}
                        color={"secondary"}
                        variant={"contained"}
                    >
                        Back to Sign In
                    </Button>
                </NavLink>

            </div>
        </Auth>
    )
})

export default CheckEmail
