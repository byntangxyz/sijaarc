import React from "react";

const CardMember = ({ name, title, description, imageUrl }) => {
  return (
    <div className="relative max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={imageUrl}
            alt="Profile Picture"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {title}
          </div>
          <h1 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            {name}
          </h1>
          <p className="mt-2 text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardMember;
