import Button from "../ui/Button";

import FindMyPlantForm from "../forms/FindMyPlantForm";
import HowItWorks from "../ui/HowItWorks";

function PlantFinder() {
  return (
    <section className="w-full flex gap-10  flex-col">
      <div className="flex flex-col lg:flex-row h-full pt-4 gap-16 px-24">
        <div className="w-full lg:w-1/2 flex gap-10 h-full flex-col relative pt-24">
          <h1
            id="text"
            className="text-brandBlack py-6 pr-14 relative text-center lg:text-left  lg:text-7xl font-medium leading-10"
          >
            Discover the Perfect <span id="plants">Plants</span> for Your Land
            🌱
          </h1>
          <div>
            <Button type="primary">Get Started</Button>
          </div>
        </div>
        <FindMyPlantForm />
      </div>
      <HowItWorks />
    </section>
  );
}

export default PlantFinder;
