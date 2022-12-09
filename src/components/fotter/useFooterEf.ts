// Core
import {useSelector} from 'react-redux'
// Selector
import {appSelect} from 'selectors'


export const useFooterEf = () => {
    const lang = useSelector(appSelect.language)

    return {
        lang
    }
}
