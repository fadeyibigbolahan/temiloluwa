import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

const EMAIL = "work@okeowotemiloluwa.com";
const CALENDAR_URL = "#"; // replace with your Calendly / Cal.com link

const fieldBase =
  "w-full bg-transparent border-0 border-b border-white/15 pb-3 pt-2 font-sora text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#E0702F] transition-colors duration-300";

const labelBase =
  "block font-sora text-[9px] uppercase tracking-[0.2em] text-white/50";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // No backend: opens the visitor's email client with the form pre-filled.
  // Swap this for a fetch() to Formspree / EmailJS / your API if you prefer.
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `New enquiry from ${form.name}${
      form.company ? ` (${form.company})` : ""
    }`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

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
              className="font-sora font-bold text-white leading-[1.02] tracking-tight text-4xl sm:text-5xl md:text-6xl mb-6 max-w-xl"
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
              <motion.a
                href={CALENDAR_URL}
                target={CALENDAR_URL.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-6 font-sora text-sm font-semibold px-6 py-3.5 rounded-full bg-white text-[#161412] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E0702F]"
              >
                Book a Strategy Call
                <ArrowUpRight
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </motion.a>

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

          {/* Form column */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl border border-white/[0.08] bg-[#211F1C] p-7 md:p-9 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]"
          >
            <div className="grid sm:grid-cols-2 gap-x-7 gap-y-7 mb-7">
              <div>
                <label htmlFor="contact-name" className={labelBase}>
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={fieldBase}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className={labelBase}>
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className={fieldBase}
                />
              </div>
            </div>

            <div className="mb-7">
              <label htmlFor="contact-company" className={labelBase}>
                Company
              </label>
              <input
                id="contact-company"
                name="company"
                type="text"
                autoComplete="organization"
                value={form.company}
                onChange={handleChange}
                placeholder="Company name"
                className={fieldBase}
              />
            </div>

            <div className="mb-8">
              <label htmlFor="contact-message" className={labelBase}>
                What do you need help with?
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me a little about your goals"
                className={`${fieldBase} resize-none`}
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              className="w-full inline-flex items-center justify-center gap-3 font-sora text-sm font-semibold py-4 rounded-full bg-[#2a71c2] text-white shadow-lg shadow-[#E0702F]/20 hover:bg-[#EA7B3A] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {sent ? "Message ready to send" : "Send Message"}
              {sent ? (
                <Check className="w-4 h-4" aria-hidden="true" />
              ) : (
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
