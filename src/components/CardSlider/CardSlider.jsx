// src/components/Carousel.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Custom Left Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-0 z-10 p-3 bg-orange-700 text-white rounded-full hover:bg-orange-900 transition-all"
      style={{ top: '50%', transform: 'translateY(-50%)', left: '-2rem' }}
    >
      <FaArrowLeft size={20} />
    </button>
  );
};

// Custom Right Arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-0 z-10 p-3 bg-orange-700 text-white rounded-full hover:bg-orange-900 transition-all"
      style={{ top: '50%', transform: 'translateY(-50%)', right: '-2rem' }}
    >
      <FaArrowRight size={20} />
    </button>
  );
};

const CardSlider = () => {
  // Slick Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Enable arrows
    prevArrow: <PrevArrow />, // Use custom prev arrow
    nextArrow: <NextArrow />, // Use custom next arrow
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const projects = [
    {
      title: 'My Notes App',
      description: 'A dynamic note-taking app built with HTML, CSS, and JavaScript.',
      image: 'https://play-lh.googleusercontent.com/vSNQds6F5roxdN4-a16JnQ9dWQVSZZ8OH4-iMAcNLaFQd3ItZWU8rOPOql4Ew5Hh1esX', 
      link: 'https://0mynotesapp.netlify.app'
    },
    {
      title: 'Movie Info App',
      description: 'A place to know about all your favourite movies',
      image: 'https://media.tenor.com/0DnrqvZqHGUAAAAC/movie-excited.gif',
      link: 'https://0movienation.netlify.app'
    },
    {
      title: 'My PortFolio',
      description: 'My portfolio to know about me',
      image: 'https://cdn.dribbble.com/users/5720644/screenshots/13912339/media/cfc570f6891e4aef4ae3c5282a767847.gif',
      link: 'https://amanmahaur.netlify.app'
    },
    // Add more projects here...
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-6 relative">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
