import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';


const Education = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (

    // <section
    //   id="education"
    //   ref={ref}
    //   className="relative bg-black text-white py-20 px-5 mt-20 flex justify-center min-h-screen"
    // >
    //   <motion.div
    //     className="relative w-full max-w-4xl"
    //     initial={{ opacity: 0, y: 100 }}
    //     animate={isInView ? { opacity: 1, y: 0 } : {}}
    //     transition={{ duration: 1 }}
    //   >
    //     {/* Title */}
    //     <motion.h2
    //       className="text-4xl font-bold text-center text-white mb-16"
    //       initial={{ opacity: 0, y: -30 }}
    //       animate={isInView ? { opacity: 1, y: 0 } : {}}
    //       transition={{ delay: 0.3, duration: 0.6 }}
    //     >
    //       <span className="inline-block backdrop-blur-md border border-purple-500/10 bg-gradient-to-tr from-purple-400/10 via-slate-900/15 to-purple-500/10 shadow-purple-500/10 p-[11px] rounded-md">
    //         <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-400">
    //           Education
    //         </span>
    //       </span>
    //     </motion.h2>

    //     {/* Center Vertical Line (hidden on mobile, visible on desktop) */}
    //     <motion.div
    //       className="absolute hidden md:block left-[49.8%] top-16 h-full w-1 bg-purple-500 transform -translate-x-1/2" // changed from max-md:hidden to hidden md:block
    //       initial={{ scaleY: 0 }}
    //       animate={isInView ? { scaleY: 1 } : {}}
    //       transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
    //     />

    //     {/* Card 1 - Left Side */}
    //     <motion.div
    //       className="flex md:justify-start justify-center bg-transparent mb-24 relative z-10"
    //       initial={{ opacity: 0, x: -100 }}
    //       animate={isInView ? { opacity: 1, x: 0 } : {}}
    //       transition={{ delay: 1, duration: 0.6 }}
    //     >
    //       <div className="mr-10 max-md:mr-0 backdrop-blur-md border border-purple-500/10 bg-gradient-to-tr from-purple-400/10 via-slate-900/15 to-purple-500/10 shadow-purple-500/10 rounded-xl p-5 w-[300px] text-right max-md:text-center">
    //         {/* Line */}
    //         <motion.div
    //           className="absolute max-md:hidden bg-transparent top-1/2 left-[126.5%] transform -translate-x-1/2 -translate-y-1/2 flex flex-row-reverse items-center z-10"
    //           initial={{ opacity: 0 }}
    //           animate={isInView ? { opacity: 1 } : {}}
    //           transition={{ delay: 1.2 }}
    //         >
    //           <div className="w-5 h-5 bg-white rounded-full" />
    //           <div className="w-[138px] h-0.5 bg-purple-500" />
    //         </motion.div>
    //         <h3 className="text-xl bg-transparent font-bold">Bachelor of Engineering</h3>
    //         <p className="text-sm bg-transparent text-purple-300">Computer Science - GEC Rajkot</p>
    //         <p className="text-lg bg-transparent font-bold text-white mt-1">7.87 CGPA</p>
    //         <p className="text-sm  text-gray-400 mt-1">2022 - 2026</p>
    //       </div>
    //     </motion.div>

    //     {/* Card 2 - Right Side */}
    //     <motion.div
    //       className="flex md:justify-end justify-center bg-transparent mb-24 relative z-10"
    //       initial={{ opacity: 0, x: 100 }}
    //       animate={isInView ? { opacity: 1, x: 0 } : {}}
    //       transition={{ delay: 1.6, duration: 0.6 }}
    //     >
    //       <div className="ml-10 max-md:ml-0 backdrop-blur-md border border-purple-500/10 bg-gradient-to-tr from-purple-400/10 via-slate-900/15 to-purple-500/10 shadow-purple-500/10 rounded-xl p-5 w-[300px] text-left max-md:text-center">
    //         <motion.div
    //           className="absolute max-md:hidden bg-transparent top-1/2 right-[73.8%] transform -translate-x-1/2 -translate-y-1/2 flex items-center z-10"
    //           initial={{ opacity: 0 }}
    //           animate={isInView ? { opacity: 1 } : {}}
    //           transition={{ delay: 1.8 }}
    //         >
    //           <div className="w-5 h-5 bg-white rounded-full" />
    //           <div className="w-[138px] h-0.5 bg-purple-500" />
    //         </motion.div>
    //         <h3 className="text-xl bg-transparent font-bold">12th Grade</h3>
    //         <p className="text-sm bg-transparent text-purple-300">Science - GyanGanga School</p>
    //         <p className="text-lg bg-transparent font-bold text-white mt-1">70.17%</p>
    //         <p className="text-sm bg-transparent text-gray-400 mt-1">2021 - 2022</p>
    //       </div>
    //     </motion.div>

    //     {/* Card 3 - Left Side */}
    //     <motion.div
    //       className="flex md:justify-start justify-center bg-transparent relative z-10"
    //       initial={{ opacity: 0, x: -100 }}
    //       animate={isInView ? { opacity: 1, x: 0 } : {}}
    //       transition={{ delay: 2.2, duration: 0.6 }}
    //     >

    //       <div className="mr-10 max-md:mr-0 backdrop-blur-md border border-purple-500/10 bg-gradient-to-tr from-purple-400/10 via-slate-900/15 to-purple-500/10 shadow-purple-500/10 rounded-xl p-5 w-[300px] text-right max-md:text-center">

    //         <motion.div
    //           className="absolute max-md:hidden bg-transparent top-1/2 left-[126.5%] transform -translate-x-1/2 -translate-y-1/2 flex flex-row-reverse items-center z-10"
    //           initial={{ opacity: 0 }}
    //           animate={isInView ? { opacity: 1 } : {}}
    //           transition={{ delay: 1.2 }}
    //         >
    //           <div className="w-5 h-5 bg-white rounded-full" />
    //           <div className="w-[138px] h-0.5 bg-purple-500" />
    //         </motion.div>
    //         <h3 className="text-xl bg-transparent font-bold">10th Grade</h3>
    //         <p className="text-sm bg-transparent text-purple-300">GyanGanga School</p>
    //         <p className="text-lg bg-transparent font-bold text-white mt-1">78.17%</p>
    //         <p className="text-sm bg-transparent text-gray-400 mt-1">2019 - 2020</p>
    //       </div>
    //     </motion.div>
    //   </motion.div>
    // </section>

    // 1st
    // <section
    //   id="education"
    //   ref={ref}
    //   className="relative bg-black text-white py-20 px-5 mt-20 flex justify-center min-h-screen"
    // >
    //   <motion.div
    //     className="relative w-full max-w-4xl"
    //     initial={{ opacity: 0, y: 100 }}
    //     animate={isInView ? { opacity: 1, y: 0 } : {}}
    //     transition={{ duration: 1 }}
    //   >
    //     {/* Title */}
    //     <motion.h2
    //       className="text-4xl font-bold text-center text-white mb-16"
    //       initial={{ opacity: 0, y: -30 }}
    //       animate={isInView ? { opacity: 1, y: 0 } : {}}
    //       transition={{ delay: 0.3, duration: 0.6 }}
    //     >
    //       <span className="inline-block backdrop-blur-md border border-purple-500/10 bg-gradient-to-tr from-purple-400/10 via-slate-900/15 to-purple-500/10 shadow-purple-500/10 p-[11px] rounded-md">
    //         <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-400">
    //           Education
    //         </span>
    //       </span>
    //     </motion.h2>

    //     {/* Center Vertical Line (hidden on small screens) */}
    //     <motion.div
    //       className="absolute max-md:hidden left-[49.8%] top-16 h-full w-1 bg-purple-500 transform -translate-x-1/2"
    //       initial={{ scaleY: 0 }}
    //       animate={isInView ? { scaleY: 1 } : {}}
    //       transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
    //     />

    //     {/* Card 1 - Left Side */}
    //     <motion.div
    //       className="flex md:justify-start justify-center bg-transparent mb-24 relative z-10"
    //       initial={{ opacity: 0, x: -100 }}
    //       animate={isInView ? { opacity: 1, x: 0 } : {}}
    //       transition={{ delay: 1, duration: 0.6 }}
    //     >
    //       <div className="mr-10 max-md:mr-0 backdrop-blur-md border border-purple-500/10 bg-gradient-to-tr from-purple-400/10 via-slate-900/15 to-purple-500/10 shadow-purple-500/10 rounded-xl p-5 w-[300px] max-md:text-center">
    //         {/* Line */}
    //         <motion.div
    //           className="absolute max-md:hidden bg-transparent top-1/2 left-[126.5%] transform -translate-x-1/2 -translate-y-1/2 flex flex-row-reverse items-center z-10"
    //           initial={{ opacity: 0 }}
    //           animate={isInView ? { opacity: 1 } : {}}
    //           transition={{ delay: 1.2 }}
    //         >
    //           <div className="w-5 h-5 bg-white rounded-full" />
    //           <div className="w-[138px] h-0.5 bg-purple-500" />
    //         </motion.div>
    //         <h3 className="text-xl bg-transparent font-bold">Bachelor of Engineering</h3>
    //         <p className="text-sm bg-transparent text-purple-300">Computer Science - GEC Rajkot</p>
    //         <p className="text-lg bg-transparent font-bold text-white mt-1">7.87 CGPA</p>
    //         <p className="text-sm  text-gray-400 mt-1">2022 - 2026</p>
    //       </div>
    //     </motion.div>

    //     {/* Card 2 - Right Side */}
    //     <motion.div
    //       className="flex md:justify-end justify-center bg-transparent mb-24 relative z-10"
    //       initial={{ opacity: 0, x: 100 }}
    //       animate={isInView ? { opacity: 1, x: 0 } : {}}
    //       transition={{ delay: 1.6, duration: 0.6 }}
    //     >
    //       <div className="ml-10 max-md:ml-0 backdrop-blur-md border border-purple-500/10 bg-gradient-to-tr from-purple-400/10 via-slate-900/15 to-purple-500/10 shadow-purple-500/10 rounded-xl p-5 w-[300px] max-md:text-center">
    //         <motion.div
    //           className="absolute max-md:hidden bg-transparent top-1/2 right-[73.7%] transform -translate-x-1/2 -translate-y-1/2 flex items-center z-10"
    //           initial={{ opacity: 0 }}
    //           animate={isInView ? { opacity: 1 } : {}}
    //           transition={{ delay: 1.8 }}
    //         >
    //           <div className="w-5 h-5 bg-white rounded-full" />
    //           <div className="w-[138px] h-0.5 bg-purple-500" />
    //         </motion.div>
    //         <h3 className="text-xl bg-transparent font-bold">12th Grade</h3>
    //         <p className="text-sm bg-transparent text-purple-300">Science - GyanGanga School</p>
    //         <p className="text-lg bg-transparent font-bold text-white mt-1">70.17%</p>
    //         <p className="text-sm bg-transparent text-gray-400 mt-1">2021 - 2022</p>
    //       </div>
    //     </motion.div>

    //     {/* Card 3 - Left Side */}
    //     <motion.div
    //       className="flex md:justify-start justify-center bg-transparent relative z-10"
    //       initial={{ opacity: 0, x: -100 }}
    //       animate={isInView ? { opacity: 1, x: 0 } : {}}
    //       transition={{ delay: 2.2, duration: 0.6 }}
    //     >
    //       <div className="mr-10 max-md:mr-0 backdrop-blur-md border border-purple-500/10 bg-gradient-to-tr from-purple-400/10 via-slate-900/15 to-purple-500/10 shadow-purple-500/10 rounded-xl p-5 w-[300px] max-md:text-center">
    //         <motion.div
    //           className="absolute max-md:hidden bg-transparent top-1/2 left-[126.5%] transform -translate-x-1/2 -translate-y-1/2 flex flex-row-reverse items-center z-10"
    //           initial={{ opacity: 0 }}
    //           animate={isInView ? { opacity: 1 } : {}}
    //           transition={{ delay: 2.4 }}
    //         >
    //           <div className="w-5 h-5 bg-white rounded-full" />
    //           <div className="w-[138px] h-0.5 bg-purple-500" />
    //         </motion.div>
    //         <h3 className="text-xl bg-transparent font-bold">10th Grade</h3>
    //         <p className="text-sm bg-transparent text-purple-300">GyanGanga School</p>
    //         <p className="text-lg bg-transparent font-bold text-white mt-1">78.17%</p>
    //         <p className="text-sm bg-transparent text-gray-400 mt-1">2019 - 2020</p>
    //       </div>
    //     </motion.div>
    //   </motion.div>
    // </section>


    // original

    <section
      id="education"
      ref={ref}
      className="relative bg-black text-white py-20 px-5 mt-20 flex justify-center min-h-screen"
    >
      <motion.div
        className="relative w-full max-w-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="inline-block backdrop-blur-md border border-purple-500/10 bg-gradient-to-tr from-purple-400/10 via-slate-900/15 to-purple-500/10 shadow-purple-500/10 p-[11px] rounded-md">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-400">
              Education
            </span>
          </span>
        </motion.h2>

        {/* Center Vertical Line */}
        <motion.div
          className="absolute left-[49.8%] top-16 h-full w-1 bg-purple-500 transform -translate-x-1/2"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
        />

        {/* Card 1 - Left Side */}
        <motion.div
          className="flex justify-center lg:justify-start bg-transparent mb-16 relative z-10"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="mr-10backdrop-blur-md border border-purple-500/10 bg-gradient-to-tr from-purple-400/10 via-slate-900/15 to-purple-500/10 shadow-purple-500/10 rounded-xl p-5 w-[300px] text-center lg:text-right">
            <motion.div
              className="absolute bg-transparent top-1/2 left-[42.3%] transform -translate-x-1/2 -translate-y-1/2 hidden lg:flex flex-row-reverse items-center z-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2 }}
            >
              <div className="w-5 h-5 bg-white rounded-full" />
              <div className="w-[138px] h-0.5 bg-purple-500" />
            </motion.div>
            <h3 className="text-xl bg-transparent font-bold">Bachelor of Engineering</h3>
            <p className="text-sm bg-transparent text-purple-300">Computer Science - GEC Rajkot</p>
            <p className="text-lg font-bold bg-transparent text-white mt-1">7.87 CGPA</p>
            <p className="text-sm bg-transparent text-gray-400 mt-1">2022 - 2026</p>
          </div>
        </motion.div>

        {/* Card 2 - Right Side */}
        <motion.div
          className="flex justify-center lg:justify-end bg-transparent mb-16 relative z-10"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <div className="ml-10backdrop-blur-md border border-purple-500/10 bg-gradient-to-tr from-purple-400/10 via-slate-900/15 to-purple-500/10 rounded-xl shadow-purple-500/10rounded-xl p-5 w-[300px] text-center lg:text-left">
            <motion.div
              className="absolute bg-transparent top-1/2 left-[57.7%] transform -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center z-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.8 }}
            >
              <div className="w-5 h-5 bg-white rounded-full" />
              <div className="w-[138px] h-0.5 bg-purple-500" />
            </motion.div>
            <h3 className="text-xl bg-transparent font-bold">12th Grade</h3>
            <p className="text-sm bg-transparent text-purple-300">Science - GyanGanga School</p>
            <p className="text-lg font-bold bg-transparent text-white mt-1">70.17%</p>
            <p className="text-sm bg-transparent text-gray-400 mt-1">2021 - 2022</p>
          </div>
        </motion.div>

        {/* Card 3 - Left Side */}
        <motion.div
          className="flex justify-center lg:justify-start bg-transparent relative z-10"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 2.2, duration: 0.6 }}
        >
          <div className="mr-10backdrop-blur-md border border-purple-500/10 bg-gradient-to-tr from-purple-400/10 via-slate-900/15 to-purple-500/10 shadow-purple-500/10 rounded-xl p-5 w-[300px] text-center lg:text-right">
            <motion.div
              className="absolute bg-transparent top-1/2 left-[42.3%] transform -translate-x-1/2 -translate-y-1/2 hidden lg:flex flex-row-reverse items-center z-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 2.4 }}
            >
              <div className="w-5 h-5 bg-white rounded-full" />
              <div className="w-[138px] h-0.5 bg-purple-500" />
            </motion.div>
            <h3 className="text-xl bg-transparent font-bold">10th Grade</h3>
            <p className="text-sm bg-transparent text-purple-300">GyanGanga School</p>
            <p className="text-lg font-bold bg-transparent text-white mt-1">78.17%</p>
            <p className="text-sm bg-transparent text-gray-400 mt-1">2019 - 2020</p>
          </div>
        </motion.div>
      </motion.div>
    </section>

  )
}

export default Education