// Core
import {useSelector} from 'react-redux'
// Selector
import {appSelect} from "selectors"


export const useNotFoundEf = () => {
    const lang = useSelector(appSelect.language)

    return {
        lang,
    }
}
