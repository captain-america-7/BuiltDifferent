// AUDITED & CLEANED — 2026-03-09
import React from 'react';
import { Shield, Wrench, Cloud, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import { fadeUp, staggerContainer, scaleIn } from '../utils/animations';

const Skills = () => {
    const categories = [
        {
            title: "Security & Threat Detection",
            icon: Shield,
            skills: ["Network Traffic Analysis", "Intrusion Detection Systems (IDS)", "Anomaly Detection & Alert Triage", "SIEM (Splunk / IBM QRadar)", "Vulnerability Assessment"]
        },
        {
            title: "SOC Tools & Platforms",
            icon: Wrench,
            skills: ["Wireshark", "Nmap", "Burp Suite", "SIEM / Log Analysis"]
        },
        {
            title: "Cloud & MLOps",
            icon: Cloud,
            skills: ["AWS (EC2, S3, IAM, SageMaker)", "Model Deployment", "CI/CD (GitHub Actions)", "Docker", "Kubernetes"]
        },
        {
            title: "Tools & Platforms",
            icon: Code2,
            skills: ["Python", "TensorFlow", "Pandas", "NumPy", "Jupyter Notebook", "Git", "GitHub", "Linux CLI", "Jira", "Agile"]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-[#000000] relative border-t border-[#00f5d4]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                        <span className="text-[#00f5d4]">&lt;</span> Technical Skills <span className="text-[#4da6ff]">/&gt;</span>
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-[#00f5d4] to-[#4da6ff] mx-auto rounded"></div>
                </motion.div>

                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {categories.map((category, index) => (
                        <motion.div variants={scaleIn} key={index} className="bg-[#000000] rounded-xl border border-[#00f5d4]/20 p-8 hover:border-[#00f5d4]/50 transition-colors glow-cyan group">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="p-3 bg-[#000000] rounded-lg border border-[#4da6ff]/30 group-hover:border-[#00f5d4] transition-colors text-[#4da6ff] group-hover:text-[#00f5d4]">
                                    <category.icon size={24} />
                                </div>
                                <h3 className="text-xl font-heading font-bold text-white">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, sIndex) => (
                                    <GlassCard noHoverY key={sIndex} className="px-4 py-2 text-gray-300 font-code text-sm rounded-full cursor-default glow-blue hover:glow-cyan !border-[#4da6ff]/30 hover:!border-[#00f5d4] hover:text-[#00f5d4]">
                                        {skill}
                                    </GlassCard>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
