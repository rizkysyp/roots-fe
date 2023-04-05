import React from "react";

const CardList = ({ id, nama, kode }) => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <h1 className="text-xl font-bold mb-2">{nama}</h1>
        <p className="text-gray-700 text-base">{kode}</p>
      </div>
    </div>
  );
};

export default CardList;
