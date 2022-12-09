// Core
import React, { FC, createContext } from 'react'
import { store } from "./store"
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import { Routes } from 'routes'
import clsx from "clsx"
import {CookiesProvider} from 'react-cookie'
// Hook
import {useAppEf } from './useAppEf'
import {useCheckPage} from "hooks"
// Components Ant
import {message} from 'antd'
// Components
import {Header, Footer, MobNav, LoadApp} from 'components'
// Element
import {Typography} from 'elements'
// Icon
import {AlertError, AlertInfo, AlertSuccess, AlertWarning} from "icons"
// Types
import {AlertType} from 'types/app-type'


const Context = createContext({ name: 'Default' })

const getIcon =  (type: 'success' | 'error' | 'info' | 'warning') => {
    switch (type) {
        case "success": return <AlertSuccess/>
        case "error": return <AlertError/>
        case "info": return <AlertInfo/>
        case "warning": return <AlertWarning/>
    }
}

const alertMessage = (alert: AlertType) => {
    const config = {
        duration: 5,
        className: `c-alert c-alert_${alert.type}`,
        icon: getIcon(alert.type),
        content: (<>
            <Typography type={"title-18"} transform={"capitalize"} className={'c-alert__header'} color={"primary"} weight={"medium"}>
                {alert.header}
            </Typography>
            <Typography type={"text-16"} className={'c-alert__content'} color={"primary"}>
                {alert.text}
            </Typography>
        </>),
    }

    message.success(config)
}

const AppContainer: FC = () => {
    const {
        isInit, contextHolder,
    } = useAppEf(alertMessage)

    const {layout ,soon} = useCheckPage()

    return (<>
        {contextHolder}
        {
            isInit
                ? <>
                    <Header/>
                    <MobNav/>
                    <main className={clsx({'without-layout': !layout, 'soon': soon})}>
                        <Routes/>
                    </main>
                    <Footer/>
                </>
                : <LoadApp/>
        }
    </>)
}


export const App: FC = () => {
    return (
        <React.StrictMode>
            <CookiesProvider>
                <Provider store={store}>
                    <Context.Provider value={{ name: 'Ant Design' }}>
                        <Router>
                            <AppContainer />
                        </Router>
                    </Context.Provider>
                </Provider>
            </CookiesProvider>
        </React.StrictMode>
    )
}
