import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import {FaHeart } from "react-icons/fa";
import Link from 'next/link';
import PopoverAddToCart from './popoverAddToCart';

interface iprops{
  src:string;
    alt:string;
    title:string;
    description:string;
    price:number;
    category:string;
    slug:string;
    discount:number;
    
}

// best selling cards
const BestSellCard = ({src,alt,title,description,price,category,slug,discount}:iprops) => {
  return (
    <div className="max-w-[350px] h-[35rem] p-4 mx-auto shadow-md rounded-xl relative group ">
    {/* Image Div */}
    <Link href={`${category}/${slug}`}>
    <div className='block h-[23rem] rounded overflow-hidden'>
    <Image src={src} alt='best selling'
    width={400}
    height={400}
    className='w-auto h-auto'/>
    </div>
    {/* Typography Div */}
<div className="mt-1">
{title && (
  <h2 className="scroll-m-20 border-b pb-2 text-lg font-semibold tracking-tight first:mt-0 text-myBlackhead line-clamp-1">
  {title}
  </h2>)}
{description && (
  <p className="mt-2 scroll-m-20 text-sm font-semibold tracking-tight text-myBlackpara line-clamp-2">
  {description}
  </p>)}
{price && (
  <div className='flex gap-5'>
  <p className={`mt-2 scroll-m-20 text-base font-semibold tracking-tight text-myBlackhead line-clamp-2 ${discount>0 && 'line-through decoration-2 decoration-myOrange/70'}`}>
    ${price}
    </p>
    {/* Discounted Value */}
    {discount>0 && (
      <p className="mt-2 scroll-m-20 text-base font-semibold tracking-tight text-myBlackhead line-clamp-2">
      {/* formula for discount from original price */}
    ${price - (price * discount) / 100}
    </p>)}
    
    </div>)}

</div>
</Link>
{/* button div */}
<div className='absolute bottom-2 right-2'>

<PopoverAddToCart slug = {slug}/>

</div>
<Button className='group bg-myBlackhead hover:bg-transparent text-myWhite hover:text-myBlackhead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl absolute bottom-2 left-2 '>
<FaHeart className='mr-2 h-4 w-4 group-hover:text-myOrange duration-300'/>
Buy Now
</Button>
{discount > 0 && (
  <div className="scroll-m-20 text-xs font-semibold tracking-tight text-myWhite bg-myOrange absolute top-0 left-2 w-[87px] p-2 text-center uppercase rounded-tl-xl rounded-bl-xl myDiscount">
    {`${discount}% off`}</div>
)}

</div>
    
  )
}

export default BestSellCard