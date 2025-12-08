import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  fullHeight?: boolean;
  showWatermark?: boolean;
  watermarkSrc?: string;
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = "", 
  dark = false,
  fullHeight = true,
  showWatermark = true,
  watermarkSrc = "/logo.png"
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className={`
        relative overflow-hidden px-6 py-20 md:py-32
        ${fullHeight ? 'min-h-screen flex items-center justify-center' : ''}
        ${dark ? 'bg-brand-dark text-white' : ''}
        ${className}
      `}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-6xl mx-auto z-10 relative"
      >
        {children}
      </motion.div>

      {showWatermark && (
        <img
          src={watermarkSrc}
          alt="Cascadia logo"
          className="pointer-events-none select-none absolute bottom-6 right-6 w-24 md:w-32"
        />
      )}
    </section>
  );
};
