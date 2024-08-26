import React from 'react';
import myimage from '../../assets/me.jpg';

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    {/* Image Section */}
                    <div className="md:w-5/12 lg:w-4/12">
                        <img className='rounded-md shadow-md w-full' src={myimage} alt="Profile" />
                    </div>

                    {/* Text Section */}
                    <div className="md:w-7/12 lg:w-8/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            I'm Aman Kumar Mahaur
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Hehe Boii...
                        </p>
                        <p className="mt-4 text-gray-600">
                            I’m currently a 3rd-year B.Tech student in Electrical Engineering at MANIT Bhopal, with an interest in Coding, Web-Development, and robots. I thrive on challenges and am constantly looking for opportunities to grow and innovate.
                        </p>

                        <h2 className="mt-10 text-2xl text-gray-900 font-bold md:text-4xl">
                            Academics
                        </h2>
                        <div className='flex flex-col space-y-4'>
                            <div className='flex justify-between'>
                                <p className="text-gray-600">B.Tech Electrical Engineering: MANIT Bhopal</p>
                                <p className="text-gray-600">CGPA: 7.83 (4th Sem)</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className="text-gray-600">Intermediate: M. D. Jain Inter College Agra</p>
                                <p className="text-gray-600">Percentage: 73.2%</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className="text-gray-600">High School: M. D. Jain Inter College Agra</p>
                                <p className="text-gray-600">Percentage: 77%</p>
                            </div>
                        </div>

                        <h2 className="mt-10 text-2xl text-gray-900 font-bold md:text-4xl">
                            Technical Skills
                        </h2>
                        <div className='flex flex-col space-y-4'>
                            <div className='flex flex-row gap-1'>
                                <p className="text-gray-600 font-bold">Languages:</p>
                                <p className="text-gray-600">C, C++, JavaScript</p>
                            </div>
                            <div className='flex flex-row gap-1'>
                                <p className="text-gray-600 font-bold">Web-Development:</p>
                                <p className="text-gray-600">HTML, CSS, JavaScript, TailwindCSS, ReactJS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
