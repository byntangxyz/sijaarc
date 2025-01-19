import MainPages from "./MainPage";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function LandingPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi
      once: false, // Animasi hanya sekali
    });
  }, []);

  return (
    <>
      <div className="relative">
        <div
          className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-[5px]"></div>

          <img
            src="/logo-sija.jpg"
            alt="Logo Sija"
            width={80}
            className="absolute top-5 left-5 z-10 rounded-full"
          />

          <h1 className="relative text-3xl md:text-5xl font-bold text-white z-10 text-center px-4 md:px-0 ">
            X SIJA ARC{" "}
            <div data-aos="fade-up">
              <span className="block text-5xl md:text-7xl lg:text-9xl ">
                STEMBAYO
              </span>
            </div>
          </h1>

          <img
            src="/logo-stembayo.png"
            alt="Logo Stembayo"
            width={80}
            className="absolute top-5 right-5 z-10"
          />
        </div>

        <MainPages />
      </div>
    </>
  );
}

export default LandingPage;
