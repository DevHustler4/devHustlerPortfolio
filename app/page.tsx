"use client";
import Image from "next/image";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { debounce } from "lodash";
export default function Home() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = debounce((e: MouseEvent) => {
      // Debounce mousemove event
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    }, 10);
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  const text = "Here Creativity Meets Functionality.".split(" ");
  const text2 = "Crafting Seamless Digital Experiences With".split(" ");
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 1, // Adjust the stagger duration as needed
      },
    },
  };
  const myvariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };
  const livariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      {/* Hero Section */}
      <motion.main
        variants={containerVariants}
        transition={{ staggerChildren: 2, delay: 2 }}
        className="min-h-screen min-w-screen bg-[#0f2027] bg-gradient-to-r from-[#203a43] to-[#070b0c]"
      >
        <motion.div className="min-w-screen h-20 flex justify-between px-8 items-center">
          <motion.div
            className="absolute z-50 w-8 h-8 bg-blue-500 rounded-full pointer-events-none flex items-center justify-center text-white"
            style={{
              left: mousePosition.x - 16,
              top: mousePosition.y - 16,
              mixBlendMode: "difference",
            }}
            initial="hidden"
            variants={myvariants}
            animate="visible"
          ></motion.div>
          <motion.div
            initial="hidden"
            variants={myvariants}
            animate="visible"
            className="text-xl"
          >
            Dev Hustler
          </motion.div>
          <motion.ul className="flex gap-5">
            {["About", "Services", "Skills", "Projects"].map((d, index) => (
              <motion.li
                key={d}
                initial="hidden"
                variants={livariants}
                animate="visible"
                transition={{
                  type: "spring",
                  stiffness: 221,
                  delay: index * 0.3,
                  duration: 0.5,
                }}
              >
                {d}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 221,
              duration: 0.4,
              delay: 1,
            }}
            className="font-bold text-xl bg-gradient-to-br text-[#203a43] from-[#aaa7e9] to-[#e5e7e7] rounded-md p-1 px-3"
          >
            Hire Now
          </motion.div>
        </motion.div>
        <motion.section
          transition={{ staggerChildren: 0.4 }}
          className="flex items-center flex-col justify-center mt-16 gap-2"
        >
          <motion.span className="text-2xl text-gray-400">
            {text.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: i * 0.4,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </motion.span>

          <motion.h1 className=" font-bold text-7xl leading-tight bg-gradient-to-br from-[#0e00e7] to-[#e5e7e7] text-center w-2/3 bg-clip-text text-transparent">
            {text2.map((el, i) => (
              <motion.span
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, x: 222 }}
                transition={{
                  duration: 1.2,
                  type: "spring",
                  stiffness: 221,
                  delay: i * 0.4,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
            <br />{" "}
            <TypingText
              texts={["Next.js 14", "Express.js", "Mongodb", "Node.js", "Html"]}
            />
          </motion.h1>
          <MdOutlineKeyboardDoubleArrowDown className="size-24" />
        </motion.section>
      </motion.main>

      {/* About me Section */}
      <section className="min-h-screen flex justify-evenly  items-start min-w-screen bg-[#0f2027] bg-gradient-to-r from-[#203a43] to-[#070b0c]">
        <Image src="/dev.png" alt="my image " width={400} height={200} />
        <div className="flex flex-col gap-5 w-2/4">
          <h1 className="text-5xl font-semibold text-[#aaa7e9]">About Us</h1>
          <p className="text-lg text-[#a4d8e9] leading-relaxed">
            Hi there! Im Monu, a passionate and experienced Next.js web
            developer based in India. With a background in [Your Background or
            Expertise], I specialize in creating modern and responsive websites
            and web applications using the latest technologies.s
          </p>
          <p className="text-lg text-[#a4d8e9] leading-relaxed">
            I have a strong foundation in React.js, and Im dedicated to
            delivering high-quality work that exceeds client expectations.
            Whether its building dynamic user interfaces, optimizing website
            performance, or solving complex technical challenges, Im committed
            to achieving results that drive business success.
          </p>
          <p className="text-lg text-[#a4d8e9] leading-relaxed">
            Outside of coding, you can find me [Your Interests or Hobbies]. Im
            always eager to learn and explore new technologies and trends in web
            development, and Im excited about the opportunity to collaborate on
            innovative projects that make a positive impact.
          </p>
        </div>
      </section>
    </>
  );
}

const TypingText = ({ texts }: { texts: string[] }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    let interval: NodeJS.Timeout;

    const typeNextChar = () => {
      setCurrentText((prevText) => {
        const newText = texts[currentTextIndex].slice(0, currentIndex + 1);
        if (newText === texts[currentTextIndex]) {
          clearInterval(interval);
          return newText;
        }
        return newText;
      });
      currentIndex++;
    };

    interval = setInterval(typeNextChar, 400);

    return () => clearInterval(interval);
  }, [texts, currentTextIndex]);

  useEffect(() => {
    if (currentText === texts[currentTextIndex]) {
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setCurrentText("");
      }, 400);
    }
  }, [currentText, texts, currentTextIndex]);

  const cursorVariants = {
    blinking: {
      opacity: [0, 0, 1, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "linear",
        times: [0, 0.5, 0.5, 1],
      },
    },
  };
  return (
    <span>
      {currentText}
      <motion.div
        variants={cursorVariants}
        animate="blinking"
        className="inline-block text-white translate-y-1 "
      >
        {" "}
        |
      </motion.div>
    </span>
  );
};
