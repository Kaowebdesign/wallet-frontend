// Core
import React, {FC, memo} from 'react'
// Ant Components
import {Select} from 'antd'
// Style
import './LanguageList.scss'
// Hook
import {useLanguageListEf} from './useLanguageListEf'
// Elements
import {Typography} from 'elements'
// Utils
import {config} from 'utils'
// Types
import {Language} from 'types/app-type'
// Icons
import {FlagEn, FlagRu, FlagDe} from 'icons'
import { CheckOutlined } from '@ant-design/icons'


type PropsType = {
    children?: never
}

const flagIcon = (value: Language, className: string = '') => {
    switch (value) {
        case "en": return <FlagEn className={className} />
        case "ru": return <FlagRu className={className}/>
        case "de": return <FlagDe className={className}/>
        default: return ''
    }
}


const LanguageList: FC<PropsType> = memo(() => {
    const {
        language, open,
        handlerOpenSelect, handlerCleanSelect, handlerSelect,
    } = useLanguageListEf()

    return (
       <div className={'language-list'} onClick={handlerOpenSelect}>
           {
               flagIcon(language, 'language-list__icon')
           }
           <Select
               open={open}
               className={'language-list__root'}
               value={language}
               bordered={false}
               style={{width: 100}}
               onSelect={handlerSelect}
               onBlur={handlerCleanSelect}
           >
               {
                   config.app.language_list.map(elem => (
                       <Select.Option className={'language-list__item-wrapper'} key={elem} value={elem} style={{padding: '5px 8px'}}>
                           <div className={'language-list__item'}>
                               {
                                   flagIcon(elem)
                               }
                               <Typography type={"text-20"} color={"primary"} transform={"capitalize"}>
                                   {elem}
                               </Typography>
                               {
                                   elem === language && (
                                       <CheckOutlined className={'language-list__check-icon'} />
                                   )
                               }
                           </div>
                       </Select.Option>
                   ))
               }
           </Select>
       </div>
    )

})

export default LanguageList
