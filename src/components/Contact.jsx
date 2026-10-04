import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const EMAIL = "work@okeowotemiloluwa.com";

const CALENDAR_EMBED_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2d_YKDaeXmO7H0dr2QnHGrVcRNTnIhySx7TSTOTDoWAw7aYBNUPCo20wp1q5Y9Qroh7MAgJ5X2?gv=true";

const Contact = () => {
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
      id="contact"
      className="min-h-screen flex items-center bg-[#161412] relative overflow-hidden py-20 md:py-28"
      aria-labelledby="contact-heading"
    >
      {/* Fine grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient orbs */}
      <div className="absolute top-1/4 right-0 w-[460px] h-[460px] bg-[#6D5AE6]/[0.12] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/5 w-[400px] h-[400px] bg-[#E0702F]/[0.10] rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-[1fr_0.95fr] gap-14 lg:gap-20 items-center">
          {/* Copy column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span
              variants={itemVariants}
              className="block font-sora text-[10px] font-medium uppercase tracking-[0.25em] text-[#E0702F] mb-6"
            >
              Start a conversation
            </motion.span>

            <motion.h2
              id="contact-heading"
              variants={itemVariants}
              className="font-sora font-bold text-white leading-[1.15] tracking-tight text-4xl sm:text-5xl md:text-6xl mb-6 max-w-xl"
            >
              Have attention but no reliable growth system?
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="font-sora text-sm md:text-base text-white/60 leading-relaxed mb-10 max-w-md"
            >
              Let's identify where opportunities are being lost and build a
              clearer path from interest to revenue.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6"
            >
              <a
                href={`mailto:${EMAIL}`}
                className="group inline-flex items-center gap-2 font-sora text-sm font-semibold text-white border-b border-white/40 pb-1 hover:border-[#E0702F] hover:text-[#E0702F] transition-colors duration-300"
              >
                Send Me an Email
                <ArrowUpRight
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </motion.div>
          </motion.div>

          {/* Calendar embed column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl border border-white/[0.08] bg-[#211F1C] p-2 md:p-3 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] overflow-hidden"
          >
            <iframe
              src={CALENDAR_EMBED_URL}
              title="Book a strategy call"
              style={{ border: 0 }}
              width="100%"
              height="600"
              frameBorder="0"
              className="w-full rounded-2xl bg-white"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
