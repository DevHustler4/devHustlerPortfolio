import { motion } from "framer-motion";

const runningtext = () => {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-200%" }}
        transition={{
          duration: 35,
          ease: "linear",
          repeat: Infinity,
        }}
        className="whitespace-nowrap text-transparent text-5xl z-20 font-semibold"
        style={{ WebkitTextStroke: "1px #aaa7e9" }}
      >
        Crafting Seamless Digital Experiences With Crafting Seamless Digital.
        Experiences With Crafting Seamless Digital Experiences With.Digital
        Experiences With Crafting Seamless Digital Experiences With.
      </motion.div>
    </div>
  );
};

export default runningtext;
