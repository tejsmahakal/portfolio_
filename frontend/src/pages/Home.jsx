import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    const elems = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      elems.forEach((el) => el.classList.add("revealed"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    elems.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 relative overflow-hidden">
      {/* ===== Background ===== */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#1f2933_1px,transparent_0)] [background-size:28px_28px] opacity-[0.35]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950" />
      </div>

      {/* ===== Styles ===== */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }

        [data-reveal] {
          opacity: 0;
          transform: translateY(14px);
          transition: all 600ms cubic-bezier(.16,.84,.24,1);
        }
        [data-reveal].revealed {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 6s ease infinite;
        }

        @keyframes floatSlow {
          0% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }
        .floaty { animation: floatSlow 6s ease-in-out infinite; }

        .tilt {
          transition: transform 300ms ease;
          transform-style: preserve-3d;
        }
        .tilt:hover {
          transform: perspective(900px) rotateX(4deg) rotateY(-4deg) translateY(-4px);
        }

        .cta-lift {
          transition: transform 200ms ease, box-shadow 200ms ease;
        }
        .cta-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 40px rgba(15,23,42,0.6);
        }

        @keyframes underlinePulse {
          0%,100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        .underline-animate {
          animation: underlinePulse 3s ease-in-out infinite;
        }
      `}</style>

      {/* ===== HERO ===== */}
      <section className="max-w-6xl mx-auto px-4 py-10 lg:py-16 grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <div className="space-y-6" data-reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-teal-400">
            MERN → DevOps & Cloud Engineer
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Hi, I’m{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-teal-300 via-teal-400 to-cyan-300 bg-clip-text text-transparent animate-gradient">
                Tejas Mahakal
              </span>
              <span className="absolute inset-0 blur-xl bg-teal-400/20 -z-10" />
            </span>
            <br />
            <span className="text-slate-300">
              Building, Automating & Deploying Reliable Systems
            </span>
          </h1>

          <p className="text-slate-300 max-w-xl text-sm sm:text-base leading-relaxed">
            Working professionally since{" "}
            <span className="text-teal-400 font-medium">September 2023</span>.  
            Strong background in{" "}
            <span className="text-teal-400 font-medium">MERN stack</span> and
            transitioning into{" "}
            <span className="relative inline-block mx-1">
              <span className="text-teal-400 font-medium">
                DevOps & Cloud Engineer
              </span>
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full underline-animate" />
            </span>
            with hands-on CI/CD pipelines, Dockerized apps, and AWS deployments.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm" data-reveal>
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3">
              <p className="text-xs text-slate-400">Experience</p>
              <p className="text-lg font-semibold text-teal-400">2+ Years</p>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3">
              <p className="text-xs text-slate-400">Focus</p>
              <p className="text-lg font-semibold text-teal-400">DevOps & AWS</p>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3">
              <p className="text-xs text-slate-400">Projects</p>
              <p className="text-lg font-semibold text-teal-400">8+</p>
            </div>
          </div>

          {/* Proof */}
          <div className="flex flex-wrap gap-3 text-xs" data-reveal>
            <span className="px-4 py-2 rounded-lg border border-slate-700 bg-slate-900/60">
              ⚙️ CI/CD Pipelines
            </span>
            <span className="px-4 py-2 rounded-lg border border-slate-700 bg-slate-900/60">
              ☁️ AWS EC2 • Docker • S3
            </span>
            <span className="px-4 py-2 rounded-lg border border-slate-700 bg-slate-900/60">
              🔐 IAM • Secure Deployments
            </span>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-3 pt-2" data-reveal>
            <Link to="/projects" className="cta-lift px-6 py-2.5 rounded-full bg-teal-500 text-slate-950 font-medium">
              View Projects
            </Link>
            <Link to="/devops" className="cta-lift px-6 py-2.5 rounded-full border border-slate-700 hover:border-teal-400">
              DevOps Journey
            </Link>
            <Link to="/contact" className="cta-lift px-6 py-2.5 rounded-full text-slate-300 hover:text-teal-300">
              Contact
            </Link>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="relative" data-reveal>
          <div className="absolute -inset-4 bg-teal-500/10 blur-3xl rounded-3xl" />
          <div className="relative border border-slate-700 bg-slate-900/60 rounded-3xl p-7 shadow-2xl backdrop-blur floaty tilt">
            <h2 className="text-lg font-semibold mb-4 text-teal-300">
              Tech Stack & Tools
            </h2>

            <div className="space-y-4 text-sm">
              <div>
                <p className="text-xs uppercase text-slate-400 mb-1">
                  Application Development
                </p>
                <p>React, Node.js, Express, MongoDB</p>
              </div>
              <div>
                <p className="text-xs uppercase text-slate-400 mb-1">
                  DevOps & Cloud
                </p>
                <p>Linux, Docker, CI/CD, AWS (EC2, IAM, S3)</p>
              </div>
              <div>
                <p className="text-xs uppercase text-slate-400 mb-1">
                  Core Strengths
                </p>
                <p>Automation • Reliability • Cloud-first Thinking</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
