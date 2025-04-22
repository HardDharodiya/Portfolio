import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const link = [
        {
            id: "home",
            link: "Home"
        },
        {
            id: "about",
            link: "About"
        },
        {
            id: "project",
            link: "Project"
        },
        {
            id: "skills",
            link: "Skills"
        },
        {
            id: "education",
            link: "Education"
        },
        {
            id: "contact",
            link: "Contact"
        }
    ]

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false); // Close the menu after clicking a link
        }
    }


    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2, // Controls delay between items
            },
        },
    };

    const itemVariants = {
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

    return (
        <div className='flex justify-around relative text-white font-sans items-center bg-transparent h-16 p-5 mt-3 z-20'>

            {/* Desktop Nav */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="p-4 px-8 text-xl font-mono fixed text-center bg-none bg-transparent 
                lg:backdrop-blur-md lg:border lg:border-white/10 lg:bg-gradient-to-tr lg:from-purple-400/10 lg:via-slate-900/15 lg:to-purple-500/10 lg:shadow-purple-500/10 lg:rounded-full"
            >
                <motion.ul
                    className="hidden bg-transparent lg:flex gap-20 text-2xl"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {link.map(({ id, link }) => (
                        <motion.li
                            key={id}
                            className='cursor-pointer bg-transparent ml-3 mr-3 hover:text-slate-500'
                            variants={itemVariants}
                            onClick={() =>
                                scrollToSection(id)
                            }>
                            <span
                                className="relative bg-transparent after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0  after:transition-all after:duration-300 after:translate-x-[-50%] hover:after:w-full after:h-[2px] after:bg-purple-400 "
                            >
                                {link}
                            </span>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>

            {/* Mobile Hamburger Icon */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className='lg:hidden fixed right-8 top-6 z-10 bg-transparent'>
                <button className='bg-transparent' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ?
                        <X size={34} className='bg-transparent  backdrop-blur-md border border-white/10 bg-gradient-to-tr from-purple-400/10 via-slate-900/15 to-purple-500/10 shadow-purple-500/10 p-2 justify-center items-center rounded-full' />
                        : <Menu size={34} className='bg-transparent  backdrop-blur-md border border-white/10 bg-gradient-to-tr from-purple-400/10 via-slate-900/15 to-purple-500/10 shadow-purple-500/10 p-2 justify-center items-center rounded-full' />}
                </button>
            </motion.div>


            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className='flex flex-col justify-center 
                        backdrop-blur-md  border-white/10 bg-gradient-to-tr from-purple-400/10 via-slate-900/15 to-purple-500/10 shadow-purple-500/10 
                        items-start gap-4 lg:hidden border rounded-2xl p-4 fixed top-16 right-10 z-20' // Positioning below the hamburger
                        style={{ maxHeight: '80vh', overflowY: 'auto' }}
                    >
                        {link.map(({ id, link }) => (
                            <motion.li
                                key={id}
                                onClick={() => scrollToSection(id)}
                                className='cursor-pointer text-lg bg-transparent hover:text-purple-400'
                                variants={itemVariants}
                            >
                                {link}
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    )
}

export default NavBar
