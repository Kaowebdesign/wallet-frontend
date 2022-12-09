// Core
import React, {FC, memo} from 'react'
// Ant Components
import {Button, Empty} from 'antd'
// Ant Icon
import {} from '@ant-design/icons'
// Styles
import './NodeError.scss'
// Image
import ErrorImage from 'assets/img/node-error.svg'



type PropsType = {
    children?: never,
    description?: string,
    withHandler?: boolean,
    className?: string,
    errorImage?: any,
    handler?: () => void,
    requestButtonName?: string,
    requestButtonDisabled?: Boolean
}

const NodeError: FC<PropsType> = memo(({description = 'Something went wrong', withHandler = false, handler, className = '', errorImage, requestButtonName = 'Reload', requestButtonDisabled = false}) => {

    return (
        <div className={`node-error ${className}`}>
            <div className={'node-error__wrap'}>
                {
                    errorImage ?
                        <Empty image={errorImage} description={description} className={'node-error__empty'} />
                        :
                        <Empty image={ErrorImage} description={description} className={'node-error__empty'} />
                }
                {
                    withHandler &&
                        <Button type="primary" size={"middle"} className={'cab-settings__button node-error__button'} disabled={!!requestButtonDisabled}
                                onClick={handler}>
                            {requestButtonName}
                        </Button>
                }
            </div>
        </div>
    )
})

export default NodeError
