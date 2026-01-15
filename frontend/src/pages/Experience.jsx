import React from "react";

const experiences = [
  {
    title: "MERN Stack Developer",
    company: "GTasterix Pvt. Ltd.",
    period: "Sep 2023 – Present",
    location: "Pune, India",
    summary:
      "Working as a full-stack developer on production-grade web applications with a focus on performance, scalability, and clean architecture.",
    bullets: [
      "Developed and maintained responsive user interfaces using React, React Router, and modern JavaScript.",
      "Built and integrated RESTful APIs using Node.js and Express with MongoDB as the primary database.",
      "Implemented authentication, authorization, and role-based access control in real-world applications.",
      "Collaborated with team members to optimize application performance and improve code quality.",
      "Used Git and GitHub for version control, code reviews, and structured development workflows."
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Git", "GitHub"]
  },
  {
    title: "DevOps & Cloud Engineer (Hands-on Projects)",
    company: "DevOps & AWS Projects",
    period: "Oct 2024 – Present",
    location: "Pune, India",
    summary:
      "Gaining hands-on DevOps and AWS experience by working on cloud infrastructure, containerization, and CI/CD pipelines alongside development work.",
    bullets: [
      "Provisioned and managed AWS EC2 instances with secure IAM roles and security groups.",
      "Containerized applications using Docker and deployed them on Linux-based cloud servers.",
      "Designed and implemented basic CI/CD pipelines to automate build and deployment processes.",
      "Worked extensively with Linux environments and shell scripting for automation tasks.",
      "Applied DevOps best practices to improve deployment reliability and consistency."
    ],
    stack: ["AWS (EC2, IAM, S3)", "Docker", "Linux", "Shell Scripting", "CI/CD"]
  }
];

const Experience = () => {
  return (
    <section className="min-h-[calc(100vh-88px)] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* Page heading */}
        <header className="mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-emerald-400 uppercase">
            Experience
          </p>

          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-50">
            Professional & DevOps Journey
          </h1>

          <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-300">
            Over <span className="text-emerald-400 font-medium">2+ years</span> of
            professional experience in MERN stack development, currently
            transitioning into DevOps and AWS with hands-on cloud deployments
            and CI/CD practices.
          </p>

          {/* quick stats */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 shadow-md shadow-black/40">
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                Overall Experience
              </p>
              <p className="mt-1 text-lg font-semibold text-slate-100">
                2+ Years
              </p>
              <p className="mt-1 text-xs text-slate-400">
                MERN + DevOps exposure
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 shadow-md shadow-black/40">
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                DevOps & AWS
              </p>
              <p className="mt-1 text-lg font-semibold text-slate-100">
                Hands-on
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Docker, CI/CD, Cloud
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 shadow-md shadow-black/40">
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                Target Role
              </p>
              <p className="mt-1 text-lg font-semibold text-slate-100">
                DevOps / Cloud Engineer
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Open to Pune & hybrid roles
              </p>
            </div>
          </div>
        </header>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-px bg-slate-700" />

          <div className="space-y-8 sm:space-y-10 pl-6 sm:pl-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <span className="absolute -left-[11px] top-2 h-4 w-4 rounded-full border-2 border-emerald-400 bg-slate-900 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />

                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur p-4 sm:p-6 shadow-lg shadow-black/40">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h2 className="text-lg sm:text-xl font-semibold text-slate-100">
                      {exp.title}
                    </h2>
                    <span className="text-xs sm:text-sm font-medium text-emerald-300">
                      {exp.period}
                    </span>
                  </div>

                  <div className="mt-1 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-400">
                    <span className="font-medium text-slate-300">
                      {exp.company}
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span>{exp.location}</span>
                  </div>

                  <p className="mt-3 text-sm text-slate-300">{exp.summary}</p>

                  <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
                    {exp.bullets.map((item, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
