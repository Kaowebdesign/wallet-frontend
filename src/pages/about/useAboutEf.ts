// Core
import {useSelector} from 'react-redux'
// Selector
import {authSelect, appSelect} from 'selectors'


export const useAboutEf = () => {
    const isAuth = useSelector(authSelect.is_auth)
    const lang = useSelector(appSelect.language)

    return {
        isAuth, lang,
    }
}
