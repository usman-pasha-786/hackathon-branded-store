import React from 'react';
import { Button } from './ui/button';
import { FaShoppingBag } from "react-icons/fa";


const Hero = () => {
  return (
    <div className='mb-[100px]'>
        <div className="hero min-h-[80vh] custom-img bg-fixed bg-top bg-no-repeat">

    <div className="hero-overlay bg-opacity-30"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-myWhite ">Branded <span className='text-myOrange'>Store</span></h1>
        <p className="mb-5 scroll-m-20 text-xl font-light tracking-tight text-myWhite">Experience luxury redefined Shop our curated collection for timeless elegance and contemporary flair
        Elevate your style effortlessly Discover exclusive designs tailored for the modern trendsetter</p>
        
        
        <Button className='outline outline-offset-2 outline-1 text-myWhite group hover:rounded-3xl duration-300 hover:outline-myOrange'>
      <FaShoppingBag className="mr-2 h-6 w-6 group-hover:text-myOrange group-hover:animate-bounce"/>{""}Shop Now
    </Button>
    
      </div>
    </div>
  </div>
  </div>
  )
}

export default Hero