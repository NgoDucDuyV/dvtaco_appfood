import React from 'react'
import  Botmi  from "@/assets/img/home/h1_botmi.png";
import  Piza  from "@/assets/img/home/h1_pizza.png";
import  Hatbot  from "@/assets/img/home/h1_shape-6-500x330.png";
import  Laxanhnam  from "@/assets/img/home/h1_shape-7.png";
import  Cachua  from "@/assets/img/home/h1_tomato.png";
import  Rauxanh from "@/assets/img/home/h2_la_xanh.png";
import  Laxanh from "@/assets/img/home/h2_shape-4.png";
import  Nam  from "@/assets/img/home/h2_shape-5.png";
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
                <div className={`flex flex-row min-h-[800px] max-w-[1300px] px-5 w-full z-[10] mx-auto text-white`}>
                    {/* img nền */}
                    <div className=' absolute right-0 h-full overflow-hidden text-center z-[0]'>
                            <img className='object-cover h-[110%]' src={Botmi} alt="" />
                    </div>
                    <div className='z-1'>
                        <h1>
                            UNLIMITED<br />
                            MEDIUM <span>PIZZAS</span>
                        </h1>
                        <h2>Medium 2-topping* pizza</h2>
                        <p>*Additional charge for premium toppings. Minimum of 2 required.</p>
                        <div>
                            <button>ORDER NOW</button>
                            <h3>
                                $12.99
                                <span>$19.99</span>
                            </h3>
                        </div>
                    </div>
                    <div className='relative z-[1]*:absolute'>
                        <div>
                            <img src={Hatbot} alt="" />
                        </div>
                    </div>
            </div>
        </div>
        </>
    )
}
export default HomePage
