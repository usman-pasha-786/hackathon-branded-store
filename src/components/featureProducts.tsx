"use client"
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BestSellCard from './bestSellCard';
import { useAppSelector } from '@/app/store/hooks';


// install react slick and after that install carousel
const FeatureProducts = () => {
  // my data
//   const bestSell = [
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
//     },
//     {
//       src:"/picture/bs1.jpg",
//       alt:"white t-shirt",
//       title:"Best Women White T-Shirt",
//       description:"it is one of the best selling product. women like this article and enjoy the season",
//       price:150,
//       category:'tops',
//       slug:'white tee shirt'
//   },
//     {
//       src:"/picture/bs3.jpg",
//       alt:"pants",
//       title:"Best Women pants",
//       description:"it is one of the best selling pants. women like this article and enjoy the season",
//       price:300,
//       category:'tops',
//       slug:'white tee shirt'
//   },
//   {
//     src:"/picture/bs2.jpg",
//     alt:"shoes",
//     title:"Best nike shoes",
//     description:"it is one of the best selling product. women like this article and enjoy the season",
//     price:150,
//     category:'tops',
//     slug:'white tee shirt'
// },
// ]
const bestSell = useAppSelector((state)=>state.productArray.slice(0, 9));

    // carousel setting
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='mb-[100px] mt-[100px]'>
        <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl text-myBlackhead">
            Featured Products
        </h1>
        
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* carousel */}
      <Slider {...settings}>
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
      </Slider>
    </div>
    
  )
}

export default FeatureProducts