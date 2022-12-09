// Core
import React, {FC, memo} from 'react'
import clsx from "clsx"
// Hook
import {usePageWrapperEf} from './usePageWrapperEf'
// Component
import {Footer} from "#/components"


type TProp = {
    bg?: 'width' | 'transparent'
    className?: string
}

const PageWrapper: FC<TProp> = memo(({children, bg = 'width', className = ''}) => {
    const {
        siderMode,
    } = usePageWrapperEf()

    return (
        <div className={`cabinet__content__wrapper ${className}`}>
            <div className={clsx('cabinet__content__wrapper_main', bg, {'close_sider': siderMode})}>
                {children}
            </div>
            <Footer/>
        </div>
    )
})

export default PageWrapper
