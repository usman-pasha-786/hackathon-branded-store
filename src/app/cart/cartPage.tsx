"use client"
import CartCard from '@/components/cartCard'
import { Button } from '@/components/ui/button'
import { useAppSelector } from '../store/hooks'

const CartPage = () => {
    const cartarr = useAppSelector((state)=>state.cartArray);
    const total = cartarr.reduce((total,arr)=>{
        return total + ( arr.price - (arr.price * arr.discount) / 100) * arr.qty;
    },0)
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3'>
    {/* items */}
    <div className='col-span-2'>
        <CartCard />
    </div>
    {/* summery */}
    <div className='bg-myBlackhead/10 p-5 rounded-xl'>
    {/* heading */}
    <h2 className='"scroll-m-20 text-lg font-semibold tracking-tight uppercase text-myBlackhead'>order summary</h2>
    {/* divider */}
    <div className="divider mt-0 mb-1"></div>
     {/*Pricing  */}
     <div className='text-sm font-medium tracking-tight text-myBlackpara'>
        {/* Product Price */}
        <div className='flex items-center justify-between capitalize'>
            <h2>sub total</h2>
            <h2>${total}</h2>
        </div>
        {/* Delivery Charges */}
        <div className='flex items-center justify-between capitalize'>
            <h2>delivery charges</h2>
            <h2>TBD</h2>
        </div>
        {/* Service Charges */}
        <div className='flex items-center justify-between capitalize'>
            <h2>sales tex</h2>
            <h2>TBD</h2>
        </div>
     </div>
     {/* divider */}
    <div className="divider mt-0 mb-1"></div>
    {/* Estimated Price */}
    <div className='flex items-center justify-between uppercase font-semibold text-myBlackhead text-sm tracking-tight'>
            <h2>Estimate total</h2>
            <h2>${total}</h2>
        </div>
        {/* divider */}
    <div className="divider mt-0 mb-1"></div>
    {/* checkout button */}
    <div className='flex items-center justify-center w-full'>
        <Button className='bg-myBlackhead hover:bg-transparent duration-300 text-myWhite hover:text-myBlackhead scroll-m-20 text-xs font-semibold tracking-tight hover:shadow-md rounded-xl uppercase'>proceed to checkout</Button>
    </div>
    {/* divider */}
    <div className="divider mt-0 mb-1"></div>
    {/* note */}
    <p className={'text-xs font-semibold tracking-tight text-myBlackhead w-[97%] text-center italic'}>{`* Delivery Charges and Sales Tax will be included in the Checkout Page`}</p>
    </div>
</div>
  )
}

export default CartPage