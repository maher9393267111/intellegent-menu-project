import React from 'react'
import AnimationOnView from './AnimationOnView';

export default function imageSection(props) {
  return (
    // <AnimationOnView>
      
    <div id={props.id} className='container max-w-6xl mx-auto px-2 relative'>
      <div className={cn(
        "flex flex-col md:flex-row gap-2 md:gap-6 lg:gap-12 justify-center after:bg-ngc_orange after:h-4 after:w-8/12 after:absolute after:md:hidden after:top-40 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2",
        { 'md:flex-row-reverse': props.reverse }
      )}>
        <div className='w-full lg:w-1/2 rounded-xl lg:rounded-3xl overflow-hidden h-40 md:h-[525px] flex max-md:mb-4'>
          <img src={props.imgUrl} alt='image' className='w-full object-cover hover:scale-125 transition-all' />
        </div>
        <div className='w-full lg:w-1/2'>
          <div className="text-center md:text-right">
            <p className='text-base lg:text-xl text-ngc_secondary font-light lg:mb-4'>{props.subText}</p>
            <h2 className='text-2xl md:text-3xl lg:text-5xl text-ngc_orange font-bold mb-2 lg:mb-8'>{props.title}</h2>
            <p className='text-base lg:text-xl text-ngc_secondary font-extralight leading-6 lg:!leading-10 text-justify'>{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  // </AnimationOnView>
  )
}
