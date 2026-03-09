// AUDITED & CLEANED — 2026-03-09
import React from 'react';
import { Users, BookOpen, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, scaleIn } from '../utils/animations';

const Extracurricular = () => {
    const activities = [
        {
            role: "Mentor",
            club: "AMC FOSS Club",
            date: "Apr 2023 – Mar 2024",
            location: "Chennai",
            icon: Users,
            description: "Mentored 15+ students in Linux CLI for cybersecurity coursework; reduced server management task time by 20%."
        },
        {
            role: "Member",
            club: "Cognizance Club",
            date: "Mar 2022 – Jul 2024",
            location: "Chennai",
            icon: BookOpen,
            description: "Led CTF event for 30+ members using penetration testing: reconnaissance, exploitation, vulnerability analysis."
        }
    ];

    return (
        <section id="extracurricular" className="py-20 bg-[#000000] relative border-t border-[#00f5d4]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                        <span className="text-[#00f5d4]">&lt;</span> Extracurricular <span className="text-[#4da6ff]">/&gt;</span>
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-[#00f5d4] to-[#4da6ff] mx-auto rounded"></div>
                </motion.div>

                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {activities.map((activity, index) => (
                        <motion.div variants={scaleIn} key={index} className="bg-[#000000] rounded-xl border border-[#00f5d4]/20 p-8 hover:border-[#00f5d4] transition-colors glow-blue hover:glow-cyan relative group overflow-hidden h-full">
                            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#00f5d4] to-[#4da6ff]"></div>

                            <div className="flex items-center space-x-4 mb-6">
                                <div className="p-3 bg-[#000000] rounded-lg border border-[#4da6ff]/30 group-hover:border-[#00f5d4] text-[#4da6ff] group-hover:text-[#00f5d4] transition-colors">
                                    <activity.icon size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-heading font-bold text-white">{activity.role}</h3>
                                    <div className="text-sm font-code text-[#00f5d4]">{activity.club}</div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 mb-6 text-sm font-code text-gray-400">
                                <div className="flex items-center space-x-2 bg-[#000000] px-3 py-1.5 rounded border border-[#4da6ff]/20">
                                    <Calendar size={14} className="text-[#4da6ff]" />
                                    <span>{activity.date}</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-[#000000] px-3 py-1.5 rounded border border-[#4da6ff]/20">
                                    <MapPin size={14} className="text-[#4da6ff]" />
                                    <span>{activity.location}</span>
                                </div>
                            </div>

                            <p className="text-gray-300 font-body text-base leading-relaxed pl-4 border-l-2 border-[#4da6ff]/30">
                                {activity.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Extracurricular;
