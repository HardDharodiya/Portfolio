import React from 'react'
import ProfileImg from "../assets/profile.jpg"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'


const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });


  // Variants
  const cardVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const imageVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, delay: 0.3 } },
  };

  const contentVariant = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.6 } },
  };

  return (

    <section ref={ref} className="mt-20" id="about">
      <motion.div
        variants={cardVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative left-[6vw] w-[89%] min-h-[70vh] flex flex-col md:flex-row justify-center items-center text-white rounded-3xl backdrop-blur-md border border-white/10 bg-gradient-to-tr from-purple-400/10 via-slate-900/15 to-purple-500/10 shadow-purple-500/10 p-4 md:p-6 lg:p-8"
      >
        {/* Profile Image */}
        <motion.div
          variants={imageVariant}
          className="w-full md:w-1/3 flex bg-transparent justify-center items-center p-4"
        >
          <img
            src={ProfileImg}
            alt="Hard's profile"
            className="rounded-3xl shadow-xl w-[80vw] h-[83vw] md:w-[30vw] md:h-[65vh] object-cover"
          />
        </motion.div>

        {/* About Me */}
        <motion.div
          variants={contentVariant}
          className="w-full md:w-2/3 h-full flex flex-col bg-transparent justify-center items-center p-4"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r bg-t\ from-purple-500 to-purple-400">
              About Me
            </span>
          </h1>

          <p className="text-base md:text-lg font-sans bg-transparent leading-relaxed mb-4 text-left">
            Hi, I’m{" "}
            <span className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-400">
              Hard
            </span>
            ,<br />
            A passionate Front-End Developer with a strong foundation in Computer
            Science. I enjoy turning complex problems into simple, beautiful, and
            intuitive user interfaces. With hands-on experience in building
            responsive web apps, I strive to create products that are both
            user-centric and impactful.
          </p>

          <p className="text-base md:text-lg bg-transparent font-sans leading-relaxed mb-4 text-left">
            Alongside frontend development, I have a growing interest in project
            management. I’m fascinated by how ideas evolve into structured,
            well-executed projects. From planning and coordinating tasks to
            ensuring timely delivery, I enjoy being part of the bigger picture and
            contributing to efficient, goal-driven workflows. My aim is to bridge
            the gap between technical development and strategic execution.
          </p>
        </motion.div>
      </motion.div>
    </section>

  )
}

export default About