import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { useInView } from '../hooks/useInView';
import { useEffect, useState } from 'react';
import { Award, Briefcase, Coffee, Users } from 'lucide-react';

export function Stats() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();
  const [experience, setExperience] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [clients, setClients] = useState(0);
  const [coffee, setCoffee] = useState(0);

  useEffect(() => {
    if (isInView) {
      const experienceInterval = setInterval(() => {
        setExperience((prev) => {
          if (prev >= 3.5) {
            clearInterval(experienceInterval);
            return 3.5;
          }
          return prev + 1;
        });
      }, 100);

      const projectsInterval = setInterval(() => {
        setProjectsCount((prev) => {
          if (prev >= 25) {
            clearInterval(projectsInterval);
            return 25;
          }
          return prev + 1;
        });
      }, 20);

      const clientsInterval = setInterval(() => {
        setClients((prev) => {
          if (prev >= 25) {
            clearInterval(clientsInterval);
            return 25;
          }
          return prev + 1;
        });
      }, 30);

      const coffeeInterval = setInterval(() => {
        setCoffee((prev) => {
          if (prev >= 9999) {
            clearInterval(coffeeInterval);
            return 9999;
          }
          return prev + 100;
        });
      }, 10);

      return () => {
        clearInterval(experienceInterval);
        clearInterval(projectsInterval);
        clearInterval(clientsInterval);
        clearInterval(coffeeInterval);
      };
    }
  }, [isInView]);

  const stats = [
    {
      icon: Award,
      value: experience,
      suffix: '+',
      label: t.stats.experience,
      color: '#00ff88',
    },
    {
      icon: Briefcase,
      value: projectsCount,
      suffix: '+',
      label: t.stats.projects,
      color: '#3B82F6',
    },
    {
      icon: Coffee,
      value: coffee,
      suffix: '+',
      label: 'Cups of Coffee',
      color: '#F59E0B',
    },
  ];

  return (
    <section ref={ref} className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-20 w-64 h-64 bg-[var(--neon-green)]/5 blur-3xl rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 blur-3xl rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              {/* Главная карточка */}
              <motion.div
                whileHover={{ y: -10 }}
                className="relative h-full bg-card border-2 border-border p-8 overflow-hidden"
              >
                {/* Градиентный фон при наведении */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.5, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-0 right-0 w-32 h-32 blur-3xl rounded-full"
                  style={{ backgroundColor: `${stat.color}20` }}
                />

                <div className="relative z-10 space-y-6">
                  {/* Иконка */}
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-0 border-2 border-dashed rounded-full"
                      style={{ borderColor: `${stat.color}30` }}
                    />
                    <div
                      className="relative w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${stat.color}15` }}
                    >
                      <stat.icon size={28} style={{ color: stat.color }} />
                    </div>
                  </div>

                  {/* Значение */}
                  <div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
                      className="text-5xl lg:text-6xl font-bold mb-2"
                      style={{ color: stat.color }}
                    >
                      {stat.value.toLocaleString()}{stat.suffix}
                    </motion.div>
                    <p className="text-muted-foreground font-medium pb-1.5 block">{stat.label}</p>
                  </div>

                  {/* Прогресс бар */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-muted">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: '100%' } : {}}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                      className="h-full"
                      style={{
                        background: `linear-gradient(90deg, ${stat.color}, ${stat.color}80)`,
                      }}
                    />
                  </div>
                </div>

                {/* Декоративные линии */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                  <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-current to-transparent" />
                  <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-current to-transparent" />
                  <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-current to-transparent" />
                </div>
              </motion.div>

              {/* Неоновая тень при наведении */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute -inset-1 blur-xl -z-10"
                style={{
                  background: `linear-gradient(135deg, ${stat.color}40, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Декоративные элементы внизу */}
        <div className="mt-16 flex justify-center gap-2">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ width: 0 }}
              animate={isInView ? { width: i === 1 ? '64px' : '32px' } : {}}
              transition={{ delay: i * 0.1 + 1, duration: 0.5 }}
              className="h-1 bg-[var(--neon-green)]"
              style={{ opacity: i === 1 ? 1 : 0.3 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
