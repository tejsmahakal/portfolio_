import React from "react";

/* =======================
   MERN / FRONTEND PROJECTS
   ======================= */
const mernProjects = [
  {
    title: "Exilieen Research Lab",
    description:
      "Official website for Exilieen Research Lab showcasing research services, company information, and responsive UI built for production use.",
    tech: ["React.js", "Node.js", "Express.js"],
    link: "https://exilieen-research.netlify.app/",
    github: "#",
  },
  {
    title: "Agrimitra",
    description:
      "Web application built for Agrimitra with a clean UI and scalable backend architecture using MERN stack principles.",
    tech: ["React.js", "Node.js", "Express.js"],
    link: "#",
    github: "#",
  },
  {
    title: "Alphaseam Enterprises",
    description:
      "Business website with dynamic content and backend integration, designed to support scalability and future feature expansion.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    link: "https://alphaseam-mern.netlify.app/",
    github: "#",
  },
  {
    title: "AMSA Overseas",
    description:
      "Corporate website built using Next.js with server-side rendering and backend integration for performance and SEO optimization.",
    tech: ["Next.js", "Node.js", "Express.js"],
    link: "https://www.amsaoverseas.com/",
    github: "#",
  },
  {
    title: "The One Property",
    description:
      "Real estate platform featuring property listings, responsive design, and backend APIs for managing content and user data.",
    tech: ["React.js", "Node.js", "Express.js"],
    link: "https://the-one-property-v4h9.onrender.com/",
    github: "#",
  },
];

/* =======================
   DEVOPS / CLOUD PROJECTS
   ======================= */
const devopsProjects = [
  {
    title: "CI/CD Pipeline for Node.js Application",
    description:
      "Automated CI/CD pipeline using GitHub Actions to build and deploy a Node.js application on AWS EC2 with secure SSH-based deployment.",
    tech: ["GitHub Actions", "AWS EC2", "Node.js", "Shell Scripting"],
    github: "#",
  },
  {
    title: "Dockerized MERN Application Deployment",
    description:
      "Containerized a full MERN application using Docker and Docker Compose and deployed it on an AWS EC2 instance.",
    tech: ["Docker", "Docker Compose", "AWS EC2", "Nginx"],
    github: "#",
  },
  {
    title: "AWS Cloud Infrastructure Setup",
    description:
      "Configured AWS infrastructure including EC2, IAM, S3, VPC, and security groups for scalable and secure deployments.",
    tech: ["AWS EC2", "IAM", "S3", "VPC"],
    github: "#",
  },
];

const Projects = () => {
  return (
    <section className="min-h-[calc(100vh-88px)] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 px-4">
      <div className="max-w-6xl mx-auto text-slate-100">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-blue-400 font-semibold">
            Projects
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mt-3">
            MERN &amp; <span className="text-blue-400">DevOps Projects</span>
          </h1>
          <p className="mt-4 text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
            Production-ready web applications and DevOps projects focused on
            real-world deployment, automation, and scalable system design.
          </p>
        </div>

        {/* MERN PROJECTS */}
        <h2 className="text-2xl font-semibold mb-5 flex items-center gap-2">
          <span className="inline-block w-1.5 h-6 rounded-full bg-emerald-400" />
          MERN / Frontend Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2 mb-14">
          {mernProjects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900/70 border border-slate-700/70 rounded-2xl p-6 shadow-lg shadow-slate-950/40
                         hover:-translate-y-1 hover:border-blue-500/70 transition"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-300">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-200 border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-4 text-sm">
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-blue-300 hover:text-blue-100"
                  >
                    Live Demo →
                  </a>
                )}
                <a
                  href={project.github}
                  className="font-medium text-slate-300 hover:text-white"
                >
                  GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* DEVOPS PROJECTS */}
        <h2 className="text-2xl font-semibold mb-5 flex items-center gap-2">
          <span className="inline-block w-1.5 h-6 rounded-full bg-indigo-400" />
          DevOps &amp; Cloud Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {devopsProjects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900/70 border border-slate-700/70 rounded-2xl p-6 shadow-lg shadow-slate-950/40
                         hover:-translate-y-1 hover:border-indigo-500/70 transition"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-300">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-200 border border-indigo-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 text-sm">
                <a
                  href={project.github}
                  className="font-medium text-indigo-300 hover:text-indigo-100"
                >
                  GitHub Repo →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
