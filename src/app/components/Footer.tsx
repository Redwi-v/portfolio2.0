import { Github, Linkedin, Twitter, Mail, ArrowUp, Heart, Code2,Send } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: t.nav.home, id: 'home' },
    { label: t.nav.about, id: 'about' },
    { label: t.nav.services, id: 'services' },
    { label: t.nav.projects, id: 'projects' },
  ];

  return (
    <footer className="relative py-20 px-4 sm:px-6 lg:px-8 border-t-2 border-[var(--neon-green)]/20 overflow-hidden">
      {/* Фоновые эффекты */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-[var(--neon-green)] blur-3xl rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Главная секция */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Брендинг */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <div className="text-4xl font-bold mb-4 relative inline-block">
                <span className="text-foreground">ANDR</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Creating exceptional digital experiences with cutting-edge technologies.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Code2 size={16} className="text-[var(--neon-green)]" />
              <span>{t.footer.builtWith}</span>
              <Heart size={14} className="text-[var(--neon-green)]" fill="currentColor" />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold text-[var(--neon-green)]">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  <button
                    onClick={() => {
                      document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex items-center gap-2 text-muted-foreground hover:text-[var(--neon-green)] transition-colors"
                  >
                    <span className="w-0 h-px bg-[var(--neon-green)] group-hover:w-4 transition-all" />
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold text-[var(--neon-green)]">Get In Touch</h3>

            <div className="space-y-4">
              <motion.a
                href="mailto:andrey.kaysin.dev@gmail.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-muted-foreground hover:text-[var(--neon-green)] transition-colors group"
              >
                <div className="w-10 h-10 border border-[var(--neon-green)]/30 group-hover:border-[var(--neon-green)] flex items-center justify-center transition-colors">
                  <Mail size={18} />
                </div>
                <span className="text-sm">andrey.kaysin.dev@gmail.com</span>
              </motion.a>

              <div className="flex gap-3 pt-4">
                {[
                  { icon: Github, href: 'https://github.com/Redwi-v', label: 'Github' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/redwi-%D0%BA%D0%B0%D0%B9%D1%81%D0%B8%D0%BD-1a712740a/#', label: 'LinkedIn' },
                  { icon: Send, href: 'https://t.me/REDWI_a', label: 'Telegram' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative group"
                    aria-label={social.label}
                  >
                    <div className="w-12 h-12 border-2 border-[var(--neon-green)]/30 group-hover:border-[var(--neon-green)] flex items-center justify-center transition-all clip-hexagon">
                      <social.icon size={20} />
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute -inset-1 bg-[var(--neon-green)]/20 blur-lg -z-10 clip-hexagon"
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Разделитель */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-[var(--neon-green)] to-transparent mb-8"
        />

        {/* Нижняя секция */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground text-center md:text-left ml-2"
          >
            {t.footer.copyright}
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="group relative w-12 h-12 bg-[var(--neon-green)] text-black flex items-center justify-center overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-black"
              initial={{ y: '100%' }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <ArrowUp size={20} className="relative z-10 group-hover:text-[var(--neon-green)]" />
          </motion.button>
        </div>

        {/* Декоративные элементы */}
        <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-[var(--neon-green)]/20" />
        <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[var(--neon-green)]/20" />
      </div>
    </footer>
  );
}
