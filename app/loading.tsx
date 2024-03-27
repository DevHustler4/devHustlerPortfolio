"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LoadingPage = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <motion.div
        className="w-40 h-40 bg-blue-500 rounded-full flex justify-center items-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.span
          className="text-white text-2xl font-bold"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        >
          Loading...
        </motion.span>
      </motion.div>
      <div className="ml-4 text-gray-800 text-xl font-semibold">
        Loading {progress}%
      </div>
    </div>
  );
};

export default LoadingPage;
