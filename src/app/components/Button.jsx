"use client";

import styles from "../page.module.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Button = () => {
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        scale: [1, 1.5, 1],
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [controls]);
  return (
    <motion.button className={styles.button} animate={controls}>
      SPIN NOW
    </motion.button>
  );
};

export default Button;
