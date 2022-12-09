// Core
import {useEffect, useRef, useState} from 'react'
import {useSpring} from "react-spring"
// Hooks
import {useIntersectionObserver} from "hooks"


export const useMultiCoinEf = () => {
    const [show, setShow] = useState(false)
    const divRef = useRef<HTMLDivElement | null>(null)
    const [isVisible] = useIntersectionObserver({
        elementRef: divRef,
    })

    useEffect(() => {
        isVisible && setShow(true)
    }, [isVisible])

    const ATOMAnim = useSpring({
        from: {transform: 'scale(0)'},
        to: show ? {transform: 'scale(1)'} : {},
        delay: 0,
        config: { mass: 10, tension: 280, friction: 20 },
    })

    const BCHAnim = useSpring({
        from: {transform: 'scale(0)'},
        to: show ? {transform: 'scale(1)'} : {},
        delay: 300,
        config: { mass: 10, tension: 280, friction: 20 },
    })

    const BNBAnim = useSpring({
        from: {transform: 'scale(0)'},
        to: show ? {transform: 'scale(1)'} : {},
        delay: 1200,
        config: { mass: 10, tension: 280, friction: 20 },
    })

    const BTCAnim = useSpring({
        from: {transform: 'scale(0)'},
        to: show ? {transform: 'scale(1)'} : {},
        delay: 0,
        config: { mass: 10, tension: 280, friction: 20 },
    })

    const DCRAnim = useSpring({
        from: {transform: 'scale(0)'},
        to: show ? {transform: 'scale(1)'} : {},
        delay: 900,
        config: { mass: 10, tension: 280, friction: 20 },
    })

    const DGBAnim = useSpring({
        from: {transform: 'scale(0)'},
        to: show ? {transform: 'scale(1)'} : {},
        delay: 900,
        config: { mass: 10, tension: 280, friction: 20 },
    })

    const EOSAnim = useSpring({
        from: {transform: 'scale(0)'},
        to: show ? {transform: 'scale(1)'} : {},
        delay: 1200,
        config: { mass: 10, tension: 280, friction: 20 },
    })

    const ETHAnim = useSpring({
        from: {transform: 'scale(0)'},
        to: show ? {transform: 'scale(1)'} : {},
        delay: 1500,
        config: { mass: 10, tension: 280, friction: 20 },
    })

    const LTCAnim = useSpring({
        from: {transform: 'scale(0)'},
        to: show ? {transform: 'scale(1)'} : {},
        delay: 1800,
        config: { mass: 10, tension: 280, friction: 20 },
    })

    const TRXAnim = useSpring({
        from: {transform: 'scale(0)'},
        to: show ? {transform: 'scale(1)'} : {},
        delay: 300,
        config: { mass: 10, tension: 280, friction: 20 },
    })

    const USDTAnim = useSpring({
        from: {transform: 'scale(0)'},
        to: show ? {transform: 'scale(1)'} : {},
        delay: 1800,
        config: { mass: 10, tension: 280, friction: 20 },
    })

    const VETAnim = useSpring({
        from: {transform: 'scale(0)'},
        to: show ? {transform: 'scale(1)'} : {},
        delay: 600,
        config: { mass: 10, tension: 280, friction: 20 },
    })

    const XMRAnim = useSpring({
        from: {transform: 'scale(0)'},
        to: show ? {transform: 'scale(1)'} : {},
        delay: 1500,
        config: { mass: 10, tension: 280, friction: 20 },
    })

    const XRPAnim = useSpring({
        from: {transform: 'scale(0)'},
        to: show ? {transform: 'scale(1)'} : {},
        delay: 600,
        config: { mass: 10, tension: 280, friction: 20 },
    })

    return {
        ATOMAnim, BCHAnim, BNBAnim, BTCAnim, DCRAnim, DGBAnim, EOSAnim,
        ETHAnim, LTCAnim, TRXAnim, USDTAnim, VETAnim, XMRAnim, XRPAnim,
        divRef,
    }
}
