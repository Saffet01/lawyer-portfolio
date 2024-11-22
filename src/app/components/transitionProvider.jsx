"use client";
import React from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const pathNames = {
  "": "Anasayfa",
  "about": "Hakkımda",
  "contact": "İletişim"
};

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  const getPageName = () => {
    const path = pathName.substring(1);
    return pathNames[path] || path;
  }

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-blue-50 to-red-100"
      >
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[64px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "120vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        ></motion.div>

        <motion.div
          className="fixed m-auto top-0 left-0 bottom-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {getPageName()}
        </motion.div>

        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[64px] bottom-0 z-40"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        ></motion.div>
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;