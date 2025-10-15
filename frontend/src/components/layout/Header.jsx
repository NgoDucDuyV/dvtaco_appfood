// React & Router
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// UI Components & Notifications
import { Button } from '@/components/ui/button/button.jsx';
import Close from '@/components/ui/button/close.jsx';
import { Toaster, toast } from 'sonner';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
// Icons
import { LuSmartphone, LuMapPinCheck } from 'react-icons/lu';
import {
    FaFacebook,
    FaTwitter,
    FaYoutube,
    FaFacebookMessenger,
    FaChevronDown,
    FaSearch,
    FaUser,
    FaHeart,
    FaShoppingCart,
} from 'react-icons/fa';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { IoCall } from 'react-icons/io5';
import { ToolCase } from 'lucide-react';
// Assets (Images)

import Logo from '@/assets/img/lododvtaco.png';
import Callship from '@/assets/img/callshipper.png';

// Layout Components
import ShopingCart from '../common/ShopingCart.jsx';
import MobileNav from '../common/MobileNav.jsx';
import SearchHeader from '../common/SearchHeader.jsx';



const Header = () => {
    const navigate = useNavigate();
    // API get pruduct
    const API = 'http://localhost:3001'
    const [isproduct, setproduct] = useState([]);
    const getPrucudct = async () => {
        await axios.get(`${API}/product`)
            .then(({ data }) => {
            setproduct(data)
        })
        .catch(() => {
        setproduct([])
        console.log('khôgn có sản phầm');
        })
    }
    useEffect(() => {
        getPrucudct();
    }, []);
    // scroll
    const [isScroll, setScroll] = useState(false)    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    });
    //  click seach
    const [isseach,setseach] = useState(false);
    const clickSeach = (e) => {
        e.preventDefault();
        setseach(prev => !prev);
    }
    return (
        <>
            <Toaster />
            {/* header top link call */}
            <header className='w-full h-auto flex justify-center bg-black text-white px-5 py-3'>
                <div className='flex justify-between items-center w-full max-w-[1300px]'>
                    {/* ul trái */}
                    <ul className=' sm:*:text-[1em] flex flex-row flex-wrap *:flex *:items-center [&>li>.icon]:text-[1.3em] [&>li>span]:ml-4 *:text-[0.6em] '>
                        <li className='mr-5'>
                            <LuSmartphone name='phonne' className='icon' />
                            <span>CAAL VN+:0974179187</span>
                        </li>

                        <li onClick={() => toast('anh yeu em')}>
                            <LuMapPinCheck name='mappin' className='icon' />
                            <span>17 Dvtaco Mactoin</span>
                        </li>
                    </ul>
                    {/* ul phải */}
                    <ul className='[&_.itemMenu]text-[15px] flex [&_.itemMenu]:ml-1 [&_.itemMenu]:transition-colors sm:[&_.itemMenu]:ml-3 sm:[&_.itemMenu]:text-[25px] 
                    [&_.itemMenu:hover]:text-[var(--yellow_dv)] '>
                        <li className='itemMenu'>
                            <a href="#"><FaFacebook /></a>
                        </li>
                        <li className='itemMenu'>
                            <a href="#"><FaTwitter /></a>
                        </li>
                        <li className='itemMenu'>
                            <a href="#"><FaYoutube /></a>
                        </li>
                        <li className='itemMenu'>
                            <a href="#"><FaFacebookMessenger /></a>
                        </li>
                    </ul>
                </div>
            </header>

            {/* header Chính Container */}
            <header className={`w-full bg-white text-black text-[1em] px-4 py-2 flex justify-center border border-solid border-b-neutral-100 shadow-lg sticky top-0 overflow-hidden z-[100] transition-all duration-300 ease 
                ${isScroll ? 'min-h-[70px]' : 'min-h-[120px]'}`}>
                {/*tìm kiếm hẻader  */}
                <SearchHeader handerClick={clickSeach} className={`${isseach ? 'block' : 'hidden'}`} />
                {/* ui khi chuyển tablet */}
                <div className='flex flex-row items-center w-full max-w-[1300px] justify-between'>
                    <div className='flex flex-col w-full h-auto lg:hidden'>
                        <div className='w-full flex flex-wrap flex-row items-center justify-between h-auto md:h-full'>
                            <Sheet>
                                <div className='text-[35px] cursor-pointer hover:text-[var(--yellow_dv)] hover:scale-[1.2] transition-all duration-150 ease-in'>
                                    {/* click hieenj menumobile */}
                                    <SheetTrigger>
                                        <HiOutlineMenuAlt1 />
                                    </SheetTrigger>
                                </div>
                                {/* content menmobile */}
                                <SheetContent side='left' className={`w-full max-w-[300px] h-[100vh] overflow-y-auto z-100 p-3 border-l-0 bg-black text-white `}>
                                    {/* close menumobile */}
                                    <MobileNav/>   
                                </SheetContent>
                            </Sheet>
                            <div className='w-[125px] min-w-[125px] cursor-pointer'>
                                <a href="#">
                                    <img src={ Logo } alt="" />
                                </a>
                            </div>
                            <div className='text-[35px] cursor-pointer hover:text-[var(--yellow_dv)] hover:scale-[1.2] transition-all duration-150 ease-in *:rotate-y-180'>
                                <IoCall/>
                            </div>
                        </div>

                        <div className={`flex flex-wrap w-full justify-end flex-row md:mt-0 md:hidden 
                            ${isScroll ? 'h-0 opacity-0' : 'h-auto opacity-[100]'}`}>
                            <div className='flex flex-row items-center mr-5 flex-wrap '>
                                <img className='hidden w-[45px] sm:block' src={Callship} alt="" />
                                <div className='flex flex-col ml-2'>
                                    <p className='text-[13px] text-[var(--color_text)]'>Call and Order in</p>
                                    <h2 className='text-[16px] text-[var(--yellow_dv)] font-[600] sm:text:-[24px]'>+1 718-904-4450</h2>
                                </div>
                            </div>
                            <ul className='float-right flex flex-wrap flex-row items-center
                            [&_.itemMenu]:mr-2
                            [&_.itemMenu>a]:relative [&_.itemMenu>a]:w-[48px] [&_.itemMenu>a]:h-[48px] [&_.itemMenu>a]:flex [&_.itemMenu>a]:items-center [&_.itemMenu>a]:justify-center [&_.itemMenu>a]:text-[var(--color-black)] [&_.itemMenu>a]:rounded-[50%] [&_.itemMenu>a]:overflow-hidden 
                            [&_.itemMenu>a]:border-[1px] [&_.itemMenu>a]:border-solid [&_.itemMenu>a]:border-neutral-300 [&_.itemMenu>a:hover]:bg-[var(--yellow_dv)] [&_.itemMenu>a:hover]:border-[0px] [&_.itemMenu>a]:transition-all [&_.itemMenu>a]:duration-200 [&_.itemMenu>a]:ease-in-out [&_.itemMenu>a:hover]:text-white [&_.itemMenu>a:hover>span]:scale-[1.3]
                            [&_.itemMenu>a>.icon]:m-auto [&_.itemMenu>a>.icon]:text-[1.3em]
                            '>
                                <li className='itemMenu'>
                                    <a onClick={clickSeach} href='#'>
                                        <FaSearch className='icon' />
                                    </a>
                                </li>
                                <li className='itemMenu hidden'>
                                    <a href="" >
                                        <FaUser className='icon' />
                                    </a>
                                </li>
                                <li className='itemMenu hidden'>
                                    <a>
                                        <FaHeart className='icon' />
                                        <span className=' inline-block w-auto h-[13px] bg-[var(--yellowdm)] px-[3px] rounded-[5px] text-center text-[10px] absolute top-[20%] right-[25%] shadow-lg font-[600] transition-all duration-200 ease-in'>
                                            13
                                        </span>
                                    </a>
                                </li>   
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <li className='itemMenu'>
                                            <a>
                                                <FaShoppingCart className='icon' />
                                                <span className=' inline-block w-auto h-[13px] bg-[var(--yellowdm)] px-[3px] rounded-[5px] text-center text-[10px] absolute top-[20%] right-[25%] shadow-lg font-[600] transition-all duration-200 ease-in'>
                                                    {isproduct.length}
                                                </span>
                                            </a>
                                        </li>
                                    </SheetTrigger>
                                    <SheetContent className={`border-l-0 h-[100vh] w-[300px] max-w-[300px]`}>
                                        <ShopingCart/>
                                    </SheetContent>
                                </Sheet>
                            </ul>
                        </div>
                    </div>


                    {/* logo  */}
                    <div className=' hidden w-[125px] lg:block'>
                        <img src={Logo} alt="logo dvtaco" />
                    </div>
                    {/* menu điều hường trang */}
                    <ul className='hidden flex-row items-center justify-between mx-5 flex-wrap *:transition-all *:duration-300 *:ease-in-out lg:flex
                    [&>li]:ml-5 [&>li:hover>a>.icon]:rotate-180 [&>li:hover>a>.icon]:text-[var(yellow_dv)] [&>li:hover>a]:text-[var(--yellow_dv)] [&>li]:cursor-pointer
                    [&>li>a]:relative [&>li>a]:flex [&>li>a]:flex-row [&>li>a]:items-center [&>li>a]:font-[600] [&>li>a>.icon]:mt-[4px] [&>li>a>.icon]:transition-all [&>li>a>.icon]:duration-100 [&>li>a>.icon]:ease-in [&>li>a>.icon]:cursor-pointer'>
                        <li onClick={() => navigate("/dvtaco/home")}>
                            <a>Home<FaChevronDown className='icon' size='10px'/></a>
                        </li>
                        <li onClick={() => navigate("/dvtaco/menu")}>
                            <a>Menu</a>
                        </li>
                        <li onClick={() => navigate("/dvtaco/about")}>
                            <a>About</a>    
                        </li>
                        <li onClick={() => navigate("/dvtaco/shop")}>
                            <a>Shop<FaChevronDown className='icon' size='10px'/></a>
                        </li>
                        <li onClick={() => navigate("/dvtaco/blog")}>
                            <a>Blog<FaChevronDown className='icon' size='10px'/></a>
                        </li>
                        <li onClick={() => navigate("/dvtaco/page")}>
                            <a>Page<FaChevronDown className='icon' size='10px'/></a>
                        </li>
                        <li onClick={() => navigate("/dvtaco/contact")}>
                            <a className='text-[var(--yellow_dv)]'>Contact</a>
                        </li>
                    </ul>
                    {/* liên hệ ship */}
                    <div className='hidden flex-row items-center mr-5 flex-wrap lg:flex'>
                        <img className='w-[45px]' src={Callship} alt="" />
                        <div className='flex flex-col ml-2'>
                            <p className='text-[13px] text-[var(--color_text)]'>Call and Order in</p>
                            <h2 className='text-[24px] text-[var(--yellow_dv)] font-[600]'>+1 718-904-4450</h2>
                        </div>
                    </div>
                    {/* menu điều hướng bên phải */}
                    <div className='hidden flex-row items-center lg:flex'>
                        <ul className='flex flex-row items-center
                        [&_.itemMenu]:mr-2
                        [&_.itemMenu>a]:relative [&_.itemMenu>a]:w-[48px] [&_.itemMenu>a]:h-[48px] [&_.itemMenu>a]:flex [&_.itemMenu>a]:items-center [&_.itemMenu>a]:justify-center [&_.itemMenu>a]:text-[var(--color-black)] [&_.itemMenu>a]:rounded-[50%] [&_.itemMenu>a]:overflow-hidden 
                        [&_.itemMenu>a]:border-[1px] [&_.itemMenu>a]:border-solid [&_.itemMenu>a]:border-neutral-300 [&_.itemMenu>a:hover]:bg-[var(--yellow_dv)] [&_.itemMenu>a:hover]:border-[0px] [&_.itemMenu>a]:transition-colors [&_.itemMenu>a:hover]:text-white [&_.itemMenu>a:hover>span]:scale-[1.3]
                        [&_.itemMenu>a>.icon]:m-auto [&_.itemMenu>a>.icon]:text-[1.3em]
                        '>
                            <li className={`itemMenu`}>
                                <a href='#' onClick={clickSeach}>
                                    <FaSearch className='icon' />
                                </a>
                            </li>
                            <li className={`itemMenu`}>
                                <a href="" >
                                    <FaUser className='icon' />
                                </a>
                            </li>
                            <li className={`itemMenu`}>
                                <a href="" >
                                    <FaHeart className='icon' />
                                    <span className=' inline-block w-auto h-[13px] bg-[var(--yellowdm)] px-[3px] rounded-[5px] text-center text-[10px] absolute top-[20%] right-[25%] shadow-lg font-[600] transition-all duration-200 ease-in'>
                                        13
                                    </span>
                                </a>
                            </li>   
                            <Sheet>
                                <SheetTrigger asChild>
                                    <li className={`itemMenu`}>
                                        <a>
                                            <FaShoppingCart className='icon' />
                                            <span className=' inline-block w-auto h-[13px] bg-[var(--yellowdm)] px-[3px] rounded-[5px] text-center text-[10px] absolute top-[20%] right-[25%] shadow-lg font-[600] transition-all duration-200 ease-in'>
                                                {isproduct.length}
                                            </span>
                                        </a>
                                    </li>
                                </SheetTrigger>
                                <SheetContent className={`border-l-0 h-[100vh] w-[300px] max-w-[300px]`}>
                                    <ShopingCart/>
                                </SheetContent>
                            </Sheet>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
