// AUDITED & CLEANED — 2026-03-09
import React from 'react';
import { Shield, Download, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import { fadeUp, staggerContainer } from '../utils/animations';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-grid">
            {/* Background Gradient to ensure clean pure black base */}
            <div className="absolute inset-0 bg-black/80 z-0"></div>

            {/* Radial Glow */}
            <div className="absolute inset-0 bg-radial-glow z-0"></div>

            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                {/* Status Badge */}
                <motion.div variants={fadeUp} className="mb-8 inline-block">
                    <GlassCard noHoverY className="inline-flex items-center space-x-2 px-6 py-2 rounded-full !rounded-full !border-cyan text-cyan">
                        <Shield size={16} />
                        <span className="font-code text-sm uppercase tracking-widest">System Secure & Ready</span>
                    </GlassCard>
                </motion.div>

                {/* Heading */}
                <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight">
                    <span className="text-white">Hi, I'm </span>
                    <span className="text-cyan">Nalla </span>
                    <span className="text-blue">Aruntej</span>
                </motion.h1>

                {/* Blinking Cursor */}
                <motion.div variants={fadeUp} className="h-10 mb-6 flex justify-center items-center font-code">
                    <span className="text-2xl md:text-3xl font-code text-cyan">&gt;
                        <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ repeat: Infinity, duration: 1 }}
                        >_</motion.span>
                    </span>
                </motion.div>

                {/* Subtext */}
                <motion.p variants={fadeUp} className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-10 leading-relaxed font-body">
                    Cybersecurity graduate with hands-on experience in intrusion detection, anomaly detection, and cloud security. Certified by Google & EC-Council.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <motion.a
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        href="#projects"
                        className="group flex items-center justify-center space-x-2 bg-cyan text-black px-8 py-3 rounded hover:bg-cyan/90 transition-all font-semibold font-body text-lg w-full sm:w-auto glow-cyan"
                    >
                        <span>View My Work</span>
                        <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                        className="glass-card flex items-center justify-center space-x-2 text-blue px-8 py-3 transition-all font-semibold font-body text-lg w-full sm:w-auto"
                        style={{ borderRadius: '0.375rem', border: '1px solid rgba(77, 166, 255, 0.4)' }}
                    >
                        <Download size={20} />
                        <span>Download Resume</span>
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
