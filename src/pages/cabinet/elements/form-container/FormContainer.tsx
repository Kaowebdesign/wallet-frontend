// Core
import React, {FC, memo} from 'react'
// Elements
import {Typography} from 'elements'
// Style
import './FormContainer.scss'


type PropsType = {
    title: string
    className?: string
}

const FormContainer: FC<PropsType> = memo(({title, children, className = ''}) => (
    <div className={`form-container ${className}`}>
        <Typography className={`form-container_title`} color={"primary"} type={"title-18"}>
            {title}
        </Typography>
        {children}
    </div>
))

export default FormContainer
