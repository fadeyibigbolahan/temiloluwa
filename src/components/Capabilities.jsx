import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Target,
  Filter,
  Bot,
  Users,
  Sparkles,
} from "lucide-react";

const CAPABILITIES = [
  {
    number: "01",
    title: "Growth Strategy",
    description:
      "Clear acquisition and conversion strategies built around business goals, customer behaviour, and measurable opportunities.",
    icon: Target,
    color: "#00A876",
    gradient: "from-[#00A876] to-[#34D399]",
    tags: ["Acquisition", "Conversion", "Positioning"],
  },
  {
    number: "02",
    title: "Funnels and Conversion",
    description:
      "Landing pages, sales funnels, booking systems, and customer journeys designed to turn interest into actions.",
    icon: Filter,
    color: "#6D5AE6",
    gradient: "from-[#6D5AE6] to-[#A78BFA]",
    tags: ["Landing Pages", "Sales Funnels", "Booking"],
  },
  {
    number: "03",
    title: "CRM and AI Automation",
    description:
      "Lead capture, pipelines, email, SMS, follow-ups, and AI tools connected into one reliable operating system.",
    icon: Bot,
    color: "#E5731F",
    gradient: "from-[#E5731F] to-[#FBBF24]",
    tags: ["CRM", "Automation", "AI Tools"],
  },
  {
    number: "04",
    title: "LinkedIn and Personal Brand Growth",
    description:
      "Content and audience-growth systems that turn expertise into visibility, trust, and qualified opportunities.",
    icon: Users,
    color: "#0B0D12",
    gradient: "from-[#0B0D12] to-[#4B5563]",
    tags: ["Content", "Audience", "Authority"],
  },
];

const Capabilities = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
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
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-16 md:py-24 bg-[#FBFAF7] relative overflow-hidden"
      aria-labelledby="capabilities-heading"
    >
      {/* Fine grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#6D5AE6 1px, transparent 1px), linear-gradient(90deg, #6D5AE6 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient orbs */}
      <div className="absolute top-1/4 right-0 w-[460px] h-[460px] bg-[#6D5AE6]/[0.07] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/5 w-[400px] h-[400px] bg-[#00A876]/[0.07] rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gradient-to-r from-[#6D5AE6] to-transparent" />
            <span className="font-sora text-xs font-semibold text-gray-500 uppercase tracking-[0.25em]">
              Capabilities
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2
              id="capabilities-heading"
              className="font-sora text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-[#0B0D12] leading-[1.05] tracking-tight max-w-2xl"
            >
              How I help businesses{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D5AE6] to-[#00A876]">
                grow.
              </span>
            </h2>

            <p className="font-lora text-base md:text-lg text-gray-500 max-w-md leading-relaxed lg:pb-2">
              From strategy to implementation, every piece is designed to work
              as part of a measurable system.
            </p>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-5 md:gap-6"
        >
          {CAPABILITIES.map((capability) => {
            const Icon = capability.icon;
            const isActive = activeCard === capability.number;

            return (
              <motion.div
                key={capability.number}
                variants={itemVariants}
                onMouseEnter={() => setActiveCard(capability.number)}
                onMouseLeave={() => setActiveCard(null)}
                className="group relative cursor-default"
              >
                <div
                  className={`relative bg-white rounded-2xl border transition-all duration-500 overflow-hidden
                    ${
                      isActive
                        ? "border-transparent shadow-[0_24px_50px_-24px_rgba(11,13,18,0.25)]"
                        : "border-black/[0.06] shadow-[0_4px_20px_-12px_rgba(11,13,18,0.1)]"
                    }`}
                >
                  {/* Gradient wash on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-[0.035] transition-opacity duration-500`}
                  />

                  {/* Top accent bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 bg-gradient-to-r ${capability.gradient} transition-all duration-500`}
                    style={{
                      opacity: isActive ? 1 : 0,
                      height: isActive ? "3px" : "0px",
                    }}
                  />

                  <div className="relative p-7 md:p-9">
                    {/* Top row */}
                    <div className="flex items-start justify-between mb-7">
                      <div className="flex items-center gap-4">
                        <div
                          className="relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-500"
                          style={{
                            backgroundColor: `${capability.color}12`,
                            transform: isActive
                              ? "scale(1.08) rotate(-4deg)"
                              : "scale(1) rotate(0deg)",
                          }}
                        >
                          <Icon
                            className="w-5 h-5 transition-colors duration-500"
                            style={{ color: capability.color }}
                            aria-hidden="true"
                          />
                        </div>

                        <span
                          className="font-sora text-4xl md:text-5xl font-bold tracking-tight leading-none transition-colors duration-500"
                          style={{
                            color: isActive ? capability.color : "#E5E5E0",
                          }}
                        >
                          {capability.number}
                        </span>
                      </div>

                      <div className="relative w-10 h-10 flex items-center justify-center">
                        <div
                          className={`absolute inset-0 rounded-full border transition-all duration-500 ${
                            isActive
                              ? "border-[#0B0D12]/30 scale-110"
                              : "border-black/[0.08]"
                          }`}
                        />
                        <ArrowUpRight
                          className={`w-4 h-4 transition-all duration-500 ${
                            isActive
                              ? "text-[#0B0D12] rotate-45"
                              : "text-gray-300 rotate-0"
                          }`}
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-sora text-xl md:text-2xl font-semibold text-[#0B0D12] mb-3 tracking-tight">
                      {capability.title}
                    </h3>

                    {/* Description */}
                    <p className="font-lora text-sm md:text-base text-gray-500 leading-relaxed mb-7">
                      {capability.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {capability.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3.5 py-1.5 rounded-full font-sora text-[11px] tracking-wide transition-all duration-500 ${
                            isActive
                              ? "bg-[#0B0D12] text-white"
                              : "bg-black/[0.04] text-gray-500 group-hover:bg-black/[0.06]"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-14 md:mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
        >
          <p className="font-lora text-gray-400 italic text-sm md:text-base">
            Ready to build a system that actually compounds?
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 font-sora text-sm font-semibold text-[#0B0D12] hover:text-[#6D5AE6] transition-colors"
          >
            <span className="relative">
              Discuss your project
              <span className="absolute bottom-0 left-0 w-full h-px bg-black/20 group-hover:bg-[#6D5AE6] transition-colors" />
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

export default Capabilities;
