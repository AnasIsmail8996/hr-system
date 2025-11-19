import React from "react";
import { LuPlus } from "react-icons/lu";



import card1 from "../../components/images/card-1.png";
import card2 from "../../components/images/card-2.png";
import card3 from "../../components/images/card-3.png";
import card4 from "../../components/images/card-4.png";
import card5 from "../../components/images/card-5.png";
import card6 from "../../components/images/card-6.png";
import card7 from "../../components/images/card-7.png";

const templateCards = [card1, card2, card3, card4, card5, card6, card7];

const AdminTemplates = () => {
const CARD_CLASSES =
  "w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(25%-1rem)] xl:w-[calc(20%-1rem)] aspect-[2/3] gap-[6px]";


  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("Selected file:", file);
      // TODO: Upload logic
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-wrap gap-4 justify-start">

        {/* ADD NEW TEMPLATE CARD */}
        <label
          className={`relative ${CARD_CLASSES} bg-[#008CFF] rounded-lg shadow-lg flex flex-col 
          justify-center items-center overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02]`}
        >
          <input
            type="file"
            accept="image/*"
            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
            onChange={handleFileSelect}
          />

          <div className="flex flex-col items-center pointer-events-none text-white">
            <LuPlus size={78} strokeWidth={2.5} />
            <span className="mt-2 text-lg font-semibold">Add New Template</span>
          </div>
        </label>

        {/* EXISTING TEMPLATE CARDS */}
        {templateCards.map((src, index) => (
          <div
            key={index}
            className={`relative ${CARD_CLASSES}  rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]`}
          >
            <img
              src={src}
              alt={`Template ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminTemplates;
