import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Instagram,
  Linkedin,
  Github,
  Cpu,
  TrendingUp,
  Workflow,
} from "lucide-react";
import freelancer from "../assets/okeowo.png";

const SYSTEM_PILLARS = [
  { id: "funnels", label: "Funnels", icon: TrendingUp, accent: "#00A876" },
  { id: "automation", label: "Automation", icon: Cpu, accent: "#6D5AE6" },
  { id: "content", label: "Content", icon: Workflow, accent: "#E5731F" },
];

const Hero = ({ setActiveSection }) => {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const goTo = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const socialLinks = [
    {
      id: "linkedin",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/funnelupscale/",
    },
    {
      id: "instagram",
      icon: Instagram,
      href: "https://www.instagram.com/funnel_upscale/",
    },
    { id: "email", icon: Mail, href: "mailto:work@okeowotemiloluwa.com" },
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center bg-[#FBFAF7] relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20"
    >
      {/* Fine grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#6D5AE6 1px, transparent 1px), linear-gradient(90deg, #6D5AE6 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Soft paper vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#FBFAF7_78%)] pointer-events-none" />

      {/* Ambient color orbs */}
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-[#6D5AE6]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/5 w-[400px] h-[400px] bg-[#00A876]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Mouse spotlight */}
      <motion.div
        className="absolute w-[420px] h-[420px] rounded-full pointer-events-none hidden lg:block"
        animate={{
          x: mousePosition.x - 210,
          y: mousePosition.y - 210,
          opacity: mounted ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 40, damping: 22 }}
        style={{
          background:
            "radial-gradient(circle, rgba(109,90,230,0.08), transparent 65%)",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20 items-center">
          {/* Copy column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
          >
            {/* Availability pill */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-black/[0.06] bg-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.08)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00A876] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00A876]" />
              </span>
              <span className="font-sora text-[10px] md:text-xs font-medium text-gray-500 uppercase tracking-[0.2em]">
                Available for selected projects
              </span>
            </motion.div>

            {/* Name eyebrow */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mb-4"
            >
              <span className="font-sora text-xs md:text-sm text-gray-400 uppercase tracking-[0.25em]">
                I'm
              </span>
              <span className="h-px w-8 bg-gradient-to-r from-[#6D5AE6] to-transparent" />
              <span className="font-sora text-sm md:text-base font-semibold text-[#0B0D12] tracking-tight">
                Okeowo Temiloluwa Emmanuel
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              variants={itemVariants}
              className="font-sora font-bold text-[#0B0D12] leading-[1.02] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-6xl mb-6"
            >
              I build growth and{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D5AE6] via-[#8B7BF0] to-[#00A876]">
                  AI systems
                </span>
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 240 8"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: mounted ? 1 : 0 }}
                  transition={{ duration: 1, delay: 1.1 }}
                >
                  <motion.path
                    d="M1 6.5C60 2 180 2 239 6.5"
                    stroke="#6D5AE6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                </motion.svg>
              </span>{" "}
              that turn attention into revenue.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="font-lora text-base md:text-lg lg:text-xl text-gray-500 leading-relaxed mb-10 max-w-xl"
            >
              I help founders and growing businesses connect their funnels, CRM,
              automation, campaigns, and content into one measurable customer
              journey.
            </motion.p>

            {/* Pillars row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 mb-10"
            >
              {SYSTEM_PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.id}
                    className="group flex items-center gap-2.5 px-3.5 py-2 rounded-lg border border-black/[0.06] bg-white shadow-[0_1px_4px_-2px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_14px_-6px_rgba(109,90,230,0.3)] hover:border-[#6D5AE6]/30 transition-all duration-300"
                  >
                    <Icon
                      className="w-4 h-4"
                      style={{ color: pillar.accent }}
                      aria-hidden="true"
                    />
                    <span className="font-sora text-xs md:text-sm text-gray-600 group-hover:text-[#0B0D12] transition-colors">
                      {pillar.label}
                    </span>
                  </div>
                );
              })}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <motion.button
                onClick={() => goTo("work")}
                className="group relative inline-flex items-center gap-3 font-sora text-sm font-semibold px-7 py-4 rounded-xl bg-gradient-to-r from-[#6D5AE6] to-[#5B4FD6] text-white overflow-hidden shadow-lg shadow-[#6D5AE6]/25"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">View My Work</span>
                <ArrowRight
                  className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#00A876] to-[#00B37E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              <motion.button
                onClick={() => goTo("contact")}
                className="group inline-flex items-center gap-3 font-sora text-sm font-semibold px-7 py-4 rounded-xl border border-black/15 text-[#0B0D12] hover:border-[#6D5AE6]/40 hover:bg-[#6D5AE6]/[0.04] transition-all duration-300"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Let's Talk
                <ArrowUpRight
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden="true"
                />
              </motion.button>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              <span className="font-sora text-[10px] text-gray-400 uppercase tracking-[0.2em]">
                Connect
              </span>
              <div className="w-8 h-px bg-black/10" />
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.id}
                      href={social.href}
                      target={
                        social.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        social.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="p-2.5 rounded-lg border border-black/[0.08] bg-white hover:border-[#6D5AE6]/40 hover:bg-[#6D5AE6]/[0.06] transition-all duration-300 group shadow-[0_1px_3px_-2px_rgba(0,0,0,0.05)]"
                    >
                      <Icon
                        className="w-4 h-4 text-gray-400 group-hover:text-[#6D5AE6] transition-colors"
                        aria-hidden="true"
                      />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Visual column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={mounted ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.9,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto lg:mx-0 lg:ml-auto">
              {/* Orbiting glow ring */}
              <motion.div
                className="absolute -inset-8 rounded-full bg-gradient-to-r from-[#6D5AE6]/15 to-[#00A876]/15 blur-2xl"
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Corner brackets (system/blueprint style) */}
              <div className="absolute -inset-5 pointer-events-none">
                <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#6D5AE6]/50 rounded-tl-lg" />
                <span className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#6D5AE6]/50 rounded-tr-lg" />
                <span className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00A876]/50 rounded-bl-lg" />
                <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00A876]/50 rounded-br-lg" />
              </div>

              {/* Image container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-black/[0.06] shadow-[0_30px_60px_-30px_rgba(11,13,18,0.25)]">
                <img
                  src={freelancer}
                  alt="Okeowo Temiloluwa Emmanuel - Growth and AI systems specialist"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D12]/25 via-transparent to-transparent" />

                {/* Scanline accent */}
                <motion.div
                  className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A876] to-transparent"
                  initial={{ top: "0%" }}
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ opacity: 0.6 }}
                />
              </div>

              {/* Floating stat card — 5 years */}
              <motion.div
                className="absolute -top-6 -right-4 md:-right-8 bg-white/95 backdrop-blur-md border border-black/[0.06] rounded-xl p-4 shadow-[0_12px_30px_-12px_rgba(11,13,18,0.2)]"
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={
                  mounted ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0 }
                }
                transition={{ delay: 1.1, duration: 0.5, type: "spring" }}
              >
                <div className="font-sora text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6D5AE6] to-[#00A876]">
                  5 yrs
                </div>
                <div className="font-sora text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">
                  building growth systems
                </div>
              </motion.div>

              {/* Floating philosophy card */}
              <motion.div
                className="absolute -bottom-6 -left-4 md:-left-10 bg-white/95 backdrop-blur-md border border-black/[0.06] rounded-xl p-5 shadow-[0_12px_30px_-12px_rgba(11,13,18,0.2)] max-w-[220px]"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={
                  mounted ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0 }
                }
                transition={{ delay: 1.35, duration: 0.5, type: "spring" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A876]" />
                  <span className="font-sora text-[10px] text-gray-400 uppercase tracking-wider">
                    Principle
                  </span>
                </div>
                <p className="font-lora italic text-sm text-gray-700 leading-snug">
                  Strategy before tools.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
