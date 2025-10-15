import React from 'react'

const NotFoundMain = () => {
    return (
        <div className='w-full h-full bg-[#FBF7E8] flex py-10 sm:py-40'> 
            <div className={`text-center m-auto p-10`}>
                <img src="../../../public/404_dvtaco.png" alt="" />
                <div className='flex flex-col justify-center '>
                    <h1 className='text-[60px] font-[700] my-6'>Oop, that link is broken.</h1>
                    <p className='text-[20px] leading-[2]'>Page doesn’t exist or some other error occured. Go to our<br />
                        <span><a className='text-[var(--green_dv)] transition-colors hover:text-[var(--yellow_dv)]' href="/">Home</a></span> page or go back to <span><a className={`text-[var(--yellow_dv)] hover:text-yellow-600 transition-colors`} href="./">Previous page</a></span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NotFoundMain
