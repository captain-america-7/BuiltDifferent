// AUDITED & CLEANED — 2026-03-09
import React from 'react';
import { Terminal, Code, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, scaleIn } from '../utils/animations';

const About = () => {
    const stats = [
        { icon: Terminal, label: 'Experience', value: '1 Year' },
        { icon: Code, label: 'Projects', value: '3 Major' },
        { icon: Award, label: 'Certifications', value: '3' },
        { icon: Users, label: 'Mentored', value: '15+' }
    ];

    return (
        <section id="about" className="py-20 bg-[#000000] relative border-t border-[#00f5d4]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                        <span className="text-[#00f5d4]">&lt;</span> About Me <span className="text-[#4da6ff]">/&gt;</span>
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-[#00f5d4] to-[#4da6ff] mx-auto rounded"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Photo Placeholder */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} className="w-64 h-64 lg:w-80 lg:h-80 shrink-0 relative group">
                        <div className="absolute inset-0 rounded-full border-2 border-[#00f5d4] glow-cyan group-hover:scale-105 transition-transform duration-500"></div>
                        <div className="absolute inset-2 rounded-full border border-[#4da6ff]/50"></div>
                        <div className="absolute inset-4 rounded-full bg-[#000000] flex flex-col items-center justify-center border border-[#00f5d4]/20 overflow-hidden z-10">
                            <span className="text-gray-500 font-code text-sm mb-2 opacity-50">&lt;img_src="me.png"/&gt;</span>
                            <Terminal size={48} className="text-[#4da6ff] opacity-50" />
                        </div>
                    </motion.div>

                    {/* Bio */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} className="flex-1 space-y-6 text-gray-300 font-body leading-relaxed text-lg text-center lg:text-left bg-[#000000] p-8 rounded-xl border border-[#4da6ff]/20 relative">
                        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#00f5d4] to-[#4da6ff] rounded-l-xl"></div>
                        <p>
                            Cybersecurity Graduate with hands-on experience in intrusion detection, anomaly detection, and cloud security. Proficient in threat analysis, network traffic monitoring, and building automated detection systems using Python and ML.
                        </p>
                        <p>
                            Certified in Google Cybersecurity and EC-Council security, with a strong foundation in Linux, IAM, and security best practices. Eager to contribute as a SOC Analyst in threat detection, incident triage, and response workflows.
                        </p>
                    </motion.div>
                </div>

                {/* Stats */}
                <motion.div 
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={staggerContainer}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
                >
                    {stats.map((stat, index) => (
                        <motion.div variants={scaleIn} key={index} className="bg-[#000000] border border-[#00f5d4]/20 rounded-lg p-6 text-center hover:border-[#00f5d4] transition-colors group relative overflow-hidden glow-blue hover:glow-cyan">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00f5d4] to-[#4da6ff] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <stat.icon size={32} className="mx-auto text-[#4da6ff] mb-4 group-hover:text-[#00f5d4] transition-colors" />
                            <div className="text-3xl font-heading font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00f5d4] group-hover:to-[#4da6ff]">{stat.value}</div>
                            <div className="text-sm font-code text-gray-400">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
