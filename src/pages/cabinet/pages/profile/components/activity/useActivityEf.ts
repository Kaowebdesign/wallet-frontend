// Core
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// Action
import {profileActions} from 'actions/cabinet'
// Selector
import {profileSelect} from 'selectors/cabinet'
// Types
import {Key, SorterResult, TablePaginationConfig} from "antd/lib/table/interface"
import {TActivityTableSort} from "types/cabinet/profile"
import {TGetSortParams} from "types/app-type"


export const useActivityEf = () => {
    const dispatch = useDispatch()
    const activityTable = useSelector(profileSelect.activity_table)
    const activityTableSort = useSelector(profileSelect.activity_table_sort)
    const loadActivityTable = useSelector(profileSelect.load_activity_table)

    const getSort = ({order, column}: TGetSortParams<'created_at'>): TActivityTableSort => {
        if (column) {
            switch (column.key) {
                case "created_at":
                    return order !== undefined
                        ? order === 'ascend'
                            ? 'date'
                            : '-date'
                        : undefined
                default: return undefined
            }
        } else {
            return undefined
        }
    }

    const handlerReload = () => {
        dispatch(profileActions.watch_activity_table({}))
    }

    const handlerTableChange = (
        pagination: TablePaginationConfig,
        filters: Record<string, Key[] | null>,
        sorter: SorterResult<any> | SorterResult<any>[],
    ) => {
        const sorterPrepare = sorter as TGetSortParams<'created_at'>
        const sortParams = getSort(sorterPrepare)

        const params = {
            page: `${pagination.current}`,
            pageSize: pagination.pageSize !== undefined ? `${pagination.pageSize}` : pagination.pageSize,
            sort: sortParams,
        }

        if (activityTableSort === sortParams) {
            dispatch(profileActions.watch_activity_table(params))
        } else {
            dispatch(profileActions.watch_activity_table_sort(params))
        }
    }

    return {
        loadActivityTable, activityTable,
        handlerReload, handlerTableChange,
    }
}
