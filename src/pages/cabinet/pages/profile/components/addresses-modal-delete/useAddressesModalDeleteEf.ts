// Core
import {useSelector, useDispatch} from 'react-redux'
// Selector
import {profileSelect} from 'selectors/cabinet'
// Action
import {profileActions} from 'actions/cabinet'


export const useAddressesModalDeleteEf = (id: string | null) => {
    const dispatch = useDispatch()
    const addressTable = useSelector(profileSelect.address_table)

    const itemIndex = id && addressTable ? addressTable.items.findIndex(elem => elem.id === id) : -1
    const item = addressTable && itemIndex !== -1 ? addressTable.items[itemIndex] : null

    const handlerDelete = () => {
        id && dispatch(profileActions.watch_address_table_delete(id))
    }

    return {
        item, handlerDelete,
    }
}
