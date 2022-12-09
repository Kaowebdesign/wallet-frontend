// Core
import React, {FC, memo} from 'react'
// Style
import './Profile.scss'
// Components
import {AccountDetails, Activity, SavedAddresses} from './components'
// Element
import {PageWrapper} from '#/components'
// Hook
import {useProfileEf} from './useProfileEf'


type PropsType = {
    children?: never
}

const getTabContent =(value: string) => {
    switch (value) {
        case 'account-details': return <AccountDetails/>
        case 'saved-addresses': return <SavedAddresses/>
        case 'activity': return <Activity/>
        default: return ''
    }
}

const Profile: FC<PropsType> = memo(() => {
    const {
        tab
    } = useProfileEf()

    return (
        <PageWrapper>
            <section className={'profile'}>
                {tab && getTabContent(tab)}
            </section>
        </PageWrapper>
    )
})

export default Profile
