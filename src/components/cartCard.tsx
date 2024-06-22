"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { FaMinusCircle, FaPlusCircle, FaTrash } from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import { addCartItem, deleteItem, subtractCart } from '@/app/store/features/cart'


const CartCard = () => {
    const cartarr = useAppSelector((state) => state.cartArray);
    const dispatch = useAppDispatch();

    return (
        <>
            {cartarr.length >= 1 &&
                cartarr.map((item, i) => (
                    <div key={i}
                        className='flex px-10 py-3'>
                        {/* image */}
                        <Image src={item.image} alt={item.title} width={80} height={80}
                            className='w-[250px] h-[250px]' />
                        {/* some information */}
                        <div className='flex px-5 justify-between items-center w-full'>
                            <div>{/* title */}
                                <h2 className='text-sm font-semibold leading-none line-clamp-1 text-myBlackhead'>{item.title}</h2>
                                {/* size */}
                                <p className='mt-2 text-sm text-myBlackpara/80 font-semibold line-clamp-1 leading-none'>
                                    size: &nbsp;<span>{item.size}</span>
                                </p>
                                {/* color */}
                                <p className='mt-2 text-sm text-myBlackpara/80 font-semibold line-clamp-1 leading-none'>
                                    color : &nbsp;<span>
                                        <button
                                            className="border-2 border-gray-300 rounded-full mr-1 w-[15px] h-[15px] focus:outline-none active:border-none focus:border-none"
                                            style={{ backgroundColor: item.color }} />
                                    </span>
                                </p>
                                {/* quantity buttons */}
                                <div className='flex items-center mt-2'>

                                    <Button onClick={() => dispatch(subtractCart(item))}
                                        className='group bg-myBlackhead hover:bg-transparent text-myWhite hover:text-myBlackhead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl w-fit h-fit'>
                                        <FaMinusCircle className='mr-2 h-4 w-4 group-hover:text-myOrange duration-300' />
                                    </Button>

                                    <div className='mr-2 ml-2 scroll-m-20 text-base font-semibold tracking-tight'>{item.qty}</div>
                                    <Button onClick={() => dispatch(addCartItem(item))} className='group bg-myBlackhead hover:bg-transparent text-myWhite hover:text-myBlackhead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl w-fit h-fit'>
                                        <FaPlusCircle className='mr-2 h-4 w-4 group-hover:text-myOrange duration-300' />
                                    </Button>
                                </div>
                                {/* price and delete */}
                                <div className='lg:hidden mt-3 flex flex-col gap-2'>
                                    <h3 className='text-sm font-semibold leading-none line-clamp-1 text-myBlackhead'>
                                        <span>Price:&nbsp;</span>&#36;
                                        {item.discount > 0 ?
                                            (item.price - ((item.price * item.discount / 100))) * item.qty : item.price * item.qty}</h3>
                                    <FaTrash
                                        onClick={() => dispatch(deleteItem(item.uuid))}
                                        className='text-base font-semibold leading-none line-clamp-1 cursor-pointer text-myOrange' />
                                </div>
                            </div>
                        </div>
                        {/* price and delete */}
                        <div className='hidden lg:flex flex-col gap-5 items-end'>
                            <h3 className='text-sm font-semibold leading-none line-clamp-1 text-myBlackhead'>
                                <span>Price:&nbsp;</span>&#36;{item.discount > 0 ?
                                    (item.price - ((item.price * item.discount / 100))) * item.qty : item.price * item.qty}</h3>
                            <FaTrash
                                onClick={() => dispatch(deleteItem(item.uuid))}
                                className='text-base font-semibold leading-none line-clamp-1 cursor-pointer text-myOrange' />
                        </div>
                    </div>
                ))}
        </>

    )
}

export default CartCard