// Core
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {appSelect} from "selectors"


export const useFooterEf = () => {
    const dispatch = useDispatch()
    const lang = useSelector(appSelect.language)

    return {
        lang
    }
}
