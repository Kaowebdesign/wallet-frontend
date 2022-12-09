// Core
import {useSelector} from 'react-redux'
// Selector
import {appSelect, authSelect} from "selectors"


export const usePrivacyPolicyEf = () => {
    const isAuth = useSelector(authSelect.is_auth)
    const lang = useSelector(appSelect.language)

    return {
        isAuth, lang,
    }
}
