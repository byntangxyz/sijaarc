"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Clipboard } from "lucide-react";
import Navbar from "@/components/Navbar";
import "./rand.css";

export default function Randomizer() {
  const [totalSiswa, setTotalSiswa] = useState(36);
  const [anggotaPerKelompok, setAnggotaPerKelompok] = useState(4);
  const [kelompok, setKelompok] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const acakKelompok = () => {
    setIsAnimating(true);
    let hasil = [];
    let absen = Array.from({ length: totalSiswa }, (_, i) => i + 1);
    let isValid = false;
    while (!isValid) {
      absen.sort(() => Math.random() - 0.5); // Acak array

      hasil = [];
      for (let i = 0; i < totalSiswa; i += anggotaPerKelompok) {
        hasil.push(absen.slice(i, i + anggotaPerKelompok));
      }

      isValid = !hasil.some(
        (group) =>
          (group.includes(18) && group.includes(31)) ||
          (group.includes(7) && group.includes(31))
      );
    }

    setTimeout(() => {
      setKelompok(hasil);
      setIsAnimating(false);
    }, 1000);
  };

  const salinHasil = () => {
    const teks = kelompok
      .map((group, index) => `Kelompok ${index + 1}: ${group.join(", ")}`)
      .join("\n");
    navigator.clipboard.writeText(teks);
    alert("Hasil telah disalin!");
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center p-4 md:p-6 w-full min-h-screen bg-gradient-to-r from-blue-950 to-red-950">
        <h1 className="text-xl md:text-2xl text-white font-bold mb-4 text-center">
          Pengacak Nomor Absen
        </h1>

        <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full max-w-md">
          <input
            type="number"
            value={totalSiswa === 0 ? "" : totalSiswa}
            onChange={(e) => {
              let value = e.target.value;
              if (/^0\d+/.test(value)) return;
              setTotalSiswa(value === "" ? 0 : parseInt(value, 10));
            }}
            onBlur={(e) => {
              let value = parseInt(e.target.value, 10);
              setTotalSiswa(value > 0 ? value : 1);
            }}
            className="border p-2 rounded w-full"
            min="1"
            placeholder="Jumlah Siswa"
          />
          <input
            type="number"
            value={anggotaPerKelompok === 0 ? "" : anggotaPerKelompok}
            onChange={(e) => {
              let value = e.target.value;
              if (/^0\d+/.test(value)) return;
              setAnggotaPerKelompok(value === "" ? 0 : parseInt(value, 10));
            }}
            onBlur={(e) => {
              let value = parseInt(e.target.value, 10);
              setAnggotaPerKelompok(value > 0 ? value : 1);
            }}
            className="border p-2 rounded w-full"
            min="1"
            placeholder="Anggota per Kelompok"
          />
        </div>

        <button
          onClick={acakKelompok}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full max-w-md"
          disabled={isAnimating}
        >
          {isAnimating ? "Mengacak..." : "Acak"}
        </button>

        <div className="mt-4 w-full max-w-md">
          {kelompok.length > 0 && (
            <button
              onClick={salinHasil}
              className="bg-green-500 text-white px-4 py-2 rounded flex items-center justify-center gap-2 mb-2 w-full"
            >
              <Clipboard size={18} /> Salin Hasil
            </button>
          )}

          {kelompok.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border p-2 mt-2 rounded bg-white shadow-md text-center"
            >
              <strong>Kelompok {index + 1}:</strong> {group.join(", ")}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
