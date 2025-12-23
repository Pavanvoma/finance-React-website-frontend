import React from 'react'
import Navbar from './navbar';
import Footer from './Footer';

const About = () => {
  return (
    <>
    <Navbar/>
    <Heading/>
    <Aboutus/>
    <Key/>
    <Scrolling/>
    <Footer/>
    </>
  );
};

export default About;
function Heading(){
    return(
        <div className='max-w-full'>
            <img src="https://chakrafin.com/images/aboutusbanner1.jpg"></img>
        </div>
    )
}

function Aboutus(){
  return(
    <>
    <div>
      <h1 className='text-pink-600 font-bold text-3xl mt-12 mb-10 text-center'> About Us</h1>
      </div>
      <div className='grid grid-cols-2 gap-x-16 max-w-6xl mx-auto'>
        <div>
          <div>
            <p className='opacity-80 text-gray-700 mb-4'>We are delighted to introduce Chakra Financial Servcies, your trusted partner in Financial Services. At Chakra Financial Servcies, we specialize in diverse Financial activities, encompassing Financial Services.

<br/>
Our primary product categories include Personal Loans, Business Loans, Home Loans, Mortgage Loans, Education Loans, Over Draft / Cash of Credit , LC / BG / SBLC.</p>
          </div>
          <div className='border-4 border-pink-400 p-3 text-center mb-4 rounded-md'>
            <h1 className='font-bold text-orange-400'>Our Vision</h1>
            <p className='opacity-80 text-gray-700 '>At Chakra Financial Servcies, we envision a world where global trade is seamlessly interconnected, fostering economic growth, cultural exchange, and sustainable development. Our vision is to be the foremost import-export company, driving innovation, trust, and prosperity in every corner of the world.</p>
          </div>
          <div className='border-4 border-pink-400 p-2 text-center rounded-md'>
            <h1 className='font-bold text-orange-400'>Our Mission</h1>
            <p className='opacity-80 text-gray-700 '>Our mission at Chakra Financial Servcies is to facilitate international trade by providing exceptional import and export solutions that empower businesses and individuals to thrive in the global marketplace.</p>
          </div>
        </div>
        <div>
          <img src="https://chakrafin.com/images/aboutusimg3.webp" className='rounded-md hover:scale-105 h-full'></img>
        </div>
      </div>
    </>
  )
}
function Key() {
  return (
    <>
    <div className='grid grid-cols-2 mt-20 gap-x-16 max-w-5xl mx-auto '>
    <div className="h-24 bg-linear-to-r from-blue-400 to-orange-500  w-96  rounded-2xl">
      <p className='underline decoration-4 text-center text-2xl p-2 mt-8'>Key Person</p>
    </div>
    <div className='text-center'>
      <h1 className='text-pink-500 font-bold text-3xl mb-2'>CHANDRA SENA REDDY</h1>
      <p className='text-gray-700 opacity-80 underline decoration-2 text-xl mb-4'>Managing Partner</p>
      <h6 className='font-bold text-xl'>Chakra Financial Services</h6>
    </div>
  </div>
  
  <div className='border-4 border-blue-500 opacity-80 p-12 mt-12 gap-x-16 max-w-5xl mx-auto rounded-2xl'>
    <div>
    <p className='text-gray-800 opacity-80 mb-6'>I am honored to welcome you to our organization’s website. As the Managing Partner of Chakra Financial Servcies, it is both a privilege and a pleasure to convey my thoughts and aspirations through this digital platform. Since our inception, Chakra Financial Servcies has been dedicated to a vision of excellence, innovation, and service to our customers, employees, and communities. We have come a long way, achieved significant milestones, and weathered various challenges. Throughout this journey, one constant has remained unchanged – our unwavering commitment to delivering value and making a positive impact.</p>
    <p className='text-gray-800 opacity-80 mb-6'>Our success story is a testament to the dedication and hard work of our talented team, the trust and support of our customers, and the resilience of our organization. As we embrace the digital age and navigate an ever-evolving business landscape, we remain steadfast in our core values and principles. In an era of rapid change, we understand the importance of adaptability and staying ahead of the curve. Therefore, we continue to invest in research and development, embrace sustainable practices, and foster a culture of continuous learning and growth.</p>
    <p className='text-gray-800 opacity-80 mb-6'>At Chakra Financial Servcies, we are not just in the business of Financial Services, but we are also committed to being responsible corporate citizens. We strive to make a positive social and environmental impact through our initiatives and partnerships. This website serves as a window into our world, where you can explore our products/services, learn about our history and values, and stay updated on our latest endeavors. We value your feedback and look forward to engaging with you through this platform. As we move forward, I invite you to join us on this exciting journey. Together, we can shape a brighter future and create lasting value for all stakeholders.</p>
  </div>
  <div className='text-center'>
    <p className='text-gray-800 opacity-80'>Thank you for your trust and support.</p>
    <p className='text-gray-800 opacity-80 '>Warm regards,</p>
    <a href='https://docs.google.com/forms/d/e/1FAIpQLSdAalWTTxaP8gUTdu-AsT43C4YAayrCtv6_aE5U6faMQsmFmw/viewform'><p className='underline'>Data Form</p> </a>
  </div>
  </div>
  </>
  )
}


function Scrolling(){
  return(
    <>
    <div className='text-center'>
      <h1 className='text-3xl text-blue-900 font-bold mt-24'>Our Beloved Clients</h1>
    </div>
      <div className='bg-transparent mx-auto flex items-center justify-center p-3 ml-24 mr-24 mt-11 shadow-2xl shadow-gray-50'>
        
        <marquee behavior="scroll" direction="left" scrollamount="12" loop="infinite">
          
          <img
            src="https://www.miscw.com/wp-content/uploads/2018/05/Banks-in-India.jpg"
            className="h-40 w-fit inline-block align-middle mr-4"
          />
          <img
            src="https://i.pinimg.com/564x/11/6d/fe/116dfe5d2434ff42bc24880529d6b825.jpg"
            className="h-40 w-fit  inline-block align-middle mr-4"
          />
          <img
            src="https://i1.wp.com/b4investing.com/wp-content/uploads/2021/04/Indian-Banking-classificati.jpg?fit=2240%2C1260&ssl=1"
            className="h-40 w-fit inline-block align-middle mr-4"
          />
          <img
            src="https://www.miscw.com/wp-content/uploads/2018/05/Banks-in-India.jpg"
            className="h-40 w-fit inline-block align-middle mr-4"
          />
          <img
            src="https://i.pinimg.com/564x/11/6d/fe/116dfe5d2434ff42bc24880529d6b825.jpg"
            className="h-40 w-fit  inline-block align-middle mr-4"
          />
          <img
            src="https://i1.wp.com/b4investing.com/wp-content/uploads/2021/04/Indian-Banking-classificati.jpg?fit=2240%2C1260&ssl=1"
            className="h-40 w-fit inline-block align-middle"
          />

        </marquee>

      </div>
      </>
      )
      }


