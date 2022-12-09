// Core
import { useFormikContext } from "formik"
import React, {FC, useEffect} from "react"


type PropsType = {
    children?: never
    data: any
    reset?: boolean | null
}

const FormikHandler: FC<PropsType> = ({data, reset = false}) => {
    const formik = useFormikContext()

    useEffect(() => {
        data && formik.setErrors(data)

    }, [data, formik])

    useEffect(() => {
        reset && formik.resetForm()

    }, [reset])

    return <></>
}

export default FormikHandler
