// import React from 'react';
// import image from '../assets/ngc/hero background.png';
import { HeroText } from "../utils/content.json";
import { motion } from "framer-motion";
import { FiArrowDown, FiArrowLeft } from "react-icons/fi";
import Image from 'next/image'
import HeroImage from "../public/hero-img.png";

const Hero = () => {
  const scrollNextSection = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  }
  return (
    // hero section:
    // hight: 100vh at least 500px
    // bg: image from assets folder
    // have a div with a class of container mx-auto px-4
    // have a div contain the text (large title and normal text)

    <div id="hero" className='min-h-screen w-screen overflow-x-hidden bg-cover bg-center bg-no-repeat bg-ngc_dark' style={{ backgroundImage: `url("https://media.istockphoto.com/id/1401295466/vector/halftone-spotted-background.jpg?s=612x612&w=0&k=20&c=ql7PRJ1ffHk-Zkj4cDeePpLzmqAPzgIVtfBkCsoqK2Q=")` }}>


<div className=" flex justify-center   py-14 flex-col-reverse flex-co items-center !h-full overflow-x-hidden  !w-[80%] mx-auto md:flex-row md:mx-12 !container">



<div className='min-h-screen container  max-w-6xl mx-auto px-4 py-14 flex flex-col justify-center h-full'>

{/* image  */}




        <motion.h1 
          initial={{ y: "4rem", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
          className='max-w-2xl text-3xl md:text-5xl lg:text-7xl max-md:text-center text-ngc_white font-bold !leading-relaxed mb-4'>
          {HeroText.MainHeader}
        </motion.h1>
        <motion.p 
          initial={{ y: "4rem", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }}
          className='max-w-2xl text-lg lg:text-xl max-md:text-center text-ngc_white !leading-snug font-thin mb-8'>
          {HeroText.SubHeader}
        </motion.p>
        <motion.p 
          initial={{ y: "4rem", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }}
          className='max-w-2xl text-lg lg:text-xl max-md:text-center text-ngc_white !leading-snug font-thin mb-8'>
          {HeroText.SubHeader2}
        </motion.p>
        <div className='text-base md:text-lg lg:text-2xl max-md:text-center'>
          <motion.button
            onClick={scrollNextSection}
            initial={{ x: "-5rem", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1, duration: 0.6 }}
            className='group inline-flex items-center gap-2 px-4 py-2 lg:px-6 lg:py-4 bg-ngc_white text-ngc_brown'>
            {HeroText.Button.Title} <span className='relative group-hover:-left-1'><FiArrowLeft /></span>
          </motion.button>
        </div>
      </div>


      <div className="">
    <Image width={600} height={600} className=" !w-full !h-full" src={HeroImage} alt="" />
</div>



</div>


    





      <button 
        type='button' 
        className='absolute left-1/2 -translate-x-1/2 bottom-5 transition-all hover:bottom-6 rounded-full bg-[#00000050] hover:bg-[#00000090] p-3'
        onClick={scrollNextSection}
      >
        <span className='text-ngc_white text-2xl w-8 h-8 bg-ngc_brown'><FiArrowDown /></span>
      </button>
    </div>
  )
}

export default Hero