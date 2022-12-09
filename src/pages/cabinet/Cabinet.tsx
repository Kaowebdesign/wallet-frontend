// Core
import React, {FC, memo} from 'react'
import {Redirect} from 'react-router-dom'
// Style
import './Cabinet.scss'
// Hook
import {useCabinetEf} from './useCabinetEf'
// Components
import {Header, SendAssetsModal, Sider, ReceiveAssetsModal} from './components'
import {Layout} from "antd"
import { Content } from 'antd/lib/layout/layout'
// Elements
// Page
import {Home, Portfolio, Setting, Transactions, Profile} from './pages'
// Types
import { MenuList } from 'types/cabinet/cabinet-main-type'


type PropsType = {
    children?: never
}

const getTab = (tab: MenuList) => {
    switch(tab) {
        case "home": return <Home/>
        case "transactions": return <Transactions/>
        case "setting": return <Setting/>
        case "portfolio": return <Portfolio/>
        case "profile": return <Profile/>
        default: return ''
    }
}

const Cabinet: FC<PropsType> = memo(() => {
    const {
        isAuth, lang, emptyTab, menuMode,
    } = useCabinetEf()

    if (!isAuth) return <Redirect to={`/${lang}/signin`}/>
    if (emptyTab) return <Redirect to={`/${lang}/404`}/>

    return (<>
        <Layout className={'cabinet'}>
            <Sider/>
            <Layout className="cabinet__content-wrapper">
                <Header/>
                <Content className="cabinet__content">
                    {menuMode ? getTab(menuMode) : ''}
                </Content>
            </Layout>
        </Layout>
        <SendAssetsModal/>
        <ReceiveAssetsModal/>
    </>)
})

export default Cabinet
