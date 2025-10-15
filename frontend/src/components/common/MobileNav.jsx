import React,{useState, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
// ui components
import { Button } from '@/components/ui/button/button.jsx';
import Close from '@/components/ui/button/close.jsx';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
// import Close  from "@/components/ui/close.jsx";
// 👉 Dữ liệu menu
const navItems = [
    { title: "Home", submenu: ["Home 1", "Home 2", "Home 3", "Home 4"] },
    { title: "Menu" },
    { title: "About" },
    { title: "Shop", submenu: ["Shop 1", "Shop 2", "Shop 3", "Shop 4"] },
    { title: "Blog", submenu: ["Blog 1", "Blog 2", "Blog 3", "Blog 4"] },
    { title: "Page", submenu: ["Page 1", "Page 2", "Page 3", "Page 4"] },
    { title: "Contact" },
];

const MobileNav = () => {
    const [ submenu, setsubmenu ] = useState(null);
    const showSubmenu = (index) => {
        setsubmenu(submenu === index ? null : index )
    }
    return (
        <> 
            {/* close */}
            <div className={`flex flex-row justify-end`}>
            <SheetClose className={`outline-0`}>
                <Close className={`absolute top-0 right-0`} />
            </SheetClose>
            </div>
            {/* Danh sách menu */}
            <ul
                className="flex flex-col mt-[10px]
                *:border-solid *:border-b-[1px] *:border-neutral-900 *:px-[10px] *:flex *:justify-between *:relative"
            >
                {navItems.map((item, index) => (
                <li
                    key={index}
                    onClick={(el) => {
                        el.preventDefault();
                        el.stopPropagation();
                        console.log('da click');
                    }}
                    className="[&:hover>div>a]:text-[var(--yellow_dv)] transition-colors flex flex-col group"
                >
                    {/* Hàng chính */}
                    <div className="flex flex-row items-center justify-between h-[42px] cursor-pointer">
                        <a className="text-[15px] transition-colors cursor-pointer group-active:text-[14px]">
                            {item.title}
                        </a>
                        {item.submenu && (
                            <div onClick={(el) => {
                                el.stopPropagation();
                                showSubmenu(index)
                            }}
                            className={`w-[50px] h-[30px] flex justify-center items-center rounded-[10px] transition-colors 
                            group hover:bg-[var(--yellow_dv)] icondow-checked:rotate-x-180 ${submenu === index ? "bg-[var(--yellow_dv)]" : ""}`}
                            >
                                <FaChevronDown className={`icondow transition-all duration-300 ease-out
                                ${submenu === index ? "rotate-180" : "rotate-0"}`} />
                            </div>
                        )}
                    </div>

                    {/* Submenu */}
                    {item.submenu && (
                    <ul
                        className={`inline-block w-[90%] ml-2 overflow-hidden transition-all duration-300 ease-out
                        *:border-solid *:border-b-[1px] *:border-neutral-800 *:h-[42px] *:p-[10px] *:flex *:justify-between *:relative ${submenu === index ? "h-[200px]" : "h-[0px]"}`}
                    >
                        {item.submenu.map((sub, subIndex) => (
                        <li key={subIndex} className="[&:hover>a]:text-[var(--yellow_dv)] cursor-pointer">
                            <a className="cursor-pointer transition-colors">{sub}</a>
                        </li>
                        ))}
                    </ul>
                    )}
                </li>
                ))}
            </ul>
        {/* </div> */}
        </>
        );
    };

export default MobileNav;
