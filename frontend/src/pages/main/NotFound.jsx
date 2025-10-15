import React from 'react'
import CONFIG from '@/config'
import ImgNotFound from '@/assets/img/404_NotFound.png'
import { useNavigate } from 'react-router-dom'
const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full h-[100vh] flex'>
            <div className='flex mx-auto my-auto flex-col px-10 py-5'>
                <div className='w-full flex justify-center items-center' >
                    <img className='w-100' src={ ImgNotFound } alt="" />
                </div>
                <div className='text-center max-w-100 font-[600] text-shadow-lg'>
                    <p>🚫 Không thể truy cập vào trang này xin mời quay lại trang chủ</p>
                </div>
                <div className='flex justify-center mt-5'>
                    <a onClick={() => navigate('/')} className='inline-block bg-[#B3EBC3] px-5 py-2 font-[700] rounded-2xl hover:text-white hover:bg-[#7CC190] transition-all duration-200 ease-in-out hover:translate-y-[-2px] hover:shadow-xl'>Về trang chủ</a>
                </div>
            </div>
        </div>
    )
}

export default NotFound
