import { Code2, Palette, Zap, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { useInView } from '../hooks/useInView';

export function Services() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();

  const services = [
    {
      icon: Code2,
      title: t.services.webDev.title,
      description: t.services.webDev.description,
      color: '#3B82F6',
      number: '01',
    },
    {
      icon: Palette,
      title: t.services.uiDesign.title,
      description: t.services.uiDesign.description,
      color: '#A855F7',
      number: '02',
    },
    {
      icon: Zap,
      title: t.services.optimization.title,
      description: t.services.optimization.description,
      color: '#00ff88',
      number: '03',
    },
  ];

  return (
    <section id="services" ref={ref} className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[var(--neon-green)]/5 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="w-12 h-12 border-2 border-[var(--neon-green)] rounded-full"
            />
            <div className="h-px flex-1 bg-gradient-to-r from-[var(--neon-green)] to-transparent" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            {t.services.title}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative"
            >
              {/* Карточка с наклоном при наведении */}
              <motion.div
                whileHover={{
                  rotateY: 5,
                  rotateX: -5,
                  scale: 1.02
                }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative h-full bg-card border-2 border-border p-8 overflow-hidden"
                style={{
                  perspective: '1000px',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Огромный номер на фоне */}
                <div className="absolute -top-8 -right-8 text-[12rem] font-bold text-[var(--neon-green)]/5 select-none">
                  {service.number}
                </div>

                {/* Градиентный фон при наведении */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-[var(--neon-green)]/5 to-transparent"
                />

                <div className="relative z-10 space-y-6">
                  {/* Иконка с эффектом */}
                  <div className="relative w-20 h-20">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-0 border-2 border-dashed border-[var(--neon-green)]/30 rounded-full"
                    />
                    <div
                      className="absolute inset-2 flex items-center justify-center rounded-full"
                      style={{ backgroundColor: `${service.color}15` }}
                    >
                      <service.icon size={32} style={{ color: service.color }} />
                    </div>
                  </div>

                  {/* Номер услуги */}
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-[var(--neon-green)]">{service.number}</span>
                    <div className="h-px flex-1 bg-[var(--neon-green)]/30" />
                  </div>

                  {/* Заголовок */}
                  <h3 className="text-2xl font-bold group-hover:text-[var(--neon-green)] transition-colors">
                    {service.title}
                  </h3>

                  {/* Описание */}
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                </div>

                {/* Декоративные углы */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--neon-green)]/30" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--neon-green)]/30" />
              </motion.div>

              {/* Тень с неоновым эффектом */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute -inset-1 bg-gradient-to-r from-[var(--neon-green)]/20 to-transparent blur-xl -z-10"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
