// Core
import {useEffect, useRef, useState} from 'react'
import {useSpring} from "react-spring"
// Hooks
import {useIntersectionObserver} from "hooks"
import useScreen from 'use-screen'
// Utils
import {handlerAnimate} from "./prepare-animate"


export const useDeviceEf = () => {
    const {screenWidth} = useScreen()
    const [show, setShow] = useState(false)
    const targetRef = useRef<HTMLDivElement | null>(null)
    const [isVisible] = useIntersectionObserver({
        elementRef: targetRef,
    })

    const anim = handlerAnimate(screenWidth)

    useEffect(() => {
        isVisible && setShow(true)
    },[isVisible])

    const phoneAnim = useSpring({
        from: anim.from,
        to: show ? anim.to : {},
        config: { mass: 1, tension: 280, friction: 60 },
    })

    const cardAnim = useSpring({
        from: {clipPath: 'inset(0 100% 0 0)'},
        to: show ? {clipPath: 'inset(0 0 0 0)'} : {},
        delay: 700,
        config: { mass: 1, tension: 280, friction: 60 },
    })

    const ETHAnim = useSpring({
        from: {transform: 'rotateY(90deg)'},
        to: show ? {transform: 'rotateY(0deg)'} : {},
        delay: 1300,
        config: { mass: 1, tension: 280, friction: 60 },
    })

    const TRXAnim = useSpring({
        from: {transform: 'rotateY(90deg)'},
        to: show ? {transform: 'rotateY(0deg)'} : {},
        delay: 1300,
        config: { mass: 1, tension: 280, friction: 60 },
    })

    return {
        phoneAnim,
        cardAnim,
        ETHAnim,
        TRXAnim,
        targetRef,
        isTable: screenWidth <= 1199
    }
}
