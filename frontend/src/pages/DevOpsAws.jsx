import React from "react";

const devopsSkills = [
  "Linux (Ubuntu & Amazon Linux)",
  "Shell Scripting (Bash)",
  "Git & GitHub",
  "CI/CD Pipelines (GitHub Actions / Jenkins)",
  "Docker & Containerization",
  "Kubernetes (Fundamentals)",
  "Ansible (Automation Basics)",
  "Monitoring & Logging (Basics)",
];

const awsSkills = [
  "EC2 (Linux servers, SSH, Security Groups)",
  "IAM (Users, Roles, Policies)",
  "S3 (Static hosting, backups)",
  "VPC (Subnets, Route Tables, Internet Gateway)",
  "CloudWatch (Metrics & Logs)",
  "Load Balancing (Concepts & Basics)",
];

const workflows = [
  {
    title: "CI/CD for Web Applications",
    desc: "Automating build, test, and deployment workflows for MERN-based applications.",
    points: [
      "Source code managed in GitHub",
      "Automated build & test pipelines",
      "Docker image creation",
      "Deployment on AWS EC2",
    ],
  },
  {
    title: "Cloud Infrastructure on AWS",
    desc: "Designing and managing secure, scalable infrastructure using AWS services.",
    points: [
      "Secure EC2 configuration with IAM & Security Groups",
      "S3 for static assets & backups",
      "CloudWatch for logs and monitoring",
      "Basic VPC-based network isolation",
    ],
  },
  {
    title: "DevOps Mindset",
    desc: "Bridging development and operations with automation and reliability.",
    points: [
      "Automating repetitive operational tasks",
      "Version control for infrastructure & code",
      "Observability and faster feedback loops",
      "Reliability-focused deployments",
    ],
  },
];

const DevOpsAws = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">

        {/* Hero Section */}
        <section className="mb-12 lg:mb-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="mb-3 inline-flex rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-emerald-300">
                DevOps & AWS Engineer
              </p>
              <h1 className="mb-4 text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl lg:text-5xl">
                From <span className="text-emerald-400">Full Stack (MERN)</span>{" "}
                to <span className="text-emerald-400">DevOps & Cloud (AWS)</span>
              </h1>
              <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
                Full-stack developer with{" "}
                <span className="font-semibold text-emerald-300">
                  2+ years of professional experience
                </span>
                , actively working with DevOps practices and AWS cloud services.
                I focus on automating deployments, improving reliability, and
                managing cloud infrastructure for production-ready systems.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-slate-200 shadow-sm shadow-emerald-500/20">
                  MERN × DevOps × AWS
                </span>
                <span className="rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-slate-200 shadow-sm shadow-emerald-500/20">
                  Open to DevOps / Cloud Roles
                </span>
              </div>
            </div>

            {/* Snapshot */}
            <div className="w-full max-w-sm rounded-3xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl shadow-emerald-500/15 backdrop-blur">
              <h2 className="mb-2 text-sm font-semibold text-slate-100">
                Quick Snapshot
              </h2>
              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex justify-between gap-4">
                  <span>Current Role</span>
                  <span className="font-medium text-emerald-300">
                    MERN Developer
                  </span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Target Role</span>
                  <span className="font-medium text-emerald-300">
                    DevOps / Cloud Engineer
                  </span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Experience</span>
                  <span className="font-medium text-emerald-300">
                    2+ Years
                  </span>
                </div>
                <div className="mt-4 border-t border-slate-800 pt-4">
                  <p className="text-xs text-slate-400">
                    Comfortable owning CI/CD pipelines, cloud deployments, and
                    infrastructure tasks while supporting backend development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12 lg:mb-16">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold sm:text-2xl">
              Core Skills
            </h2>
            <span className="text-xs font-medium uppercase tracking-wide text-emerald-300">
              DevOps · AWS · MERN
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-5">
              <h3 className="mb-2 text-sm font-semibold">DevOps Skills</h3>
              <div className="flex flex-wrap gap-2">
                {devopsSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-950 px-3 py-1 text-xs ring-1 ring-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-5">
              <h3 className="mb-2 text-sm font-semibold">AWS Cloud Skills</h3>
              <div className="flex flex-wrap gap-2">
                {awsSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-950 px-3 py-1 text-xs ring-1 ring-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How I Work */}
        <section className="mb-12 lg:mb-16">
          <h2 className="mb-6 text-xl font-semibold sm:text-2xl">
            How I Approach DevOps & AWS
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {workflows.map((flow) => (
              <div
                key={flow.title}
                className="rounded-3xl border border-slate-800 bg-slate-900/60 p-4"
              >
                <h3 className="mb-1 text-sm font-semibold">{flow.title}</h3>
                <p className="mb-3 text-xs text-slate-400">{flow.desc}</p>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {flow.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl border border-emerald-500/40 bg-gradient-to-r from-emerald-500/10 via-slate-900 to-slate-950 px-6 py-6">
          <h2 className="text-lg font-semibold sm:text-xl">
            Ready to contribute as a DevOps / Cloud Engineer
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Bringing strong development fundamentals with practical DevOps and
            AWS experience to build reliable, automated systems.
          </p>
        </section>
      </div>
    </div>
  );
};

export default DevOpsAws;
