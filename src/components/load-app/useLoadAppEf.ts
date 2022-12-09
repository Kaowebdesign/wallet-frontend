// Core
import {useState} from 'react'
// Hook
import {useTimeout} from 'hooks'

export const useLoadAppEf = () => {
    const [point, setPoint] = useState(1)
    const [timerAnim, setTimerAnim] = useState(0)

    useTimeout(() => {
        setTimerAnim(timerAnim === 6 ? 1 : timerAnim + 1)
        setPoint(point === 3 ? 1 : point + 1)
    }, 300)


    return {
        point, timerAnim,
    }
}
