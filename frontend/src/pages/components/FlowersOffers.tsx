import React from 'react'
import productImage from '../../assets/images/testProduct.png'

interface IFlowerItem {
    id: number
    price: number
    detail: string
    name: string
  }

function ProductPresentation(props: any) {
    return (
        <div 
            className='container grid grid-rows-1 grid-flow-col gap-4 overflow-x-auto'
        >
            {props.flowers.map((flower: IFlowerItem) => (
                <div key={flower.id} className='container text-[#E1E1E6] my-auto w-max text-center scroll-ml-6 snap-start mx-10'>
                    <img 
                        src={productImage} 
                        alt={flower.name}
                        className='mx-auto'    
                    />
                    <p className='font-bold text-2xl leading-snug'>{flower.name}</p>
                    <p className='font-normal text-sm leading-relaxed'>{flower.detail}</p>
                    <p className='text-[#82F3FF] font-normal text-3xl leading-relaxed'>$ {flower.price}</p>
                    <p className='inline-block'>
                        <button className='py-2 px-3 text-3xl hover:text-red-800'>&#8722;</button>
                        <span className='text-2xl'>01</span>
                        <button className='py-2 px-3 text-3xl hover:text-cyan-500'>+</button>
                        <button className='p-3 ml-3 bg-red-700 hover:bg-red-800 rounded-[5px]'>to cart</button>
                    </p>
                </div>
            ))}
        </div>
    )
}

const FlowersOffers: React.FC = () => {
    const flowers = Array.from(Array(10).keys()).map(x => ({id: x, name: 'Name of flower', detail: 'Detail of flower', price: 79.5}))

    return (
        <div className='w-11/12 mx-auto'>
            <div className='text-[#E1E1E6] font-sans font-medium text-3xl leading-snug mb-4'>Offers</div>
            <br/>
            {}
            <ProductPresentation flowers={flowers}/>
        </div>
    )
}

export default FlowersOffers