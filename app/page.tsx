"use client";
import Image from "next/image";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { debounce } from "lodash";
import { PiCursorClickFill } from "react-icons/pi";
export default function Home() {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = debounce((e: MouseEvent) => {
      // Debounce mousemove event
      setMousePosition({
        x: e.clientX,
        y: e.clientY + window.scrollY,
      });
    }, 10);
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const text = "Here Creativity Meets Functionality.".split(" ");
  const text2 = "Crafting Seamless Digital Experiences With".split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 1,
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
  const aboutme = [
    "Hi there! I'm Monu, a passionate and experienced Next.js web developer.I specialize in creating modern and responsive websites and web applications using the latest technologies.",
    " I have a strong foundation in React.js, and I'm dedicated to delivering high-quality work that exceeds client expectations. I'm committed to achieving results that drive business success.",
    "Outside of coding, you can find me UX/UI. Im always eager to learn and explore new technologies and trends in web development, and I'm excited about the opportunity to collaborate on innovative projects that make a positive impact.",
  ];
  return (
    <>
      <motion.div
        className={
          cursorVariant === "link"
            ? "bg-transparent  link ring-4 ring-blue-500 absolute z-50 w-24 h-24  rounded-full pointer-events-none flex cursor-pointer items-center justify-center"
            : " non-link absolute z-50 w-8 h-8  bg-blue-500 rounded-full pointer-events-none flex items-center justify-center "
        }
        style={{
          left:
            cursorVariant === "link"
              ? mousePosition.x - 48
              : mousePosition.x - 16,
          top:
            cursorVariant === "link"
              ? mousePosition.y - 48
              : mousePosition.y - 16,
          ...(cursorVariant === "link" ? {} : { mixBlendMode: "difference" }),
        }}
        initial="hidden"
        variants={myvariants}
        animate="visible"
      >
        {cursorVariant === "link" && (
          <PiCursorClickFill className="size-6 text-blue-400" />
        )}
      </motion.div>
      {/* Hero Section */}
      <motion.main
        variants={containerVariants}
        className="min-h-screen min-w-screen bg-gradient-to-r from-[#203a43] to-[#070b0c]"
      >
        <motion.div className="min-w-screen h-20 flex justify-between px-8 items-center">
          <motion.div
            initial="hidden"
            variants={myvariants}
            animate="visible"
            className="flex justify-center items-center gap-3"
          >
            <Image src="/dev 1.png" alt="My Logo" width={40} height={40} />
            <h1 className="text-xl">Dev Hustler</h1>
          </motion.div>
          <motion.ul className="flex gap-5">
            {["About", "Services", "Skills", "Projects"].map((d, index) => (
              <motion.li
                className="text-lg hover:text-[#aaa7e9] hover:font-semibold"
                key={d}
                initial="hidden"
                variants={livariants}
                animate="visible"
                onMouseEnter={() => {
                  setCursorVariant("link");
                }}
                onMouseLeave={() => {
                  setCursorVariant("default");
                }}
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
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                stiffness: 221,
                duration: 0,
                delay: 1,
              },
            }}
            whileHover={{ scale: 1.1 }}
            onMouseEnter={() => {
              setCursorVariant("link");
            }}
            onMouseLeave={() => {
              setCursorVariant("default");
            }}
            className="font-bold  text-xl bg-gradient-to-br text-[#203a43] from-[#aaa7e9] to-[#e5e7e7] rounded-md p-1 px-3"
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
          <div
            onMouseEnter={() => {
              setCursorVariant("link");
            }}
            onMouseLeave={() => {
              setCursorVariant("default");
            }}
            className="mt-8 w-12 h-20 ring-2 ring-[#aaa7e9] rounded-3xl flex justify-center items-end pb-4"
          >
            <MdOutlineKeyboardDoubleArrowDown className="size-8 animate-bounce text-[#81a9ff] " />
          </div>
        </motion.section>
      </motion.main>

      {/* About me Section */}
      <section className="min-h-[100vh] flex justify-around items-center min-w-screen bg-gradient-to-r from-[#203a43] to-[#070b0c]">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ opacity: 1, y: 20 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 rounded-full shadow-lg shadow-blue-700"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
            <Image
              src="/dev 1.png"
              alt="my image "
              className="rounded-full"
              width={400}
              height={200}
            />
          </div>
        </motion.div>

        <div className="flex flex-col gap-10 w-2/4">
          <h1 className="text-5xl font-semibold bg-gradient-to-br from-[#6f69cd] to-[#e5e7e7] bg-clip-text text-transparent">
            About Us
          </h1>
          <div className="flex flex-col gap-3">
            {aboutme.map((item, index) => (
              <motion.p
                initial={{ opacity: 0, x: 150 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    stiffness: 220,
                    duration: 0.5,
                    delay: 1 * index + 1,
                    staggerChildren: 1,
                  },
                }}
                key={index}
                className="text-lg text-[#a4d8e9] leading-relaxed"
              >
                <div className="flex items-center justify-center gap-6">
                  <div className="flex items-center justify-center text-xl px-4 py-2 rounded-full text-white bg-blue-600">
                    {index + 1}
                  </div>{" "}
                  {item}
                </div>
              </motion.p>
            ))}
          </div>
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
