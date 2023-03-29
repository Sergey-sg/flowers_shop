import React from 'react'
import ArrowScroll from './ArrowScroll'

const FlowersOffers: React.FC = () => {
    const flowers = Array.from(Array(10).keys()).map(x => ({id: x, name: 'Name of flower', detail: 'Detail of flower', price: 79.5}))

    return (
        <div className='w-11/12 mx-auto'>
            <div className='text-[#E1E1E6] font-sans font-medium text-3xl leading-snug mb-4'>Offers</div>
            <br/>
            <ArrowScroll items={flowers}/>
        </div>
    )
}

export default FlowersOffers