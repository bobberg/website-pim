import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { images } from "./image-data";

/** Wraps a value into a range (replaces popmotion's wrap) */
const wrap = (min: number, max: number, v: number): number => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
  }),
  center: {
    zIndex: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Slideshow = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className="slideshow-image"
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_e: any, { offset, velocity }: any) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div
        className="next"
        onClick={() => paginate(1)}
        role="button"
        aria-label="Next image"
      >
        {"‣"}
      </div>
      <div
        className="prev"
        onClick={() => paginate(-1)}
        role="button"
        aria-label="Previous image"
      >
        {"‣"}
      </div>
    </>
  );
};
export default Slideshow;
