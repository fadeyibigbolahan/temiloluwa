import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Briefcase,
  MapPin,
  Calendar,
  ArrowUpRight,
  Building2,
  ChevronRight,
  Circle,
} from "lucide-react";

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const experiences = [
    {
      title: "Brand, Marketing & Corporate Communications Executive",
      company: "Finchglow Holdings",
      location: "Lagos, Nigeria",
      period: "2025 — Present",
      current: true,
      color: "#2a71c2",
      gradient: "from-[#2a71c2] to-[#000000]",
      highlights: [
        "Develop and execute integrated marketing and brand communication initiatives",
        "Develop SEO-optimized content for websites, blogs, email newsletters",
        "Create audience-focused communication materials",
        "Collaborate with designers, videographers and digital marketing professionals",
        "Manage content calendars and coordinate content production",
        "Monitor industry trends, audience behaviour and competitor activity",
      ],
    },
    {
      title: "Content Writing & Creation / Social Media Manager",
      company: "Salvo Agency",
      location: "Oyo State, Nigeria",
      period: "2024 — 2025",
      color: "#8B5CF6",
      gradient: "from-[#8B5CF6] to-[#A78BFA]",
      highlights: [
        "Developed and edited content for clients across digital platforms",
        "Created advertising and promotional copy",
        "Managed social media platforms including Instagram, TikTok, LinkedIn and Facebook",
        "Developed social media content strategies",
        "Conducted competitor research",
        "Conducted keyword research and applied SEO principles",
      ],
    },
    {
      title: "Copy/Content Writer & Podcaster",
      company: "The Job Embassy",
      location: "Lagos, Nigeria",
      period: "2018 — 2020",
      color: "#10B981",
      gradient: "from-[#10B981] to-[#34D399]",
      highlights: [
        "Researched and developed written content for digital and media projects",
        "Created and edited content in line with project requirements",
        "Researched, fact-checked and developed scripts",
        "Created advertising copy and promotional messages",
        "Developed podcast content including interviews and competitions",
      ],
    },
    {
      title: "Content Editor / Script Writer",
      company: "Africa Independent Television (AIT)",
      location: "Lagos, Nigeria",
      period: "2017 — 2018",
      color: "#F59E0B",
      gradient: "from-[#F59E0B] to-[#FBBF24]",
      highlights: [
        "Researched assigned topics and developed content for television programming",
        "Wrote, edited and proofread scripts",
        "Developed original content across different media formats",
        "Repurposed and adapted content for different communication requirements",
        "Provided editorial and writing support",
      ],
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
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
      id="experience"
      ref={sectionRef}
      className="py-24 md:py-36 bg-[#0A0A0B] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#2a71c2]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 md:mb-28"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="relative">
              <Sparkles className="w-5 h-5 text-[#2a71c2]" />
              <div className="absolute inset-0 bg-[#2a71c2] blur-lg opacity-50" />
            </div>
            <span className="font-sora text-xs font-medium text-white/40 uppercase tracking-[0.2em]">
              Career Journey
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="font-sora text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tight">
              Experience
            </h2>
            <p className="font-lora text-white/60 max-w-sm leading-relaxed">
              A timeline of professional growth across content, marketing, and
              communications.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="relative"
        >
          {experiences.map((experience, index) => {
            const isActive = activeExperience === index;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseEnter={() => setActiveExperience(index)}
                onMouseLeave={() => setActiveExperience(null)}
                className="relative"
              >
                {/* Hover background */}
                <div
                  className={`absolute -inset-4 rounded-2xl transition-all duration-500 ${
                    isActive
                      ? "bg-white/[0.02] backdrop-blur-sm"
                      : "bg-transparent"
                  }`}
                />

                <div className="relative grid md:grid-cols-[140px,28px,1fr] gap-x-0 gap-y-3">
                  {/* Period column */}
                  <div className="pt-1 pb-10 md:pb-14">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-white/30" />
                      <span className="font-sora text-xs md:text-sm text-white/40">
                        {experience.period}
                      </span>
                    </div>
                    {experience.current && (
                      <span
                        className="inline-block mt-2 px-2 py-0.5 rounded-full text-[10px] font-sora font-medium"
                        style={{
                          backgroundColor: `${experience.color}20`,
                          color: experience.color,
                        }}
                      >
                        Current
                      </span>
                    )}
                  </div>

                  {/* Spine + node */}
                  <div className="hidden md:flex flex-col items-center">
                    <motion.span
                      className="w-3 h-3 rounded-full border-2 shrink-0 mt-1.5 transition-all duration-500"
                      style={{
                        backgroundColor: isActive
                          ? experience.color
                          : "transparent",
                        borderColor: isActive
                          ? experience.color
                          : "rgba(255,255,255,0.3)",
                        boxShadow: isActive
                          ? `0 0 20px ${experience.color}`
                          : "none",
                      }}
                      animate={isActive ? { scale: 1.3 } : { scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    {index < experiences.length - 1 && (
                      <div className="relative w-px flex-1 bg-white/10 overflow-hidden">
                        <motion.div
                          className="absolute top-0 left-0 w-full bg-gradient-to-b"
                          style={{
                            backgroundImage: `linear-gradient(to bottom, ${experience.color}, transparent)`,
                          }}
                          initial={{ height: "0%" }}
                          animate={{ height: isActive ? "100%" : "0%" }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-10 md:pb-14 md:-mt-0.5 group">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-lora text-xl md:text-2xl text-white leading-snug transition-colors duration-500">
                          {experience.title}
                        </h3>

                        <div className="flex flex-wrap items-center gap-4 mt-3 mb-6">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-3.5 h-3.5 text-white/40" />
                            <span className="font-sora text-sm text-white/60">
                              {experience.company}
                            </span>
                          </div>
                          <div className="w-px h-4 bg-white/20" />
                          <div className="flex items-center gap-2">
                            <MapPin className="w-3.5 h-3.5 text-white/40" />
                            <span className="font-sora text-sm text-white/60">
                              {experience.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Arrow indicator */}
                      <ArrowUpRight
                        className={`w-5 h-5 transition-all duration-500 shrink-0 ${
                          isActive
                            ? "text-white opacity-100 rotate-45"
                            : "text-white/30 opacity-0 -translate-x-2 translate-y-2"
                        }`}
                        aria-hidden="true"
                      />
                    </div>

                    <ul className="space-y-3">
                      {experience.highlights.map((highlight, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isVisible ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            delay: 0.5 + index * 0.2 + idx * 0.05,
                            duration: 0.4,
                          }}
                          className="font-lora text-white/70 leading-relaxed flex gap-3 max-w-prose group/highlight"
                        >
                          <span
                            className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover/highlight:scale-150"
                            style={{ backgroundColor: `${experience.color}80` }}
                          />
                          <span className="transition-colors duration-300 group-hover/highlight:text-white">
                            {highlight}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Mobile timeline connector */}
                    {index < experiences.length - 1 && (
                      <div className="md:hidden mt-8 mb-4">
                        <div className="w-px h-8 bg-white/10 ml-1.5" />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 flex items-center gap-3"
        >
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
          <span className="font-sora text-xs text-white/40 uppercase tracking-wider">
            And counting...
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
