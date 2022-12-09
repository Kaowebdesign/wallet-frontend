const timerPhone = [] as any

const phone = {
    prepare: (number: string) => {
        const prepareList = number.split('/')

        return {
            code: prepareList.length > 1 ? prepareList[0] : null,
            phone: prepareList.length > 1 ? prepareList[1] : '',
        }
    },
    mask: (number: string): {range: number, val: string} | null => {
        const prepare = number.match(/\d/g)

        if (prepare) {
            switch (prepare.length) {
                case 1: return {range: 2, val: `(${prepare[0]}*) *** ** **`}
                case 2: return {range: 3, val: `(${prepare[0]}${prepare[1]}) *** ** **`}
                case 3: return {range: 6, val: `(${prepare[0]}${prepare[1]}) ${prepare[2]}** ** **`}
                case 4: return {range: 7, val: `(${prepare[0]}${prepare[1]}) ${prepare[2]}${prepare[3]}* ** **`}
                case 5: return {range: 8, val: `(${prepare[0]}${prepare[1]}) ${prepare[2]}${prepare[3]}${prepare[4]} ** **`}
                case 6: return {range: 10, val: `(${prepare[0]}${prepare[1]}) ${prepare[2]}${prepare[3]}${prepare[4]} ${prepare[5]}* **`}
                case 7: return {range: 11, val: `(${prepare[0]}${prepare[1]}) ${prepare[2]}${prepare[3]}${prepare[4]} ${prepare[5]}${prepare[6]} **`}
                case 8: return {range: 13, val: `(${prepare[0]}${prepare[1]}) ${prepare[2]}${prepare[3]}${prepare[4]} ${prepare[5]}${prepare[6]} ${prepare[7]}*`}
                case 9: return {range: 14, val: `(${prepare[0]}${prepare[1]}) ${prepare[2]}${prepare[3]}${prepare[4]} ${prepare[5]}${prepare[6]} ${prepare[7]}${prepare[8]}`}
                default: return null
            }
        }

        return null
    }
}

export default phone