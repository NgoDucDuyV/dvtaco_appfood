import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
// layout mainlout
import MainLayout from '@/layouts/MainLayout'
import Home from '@/pages/main/HomePage.jsx'
import Menu from '@/pages/main/Menu'
import About from '@/pages/main/About'
import Shop from '@/pages/main/Shop'
import Blog from '@/pages/main/Blog'
import Page from '@/pages/main/Page'
import Contact from '@/pages/main/Contact'
import NotFound from '@/pages/main/NotFound'
import NotFoundMain from '@/pages/main/NotFoundMain'
const MainRouter = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path='home' element={<Home />} />
                <Route path='menu' element={<Menu />} />
                <Route path='about' element={<About />} />
                <Route path='shop' element={<Shop />} />
                <Route path='blog' element={<Blog />} />
                <Route path='page' element={<Page />} />
                <Route path='contact' element={<Contact />} />
                <Route path='*' element={<NotFoundMain />}/>
            </Route>
        </Routes>
        </>
    )
}

export default MainRouter
