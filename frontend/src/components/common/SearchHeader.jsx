import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

// icon
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";


const SearchHeader = ({className,handerClick}) => {
    return (
        <>
        <div className={`flex w-ull h-full flex-row w-full h-full transition-all duration-300 ease-out absolute bg-white z-[100] ${className}`}>
            <div className={`flex flex-row flex-[1] h-full items-center pl-10`}>
                <input className={`text-[25px] outline-0 w-full`} type="text" placeholder='Search Product...' />
            </div>
            <div className='h-full w-[100px] flex justify-center items-center'>
                <IoClose onClick={handerClick} className='text-[50px] hover:text-[var(--yellow_dv)] transition-colors'/>
            </div>
        </div>
        </>
    )
}

export default SearchHeader
