// React
import React from 'react';

// Hình ảnh
import Logo from '@/assets/img/lododvtaco.png';
import CastMv from '@/assets/img/footer_img1_castmv.png';

// Icon
import {
    FaFacebook,
    FaTwitter,
    FaYoutube,
    FaFacebookMessenger,
} from 'react-icons/fa';

// UI & Thông báo
import { Button } from '@/components/ui/button/button';
import { Toaster, toast } from 'sonner';

//COMPONENT
const Footer = () => {
    return (
        <>
        <Toaster />
        <footer className="w-full bg-[var(--bg_footer)] h-auto relative">
            {/*Logo giữa viền*/}
            <div
            className="max-w-[1300px] mx-auto pt-[100px] flex justify-center items-center relative
                [&>span]:bg-[#303030] [&>span]:w-[48%] [&>span]:h-[1px] [&>span]:absolute [&>span]:z-0"
            >
            <span className="left-0" />
            <div className="w-[20%] min-w-[150px] m-auto z-[1] bg-[var(--bg_footer)]">
                <img
                className="min-w-[150px] w-[150px] m-auto"
                src={Logo}
                alt="Logo DVTaco"
                />
            </div>
            <span className="right-0" />
            </div>

            {/*Nội dung chính*/}
            <div
            className="text-white flex flex-wrap justify-center justify-between px-[30px] pb-[90px] pt-[30px] max-w-[1300px] mx-auto lg:flex-nowrap
                *:w-[330px] *:mt-10"
            >
            {/* Địa chỉ */}
            <div
                className="flex flex-col text-center text-[var(--color_text)] *:mt-2
                [&>p]:text-[15px] [&>p]:font-[500] [&>h2]:text-[20px]"
            >
                <h2 className="text-white font-[600]">ADDRESS</h2>
                <p>570 8th Ave,</p>
                <p>
                New York, NY 10018
                <br /> United States
                </p>
            </div>

            {/* Đặt bàn */}
            <div
                className="flex flex-col text-center text-[var(--color_text)] *:mt-2
                [&>p]:text-[15px] [&>p]:font-[500] [&>h2]:text-[20px]"
            >
                <h2 className="text-white font-[600]">BOOK A TABLE</h2>
                <p>
                Dogfood och Sliders foodtruck.
                <br />
                Under Om oss kan ni läsa
                </p>
                <h2 className="text-[var(--yellow_dv)] font-[600]">
                (850) 435-4155
                </h2>
            </div>

            {/* Giờ mở cửa */}
            <div
                className="flex flex-col text-center text-[var(--color_text)] *:mt-2
                [&>p]:text-[15px] [&>p]:font-[500] [&>h2]:text-[20px]"
            >
                <h2 className="text-white font-[600]">OPENING HOURS</h2>
                <p className="[&>span]:text-white">
                Monday – Friday: <span>8am – 4pm</span>
                <br />
                Saturday: <span>9am – 5pm</span>
                </p>
                {/* Mạng xã hội */}
                <ul
                className="flex flex-row mx-auto mt-3
                    [&>li]:w-[36px] [&>li]:h-[36px] [&>li]:rounded-full [&>li]:bg-white
                    [&>li:hover]:bg-[var(--yellow_dv)] [&>li]:transition-all [&>li]:duration-200 [&>li]:ease-in-out [&>li]:mx-1
                    [&>li>a]:flex [&>li>a]:w-full [&>li>a]:h-full [&>li>a]:justify-center [&>li>a]:items-center [&>li>a]:text-[12px] [&>li>a]:text-black"
                >
                <li>
                    <a href="#">
                    <FaFacebook />
                    </a>
                </li>
                <li>
                    <a href="#">
                    <FaTwitter />
                    </a>
                </li>
                <li>
                    <a href="#">
                    <FaYoutube />
                    </a>
                </li>
                <li>
                    <a href="#">
                    <FaFacebookMessenger />
                    </a>
                </li>
                </ul>
            </div>
            {/* Đăng ký nhận tin */}
            <div
                className="flex flex-col text-center text-[var(--color_text)] *:mt-2
                [&>p]:text-[15px] [&>p]:font-[500] [&>h2]:text-[20px]"
            >
                <h2 className="text-white font-[600]">NEWSLETTER</h2>
                <p>
                Subscribe to the weekly newsletter for all
                <br />
                the latest updates
                </p>
                <div
                className="p-[5px] w-full flex flex-row justify-between items-center border border-solid border-neutral-700
                    overflow-hidden rounded-sm mt-3"
                >
                <input
                    className="h-[40px] w-[170px] ml-5 outline-0 text-[15px] bg-transparent text-white"
                    type="text"
                    placeholder="Your Email..."
                />
                <Button
                    className="rounded-[5px] font-[700] h-[45px]"
                    onClick={() => toast('Đã gửi email!')}
                    variant="yellowbg_text"
                >
                    SUBSCRIBE
                </Button>
                </div>
            </div>
            </div>

            {/*Phần cuối footer*/}
            <div className="bg-[#00A850] w-full">
            <div
                className="flex flex-wrap sm:flex-row items-center justify-between px-[30px] py-[30px] max-w-[1300px] mx-auto
                *:h-full *:mx-auto"
            >
                <div className="flex flex-row text-white text-[14px] items-center text-center sm:text-left">
                Copyright © 2022{' '}
                <span className="text-[var(--yellow_dv)] ml-1">pocofood.</span>{' '}
                All Rights Reserved.
                </div>
                <div className="flex flex-row items-center mt-3 sm:mt-0">
                <img src={CastMv} alt="Payment methods" />
                </div>
            </div>
            </div>
        </footer>
        </>
    );
};

export default Footer;
