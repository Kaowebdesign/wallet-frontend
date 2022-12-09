export default (start: number, end: number): Array<number> => {
    // @ts-ignore
    return [...Array(end).keys()].map(elem => elem + start)
}