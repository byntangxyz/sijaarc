import React from "react";
import { motion } from "framer-motion";

const WelcomeAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="flex items-center justify-center h-screen bg-slate-700 text-white text-3xl font-bold text-center"
    >
      <div className="absolute">
        <span className="block">Selamat Datang di </span>
        <span className="block text-6xl mb-6">SIJA ARC</span>
        <span className="block">
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
              <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
            </div>
          </div>
        </span>
      </div>
    </motion.div>
  );
};

export default WelcomeAnimation;
