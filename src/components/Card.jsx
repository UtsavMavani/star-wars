import React from "react";

const Card = ({ name, onClick }) => {
  return (
    <div
      className="relative transition-transform duration-300 transform hover:scale-110 flex justify-center items-center h-[100px] rounded-[8px] cursor-pointer bg-[#f0f0f0] hover:bg-[#d0d0d0] p-5"
      key={name}
    >
      <h3 className="font-medium">{name}</h3>​
      
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-[8px] z-10">
        <button
          className="bg-white text-black py-2 px-4 rounded-md"
          onClick={onClick}
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default Card;
