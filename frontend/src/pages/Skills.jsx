import React from "react";

const skills = {
  "Core Web & MERN Stack": [
    "HTML5, CSS3, JavaScript (ES6+)",
    "React.js, React Router, Component-based architecture",
    "Node.js, Express.js",
    "MongoDB, Mongoose, schema design",
    "RESTful APIs, JWT-based authentication & authorization",
  ],
  "DevOps & Cloud": [
    "Linux fundamentals & server management",
    "Git & GitHub, branching and version control workflows",
    "CI/CD pipelines (GitHub Actions / Jenkins basics)",
    "Docker containerization & image management",
    "AWS EC2, IAM, S3, Security Groups (hands-on deployments)",
  ],
  "Tools & Engineering Practices": [
    "VS Code, Postman, Thunder Client",
    "API testing, debugging & error handling",
    "Agile / Scrum workflow awareness",
    "Application performance & basic optimization techniques",
  ],
};

const Skills = () => {
  return (
    <section
      className="min-h-[calc(100vh-88px)] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 overflow-x-hidden"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-400 font-semibold">
            Skills
          </p>
          <h1
            id="skills-heading"
            className="mt-2 text-3xl md:text-4xl font-bold text-slate-50"
          >
            Technical Skills in{" "}
            <span className="text-blue-400">MERN</span> &{" "}
            <span className="text-indigo-400">DevOps + AWS</span>
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Over{" "}
            <span className="text-emerald-400 font-medium">2+ years</span> of
            experience working with MERN stack technologies, along with
            hands-on exposure to DevOps practices, cloud infrastructure, and
            CI/CD-driven deployments.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-slate-900/80 rounded-2xl shadow-xl shadow-slate-950/40 border border-slate-800 p-6 transition-transform hover:-translate-y-1 hover:border-blue-500/70"
            >
              <h2 className="text-lg font-semibold text-slate-50 mb-4 flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-3 h-8 rounded-full bg-blue-400" />
                <span className="truncate">{category}</span>
              </h2>

              <ul className="space-y-3 text-sm text-slate-200">
                {items.map((skill) => (
                  <li key={skill} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-400 flex-shrink-0" />
                    <span className="break-words">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom badges */}
        <div className="mt-10 flex flex-wrap gap-3 justify-center text-xs md:text-sm">
          <span className="px-3 py-1 rounded-full bg-slate-900/80 text-blue-200 border border-blue-500/40">
            2+ Years MERN Experience
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-900/80 text-indigo-200 border border-indigo-500/40">
            Hands-on DevOps & AWS
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-900/80 text-emerald-200 border border-emerald-500/40">
            Open to DevOps / Cloud Engineer Roles
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
