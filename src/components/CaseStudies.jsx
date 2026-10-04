import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Briefcase,
  Layers,
  BarChart3,
} from "lucide-react";

import item1 from "../assets/item1.jpeg";
import item2 from "../assets/item2.jpeg";
import item3 from "../assets/item3.jpeg";
import item4 from "../assets/item4.jpeg";

const CASE_STUDIES = [
  {
    id: "boss-lady",
    category: "Sales Funnels & Marketing Automation",
    title: "Boss Lady Property Management: A Connected Sales System",
    client: "Boss Lady Property Management",
    role: "Sales Funnel Builder & Automation Specialist",
    platform: "GoHighLevel",
    description:
      "Connect the customer journey across the Property Management Academy's offers and create an automated process for following up with prospects.",
    approach:
      "Built the sales funnels in GoHighLevel, connected the customer journey, and implemented automated follow-up to guide prospects toward the next step.",
    framework: [
      "Customer journey mapping",
      "Funnel build",
      "Offer connections",
      "Automated follow-up",
      "Performance tracking",
    ],
    demonstrates:
      "My ability to connect sales funnels and follow-up automation into a customer journey that supports measurable sales.",
    result: {
      value: "$176,000",
      label:
        "Recorded funnel sales across 650 orders between July 21 and December 15, 2025.",
    },
    color: "#2a71c2",
    panel: "solid",
    side: "left",
    image: item1,
  },

  {
    id: "spaulding-decon",
    category: "Membership & Online Course Development",
    title: "Spaulding Decon Industries: Thinkific Membership Build",
    client: "Spaulding Decon Industries",
    role: "Thinkific Membership Developer",
    platform: "Thinkific",
    description:
      "Create a dedicated membership platform for delivering the company's training online.",
    approach:
      "Built the membership in Thinkific, creating a central platform for learners to access the training.",
    framework: [
      "Platform setup",
      "Course structure",
      "Member access",
      "Paid enrollment",
      "Reporting",
    ],
    demonstrates:
      "My ability to build membership platforms that support online training delivery and paid enrollment.",
    result: {
      value: "$137,347",
      label:
        "In recorded revenue, with 1,544 new accounts and 1,206 enrollments (Sep 9, 2019 – Jan 27, 2025).",
    },
    color: "#8B5CF6",
    panel: "dark",
    side: "right",
    image: item2,
  },

  {
    id: "launchtik",
    category: "Webinar Funnels & AI Automation",
    title: "Automated Webinar System",
    client: "LaunchTik",
    role: "Webinar Funnel & AI Automation Specialist",
    platform: "GoHighLevel & Figma",
    description:
      "Create a connected webinar journey that guides prospects from registration to the offer, with automated follow-up.",
    approach:
      "Mapped the customer journey, designed the funnel wireframe in Figma, and built the webinar funnel in GoHighLevel. Connected the automations and implemented an AI-powered follow-up system to support the sales process.",
    framework: [
      "Customer Journey Mapping",
      "Figma Wireframe",
      "Webinar Funnel Build",
      "Workflow Automation",
      "AI-Powered Follow-Up",
    ],
    demonstrates:
      "My ability to connect funnel strategy, design, automation, and AI follow-up into a complete webinar sales system.",
    result: {
      value: "£81,395",
      label: "Recorded across 40 received invoices.",
    },
    color: "#10B981",
    panel: "tan",
    side: "left",
    image: item3,
  },

  {
    id: "patrick",
    category: "LinkedIn Content & AI Automation",
    title: "LinkedIn Content Growth System",
    client: "Patrick — Visibility & Positioning Coach",
    role: "Content Systems & AI Automation Strategist",
    platform: "Content Automation & Personal Brand Growth",
    description:
      "Create a consistent content system that preserves Patrick's brand voice while supporting his visibility across social platforms.",
    approach:
      "Built an automated growth engine with AI workflows that generate written content in Patrick's brand tone, create video scripts in his voice, and produce images for his social platforms.",
    framework: [
      "Brand Voice",
      "AI Content Generation",
      "AI Script Writing",
      "Automated Image Creation",
      "Content Delivery",
    ],
    demonstrates:
      "My ability to build AI content systems that maintain a client's voice across posts, video scripts, and social images.",
    result: {
      value: "725,855",
      label:
        "Impressions recorded over 90 days — with 10,950 engagements, 78 posts, and 37,899 total followers.",
    },
    color: "#F59E0B",
    panel: "solid",
    side: "right",
    image: item4,
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
  const { panel, color, image, title } = caseStudy;

  // Panel padding reduced so image fills nearly the entire panel.
  const baseWrap =
    "relative flex h-full min-h-[320px] md:min-h-[420px] lg:min-h-[480px] items-center justify-center overflow-hidden rounded-2xl";

  if (panel === "dark") {
    return (
      <div
        className={`${baseWrap} border border-white/10 bg-white/[0.03] p-3 md:p-4`}
      >
        <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/10 shadow-2xl">
          <WindowChrome tint="#4B4B4B" />
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-[calc(100%-2rem)] w-full object-cover object-top"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${color}22, transparent 70%)`,
          }}
        />
      </div>
    );
  }

  if (panel === "tan") {
    return (
      <div
        className={`${baseWrap} p-3 md:p-4`}
        style={{ backgroundColor: "#E9E1D3" }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-xl border border-black/10 shadow-xl">
          <WindowChrome tint="#D8D8D8" />
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-[calc(100%-2rem)] w-full object-cover object-top"
          />
        </div>
      </div>
    );
  }

  // solid
  return (
    <div
      className={`${baseWrap} p-3 md:p-4`}
      style={{ backgroundColor: color }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/20 shadow-2xl">
        <WindowChrome tint="#D8D8D8" />
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-[calc(100%-2rem)] w-full object-cover object-top"
        />
      </div>
      <span
        className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full opacity-30 blur-2xl"
        style={{ backgroundColor: color }}
      />
    </div>
  );
};

const CaseCard = ({ caseStudy }) => {
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
          <h3 className="mt-3 font-sora text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
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
            <div className="min-w-0">
              <p className="font-sora text-3xl font-bold tracking-tight text-white md:text-4xl">
                {caseStudy.result.value}
              </p>
              <p className="mt-1 max-w-xs font-sora text-xs leading-relaxed text-gray-500">
                {caseStudy.result.label}
              </p>
            </div>

            <button
              onClick={() => setOpen((o) => !o)}
              className="group mb-1 inline-flex flex-shrink-0 items-center gap-2 font-sora text-sm font-semibold text-white transition-colors hover:opacity-70"
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
                    <Layers className="mt-0.5 h-4 w-4 text-gray-500" />
                    <div>
                      <p className="font-sora text-[11px] text-gray-500">
                        Platform
                      </p>
                      <p className="font-sora text-sm font-medium text-white">
                        {caseStudy.platform}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="mb-4 font-sora text-sm font-semibold text-white">
                    Project approach
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
                  <div className="mb-2 flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-gray-500" />
                    <p className="font-sora text-sm font-semibold text-white">
                      What this demonstrates
                    </p>
                  </div>
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
          {CASE_STUDIES.map((caseStudy) => (
            <CaseCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
