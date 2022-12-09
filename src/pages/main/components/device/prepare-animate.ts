type handlerAnimateData = {
    from: number | string
    to: number | string
}

export const handlerAnimate = (Width: number) => {
    let data = {} as handlerAnimateData

    if (Width >= 1600) {
        data.from = 570
        data.to = 75
    } else if (Width >= 1440) {
        data.from = 570
        data.to = 95
    } else if (Width >= 768) {
        data.from = 450
        data.to = 90
    } else if (Width >= 320) {
        data.from = 450
        data.to = 90
    } else {
        return {
            from: {},
            to: {}
        }
    }

    return {
        from: {top: data.from},
        to: {top: data.to},
    }
}