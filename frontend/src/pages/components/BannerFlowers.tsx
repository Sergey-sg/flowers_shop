import React from 'react'
import bannerImage from '../../assets/images/bannerFlowers.png'

const BannerFlowers: React.FC = () => {
    const divStyle = {
        background: 'linear-gradient(180deg, #091E26 0%, #00131C 100%)',
    }

    return (
      <div className='container'>
        <div className='h-3/6 w-full mx-auto pt-14 px-20 mb-12 relative'>
          <img 
              className='absolute top-0 left-0 w-2/4'
              style={{ maxWidth: '45%'}}
              src={bannerImage}
              alt={'flowers'}
          />
          <div className='rounded-lg flex m-auto' style={divStyle}>
            <div className='text-slate-50 my-auto py-28 mr-40 ml-auto'>
                <p className='font-medium text-4xl leading-10'>Unrivaled choice</p>
                <span className='font-normal text-xs leading-4'>Feel cared for with selected flowers</span>
            </div>
          </div>
        </div>
      </div>
    )
}

export default BannerFlowers