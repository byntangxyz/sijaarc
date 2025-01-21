import Navbar from "@/components/Navbar";
import FotoSlider from "@/components/FotoSlider";
import Structure from "@/pages/structure";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { InstagramLogo, DiscordLogo, HardDrives } from "@phosphor-icons/react";

function MainPages() {
  const [currentDaySchedule, setCurrentDaySchedule] = useState("");
  const [currentDayPiket, setCurrentDayPiket] = useState("");

  const schedules = [
    "Senin: Seni Budaya - Bu Mukti | Informatika - Bu Ratna | PPKN - Bu Yohana | Bahasa Jawa - Pak Fajar",
    "Selasa: DDK 2 SISKOM - Bu Endah | Bahasaa Indonesia - Bu Fani | Bahasa Inggris | Bu Dwi",
    "Rabu: Bahasa Inggris - Bu Dwi | DDK 3 Pemro - Bu Fani | IPAS - Bu Yanti | Sejarah - Bu Bakti",
    "Kamis: PJOK - Pak W. | Matematika - Bu Hartitik | IPAS - Bu Yanti",
    "Jumat: DDK 3 JARKOM - Pak Yunianto | Agama - Bu Fera",
  ];

  const Piket = [
    "Adel, Koko, Dino, Sabreen, Doni, Dimas, Hafiz",
    "Bening, Damar, Aina, Aulia, Baim, Farel, Arjuna",
    "Azis, Ghaza, Luthfi, Ikhsan, Caesar, Arka, El, Tyta",
    "Arfa, Ardian, Hito, Aza, Galang, Isa, Alfino",
    "Dinda, Kenzie, Arya, Bintang, Danang, Miko, Kenza",
  ];

  useEffect(() => {
    const dayIndex = new Date().getDay();
    if (dayIndex >= 1 && dayIndex <= 5) {
      setCurrentDaySchedule(schedules[dayIndex - 1]);
      setCurrentDayPiket(Piket[dayIndex - 1]);
    } else {
      setCurrentDaySchedule("Libur - Tidak ada jadwal pembelajaran hari ini");
      setCurrentDayPiket("-");
    }
    AOS.init({
      duration: 1000, // Durasi animasi
      once: false, // Animasi hanya sekali
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-black via-slate-900 to-gray-950 overflow-hidden">
        <div className="bg-dots-pattern bg-repeat bg-opacity-10 min-h-screen">
          <div className="pt-28 flex flex-col items-center" id="main">
            <div className="container mx-auto flex flex-col lg:flex-row gap-6 px-4">
              <div className="bg-white rounded-lg shadow-lg p-6 w-full lg:w-1/2 overflow-hidden box-border">
                <h2 className="text-2xl font-bold mb-4">SIJA ARC STEMBAYO</h2>
                <p className="mb-4 text-black">
                  Halo Dunia! Kami adalah siswa-siswi SMKN 2 Depok Sleman
                  jurusan Sistem Informasi Jaringan dan Aplikasi (SIJA) angkatan
                  ke-28.
                </p>
                <FotoSlider />
              </div>

              <div className="flex flex-col w-full lg:w-1/2 gap-6">
                <div data-aos="zoom-in-left">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold mb-4 text-black">
                      Jadwal Pelajaran & Piket
                    </h2>
                    <p className="mb-4 text-black">
                      Jadwal pelajaran kelas X SIJA A Semester 2 2024/2025.{" "}
                      <Link
                        href={"/file/rev2-jadwal.pdf"}
                        target="_blank"
                        className="text-blue-700 hover:underline"
                      >
                        Download Jadwal
                      </Link>
                    </p>
                    <div className="text-gray-700">
                      <p>{currentDaySchedule}</p>
                    </div>
                    <div className="text-gray-500">
                      <p>Piket: {currentDayPiket}</p>
                    </div>
                  </div>
                </div>

                <div data-aos="zoom-in-left">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold mb-4 text-black">
                      Informasi Lainnya
                    </h2>
                    <p className="mb-4 text-black">
                      Website ini dibuat oleh seluruh siswa SIJA A
                    </p>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="https://sijaarc.my.id/ig"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 dark:text-blue-400 flex m-2"
                        >
                          <InstagramLogo size={20} /> Instagram kelas
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://sijaarc.my.id/discord"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 dark:text-blue-400 flex m-2"
                        >
                          <DiscordLogo size={20} /> Discord Server
                        </Link>
                      </li>
                      <li className="cursor-pointer">
                        <p className="text-blue-500 dark:text-blue-400 flex m-2">
                          <HardDrives size={20} /> Minecraft Server:
                          play.sijaarc.my.id:19156
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Structure />
        </div>
      </div>
    </>
  );
}

export default MainPages;
