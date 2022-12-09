// Core
import React, {FC, memo} from 'react'
// Ant Components
import {Modal} from 'antd'
// Ant Icon
import {} from '@ant-design/icons'
// Style
import './GenerateReport.scss'
// Hook
import {useGenerateReportEf} from './useGenerateReportEf'


import {ComingSoon} from "elements"


type PropsType = {
    children?: never
}

const GenerateReport: FC<PropsType> = memo(() => {
    const {
        generateReportMode,
        handlerClose
    } = useGenerateReportEf()

    return (
        <Modal
            title={'Generate report '}
            centered
            visible={generateReportMode}
            onCancel={handlerClose}
            width={421}
            footer={false}
        >
            <ComingSoon/>
        </Modal>
    )
})

export default GenerateReport
