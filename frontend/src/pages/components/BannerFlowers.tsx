import React from 'react'
import bannerImage from '../../assets/images/bannerFlowers.png'

const BannerFlowers: React.FC = () => {
    const divStyle = {
        background: 'linear-gradient(180deg, #091E26 0%, #00131C 100%)',
    }

    return (
        <div className='container h-2/6 w-full mx-auto mt-4 mb-12 relative static'>
          <img
              className='inline-block'
              src={bannerImage}
              alt={'flowers'}
          />
          <div className='rounded-lg flex w-10/12 m-auto h-4/6' style={divStyle}>
            <div className='text-slate-50 my-auto mr-24 ml-auto'>
                <p className='font-medium text-4xl leading-10'>Unrivaled choice</p>
                <span className='font-normal text-xs leading-4'>Feel cared for with selected flowers</span>
            </div>
          </div>
        </div>
    )
}

export default BannerFlowers