import React, { useRef } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
function MyProjects() {
    const projects = [
        {
            title: 'My Notes App',
            description: 'A dynamic note-taking app built with HTML, CSS, and JavaScript.',
            image: 'https://play-lh.googleusercontent.com/vSNQds6F5roxdN4-a16JnQ9dWQVSZZ8OH4-iMAcNLaFQd3ItZWU8rOPOql4Ew5Hh1esX', // Replace with your project image URL
            link: 'https://0mynotesapp.netlify.app'
        },
        {
            title: 'Movie Info App',
            description: 'A place to know about all your favourite movies,series and more',
            image: 'https://media.tenor.com/0DnrqvZqHGUAAAAC/movie-excited.gif', // Replace with your project image URL
            link: '/projects/mynotesapp'
        },
        {
            title: 'Random Password Generator',
            description: 'A Random strong password generator built with react',
            image: 'https://play-lh.googleusercontent.com/_jjkr0aop6QziAROplTkUa17QMz6UmIkNK7Rkctk-XUmPET6sUP5MvkuTumD5Kp6BTE=w240-h480-rw', // Replace with your project image URL
            link: 'https://strengthypasswords.netlify.app'
        },
        {
            title: 'My PortFolio',
            description: 'My portfolio to know about me,my skills and the things I do',
            image: 'https://cdn.dribbble.com/users/5720644/screenshots/13912339/media/cfc570f6891e4aef4ae3c5282a767847.gif', // Replace with your project image URL
            link: '/projects/mynotesapp'
        },
        {
            title: 'Currency Converter',
            description: 'A currency converter web-app built with reactJS',
            image: 'https://play-lh.googleusercontent.com/7Mfyiu2sCJri41mlICsLWgPNtOq6mSlmskT5YphmXGilIkaPSChxNfuPWY53IBHLdA', // Replace with your project image URL
            link: 'https://0currencychanger.netlify.app'
        },
        {
            title: 'Text to Speech Converter',
            description: 'A dynamic note-taking app built with HTML, CSS, and JavaScript.',
            image: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/c0d23132467165.5689027f380f8.gif', // Replace with your project image URL
            link: 'https://speechifier.netlify.app'
        },

    ];
  return (
    <>
    <div className='text-start mx-8 flex text-4xl gap-2'>
            <h2 className=" text-center sm:text-end text-2xl md:text-4xl font-bold sm:text-3xl   py-1">
                        My
                    </h2>
                    <h2 className=" text-center sm:text-end text-2xl md:text-4xl font-bold sm:text-3xl text-orange-700   py-1">
                        Projects 
                    </h2>
                    

            </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  my-12 mx-4">
    {projects.map((project, index) => (
        <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
        />
    ))}
</div>
</>
  )
}

export default MyProjects

