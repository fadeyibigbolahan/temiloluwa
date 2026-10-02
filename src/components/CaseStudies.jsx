import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Building2, Briefcase, Users } from "lucide-react";

/**
 * CaseStudies
 *
 * Layout follows the reference: each case is one card split into a
 * visual mockup panel and a content panel (eyebrow label, title, a
 * Challenge/Solution pair, a big stat, "View case study"). Panels
 * alternate sides and treatment (solid colour / dark / tan) the way
 * the reference examples do, for rhythm down the page.
 *
 * The source data has no revenue figures, so the "big number" slot
 * uses something true to the content instead — the step count of each
 * project's own framework — rather than inventing a dollar amount.
 * "View case study" expands the card in place to show the full
 * framework and the client / agency / role detail, since there are no
 * separate case-study pages to link to yet. Swap the onClick for a
 * real link whenever those pages exist.
 */

const CASE_STUDIES = [
  {
    title: "The Consultant Growth System",
    category: "Growth Strategy & Funnel Building",
    client: "Independent Business Consultant",
    agency: "Freelance Project",
    role: "Growth Strategist & Funnel Builder",
    description:
      "Help an independent consultant turn scattered marketing efforts into a clear acquisition and conversion system designed to consistently generate qualified conversations.",
    approach:
      "Mapped the customer journey, refined positioning, identified acquisition opportunities, designed the conversion path, and structured a measurable lead-generation funnel.",
    framework: [
      "Positioning",
      "Audience",
      "Acquisition",
      "Lead capture",
      "Conversion",
      "Measurement",
    ],
    demonstrates:
      "Growth strategy; customer journey mapping; positioning; acquisition planning; funnel strategy; conversion optimization; measurable growth systems.",
    tagline: "Attract. Qualify. Convert.",
    color: "#2a71c2",
    panel: "solid",
    side: "left",
  },

  {
    title: "The High-Ticket Funnel",
    category: "Landing Page & Sales Funnel",
    client: "Business Coaching Brand",
    agency: "Freelance Project",
    role: "Funnel Strategist & Builder",
    description:
      "Build a conversion-focused funnel that moves prospects from an initial offer to a booked strategy call with a high-ticket business coach.",
    approach:
      "Developed the funnel architecture, landing-page messaging, lead capture experience, qualification flow, booking journey, follow-up sequence, and conversion-focused CTAs.",
    framework: [
      "Traffic",
      "Landing page",
      "Lead magnet",
      "Qualification",
      "Booking",
      "Follow-up",
      "Conversion",
    ],
    demonstrates:
      "Landing-page strategy; sales funnels; offer positioning; conversion copywriting; lead qualification; booking systems; customer journeys.",
    tagline: "Capture. Qualify. Book.",
    color: "#8B5CF6",
    panel: "dark",
    side: "right",
  },

  {
    title: "The Automated Lead Engine",
    category: "CRM & AI Automation",
    client: "Growth Marketing Agency",
    agency: "Freelance Project",
    role: "CRM & Automation Specialist",
    description:
      "Connect lead capture, CRM pipelines, automated follow-ups and AI-assisted communication into one system that reduces manual sales work.",
    approach:
      "Designed the CRM pipeline, connected lead sources, automated email and SMS follow-ups, created lead-routing workflows, and introduced AI tools for faster communication and lead management.",
    framework: [
      "Lead capture",
      "CRM",
      "Pipeline",
      "Automation",
      "AI",
      "Follow-up",
      "Reporting",
    ],
    demonstrates:
      "CRM architecture; workflow automation; lead management; email and SMS automation; AI tools; pipeline design; sales operations.",
    tagline: "Capture. Automate. Scale.",
    color: "#10B981",
    panel: "tan",
    side: "left",
  },

  {
    title: "The LinkedIn Authority Engine",
    category: "LinkedIn & Personal Brand Growth",
    client: "B2B Technology Founder",
    agency: "Freelance Project",
    role: "Personal Brand & Growth Strategist",
    description:
      "Build a LinkedIn content and audience-growth system that turns the founder's expertise into visibility, authority, and qualified business opportunities.",
    approach:
      "Defined the founder's positioning, developed content pillars, structured the publishing system, created audience-growth strategies, and connected content activity to lead-generation opportunities.",
    framework: [
      "Positioning",
      "Content",
      "Audience",
      "Engagement",
      "Authority",
      "Lead generation",
    ],
    demonstrates:
      "LinkedIn strategy; personal branding; content systems; audience growth; thought leadership; authority building; organic lead generation.",
    tagline: "Create. Connect. Convert.",
    color: "#F59E0B",
    panel: "solid",
    side: "right",
  },
];

const WindowChrome = ({ tint }) => (
  <div className="flex gap-1.5 px-4 pt-4">
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className="h-2 w-2 rounded-full"
        style={{ backgroundColor: tint }}
      />
    ))}
  </div>
);

