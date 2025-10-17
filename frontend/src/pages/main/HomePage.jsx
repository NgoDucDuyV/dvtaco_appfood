import React from 'react'
import  Botmi  from "@/assets/img/home/h1_botmi.png";
import  Piza  from "@/assets/img/home/h1_pizza.png";
import  Hatbot  from "@/assets/img/home/h1_shape-6-500x330.png";
import  Laxanhnam  from "@/assets/img/home/h1_shape-7.png";
import  Cachua  from "@/assets/img/home/h1_tomato.png";
import  Rauxanh from "@/assets/img/home/h2_la_xanh.png";
import  Laxanh from "@/assets/img/home/h2_shape-4.png";
import Nam from "@/assets/img/home/h2_shape-5.png";


// compolents
import { Button } from '@/components/ui/button/button';
const HomePage = () => {
    return (
        <>
        {/* elementor-background-overlay */}
        <div className="h-auto w-full bg-[#222222] relative overflow-hidden px-[10px]">

            {/* Dark Radial Glow Background */}
            <div
                className="absolute inset-0 z-[0] overflow-hidden"
                style={{
                backgroundImage: `radial-gradient(circle 500px at 50% 200px, #3e3e3e, transparent)`,
                }}
                />
                
            {/* Your Content/Components */}
            <div className=' absolute right-0 h-full overflow-hidden text-center z-[0]'>
                    <img className='object-cover h-[110%]' src={Botmi} alt="" />
            </div>
                <div className={`flex text-[16px] relative flex-row min-h-[800px] max-w-[1300px] px-5 w-full z-[10] mx-auto text-white 
                    *:flex *:flex-col *:justify-center *:flex-1`}>
                    {/* img nền */}
                    <div className='z-1 relative'>
                        <div className=' absolute left-[-70%]'>
                            <img src={ Laxanhnam } alt="" />
                        </div>
                        <h1 className='text-[3.2em] font-[800] [letter-spacing:0.1em] [line-height:1em] transform scale-y-[1.4] mb-8 text-shadow-lg'>
                            UNLIMITED<br />
                            MEDIUM <span className='text-[var(--yellow_dv)]'>PIZZAS</span>
                        </h1>
                        <h2 className='text-[2em] text-[var(--green_dv)] font-[700] text-shadow-lg'>Medium 2-topping* pizza</h2>
                        <p className='text-[1.1em] text-shadow-lg mb-10'>*Additional charge for premium toppings. Minimum of 2 required.</p>
                        <div className='flex flex-row items-center'>
                            <Button variant={"yellowbg_text"} className={'text-[0.9em] font-[600] mr-5'}>
                                ORDER NOW
                            </Button>
                            <div className='font-[600] text-shadow-lg flex flex-row items-center'>
                                <span className='text-[2.2em] text-[var(--green_dv)]'>125.000VND</span>
                                <span className='text-[0.9em] text-neutral-200 opacity-[0.8] line-through translate-y-[-0.4em]'>225.000VND</span>
                            </div>
                        </div>
                    </div>
                    <div className='relative z-[1] 
                    *:absolute text-[100px]'>
                        <div className=' w-[4em]'>
                            <img src={Hatbot} alt="" />
                        </div>
                        <div className=' w-[3.5em] top-[0] left-[-3em]'>
                            <img src={Cachua} alt="" />
                        </div>
                        <div className='w-[2.5em] bottom-[0.5em]'>
                            <img src={Rauxanh} alt="" />
                        </div>
                        <div className='w-[4em] right-[-4em] top-[1em]'>
                            <img src={Laxanh} alt="" />
                        </div>
                        <div className='right-[-1em] bottom-[1em]'>
                            <img src={Nam} alt="" />
                        </div>
                        <div>
                            <img className='w-[10em]' src={Piza} alt="" />
                        </div>
                    </div>
            </div>
        </div>
        </>
    )
}
export default HomePage
