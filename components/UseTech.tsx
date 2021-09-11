import React, { useEffect, useState } from "react";

type Props = {
  techName: string;
  srcURL: string;
};

const UseTech: React.FC<Props> = ({ techName, srcURL }) => {
  return (
    <div className="w-full bg-gray-300 rounded opacity-90 shadow my-2 text-gray-900 p-2">
      <p className="text-2xl">{techName}</p>
      <button
        className="bg-gray-800 text-white px-4 py-2 rounded shadow hover:bg-opacity-50"
        onClick={() => window.open(srcURL, "_blank")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      </button>
    </div>
  );
};

export default UseTech;
