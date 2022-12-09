// Core
import {useSelector, useDispatch} from 'react-redux'
// Action
import {mainActions} from 'actions'
// Selector
import {mainSelect, appSelect} from 'selectors'
// Types
import {ContactForm} from "types/main-types"


export const useFormEf = () => {
    const dispatch = useDispatch()
    const formErrors = useSelector(mainSelect.form_errors)
    const loadForm = useSelector(mainSelect.load_form)
    const alert = useSelector(appSelect.alert)

    const handlerSubmit = (data: ContactForm) => {
        dispatch(mainActions.watch_contact_form(data))
    }

    return {
        formErrors, loadForm, alert,
        handlerSubmit,
    }
}