const VisualPanel = ({ caseStudy }) => {
  const { panel, color, tagline, category, framework } = caseStudy;

  if (panel === "dark") {
    return (
      <div className="relative flex h-full min-h-[280px] flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <div>
          <p
            className="font-sora text-[11px] font-medium uppercase tracking-[0.18em]"
            style={{ color }}
          >
            Framework pipeline
          </p>
          <div className="mt-5 space-y-3">
            {framework.slice(0, 3).map((step, i) => (
              <div
                key={step}
                className="flex items-center justify-between border-b border-white/10 pb-3 font-sora text-sm text-white/80"
              >
                <span>{step}</span>
                <span style={{ color }} className="font-semibold">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
        <svg viewBox="0 0 200 50" className="h-10 w-full" fill="none">
          <path
            d="M2 40 L60 40 L95 12 L200 12"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  const bg = panel === "solid" ? color : "#E9E1D3";
  const cardBg = panel === "solid" ? "#FFFFFF" : "#FFFFFF";

  return (
    <div
      className="relative flex h-full min-h-[280px] items-center justify-center rounded-2xl p-6"
      style={{ backgroundColor: bg }}
    >
      <div
        className="w-full max-w-[260px] overflow-hidden rounded-xl shadow-xl"
        style={{ backgroundColor: cardBg }}
      >
        <WindowChrome tint="#D8D8D8" />
        <div className="px-6 pb-8 pt-6">
          <p className="font-sora text-[10px] font-medium uppercase tracking-[0.18em] text-gray-400">
            {category}
          </p>
          <p className="mt-3 font-sora text-xl font-bold leading-snug text-[#1A1A1A]">
            {tagline}
          </p>
          <div
            className="mt-4 h-1 w-10 rounded-full"
            style={{ backgroundColor: color }}
          />
        </div>
      </div>
    </div>
  );
};

const CaseCard = ({ caseStudy, index }) => {
  const [open, setOpen] = useState(false);
  const reversed = caseStudy.side === "right";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm md:p-5"
    >
      <div
        className={`grid gap-4 md:grid-cols-2 md:gap-6 ${
          reversed ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <VisualPanel caseStudy={caseStudy} />

        {/* Content panel */}
        <div className="flex flex-col justify-center px-2 py-4 md:px-6">
          <p
            className="font-sora text-[11px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: caseStudy.color }}
          >
            {caseStudy.category}
          </p>
          <h3 className="mt-3 font-sora text-3xl font-bold tracking-tight text-white md:text-4xl">
            {caseStudy.title}
          </h3>

          <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
            <div className="flex items-start gap-4 py-4">
              <span className="w-20 flex-shrink-0 font-sora text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                Challenge
              </span>
              <p className="font-lora text-sm leading-relaxed text-gray-400">
                {caseStudy.description}
              </p>
            </div>
            <div className="flex items-start gap-4 py-4">
              <span className="w-20 flex-shrink-0 font-sora text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                Solution
              </span>
              <p className="font-lora text-sm leading-relaxed text-gray-400">
                {caseStudy.approach}
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-end justify-between gap-6">
            <div>
              <p className="font-sora text-4xl font-bold tracking-tight text-white">
                {caseStudy.framework.length}-step
              </p>
              <p className="mt-1 font-sora text-xs text-gray-500">
                framework built for this project
              </p>
            </div>

            <button
              onClick={() => setOpen((o) => !o)}
              className="group mb-1 inline-flex items-center gap-2 font-sora text-sm font-semibold text-white transition-colors hover:opacity-70"
            >
              {open ? "Close" : "View case study"}
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300"
                style={{ transform: open ? "rotate(135deg)" : "rotate(0deg)" }}
              />
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-8 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">
                  <div className="flex items-start gap-3">
                    <Building2 className="mt-0.5 h-4 w-4 text-gray-500" />
                    <div>
                      <p className="font-sora text-[11px] text-gray-500">
                        Client
                      </p>
                      <p className="font-sora text-sm font-medium text-white">
                        {caseStudy.client}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Briefcase className="mt-0.5 h-4 w-4 text-gray-500" />
                    <div>
                      <p className="font-sora text-[11px] text-gray-500">
                        Role
                      </p>
                      <p className="font-sora text-sm font-medium text-white">
                        {caseStudy.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="mt-0.5 h-4 w-4 text-gray-500" />
                    <div>
                      <p className="font-sora text-[11px] text-gray-500">
                        Agency
                      </p>
                      <p className="font-sora text-sm font-medium text-white">
                        {caseStudy.agency}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="mb-4 font-sora text-sm font-semibold text-white">
                    Framework
                  </p>
                  <div className="flex flex-col">
                    {caseStudy.framework.map((step, i) => (
                      <div key={step} className="flex items-stretch">
                        <div className="mr-4 flex flex-col items-center">
                          <span
                            className="mt-2.5 h-2 w-2 flex-shrink-0 rounded-full"
                            style={{ backgroundColor: caseStudy.color }}
                          />
                          {i < caseStudy.framework.length - 1 && (
                            <span className="w-px flex-1 bg-white/10" />
                          )}
                        </div>
                        <p className="pb-5 font-sora text-sm text-gray-400">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-2">
                  <p className="mb-2 font-sora text-sm font-semibold text-white">
                    What this demonstrates
                  </p>
                  <p className="font-lora text-sm leading-relaxed text-gray-400">
                    {caseStudy.demonstrates}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const CaseStudies = () => {
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
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0B0D12] py-24 md:py-32"
    >
      {/* Ambient glow, matching the Capabilities section */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[36rem] w-[36rem] rounded-full bg-[#7C5CFF]/20 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-[36rem] w-[36rem] rounded-full bg-[#00C48C]/20 blur-[140px]" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 pt-6 md:mb-20 md:pt-10"
        >
          <p className="mb-5 font-sora text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
            Deep dives
          </p>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-sora text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl">
              Case Studies
            </h2>
            <p className="max-w-md font-lora leading-relaxed text-gray-400">
              A closer look at how each project was approached, from brief to
              framework.
            </p>
          </div>
        </motion.div>

        <div className="space-y-6 md:space-y-8">
          {CASE_STUDIES.map((caseStudy, index) => (
            <CaseCard
              key={caseStudy.title}
              caseStudy={caseStudy}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
