// AUDITED & CLEANED — 2026-03-09
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Certifications', href: '#certifications' },
    ];

    // Toggle body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <>
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="fixed top-0 left-0 w-full z-[100] flex justify-center mt-6 transition-all duration-300 pointer-events-none"
                style={{
                    paddingTop: scrolled ? '0' : '0.5rem'
                }}
            >
                <div
                    className={`
                        flex items-center justify-between px-6 py-3 transition-all duration-400 ease-out pointer-events-auto
                        rounded-full border border-white/10
                        ${scrolled
                            ? 'w-[85%] max-w-4xl bg-[#0a0a0f]/95 shadow-[0_8px_32px_rgba(0,0,0,0.5)] py-2.5'
                            : 'w-[92%] max-w-6xl bg-gradient-to-br from-[#14141e]/80 to-[#0a0a0f]/90 shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
                        }
                    `}
                    style={{
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                    }}
                >
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 font-heading font-bold text-xl tracking-wider text-white hover:text-cyan transition-colors">
                        <span className="w-2 h-2 rounded-full bg-[#6c63ff]"></span>
                        NALLA ARUNTEJ_
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-white transition-colors text-sm font-code relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#6c63ff] rounded transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:block">
                        <a href="#contact" className="bg-[#6c63ff] hover:bg-[#5b54e5] text-white px-6 py-2.5 rounded-full font-code text-sm font-semibold transition-all duration-300 border border-white/10 shadow-[0_4px_15px_rgba(108,99,255,0.3)] hover:shadow-[0_6px_20px_rgba(108,99,255,0.4)] hover:-translate-y-0.5 inline-block">
                            Contact Me
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden flex items-center z-[60]">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[50] bg-[#050505]/98 backdrop-blur-xl flex flex-col items-center justify-center pt-20"
                    >
                        <div className="flex flex-col items-center space-y-8 w-full px-6">
                            {links.map((link, index) => (
                                <motion.a
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                                    key={link.name}
                                    href={link.href}
                                    className="text-3xl font-heading font-bold text-white hover:text-[#6c63ff] transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.a
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 * links.length, duration: 0.3 }}
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="w-full max-w-xs text-center bg-[#6c63ff] hover:bg-[#5b54e5] text-white px-8 py-4 rounded-full font-code text-lg font-semibold transition-all shadow-[0_4px_15px_rgba(108,99,255,0.3)] mt-8"
                            >
                                Contact Me
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
