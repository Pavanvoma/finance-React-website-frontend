import React, { useState } from 'react'
import Footer from './Footer'
import Navbar from './navbar';



const Hi = () => {
  return (
    <>
    <Navbar/>
   <Curosel/>
   <Banner/>
   <Corefeature/>
   <Company/>
   <Services/>
   <Scrolling/>
  <Footer/>
    </>
  )
}
export default Hi


function Curosel(){
  return(
    <div className='relative w-full mt-20'>
      <img src="https://chakrafin.com/images/bannerimg3.jpg" className='w-full'></img>
      <h1 className='absolute top-6 left-5 font-bold text-2xl text-amber-50 animate-bounce'> Education loan</h1>
    </div>
  )
}

function Banner(){
  return(
    <>
    <div className='mt-14 flex flex-col text-center justify-center'>
      <h1 className='text-amber-500 font-bold text-2xl mb-6'>Find Loan Products We Offers</h1>
      <p className='text-gray-500 font-bold opacity-80 '> We will match you with a loan program that meet your financial need.<br/> In short term liquidity, by striving to make funds available to them within 24 hours of application.</p>
    </div>

    <div className='grid grid-cols-2 mt-12 p-5 gap-5'>
      <div className=' grid grid-cols-2'>
      <div className='text-center flex flex-col justify-center items-center p-12 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-amber-100 hover:shadow-xs'>
        <img src="https://chakrafin.com/images/solutionfocused.png" className='w-20 h-20 mb-7'></img>
        <h1 className='text-amber-500 font-bold mb-6 text-2xl'>Solution Focused</h1>
        <p className='text-gray-500 font-bold'>We always provide people a complete solution focused of any business.</p>
      </div>
<div className='text-center flex flex-col justify-center items-center p-12 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-amber-100 hover:shadow-xs'>
        <img src="https://chakrafin.com/images/customerdoubts.png" className='w-20 h-20 mb-7'></img>
        <h1 className='text-amber-500 font-bold mb-6 text-2xl'>Solution Focused</h1>
        <p className='text-gray-500 font-bold'>We always provide people a complete solution focused of any business.</p>
      </div>
      <div className='text-center flex flex-col justify-center items-center p-12 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-amber-100 hover:shadow-xs'>
        <img src="https://chakrafin.com/images/success.png" className='w-20 h-20 mb-7'></img>
        <h1 className='text-amber-500 font-bold mb-6 text-2xl'>Solution Focused</h1>
        <p className='text-gray-500 font-bold'>We always provide people a complete solution focused of any business.</p>
      </div>
      <div className='text-center flex flex-col justify-center items-center p-12 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-amber-100 hover:shadow-xs'>
        <img src="https://chakrafin.com/images/decisionmaker.png" className='w-20 h-20 mb-7'></img>
        <h1 className='text-amber-500 font-bold mb-6 text-2xl'>Solution Focused</h1>
        <p className='text-gray-500 font-bold'>We always provide people a complete solution focused of any business.</p>
      </div>

      </div>
      <div className='flex justify-center mt-24'>
        <img src="https://chakrafin.com/images/allloans.jpg" className='rounded-full border-4 border-dashed border-red-500 p-1'></img>
      </div>

    </div>
    </>
  )
}

function Corefeature(){
  return(
    <>
    <div className='mt-16 ml-32 '>
      <h1 className='text-3xl font-bold text-orange-800 mb-4 text-[50px]'>---Our Core Features</h1>
      <p className='font-bold text-blue-500 mb-4'> WE ARE THE TRUSTED EXPERTS WE KEEP THINGS SIMPLE</p>
      <p className='text-gray-600 mr-32 mb-4 opacity-80'>Flexible loan options, including personal, home, and business loans, Mortagage Loans, Over Draft. Competitive interest rates and repayment plans tailored to your needs. Quick approval process with minimal paperwork.</p>
      <p className='text-gray-600 mr-32 opacity-80'>Our financial services combine innovation, expertise, and customer-centric solutions to help individuals and businesses thrive. We prioritize security, efficiency, and your unique needs, ensuring a seamless financial journey</p>
    </div>

    <div className='text-center mt-16'>
      <h1 className='text-pink-400 text-2xl font-bold mb-4'> How It Works</h1>
      <p className='text-3xl'> Get Your Loan in 3 Easy Steps</p>
      <div className='grid grid-cols-3 mt-16 ml-24 mr-24 gap-12 '>
        <div className="flex flex-col justify-center items-center hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-amber-300 hover:shadow-xl'>">
          <img src="https://chakrafin.com/images/calculatoricon.png" className='w-30 h-32 mb-12'></img>
          <h1 className='text-orange-400 font-black mb-4'>Select Amount and Terms</h1>
          <p className='text-gray-600 opacity-80'>Choose the loan amount and repayment terms that suit your financial goals.</p>
        </div>
        <div className="flex flex-col justify-center items-center hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-amber-300 hover:shadow-xl'>">
          <img src="https://chakrafin.com/images/enterpersonal.png" className='w-30 h-32 mb-12'></img>
          <h1 className='text-orange-400 font-black mb-4'>Select Amount and Terms</h1>
          <p className='text-gray-600 opacity-80'>Choose the loan amount and repayment terms that suit your financial goals.</p>
        </div>
       <div className="flex flex-col justify-center items-center hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-amber-300 hover:shadow-xl'>">
          <img src="https://chakrafin.com/images/loanapprovedicon.png"className='w-30 h-32 mb-12'></img>
          <h1 className='text-orange-400 font-black mb-4'>Select Amount and Terms</h1>
          <p className='text-gray-600 opacity-80'>Choose the loan amount and repayment terms that suit your financial goals.</p>
          </div>
          
      </div>
    </div>
    </>
  )
}

