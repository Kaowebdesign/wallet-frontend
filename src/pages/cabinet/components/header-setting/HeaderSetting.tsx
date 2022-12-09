// Core
import React, {FC, memo} from 'react'
// Ant Components
import {Tabs} from 'antd'
// Style
import './HeaderSetting.scss'
// Element
import {Typography} from 'elements'
// Utils
import {config} from "utils"
// Hooks
import {useHeaderSettingEf} from './useHeaderSettingEf'


type PropsType = {
    children?: never
}

const HeaderSetting: FC<PropsType> = memo(() => {
    const {
        tab, handlerTab
    } = useHeaderSettingEf()


    return (<>
        <div className={'header-setting'}>
            <Typography type={"text-20"} color={"primary"} weight={"medium"}>
                Settings
            </Typography>
        </div>
        {
            tab && (
                <Tabs activeKey={tab} tabPosition={'top'} onChange={handlerTab}>
                    {
                        config.cabinet.setting.tab.map(elem => (
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

    </>)
})

export default HeaderSetting
