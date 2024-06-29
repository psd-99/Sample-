import 'swiper/css';
import 'swiper/css/free-mode';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const WorkSlider = () => {

    const heightStyle = {
        height: "36rem",
    }

    const [slides, setSlides] = useState([]);

    useEffect(() => {
        const fetchSlides = async () => {
            try {
                const response = await fetch('/pages/api/getSlides');
                const data = await response.json();
                setSlides(data || []);
            } catch (error) {
                console.error('Error fetching slides:', error);
            }
        };

        fetchSlides();
    }, []);

    return (
        <div className='grid grid-cols-4 gap-4 justify-end overflow-y-auto' style={heightStyle}>
            {slides.map((slide) => (
                <div key={slide.id} className='relative rounded-lg flex items-center justify-center group'>
                    <Link href={`/albums/${slide.id}`}>
                        {/* <a className="relative rounded-xl group"> */}
                        {/* cover image */}
                        <Image src={slide.cover} alt='' width={300} height={250} />
                        {/* overlay gradient */}
                        <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                        {/* title */}
                        <div className='absolute bottom-0 left-0 right-0 mx-auto opacity-0 group-hover:opacity-100 transform -translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                            <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                                <div className='delay-100 mx-1'>{slide.title}</div>
                                <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                                    <BsArrowRight />
                                </div>
                            </div>
                        </div>
                        {/* </a> */}
                    </Link>
                </div>
            ))}
        </div>
    );
};


export default WorkSlider;
