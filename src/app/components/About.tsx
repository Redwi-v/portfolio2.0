import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { useInView } from '../hooks/useInView';
import { Code2, Sparkles, Layers } from 'lucide-react';

export function About() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();

  const skills = [
  { name: 'React' },
  { name: 'React 19' },
  { name: 'Next.js' },
  { name: 'Next.js 15' },
  { name: 'App Router' },
  { name: 'TypeScript' },
  { name: 'JavaScript' },
  { name: 'ES6+' },
  { name: 'TanStack Query' },
  { name: 'React Query' },
  { name: 'Zustand' },
  { name: 'Redux Toolkit' },
  { name: 'RTK Query' },
  { name: 'MobX' },
  { name: 'React Hook Form' },
  { name: 'Zod' },
  { name: 'TailwindCSS' },
  { name: 'shadcn/ui' },
  { name: 'SCSS' },
  { name: 'CSS Modules' },
  { name: 'Styled Components' },
  { name: 'PostCSS' },
  { name: 'Webpack' },
  { name: 'Vite' },
  { name: 'ESBuild' },
  { name: 'Turbopack' },
  { name: 'Vitest' },
  { name: 'Jest' },
  { name: 'React Testing Library' },
  { name: 'Playwright' },
  { name: 'Storybook' },
  { name: 'REST API' },
  { name: 'GraphQL' },
  { name: 'Axios' },
  { name: 'Fetch API' },
  { name: 'WebSockets' },
  { name: 'SSE' },
  { name: 'Docker' },
  { name: 'Docker Compose' },
  { name: 'Git' },
  { name: 'GitHub' },
  { name: 'GitLab CI' },
  { name: 'CI/CD' },
  { name: 'GitHub Actions' },
  { name: 'Nginx' },
  { name: 'Figma' },
  { name: 'JIRA' },
  { name: 'Agile' },
  { name: 'Scrum' },
  { name: 'Kanban' },
  { name: 'Performance Optimization' },
  { name: 'Lazy Loading' },
  { name: 'Dynamic Imports' },
  { name: 'SSR' },
  { name: 'SSG' },
  { name: 'ISR' },
  { name: 'React Server Components' },
  { name: 'Streaming' },
  { name: 'Accessibility (a11y)' },
  { name: 'i18n' },
  { name: 'Node.js' },
  { name: 'Prisma' },
  { name: 'Redis' },
  { name: 'MySQL' },
  { name: 'SaaS' },
  { name: 'AI' },
  ];

  return (
    <section id="about" ref={ref} className="py-32 px-4 sm:px-6 lg:px-8 bg-card/30 relative overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[var(--neon-green)]/10 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[var(--neon-green)]/5 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Левая часть - брендинг */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: '100px' } : {}}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="h-1.5 bg-[var(--neon-green)] mb-6"
              />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-wider mb-4">
                {t.about.title}
              </h2>
            </div>

            {/* Креативный логотип */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative"
            >
              <div className="inline-block relative">
                {/* Главный текст */}
                <div className="text-7xl sm:text-8xl lg:text-9xl font-bold tracking-wider relative">
                  <motion.span
                    animate={{
                      textShadow: [
                        '0 0 10px rgba(0, 255, 136, 0.3)',
                        '0 0 30px rgba(0, 255, 136, 0.5)',
                        '0 0 10px rgba(0, 255, 136, 0.3)',
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-foreground"
                  >
                    ANDR
                  </motion.span>
                </div>

                {/* Декоративные элементы */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute -top-4 -right-4 w-12 h-12 border-2 border-dashed border-[var(--neon-green)]/50 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-[var(--neon-green)]/30"
                  style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-2xl sm:text-3xl font-bold tracking-wider text-[var(--neon-green)]">
                {t.about.heading}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                {t.about.description}
              </p>
            </motion.div>

            {/* Иконки технологий */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              {[
                { icon: Code2, label: 'Clean Code' },
                { icon: Sparkles, label: 'Modern Design' },
                { icon: Layers, label: 'Best Practices' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex items-center gap-2 px-4 py-2 bg-card border border-[var(--neon-green)]/30 cursor-pointer"
                >
                  <item.icon size={20} className="text-[var(--neon-green)]" />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Правая часть - навыки */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-card border-2 border-border p-8 lg:p-10 relative overflow-hidden">
              {/* Декоративный фон */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[var(--neon-green)]/10 to-transparent" />

              <div className="relative z-10 space-y-6">
                <h4 className="text-2xl font-bold mb-8">Skills</h4>
                <div className='flex gap-3 flex-wrap'>

                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    className="space-y-3"
                  >
                    <div className="">
                      <span className="font-bold">{skill.name},</span>
                    </div>
                  </motion.div>
                ))}
                </div>
              </div>

              {/* Декоративные углы */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[var(--neon-green)]" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[var(--neon-green)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
