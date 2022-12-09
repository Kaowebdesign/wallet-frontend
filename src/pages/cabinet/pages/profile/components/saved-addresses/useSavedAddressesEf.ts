// Core
import {ChangeEvent, useEffect, useRef, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// Action
import {profileActions, cabinetMainActions} from 'actions/cabinet'
// Selector
import {cabinetMainSelect, profileSelect} from 'selectors/cabinet'
import {appSelect} from "selectors"
// Types
import {Key, SorterResult, TablePaginationConfig} from "antd/lib/table/interface"
import { TAddressTableSort } from 'types/cabinet/profile'
import { TGetSortParams } from 'types/app-type'


export const useSavedAddressesEf = () => {
    const dispatch = useDispatch()
    const addressTable = useSelector(profileSelect.address_table)
    const loadAddressTable = useSelector(profileSelect.load_address_table)
    const loadAddressTableSearch = useSelector(profileSelect.load_address_table_search)
    const addressTableSearch = useSelector(profileSelect.address_table_search)
    const addressTableSort = useSelector(profileSelect.address_table_sort)
    const pushMessage = useSelector(appSelect.push)
    const currencyListCrypto = useSelector(cabinetMainSelect.currency_list_crypto)

    const timer = useRef<any>(null)

    const [modalEditMode, setModalEditMode] = useState(false)
    const [modalDeleteMode, setModalDeleteMode] = useState(false)
    const [modalEditTitle, setModalEditTitle] = useState<'Edit' | 'Add'>('Add')
    const [modalEditItemId, setModalEditItemId] = useState<string | null>(null)
    const [searchAction, setSearchAction] = useState(false)
    const [deleteId, setDeleteId] = useState<null | string>(null)

    const handlerSearch = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(profileActions.set_address_table_search(e.target.value))
        setSearchAction(true)
    }

    const handlerAddressTableSearch = () => {
        clearTimeout(timer.current)

        timer.current = setTimeout(() => {
            addressTable && dispatch(profileActions.watch_address_table_search({
                search: addressTableSearch,
            }))
            setSearchAction(false)
        }, 1000)
    }

    const getSort = ({order, column}: TGetSortParams<'name' | 'full_name'>): TAddressTableSort => {
        if (column) {
            switch (column.key) {
                case "full_name":
                    return order !== undefined
                        ? order === 'ascend'
                            ? 'currency'
                            : '-currency'
                        : undefined
                case "name":
                    return order !== undefined
                        ? order === 'ascend'
                            ? 'name'
                            : '-name'
                        : undefined
                default: return undefined
            }
        } else {
            return undefined
        }
    }

    const handlerTableChange = (
        pagination: TablePaginationConfig,
        filters: Record<string, Key[] | null>,
        sorter: SorterResult<any> | SorterResult<any>[],
    ) => {
        const sorterPrepare = sorter as TGetSortParams<'name' | 'full_name'>
        const sortParams = getSort(sorterPrepare)

        const params = {
            page: `${pagination.current}`,
            pageSize: pagination.pageSize !== undefined ? `${pagination.pageSize}` : pagination.pageSize,
            sort: sortParams,
            search: addressTableSearch,
        }

        if (addressTableSort === sortParams) {
            dispatch(profileActions.watch_address_table(params))
        } else {
            dispatch(profileActions.watch_address_table_sort(params))
        }
    }

    const handlerModalEditModeOpen = (id: string | null) => {
        setModalEditTitle(id !== null ? 'Edit' : 'Add')
        setModalEditItemId(id)
        setModalEditMode(true)
    }

    const handlerModalEditModeClose = () => setModalEditMode(false)
    const handlerDeleteClose = () =>  setModalDeleteMode(false)

    const handlerDelete = (id: string) => {
        setDeleteId(id)
        setModalDeleteMode(true)
    }

    const handlerSendAssets = (id: string) => {
        console.log(id)
        dispatch(cabinetMainActions.set_send_asset_mode(true))
    }

    const handlerReload = () => {
        dispatch(profileActions.watch_address_table({}))
    }

    useEffect(() => {
        searchAction &&  handlerAddressTableSearch()
    }, [addressTableSearch, searchAction])

    useEffect(() => {
        pushMessage && handlerModalEditModeClose()
        pushMessage && handlerDeleteClose()
    },[pushMessage])

    useEffect(() => {
        !currencyListCrypto && dispatch(cabinetMainActions.watch_currency_list_crypto())
    }, [currencyListCrypto, dispatch])

    return {
        addressTable, loadAddressTable, modalEditMode, modalEditTitle, modalEditItemId, addressTableSearch,
        loadAddressTableSearch, addressTableSort, modalDeleteMode, deleteId,
        handlerSearch, handlerTableChange, handlerModalEditModeOpen, handlerModalEditModeClose, handlerDelete, handlerDeleteClose,
        handlerSendAssets, handlerReload,
    }
}
