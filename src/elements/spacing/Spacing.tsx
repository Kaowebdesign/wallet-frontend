// Core
import React, {FC, memo} from 'react'
import clsx from 'clsx'
// Ant Components
import {} from 'antd'
// Ant Icon
import {} from '@ant-design/icons'
// Style
import './Spacing.scss'

type TSpacingVariation = '1' | '2' | '3' | '4' | '5'

type PropsType = {
    children?: never,
    margin?: TSpacingVariation,
    marginBottom?: TSpacingVariation,
    marginTop?: TSpacingVariation,
    marginLeft?: TSpacingVariation,
    marginRight?: TSpacingVariation,
    marginVertical?: TSpacingVariation,
    marginHorizontal?: TSpacingVariation
}

const Spacing: FC<PropsType> = (props) => {

    return <div className={clsx(props.margin && `mg-${props.margin}`,
                props.marginBottom && `mg-b-${props.marginBottom}`,
                props.marginTop && `mg-t-${props.marginTop}`,
                props.marginLeft && `mg-l-${props.marginLeft}`,
                props.marginRight && `mg-r-${props.marginRight}`,
                props.marginVertical && `mg-y-${props.marginVertical}`,
                props.marginHorizontal && `mg-x-${props.marginHorizontal}`,
            )}>
        {props.children}
    </div>
}

export default Spacing
