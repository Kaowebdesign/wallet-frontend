// Core
import React, {CSSProperties, FC, memo} from 'react'
// Ant Components
import {} from 'antd'
// Ant Icon
import {} from '@ant-design/icons'
// Style
import './Twitter.scss'


type PropsType = {
    children?: never
    style?: CSSProperties
    className?: string | Object
}

const Twitter: FC<PropsType> = memo(({style, className}) => {

    return (
        <svg style={style} className={`twitter ${className}`} width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.802 3.98384C29.6759 3.8152 29.4999 3.69066 29.2989 3.62797C29.0979 3.56528 28.8822 3.56764 28.6827 3.63471C27.456 4.0472 26.1813 4.2999 24.89 4.38654C24.161 3.36026 23.1276 2.58926 21.9362 2.18267C20.7448 1.77608 19.4557 1.75451 18.2514 2.121C17.047 2.48749 15.9885 3.22348 15.2255 4.2248C14.4625 5.22611 14.0338 6.44203 14 7.70045C12.0488 7.30431 10.1963 6.52268 8.55101 5.40136C6.90575 4.28005 5.50086 2.84162 4.41868 1.17036C4.31367 1.00901 4.16432 0.881403 3.98857 0.802854C3.81281 0.724305 3.61812 0.698154 3.42787 0.727542C3.23762 0.756929 3.05989 0.840606 2.91603 0.968525C2.77217 1.09644 2.66829 1.26317 2.61686 1.44868C1.73805 4.62529 1.80012 7.98868 2.79554 11.1307C3.79096 14.2727 5.67693 17.0583 8.22459 19.1494C6.08085 20.3292 3.68003 20.9641 1.23332 20.9984C1.01289 21.0017 0.799727 21.0777 0.626927 21.2146C0.454128 21.3515 0.331359 21.5416 0.277681 21.7554C0.224004 21.9692 0.242422 22.1948 0.330075 22.3971C0.417728 22.5994 0.569712 22.767 0.762431 22.8741C3.26877 24.2616 6.08505 24.9933 8.9498 25.0014C11.8146 25.0095 14.6349 24.2936 17.149 22.9203C19.6631 21.5469 21.7895 19.5606 23.3308 17.1458C24.872 14.731 25.7781 11.9658 25.965 9.10719C27.4574 8.0097 28.7597 6.67501 29.8203 5.1562C29.9411 4.98374 30.0043 4.77756 30.001 4.56705C29.9977 4.35654 29.9281 4.15244 29.802 3.98384Z" fill="#332E54"/>
        </svg>
    )
})

export default Twitter