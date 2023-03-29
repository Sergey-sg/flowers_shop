import React from 'react'
import productImage from '../assets/images/testProduct.png'
import { IFlowerItem } from '../interfaces/IFlowerItem.interface'

export function FlowerCard(props: { flower: IFlowerItem }) {
    return (
        <div 
            className='container grid grid-rows-1 grid-flow-col gap-4 overflow-x-auto'
        >
            <div key={props.flower.id} className='container text-[#E1E1E6] my-auto w-max text-center scroll-ml-6 snap-start mx-10'>
                <img 
                    src={productImage} 
                    alt={props.flower.name}
                    className='mx-auto'    
                />
                <p className='font-bold text-2xl leading-snug'>{props.flower.name} {props.flower.id}</p>
                <p className='font-normal text-sm leading-relaxed'>{props.flower.detail}</p>
                <p className='text-[#82F3FF] font-normal text-3xl leading-relaxed'>$ {props.flower.price}</p>
                <p className='inline-block'>
                    <button className='py-2 px-3 text-3xl hover:text-red-800'>&#8722;</button>
                    <span className='text-2xl'>01</span>
                    <button className='py-2 px-3 text-3xl hover:text-cyan-500'>+</button>
                    <button className='p-3 ml-3 bg-red-700 hover:bg-red-800 rounded-[5px]'>to cart</button>
                </p>
            </div>
        </div>
    )
}