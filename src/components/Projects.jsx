import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiJavascript, SiMongodb, SiTailwindcss } from 'react-icons/si';
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Projects = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Section bg-card
  const cardVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  // Heading animation
  const headingVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.6 },
    },
  };

  // Container for staggered project cards
  const containerVariant = {
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 1.2,
      },
    },
  };

  // Project card animation
  const cardFadeVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const projectData = [
    {
      id: 1,
      title: "Caber",
      description: "Caber is a ride-sharing platform that connects people already traveling with those seeking a lift on the same route. Travelers share their journey details, and others can contact them for a ride. It helps reduce travel costs and environmental impact by encouraging shared transportation.",
      techstack: [
        <FaReact className="text-cyan-300 bg-transparent" />,
        <SiTailwindcss className="text-cyan-400 bg-transparent" />,
        <FaNodeJs className="text-green-500 bg-transparent" />,
        <SiExpress className="text-gray-600 bg-transparent" />,
        <SiMongodb className="text-green-600 bg-transparent" />,
      ],
      liveDemo: "https://caber.netlify.app/",
      code: "https://github.com/HardDharodiya/Caber.git",
    },
    {
      id: 2,
      title: "City Bus Monitoring System",
      description: "A web application that allows users to track city buses in real time. It provides live locations, estimated arrival times, and route details, helping commuters plan their journeys better and reduce wait times through a clean and user-friendly interface.",
      techstack: [
        <FaHtml5 className="text-orange-600 bg-transparent" />,
        <FaCss3Alt className="text-blue-500 bg-transparent" />,
        <SiJavascript className="text-yellow-400 bg-transparent" />,
        <FaNodeJs className="text-green-500 bg-transparent" />,
        <SiExpress className="text-gray-600 bg-transparent" />,
      ],
      liveDemo: "https://travelingtrackerzz.onrender.com",
      code: "https://github.com/HardDharodiya/travelingtrackerz.git",
    },
  ];

  return (

    <section ref={ref} className="mt-20" id="project">
      <motion.div
        variants={cardVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative left-[6vw] w-[89%] min-h-fit flex flex-col justify-center items-center text-white rounded-3xl backdrop-blur-md border border-white/10 bg-gradient-to-tr from-purple-400/10 via-slate-900/15 to-purple-500/10 shadow-purple-500/10 px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10 mt-20 mb-20"
      >
        <div className="flex flex-col items-center justify-center bg-transparent w-full h-full gap-4">
          <motion.h2
            variants={headingVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-3xl md:text-4xl font-bold bg-transparent mt-4 mb-6 text-center"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-400">
              PROJECT
            </span>
          </motion.h2>

          <motion.div
            variants={containerVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full bg-transparent"
          >
            {projectData.map((project) => (
              <motion.div
                variants={cardFadeVariant}
                key={project.id}
                className="flex flex-col justify-center items-center gap-4 rounded-3xl backdrop-blur-md border border-white/10 bg-gradient-to-tr from-violet-600/5 via-zinc-700/5 to-violet-600/5 shadow-purple-500/10 p-5 hover:scale-[1.02] transition-transform duration-300 bg-transparent"
              >
                <h3 className="text-xl md:text-2xl font-bold text-center bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-400">
                  {project.title}
                </h3>

                <p className="text-sm md:text-base lg:text-lg w-[90%] md:w-[80%] text-gray-300 text-left mb-2 bg-transparent">
                  {project.description}
                </p>

                <div className="flex flex-wrap justify-center gap-4 bg-transparent">
                  {project.techstack.map((tech, index) => (
                    <span key={index} className="text-2xl md:text-3xl bg-transparent">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-row gap-4 bg-transparent mt-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-base md:text-lg bg-purple-600 text-black font-semibold rounded-xl hover:bg-purple-400 transition duration-300 ease-in-out text-center"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-base md:text-lg bg-orange-600 text-black font-semibold rounded-xl hover:bg-orange-500 transition duration-300 ease-in-out text-center"
                  >
                    Code
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>

  )
}

export default Projects