"use client"
import { useAppSelector } from '@/app/store/hooks';
import SlugComponent from '@/components/slugComponent';
import ToastAddToCart from '@/components/toastAddToCart';
import { Button } from '@/components/ui/button'
import { useState } from 'react';
import { FaHeart,FaMinusCircle, FaPlusCircle } from "react-icons/fa";


const SlugPage = ({params}:{params:{slug:string}}) => {
    const product = useAppSelector((state)=>state.productArray);
    const slug = product.filter((val)=>val.slug == params.slug)
    

    const [cartItem, setCartItem] = useState({
      
        id: slug[0].id,
        title: slug[0].title,
        image: slug[0].image[0],
        slug:slug[0].slug,
        price:slug[0].price,
        discount: slug[0].discount,
        category: slug[0].category,
        size: slug[0].size[0],
        qty: slug[0].qty,
        color:slug[0].color[0],
        
    
    });

    return (
    <div>
        <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
    {/* Image */}
      {/* <img
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
        src="https://dummyimage.com/400x400"
      /> */}
      <SlugComponent image={slug[0].image}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
      {/* category */}
        <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
          {slug[0].category} 
        </h2>
        {/* title */}
        <h1 className="mt-3 scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackhead">
          {slug[0].title}
        </h1>
        
        {/* rating */}
        <div className="rating rating-md">
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-myOrange" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-myOrange" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-myOrange" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-myOrange" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-myOrange" checked />
</div>
        {/* description */}
        <p className="mt-3 leading-relaxed scroll-m-20 text-base font-normal text-myBlackpara "> 
        {slug[0].description}
        </p>
        <div className="flex mt-6 items-center mb-5">
         
          {/* color div */}
          <div className="flex">
            <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-myBlackhead">Color</span>
            {slug[0].color.map((item,i)=>
                (<button key={i}
                  onClick={()=>setCartItem({...cartItem, color:item})} 
                  className="border-2 border-gray-300 rounded-full mr-1 w-6 h-6 focus:outline-none active:border-black focus:border-black"
                style={{backgroundColor:item}} />))}
          </div>
          
          {/* size div */}
          <div className="flex ml-6 items-center">
            <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-myBlackhead">Size</span>
            <div className="form-control w-full max-w-xs">
              <select 
              onChange={(e)=>setCartItem({...cartItem,size:e.target.value})}
              className="select select-bordered">
                <option disabled defaultValue={'Select Size'}>Select Size</option>
                {slug[0].size.map((item,i)=>(
                    <option key={i}>{item}</option>
                ))}
                </select>
            </div>
          </div>
        </div>
        
        {/* quantity */}
        <div className='flex items-center'>
        <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-myBlackhead">Quantity</span>
        
        {/* Minus button */}
        <Button
         onClick={()=>setCartItem({...cartItem,qty:cartItem.qty <= 1 ? 1:--cartItem.qty})}
         className='group bg-myBlackhead hover:bg-transparent text-myWhite hover:text-myBlackhead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl w-fit h-fit'>
<FaMinusCircle className='mr-2 h-4 w-4 group-hover:text-myOrange duration-300'/>
Less
</Button>
<div className='mr-2 ml-2 scroll-m-20 text-base font-semibold tracking-tight'>
    {cartItem.qty}
    </div>
    
    {/* Plus button */}
<Button onClick={()=>setCartItem({...cartItem,qty:++cartItem.qty})}
 className='group bg-myBlackhead hover:bg-transparent text-myWhite hover:text-myBlackhead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl w-fit h-fit'>
<FaPlusCircle className='mr-2 h-4 w-4 group-hover:text-myOrange duration-300'/>
Add
</Button>
        </div>
        <div className="divider"></div> 
        <div className="flex items-center justify-between">
          {/* price */}
          <div>
          <span className={`scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackhead ${
            cartItem.discount > 0 &&
            'line-through decoration-2 decoration-myOrange/70'
          }`}>
            ${cartItem.price * cartItem.qty}
          </span>
           {/* Discounted Value */}
    {cartItem.discount > 0 && (
      <span className="ml-3 scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackhead">
      {/* formula for discount from original price */}
    ${(cartItem.price - (cartItem.price * cartItem.discount) / 100) * cartItem.qty}
    </span>)}
    </div>
          
          {/* button add to cart */}
          {/* <Button
          onClick={()=>dispatch(addToCart(cartItem))} 
          className='group bg-myBlackhead hover:bg-transparent text-myWhite hover:text-myBlackhead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl'>
<FaShoppingCart className='mr-2 h-4 w-4 group-hover:text-myOrange duration-300'/>
Add to Cart
</Button> */}
{/* render toast for notification of confirmation */}
<ToastAddToCart cartItem={cartItem}/>
        </div>
        {/* button buy now */}
        <Button className='mt-3 w-full group bg-myBlackhead hover:bg-transparent text-myWhite hover:text-myBlackhead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl'>
<FaHeart className='mr-2 h-4 w-4 group-hover:text-myOrange duration-300'/>
Buy Now
</Button>

      </div>
    </div>
  </div>
    </div>
  )
}

export default SlugPage