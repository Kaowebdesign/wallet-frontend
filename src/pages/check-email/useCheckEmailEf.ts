// Core
import {useSelector} from 'react-redux'
// Selector
import {appSelect, authSelect} from 'selectors'


export const useCheckEmailEf = () => {
    const successSignup = useSelector(authSelect.success_signup)
    const isAuth = useSelector(authSelect.is_auth)
    const notFoundRedirect = useSelector(appSelect.not_found_redirect)
    const lang = useSelector(appSelect.language)

    return {
        successSignup, isAuth, notFoundRedirect, lang,
    }
}
