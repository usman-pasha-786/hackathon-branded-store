
import BestSelling from "@/components/bestSelling";
import Categories from "@/components/categories";
import FeatureProducts from "@/components/featureProducts";
import Hero from "@/components/hero";
import Promotion from "@/components/promotion";
import Services from "@/components/services";


// install reacticones / shadcn/ui /  daisy ui / use of tailblock and react icons / for image unsplash/ for animation we use tailwindcss and install Redux Toolkit/ go to typescript quick start / create a folder name store in app. install toast for add to cart notification from npm react toastify. and install redux persist and go on the store.tsx and make changes like import storage , persistReducer and combineReducer for slug page if we refresh the page. our carts disappear. so thatswhy we install redux persist and make a veriable of persistConfig and make some changes almost create 3 const veriables. and also go on provider.tsx and import some paths and make changes
export default function Home() {
  return (
    <div>
      <Hero/>
      <FeatureProducts/>
      <Services/>
      <Promotion/>
      <Categories/>
      <BestSelling/>
    </div>
  );
}
