import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const link = [
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
        <div className='flex justify-around relative text-white font-sans items-center bg-transparent h-16 p-5 mt-3'>

            {/* Desktop Nav */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="p-4 text-xl font-mono text-center"
            >
                <motion.ul
                    className="hidden lg:flex gap-20 text-2xl"
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
                            {link}
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>

            {/* Mobile Hamburger Icon */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className='lg:hidden fixed right-8 top-4 z-10 bg-transparent'>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
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
                        items-start gap-4 lg:hidden border rounded-2xl p-4  absolute top-16 right-10 z-20' // Positioning below the hamburger
                        style={{ maxHeight: '80vh', overflowY: 'auto' }}
                    >
                        {link.map(({ id, link }) => (
                            <motion.li
                                key={id}
                                onClick={() => scrollToSection(id)}
                                className='cursor-pointer bg-transparent text-lg hover:text-purple-400'
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
