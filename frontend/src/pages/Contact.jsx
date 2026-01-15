// src/pages/Contact.jsx
import React, { useState } from "react";

/**
 * Contact page
 * - Name input allows only alphabetic characters + spaces
 * - On submit an attractive toast shows success
 */

const Toast = ({ show, type = "success", message, onClose }) => {
  // simple toast with slide/fade animation
  return (
    <div
      aria-live="polite"
      className={`fixed left-1/2 transform -translate-x-1/2 ${
        show ? "bottom-8 opacity-100" : "-bottom-24 opacity-0 pointer-events-none"
      } transition-all duration-500 z-50`}
      style={{ width: "min(92%,420px)" }}
    >
      <div
        role="status"
        className={`w-full rounded-lg px-4 py-3 shadow-lg flex items-start gap-3 ${
          type === "success"
            ? "bg-emerald-600/95 text-white"
            : "bg-rose-600/95 text-white"
        }`}
      >
        <div className="flex-shrink-0 mt-0.5">
          {type === "success" ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path d="M7.5 13.5L4.5 10.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.5 13.5L15 6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="10" cy="10" r="8.2" stroke="white" strokeWidth="1.2" opacity="0.2"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path d="M10 6v4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 14h.01" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>

        <div className="flex-1">
          <div className="text-sm font-semibold">{type === "success" ? "Message sent" : "Error"}</div>
          <div className="text-sm opacity-90 leading-snug">{message}</div>
        </div>

        <button
          onClick={onClose}
          aria-label="Dismiss"
          className="ml-3 opacity-90 hover:opacity-100 transition"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M6 6l12 12M18 6L6 18" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

const Contact = () => {
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [toast, setToast] = useState({ show: false, type: "success", message: "" });

  // Only letters and spaces allowed (Latin A–Z). Filters input immediately.
  const handleNameChange = (e) => {
    const raw = e.target.value;
    const filtered = raw.replace(/[^A-Za-z\s]/g, "");
    setName(filtered);
  };

  const isNameValid = name.trim().length > 0 && /^[A-Za-z\s]+$/.test(name);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setNameTouched(true);

    if (!isNameValid) {
      setToast({ show: true, type: "error", message: "Please enter a valid name (letters & spaces only)." });
      setTimeout(() => setToast((t) => ({ ...t, show: false })), 4000);
      return;
    }

    if (!email || !message) {
      setToast({ show: true, type: "error", message: "Please fill required fields (email & message)." });
      setTimeout(() => setToast((t) => ({ ...t, show: false })), 4000);
      return;
    }

    // API Call
    setIsSubmitting(true);
    
    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
      
      const formData = {
        name: name.trim(),
        email: email.trim(),
        role: role.trim(),
        message: message.trim(),
        submittedAt: new Date().toISOString()
      };

      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message");
      }

      // Success
      setToast({ 
        show: true, 
        type: "success", 
        message: result.message || "Thanks! I received your message and will reply within 24 hours." 
      });

      // Reset form
      setName("");
      setEmail("");
      setRole("");
      setMessage("");
      setNameTouched(false);

    } catch (error) {
      console.error("Contact form error:", error);
      setToast({ 
        show: true, 
        type: "error", 
        message: error.message || "Something went wrong. Please try again later." 
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setToast((t) => ({ ...t, show: false })), 4000);
    }
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] bg-slate-900 text-slate-100 flex flex-col md:flex-row items-start md:items-center">
      {/* Toast */}
      <Toast
        show={toast.show}
        type={toast.type}
        message={toast.message}
        onClose={() => setToast((t) => ({ ...t, show: false }))}
      />

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-12 w-full">
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/70 border border-slate-700 mb-6 text-xs uppercase tracking-[0.2em]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to DevOps + AWS Roles
        </div>

        {/* Heading + intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
              Let&apos;s build something{" "}
              <span className="text-emerald-400">reliable</span> together.
            </h1>

            <p className="text-slate-300 text-sm md:text-base mb-6">
              I&apos;m a{" "}
              <span className="font-medium">
                MERN Developer transitioning into DevOps + AWS
              </span>
              . Passionate about building scalable applications and automating infrastructure. 
              If you&apos;re looking for someone who understands both development and operations, 
              I&apos;d love to connect.
            </p>

            {/* Contact info cards */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start sm:items-center gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700">
                <span className="text-slate-400 text-xs w-14 md:w-16 shrink-0">Email</span>
                <a 
                  href="mailto:tejs.mahakal@gmail.com"
                  className="font-mono text-slate-100 break-all hover:text-emerald-400 transition-colors"
                >
                  tejs.mahakal@gmail.com
                </a>
              </div>

              <div className="flex items-start sm:items-center gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700">
                <span className="text-slate-400 text-xs w-14 md:w-16 shrink-0">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/tejas-mahakal-758094206/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-emerald-400 hover:underline truncate"
                >
                  linkedin.com/in/tejas-mahakal
                </a>
              </div>

              <div className="flex items-start sm:items-center gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700">
                <span className="text-slate-400 text-xs w-14 md:w-16 shrink-0">GitHub</span>
                <a
                  href="https://github.com/tejsmahakal"
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-emerald-400 hover:underline truncate"
                >
                  github.com/tejsmahakal
                </a>
              </div>
            </div>

            <p className="text-xs text-slate-400 mt-4">
              Prefer email? Send your requirement, JD, or a quick intro – I
              usually reply within 24 hours.
            </p>
          </div>

          {/* Form */}
          <div>
            <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-4 sm:p-5 shadow-xl shadow-slate-950/40">
              <h2 className="text-lg font-medium mb-1">Send me a message</h2>
              <p className="text-xs text-slate-400 mb-5">Share role details, expectations, or just say hi.</p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={handleNameChange}
                      onBlur={() => setNameTouched(true)}
                      placeholder="Recruiter / Hiring Manager"
                      inputMode="text"
                      className={`w-full px-3 py-2 rounded-lg bg-slate-800 border text-sm outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 ${
                        nameTouched && !isNameValid ? "border-rose-500" : "border-slate-700"
                      }`}
                    />
                    <p className="mt-1 text-[11px]">
                      <span className="text-rose-400 mr-2">
                        {nameTouched && !isNameValid ? "Only letters & spaces allowed." : ""}
                      </span>
                      <span className="text-slate-500">Use alphabetic characters (A–Z) only.</span>
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Work Email</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                      placeholder="name@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1">Role / Position</label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                    placeholder="DevOps Engineer | AWS | MERN | SRE"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1">Message</label>
                  <textarea
                    rows="4"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 resize-none"
                    placeholder="Brief about your project, team, infra stack, and expectations..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 rounded-lg text-sm font-medium bg-emerald-500 hover:bg-emerald-400 text-slate-900 transition-transform hover:-translate-y-[1px] active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                <p className="text-[11px] text-slate-500 mt-2">
                  * You&apos;ll receive a confirmation email after submitting the form.
                </p>
              </form>
            </div>

            {/* Small note */}
            <p className="text-[11px] text-slate-500 mt-4">
              Also open to freelance projects, infra audits, and PoC builds around CI/CD, Docker, Kubernetes, and AWS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;