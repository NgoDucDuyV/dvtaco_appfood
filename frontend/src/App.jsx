import React from "react"
// import {Toaster,toast} from 'sonner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigate } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout"
import NotFound from "./pages/main/NotFound"
import MainRouter from "./routes/MainRouter";
import ImageSlider from '@/layouts/demo.jsx'
function App() {

  return (
    <>
      {/* <ImageSlider/> */}
      <BrowserRouter>
        <Routes>
          {/* Điều hướng mặc định */}
          <Route path="/" element={<Navigate to='/dvtaco' replace/>} />
          {/* HomePage Dvtaco */}
          <Route path="/dvtaco/*" element={<MainRouter/>}/>
          {/* điều hướng trang khôgn tồn tại */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
