// Core
import React, {FC, memo} from 'react'
import clsx from "clsx"
// Style
import './Auth.scss'
// Elements
import {Container} from 'elements/index'
// Components
import {Logo} from 'components'
// Assets
import leptopSrc from 'assets/img/leptop.svg'



type PropsTYpe =  {
    className?: string
}

const Auth: FC<PropsTYpe> = memo(({children, className = ''}) => {

    return (
        <section className={'auth'}>
            <Container type={'div'} className={'auth__logo-wrapper'}>
               <Logo/>
            </Container>
            <Container type={"div"} className={'auth__content'}>
                <div className={clsx("auth__wrapper", className)}>
                    {children}
                </div>
            </Container>
            <img className={clsx('auth_leptop')} src={leptopSrc} alt={''}/>
            <div className={'auth__backing'}/>
        </section>
    )
})

export default Auth
