import React from 'react'
import ArrowScroll from '../components/ArrowScroll'
import BannerFlowers from '../components/BannerFlowers'
import FlowersOffers from '../components/FlowersOffers'
import Header from '../components/Header'

const HomePage: React.FC = () => {
    return (
        <div className='bg-black h-screen min-h-screen h-full'>
            <Header/>
            <BannerFlowers/>
            <br/>
            <FlowersOffers/>
            <br/>
        </div>
    )
}

export default HomePage