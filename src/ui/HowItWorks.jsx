import { PiPencilSimpleLine, PiSelectionPlusBold } from "react-icons/pi";
import InfoBox from "./InfoBox";
import { GrSearch } from "react-icons/gr";

const howitworks = [
  {
    id: 1,
    icon: PiPencilSimpleLine,
    title: "Input Details",
    text: "Provide key information about your location, soil type, and climate preferences to discover the perfect plants for your environment.",
  },
  {
    id: 2,
    icon: GrSearch,
    title: "Find My Plant",
    text: "Explore tailored plant recommendations based on your inputs. Compare options and learn about their growth needs, watering schedules, and care requirements.",
  },
  {
    id: 3,
    icon: PiSelectionPlusBold,
    title: "Select Result",
    text: "Choose your plant and get personalized care tips, including watering schedules and growth tracking, to ensure a thriving cultivation experience.",
  },
];

function HowItWorks() {
  return (
    <div className="flex items-center w-full p-24 bg-white flex-col justify-center gap-10">
      <h1 className="text-[#2E2E2E] font-semibold text-[2.5em]">
        How it works?
      </h1>
      <ul className="flex flex-col lg:flex-row gap-8 items-center">
        {howitworks.map((item) => (
          <InfoBox key={item.id} info={item} />
        ))}
      </ul>
    </div>
  );
}

export default HowItWorks;
