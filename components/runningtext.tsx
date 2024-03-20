// components/RunningText.js
import { motion } from "framer-motion";

const textVariants = {
  initial: { x: "-100%" },
  animate: {
    x: "100%",
    transition: {
      duration: 10, // Adjust the duration as per your preference
      ease: "linear",
      repeat: Infinity,
    },
  },
};

const RunningText = () => {
  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        style={{ display: "inline-block" }}
        className="text-3xl text-white"
      >
        Hey, I am Monu kumArHow are sjehdd hwshsndjbje bwgj jhxyudcbe bhsbhw
        sbjw
      </motion.div>
    </div>
  );
};

export default RunningText;
