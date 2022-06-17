import React from 'react'
import deskopImg from '../assets/images/image-hero-desktop.png'
import mobileImg from '../assets/images/image-hero-mobile.png'
import client1 from '../assets/images/client-audiophile.svg'
import client2 from '../assets/images/client-databiz.svg'
import client3 from '../assets/images/client-maker.svg'
import client4 from '../assets/images/client-meet.svg'

function Main() {
    return (
        <>
            <div className='container '>
                <div className='md:flex md:flex-row-reverse md:mt-4'>

                    <div className=''>
                        <img className='sr-only md:not-sr-only md:max-w-md ' src={deskopImg} alt="img main" />
                        <img className='md:sr-only' src={mobileImg} alt="img main" />
                    </div>

                    <div className='p-8 text-center justify-between my-8   md:mx-32'>
                        <h1 className='text-4xl font-bold md:text-7xl'>Make Remote Work</h1>
                        <p className='text-center m-4 md:text-lg md:mt-6'> Get your team in sync, no matter your location. Streamline processes, 
                            create team rituals, and watch productivity soar.</p>
                        <button className='btn btn-dark hover:opacity-20 m-7 rounded-2xl shadow-xl'>Learn More</button>
                        <div className='flex flex-row items-center justify-center md:m-16'>
                            <img className='w-16 m-2 md:w-24' src={client1} alt='cl1' />
                            <img className='w-16 m-2 md:w-24' src={client2} alt='cl2' />
                            <img className='w-16 m-2 md:w-24' src={client3} alt='cl3' />
                            <img className='w-16 m-2 md:w-24' src={client4} alt='cl4' />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Main