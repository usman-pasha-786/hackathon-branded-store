"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from './ui/button';
import { useAppDispatch } from '@/app/store/hooks';
import { addToCart } from '@/app/store/features/cart';
import { FaShoppingCart,FaHeart,FaMinusCircle, FaPlusCircle } from "react-icons/fa";


const ToastAddToCart = ({cartItem}:any) => {
    const dispatch = useAppDispatch();
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
    <div className='w-fit' onClick={()=>dispatch(addToCart(cartItem))} >
         {/* <button onClick={notify}>Notify!</button> */}
         <Button onClick={notify}
          className='group bg-myBlackhead hover:bg-transparent text-myWhite hover:text-myBlackhead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl'>
<FaShoppingCart className='mr-2 h-4 w-4 group-hover:text-myOrange duration-300'/>
Add to Cart
</Button>
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

export default ToastAddToCart