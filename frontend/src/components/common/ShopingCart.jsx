import { React, useState , useEffect} from 'react'
import axios from 'axios';

// compolent ui
import { Button } from '../ui/button/button'
import Close from '@/components/ui/button/close.jsx';
import { Toaster, toast } from 'sonner'
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
import { IoClose } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";

const ShopingCart = () => {
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
    // tổng tiền giỏ hàng shopping cart
    const sumprice = () => {
        if (isproduct) {
            let price = 0;
            isproduct.forEach((product) => {
                price += product.price;
            })            
            return price
        }
    }
    // chuyển số về hàng nghìn 
    const fomatVN = (value) => {
        return value.toLocaleString('vi-VN');
    }
    // render list product
    const render = (pruducts) => {
        return pruducts.map((pruduct) => {
            return (
            <li className='flex flex-row items-center py-[10px] border-b-[1px] border-b-neutral-300'>
                <div className='hover:scale-[1.2] hover:text-red-500 transition-all duration-300 ease-out active:scale-[1] mr-2'>
                    <IoCloseCircleOutline/>
                </div>
                <div className='w-[60px] h-[60px] rounded-3xl bg-[#F7F4EF] mr-[15px]'>
                        <img src={`../../../public/product/${pruduct.imageUrl}`} alt="" className='hover:scale-[1.1] transition-all duration-300 ease-out drop-shadow-xl/25 hover:drop-shadow-yellow-300 active:scale-[1] cursor-pointer' />
                </div>
                <div className='flex flex-col'>
                    <a className=' cursor-pointer text-[16px] text-neutral-600 transition-all duration-200 ease-out hover:text-[var(--yellow_dv)]'>Black Coffee</a>
                    <div className='flex flex-row items-center text-[14px]
                    [&_*]:mr-2'>
                            <span>{pruduct.quantity}</span>
                        <IoClose />
                            <span className='font-thin text-[var(--yellowdm)]'>{(pruduct.price.toLocaleString('vi-VN'))}VND</span>
                    </div>
                </div>
            </li>);
        })
    }
    return (
        <>
            {/* header */}
            <div className={`header flex flex-row items-center justify-between border-b-[1px] border-solid border-b-neutral-300 px-5 py-4`}>
                <h2 className={`text-[20px] font-[600]`}>Shopping cart</h2>
                <SheetClose className={` outline-0`}>
                    <Close/>
                </SheetClose>
            </div>
            {/*  content*/}
            <div className={`flex flex-[1] flex-col px-[15px] h-full overflow-hidden`}>
                {/* dah sách lít product */}
                <ul className='flex-[1] flex flex-col overflow-y-auto '>
                    {isproduct.length > 0 ? (render(isproduct)) : (
                        <li className={`text-[20px] text-neutral-400 m-[20px] text-center`}>No products in the cart.</li>
                    )}
                </ul> 
            {/* tổng tiền điều hướng thanh toán */}
                <div className={`flex flex-col `}>
                    {/* sum price shop ping cart */}
                    <div className={`flex flex-row w-full justify-between py-[20px] border-t-[1px] border-soli border-t-stone-300
                        [&_.subtotal,&_.pricesubtotal]:font-[600] `}>
                        <h2 className={`subtotal`}>Subtotal:</h2>
                        <span className={`pricesubtotal`}>{fomatVN(sumprice())} VND</span>
                    </div>
                    {/* nút đièu hướng */}
                    <Button className={`cursor-pointer hover:bg-[var(--green_dv)] hover:shadow-xl/20 hover:translate-y-[-2px] active:scale-[0.9] transition-discrete`} variant={`yellowbg_text`}>
                        CHECKOUT
                    </Button>
                    <Button className={`cursor-pointer  my-[15px] hover:shadow-xl/20 hover:translate-y-[-2px] active:scale-[0.9] transition-discrete`} variant={`outline`}>
                        VIEWS CART
                    </Button>
                </div>
            </div>
        </>
        )
}

export default ShopingCart
