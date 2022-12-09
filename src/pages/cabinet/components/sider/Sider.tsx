// Core
import React, {FC, memo, ReactComponentElement} from 'react'
import clsx from "clsx"
// Ant Components
import {Layout, Menu} from 'antd'
// Ant Icon
import {
    HomeOutlined, MenuFoldOutlined,
    MenuUnfoldOutlined,
    QuestionCircleOutlined,
    SettingOutlined,
    SwapOutlined,
    WalletOutlined
} from '@ant-design/icons'
// Style
import './Sider.scss'
// Hook
import {useSiderEf} from './useSiderEf'
// Components
import {Logo} from "components"
// Element
import {Typography} from 'elements'
// Utils
import {config} from 'utils'
// Types
import {MenuList} from 'types/cabinet/cabinet-main-type'


type PropsType = {
    children?: never
}

const getIconMenuIcon = (type: MenuList): ReactComponentElement<any> => {
    switch (type) {
        case "help": return <QuestionCircleOutlined className="sider__icon" />
        case "home": return <HomeOutlined className="sider__icon" />
        case "portfolio": return <WalletOutlined className="sider__icon" />
        case "setting": return <SettingOutlined className="sider__icon" />
        case "transactions": return <SwapOutlined className="sider__icon" />
        default: return <HomeOutlined className="sider__icon" />
    }
}

const Sider: FC<PropsType> = memo(() => {
    const {
        menuMode, siderMode,
        handlerSelect, handlerClick
    } = useSiderEf()

    return (
        <Layout.Sider width={208} className={'sider'} trigger={null} collapsible collapsed={siderMode}>
            <Logo isLink={false} className={clsx('sider__logo', {'hide': siderMode})} hide={siderMode} cabinet={true} />
            {
                menuMode && (
                    <Menu theme="light" mode="inline" selectedKeys={[menuMode]}>
                        {
                            config.cabinet.main.menu_mode.filter(elem => elem !== 'profile').map(elem => (
                                <Menu.Item  className="sider__icon" key={elem} icon={getIconMenuIcon(elem)} onClick={() => handlerSelect(elem)}>
                            <span className={'sider_title'}>
                                {elem}
                            </span>
                                </Menu.Item>
                            ))
                        }
                    </Menu>
                )
            }
            <div className={clsx('sider__collapsed-wrapper', {'center': siderMode})}>
                {
                    siderMode
                        ? <MenuUnfoldOutlined className="sider__icon" onClick={handlerClick} />
                        : <MenuFoldOutlined className="sider__icon" onClick={handlerClick} />
                }
            </div>
        </Layout.Sider>
    )
})

export default Sider
