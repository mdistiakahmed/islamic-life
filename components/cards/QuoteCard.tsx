import Image from "next/image";
import React from "react";

const QuoteCard = ({ arabic, english, source, img }: any) => {
  return (
    <div className="relative bg-white border border-gray-200 rounded-lg shadow-md p-4">
      <div className="absolute top-0 right-[-15px] w-20 h-20">
        <img
          src={img}
          alt="icon"
          className="w-full h-full object-contain transition-transform duration-300 hover:rotate-12"
        />
      </div>

      <div className="text-gray-800 p-8 h-full flex flex-col items-center justify-center">
        {arabic && <p className="text-center text-xl pb-4">{arabic}</p>}
        <p className="text-center text-xl">{english}</p>
        <p className="text-right text-sm  self-end ">~{source}</p>
      </div>
    </div>
  );
};

export default QuoteCard;
