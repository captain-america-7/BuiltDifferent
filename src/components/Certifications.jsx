// AUDITED & CLEANED — 2026-03-09
import React from 'react';
import { Award, Cloud, Shield, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import { fadeUp, staggerContainer, scaleIn } from '../utils/animations';

const Certifications = () => {
    const certifications = [
        {
            title: "Google Cloud Computing Foundations",
            issuer: "Google",
            icon: Cloud,
            color: "from-[#4285F4] to-[#34A853]"
        },
        {
            title: "Google Cybersecurity Professional Certificate",
            issuer: "Google",
            icon: Shield,
            color: "from-[#FBBC05] to-[#EA4335]"
        },
        {
            title: "SQL Injection Attacks",
            issuer: "EC-Council",
            icon: Database,
            color: "from-red-500 to-red-700"
        }
    ];

    return (
        <section id="certifications" className="py-20 bg-[#000000] relative border-t border-[#00f5d4]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                        <span className="text-[#00f5d4]">&lt;</span> Certifications <span className="text-[#4da6ff]">/&gt;</span>
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-[#00f5d4] to-[#4da6ff] mx-auto rounded"></div>
                </motion.div>

                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {certifications.map((cert, index) => (
                        <motion.div variants={scaleIn} key={index}>
                            <GlassCard className="p-8 text-center hover:border-[#00f5d4] transition-all glow-blue hover:glow-cyan group relative overflow-hidden flex flex-col items-center justify-center min-h-[250px] shadow-[0_0_20px_rgba(0,245,212,0.1)] h-full">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-transparent to-[#000000] opacity-50"></div>

                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-full bg-[#000000] border-2 border-[#4da6ff]/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:border-[#00f5d4] shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:shadow-[0_0_20px_rgba(0,245,212,0.6)]">
                                        <cert.icon size={32} className="text-white" />
                                    </div>

                                    <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00f5d4] group-hover:to-[#4da6ff] transition-all">{cert.title}</h3>

                                    <div className="inline-flex items-center space-x-2 text-sm font-code text-gray-400">
                                        <Award size={16} className="text-[#00f5d4]" />
                                        <span>{cert.issuer}</span>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
