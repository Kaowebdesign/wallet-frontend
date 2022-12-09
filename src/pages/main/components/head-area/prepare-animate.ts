type AnimatePrepare = {
    charts: number,
    chart: number,
    coins: number,
    elements: number,
}

export const handlerAnimate = (width: number) => {
    let data = {} as AnimatePrepare

    if (width >= 1600) {
        data.charts = -300
        data.chart = 300
        data.coins = 290
        data.elements = 240
    } else if (width >= 1440) {
        data.charts = -250
        data.chart = 245
        data.coins = 230
        data.elements = 190
    } else if (width >= 768) {
        data.charts = -200
        data.chart = 225
        data.coins = 195
        data.elements = 170
    } else if (width >= 320) {
        data.charts = -100
        data.chart = 110
        data.coins = 100
        data.elements = 85
    } else {
        return null
    }

    const {charts, elements, coins, chart} = data

    return {
        charts: {
            from: {top: charts, opacity: 0},
            to: {top: 0, opacity: 1},
        },
        chart: {
            from: {top: chart + 50},
            to: {top: chart},
        },
        wallet: {
            from: {clipPath: 'circle(0% at 100% -11%)'},
            to: {clipPath:'circle(300.0% at 100% 1%)'},
        },
        coins: {
            from: {top: coins + 30, opacity: 0},
            to: {top: coins, opacity: 1},
        },
        elements: {
            from: {top: elements + 30, opacity: 0},
            to: {top: elements, opacity: 1},
        },
    }
}