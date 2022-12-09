// Core
import {useSelector} from 'react-redux'
// Hooks
import useScreen from "use-screen"
import {useSpring} from "react-spring"
// Utils
import {handlerAnimate} from './prepare-animate'
// Selector
import {appSelect} from "selectors"


export const useHeadAreaEf = () => {
    const {screenWidth} = useScreen()
    const anim = handlerAnimate(screenWidth)
    const lang = useSelector(appSelect.language)

    const chartsAnim = useSpring({
        from: anim ? anim.charts.from : {},
        to: anim ? anim.charts.to : {},
        delay: 500,
        config: { mass: 1, tension: 280, friction: 60 },
    })

    const walletAnim = useSpring( {
        from:  anim ? anim.wallet.from : {},
        to: anim ? anim.wallet.to : {},
        config: { mass: 1, tension: 280, friction: 300 },
    })

    const chartAnim = useSpring({
        from:  anim ? anim.chart.from : {},
        to: anim ? anim.chart.to : {},
        delay: 1000,
        config: { mass: 60 },
    })

    const coinsAnim = useSpring({
        from:  anim ? anim.coins.from : {},
        to: anim ? anim.coins.to : {},
        delay: 1000,
        config: { mass: 1, tension: 280, friction: 60 },
    } )

    const elementsAnim = useSpring({
        from:  anim ? anim.elements.from : {},
        to: anim ? anim.elements.to : {},
        delay: 1200,
        config: { mass: 1, tension: 280, friction: 60 },
    })

    return {
        chartsAnim, walletAnim, chartAnim, coinsAnim, elementsAnim, lang,
    }
}
