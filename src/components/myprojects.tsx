"use client"

import React, { useState } from 'react'
import Image from 'next/image';



// Sample data for projects (you can replace this with your actual project data)
const projectData = [
  {
    id: 1,
    title: 'Project #1',
    image: '/images/project1.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ipsum voluptatem nam. Veritatis beatae porro, distinctio assumenda quasi ipsam ducimus.',
    liveDemoLink: 'https://project-one-demo.com',
    technologies: ['Next.js', 'Tailwind CSS', 'React', 'TypeScript'],
  },
  {
    id: 2,
    title: 'Project #2',
    image: '/images/project1.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ipsum voluptatem nam. Veritatis beatae porro, distinctio assumenda quasi ipsam ducimus.',
    liveDemoLink: 'https://project-two-demo.com',
    technologies: ['MongoDB', 'Node.js', 'Express', 'React'],
  },
  // Add more projects here
];





const MyProjectsPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projectData.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projectData.length - 1 ? 0 : prevIndex + 1));
  };

  const currentProject = projectData[currentIndex];

  return (

    <section className="relative py-5 container  min-h-screen">
      <header className="relative text-center text-white py-10">
        <h2 className='text-4xl font-bold'>My Projects</h2>
        <p className='mt-2 text-gray-300'> Most Recent Works</p>
      </header>
      <div className="  flex flex-col justify-center items-center h-full relative text-center">


        <div className="relative w-10/12 md:w-4/5 my-6 p-4 bg-gradient-to-r from-blue-900 via-slate-800 to-slate-900 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-2xl text-white font-bold mb-4 text-center">{currentProject.title}</h2>

          {/* Slider Content */}
          <div className="flex items-center justify-between space-x-4">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="text-white bg-gray-700 hover:bg-gray-800 md:p-4 p-3 rounded-full transition duration-300"
            >
              &lt;

            </button>

            {/* Project Details */}
            <div className="flex flex-col md:flex-row items-center gap-6 w-full">
              {/* Project Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <Image
                  width={0}
                  height={0}
                  sizes='100vh'
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-auto rounded-md shadow-lg"
                />
              </div>

              {/* Project Information */}
              <div className="w-full md:w-1/2 flex flex-col gap-2 text-white">
                <p className="mb-4 md:text-xl  ">{currentProject.description}</p>

                {/* Technologies Used */}
                <div className="mb-4">
                  <h3 className="font-semibold">Technologies Used:</h3>
                  <ul className="flex flex-wrap gap-2 mt-2">
                    {currentProject.technologies.map((tech, index) => (
                      <li
                        key={index}
                        className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Live Demo Button */}
                <a
                  href={currentProject.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300 text-center"
                >
                  Live Demo
                </a>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="text-white bg-gray-700 hover:bg-gray-800 md:p-4 p-3 rounded-full transition duration-300"
            >
              &gt;
            </button>
          </div>

          {/* Slider Indicators */}
          <div className="flex justify-center mt-4">
            {projectData.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500'
                  }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>

  );
};

export default MyProjectsPage;
