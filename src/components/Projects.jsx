// AUDITED & CLEANED — 2026-03-09
import React from 'react';
import { Github, ShieldCheck, Cpu, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import { fadeUp, staggerContainer, scaleIn } from '../utils/animations';

const Projects = () => {
    const projects = [
        {
            title: "Quantum Based Secure Password Manager (AWS)",
            date: "Dec 2024 – May 2025",
            description: "Cloud-based security system with encryption, IAM policies, least-privilege access, and compliance-aligned data protection. Evaluated against common attack vectors.",
            tags: ["AWS", "IAM", "Encryption", "Cloud Security", "Compliance"],
            github: "https://github.com/nallaaruntej",
            icon: ShieldCheck
        },
        {
            title: "Smart Home Automation (AWS + IoT)",
            date: "Jul 2024 – Nov 2024",
            description: "End-to-end smart home system on AWS cloud infrastructure with reliable IoT device-to-cloud communication.",
            tags: ["AWS", "IoT", "Cloud Deployment", "Automation"],
            github: "https://github.com/nallaaruntej",
            icon: Cpu
        },
        {
            title: "Automated Vulnerability Detection Using RNN",
            date: "Feb 2023 – Apr 2023",
            description: "NIDS using RNN/TensorFlow with 30% accuracy improvement and 18% false positive reduction. Processed 100K+ network traffic records.",
            tags: ["Python", "TensorFlow", "RNN", "Pandas", "NumPy", "Network Security", "ML"],
            github: "https://github.com/nallaaruntej",
            icon: Database
        }
    ];

    return (
        <section id="projects" className="py-20 bg-[#000000] relative border-t border-[#00f5d4]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                        <span className="text-[#00f5d4]">&lt;</span> Featured Projects <span className="text-[#4da6ff]">/&gt;</span>
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-[#00f5d4] to-[#4da6ff] mx-auto rounded"></div>
                </motion.div>

                <motion.div 
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div variants={scaleIn} key={index} className="h-full">
                            <GlassCard className="flex flex-col h-full overflow-hidden group">
                                <div className="h-2 w-full bg-gradient-to-r from-[#00f5d4] to-[#4da6ff]"></div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 bg-[#000000] rounded-lg border border-[#4da6ff]/30 text-[#00f5d4]">
                                            <project.icon size={28} />
                                        </div>
                                        <div className="flex gap-3">
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00f5d4] transition-colors">
                                                <Github size={20} />
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-[#00f5d4] transition-colors">{project.title}</h3>
                                    <div className="text-sm font-code text-[#4da6ff] mb-4">{project.date}</div>
                                    
                                    <p className="text-gray-400 font-body text-sm leading-relaxed mb-6 flex-1">
                                        {project.description}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map((tag, tIndex) => (
                                            <span key={tIndex} className="px-3 py-1 bg-[#000000] border border-[#00f5d4]/20 text-[#00f5d4] font-code text-xs rounded transition-colors group-hover:border-[#00f5d4]/50">
                                                {tag}
                                            </span>
                                        ))}
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

export default Projects;
