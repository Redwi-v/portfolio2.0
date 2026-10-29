import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function CareerHighlights() {
  const { t } = useLanguage();

  return (
    <section
      aria-labelledby="career-highlights-title"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="career-highlights-title"
          className="text-3xl sm:text-4xl font-bold tracking-wider mb-12"
        >
          {t.highlights.title}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.highlights.items.map((item, index) => (
            <motion.article
              key={item.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="bg-card border-2 border-border p-6"
            >
              <p className="text-3xl sm:text-4xl font-bold text-[var(--neon-green)] mb-3">
                {item.value}
              </p>
              <p className="text-muted-foreground leading-relaxed">{item.label}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
