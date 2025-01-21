import React, { useState } from "react";
import ProfileCard from "@/components/CardMember";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import member from "@/data/memberData";

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((currentIndex + 1) % member.length);
  };

  const prevCard = () => {
    setCurrentIndex((currentIndex - 1 + member.length) % member.length);
  };

  return (
    <section id="member">
      <div className="min-h-screen pt-24 pb-24">
        <div className="relative w-full max-w-sm mx-auto">
          <h1 className="text-white text-3xl lg:text-4xl font-bold text-center">
            Meet our Member
          </h1>
          <div className="mt-24 flex relative items-center h-full">
            <button
              onClick={prevCard}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black rounded-full bg-white z-30 mt-24"
            >
              <CaretLeft size={30} />
            </button>
            <div className="relative w-full max-w-sm px-8">
              {member.map((person, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full transition-transform transform ${
                    index === currentIndex
                      ? "translate-x-0 scale-100 z-10"
                      : index ===
                        (currentIndex - 1 + member.length) % member.length
                      ? "-translate-x-full scale-75 opacity-50 z-0"
                      : "translate-x-full scale-75 opacity-50 z-0"
                  }`}
                >
                  <ProfileCard
                    {...person}
                    prevCard={prevCard}
                    nextCard={nextCard}
                  />
                </div>
              ))}
            </div>
            <button
              onClick={nextCard}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black rounded-full bg-white z-30 mt-24"
            >
              <CaretRight size={30} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardCarousel;
