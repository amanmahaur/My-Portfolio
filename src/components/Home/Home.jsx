// src/pages/Home.jsx

import React, { useRef } from 'react';
import mylogo from '../../assets/logo.jpg';
import ProjectCard from '../ProjectCard/ProjectCard';
import { Link } from 'react-router-dom';
import CardSlider from '../CardSlider/CardSlider';

export default function Home() {

            
        const projects = [
        {
            title: 'My Notes App',
            description: 'A dynamic note-taking app built with HTML, CSS, and JavaScript.',
            image: 'https://play-lh.googleusercontent.com/vSNQds6F5roxdN4-a16JnQ9dWQVSZZ8OH4-iMAcNLaFQd3ItZWU8rOPOql4Ew5Hh1esX', // Replace with your project image URL
            link: 'https://0mynotesapp.netlify.app'
        },
        {
            title: 'Movie Info App',
            description: 'A place to know about all your favourite movies',
            image: 'https://media.tenor.com/0DnrqvZqHGUAAAAC/movie-excited.gif', // Replace with your project image URL
            link: '/projects/mynotesapp'
        },
        {
            title: 'My PortFolio',
            description: 'My portfolio to know about me',
            image: 'https://cdn.dribbble.com/users/5720644/screenshots/13912339/media/cfc570f6891e4aef4ae3c5282a767847.gif', // Replace with your project image URL
            link: 'https://amanmahaur.netlify.app/'
        },
        // Add more projects here...
    ];

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
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 my-12">
            

                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        link={project.link}
                    />
                ))}
            </div> */}
            <CardSlider/>
        </>
    );
}
