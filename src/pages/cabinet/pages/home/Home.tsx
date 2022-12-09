// Core
import React, {FC, memo} from 'react'
// Ant Components
import {} from 'antd'
// Ant Icon
import {} from '@ant-design/icons'
// Element
import {ComingSoon} from 'elements'
// Style
import './Home.scss'
// Hook
import {useHomeEf} from './useHomeEf'
// Components
import PriceChart from './components/price-chart/PriceChart'
import YourPortfolio from "./components/your-portfolio/YourPortfolio";
import ResentTransactions from "./components/resent-transactions/ResentTransactions";
import {PageWrapper} from '#/components'



type PropsType = {
    children?: never
}

const Home: FC<PropsType> = memo(() => {
    const {} = useHomeEf()

    return (
        <PageWrapper bg={'transparent'}>
            <div className={'cab-home'}>
                <PriceChart />
                <div className={'cab-home__bottom'}>
                    <YourPortfolio/>
                    <ResentTransactions/>
                </div>
            </div>
        </PageWrapper>
    )
})

export default Home
