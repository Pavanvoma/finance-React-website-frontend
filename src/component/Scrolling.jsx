import React from 'react'

const Scrolling = () => {
  return (
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

export default Scrolling
