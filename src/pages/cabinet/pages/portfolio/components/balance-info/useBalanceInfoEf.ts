// Core
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// Actions
import {portfolioActions} from 'actions/cabinet'


export const useBalanceInfoEf = () => {
    const dispatch = useDispatch()
    //const x = useSelector(x)

    const handlerOpenGenerateReport = () => {
        dispatch(portfolioActions.set_generate_report_mode(true))
    }

    return {
        handlerOpenGenerateReport
    }
}
