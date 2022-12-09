// Core
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {homeSelector} from "selectors/cabinet";


export const useYourPortfolioEf = () => {

    const dispatch = useDispatch()
    const portfolioData = useSelector(homeSelector.portfolio)
    const baseFiatSign = useSelector(homeSelector.base_sign_name)

    //const x = useSelector(x)

    return { baseFiatSign, portfolioData }
}
