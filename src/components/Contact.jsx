import React, { useRef } from 'react'
import GithubLogo from "../assets/githublogo.svg"
import LinkedInLogo from "../assets/linkedinlogo.svg"
import GmailLogo from "../assets/gmaillogo.svg"
import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'


const Contact = () => {

  const [showSuccessCard, setShowSuccessCard] = useState(false);
  const [formVisible, setFormVisible] = useState(false); //controls form animation

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (showSuccessCard) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto";   // Enable scroll
    }
    // Clean up when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showSuccessCard]);


  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    const formData = new FormData(event.target);
    formData.append("access_key", '91edb5a7-f7fc-4bb5-9389-7786aab92f1f');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setShowSuccessCard(true);
      form.reset();
    }
  }

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, duration: 0.5 } },
  }

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    // <section
    //   ref={ref}
    //   id="contact"
    //   className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex gap-8 items-center justify-center px-4 py-12">

    //   <motion.div
    //     variants={cardVariants}
    //     initial="hidden"
    //     animate={isInView ? "visible" : "hidden"}
    //     onAnimationComplete={() => setFormVisible(true)} // Trigger form animation after completes
    //     className='flex flex-col w-[40%] rounded-3xl backdrop-blur-md border border-white/10 bg-gradient-to-tr from-violet-600/5 via-zinc-700/5 to-violet-600/5 shadow-purple-500/10 p-5 hover:scale-[1.02] transform translate-all duration-300 bg-transparent'>

    //     <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-6">

    //       <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-400 bg-transparent">Get in Touch</span>

    //     </motion.h2>

    //     <motion.hr variants={itemVariants} />

    //     <motion.p variants={itemVariants} className="text-lg mb-8 mt-3">
    //       Have a project in mind, want to collaborate, or just want to say hi?
    //       Feel free to drop a message below!
    //     </motion.p>

    //     <motion.div variants={cardVariants} className=" space-y-2 text-sm text-gray-500 dark:text-gray-400 flex flex-col gap-5">

    //       <motion.a variants={itemVariants} href='mailto:dharodiyaneev07@gmail.com' target="_blank" className='flex w-fit bg-transparent items-center gap-2 text-white text-lg hover:text-purple-500 transition duration-300 ease-in-out'>
    //         <img src={GmailLogo} alt="" className='h-8' />
    //         Hard Dharodiya
    //       </motion.a>

    //       <motion.a variants={itemVariants} href='https://www.linkedin.com/in/hard-dharodiya-b2571125a' target="_blank" className='bg-transparent w-fit flex items-center gap-2 text-white text-lg hover:text-purple-500 transition duration-300 ease-in-out'>
    //         <img src={LinkedInLogo} alt="" className='bg-white rounded-md h-8' /> Hard Dharodiya
    //       </motion.a>

    //       <motion.a variants={itemVariants} href='https://github.com/HardDharodiya' target="_blank" className='flex w-fit bg-transparent items-center gap-2 text-white text-lg hover:text-purple-500 transition duration-300 ease-in-out'>
    //         <img src={GithubLogo} alt="" className='bg-white rounded-full h-8' /> Hard Dharodiya
    //       </motion.a>

    //     </motion.div>

    //   </motion.div>

    //   <motion.div
    //     initial={{ opacity: 0, y: 30 }}
    //     animate={formVisible ? { opacity: 1, y: 0 } : {}}
    //     transition={{ duration: 0.6 }}
    //     className="max-w-2xl w-full text-center">

    //     {formVisible &&
    //       <motion.form
    //         onSubmit={onSubmit}
    //         className="flex flex-col gap-4"
    //         initial="hidden"
    //         animate="visible"
    //         variants={{
    //           hidden: {},
    //           visible: {
    //             transition: { staggerChildren: 0.15 }
    //           }
    //         }}
    //       >
    //         <motion.input
    //           variants={itemVariants}
    //           type="text"
    //           name="name"
    //           placeholder="Your Name"
    //           className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
    //           required
    //         />

    //         <motion.input
    //           variants={itemVariants}
    //           type="email"
    //           name="email"
    //           placeholder="Your Email"
    //           className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
    //           required
    //         />

    //         <motion.textarea
    //           variants={itemVariants}
    //           name="message"
    //           rows="5"
    //           placeholder="Your Message"
    //           className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
    //           required
    //         ></motion.textarea>

    //         <motion.button
    //           variants={itemVariants}
    //           type="submit"
    //           className="bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-purple-700  text-lg transition duration-300 ease-in-out"
    //         >
    //           Send Message
    //         </motion.button>

    //       </motion.form>
    //     }
    //   </motion.div>
    //   {showSuccessCard && (
    //     <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/50">
    //       <div className="flex flex-col justify-between items-center w-[90%] h-[50%] max-w-md rounded-3xl border border-white/10 bg-gradient-to-tr from-purple-400/10 via-slate-900/15 to-purple-500/10 shadow-lg p-6 text-center">
    //         <h3 className="text-white bg-transparent font-bold text-xl mb-2">🥳 Message Sent </h3>
    //         <div>
    //           <p className="text-md bg-transparent text-white mb-4">
    //             Thanks for reaching out! 🙋‍♂️
    //           </p>
    //           <p className="text-xl bg-transparent text-white mb-4">
    //             I’ll get back to you soon.
    //           </p>
    //         </div>
    //         <button
    //           onClick={() => setShowSuccessCard(false)}
    //           className="bg-purple-600 hover:bg-orange-500 text-lg font-semibold text-black px-6 py-2 rounded-md transition duration-300 ease-in-out"
    //         >
    //           Thank you
    //         </button>
    //       </div>
    //     </div>
    //   )}
    // </section>

    <section
      ref={ref}
      id="contact"
      className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col lg:flex-row gap-8 items-center justify-center px-4 py-12">

      {/* Contact Info Card */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        onAnimationComplete={() => setFormVisible(true)}
        className="w-full lg:w-[40%] rounded-3xl backdrop-blur-md border border-white/10 bg-gradient-to-tr from-violet-600/5 via-zinc-700/5 to-violet-600/5 shadow-purple-500/10 p-5 hover:scale-[1.02] transform transition-all duration-300">

        <motion.h2 variants={itemVariants} className="text-3xl bg-transparent sm:text-4xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-400">Get in Touch</span>
        </motion.h2>

        <motion.hr variants={itemVariants} />

        <motion.p variants={itemVariants} className="bg-transparent text-base sm:text-lg mb-8 mt-3">
          Have a project in mind, want to collaborate, or just want to say hi?
          Feel free to drop a message below!
        </motion.p>

        <motion.div variants={cardVariants} className="space-y-2 text-sm text-gray-500 dark:text-gray-400 flex flex-col gap-5">
          <motion.a variants={itemVariants} href='mailto:dharodiyaneev07@gmail.com' target="_blank" className='bg-transparent flex w-fit items-center gap-2 text-white text-lg hover:text-purple-500 transition'>
            <img src={GmailLogo} alt="" className='h-8 bg-transparent' /> Hard Dharodiya
          </motion.a>

          <motion.a variants={itemVariants} href='https://www.linkedin.com/in/hard-dharodiya-b2571125a' target="_blank" className='bg-transparent flex w-fit items-center gap-2 text-white text-lg hover:text-purple-500 transition'>
            <img src={LinkedInLogo} alt="" className='bg-white rounded-md h-8' /> Hard Dharodiya
          </motion.a>

          <motion.a variants={itemVariants} href='https://github.com/HardDharodiya' target="_blank" className='bg-transparent flex w-fit items-center gap-2 text-white text-lg hover:text-purple-500 transition'>
            <img src={GithubLogo} alt="" className='bg-white rounded-full h-8' /> Hard Dharodiya
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={formVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl text-center">

        {formVisible &&
          <motion.form
            onSubmit={onSubmit}
            className="flex flex-col gap-4 mt-4 lg:mt-0"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            <motion.input
              variants={itemVariants}
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />

            <motion.input
              variants={itemVariants}
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />

            <motion.textarea
              variants={itemVariants}
              name="message"
              rows="5"
              placeholder="Your Message"
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            ></motion.textarea>

            <motion.button
              variants={itemVariants}
              type="submit"
              className="bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 text-lg transition"
            >
              Send Message
            </motion.button>
          </motion.form>
        }
      </motion.div>

      {/* Success Card */}
      {showSuccessCard && (

        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/50 px-4 min-h-screen">
          <div className="flex flex-col justify-center items-center w-full sm:w-[90%] md:w-[70%] max-w-md rounded-3xl border border-white/10 bg-gradient-to-tr from-purple-400/10 via-slate-900/15 to-purple-500/10 shadow-lg p-6 text-center h-auto sm:h-auto">

            <h3 className="text-white font-bold text-xl mb-2">🥳 Message Sent</h3>

            <div className="px-2">
              <p className="text-md text-white mb-4">Thanks for reaching out! 🙋‍♂️</p>
              <p className="text-xl text-white mb-4">I’ll get back to you soon.</p>
            </div>

            <button
              onClick={() => setShowSuccessCard(false)}
              className="bg-purple-600 hover:bg-orange-500 text-lg font-semibold text-black px-6 py-2 rounded-md transition duration-300 ease-in-out mt-4"
            >
              Thank you
            </button>

          </div>
        </div>
      )}
    </section>
  )
}

export default Contact