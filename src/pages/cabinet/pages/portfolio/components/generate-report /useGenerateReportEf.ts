// Core
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// Actions
import {portfolioActions} from 'actions/cabinet'
// Selector
import {portfolioSelect} from 'selectors/cabinet'


export const useGenerateReportEf = () => {
    const dispatch = useDispatch()
    const generateReportMode = useSelector(portfolioSelect.generate_report_mode)

    const handlerClose = () => {
        dispatch(portfolioActions.set_generate_report_mode(false))
    }

    return {
        generateReportMode,
        handlerClose
    }
}
