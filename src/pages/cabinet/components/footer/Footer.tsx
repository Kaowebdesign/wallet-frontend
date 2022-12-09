// Core
import React, {FC, memo} from 'react'
// Ant Icon
import {} from '@ant-design/icons'
// Style
import './Footer.scss'
// Element
import {Typography} from 'elements'
// Hook
import {useFooterEf} from './useFooterEf'
import { NavLink } from 'react-router-dom'


type PropsType = {
    children?: never
}

const Footer: FC<PropsType> = memo(() => {
    const {
        lang
    } = useFooterEf()

   return (
       <footer className={'cabinet__footer'}>
            <Typography type={"text-16"} color={"gray"}>
                © {new Date().getFullYear()}. CatchCoin. All rights reserved.
            </Typography>
            <Typography
                type={"link-16"}
                color={"secondary"}
                className={''}
                style={{margin: '1px 0 0 24px'}}
            >
                {/*<NavLink to={`/${lang}/faq`}>*/}
                {/*   Help*/}
                {/*</NavLink>*/}
            </Typography>
        </footer>
   )
})

export default Footer
