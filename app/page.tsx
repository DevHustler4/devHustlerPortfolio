"use client";
import Image from "next/image";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { motion, useScroll, useTransform, MotionConfig } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { FaXTwitter } from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";
import { debounce } from "lodash";
import { PiCursorClickFill } from "react-icons/pi";
import { FaGithub } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { TbBrandFiverr } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";
import { EmailSend } from "@/components/sendemail";
export default function Home() {
  const ref = useRef(null);
  const aboutref = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
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
    offset: ["0.5 0", "1 0"],
  });

  const x = useTransform(y, [0, 1], ["-0%", "-100%"]);
  const { scrollYProgress: aboutMe } = useScroll({
    target: aboutMeRef,
    offset: ["start end", "start start"],
  });
  const scaleOfAboutMe = useTransform(aboutMe, [0, 1], ["-140", "-0%"]);
  const sectionOfAboutMe = useTransform(aboutMe, [0, 1], ["140%", "0%"]);
  //first value is 0 second is 1
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = debounce((e: MouseEvent) => {
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
    "/nextjs.png",
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

  const smoothScrollTo = (target: string) => {
    document.querySelector(target)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* cursor styling */}
      <motion.div
        className={
          cursorVariant === "link"
            ? "bg-transparent transition duration-200 ease-in-out link ring-4 ring-blue-500 absolute z-50 w-24 h-24  rounded-full pointer-events-none flex cursor-pointer items-center justify-center"
            : " non-link transition duration-200 ease-in-out  absolute z-50 w-8 h-8  bg-blue-500 rounded-full pointer-events-none flex items-center justify-center "
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
        }}
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
        {/* navbar */}
        <motion.div
          transition={{ staggerChildren: 2 }}
          className="min-w-screen h-20 overflow-hidden flex justify-between lg:px-8 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                stiffness: 220,
                duration: 0.5,
              },
            }}
            viewport={{ once: true, amount: 1 }}
            className="flex justify-center items-center ml-2 gap-2 lg:gap-3"
          >
            <div className="w-10 h-10 relative object-contain">
              <Image src="/dev 1.png" alt="My Logo" fill={true} />
            </div>
            <h1 className="lg:text-xl text-lg text-white">Dev Hustler</h1>
          </motion.div>

          <motion.ul className="lg:flex gap-5 hidden ">
            {["About", "Services", "Skills", "Services"].map((d, index) => (
              <motion.li
                onClick={() => smoothScrollTo(`#${d}`)}
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
            onClick={() => smoothScrollTo(`#Contact`)}
            onMouseEnter={() => {
              setCursorVariant("link");
            }}
            onMouseLeave={() => {
              setCursorVariant("default");
            }}
            className="font-bold lg:text-xl text-lg bg-gradient-to-br text-[#203a43] from-[#aaa7e9] to-[#e5e7e7] rounded-md p-1 px-3 mr-4 lg:mr-0"
          >
            Hire Now
          </motion.div>
        </motion.div>
        {/* main headline */}
        <motion.section
          style={{ scale: scale }}
          transition={{ staggerChildren: 1 }}
          className="flex items-center flex-col justify-center lg:mt-16 gap-2 mt-24"
        >
          <motion.span className="lg:text-2xl sm:text-xl text-lg mx-2 text-center text-gray-400">
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

          <motion.div className="font-bold lg:text-7xl text-4xl  sm:text-5xl md:text-6xl lg:leading-[93px] leading-normal bg-gradient-to-br from-[#0e00e7] to-[#e5e7e7] text-center lg:w-2/3 mx-5 bg-clip-text text-transparent">
            {text2.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 , y:-100}}
                animate={{ opacity: 1 , y:0}}
                transition={{
                  duration: 0.5,
                  delay: i * 0.3,
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
                delay:1.4
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
        ref={aboutMeRef}
        id="About"
        className="min-h-[110vh] flex flex-col lg:flex-row justify-around overflow-hidden items-center min-w-screen bg-gradient-to-r from-[#203a43] to-[#070b0c]"
      >
        {/* image */}
        <motion.div
          className="mb-14 mx:5 lg:mx-0 lg:mb-0"
          style={{ x: scaleOfAboutMe }}
          initial={{ scale: 1 }}
          whileInView={{ y: 20 }}
          viewport={{ once: true, amount: 1 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="relative">
            <motion.div
              className="absolute  inset-0 rounded-full shadow-lg shadow-blue-700"
              whileInView={{ rotate: 360 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
            <div className="lg:w-[400px] lg:h-[400px] w-72 h-72">
              <Image
                src="/dev 1.png"
                alt="my image "
                className="rounded-full"
                fill={true}
              />
            </div>
          </div>
        </motion.div>

        {/* about me text */}
        <motion.div
          style={{ x: sectionOfAboutMe }}
          className="flex mb-10 lg:mb-0 flex-col w-[80vw] justify-center  items-center lg:items-start gap-12 lg:w-2/4"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, rotate: [40, -40, 0] }}
            viewport={{ once: true, amount: 1 }}
            className="text-5xl font-semibold bg-gradient-to-br from-[#6f69cd] to-[#e5e7e7] bg-clip-text text-transparent"
          >
            About Us
          </motion.h1>
          <div className="flex flex-col lg:gap-3 gap-12 ">
            {aboutme.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, x: -150 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    stiffness: 220,
                    duration: 0.4,
                    delay: 0.2 * index,
                    staggerChildren: 0.1,
                  },
                }}
                viewport={{ once: true, amount: 0.5 }}
                key={index}
                className="text-lg text-[#a4d8e9] leading-relaxed"
              >
                <div className="flex text-center lg:text-left flex-col lg:flex-row justify-center items-center gap-5">
                  <motion.span className="flex flex-col items-center justify-center text-xl px-4 py-2 rounded-full text-white bg-blue-600">
                    {index + 1}
                  </motion.span>{" "}
                  {item}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

        {/* moving text */}
        <div className="overflow-x-hidden h-[80px]  leading-relaxed ">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "-200%" }}
            transition={{
              duration: 50,
              ease: "linear",
              repeat: Infinity,
            }}
            className="whitespace-nowrap text-transparent mt-3 flex items-center gap-1  text-5xl z-20 font-bold"
            style={{ WebkitTextStroke: "1px #aaa7e9" }}
          >
            {slidetext.map((item, index) => (
              <motion.h1
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
              </motion.h1>
            ))}
          </motion.div>
        </div>
      {/* Skills section */}

      <div
        ref={aboutref}
        className="flex flex-col justify-center  bg-gradient-to-r from-[#203a43] to-[#070b0c] lg:items-center gap-10"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, rotate: [40, -40, 0] }}
          viewport={{ once: true, amount: 1 }}
          className="lg:text-5xl text-3xl sm:text-4xl mt-16 mx-auto font-semibold bg-gradient-to-br from-[#6f69cd] to-[#e5e7e7] bg-clip-text text-transparent"
        >
          Skills And Expertise
        </motion.h1>
        <motion.div
          style={{ x: x }}
          className="flex items-center justify-center flex-wrap lg:w-1/2  gap-5 mx-4 mb-4 lg:mb-0 lg:mx-0"
        >
          {images.map((item, index) => (
            <motion.div
              key={item}
              ref={(element) => (cardRefs.current[index] = element)}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              exit={{ opacity: 0, y: 50 }}
              viewport={{ once: true, amount: 0.5 }}
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
              <div className="relative lg:w-24 lg:h-24 w-[90px] h-20 ">
                <Image src={item} fill={true} alt={item} />
              </div>
            </motion.div>
          ))}
        </motion.div>
        ;
      </div>
      {/* services section */}
      <div
        id="Services"
        className="bg-gradient-to-r from-[#203a43] to-[#070b0c] min-w-screen flex overflow-x-hidden items-center flex-col justify-center  "
      >
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, rotate: [40, -40, 0] }}
          viewport={{ once: true, amount: 1 }}
          className="lg:text-5xl text-4xl lg:my-12 my-5  font-semibold bg-gradient-to-br from-[#6f69cd] to-[#e5e7e7] bg-clip-text text-transparent"
        >
          What I Do
        </motion.h1>
      </div>
      <HorizontalScrollCarousel />
      {/* Contact me section */}
      <div
        id="Contact"
        className="h-screen min-w-screen flex-col bg-gradient-to-r from-[#203a43] to-[#070b0c] flex overflow-hidden items-center justify-center gap-10 "
      >
        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, rotate: [40, -40, 0] }}
            viewport={{ once: true, amount: 1 }}
            className="text-5xl mt-6 font-semibold bg-gradient-to-br from-[#6f69cd] to-[#e5e7e7] bg-clip-text text-transparent"
          >
            Contact Me
          </motion.h1>
        </div>
        <EmailSend />
      </div>
      {/* footer section */}
      <footer className="min-w-screen flex-col-reverse gap-4 py-3 lg:flex-row flex px-3 items-center lg:px-6 justify-between bg-[#6f69cd]">
        <div className="font-bold hidden sm:block">Dev Hustler</div>
        <p className="font-medium text-base lg:ml-11 ml-4 text-center ">
          &copy; 2024 Dev hustler. All rights reserved.
        </p>
        {/* social links */}
        <div className="flex gap-3 ">
          {[
            <FaXTwitter key="twitter" />,
            <IoLogoInstagram key="instagram" />,
            <FaLinkedinIn key="linkedin" />,
            <TbBrandFiverr key="fiverr" />,
            <FaGithub key="github" />,
            <SiUpwork key="upwork" />,
          ].map((item, index) => (
            <div
              className="ring-1 ring-black p-2 rounded-full hover:bg-[#203a43] font-bold hover:ring-0"
              onMouseEnter={() => {
                setCursorVariant("link");
              }}
              onMouseLeave={() => {
                setCursorVariant("default");
              }}
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
      </footer>
    </>
  );
}
// typing text
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

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[350vh] bg-[#7d78c5]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10 items-center">
          {cards.map((card) => {
            return <Card card={card} key={card.title} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};
type CardType = {
  title: string;
  image: string;
  description: string;
  features: string[];
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <motion.div
      key={card.title}
      transition={{ duration: 0.5 }}
      style={{
        boxShadow: "6px 6px 12px #2c2a52, -6px -6px 12px #b2a8ff",
      }}
      className="w-[300px] z-10 my-8 group text-black rounded-[25px] bg-[#6f69cd] relative"
    >
      <motion.div className="overflow-hidden rounded-t-[25px]">
        <Image
          src={card.image}
          alt="img"
          height={40}
          width={100}
          className="w-[300px] z-0  h-[200px] rounded-t-[25px] transition ease-out duration-300  scale-100 group-hover:scale-110"
        />
      </motion.div>
      <div className="m-5 flex flex-col gap-4">
        <h1 className=" text-xl text-[#f2f2f5] font-medium">{card.title}</h1>
        <p className=" text-sm text-gray-300 font-normal">{card.description}</p>

        <ul className="mb-2">
          {card.features.map((feature: string) => (
            <li
              className="border-[1px] text-sm text-gray-300  mb-3 px-3 py-1 border-slate-700 inline-block bg-[#625cb6] rounded-lg "
              key={feature}
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <motion.button
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          duration: 0.4,
        }}
        className="bg-blue-800 hidden group-hover:block text-center ml-20 text-white -mt-4  mb-2 px-4 py-2 rounded-md"
        style={{ zIndex: 5 }}
      >
        View Details
      </motion.button>
    </motion.div>
  );
};

const cards = [
  {
    title: "E-commerce Website Development",
    description: "Creating online stores that convert.",
    image: "/ecommerce.jpg",
    features: [
      "Customized Shopping Cart",
      "Seamless Checkout Experience",
      "Product Recommendation Engine",
    ],
  },
  {
    title: "Portfolio Website Development",
    description: "Showcasing your work in style.",
    image: "/portfolio.jpg",
    features: [
      "Stunning Visual Design",
      "Easy-to-update Portfolio Sections",
      "Integration with Social Media.",
    ],
  },
  {
    title: "Real Estate Website Development",
    description: "Empowering real estate professionals online.",
    image: "/realestate.jpg",
    features: [
      "Property Listings Management",
      "Virtual Tour Integration",
      "Lead Generation Forms",
    ],
  },
  {
    title: "Food Delivery Website Development",
    description: "Go your food to every house of your city .",
    image: "/food.jpg",
    features: [
      "Event Calendar Integration",
      "Ticket Booking System",
      "Social Media Integration",
    ],
  },
  {
    title: "Educational Website Development",
    description: "Empowering educators and learners online.",
    image: "/eductional.jpg",
    features: [
      "Learning Management System",
      "Course Enrollment",
      "Interactive Quizzes ",
    ],
  },

  {
    title: "Blogging Platform Development",
    description: "Sharing your ideas with the world.",
    image: "/blogging.jpg",
    features: [
      "User-Friendly",
      "SEO-Optimized Blog Posts",
      "Social Sharing Integration",
    ],
  },
];
