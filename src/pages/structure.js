import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Member from "./Member";

function Structure() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi
      once: false, // Animasi hanya sekali
    });
  }, []);

  return (
    <>
      <section id="class">
        <div className="container mx-auto py-10">
          <div data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold mb-8 text-white">
              Struktur Kepengurusan Kelas
            </h2>
          </div>

          {/* Wrapper untuk seluruh struktur */}
          <div className="flex flex-col items-center gap-4 relative overflow-hidden">
            {/* Wali Kelas */}
            <div data-aos="zoom-in-up">
              <div className="flex flex-col items-center">
                <div className="bg-white text-center rounded-lg shadow-md p-4 w-48">
                  <h3 className="text-xl font-semibold text-black">
                    Wali Kelas
                  </h3>
                  <p className="text-gray-700 ">Bu Ratna</p>
                </div>
                <div className="h-8 w-1 bg-gray-300 -mt-1"></div>{" "}
                {/* Garis ke Ketua */}
              </div>
            </div>

            {/* Ketua */}
            <div data-aos="zoom-in-up">
              <div className="flex flex-col items-center -mt-4">
                <div className="bg-white  text-center rounded-lg shadow-md p-4 w-48">
                  <h3 className="text-xl font-semibold text-black">
                    Ketua Kelas
                  </h3>
                  <p className="text-gray-700 ">Adelia Fauzia</p>
                </div>
                <div className="h-8 w-1 bg-gray-300 -mt-1"></div>{" "}
                {/* Garis ke Wakil */}
              </div>
            </div>

            {/* Wakil Ketua */}
            <div data-aos="zoom-in-up">
              <div className="flex flex-col items-center -mt-4">
                <div className="bg-white  text-center rounded-lg shadow-md p-4 w-48">
                  <h3 className="text-xl font-semibold text-black">
                    Wakil Ketua
                  </h3>
                  <p className="text-gray-700 ">Ibrahim</p>
                </div>
                <div className="h-6 w-1 bg-gray-300 -mt-1"></div>{" "}
                {/* Garis bercabang ke Sekretaris dan Bendahara */}
              </div>
            </div>

            {/* Sekretaris dan Bendahara */}
            <div className="flex justify-center items-start relative -mt-4 max-w-64 md:max-w-full">
              {/* Garis cabang dari Wakil Ketua ke Sekretaris dan Bendahara */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-3 w-28 border-t border-gray-300 500"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-[60px] w-1 h-6 bg-gray-300 -mt-1"></div>
              <div className="absolute top-0 right-1/2 transform translate-x-[60px] w-1 h-6 bg-gray-300 -mt-1"></div>

              {/* Sekretaris */}
              <div data-aos="fade-up-right">
                <div className="bg-white  text-center rounded-lg shadow-md p-2 w-48 mt-5">
                  <h3 className="text-base font-semibold md:text-xl text-black">
                    Sekretaris
                  </h3>
                  <p className="text-gray-700 text-xs md:text-base">
                    'Aina Wafa <br></br> Isa Silva Putra
                  </p>
                </div>
              </div>
              <span className="text-transparent">tono</span>
              {/* Bendahara */}
              <div data-aos="fade-up-left">
                <div className="bg-white  text-center rounded-lg shadow-md p-2 w-48 mt-5">
                  <h3 className="text-base font-semibold md:text-xl text-black">
                    Bendahara
                  </h3>
                  <p className="text-gray-700 text-xs md:text-base">
                    Athaya Sabreen <br /> Bening Cahya{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Member />
    </>
  );
}

export default Structure;
