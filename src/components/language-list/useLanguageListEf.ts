// Core
import {useSelector, useDispatch} from 'react-redux'
import {useEffect, useState} from "react"
// Selector
import {appSelect} from 'selectors'
// Actions
import {appActions} from 'actions'
// Types
import {Language} from 'types/app-type'


export const useLanguageListEf = () => {
    const dispatch = useDispatch()
    const language = useSelector(appSelect.language)

    const [open, setOpen] = useState(false)

    const handlerOpenSelect = () => setOpen(!open)
    const handlerCleanSelect = () => setOpen(false)
    const handlerSelect = (value: Language) => dispatch(appActions.set_language(value))

    useEffect(() => {
        function handleScroll(this: Window) {
            setOpen(false)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    return {
        language, open,
        handlerOpenSelect, handlerCleanSelect, handlerSelect,
    }
}