function Company(){
  return(
    <div className='grid grid-cols-2 mt-16 ml-14 gap-24 mr-0'>
    <div>
        <div className="mt-16" >
          <h1 className='text-orange-500 font-bold mb-4 text-3xl'>Why to Choose Our Company</h1>
          <p className='text-gray-500 opacity-80'>With years of industry experience, we provide personalized financial solutions tailored to your goals. Leveraging cutting-edge technology, we ensure secure, efficient, and forward-thinking financial services. Your success is our priority, and we deliver exceptional support and results-driven strategies to help you thrive.</p>
        </div>
        <div>
          <div className='flex mt-10 gap-24 ml-20  '>
          <div>
            <img src="https://chakrafin.com/images/nohiddenfeesicon.png" className='w-25 h-25 animate-pulse'></img>
          </div>
          <div className='hover:scale-105'>
            <h1 className='text-amber-500 font-bold mb-4 text-2xl '>No Prepayment Or Hidden Fees</h1>
            <p className='text-gray-600 opacity-80'>Enjoy transparent terms with no hidden charges or prepayment penalties.</p>
          </div>
          
        </div>
        
        <div className='flex mt-10 gap-24 ml-20  '>
          <div>
            <img src="https://chakrafin.com/images/directfunds.png" className='w-25 h-25 animate-pulse'></img>
          </div>
          <div className='hover:scale-105'>
            <h1 className='text-amber-500 font-bold mb-4 text-2xl '>Direct Funds & Quick Loan Approvals</h1>
            <p className='text-gray-600 opacity-80'>Receive immediate funds with fast and hassle-free loan approval</p>
          </div>
          
        </div>
        
        <div className='flex mt-10 gap-24 ml-20  '>
          <div>
            <img src="https://chakrafin.com/images/lossicon.png" className='w-25 h-25 animate-pulse'></img>
          </div>
          <div className='hover:scale-105'>
            <h1 className='text-amber-500 font-bold mb-4 text-2xl '>Lots of Financial Options</h1>
            <p className='text-gray-600 opacity-80'>Explore a wide range of flexible financial solutions tailored to your needs.</p>
          </div>
          
        </div>
        
        
        </div>
        
        </div>
  
      <div className='flex justify-center mt-24 h-96 w-full'>
        <img src="https://chakrafin.com/images/whychoosebanner.png" className='border-3  border-red-300 border-dashed p-5'></img>
      </div>
    </div>
  )
}

