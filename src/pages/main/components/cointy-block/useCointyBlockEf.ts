// Core
import {useEffect, useRef, useState} from 'react'
import {useSpring} from "react-spring"
// Hooks
import {useIntersectionObserver} from "hooks"
import useScreen from 'use-screen'
// Utils
import {handlerAnimate} from './prepare-animate'


export const useCointyBlockEf = () => {
    const [show, setShow] = useState(false)
    const divRef = useRef<HTMLDivElement | null>(null)
    const {screenWidth} = useScreen()
    const [isVisible] = useIntersectionObserver({
        elementRef: divRef,
    })

    const anim = handlerAnimate(screenWidth)

    useEffect(() => {
        isVisible && setShow(true)
    },[isVisible])

    const coinsAnim = useSpring({
        from: anim.from,
        to: show ? anim.to : {},
        config: { mass: 1, tension: 280, friction: 120 },
    })

    return {
        coinsAnim,
        divRef,
    }
}
