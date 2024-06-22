"use client"
import BestSellCard from '@/components/bestSellCard'
import { useAppSelector } from '../store/hooks'


const CategoryPage = ({params}:{params:{category:string}}) => {
    const product = useAppSelector((state)=>state.productArray);
    const bestSell = product.filter((val)=>val.category == params.category)
    
  return (
    <div>
        {/* Heading */}
    <div className="text-center mb-10">
    <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl text-myBlackhead capitalize">
        {/* use classname capitalize for ui and to avoid any error for fetching data */}
      {params.category}
    </h1>
    
    <div className="flex mt-2 justify-center">
      <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
    </div>
  </div>

  {/* Category Page start here */}
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
                category={items.category}
                slug={items.slug}
                discount={items.discount}/>
            ))            
        }

      </div>
    </div>
  )
}

export default CategoryPage