// src/pages/Home.jsx

import React, { useRef } from 'react';
import mylogo from '../../assets/logo.jpg';
import ProjectCard from '../ProjectCard/ProjectCard';
import { Link } from 'react-router-dom';
import CardSlider from '../CardSlider/CardSlider';

export default function Home() {

            
    return (
        <>
            <div className='block sm:flex relative justify-between items-center mx-auto my-3 gap-2' >
                <div className=''>
                    <div className="relative inset-0 w-full flex flex-col items-center justify-center sm:my-20 pt-12 sm:pt-1">
                        <img className="w-[300px] sm:w[300px] lg:w-[500px] rounded-full mx-auto " src={mylogo} alt="logo" />
                    </div>
                </div>
                <div className='relative block gap-3 justify-end items-end'>
                    <h2 className=" text-center sm:text-end text-3xl md:text-5xl font-bold sm:text-4xl   py-1">
                        Hi There!
                        <span className="block text-2xl md:text-4xl sm:text-3xl py-1">It's Aman Kumar Mahaur</span>
                        <span className="block text-2xl md:text-4xl sm:text-3xl py-1">Developing cool websites</span>
                    </h2>
                    <div className='relative justify-center flex sm:justify-end'>
                        <Link
                            className="animate-bounce hover:animate-none  w-32 text-center text-white px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/about"
                        >
                            Know Me
                        </Link>
                    </div>
                </div>
            </div>
            <div className='text-start mx-8 flex text-4xl gap-2'>
            <h2 className=" text-center sm:text-end text-2xl md:text-4xl font-bold sm:text-3xl   py-1">
                        Some 
                    </h2>
                    <h2 className=" text-center sm:text-end text-2xl md:text-4xl font-bold sm:text-3xl text-orange-700   py-1">
                        Cool 
                    </h2>
                    <h2 className=" text-center sm:text-end text-2xl md:text-4xl font-bold sm:text-3xl   py-1">
                        Projects 
                    </h2>

            </div>

            <CardSlider/>
        </>
    );
}
