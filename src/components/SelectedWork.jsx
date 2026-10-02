import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  FolderOpen,
  Sparkles,
  ExternalLink,
} from "lucide-react";

const SelectedWork = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const projects = [
    {
      title: "Campaign 100",
      subtitle: "Campaign Messaging & Content Strategy",
      category: "Strategy",
      year: "2024",
      gradient: "from-[#2a71c2] to-[#000000]",
      link: "https://drive.google.com/drive/folders/1S0w4ZqBovcHnEE3wUKWU8GROyzNNaBiN",
    },
    {
      title: "LAA & TravelDen",
      subtitle: "Marketing & Content Strategy",
      category: "Marketing",
      year: "2024",
      gradient: "from-[#8B5CF6] to-[#A78BFA]",
      link: "https://drive.google.com/drive/folders/1y3eXeWf1qoRwZd1H8qaRF-VXUSri-4Ut?usp=drive_link",
    },
    {
      title: "EB2-NIW Workshop Funnel",
      subtitle: "Landing Page & Conversion Copywriting",
      category: "Copywriting",
      year: "2023",
      gradient: "from-[#10B981] to-[#34D399]",
      link: "https://drive.google.com/drive/folders/1FwcQs854jPCF2yMlsNnbhFe1q9rClwkp?usp=drive_link",
    },
    {
      title: "Content Writing SOP",
      subtitle: "Content Operations & Process Development",
      category: "Operations",
      year: "2023",
      gradient: "from-[#F59E0B] to-[#FBBF24]",
      link: "https://drive.google.com/drive/folders/1a_08duAAQ7OttnEp_g0pC_ZIUc0wCC0m?usp=drive_link",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="work"
      ref={sectionRef}
      className="py-24 md:py-36 bg-[#FAFAF7] relative overflow-hidden"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-40 left-1/4 w-64 h-64 bg-[#2a71c2]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="relative">
              <Sparkles className="w-5 h-5 text-[#2a71c2]" />
              <div className="absolute inset-0 bg-[#2a71c2] blur-lg opacity-50" />
            </div>
            <span className="font-sora text-xs font-medium text-[#1A1A1A]/40 uppercase tracking-[0.2em]">
              Portfolio
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="font-sora text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] leading-[0.95] tracking-tight">
                Selected
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A1A1A] to-[#1A1A1A]/40">
                  Work
                </span>
              </h2>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right">
                <div className="font-sora text-4xl md:text-5xl font-bold text-[#1A1A1A]">
                  {String(projects.length).padStart(2, "0")}
                </div>
                <div className="font-sora text-xs text-[#1A1A1A]/40 uppercase tracking-wider">
                  Projects
                </div>
              </div>
              <div className="w-px h-12 bg-[#1A1A1A]/10" />
              <p className="font-lora text-[#1A1A1A]/60 max-w-xs leading-relaxed">
                A curated selection of strategic work that drives meaningful
                results.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Projects List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="border-t border-[#1A1A1A]/10"
        >
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative border-b border-[#1A1A1A]/10 cursor-pointer block"
            >
              {/* Hover fill effect */}
              <div className="absolute inset-0 bg-[#1A1A1A] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]" />

              {/* Gradient accent line */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative grid md:grid-cols-[1.2fr_1fr_auto_auto] items-center gap-4 md:gap-8 py-8 md:py-12 px-2 md:px-6">
                {/* Title */}
                <div className="flex items-center gap-4">
                  <span className="font-sora text-xs text-[#1A1A1A]/30 group-hover:text-[#FAFAF7]/30 transition-colors duration-500 hidden md:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-lora text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] group-hover:text-[#FAFAF7] transition-colors duration-500 font-medium tracking-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Subtitle */}
                <p className="font-sora text-sm md:text-base text-[#1A1A1A]/50 group-hover:text-[#FAFAF7]/70 transition-colors duration-500">
                  {project.subtitle}
                </p>

                {/* Category & Year */}
                <div className="hidden lg:flex flex-col items-end gap-1">
                  <span className="font-sora text-xs text-[#1A1A1A]/40 group-hover:text-[#FAFAF7]/50 transition-colors duration-500">
                    {project.category}
                  </span>
                  <span className="font-sora text-xs text-[#1A1A1A]/30 group-hover:text-[#FAFAF7]/40 transition-colors duration-500">
                    {project.year}
                  </span>
                </div>

                {/* Arrow icon */}
                <div className="relative w-12 h-12 flex items-center justify-center justify-self-end">
                  <div className="absolute inset-0 rounded-full border border-[#1A1A1A]/20 group-hover:border-[#FAFAF7]/30 group-hover:scale-110 transition-all duration-500" />
                  <ArrowUpRight
                    className="w-5 h-5 text-[#1A1A1A]/40 group-hover:text-[#FAFAF7] group-hover:rotate-45 transition-all duration-500"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              {/* Mobile category display */}
              <div className="relative lg:hidden px-2 md:px-6 pb-4">
                <div className="flex gap-3">
                  <span className="font-sora text-xs text-[#1A1A1A]/40 group-hover:text-[#FAFAF7]/50 transition-colors">
                    {project.category}
                  </span>
                  <span className="font-sora text-xs text-[#1A1A1A]/30 group-hover:text-[#FAFAF7]/40 transition-colors">
                    {project.year}
                  </span>
                  <span className="font-sora text-xs text-[#1A1A1A]/30 group-hover:text-[#FAFAF7]/40 transition-colors flex items-center gap-1">
                    <ExternalLink className="w-3 h-3" />
                    View
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 flex items-center justify-between"
        >
          <p className="font-lora text-[#1A1A1A]/50 italic">
            Want to see more?
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 font-sora text-sm font-medium text-[#1A1A1A] hover:text-[#2a71c2] transition-colors"
          >
            <span className="relative">
              View full portfolio
              <span className="absolute bottom-0 left-0 w-full h-px bg-[#1A1A1A]/30 group-hover:bg-[#2a71c2] transition-colors" />
            </span>
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SelectedWork;
