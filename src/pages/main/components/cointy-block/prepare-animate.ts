type handlerAnimateData = {
    from: number | string
    to: number | string
}

export const handlerAnimate = (width: number) => {
    let data = {} as handlerAnimateData

    if (width >= 1600) {
        data.from = 'calc(470px)'
        data.to = 'calc(500px)'
    } else if (width >= 1440) {
        data.from = 'calc(450px)'
        data.to = 'calc(480px)'
    } else if (width >= 768) {
        data.from = 'calc(735px)'
        data.to = 'calc(765px)'
    } else if (width >= 320) {
        data.from = 'calc(100% - 20px)'
        data.to = 'calc(100% - 50px)'
    } else {
        return {
            from: {},
            to: {}
        }
    }

    return {
        from: {top: data.from, opacity: 0},
        to: {top: data.to, opacity: 1},
    }
}