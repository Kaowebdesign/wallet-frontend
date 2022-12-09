// Core
import React, {FC, memo} from 'react'
import useScreen from "use-screen"
// Ant Components
import {Table} from 'antd'
// Ant Icon
import {ArrowRightOutlined, DeleteOutlined, EditOutlined} from '@ant-design/icons'
// Hook
import {useActivityEf} from './useActivityEf'
// Element
import {NodeError} from "#/elements"
import {Typography} from "elements"
// Types
import {IActivityTableItem} from "types/cabinet/profile"


type PropsType = {
    children?: never
}


const columns = () => ([
    {
        title: 'Last Entry Time & Date',
        dataIndex: 'created_at',
        key: 'created_at',
        sorter: true,
        width: 205,
    },
    {
        title: 'IP',
        dataIndex: 'ip',
        key: 'ip',
        width: 150,
    },
    {
        title: 'Place',
        dataIndex: 'region',
        key: 'region',
        width: 150,
    },
    {
        title: 'Browser',
        dataIndex: 'agent',
        key: 'agent',
    },
    {
        title: 'Device',
        dataIndex: 'device',
        key: 'device',
        width: 150,
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        width: 150,
        render: (text: string, record: IActivityTableItem) => <>
            {
                record.status === '1'
                    ? <span className={'profile__activity__table__status status_current'}>Susses</span>
                    : <span className={'profile__activity__table__status status_terminated'}>Failed</span>
            }
        </>
    },
])



const Activity: FC<PropsType> = memo(() => {
    const {screenHeight} = useScreen()

    const {
        loadActivityTable, activityTable,
        handlerReload, handlerTableChange,
    } = useActivityEf()

    return (<>
        {
            !activityTable && !loadActivityTable
                ? (
                    <NodeError handler={handlerReload} withHandler={true}/>
                )
                : (
                    <div className={'profile__activity'}>
                        <div className={'profile__activity__header'}>
                            <Typography type={"text-18"} color={"primary"} weight={"medium"}>
                                Activity
                            </Typography>
                        </div>
                        <Table
                            className={'base-table profile__activity__table'}
                            onChange={handlerTableChange}
                            loading={loadActivityTable}
                            dataSource={activityTable ? activityTable.items.map(elem => ({...elem, key: elem.id})) : []}
                            scroll={{ y: screenHeight - 507}}
                            pagination={{
                                total: activityTable ? activityTable.pagination.totalCount : 0,
                                current: activityTable ? activityTable.pagination.page : 1,
                                pageSizeOptions: ['10', '20', '30', '40', '50'],
                                pageSize: activityTable ? +activityTable.pagination.pageSize : 10,
                            }}
                            //@ts-ignore
                            columns={columns()}
                        />
                    </div>
                )
        }
    </>)
})

export default Activity
