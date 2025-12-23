import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Navbar from './navbar';
import Footer from './Footer';

const Finance = () => {
  return (
    <>
    <Navbar/>
    <Heading/>
    <Fin/>
    <Footer/>
    
    </>
  )
}

export default Finance

function Heading(){
 
  return(
    <div className='mt-20'>
      <img src="https://cfrasset.com/slider/financial-banner.jpg" className='w-full h-96 '></img>
    </div>
  )
}

function Fin() {
   const data=[
    {
      id : 1,
      name: "Startup",
      name1:"ITR Filling",
      name2:"Tax Aduit",
      name3:"15CA CB",
      name4:"NRI Taxation",
      name5:"Tax Planning Consultancy",
      name6:"Apply Now" 
 },
 {
      id : 2,
      name: "Bussines",
      name1:"Bussines Udyam Certificate",
      name2:"Tax Aduit",
      name3:"Bank Statement",
      name4:"Good Sibel",
      name5:"Tax Planning Consultancy",
      name6:"Apply Now" 
 },
 {
      id : 3,
      name: "Registration",
      name1:"ITR Filling",
      name2:"Tax Aduit",
      name3:"15CA CB",
      name4:"NRI Taxation",
      name5:"Tax Planning Consultancy",
      name6:"Apply Now" 
 },
 {
      id : 4,
      name: "Document",
      name1:"Bussines Udyam Certificate",
      name2:"Tax Aduit",
      name3:"Bank Statement",
      name4:"Good Sibel",
      name5:"Tax Planning Consultancy",
      name6:"Apply Now" 
 },
 {
      id : 5,
      name: "Income-Tax",
      name1:"ITR Filling",
      name2:"Tax Aduit",
      name3:"15CA CB",
      name4:"NRI Taxation",
      name5:"Tax Planning Consultancy", 
      name6:"Apply Now"
 },
 {
      id : 6,
      name: "GST",
      name1:"Bussines Udyam Certificate",
      name2:"Tax Aduit",
      name3:"Bank Statement",
      name4:"Good Sibel",
      name5:"Tax Planning Consultancy",
      name6:"Apply Now" 
 },{
     id : 7,
      name: "Startup",
      name1:"ITR Filling",
      name2:"Tax Aduit",
      name3:"15CA CB",
      name4:"NRI Taxation",
      name5:"Tax Planning Consultancy",
      name6:"Apply Now" 
    }
 

  ]
  const[state, setState]=useState(data[0])
  const [showForm, setShowForm] = useState(false)
  return (
    <>
    <div className="mt-10 text-center px-4">
      <h1 className="text-gray-800 opacity-90 font-bold text-4xl">
        Financial Service
      </h1>

      <p className="text-gray-800 opacity-80 max-w-3xl mx-auto mt-4 leading-relaxed">
        Financial services encompass a wide range of offerings that help
        individuals, businesses, and organizations manage their finances
        effectively. These services are provided by institutions such as
        banks, credit unions, insurance companies, investment firms, and
        fintech companies.
      </p>
    </div>
    <div>
      <div className='flex flex-wrap justify-center gap-6 mt-6'>
       {data.map((item)=>(
        <button key={item.id} onClick={()=>setState(item)} className='className=" border-2 border-amber-300 px-5 py-2 rounded-lg hover:bg-cyan-600 hover:text-white transition w-64 gap-6 "'>{item.name}</button>
        
       )
         )}
      </div>
      <div className='grid grid-cols-3 gap-5 mt-20 justify-center items-center ml-11 mr-11'>
      <div className='border-2 border-amber-50 shadow-sm shadow-blue-50 p-6 text-center hover:scale-105'>
      
        <h1 className='font-bold text-[25px]'>{state.name1}</h1>
        <button
  onClick={() => setShowForm(true)}
  className="bg-cyan-600 text-white hover:scale-105 hover:bg-cyan-900 p-2.5 rounded-full mt-6"
>
  {state.name6}
</button>


      </div>
      <div className='border-2 border-amber-50 shadow-sm shadow-blue-50 p-6 text-center hover:scale-105'>
      
        <h1 className='font-bold text-[25px]'>{state.name2}</h1>
      
       <button onClick={() => setShowForm(true)}
        className="bg-cyan-600 text-white hover:scale-105 hover:bg-cyan-900 p-2.5 rounded-full mt-6">{state.name6}
      </button>


      </div>
      <div className='border-2 border-amber-50 shadow-sm shadow-blue-50 p-6 text-center hover:scale-105'>
      
        <h1 className='font-bold text-[25px]'>{state.name3}</h1>
       <button onClick={() => setShowForm(true)}
        className="bg-cyan-600 text-white hover:scale-105 hover:bg-cyan-900 p-2.5 rounded-full mt-6">{state.name6}
      </button>
      </div>
     <div className='border-2 border-amber-50 shadow-sm shadow-blue-50 p-6 text-center hover:scale-105'>
        <h1 className='font-bold text-[25px]'>{state.name4}</h1>
        <button onClick={() => setShowForm(true)}
        className="bg-cyan-600 text-white hover:scale-105 hover:bg-cyan-900 p-2.5 rounded-full mt-6">{state.name6}
      </button>
      </div>
      <div className='border-2 border-amber-50 shadow-sm shadow-blue-50 p-6 text-center hover:scale-105'>
      
        <h1 className='font-bold text-[25px]'>{state.name5}</h1>
         <button onClick={() => setShowForm(true)}
        className="bg-cyan-600 text-white hover:scale-105 hover:bg-cyan-900 p-2.5 rounded-full mt-6">{state.name6}
      </button>
       

      </div>
      <div className='border-2 border-amber-50 shadow-sm shadow-blue-50 p-6 text-center hover:scale-105'>
      
        <h1 className='font-bold text-[25px]'>{state.name}</h1>
        <button onClick={() => setShowForm(true)}
        className="bg-cyan-600 text-white hover:scale-105 hover:bg-cyan-900 p-2.5 rounded-full mt-6">{state.name6}
      </button>

      </div>
    
    </div>
</div>
{showForm && (
  <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-xl w-[90%] max-w-md relative">
      <h2 className="text-2xl font-bold mb-4 text-center text-cyan-700">
        Apply for the Loan
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          setShowForm(false)
        }}
        className="flex flex-col gap-4"
      >
        <input type="text" placeholder="Full Name" className="border p-2 rounded" />
        <input type="email" placeholder="Email" className="border p-2 rounded" />
        <input type="tel" placeholder="Phone Number" className="border p-2 rounded" />

        <button
          type="submit"
          className="bg-cyan-600 text-white py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
)}


  </>)
}

