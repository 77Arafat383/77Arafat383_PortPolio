import React, { useState } from 'react';
import { Mail, Code2, Send, Copy, Check, Sparkles, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, FacebookIcon } from './Icons';
import { profileData } from '../data/profile';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setLoading(true);

    const subject = `[Portfolio] Message from ${formState.name}`;
    const body = `Hi Yeasin Arafat,\n\nYou received a new message from your Portfolio website:\n\nName: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}\n\nBest regards,\n${formState.name}`;

    try {
      await fetch(`https://formsubmit.co/ajax/${profileData.email}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: subject,
          name: formState.name,
          email: formState.email,
          message: formState.message
        })
      });
    } catch (err) {
      console.warn('FormSubmit endpoint error, falling back to mailto:', err);
    }

    const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;

    setLoading(false);
    setSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0a0a0c] overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-indigo-600/15 via-purple-600/10 to-cyan-500/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20">
            <Sparkles size={13} /> Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's <span className="text-indigo-400">Connect</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl">
            Have an interesting project, software opportunity, or technical discussion? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          <div className="lg:col-span-5 space-y-6 text-left">

            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <MessageSquare size={20} className="text-indigo-400" />
                  <span>Direct Channels</span>
                </h3>
                <p className="text-xs text-gray-400">
                  Open to full-stack, backend software roles, and competitive programming discussions.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-indigo-300">
                  <span className="flex items-center gap-1.5">
                    <Mail size={14} /> Primary Email
                  </span>
                  <span className="text-[10px] text-gray-400">Preferred</span>
                </div>

                <div className="flex items-center justify-between gap-2 bg-[#060608] p-3 rounded-xl border border-white/10 font-mono text-xs text-white">
                  <span className="truncate">{profileData.email}</span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shrink-0 flex items-center gap-1 text-[11px]"
                    title="Copy Email Address"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-emerald-300" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-2.5">
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-all text-xs font-medium text-gray-200 group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon size={18} className="text-cyan-400" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <span className="text-gray-500 group-hover:text-white transition-colors">Connect →</span>
                </a>

                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-all text-xs font-medium text-gray-200 group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon size={18} className="text-purple-400" />
                    <span>GitHub (@{profileData.githubUsername})</span>
                  </div>
                  <span className="text-gray-500 group-hover:text-white transition-colors">Follow →</span>
                </a>

                <a
                  href={profileData.socials.codeforces}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-all text-xs font-medium text-gray-200 group"
                >
                  <div className="flex items-center gap-3">
                    <Code2 size={18} className="text-indigo-400" />
                    <span>Codeforces (@{profileData.codeforcesHandle})</span>
                  </div>
                  <span className="text-gray-500 group-hover:text-white transition-colors">View →</span>
                </a>

                <a
                  href={profileData.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-all text-xs font-medium text-gray-200 group"
                >
                  <div className="flex items-center gap-3">
                    <LeetcodeIcon size={18} className="text-amber-400" />
                    <span>LeetCode (@{profileData.leetcodeUsername})</span>
                  </div>
                  <span className="text-gray-500 group-hover:text-white transition-colors">Solve →</span>
                </a>

                <a
                  href={profileData.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-all text-xs font-medium text-gray-200 group"
                >
                  <div className="flex items-center gap-3">
                    <FacebookIcon size={18} className="text-blue-400" />
                    <span>Facebook Profile</span>
                  </div>
                  <span className="text-gray-500 group-hover:text-white transition-colors">Visit →</span>
                </a>
              </div>

            </div>

          </div>

          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 text-left">

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white">Send a Direct Message</h3>
                <p className="text-xs text-gray-400">
                  Fill out the form below to drop a quick message.
                </p>
              </div>

              {submitted && (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-3 animate-fadeIn">
                  <Check size={18} className="text-emerald-400 shrink-0" />
                  <span>Thank you! Your message was dispatched to <strong>{profileData.email}</strong> with subject <strong>[Portfolio]</strong>.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-300">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Arafat"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#060608] border border-white/10 focus:border-indigo-500 text-xs text-white placeholder-gray-500 outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-300">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. arafat@gmail.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#060608] border border-white/10 focus:border-indigo-500 text-xs text-white placeholder-gray-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-gray-300">Message</label>
                  <textarea
                    required
                    rows="4"
                    placeholder="Write your message or inquiry here..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#060608] border border-white/10 focus:border-indigo-500 text-xs text-white placeholder-gray-500 outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
