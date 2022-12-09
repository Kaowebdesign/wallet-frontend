import { useRef, useEffect } from "react"


const useTimeout = (callback: () => void, delay: number) => {
    const savedCallback = useRef<() => void>(callback)

    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    useEffect(() => {
        const  tick = () =>  savedCallback.current()

        if (delay !== null) {
            const id = setInterval(tick, delay)
            return () => clearInterval(id)
        }
    }, [delay]);
}

export default useTimeout