import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const AnimationOnView = (props) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger the animation once when it comes into view
  });

  // Define animation variants
  const animationVariants = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0 },
  };


  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={animationVariants}
      transition={{ duration: 0.5 }} // Adjust the duration as needed
    >
      {props.children}
    </motion.div>
  )
}

export default AnimationOnView