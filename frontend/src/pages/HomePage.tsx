import React from 'react'
import BannerFlowers from './components/BannerFlowers'
import FlowersOffers from './components/FlowersOffers'
import Header from './components/Header'

const HomePage: React.FC = () => {
    return (
        <div className='bg-black h-screen min-h-screen h-max'>
            <Header/>
            <BannerFlowers/>
            <br/>
            <FlowersOffers/>
            <br/>
        </div>
    )
}

export default HomePage