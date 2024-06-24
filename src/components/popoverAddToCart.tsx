"use client"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Button } from "./ui/button"
import { FaShoppingCart,FaHeart } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { useState } from "react";
import { addToCart } from "@/app/store/features/cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const PopoverAddToCart = ({slug}:{slug:string}) => {

    // calling product array data 
    const product = useAppSelector((state)=>state.productArray).find(
        (val)=>val.slug == slug);
        
        // add to cart
        const dispatch = useAppDispatch();
        
        // setting cart item
        const [cartItem, setCartItem] = useState({
            id: product?.id,
            title: product?.title,
            image: product?.image[0],
            slug:product?.slug,
            price:product?.price,
            discount: product?.discount,
            category: product?.category,
            size: product?.size[0],
            qty: product?.qty,
            color:product?.color[0],
            
        
        });
    
        // Toast 
        const notify = () => toast.success('Yes. Successfully Added !', {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

  return (
    <div>
        <Popover>
      <PopoverTrigger asChild>
        {/* add to cart */}
        <Button className='group bg-myBlackhead hover:bg-transparent text-myWhite hover:text-myBlackhead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl  '>
<FaShoppingCart className='mr-2 h-4 w-4 group-hover:text-myOrange duration-300'/>
Add to Cart
</Button>
      </PopoverTrigger>
      <PopoverContent className="w-[15rem]">
        
        {/* size div */}
          <div className="flex items-center">
            <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-myBlackhead">Size</span>
            <div className="form-control w-full max-w-xs">
              <select 
              onChange={(e)=>setCartItem({...cartItem,size:e.target.value})}
              className="select select-bordered">
                <option disabled defaultValue={'Select Size'}>Select Size</option>
                {product?.size.map((item,i)=>(
                    <option key={i}>{item}</option>
                
                ))}
                </select>
            </div>
          </div>
          
    {/* color div */}
          <div className="flex mt-5">
            <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-myBlackhead">
                Color
                </span>
            {product?.color.map((item,i)=>
                
                    <button 
                    key={i}
                  onClick={()=>setCartItem({...cartItem, color:item})} 
                  className="border-2 border-gray-300 rounded-full mr-1 w-6 h-6 focus:outline-none active:border-black focus:border-black"
                 style={{backgroundColor:item}}
                 /> 
                )}
          </div>
          {/* add to cart */}
          <div className="w-fit" onClick={notify}>
        <Button 
        onClick={()=>dispatch(addToCart(cartItem))}
        className='group bg-myBlackhead hover:bg-transparent text-myWhite hover:text-myBlackhead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl w-full mt-5'>
<FaShoppingCart className='mr-2 h-4 w-4 group-hover:text-myOrange duration-300'/>
Add to Cart
</Button>
</div>
          </PopoverContent>
    </Popover>
    <ToastContainer
    position="top-left"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    
    />
    </div>
  )
}

export default PopoverAddToCart