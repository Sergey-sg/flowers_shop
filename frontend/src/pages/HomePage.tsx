import React from 'react'
import BannerFlowers from './components/BannerFlowers'
import Header from './components/Header'

const FlowersOffers: React.FC = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <div className='text-slate-50'>Offers</div>
        </div>
    )
}

const HomePage: React.FC = () => {
    return (
        <div className='bg-black h-screen min-h-screen h-max'>
            <Header/>
            <BannerFlowers/>
            <FlowersOffers/>
        </div>
    )
}

export default HomePage