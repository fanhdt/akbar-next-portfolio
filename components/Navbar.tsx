"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/fragments/Button";
import { usePathname, useRouter } from "next/navigation"; // Import useRouter and usePathname to check the current route and navigate

const navMenu = [
  { name: "Work", url: "#work" },
  { name: "About", url: "#about" },
  { name: "Service", url: "#service" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Get the current route
  const router = useRouter(); // Get the router object for navigation

  // Scroll effect only for the homepage
  useEffect(() => {
    if (pathname === "/") {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setIsScrolled(true); // Always apply the scrolled state for non-home pages
    }
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigateToHome = (section: string) => {
    // If not on the homepage, navigate to it first
    if (pathname !== "/") {
      router.push("/"); // Navigate to the homepage
    }
    // Scroll to the specific section (work or home) after navigation
    setTimeout(() => {
      const targetElement = document.querySelector(section);
      if (targetElement) {
        const offset = 10;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100); // Delay to ensure the page is fully loaded before scrolling
  };

  const menuVariants = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const linkVariants = {
    initial: { y: 30, opacity: 0 },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  const containerVariants = {
    initial: {
      transition: { staggerChildren: 0.09, staggerDirection: -1 },
    },
    open: {
      transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 },
    },
  };

  return (
    <nav className={`fixed w-full px-6 lg:px-32 flex justify-between items-center py-6 z-50 transition-all duration-300 ${isScrolled ? "bg-white text-black shadow-lg" : "bg-transparent text-white"}`}>
      <div className="font-Inter font-normal text-xl tracking-wide">
        <a href="#home" onClick={() => handleNavigateToHome("#home")}>
          Akbarrbni Creative
        </a>
      </div>

      <motion.button className={`lg:hidden flex flex-col justify-center items-center w-8 h-8 z-[100] focus:outline-none ${isScrolled || isOpen ? "text-black" : "text-white"}`} onClick={toggleMenu}>
        <motion.div className={`w-8 h-[2px] bg-current rounded-full transition-transform ${isOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
        <motion.div className={`w-8 h-[2px] bg-current rounded-full transition-transform ${isOpen ? "-rotate-45 -translate-y-[0px]" : "mt-[6px]"}`} />
      </motion.button>

      <div className="hidden lg:flex gap-x-8">
        {navMenu.map((menu, index) => (
          <a key={index} href={menu.url} className="text-xl transition-all ease-in-out duration-200 hover:text-slate-900 py-2 link link-underline link-underline-black " onClick={() => handleNavigateToHome(menu.url)}>
            {menu.name}
          </a>
        ))}
        <Button href="mailto:akbarrbni03@gmail.com" color="bg-black">
          Contact
        </Button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div className="fixed inset-0 bg-white text-black flex flex-col items-center justify-center z-[99]" variants={menuVariants} initial="initial" animate="animate" exit="exit" style={{ originY: 0 }}>
            <motion.ul variants={containerVariants} initial="initial" animate="open" exit="initial" className="flex flex-col items-center gap-y-4">
              {navMenu.map((menu, index) => (
                <motion.li className="" key={index} variants={linkVariants}>
                  <a
                    href={menu.url}
                    className="text-2xl transition-all ease-in-out duration-200 hover:text-slate-900 py-2 link link-underline link-underline-black"
                    onClick={() => {
                      setIsOpen(false);
                      handleNavigateToHome(menu.url);
                    }}
                  >
                    {menu.name}
                  </a>
                </motion.li>
              ))}
              <motion.li variants={linkVariants}>
                <Button href="mailto:akbarrbni03@gmail.com" color="bg-black text-white ">
                  Contact
                </Button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
