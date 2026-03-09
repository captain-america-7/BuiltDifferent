// AUDITED & CLEANED — 2026-03-09
import React, { useState } from 'react';
import { Send, Github, Linkedin, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import { fadeUp } from '../utils/animations';

const Contact = () => {
    const [status, setStatus] = useState(''); // 'idle', 'loading', 'success', 'error'

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formState.name || !formState.email || !formState.message) {
            setStatus('error');
            return;
        }

        if (!validateEmail(formState.email)) {
            setStatus('error');
            return;
        }

        setStatus('loading');

        setTimeout(() => {
            window.location.href = `mailto:nallaaruntej@gmail.com?subject=Contact from Portfolio - ${formState.name}&body=${formState.message}%0D%0A%0D%0AFrom: ${formState.email}`;
            setStatus('success');
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        }, 800);
    };

    return (
        <section id="contact" className="py-20 bg-[#000000] relative border-t border-[#00f5d4]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                        <span className="text-[#00f5d4]">&lt;</span> Contact Me <span className="text-[#4da6ff]">/&gt;</span>
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-[#00f5d4] to-[#4da6ff] mx-auto rounded"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Info Side */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} className="flex flex-col justify-center space-y-8">
                        <h3 className="text-2xl font-heading font-bold text-white">Let's Connect</h3>
                        <p className="text-gray-400 font-body leading-relaxed text-lg">
                            I'm open to opportunities as a SOC Analyst, Security Engineer, or in Cloud Security. Let's build secure solutions together.
                        </p>

                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-[#000000] rounded-lg border border-[#4da6ff]/30 text-[#00f5d4]">
                                <Mail size={24} />
                            </div>
                            <a href="mailto:nallaaruntej@gmail.com" className="text-gray-300 hover:text-[#00f5d4] transition-colors font-code text-lg">
                                nallaaruntej@gmail.com
                            </a>
                        </div>

                        <div className="flex space-x-6 mt-4">
                            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} href="https://github.com/captain-america-7" target="_blank" rel="noopener noreferrer" className="p-4 bg-[#000000] rounded-xl border border-[#00f5d4]/20 hover:border-[#00f5d4] text-[#4da6ff] hover:text-[#00f5d4] transition-colors glow-blue hover:glow-cyan">
                                <Github size={28} />
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} href="https://linkedin.com/in/nallaaruntej" target="_blank" rel="noopener noreferrer" className="p-4 bg-[#000000] rounded-xl border border-[#00f5d4]/20 hover:border-[#00f5d4] text-[#4da6ff] hover:text-[#00f5d4] transition-colors glow-blue hover:glow-cyan">
                                <Linkedin size={28} />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp}>
                        <GlassCard noHoverY className="p-8 relative">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00f5d4] to-[#4da6ff] rounded-t-[19px]"></div>

                            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                                <div>
                                    <label className="block text-sm font-code text-[#00f5d4] mb-2" htmlFor="name">NAME</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        className="w-full bg-[#000000]/50 backdrop-blur-md border border-[#4da6ff]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00f5d4] transition-colors font-body focus:ring-1 focus:ring-[#00f5d4]"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-code text-[#00f5d4] mb-2" htmlFor="email">EMAIL</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        className="w-full bg-[#000000]/50 backdrop-blur-md border border-[#4da6ff]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00f5d4] transition-colors font-body focus:ring-1 focus:ring-[#00f5d4]"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-code text-[#00f5d4] mb-2" htmlFor="message">MESSAGE</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full bg-[#000000]/50 backdrop-blur-md border border-[#4da6ff]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00f5d4] transition-colors font-body resize-none focus:ring-1 focus:ring-[#00f5d4]"
                                        placeholder="Hello Aruntej..."
                                    ></textarea>
                                </div>

                                {status === 'error' && (
                                    <div className="flex items-center space-x-2 text-red-500 text-sm font-code">
                                        <AlertCircle size={16} />
                                        <span>Please fill all fields with a valid email.</span>
                                    </div>
                                )}

                                {status === 'success' && (
                                    <div className="flex items-center space-x-2 text-[#00f5d4] text-sm font-code">
                                        <CheckCircle size={16} />
                                        <span>Message setup complete!</span>
                                    </div>
                                )}

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.97 }}
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full flex justify-center items-center space-x-2 bg-gradient-to-r from-[#00f5d4] to-[#4da6ff] text-[#000000] px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-heading font-bold text-lg disabled:opacity-50"
                                >
                                    <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
                                    {!status && <Send size={20} />}
                                </motion.button>
                            </form>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
