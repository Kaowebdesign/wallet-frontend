// Core
import React, {FC, memo} from 'react'
import {Redirect} from 'react-router-dom'
// Style
import './About.scss'
// Hook
import {useAboutEf} from './useAboutEf'
// Elements
import {Headarea, Card, News} from './elements'
import {GetStarted} from 'elements'
// Components
import {NewsList} from 'components'


type PropsType = {
    children?: never
}

const About: FC<PropsType> = memo(() => {
    const {
        isAuth, lang
    } = useAboutEf()

    if (isAuth) return <Redirect to={`/${lang}/cabinet`}/>

    return (
        <section className={'about'}>
            <Headarea/>
            <Card/>
            <NewsList/>
            <GetStarted
                url={`/${lang}/signin`}
                title={'Ready to get started?'}
                text={'Create an account in just'}
                textTran={'a few minutes'}
            />
        </section>
    )
})

export default About
