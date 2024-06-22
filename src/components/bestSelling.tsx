"use client"
import React from 'react'
import BestSellCard from './bestSellCard'
import { useAppSelector } from '@/app/store/hooks'

const BestSelling = () => {

  const product = useAppSelector((state)=>state.productArray);
  // use slice function for get first 3 items
    const bestSell = product.slice(0,3)
    // const bestSell = [
    //     {
    //         src:"/picture/bs1.jpg",
    //         alt:"white t-shirt",
    //         title:"Best Women White T-Shirt",
    //         description:"it is one of the best selling product. women like this article and enjoy the season",
    //         price:150,
    //         category:'tops',
    //         slug:'white tee shirt'
    //     },
    //     {
    //         src:"/picture/bs2.jpg",
    //         alt:"shoes",
    //         title:"Best nike shoes",
    //         description:"it is one of the best selling product. women like this article and enjoy the season",
    //         price:150,
    //         category:'tops',
    //         slug:'white tee shirt'
    //     },
    //     {
    //         src:"/picture/bs3.jpg",
    //         alt:"pants",
    //         title:"Best Women pants",
    //         description:"it is one of the best selling pants. women like this article and enjoy the season",
    //         price:150,
    //         category:'tops',
    //         slug:'white tee shirt'
    //     }
    // ]


    return (
    <div className='mb-[100px] mt-[100px]'>
        {/* Heading */}
        <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl text-myBlackhead">
          Best Selling Products
        </h1>
        
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* best selling products */}
      <div className='flex flex-wrap justify-center gap-5'>
        {
            bestSell.map((items:any,i)=>(
                <BestSellCard 
                key={i}
                src={items.image[0]} 
                alt={items.title} 
                title={items.title} 
                description={items.description} 
                price={items.price}
                slug={items.slug}
                category={items.category}
                discount={items.discount}
                />
            ))            
        }

      </div>
  
    </div>
  )
}

export default BestSelling