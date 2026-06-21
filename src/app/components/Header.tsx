import { useState, useEffect } from 'react';
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: t.nav.home, id: 'home' },
    { label: t.nav.about, id: 'about' },
    { label: t.nav.services, id: 'services' },
    { label: t.nav.projects, id: 'projects' },
    { label: t.nav.contact, id: 'contact' },
  ];

  if (!mounted) return null;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 min-lg:h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold tracking-wider"
          >
            <span className="text-foreground">ANDR</span>
          </motion.div>

          <nav className="hidden min-lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/80 hover:text-[var(--neon-green)] transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--neon-green)] transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
          </nav>

          <div className="hidden min-lg:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-card hover:bg-accent transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
              className="p-2 px-3 rounded-lg bg-card hover:bg-accent transition-colors flex items-center gap-2"
            >
              <Globe size={20} />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 rounded-lg bg-[var(--neon-green)] text-black font-medium hover:bg-[var(--neon-green-dark)] transition-colors shadow-lg shadow-[var(--neon-green)]/20"
            >
              {t.hero.hireMeButton}
            </motion.button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-lg:hidden p-2 rounded-lg bg-card hover:bg-accent transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`${ mobileMenuOpen ? '' : 'hidden' } min-lg:hidden bg-card/95 backdrop-blur-lg border-t border-border`}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-foreground/80 hover:text-[var(--neon-green)] transition-colors"
                >
                  {item.label}
                </button>
              ))}

              <div className="flex gap-4 pt-4 border-t border-border">
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="flex-1 p-2 rounded-lg bg-accent hover:bg-muted transition-colors flex items-center justify-center gap-2"
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                  <span className="text-sm">{theme === 'dark' ? 'Light' : 'Dark'}</span>
                </button>

                <button
                  onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
                  className="flex-1 p-2 rounded-lg bg-accent hover:bg-muted transition-colors flex items-center justify-center gap-2"
                >
                  <Globe size={20} />
                  <span className="text-sm font-medium">{language.toUpperCase()}</span>
                </button>
              </div>

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full px-6 py-3 rounded-lg bg-[var(--neon-green)] text-black font-medium hover:bg-[var(--neon-green-dark)] transition-colors"
              >
                {t.hero.hireMeButton}
              </button>
            </div>
          </motion.div>
        )
      </AnimatePresence>
    </motion.header>
  );
}
