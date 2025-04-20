import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaPython, FaNodeJs } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa6';
import { SiJavascript, SiTailwindcss, SiFigma, SiMysql, SiExpress, SiMongodb } from 'react-icons/si';
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Skill = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Section bg-card
    const cardVariant = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
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

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2, // Controls delay between items
            },
        },
    };

    const skillsVariants = {
        hidden: { y: -50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 10,
                duration: 0.5,
            },
        },
    };

    const skills = [
        { icon: <FaHtml5 className="text-orange-600" />, name: 'HTML5' },
        { icon: <FaCss3Alt className="text-blue-500" />, name: 'CSS3' },
        { icon: <SiJavascript className="text-yellow-400" />, name: 'JavaScript' },
        { icon: <FaReact className="text-cyan-300" />, name: 'React' },
        { icon: <SiTailwindcss className="text-cyan-400" />, name: 'Tailwind' },
        { icon: <SiMysql className='text-[#f29418]' />, name: 'MySQL' },
        { icon: <FaJava className='text-[#f29418]' />, name: 'Java' },
        { icon: <FaPython className='text-[#189df0]' />, name: 'Python' },
        { icon: <SiFigma className="text-pink-500" />, name: 'Figma' },
        { icon: <FaGitAlt className="text-orange-500" />, name: 'Git' },
        { icon: <FaGithub className='text-white' />, name: 'GitHub' }
    ];

    return (
        <section ref={ref} className='mt-20' id='skills'>

            <motion.div
                variants={cardVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className='relative left-[6vw] w-[89%] min-h-[60vh] text-white rounded-3xl backdrop-blur-md border border-white/10 bg-gradient-to-tr from-purple-400/10 via-slate-900/15 to-purple-500/10 shadow-purple-500/10 p-5 mt-20 flex flex-col items-center justify-center'
            >
                <motion.h2
                    variants={headingVariant}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-4xl font-bold mb-10 text-center"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-400">
                        SKILLS
                    </span>
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex flex-wrap justify-center gap-8 sm:gap-10 bg-transparent"
                >
                    {skills.map((skill, idx) => (
                        <motion.div
                            variants={skillsVariants}
                            key={idx}
                            className="flex flex-col items-center bg-transparent w-20 sm:w-24"
                        >
                            <motion.div className="hover:scale-110 transition duration-300 ease-in-out text-4xl sm:text-5xl">
                                {skill.icon}
                            </motion.div>
                            <p className="text-center text-sm sm:text-lg font-mono mt-2">
                                {skill.name}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

        </section>
    )
}

export default Skill