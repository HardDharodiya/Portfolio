import React from 'react'
import github from "../assets/githublogo.svg"
import linkedin from "../assets/linkedinlogo.svg"
import Character from "../assets/character.png"
import Resume from "../resume/Hard Dharodiya.pdf"
import { motion } from 'framer-motion'


const Hero = () => {

    const link = [
        {
            id: "contact",
            link: "Contact"
        }
    ]

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div id='home'>

            <div className='text-white flex flex-col lg:flex-row justify-center w-full h-auto lg:h-[89vh] mb-9 overflow-hidden items-center px-4'>

                {/* Character */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className='w-full lg:w-1/2 flex justify-center items-center mt-6 lg:mt-0'>

                    <img src={Character} alt="Character" className="w-[70%] sm:w-[50%] lg:w-[80%]" />

                </motion.div>

                {/* Left card */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className='flex flex-col w-[90%] sm:w-[70%] lg:w-[40%] h-auto lg:h-[70%] rounded-3xl backdrop-blur-md border border-white/10 bg-gradient-to-tr from-purple-400/10 via-slate-900/15 to-purple-500/10 shadow-purple-500/10 justify-center items-center p-6 mt-8 lg:mt-0'>

                    <div className='flex flex-col items-center bg-transparent'>
                        <p className='font-semibold text-base sm:text-lg md:text-xl bg-transparent'>Hello, I'm</p>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl mb-3 bg-transparent text-center'>
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-400'>Hard Dharodiya</span>
                        </h1>
                        <p className='font-semibold text-lg sm:text-xl md:text-2xl bg-transparent text-center'>Frontend Developer</p>
                    </div>

                    <div className='flex flex-col sm:flex-row gap-3 m-6 bg-transparent'>
                        <a href={Resume} download>
                            <button className='font-medium text-base sm:text-lg bg-purple-700 text-black px-6 py-2 rounded-full hover:bg-purple-600 transition-colors duration-300 ease-in-out'>
                                Download CV
                            </button>
                        </a>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className='font-medium text-base sm:text-lg bg-gray-100 text-black px-6 py-2 rounded-full hover:bg-stone-300 transition-colors duration-300 ease-in-out'>
                            Contact
                        </button>
                    </div>

                    <div className='flex gap-6 mt-4 bg-transparent'>
                        <a href="https://github.com/HardDharodiya" target="_blank" className='flex bg-transparent'>
                            <img src={github} alt="" className='bg-white rounded-full h-8' />
                        </a>
                        <a href="https://www.linkedin.com/in/hard-dharodiya-b2571125a" target="_blank" className='bg-transparent'>
                            <img src={linkedin} alt="" className='bg-white rounded-md h-8' />
                        </a>
                    </div>

                </motion.div>
            </div>

        </div >
    )
}

export default Hero

