// Core
import React, {FC, memo} from 'react'
// Style
import './NotFound.scss'
// Hook
import {useNotFoundEf} from './useNotFoundEf'
import {NavLink} from "react-router-dom"
// Elements
import {Container, Typography, Button} from 'elements'
// Components
import {Logo} from 'components'
// Icons
import {Icon404} from 'icons'



type PropsType = {
    children?: never
}

const NotFound: FC<PropsType> = memo(() => {
    const {
        lang,
    } = useNotFoundEf()

    return(
        <section className={'not-found'}>
            <Container type={'div'} className={'not-found__logo-wrapper'}>
                <Logo/>
            </Container>
            <Container type={'div'} className={'not-found__content'}>
               <div>
                   <Icon404/>
                   <Typography type={"title-156"} color={"secondary"}>
                       error.
                   </Typography>
                   <Typography className={'not-found__text'} type={"text-24"} color={"primary"}>
                       The page you were looking for
                   </Typography>
                   <Typography type={"text-24"} color={"primary"}>
                       doesn't exist
                   </Typography>

                   <NavLink to={`/${lang}/`}>
                       <Button color={"secondary"} variant={"contained"} className={'not-found__btn'}>
                          <Typography type={"text-16"}>
                              Go to Homepage
                          </Typography>
                       </Button>
                   </NavLink>
               </div>
            </Container>
        </section>
    )
})

export default NotFound
