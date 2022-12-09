// Core
import React, {FC, memo} from 'react'
// Components
import {SettingPreferences, SettingNotifications, SettingSecurity} from './components'
// Elements
import {PageWrapper} from '#/components'
// Hook
import {useSettingEf} from './useSettingEf'
// Style
import './Setting.scss'


type PropsType = {
    children?: never
}

const getTabContent = (value: string) => {
    switch (value) {
        case 'preferences': return <SettingPreferences/>
        case 'security': return <SettingSecurity/>
        case 'notifications': return <SettingNotifications/>
        default: return ''
    }
}

const Setting: FC<PropsType> = memo(() => {
    const {
        tab
    } = useSettingEf()

    return (
        <PageWrapper>
            <section className={'setting'}>
                {tab && getTabContent(tab)}
            </section>
        </PageWrapper>
    )
})

export default Setting
