
const useParseToCurrency = (sign?: string) => {

    return (value: number | string ) => {

        const number: number = typeof value === 'number' ? +value.toFixed(2) : 0

        const moneyFormat = (value: number, currency: string, signCount: number | null = 2):string => {

            return signCount !== null ?
                    currency + ' ' + value.toFixed(signCount).replace(/./g, function(c, i, a) {
                        return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
                    })
                :
                    currency + ' ' + value.toString().replace(/./g, function(c, i, a) {
                        return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
                    })
        }

        return {
            pure_with_currency: () => {
                if (typeof value === 'number'){
                    const intPart = +value.toFixed(8).toString().split('.')[0]
                    const fltPart = intPart === 0 ? value.toFixed(8).toString().split('.')[1] : value.toFixed(2).toString().split('.')[1]

                    return moneyFormat(intPart, sign || '', null)+ '.' + fltPart
                }
            },
            full: () => {
                return number
            },
            full_with_currency: (signCount = 2) => {
                return moneyFormat(number, sign || '', signCount)
            },
            integer: () => {
                if (typeof value === 'number') {
                    return moneyFormat(number, sign || '').toString().split('.')[0]
                } else {
                    const intPart = value.split('.')[0]

                    return moneyFormat(+intPart, sign || '', null)
                }

            },
            fractional: () => {
                if (typeof value ==='number') {
                    return +number !== 0 && '.'+number.toString().split('.')[1]
                } else {
                    return +number !== 0 && '.'+value.split('.')[1]
                }
            },
        }
    }
}

export default useParseToCurrency
