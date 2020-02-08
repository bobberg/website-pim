import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Slideshow = (image: any) => {
  return (
    <AnimatePresence>
      <motion.img
        key={image.src}
        src={image.src}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
      />
    </AnimatePresence>
  );
};
export default Slideshow;
