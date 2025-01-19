import { CaretRight, CaretLeft } from "@phosphor-icons/react";
import React, { useState } from "react";

const PhotoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startX, setStartX] = useState(0);

  const images = [
    "/foto.jpg",
    "/foto-2.jpg",
    "/foto-1.jpeg",
    "/foto-6.jpeg",
    "/foto-4.jpeg",
  ];

  const totalSlides = images.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleTouchStart = (event) => {
    setStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    const endX = event.changedTouches[0].clientX;
    if (startX - endX > 50) {
      nextSlide();
    } else if (startX - endX < -50) {
      prevSlide();
    }
  };

  return (
    <div className="slider-container relative overflow-hidden w-full">
      {/* Tombol Panah Kiri */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full z-10"
      >
        <CaretLeft size={32} />
      </button>

      {/* Gambar Slide */}
      <div
        className="slider flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((image, index) => (
          <div key={index} className="slider-item w-full flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Tombol Panah Kanan */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white rounded-full z-10 border-white"
      >
        <CaretRight size={32} />
      </button>
    </div>
  );
};

export default PhotoSlider;
