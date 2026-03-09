// AUDITED & CLEANED — 2026-03-09
import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', noHoverY = false, ...props }) => {
    return (
        <motion.div
            className={`glass-card ${className}`}
            whileHover={noHoverY ? undefined : { y: -4 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default GlassCard;
