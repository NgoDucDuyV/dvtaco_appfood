import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
// import { Toaster, toast } from 'sonner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <>
        {/* header đầu trang */}
            <Header />
            {/* Điều hướng trang*/}
            <main className='main_content relative z-0'>
                <Outlet/>
            </main>
        {/* footer trang dvtaco */}
            <Footer/>
        </>
    )
}

export default MainLayout
