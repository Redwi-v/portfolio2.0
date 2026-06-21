import { ArrowRight, Calendar, Clock, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { useInView } from '../hooks/useInView';

export function Blog() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();

  const blogPosts = [
    {
      title: 'Building Modern Web Apps with React 19',
      date: 'May 11, 2026',
      readTime: '8 min read',
      category: 'React',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      icon: '⚛️',
    },
    {
      title: 'The Future of CSS: New Features in 2026',
      date: 'May 8, 2026',
      readTime: '6 min read',
      category: 'CSS',
      gradient: 'from-purple-500/20 to-pink-500/20',
      icon: '🎨',
    },
    {
      title: 'TypeScript Best Practices for Large Projects',
      date: 'May 5, 2026',
      readTime: '12 min read',
      category: 'TypeScript',
      gradient: 'from-green-500/20 to-teal-500/20',
      icon: '📘',
    },
  ];

  return (
    <section id="blog" ref={ref} className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Фоновые эффекты */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--neon-green)]/5 blur-3xl rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <TrendingUp className="text-[var(--neon-green)]" size={32} />
            <div className="h-px flex-1 bg-gradient-to-r from-[var(--neon-green)] to-transparent" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wider mb-4">
            {t.blog.title}
          </h2>
          <p className="text-xl text-muted-foreground">{t.blog.description}</p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-8">
          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="group relative"
          >
            <div className="relative h-full bg-gradient-to-br from-[var(--neon-green)] to-[var(--neon-green-dark)] p-12 overflow-hidden min-h-[500px] flex flex-col justify-between">
              {/* Анимированный фон */}
              <motion.div
                animate={{
                  x: [0, 100, 0],
                  y: [0, 50, 0],
                  rotate: [0, 90, 0]
                }}
                transition={{ duration: 20, repeat: Infinity }}
                className="absolute -top-20 -right-20 w-64 h-64 bg-black/10 rounded-full blur-2xl"
              />

              <div className="relative z-10 space-y-6">
                <div className="inline-block px-4 py-2 bg-black/20 backdrop-blur-sm text-black font-bold">
                  FEATURED POST
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
                  {t.blog.title}
                </h3>
                <p className="text-lg text-black/80 max-w-xl">
                  {t.blog.description}
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                className="group/btn relative self-start flex items-center gap-3 px-8 py-4 bg-black text-[var(--neon-green)] font-bold overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-[var(--neon-green)]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 group-hover/btn:text-black">{t.blog.readMore}</span>
                <ArrowRight size={20} className="relative z-10 group-hover/btn:text-black" />
              </motion.button>

              {/* Декоративные элементы */}
              <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-black/20" />
              <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-black/20" />
            </div>
          </motion.div>

          {/* Blog Posts List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="group relative bg-card border-2 border-border p-6 cursor-pointer overflow-hidden"
              >
                {/* Градиентный фон */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute inset-0 bg-gradient-to-br ${post.gradient}`}
                />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 flex items-center justify-center bg-[var(--neon-green)]/10 text-2xl">
                        {post.icon}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[var(--neon-green)] uppercase tracking-wider">
                          {post.category}
                        </span>
                        <h4 className="font-bold text-lg group-hover:text-[var(--neon-green)] transition-colors">
                          {post.title}
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Прогресс бар */}
                  <div className="h-1 bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                      className="h-full bg-[var(--neon-green)]"
                    />
                  </div>
                </div>

                {/* Стрелка при наведении */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute top-6 right-6"
                >
                  <ArrowRight className="text-[var(--neon-green)]" size={24} />
                </motion.div>
              </motion.div>
            ))}

            {/* View All Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 border-2 border-[var(--neon-green)] text-[var(--neon-green)] font-bold hover:bg-[var(--neon-green)] hover:text-black transition-all flex items-center justify-center gap-2"
            >
              <span>View All Posts</span>
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
