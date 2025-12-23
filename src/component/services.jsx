import { useState } from 'react'
import Navbar from './navbar'
import Footer from './Footer'

const Services = () => {
  return (
    <>
      <Navbar />
      <Content />
      <Loans />
      <Scroll/>
      <Footer/>
    </>
  )
}

export default Services

function Content() {
  return (
    <div className="relative mt-20">
      <img
        src="https://www.shutterstock.com/image-vector/clients-bank-office-set-finance-260nw-2347055803.jpg"
        className="h-96 w-full object-cover"
        alt=""
      />
      <p className="absolute top-40 left-16 font-bold text-3xl text-cyan-950">
        Services
      </p>
    </div>
  )
}

function Loans() {
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

  const [activeid, setActiveid] = useState(data[0])

  return (
    <>
    <div className=' text-center mx-20 mt-10 '>
      <h1 className='text-pink-400 font-bold text-3xl mb-4'>Our Services</h1>
      <p className='text-gray-800 opacity-80 mx-10'>We, Financial services encompass a wide range of offerings that help individuals, businesses, and organizations manage their finances effectively. These services are provided by institutions such as banks, credit unions, insurance companies, investment firms, and fintech companies.</p>
    </div>
    <div className="mt-16 px-24">
      {/* TOP SECTION */}
      <div className="grid grid-cols-2 gap-16 items-start">
        {/* LEFT: ALL 7 BUTTONS */}
        <div className="flex flex-col gap-4 ml-64">
          {data.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveid(item)}
              className="inline-block border-2 border-amber-500 px-5 py-2 rounded-lg hover:bg-cyan-600 hover:text-white transition w-64  "
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* RIGHT: IMAGE */}
        <div className="flex justify-center">
          <img
            src={activeid.image}
            alt=""
            className="max-w-md w-full object-contain rounded-3xl"
          />
        </div>
      </div>

      {/* BOTTOM CONTENT */}
      <div className="flex flex-col items-center text-center mt-14">

        <h1 className="text-amber-600 font-bold text-2xl mb-4">
          {activeid.content}
        </h1>

        <p className="text-gray-800 opacity-80 max-w-3xl mb-6">
          {activeid.paragraph}
        </p>

        <button className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition">
          {activeid.button}
        </button>
      </div>
    </div>
    </>
  )
}

function Scroll(){
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
