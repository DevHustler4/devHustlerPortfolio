"use client";
import Image from "next/image";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { debounce } from "lodash";
import { PiCursorClickFill } from "react-icons/pi";
export default function Home() {
  const ref = useRef(null);
  const aboutref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.8 0", "1 1"],
  });
  const { scrollYProgress: y } = useScroll({
    target: aboutref,
    offset: ["0 0", "1 0"],
  });
  //first value is 0 second is 1
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const image = useTransform(scrollYProgress, [0, 1], ["-0%", "-140%"]);
  const section = useTransform(scrollYProgress, [0, 1], ["0%", "140%"]);
  const x = useTransform(y, [0, 1], ["-0%", "-100%"]);
  const xfor = useTransform(y, [0, 1], ["-100%", "-0%"]);
  // console.log(scale);
  // console.log(x);
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
  const slidetext =
    "Crafting Seamless Digital Experiences With Next.js Crafting Seamless Digital Experiences With Crafting Tailwind Css.Crafting Seamless Digital Experiences With Mongodb. Seamless DigitalExperiences With Html 5".split(
      " "
    );

  const handledown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
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
  const images = [
    "/html.png",
    "/csslogo.png",
    "/tailwind.png",
    "/js.png",
    "/ts.png",
    "/mongodb.png",
    "/node.png",
    "/express.png",
    "/react.png",
    "/nextlogo.png",
  ];

  useEffect(() => {
    cardRefs.current.forEach((ref) => {
      if (ref) {
        VanillaTilt.init(ref, {
          max: 25,
          speed: 400,
          glare: true,
          "max-glare": 0.6,
        });
      }
    });
  }, []);

  const services = [
    {
      title: "E-commerce Website Development",
      description: "Creating online stores that convert.",
      features: [
        "Customized Shopping Cart",
        "Seamless Checkout Experience",
        "Product Recommendation Engine",
      ],
    },
    {
      title: "Portfolio Website Development",
      description: "Showcasing your work in style.",
      features: [
        "Stunning Visual Design",
        "Easy-to-update Portfolio Sections",
        "Integration with Social Media Platforms",
      ],
    },
    {
      title: "Real Estate Website Development",
      description: "Empowering real estate professionals online.",
      features: [
        "Property Listings Management",
        "Virtual Tour Integration",
        "Lead Generation Forms",
      ],
    },
    {
      title: "Event Management Website Development",
      description: "Bringing events to life on the web.",
      features: [
        "Event Calendar Integration",
        "Ticket Booking System",
        "Social Media Integration for Promotion",
      ],
    },
    {
      title: "Educational Website Development",
      description: "Empowering educators and learners online.",
      features: [
        "Learning Management System (LMS)",
        "Course Enrollment and Progress Tracking",
        "Interactive Quizzes and Assessments",
      ],
    },
    {
      title: "Blogging Platform Development",
      description: "Sharing your ideas with the world.",
      features: [
        "User-Friendly Content Management System",
        "SEO-Optimized Blog Posts",
        "Social Sharing Integration",
      ],
    },
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
        ref={ref}
        variants={containerVariants}
        className="min-h-screen min-w-screen bg-gradient-to-r from-[#203a43] to-[#070b0c]"
      >
        <motion.div
          transition={{ staggerChildren: 2 }}
          className="min-w-screen h-20 flex justify-between px-8 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                stiffness: 225,
                duration: 0.4,
              },
            }}
            className="flex justify-center items-center gap-3"
          >
            <Image src="/dev 1.png" alt="My Logo" width={40} height={40} />
            <h1 className="text-xl text-white">Dev Hustler</h1>
          </motion.div>
          <motion.ul className="flex gap-5">
            {["About", "Services", "Skills", "Projects"].map((d, index) => (
              <motion.li
                className="text-lg text-white hover:text-[#aaa7e9] hover:font-semibold"
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
          style={{ scale: scale }}
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

          <motion.div className=" font-bold text-7xl leading-tight bg-gradient-to-br from-[#0e00e7] to-[#e5e7e7] text-center w-2/3 bg-clip-text text-transparent">
            {text2.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.2,
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
          </motion.div>
          <motion.div
            onClick={() => handledown()}
            initial={{ scale: 0, y: -100 }}
            animate={{
              scale: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 220,
                duration: 0.5,
              },
            }}
            onMouseEnter={() => {
              setCursorVariant("link");
            }}
            onMouseLeave={() => {
              setCursorVariant("default");
            }}
            className="mt-8 w-12 h-20 ring-2 ring-[#aaa7e9] rounded-3xl flex justify-center items-end pb-4"
          >
            <MdOutlineKeyboardDoubleArrowDown className="size-8 animate-bounce text-[#81a9ff] " />
          </motion.div>
        </motion.section>
      </motion.main>

      {/* About me Section */}
      <div
        style={{ overflowX: "hidden" }}
        id="about-me-section"
        className="min-h-[100vh] flex justify-around items-center min-w-screen bg-gradient-to-r from-[#203a43] to-[#070b0c]"
      >
        <motion.div
          style={{ x: image }}
          initial={{ scale: 1 }}
          whileInView={{ y: 20 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 rounded-full shadow-lg shadow-blue-700"
              whileInView={{ rotate: 360 }}
              viewport={{ once: true, amount: 0.6 }}
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

        <motion.div
          style={{ x: section }}
          className="flex flex-col gap-16 w-2/4"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, rotate: [40, -40, 0] }}
            viewport={{ once: true, amount: 1 }}
            className="text-5xl ml-[55] font-semibold bg-gradient-to-br from-[#6f69cd] to-[#e5e7e7] bg-clip-text text-transparent"
          >
            About Us
          </motion.h1>
          <div className="flex flex-col gap-3">
            {aboutme.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, x: -150 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    stiffness: 220,
                    duration: 0.5,
                    delay: 1 * index,
                    staggerChildren: 0.5,
                  },
                }}
                viewport={{ once: true, amount: 0.5 }}
                key={index}
                className="text-lg text-[#a4d8e9] leading-relaxed"
              >
                <div className="flex justify-center items-center gap-5">
                  <motion.span
                    initial={{
                      boxShadow: "0px 0px 4px 4px rgba(37, 99, 235, 1)",
                    }}
                    animate={{
                      boxShadow: "0px 0px 1px 1px rgba(37, 99, 235, 1)",
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeIn",
                      repeat: Infinity,
                    }}
                    className="flex items-center justify-center text-xl px-4 py-2 rounded-full text-white bg-blue-600"
                  >
                    {index + 1}
                  </motion.span>{" "}
                  {item}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      {/* Skill section */}
      <div
        id="skills-section"
        className="h-screen min-w-screen overflow-hidden"
      >
        <div className="overflow-hidden">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "-200%" }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
            className="whitespace-nowrap text-transparent flex gap-1  text-5xl z-20 font-bold"
            style={{ WebkitTextStroke: "1px #aaa7e9" }}
          >
            {slidetext.map((item, index) => (
              <h1
                onMouseEnter={() => {
                  setCursorVariant("link");
                }}
                onMouseLeave={() => {
                  setCursorVariant("default");
                }}
                className="hover:text-blue-400 "
                key={index}
              >
                {item}
              </h1>
            ))}
          </motion.div>
        </div>
        <div
          ref={aboutref}
          className="flex items-center flex-col justify-center gap-10"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, rotate: [40, -40, 0] }}
            viewport={{ once: true, amount: 1 }}
            className="text-5xl mt-16 mx-auto font-semibold bg-gradient-to-br from-[#6f69cd] to-[#e5e7e7] bg-clip-text text-transparent"
          >
            Skills And Expertise
          </motion.h1>
          <motion.div
            style={{ x: x }}
            className="flex overflow-hidden items-center justify-center flex-wrap w-1/2 gap-5"
          >
            {images.map((item, index) => {
              return (
                <div
                  key={item}
                  ref={(element) => (cardRefs.current[index] = element)}
                  onMouseEnter={() => {
                    setCursorVariant("link");
                  }}
                  onMouseLeave={() => {
                    setCursorVariant("default");
                  }}
                  className="p-4 h-32 flex items-center justify-center"
                  style={{
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                    backdropFilter: "blur(13px)",
                    WebkitBackdropFilter: "blur(13px)",
                    borderRadius: "10px",
                    border: "2px solid rgba(255, 255, 255, 0.18)",
                  }}
                >
                  <Image src={item} width={100} height={100} alt={item} />
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
      {/* services section */}
      <div className="h-screen min-w-screen flex items-center flex-col justify-center gap-10 ">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, rotate: [40, -40, 0] }}
          viewport={{ once: true, amount: 1 }}
          className="text-5xl mt-16 mx-auto font-semibold bg-gradient-to-br from-[#6f69cd] to-[#e5e7e7] bg-clip-text text-transparent"
        >
          What I Do
        </motion.h1>
        <motion.div className="bg-yellow flex gap-7" style={{ x: xfor }}>
          {services.map((item) => (
            <div
              key={item.title}
              style={{
                boxShadow:
                  "inset 22px 22px 44px #172a30,inset -22px -22px 44px #294a56",
              }}
              className="p-6 w-[400px] hover:scale-105 text-[#e5e7e7] rounded-[25px] bg-[#203a43]"
            >
              <h1 className="text-2xl text-bold mb-3">{item.title}</h1>
              <p className="text-base text-gray-500 mb-3">{item.description}</p>
              <ul>
                {item.features.map((feature) => (
                  <li
                    className="border-[1px]  mb-3 px-3 py-1 border-blue-300 inline-block bg-blue-950 rounded-xl text-blue-100"
                    key={feature}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
        {/* </div> */}
      </div>
    </>
  );
}
// ================================================================================
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
