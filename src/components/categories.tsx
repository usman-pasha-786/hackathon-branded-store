import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Categories = () => {
  return (
    <div className='mb-[100px] mt-[100px]'>
        {/* Heading */}
        <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl text-myBlackhead">
          Our Categories
        </h1>
        
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* Categories start here */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {/* Category 1 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
            <Link href={'/tops'}>
            <Image src={require('../../public/picture/top2.jpg')} 
            alt='tops' 
            height={350} width={350}
            className='rounded-xl duration-500 group-hover:scale-125'/>
            <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackhead/20 text-center w-full text-myWhite'>
                <h1 className='uppercase'>tops</h1>
            </div>
            <div className='block lg:hidden absolute bottom-28 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackhead/20 text-center w-full text-myWhite'>
                <h1 className='uppercase'>tops</h1>
            </div>
            </Link>
        </div>
        {/* Category 2 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
            <Link href={'/pants'}>
            <Image src={require('../../public/picture/pant1.jpg')} 
            alt='pants' 
            height={350} width={350}
            className='rounded-xl duration-500 group-hover:scale-125'/>
            <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackhead/20 text-center w-full text-myWhite'>
                <h1 className='uppercase'>pants</h1>  
            </div>
            <div className='block lg:hidden absolute bottom-28 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackhead/20 text-center w-full text-myWhite'>
                <h1 className='uppercase'>pants</h1>
            </div>
            </Link>
        </div>
         {/* Category 3 */}
         <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
            <Link href={'/accessories'}>
            <Image src={require('../../public/picture/access.jpg')} 
            alt='accessories' 
            height={350} width={350}
            className='rounded-xl duration-500 group-hover:scale-125'/>
            <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackhead/20 text-center w-full text-myWhite'>
                <h1 className='uppercase'>accessories</h1>
            </div>
            <div className='block lg:hidden absolute bottom-28 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackhead/20 text-center w-full text-myWhite'>
                <h1 className='uppercase'>accessories</h1>
            </div>
            </Link>
        </div>
          {/* Category 4 */}
          <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
            <Link href={'/shoes'}>
            <Image src={require('../../public/picture/shoes.jpg')} 
            alt='shoes' 
            height={350} width={350}
            className='rounded-xl duration-500 group-hover:scale-125'/>
            <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackhead/20 text-center w-full text-myWhite'>
                <h1 className='uppercase'>shoes</h1>
            </div>
            <div className='block lg:hidden absolute bottom-28 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackhead/20 text-center w-full text-myWhite'>
                <h1 className='uppercase'>shoes</h1>
            </div>
            </Link>
        </div>


      </div>
    </div>
  )
}

export default Categories