function Services(){
  
  
  const data=[
    {
      id: 1,
      name: "personal loans",
      image:"https://chakrafin.com/images/personalloanimg.avif",
      imagesmall:"https://chakrafin.com/images/personalloanicon.png",
      content:"Personal Loans: Flexible Solutions for Your Financial Needs",
      paragraph:"At chakra financial services, we understand that life is full of unexpected expenses, and sometimes you need a little extra financial support. Our personal loans are designed to provide fast, flexible solutions to help you meet your goals, whether you're consolidating debt, covering medical expenses, making home improvements, or planning a major purchase..",
      button:"Get Instant loan",    
    },
    {
      id:2,
      name:"mortigage loans",
      image:"https://chakrafin.com/images/mortgageimg.jpeg",
      imagesmall:"https://chakrafin.com/images/financialbonusicon.png",
      content:"Mortgage Loans: Make Your Homeownership Dream a Reality",
      paragraph:"At Chakra Financial Services, we understand that purchasing a home is one of life’s most significant milestones. Our mortgage loan solutions are designed to make the process simple and affordable, whether you’re buying your first home, moving into a larger space, or refinancing an existing property. With competitive rates, flexible options, and expert support, we’re here to help you every step of the way.",
      button:"Get Instant Loan"
    },
    {
      id:3,
      name:"Bussiness loans",
      image:"https://chakrafin.com/images/buisinessloanimg.jpg",
      imagesmall:"https://chakrafin.com/images/businessloanicon.png",
      content:"Business Loans: Fuel Your Growth and Achieve Success",
      paragraph:"At chakra financial services we believe that every business deserves the opportunity to thrive. Our business loans are designed to help you achieve your goals, whether you're looking to expand operations, purchase new equipment, increase working capital, or fund new opportunities.",
       button:"Get Instant Loan"
    },
    {
      id:4,
      name:"Education loans",
      image:"https://chakrafin.com/images/educationloanimg.webp",
      imagesmall:"https://chakrafin.com/images/educationicon.png",
      content:"Education Loans: Invest in Your Future",
      paragraph:"At Chakra Financial Services, we understand that education is one of the most valuable investments you can make. Our education loans are designed to provide financial support for students and parents, making it easier to pursue higher education, specialized courses, or vocational training without the burden of financial constraints",
      button:"Get Instant Loan"
    },
    {
      id:5,
      name:"Home loans",
      image:"https://chakrafin.com/images/homeloanimg.avif",
      imagesmall:"https://chakrafin.com/images/houseicon.png",
      content:"Home Loans: Your Dream Home Is Within Reach",
      paragraph:"At Chakra Financial Services, we’re committed to helping you turn your dream of homeownership into a reality. Whether you're buying your first home, upgrading to a bigger space, or refinancing your current mortgage, our home loan solutions are designed to fit your lifestyle and financial goals.",
      button:"Get Instant Loan"
    },
    {
      id:6,
      name:"Overdraft/ cash credit Facility",
      image:"https://chakrafin.com/images/odccimg.webp",
      imagesmall:"https://chakrafin.com/images/houseicon.png",
      content:"Overdraft/ cash credit Facility: Flexible Funds When You Need Them",
      paragraph:"At Chakra Financial Services, we understand that businesses and individuals occasionally need extra funds to manage day-to-day expenses or deal with unexpected shortfalls. Our overdraft facility gives you access to additional funds beyond your account balance, providing a reliable financial safety net to cover short-term cash flow gaps",
      button:"Get Instant Loan"
    },
    {
      id:7,
      name:"Letter of Credit/ Bank Gurantee/ standby Letter of Credit",
      image:"https://chakrafin.com/images/lcbgimg.jpeg",
      content:"LC/BG/SBLC Facilities: Secure and Support Your Business Transactions",
      paragraph:"At Chakra Financial Services , we understand the importance of trust and security in business transactions. Our Letter of Credit (LC), Bank Guarantee (BG), and Standby Letter of Credit (SBLC) facilities provide the financial backing you need to ensure smooth and secure domestic and international trade. These instruments are designed to offer peace of mind to both buyers and sellers by ensuring the fulfillment of contractual obligations.",
      button:"Get Instant Loan"
    }
  ]
  const[activeid, setActiveid]=useState(data[0])
return(
  <div>
    <div className=' text-center mx-20 mt-10 '>
      <h1 className='text-pink-400 font-bold text-3xl mb-4'>Our Services</h1>
      <p className='text-gray-800 opacity-80 mx-10'>We, Financial services encompass a wide range of offerings that help individuals, businesses, and organizations manage their finances effectively. These services are provided by institutions such as banks, credit unions, insurance companies, investment firms, and fintech companies.</p>
    </div>
    <div className='flex flex-wrap justify-center'>
      {
        data.map((item)=>{
          return(
            <button onClick={()=>setActiveid(item)} key={item.id} className='text-black bg-transparent border-2 border-amber-500  mx-6  mr-7 mt-10 mb-2 p-3 rounded-lg hover:bg-cyan-600 transition '>{item.name}</button>
          )
        })
      }
    </div>
    <div key={activeid.id} className='grid grid-cols-2 mt-16 mx-28 mr-24 gap-20 '>
      <div className='w-full'>
        <img src={activeid.image} alt=" " className='w-full h-full rounded-3xl hover:scale-105'></img></div>
      <div className='flex flex-col items-center text-center'>
      {activeid.imagesmall && (
            <img
              src={activeid.imagesmall}
              className='h-24 w-24 mb-4 mx-auto'
              alt=''
            />
          )}
        <h1 className='text-amber-600 font-bold text-2xl my-6'>{activeid.content} </h1>
        <p className='text-gray-800 opacity-80 mb-6 animate-fadeup '>{activeid.paragraph}</p>
        <button className='bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition p-3'>{activeid.button}</button>
      </div>
    </div>
  </div>
  
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

      <div>
          <h1 className='font-bold mb-8 ml-5 text-pink-500 text-2xl text-center mt-20'>Client Voices of Satisfaction </h1>
      </div>
     <div className='flex flex-col justify-center mt-4'>
      <div className='bg-gray-200 rounded-3xl p-5 ml-56 mr-56'>
        <div className='ml-6'>
          <p className='mb-10'>Loan take 1</p>
          <p>The services was outstanding. Provided loan with lees IR%.</p>
        </div>
        <div className='flex flex-col text-center mt-9 '>
          <h1 className='text-orange-400 font-bold mb-4'>Cilent 1</h1>
          <p>Review 1 (Take loan).</p>
        </div>
      </div>
      </div>
    </>
  )
}









