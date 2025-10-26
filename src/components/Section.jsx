import React from 'react';
import { motion } from 'framer-motion';
export function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      {title && (
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h2>
          {subtitle && <p className="mt-2 text-black/60 max-w-3xl">{subtitle}</p>}
        </motion.div>
      )}
      {children}
    </section>
  );
}
