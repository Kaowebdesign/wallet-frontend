// Core
import React, {CSSProperties, FC, memo, useEffect, useState} from 'react'


type PropsType = {
    children?: never
    alt?: string
    src: string
    lq: string
    className?: string
    style?: CSSProperties
    height?: string
    width?: string
}

const LazyImg: FC<PropsType> = memo(({
    alt = 'images',
    src,
    lq,
    ...props
}) => {
    const [url, setUrl] = useState(src || lq)

    useEffect(() => {
        if (url === lq) {
            fetch(src)
                .then(r => r.blob())
                .then( (blob) => {
                    const FR = new FileReader()

                    FR.onload = function () {
                        // @ts-ignore
                        setUrl(this.result)
                    }
                    FR.readAsDataURL(blob)
                })
        }
    }, [])


    return <img alt={alt || ''} {...{src: url, ...props}} />
})

export default LazyImg
