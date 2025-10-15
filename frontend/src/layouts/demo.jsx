    import React, { useState, useRef } from "react";
    import { motion } from "framer-motion";

    const images = [
    "https://picsum.photos/id/1015/800/500",
    "https://picsum.photos/id/1016/800/500",
    "https://picsum.photos/id/1018/800/500",
    "https://picsum.photos/id/1020/800/500",
    "https://picsum.photos/id/1024/800/500",
    ];

    export default function ImageSlider() {
    const [current, setCurrent] = useState(0);
    const sliderRef = useRef(null);

    const handleDragEnd = (event, info) => {
        const offset = info.offset.x;
        if (offset > 80) {
        // Vuốt sang phải
        setCurrent((prev) => Math.max(prev - 1, 0));
        } else if (offset < -80) {
        // Vuốt sang trái
        setCurrent((prev) => Math.min(prev + 1, images.length - 1));
        }
    };

    return (
        <div className="w-full h-[500px] flex justify-center items-center overflow-hidden select-none">
        <motion.div
            ref={sliderRef}
            className="flex gap-6 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            animate={{ x: -current * 340 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
            {images.map((img, index) => (
            <motion.div
                key={index}
                className="w-[300px] h-[400px] rounded-2xl overflow-hidden shadow-xl flex-shrink-0"
                animate={{
                scale: index === current ? 1.1 : 0.9,
                opacity: index === current ? 1 : 0.6,
                }}
                transition={{ duration: 0.3 }}
            >
                <img
                src={img}
                alt={`slide-${index}`}
                className="w-full h-full object-cover pointer-events-none"
                />
            </motion.div>
            ))}
        </motion.div>
        </div>
    );
    }
