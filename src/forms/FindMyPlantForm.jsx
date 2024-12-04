import { MdMyLocation } from "react-icons/md";
import CustomInput from "../ui/CustomInput";
import { DatePicker } from "@mui/x-date-pickers";
import { Checkbox, MenuItem, Select } from "@mui/material";
import SoilButton from "../ui/SoilButton";
import { useState } from "react";
import Loamy from "../assets/images/loamysoil.png";
import Clay from "../assets/images/claysoil.png";
import Sandy from "../assets/images/sandysoil.png";
import Button from "../ui/Button";


const soils = [
    { id: 1, name: "Loamy Soil", image: Loamy },
    { id: 2, name: "Clay Soil", image: Clay },
    { id: 3, name: "Sandy Soil", image: Sandy },
  ];
  
  const seasonsArray = ["Rainy Season", "Dry Season"];
  
  const resources = ["Watering System", "Fertilizers", "Manual"];

function FindMyPlantForm() {
    const [selectedSoil, setSelectedSoil] = useState("Loamy Soil");
    const [season, setSeason] = useState(seasonsArray[0]);

    function handleChange(e) {
        setSeason(e.target.value);
      }
  return (
    <form className="bg-white px-8 py-5 flex flex-col gap-5 rounded-3xl max-w-[28em] lg:w-1/2 min-h-[42em]">
      <CustomInput
        placeholder="Enter GPS Location"
        label="Select your location"
        name="location"
        icon={<MdMyLocation className="text-xl text-[#E94D4E]" />}
      />
      <div className="flex flex-col w-full gap-3">
        <p className="text-brandGrey">Select Soil Type</p>

        <DatePicker
          sx={{
            "& .MuiInputBase-root": {
              backgroundColor: "#f7f9f5",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.875rem",
              borderRadius: "0.5rem",
            },

            "&:focus-within": {
              backgroundColor: "#f7f95",
            },
          }}
        />
      </div>
      <div className="flex flex-col w-full gap-3">
        <p className="text-brandGrey">Season</p>
        <Select
          value={season}
          onChange={handleChange}
          className="w-full"
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#f7f9f5",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.875rem",
              borderRadius: "0.5rem",
              "& fieldset": {
                borderColor: "#7EC34C",
              },
              "&:hover fieldset": {
                borderColor: "#6BA83F",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#7EC34C",
                boxShadow: "0 0 0 3px rgba(126, 195, 76, 0.5)",
              },
            },
          }}
        >
          {seasonsArray.map((el, i) => (
            <MenuItem key={i} value={el}>
              {el}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className="flex font-normal flex-col w-full gap-3">
        <p className="text-brandGrey">Select Soil Type</p>
        <ul className="flex items-center gap-4">
          {soils.map((soil) => (
            <SoilButton
              setActive={setSelectedSoil}
              key={soil.id}
              soil={soil}
              active={selectedSoil === soil.name}
            />
          ))}
        </ul>
      </div>
      <CustomInput
        placeholder="Enter Space Sq/m"
        label="Available Space"
        name="space"
      />
      <div className="flex font-normal flex-col w-full gap-3">
        <p className="text-brandGrey">Available Resources</p>
        <ul className="flex w-full gap-2 items-center">
          {resources.map((item, i) => (
            <li key={i} className="flex items-center text-sm font-normal ">
              <Checkbox
                defaultChecked
                sx={{
                  color: "#7EC34C",
                  "&.Mui-checked": {
                    color: "#7EC34C",
                  },
                }}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full flex justify-end p-3">
        <Button type="primary">Find My Plant</Button>
      </div>
    </form>
  );
}

export default FindMyPlantForm;
