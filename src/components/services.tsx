import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    
        <section className="body-font mb-[100px] mt-[100px]">
    <div className="container px-5 mx-auto">
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl text-myBlackhead">
          Our Services
        </h1>
        
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        {/* Delivery */}
        <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
            <Image src={require('../../public/picture/delivery.png')} alt='Delivery' width={100} height={100} 
            className='w-20 h-20'/>
          </div>
          <div className="flex-grow">
            <h2 className=" text-myBlackhead group-hover:text-myOrange duration-300 scroll-m-20 text-lg font-bold tracking-tight lg:text-xl capitalize mb-3">
              free delivery
            </h2>
            <p className=" text-myBlackpara group-hover:text-myBlackpara/80 line-clamp-2 scroll-m-20 text-base font-semibold tracking-tight">
              Free Delivery on Order above/ $80
            </p>

          </div>
        </div>
        {/* 24/7 services */}
        <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
            <Image src={require('../../public/picture/service.png')} alt='Delivery' width={100} height={100} 
            className='w-20 h-20'/>
          </div>
          <div className="flex-grow">
            <h2 className=" text-myBlackhead group-hover:text-myOrange duration-300 scroll-m-20 text-lg font-bold tracking-tight lg:text-xl capitalize mb-3">
              24/7 Customer Services
            </h2>
            <p className=" text-myBlackpara group-hover:text-myBlackpara/80 line-clamp-2 scroll-m-20 text-base font-semibold tracking-tight">
              Free Delivery on Order above/ $80
            </p>

          </div>
        </div>
        {/* money back guarantee */}
        <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
            <Image src={require('../../public/picture/money.png')} alt='Delivery' width={100} height={100} 
            className='w-20 h-20'/>
          </div>
          <div className="flex-grow">
            <h2 className=" text-myBlackhead group-hover:text-myOrange duration-300 scroll-m-20 text-lg font-bold tracking-tight lg:text-xl capitalize mb-3">
              Money Back Guarantee
            </h2>
            <p className=" text-myBlackpara group-hover:text-myBlackpara/80 line-clamp-2 scroll-m-20 text-base font-semibold tracking-tight">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam officia, commodi ducimus pariatur tempora ea vitae provident et quaerat facilis.
            </p>

          </div>
        </div>
        
      </div>
      
    </div>
  </section> 
  
  )
}

export default Services