import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ title, description, image, link }) {
    return (
        <div className="hover:scale-[100.5%] transition-all duration-300 block max-w-sm sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-xl rounded overflow-hidden shadow-lg m-4 mx-auto">
            <img className="w-full h-48 object-cover" src={image} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="text-center px-6 pt-4 pb-2">
                <Link to={link} className="text-orange-700 font-semibold hover:underline">
                    View Project
                </Link>
            </div>
        </div>
    );
}
