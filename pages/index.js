import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Hero from '@/components/hero'
import cn from 'classnames'
import imageSection from '@/components/imageSection'
import AnimationOnView from '@/components/AnimationOnView'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {


 const subText='مبادرة استراتيجية لتعزيز الأمن الغذائي'
 const  title='بطاقة ذكية واحدة'
 const  text='بطاقة ذكية واحدة طريقة ذكية وبسيطة وآمنة لمشاركة معلومات الاتصال الخاصة بك. بطاقات Logic قابلة للتخصيص! يمكنك تحديث المعلومات الخاصة بك كما تشاء . تنعكس التغييرات التي تم إجراؤها في نفس اللحظة!'

 const text2 ="لا تفقد شركاء أو عملاء محتملين .. أطلب الأن"
  




  return (
    <main
      
    >

<Header/>
<Hero/>

<AnimationOnView>


<div id='intellegent' className='   lg:mt-12 mt-24 mb-12'>
<div  className='container max-w-6xl mx-auto px-2 relative'>
      <div className={cn(
        "flex flex-col md:flex-row gap-2 md:gap-6 lg:gap-12 justify-center after:bg-ngc_orange after:h-4 after:w-8/12 after:absolute after:md:hidden after:top-40 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 md:flex-row-reverse",
        
      )}>
        <div className='w-full lg:w-1/2 rounded-xl lg:rounded-3xl overflow-hidden h-[300px] sm:h-[433px] md:h-[525px] flex max-md:mb-4'>
          <img src={"/sectionimage-1.jpg"} alt='image' className='w-full object-cover hover:scale-125 transition-all' />
        </div>
        <div className='w-full lg:w-1/2   lg:mt-[55px]'>
          <div className="text-center md:text-right ">
            {/* <p className='text-base lg:text-xl text-ngc_secondary font-light lg:mb-4'>{subText}</p> */}
            <h2 className='text-2xl md:text-3xl lg:text-5xl text-ngc_orange font-bold mb-2 lg:mb-8'>{title}</h2>
            <p className='text-base lg:text-xl text-ngc_secondary font-extralight leading-6 lg:!leading-10 text-justify'>{text}</p>
            <p className='text-base lg:text-xl text-ngc_secondary font-extralight leading-6 lg:!leading-10 text-justify mt-2'>{text2}</p>




          </div>
        </div>
      </div>
    </div>
</div>

</AnimationOnView>



<AnimationOnView>

  <Contact/>
</AnimationOnView>


<Footer/>


    
    </main>
  )
}
