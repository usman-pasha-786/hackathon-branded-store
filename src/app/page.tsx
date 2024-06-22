import BestSelling from "@/components/bestSelling";
import Categories from "@/components/categories";
import FeatureProducts from "@/components/featureProducts";
import Hero from "@/components/hero";
import Promotion from "@/components/promotion";
import Services from "@/components/services";


// install reacticones / shadcn/ui /  daisy ui / use of tailblock and react icons / for image unsplash/ for animation we use tailwindcss and install Redux Toolkit/ go to typescript quick start / create a folder name store in app.
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
