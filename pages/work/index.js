// components
// import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';


const Work = () => {

    const heightStyle = {
        height: "36rem",
    }

    const [slides, setSlides] = useState([]);

    useEffect(() => {
        const fetchSlides = async () => {
            try {
                const response = await fetch('/api/getData');
                const data = await response.json();
                setSlides(data);
            } catch (error) {
                console.error('Error fetching slides:', error);
            }
        };

        fetchSlides();
    }, []);

    // return (
    //     <div className='h-full bg-primary/30 py-6 md:py-24 items-center'>
    //         <Circles />
    //         <div className='container mx-auto'>
    //             <div className='flex flex-col xl:flex-row gap-x-8'>
    //                 <motion.div
    //                     variants={fadeIn('down', 0.6)}
    //                     initial='hidden'
    //                     animate='show'
    //                     exit='hidden'
    //                     className='w-full xl:max-w-[100%]'
    //                 >
    //                     <Swiper
    //                         spaceBetween={10}
    //                         className='h-[100%] sm:h-[580px] md:h-[480px] lg:h-[580px]' // Increase height for different screen sizes
    //                     >
    //                         <SwiperSlide>
    //                             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center overflow-y-auto' style={heightStyle}>
    //                                 {slides.map((slide) => (
    //                                     <div key={slide.id} className='relative rounded-lg flex items-center justify-center group'>
    //                                         <div className='flex items-center justify-center relative overflow-hidden group'>
    //                                             <Link href={`/albums/${slide.id}`}>
    //                                                 {/* cover image */}
    //                                                 <Image src={slide.cover} alt='' width={300} height={250} className='w-full h-full object-cover' />
    //                                                 {/* overlay gradient */}
    //                                                 <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
    //                                                 {/* title */}
    //                                                 <div className='absolute bottom-0 left-0 right-0 p-4 text-center group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
    //                                                     <div className='flex items-center justify-center text-sm md:text-base lg:text-lg gap-x-2 text-[13px] tracking-[0.2em]'>
    //                                                         {/* title part 1 */}
    //                                                         <div className='delay-100'>LIVE</div>
    //                                                         {/* title part 2 */}
    //                                                         <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
    //                                                             PROJECT
    //                                                         </div>
    //                                                         {/* icon */}
    //                                                         <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
    //                                                             <BsArrowRight />
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                             </Link>
    //                                         </div>
    //                                     </div>
    //                                 ))}
    //                             </div>
    //                         </SwiperSlide>
    //                     </Swiper>
    //                 </motion.div>
    //             </div>
    //         </div>
    //         <Bulb />
    //     </div>
    // );


    return (
        <div className='h-full bg-primary/30 py-24 items-center'>
            <Circles />
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-x-8'>
                    <motion.div
                        variants={fadeIn('down', 0.6)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='w-full xl:max-w-[100%]'
                    >
                        <Swiper
                            spaceBetween={10}
                            className='h-[280px] sm:h-[580px] md:h-[480px] lg:h-[580px]' // increase height here
                        >
                            <SwiperSlide>
                                <div className='grid grid-cols-4 gap-4 justify-end overflow-y-auto' style={heightStyle}>
                                    {slides.map((slide) => (
                                        <div key={slide.id} className='relative rounded-lg flex items-center justify-center group'>
                                            <div className='flex items-center justify-center relative overflow-hidden group'>
                                                <Link href={`/albums/${slide.id}`}>
                                                    {/* cover image */}
                                                    <Image src={slide.cover} alt='' width={300} height={250}/>
                                                    {/* overlay gradient */}
                                                    <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                                                    {/* title */}
                                                    <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                                                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                                                            {/* title part 1 */}
                                                            <div className='delay-100'>LIVE</div>
                                                            {/* title part 2 */}
                                                            <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                                                                PROJECT
                                                            </div>
                                                            {/* icon */}
                                                            <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                                                                <BsArrowRight />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </motion.div>
                </div>
            </div>
            <Bulb />
        </div>
    );
};

export default Work;