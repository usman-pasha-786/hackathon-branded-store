import React from 'react'

const Promotion = () => {
  return (
    <div className='mb-[100px] mt-[100px]'>  
        {/* Heading */}
        <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl text-myBlackhead">
          Our Promotion
        </h1>
        
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* Promotion start here */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {/* 1st child */}
        <div className="hero h-[25rem] promotion-1 rounded-2xl">

  <div className="hero-overlay bg-opacity-70 rounded-2xl"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight uppercase text-myWhite">Get Upto <span className='text-myOrange'>70%</span> Off</h1>
      <p className="mt-2 scroll-m-20 text-base font-medium tracking-tight text-myWhite">Flash Sale, Get upto 70% Off on the Seasonal Stock</p>
    </div>
  </div>
</div>
        {/* 2nd child */}
        <div className="hero h-[25rem] promotion-2 rounded-xl">

<div className="hero-overlay bg-opacity-70 rounded-xl"></div>
<div className="hero-content text-center text-neutral-content">
  <div className="max-w-md">
    <h1 className="scroll-m-20 text-4xl font-bold tracking-tight uppercase text-myWhite">Get Upto <span className='text-myOrange'>50%</span> Off</h1>
    <p className="mt-2 scroll-m-20 text-base font-medium tracking-tight text-myWhite">Flash Sale, Get upto 50% Off on the Entire Stock</p>
  </div>
</div>
</div>
      </div>
    </div>
  )
}

export default Promotion