import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/okeowo-2.png"; // optional: swap in a real photo

const ABOUT_IMAGE = aboutImage; // set to `aboutImage` once you have a photo

const About = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-[#FBFAF7] relative overflow-hidden py-20 md:py-28"
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
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 lg:gap-24 items-center">
          {/* Portrait column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-md mx-auto lg:mx-0 w-full"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#D6CCBD] via-[#C9BDAC] to-[#B9AC9A]">
              {ABOUT_IMAGE ? (
                <img
                  src={ABOUT_IMAGE}
                  alt="Okeowo Temiloluwa Emmanuel at work"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none">
                  <span className="font-sora font-bold text-7xl md:text-8xl tracking-tighter text-[#6B625A]">
                    OT
                  </span>
                  <span className="font-sora mt-3 text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#8A8076] leading-relaxed">
                    Secondary portrait
                    <br />
                    or working image
                  </span>
                </div>
              )}
            </div>

            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.6,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute -bottom-5 -right-3 md:-right-8 bg-[#2A71C2] text-white rounded-xl px-5 py-4 shadow-[0_14px_30px_-12px_rgba(224,112,47,0.55)]"
            >
              <p className="font-sora text-xs md:text-sm font-semibold leading-snug">
                Based in Nigeria.
                <br />
                Working globally.
              </p>
            </motion.div>
          </motion.div>

          {/* Copy column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-2xl"
          >
            <motion.span
              variants={itemVariants}
              className="block font-sora text-[9px] uppercase tracking-[0.35em] text-[#E0702F] mb-5"
            >
              About me
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="font-sora font-bold text-[#2A71C2] leading-[1.02] tracking-tight text-4xl sm:text-5xl md:text-6xl mb-8"
            >
              Strategy first.
              <br />
              Technology second.
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="font-sora text-sm md:text-base text-[#6B625A] leading-relaxed mb-4"
            >
              I'm Okeowo Temiloluwa, a growth marketing and AI systems
              strategist with five years of experience helping businesses build
              more effective customer journeys.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="font-sora text-sm md:text-base text-[#6B625A] leading-relaxed mb-6"
            >
              After working across more than 20 industries, I've learned that
              businesses rarely need another disconnected tool or marketing
              tactic. They need a system that connects attention, follow-up,
              conversion, and retention.
            </motion.p>

            <motion.h3
              variants={itemVariants}
              className="font-sora text-lg md:text-xl font-semibold text-[#1A1613] mb-6"
            >
              That is what I build.
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="font-sora text-sm md:text-base text-[#6B625A] leading-relaxed"
            >
              I combine marketing strategy with practical execution across
              funnels, CRM platforms, automation, AI, analytics, and personal
              branding.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
