import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { useInView } from '../hooks/useInView';

export function Contact() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();

  return (
    <section id="contact" ref={ref} className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Фоновые эффекты */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-[var(--neon-green)]/5 blur-3xl rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/5 blur-3xl rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Заголовок секции */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '120px' } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="h-1.5 bg-[var(--neon-green)] mb-8 mx-auto lg:mx-0"
            />
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-wider mb-4">
              {t.contact.title} <span className="text-[var(--neon-green)]">{t.contact.subtitle}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              {t.contact.description}
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-12">
          {/* Левая часть - контактная информация */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Контактные карточки */}
            <div className="space-y-4">
              {[
                { icon: Mail, label: t.contact.email, value: 'andrey.kaysin.dev@gmail.com', color: '#00ff88' },
                { icon: Phone, label: t.contact.phone, value: '+7 (991) 077-49-34', color: '#3B82F6' },
                { icon: MapPin, label: t.contact.location, value: 'Russia', color: '#A855F7' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="group relative bg-card border-2 border-border p-6 overflow-hidden cursor-pointer"
                >
                  {/* Фоновый эффект */}
                  <motion.div
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 opacity-10"
                    style={{ backgroundColor: item.color }}
                  />

                  <div className="relative z-10 flex items-center gap-4">
                    <div
                      className="w-16 h-16 flex items-center justify-center"
                      style={{
                        backgroundColor: `${item.color}15`,
                        clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                      }}
                    >
                      <item.icon size={28} style={{ color: item.color }} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      <p className="font-bold text-lg">{item.value}</p>
                    </div>
                    <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: item.color }} />
                  </div>

                  {/* Декоративная линия */}
                  <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: item.color }} />
                </motion.div>
              ))}
            </div>

            {/* CTA блок */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative bg-gradient-to-br from-[var(--neon-green)]/20 via-transparent to-transparent p-8 border-2 border-[var(--neon-green)]/30 overflow-hidden"
            >
              {/* Анимированный фон */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 20, repeat: Infinity }}
                className="absolute -top-1/2 -right-1/2 w-full h-full bg-[var(--neon-green)]/10 blur-2xl"
              />

              <div className="relative z-10 space-y-6">
                <h3 className="text-2xl font-bold">Let's Work Together!</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
                </p>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 136, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    window.location.href='https://t.me/REDWI_a';
                  }}
                  className="group px-8 py-4 bg-[var(--neon-green)] text-black font-bold flex items-center gap-3 overflow-hidden relative"
                >
                  <motion.div
                    className="absolute inset-0 bg-black"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <Send size={20} className="relative z-10 group-hover:text-[var(--neon-green)]" />
                  <span className="relative z-10 group-hover:text-[var(--neon-green)]">{t.contact.getInTouch} Telegram</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
