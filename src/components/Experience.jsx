// AUDITED & CLEANED — 2026-03-09
import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp } from '../utils/animations';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-[#000000] relative border-t border-[#00f5d4]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                        <span className="text-[#00f5d4]">&lt;</span> Experience <span className="text-[#4da6ff]">/&gt;</span>
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-[#00f5d4] to-[#4da6ff] mx-auto rounded"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <motion.div initial={{ height: 0 }} whileInView={{ height: '100%' }} transition={{ duration: 1 }} viewport={{ once: true }} className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-[#00f5d4] to-[#4da6ff] rounded"></motion.div>

                    {/* Timeline Item */}
                    <div className="relative flex flex-col md:flex-row items-center justify-between mb-8 group">
                        {/* Left/Right Container based on index (only one item here, so keep it left or centered) */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} className="w-full md:w-5/12 ml-8 md:ml-0 md:text-right md:pr-8 pb-4 md:pb-0">
                            <div className="bg-[#000000] p-6 rounded-xl border border-[#00f5d4]/20 hover:border-[#00f5d4] transition-colors glow-blue hover:glow-cyan relative">
                                <div className="md:hidden absolute top-6 -left-[2.1rem] w-4 h-4 rounded-full bg-[#00f5d4] border-4 border-[#000000] shadow-[0_0_10px_#00f5d4]"></div>

                                <h3 className="text-2xl font-heading font-bold text-white mb-1">Junior Security Engineer</h3>
                                <div className="flex items-center md:justify-end text-[#4da6ff] mb-4 space-x-2 font-code text-sm">
                                    <Briefcase size={16} />
                                    <span>Workcohol</span>
                                </div>

                                <div className="flex items-center md:justify-end text-gray-400 mb-6 font-code text-xs space-x-2 bg-[#000000] px-3 py-1 rounded inline-flex border border-[#4da6ff]/30">
                                    <Calendar size={14} />
                                    <span>Sep 2025 – Jan 2026</span>
                                </div>

                                <ul className="space-y-3 text-left">
                                    <li className="flex items-start space-x-3 text-gray-300 font-body text-sm leading-relaxed">
                                        <CheckCircle2 size={18} className="text-[#00f5d4] shrink-0 mt-0.5" />
                                        <span>Cloud platform log analysis to detect anomalous behavior and identify root causes</span>
                                    </li>
                                    <li className="flex items-start space-x-3 text-gray-300 font-body text-sm leading-relaxed">
                                        <CheckCircle2 size={18} className="text-[#00f5d4] shrink-0 mt-0.5" />
                                        <span>Enforced access control policies and hardened cloud configurations</span>
                                    </li>
                                    <li className="flex items-start space-x-3 text-gray-300 font-body text-sm leading-relaxed">
                                        <CheckCircle2 size={18} className="text-[#00f5d4] shrink-0 mt-0.5" />
                                        <span>Followed structured incident response playbooks in Agile environment</span>
                                    </li>
                                    <li className="flex items-start space-x-3 text-gray-300 font-body text-sm leading-relaxed">
                                        <CheckCircle2 size={18} className="text-[#00f5d4] shrink-0 mt-0.5" />
                                        <span>Investigated and resolved 5–10 recurring deployment/runtime incidents per sprint with RCA documentation</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Center Node for Desktop */}
                        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#00f5d4] border-4 border-[#000000] shadow-[0_0_15px_#00f5d4] z-10 items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                        </motion.div>

                        {/* Empty space for other side */}
                        <div className="hidden md:block md:w-5/12"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
