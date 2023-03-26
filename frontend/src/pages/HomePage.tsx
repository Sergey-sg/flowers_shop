import React from 'react'
import logo from '../assets/images/shopLogo.png'

const HomePage: React.FC = () => {
    return (
        <>
            <img
              className="mx-5 mb-2 float-left rounded-full"
              width={'100px'}
              src={logo}
              alt={'flower logo'}
            />
            <div>Home Page</div>
        </>
    )
}

export default HomePage