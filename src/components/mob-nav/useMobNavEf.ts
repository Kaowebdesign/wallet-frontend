// Core
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// Actions
import {appActions} from 'actions'
// Selectors
import {appSelect} from "selectors"


export const useMobNavEf = () => {
    const dispatch = useDispatch()
    const menuMode = useSelector(appSelect.menu_mode)
    //const x = useSelector(x)

    const [show, setShow] = useState(false)

    const handlerClick = () => dispatch(appActions.set_menu_mode(false))

    useEffect(() => {
        if (menuMode) {
            setShow(true)
        } else {
            const timer = setTimeout(() => setShow(false), 1500)

            return () => clearTimeout(timer)
        }
    }, [show, menuMode])

    return {
        menuMode,
        show,
        handlerClick,
    }
}
