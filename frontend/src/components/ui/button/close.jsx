import React from 'react'
import { IoClose } from "react-icons/io5";
import { FaMinus, FaChevronDown } from "react-icons/fa";

const Close = () => {
    return (
        <div
            className="flex flex-row justify-between items-center w-[65px] relative group hover:text-[var(--yellow_dv)] 
            [&>.icon]:absolute [&>.icon]:right-0 [&>.icon]:text-[18px] [&>.icon]:transition-all [&>.icon]:duration-300 [&>.icon]:ease-in-out"
            >
            Close
            <IoClose className="icon group-hover:opacity-0 group-hover:translate-x-[-5px] group-hover:translate-y-[5px]" />
            <FaMinus className="icon translate-x-[-5px] translate-y-[5px] opacity-0 group-hover:translate-x-[0px] group-hover:translate-y-[0px] group-hover:opacity-[100]" />
        </div>
    )
}

export default Close
