import React from 'react'

const Footer = () => {
  return (
    <>
    <div>
    <footer className='grid grid-cols-3 bg-gray-200 p-8 mt-12 place-items-center text-center'>
        <div>
            <img src="https://chakrafin.com/images/logo.png"></img>
            <p className='font-bold mt-4'>CHAKRA FINANACIAL SERVICES</p>
        </div>
        <div className='text-start '>
            <h1 className='font-bold mb-4 text-2xl'>Connect With Us</h1>
            <p className='text-gray-800'>Chakra Finance: Chakra Finance to explorea wide range of financial solutionstailored to your needs.</p>
            <ul className='flex gap-3 mt-4 '>
                <li><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv9lvi4_4ItGlc0EZJ2iWjdbgC1MYA6dC_XA&s' className='w-10 h-10 hover:scale-110 rounded-2xl'></img></li>
                <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCqUVSYW71958Hr2oIoAeVueXmJsAz4uI3JQ&s"  className='w-10 h-10 hover:scale-110 rounded-2xl'></img></li>
                <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3je3B3KRq3jjovIONs3vh5YaJbJnqVAc-8w&s"  className='w-10 h-10 hover:scale-110 rounded-2xl'></img></li>
                <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKNyDq9ZejzOXBKIXrX3_w-bxdAnO-IEGYVg&s"  className='w-10 h-10 hover:scale-110 rounded-2xl'></img></li>
            </ul>
        </div>
        <div className='text-start'>
            <h1 className='text-black font-bold mb-4 text-2xl'>Contact us</h1>
            <div className='flex gap-8'>
                <div className='text-start text-gray-950'>
                <p >📍101, Sai Surya Residency, Madeenaguda,Hyderabad, Telangana, India - 500049</p>
                <p>✉️chakrafinservice@gmail.com</p>
                <p> 📞91+7989561133</p>
            </div>
            <iframe
                title="Chakra Finance Location"
                src="https://www.google.com/maps?q=Madeenaguda,Hyderabad,Telangana&output=embed"
                width="50%"
                height="150"
                className="rounded-lg border hover:scale-110"
            ></iframe>
            </div>
        </div>
    </footer>
    <div className='bg-amber-500 text-white text-center'>
        <h1>CHAKRA FINANCIAL SERVICES Copyright © 2023 AVAS | All rights reserved</h1>
    </div>
    </div>
    </>
  )
}
export default Footer


