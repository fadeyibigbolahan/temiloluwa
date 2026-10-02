import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Layers, Globe, Clock } from "lucide-react";
import ghl from "../assets/ghl.png";
import hubspot from "../assets/hubspot.png";
import n8n from "../assets/n8n.png";
import clickfunnels from "../assets/clickfunnels.png";
import wordpress from "../assets/wordpress.png";
import meta from "../assets/meta.png";

const STATS = [
  {
    id: "funnels",
    value: 200,
    suffix: "+",
    label: "Funnels built",
    icon: TrendingUp,
    accent: "#00E5A0",
  },
  {
    id: "projects",
    value: 90,
    suffix: "+",
    label: "Client projects",
    icon: Layers,
    accent: "#A78BFA",
  },
  {
    id: "industries",
    value: 20,
    suffix: "+",
    label: "Industries served",
    icon: Globe,
    accent: "#FFA84D",
  },
  {
    id: "years",
    value: 5,
    suffix: " yrs",
    label: "Of experience",
    icon: Clock,
    accent: "#FFFFFF",
  },
];

const TOOLS = [
  { id: "ghl", name: "GoHighLevel", logo: ghl },
  { id: "hubspot", name: "HubSpot", logo: hubspot },
  { id: "n8n", name: "n8n", logo: n8n },
  { id: "clickfunnels", name: "ClickFunnels", logo: clickfunnels },
  { id: "wordpress", name: "WordPress", logo: wordpress },
  { id: "meta", name: "Meta", logo: meta },
];

// Simple count-up hook
const useCountUp = (target, duration = 1600, start = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let frame;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, start]);

  return count;
};

const StatItem = ({ stat, index, inView }) => {
  const count = useCountUp(stat.value, 1600 + index * 100, inView);
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: 0.15 + index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      <div className="flex items-center gap-2 mb-3">
        <span
          className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/[0.08] bg-white/[0.03] group-hover:scale-110 transition-transform duration-300"
          style={{ color: stat.accent }}
        >
          <Icon className="w-4 h-4" aria-hidden="true" />
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-white/[0.12] to-transparent" />
      </div>

      <div className="font-sora text-4xl md:text-5xl font-bold text-white tracking-tight tabular-nums">
        {count}
        <span
          className="text-transparent bg-clip-text"
          style={{
            backgroundImage: `linear-gradient(90deg, ${stat.accent}, ${stat.accent}99)`,
          }}
        >
          {stat.suffix}
        </span>
      </div>
      <div className="font-sora text-xs md:text-sm text-white/50 mt-1 tracking-wide">
        {stat.label}
      </div>
    </motion.div>
  );
};

const ProofSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="proof"
      ref={sectionRef}
      className="relative bg-[#0B0D12] py-14 md:py-20 overflow-hidden"
    >
      {/* Fine grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#7C6BFF 1px, transparent 1px), linear-gradient(90deg, #7C6BFF 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0B0D12_78%)] pointer-events-none" />

      {/* Ambient orbs */}
      <div className="absolute top-1/3 left-1/4 w-[420px] h-[420px] bg-[#7C6BFF]/[0.12] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[380px] h-[380px] bg-[#00E5A0]/[0.08] rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header — eyebrow above title, subtitle on the right */}
        <div className="mb-16 md:mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12">
            {/* Left: eyebrow + title stacked */}
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="h-px w-10 bg-gradient-to-r from-[#7C6BFF] to-transparent" />
                <span className="font-sora text-xs font-semibold text-white/50 uppercase tracking-[0.25em]">
                  Proof, not promises
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-sora font-bold text-white leading-[1.05] tracking-tight text-3xl md:text-5xl lg:text-5xl"
              >
                Building systems that create{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C6BFF] via-[#A78BFA] to-[#00E5A0]">
                    measurable growth.
                  </span>
                  <motion.svg
                    className="absolute -bottom-1.5 left-0 w-full"
                    viewBox="0 0 240 8"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={inView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1, delay: 0.7 }}
                  >
                    <motion.path
                      d="M1 6.5C60 2 180 2 239 6.5"
                      stroke="#7C6BFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      opacity="0.6"
                    />
                  </motion.svg>
                </span>
              </motion.h2>
            </div>

            {/* Right: subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-lora text-base md:text-lg text-white/50 leading-relaxed max-w-md lg:pb-2"
            >
              My work goes beyond completing marketing tasks. I build connected
              systems that help businesses attract the right audience, convert
              opportunities, and follow up consistently.
            </motion.p>
          </div>
        </div>

        {/* Stat band */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-20 md:mb-24 p-8 md:p-10 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] shadow-[0_20px_50px_-30px_rgba(0,0,0,0.6)]"
        >
          {STATS.map((stat, i) => (
            <StatItem key={stat.id} stat={stat} index={i} inView={inView} />
          ))}
        </motion.div>

        {/* Tools strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="font-sora text-[10px] text-white/40 uppercase tracking-[0.25em]">
              Tools I build with
            </span>
            <span className="h-px flex-1 bg-white/[0.08]" />
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-8 md:gap-x-8 items-center">
            {TOOLS.map((tool, i) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.7 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex items-center justify-center"
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  title={tool.name}
                  loading="lazy"
                  className="h-7 md:h-8 w-auto max-w-[120px] object-contain opacity-40 grayscale invert group-hover:opacity-100 group-hover:grayscale-0 group-hover:invert-0 transition-all duration-500"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProofSection;
