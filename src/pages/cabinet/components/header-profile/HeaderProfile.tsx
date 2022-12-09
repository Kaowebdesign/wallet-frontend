// Core
import React, {FC, memo} from 'react'
// Ant Components
import {Tabs, Button} from 'antd'
// Style
import './HeaderProfile.scss'
// Hook
import {useHeaderProfileEf} from './useHeaderProfileEf'
// Element
import {Typography, } from 'elements'
// Utils
import {config} from "utils"


type PropsType = {
    children?: never
}

const HeaderProfile: FC<PropsType> = memo(() => {
    const {
        tab, loadLogout,
        handlerClick, handlerTab,
    } = useHeaderProfileEf()

    return (
        <>
            <div className={'header-profile'}>
                <Typography type={"text-20"} color={"primary"} weight={"medium"}>
                    Profile
                </Typography>

                <Button
                    danger
                    loading={loadLogout}
                    className={'danger-outline'}
                    onClick={handlerClick}
                >
                    Log out
                </Button>
            </div>
            {
                tab && (
                    <Tabs activeKey={tab} tabPosition={'top'} onChange={handlerTab}>
                        {
                            config.cabinet.profile.tab.map(elem => (
                                <Tabs.TabPane
                                    tab={(
                                        <Typography type={"text-16"} transform={"capitalize"} color={"secondary"}>
                                            {elem.split('-').join(' ')}
                                        </Typography>
                                    )}
                                    key={elem}
                                />
                            ))
                        }
                    </Tabs>
                )
            }
        </>
    )
})

export default HeaderProfile
