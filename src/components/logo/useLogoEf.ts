// Core
import {useSelector} from 'react-redux'
// Selector
import {appSelect} from 'selectors'

export const useLogoEf = () => {
    const lang = useSelector(appSelect.language)

    return {
        lang,
    }
}
