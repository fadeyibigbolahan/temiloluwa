import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
  Home,
  User,
  Briefcase,
  FolderOpen,
  Clock,
  Mail,
} from "lucide-react";

const Navigation = ({
  activeSection,
  setActiveSection,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeIndicator, setActiveIndicator] = useState({ left: 0, width: 0 });
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Update active indicator position
    const activeButton = navRef.current?.querySelector(
      `[data-nav="${activeSection}"]`,
    );
    if (activeButton) {
      const { offsetLeft, offsetWidth } = activeButton;
      setActiveIndicator({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeSection]);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "services", label: "Services", icon: Briefcase },
    { id: "work", label: "Work", icon: FolderOpen },
    // { id: "experience", label: "Experience", icon: Clock },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <motion.button
              onClick={() => handleNavClick("home")}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl font-sora font-bold tracking-tight text-black flex items-center">
                OT
                <span className="text-[#2a71c2]">.</span>
              </span>
              {/* Animated underline */}
              <motion.span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2a71c2] to-[#FF6B8A] group-hover:w-full transition-all duration-300" />
            </motion.button>

            {/* Desktop Navigation */}
            <div
              ref={navRef}
              className="hidden md:flex items-center gap-8 relative"
            >
              {/* Active indicator */}
              <motion.div
                className="absolute -bottom-1 h-0.5 bg-gradient-to-r from-[#2a71c2] to-[#FF6B8A]"
                animate={{
                  left: activeIndicator.left,
                  width: activeIndicator.width,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />

              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                const isHovered = hoveredItem === item.id;

                return (
                  <motion.button
                    key={item.id}
                    data-nav={item.id}
                    onClick={() => handleNavClick(item.id)}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`relative text-sm font-sora font-medium transition-all duration-300 ${
                      isActive ? "text-black" : "text-gray-600 hover:text-black"
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center gap-1.5">
                      {item.label}
                      {isHovered && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-[#2a71c2]"
                        >
                          <Icon className="w-3 h-3" />
                        </motion.span>
                      )}
                    </span>
                  </motion.button>
                );
              })}

              {/* CTA Button */}
              <motion.button
                onClick={() => handleNavClick("contact")}
                className="group relative inline-flex items-center gap-2 font-sora text-sm font-semibold px-6 py-2.5 bg-black text-white rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Let's Connect</span>
                <ArrowUpRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#2a71c2] to-[#FF6B8A]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5 text-black" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5 text-black" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl"
            >
              <div className="flex flex-col h-full pt-24 pb-8 px-6">
                {/* Mobile nav items */}
                <div className="flex-1 space-y-2">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;

                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-[#2a71c2]/10 text-[#2a71c2]"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-sora text-base font-medium">
                          {item.label}
                        </span>
                        {isActive && (
                          <motion.span
                            layoutId="mobileActive"
                            className="ml-auto w-2 h-2 rounded-full bg-[#2a71c2]"
                          />
                        )}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Mobile CTA */}
                <motion.button
                  onClick={() => handleNavClick("contact")}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="w-full inline-flex items-center justify-center gap-2 font-sora text-sm font-semibold px-6 py-4 bg-gradient-to-r from-[#2a71c2] to-[#FF6B8A] text-white rounded-xl shadow-lg shadow-[#2a71c2]/25"
                >
                  Let's Connect
                  <ArrowUpRight className="w-4 h-4" />
                </motion.button>

                {/* Social proof */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 pt-6 border-t border-gray-200"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#2a71c2]" />
                    <span className="font-sora text-xs text-gray-500">
                      Marketing & Communications
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
