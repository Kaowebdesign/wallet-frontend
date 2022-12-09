// Core
import {useSelector} from 'react-redux'
// Select
import {cabinetMainSelect} from 'selectors/cabinet'


export const usePageWrapperEf = () => {
    const siderMode = useSelector(cabinetMainSelect.sider_mode)

    return {
        siderMode,
    }
}
