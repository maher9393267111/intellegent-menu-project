import React, { useState } from "react";
// import Layout from "../components/Layout";
// import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// import { firestore } from "../firebase/config";
// import { useTheme } from "next-themes";
import { toast } from "react-toastify";

// icons
import { MdLocalPostOffice as MailIcon } from "react-icons/md";

import {
  FaInstagram as InstagramIcon,
  FaGithub as GithubIcon, FaFacebook as FacebookIcon
} from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";
import { BsTwitter as TwitterIcon } from "react-icons/bs";
import { ImSpinner3 as SpinnerIcon } from "react-icons/im";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [phone ,setPhone] = useState("")
  

  const sendMessage = async (data) => {
    try {
      setIsLoading(true);
  
      const res = await fetch(`/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({
          title: "تواصل",
          name: name,
          email: email,
          message:message,
          subject: subject,
           phone: phone,
        }),
      });

      console.log("response", res?.status);

      if (res.status === 200) {
        toast.success(" تم ارسال الرسالة بنجاح");
      }
    

   


      setIsLoading(false);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setPhone("")
      toast.success("تم ارسال الرسالة بنجاح!", {
        position: "top-right",
        autoClose: 5000,
       
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      setIsLoading(false);
      toast.error("فشل ارسال الرسالة", {
        position: "top-right",
        autoClose: 5000,
        
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('name'  ,name ,"email" , email ,"subject" , subject ,"mesage",  message ,"phone" ,phone)
    if (name && email && subject && message && phone) {
      sendMessage({
        name,
        email,
        subject,
        message,
        phone
      });
    } else {
      toast.error("الرجاء ملأ جميع المدخلات", {
        position: "top-right",
        autoClose: 5000,
        
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };



  return (
    // <Layout title="Contact Us" description="Contact Me">
      <main id='contact' className=" md:py-12 bg-gray-50 dark:bg-dark-500">
        <div className="bg-gray-50 dark:bg-dark-500">
          <div className="relative z-10 overflow-hidden py-8">
            <div className="max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              تواصل معنا
              </h1>
              <p className="mt-6 text-xl text-gray-500 dark:text-gray-200 max-w-3xl">
                {/* Share any problem, feedback, or question you have. */}
              </p>
            </div>
          </div>
        </div>
        <section className="relative" aria-labelledby="contactHeading">
          <div
            className="absolute w-full h-1/2 bg-gray-50 dark:bg-dark-500"
            aria-hidden="true"
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative border dark:border-none bg-white dark:bg-dark-900 shadow-xl">
              <h2 id="contactHeading" className="sr-only">
                Contact us
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 ">
                <div className="
                lg:order-last
                relative rounded-lg overflow-hidden py-10 px-6 bg-gradient-to-b from-gray-700 to-gray-800 dark:from-dark-100 dark:to-dark-900 sm:px-10 xl:p-12 shadow-lg ">
                  <div
                    className="absolute inset-0 pointer-events-none sm:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={343}
                      height={388}
                      viewBox="0 0 343 388"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                        fill="url(#linear1)"
                        fillOpacity="0.1"
                      />
                      <defs>
                        <linearGradient
                          id="linear1"
                          x1="254.553"
                          y1="107.554"
                          x2="961.66"
                          y2="814.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={359}
                      height={339}
                      viewBox="0 0 359 339"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                        fill="url(#linear2)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear2"
                          x1="192.553"
                          y1="28.553"
                          x2="899.66"
                          y2="735.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={160}
                      height={678}
                      viewBox="0 0 160 678"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                        fill="url(#linear3)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear3"
                          x1="192.553"
                          y1="325.553"
                          x2="899.66"
                          y2="1032.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white">
                  معلومات الاتصال
                  </h3>
                  <p className="mt-6 text-base text-gray-50 max-w-3xl">
                     
يمكنك الاتصال بالدعم من النموذج الموجود على اليمين، أو التواصل معنا على وسائل التواصل الاجتماعي. هل تريد مشاركة التعليقات بدلاً من ذلك؟
                  </p>
                  <dl className="mt-8 space-y-6">
                    <dt>
                      <span className="sr-only">Address</span>
                    </dt>
                    <dt>
                      <span className="sr-only">Email</span>
                    </dt>
                    <dd className="flex items-center text-base text-gray-50">
                      <MailIcon className="flex-shrink-0 w-6 h-6 text-gray-200" />
                      <a
                        href="mailto:skna2605@gmail.com"
                        className="ml-2"
                      >
                        skna2605@gmail.com
                      </a>
                    </dd>
                  </dl>


                  <dl className="mt-8 space-y-6">
                    <dt>
                      <span className="sr-only">phone</span>
                    </dt>
                    <dt>
                      <span className="sr-only">number</span>
                    </dt>
                    <dd className="flex items-center text-base text-gray-50">
                      <FaPhoneSquare className="flex-shrink-0 w-6 h-6 text-gray-200" />
                      <a
                        // href="mailto:skna2605@gmail.com"
                        className="ml-2"
                      >
                        
                        0507301710
                    
                      </a>
                    </dd>
                  </dl>


                  <ul className="mt-8 flex space-x-1 gap-2" role="list">
                    <li>
                      <a
                        className="text-gray-200 hover:text-pink-400 transition-all "
                        target="_blank"
                        href="https://www.instagram.com/logic.4tech/?hl=ar"
                        rel="noreferrer nofollow"
                        title="Instagram"
                      >
                        <span className="sr-only">Instagram</span>
                        <InstagramIcon className="w-6 h-6" />
                      </a>
                    </li>

                    {/* <li>
                      <a
                        className="text-gray-200 hover:text-green-400 transition-all "
                        target="_blank"
                        // href="https://www.instagram.com/logic.4tech/?hl=ar"
                        rel="noreferrer nofollow"
                        title="Instagram"
                      >
                        <span className="sr-only">Instagram</span>
                        <FaPhoneSquare className="w-6 h-6" />
                      </a>
                    </li> */}


                    <li>
                      <a
                        className="text-gray-200 hover:text-blue-600 transition-all "
                        target="_blank"
                        href="https://www.facebook.com/profile.php?id=61554600908983"
                        rel="noreferrer nofollow"
                        title="Github"
                      >
                        <span className="sr-only">Facebook</span>
                        <FacebookIcon className="w-6 h-6" />
                      </a>
                    </li>
                    {/* <li>
                      <a
                        className="text-gray-200 hover:text-blue-500 transition-all "
                        target="_blank"
                        href="https://twitter.com/sahilverma_dev"
                        rel="noreferrer nofollow"
                        title="Twitter"
                      >
                        <span className="sr-only">Twitter</span>
                        <TwitterIcon className="w-6 h-6" />
                      </a>
                    </li> */}
                    <li>
                      <a
                        className="text-gray-200"
                        target="_blank"
                        href="https://www.getmenu.ps"
                        rel="noreferrer nofollow"
                        title="Portfolio"
                      >
                        <span className="sr-only">website</span>
                        <img
                          src="https://www.getmenu.ps/assets/img/logo_2.png"
                          className="w-6 h-6 aspect-square rounded-full"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-200">
                  أرسل لنا رسالة
                  </h3>
                  <form

                    className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                    onSubmit={handleSubmit}
                  >
                    <div>
                      <label
                        htmlFor="first_name"
                        className="block text-sm font-medium text-gray-900 dark:text-gray-200"
                      >
                        الاسم
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          className="py-3 px-4 block w-full shadow-sm text-gray-900 dark:text-gray-200 focus:ring-gray-500 focus:border-gray-500 border border-gray-300 dark:border-dark-100 dark:bg-dark-600 rounded-md"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          disabled={isLoading}
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-900 dark:text-gray-200"
                      >
                       الإيميل
                      </label>
                      <div className="mt-1">
                        <input
                          type="email"
                          className="py-3 px-4 block w-full shadow-sm text-gray-900 dark:text-gray-200 focus:ring-gray-500 focus:border-gray-500 border border-gray-300 dark:border-dark-100 dark:bg-dark-600 rounded-md"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          disabled={isLoading}
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>


                    {/* ----PHONE----- */}
                    <div className=" sm:col-span-2">
                      <label
                        htmlFor="first_name"
                        className="block text-sm font-medium text-gray-900 dark:text-gray-200"
                      >
                       رقم الهاتف
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          className="py-3 px-4 block w-full shadow-sm text-gray-900 dark:text-gray-200 focus:ring-gray-500 focus:border-gray-500 border border-gray-300 dark:border-dark-100 dark:bg-dark-600 rounded-md"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          disabled={isLoading}
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>



                    <div className="sm:col-span-2">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-900 dark:text-gray-200"
                      >
                       الخدمة المطلوبة
                      </label>
                      <div className="mt-1">
                        {/* <input
                          type="text"
                          className="py-3 px-4 block w-full shadow-sm text-gray-900 dark:text-gray-200 focus:ring-gray-500 focus:border-gray-500 border border-gray-300 dark:border-dark-100 dark:bg-dark-600 rounded-md"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          disabled={isLoading}
                          placeholder="Enter your subject"
                        /> */}

<select
   onChange={(e) => setSubject(e.target.value)}
   value={subject}
className="py-3 px-8 block w-full shadow-sm text-gray-900 dark:text-gray-200 focus:ring-gray-500 focus:border-gray-500 border border-gray-300 dark:border-dark-100 dark:bg-dark-600 rounded-md"

name="" id="">
    <option value="">اختيار نوع الخدمة</option>
<option value="qr">مينيو الكتروني QR</option>
<option value="menu-with-order">مينيو الكتروني مع إمكانية الطلب</option>
<option value="paper-menu">مينيو ورقي</option>
<option value="nfc">بطاقة عمل ذكية  NFC</option>

</select>





                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-900 dark:text-gray-200"
                        >
                          الرسالة
                        </label>
                        <span
                          id="message-max"
                          className="text-sm text-gray-500"
                        >
                          Max. 1500 characters
                        </span>
                      </div>
                      <div className="mt-1">
                        <textarea
                          rows={4}
                          className="py-3 px-4 block w-full shadow-sm border text-gray-900 dark:text-gray-200 focus:ring-gray-500 focus:border-gray-500 border-gray-300 dark:border-dark-100 dark:bg-dark-600 rounded-md"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          disabled={isLoading}
                          placeholder="Enter your message"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2 sm:flex sm:justify-start">
                      <button
                        type="submit"
                        className="mt-2 disabled:opacity-50 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 dark:bg-dark-300 !bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:w-auto"
                        disabled={isLoading}
                      >
                        {isLoading && (
                          <SpinnerIcon className="w-5 h-5 aspect-square mr-2 text-white animate-spin dark:text-gray-600 fill-blue-600 dark:fill-primary-400" />
                        )}
                        {isLoading ? "جاري الارسال..." : "ارسل"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    // </Layout>
  );
};

export default Contact;