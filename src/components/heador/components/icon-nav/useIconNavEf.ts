// Core
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// Selectors
import { appSelect } from 'selectors'


export const useIconNavEf = () => {
    const dispatch = useDispatch()
    const menuMode = useSelector(appSelect.menu_mode)

    return {
        menuMode,
    }
}
