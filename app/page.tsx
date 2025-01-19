import Navbar from "@/app/components/navbar";
import PricingCard from "@/app/components/standardpricing"
import PricingCard2 from "@/app/components/premiumpricing"
import Sidebar from "@/app/components/rightbar"

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-transparent text-white">
    <div>
      <Navbar />
    </div>

    <div className="flex flex-grow">
      <div>
        <Sidebar />
      </div>

      <div className="flex flex-col flex-grow items-center justify-center">
        <div className=" pb-5 text-center">
          <h1 className="text-gray-100 text-3xl mb-2">Pricing</h1>
          <h3 className="text-gray-400 text-sm">Choose a plan according to your needs</h3>
        </div>

        <div className="flex justify-center items-center space-x-6">
          <PricingCard />
          <PricingCard2 />
        </div>
      </div>
    </div>
  </div>
  
    
  );
}


