import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { useInView } from '../hooks/useInView';
import { useState } from 'react';

export function Testimonials() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      text: t.testimonials.testimonial1.text,
      author: t.testimonials.testimonial1.author,
      role: t.testimonials.testimonial1.role,
      rating: 5,
      company: 'Tech Solutions',
      avatar: '👩',
    },
    {
      text: t.testimonials.testimonial2.text,
      author: t.testimonials.testimonial2.author,
      role: t.testimonials.testimonial2.role,
      rating: 5,
      company: 'StartupX',
      avatar: '👨',
    },
    {
      text: t.testimonials.testimonial3.text,
      author: t.testimonials.testimonial3.author,
      role: t.testimonials.testimonial3.role,
      rating: 5,
      company: 'Digital Agency',
      avatar: '👩',
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-32 px-4 sm:px-6 lg:px-8 bg-card/30 relative overflow-hidden">
      {/* Фоновые эффекты */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--neon-green)]/5 blur-3xl rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[var(--neon-green)]" />
            <Quote className="text-[var(--neon-green)]" size={32} />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[var(--neon-green)]" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wider mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-xl text-muted-foreground">{t.testimonials.subtitle}</p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="bg-card border-2 border-border p-8 sm:p-12 lg:p-16 relative overflow-hidden">
                  {/* Огромная кавычка на фоне */}
                  <div className="absolute -top-8 -left-4 text-[20rem] text-[var(--neon-green)]/5 font-bold select-none leading-none">
                    "
                  </div>

                  {/* Градиентный угол */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[var(--neon-green)]/10 to-transparent" />

                  <div className="relative z-10 space-y-8">
                    {/* Рейтинг */}
                    <div className="flex gap-1">
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star size={24} className="text-[var(--neon-green)] fill-[var(--neon-green)]" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Текст отзыва */}
                    <p className="text-xl sm:text-2xl leading-relaxed">
                      "{testimonials[activeIndex].text}"
                    </p>

                    {/* Автор */}
                    <div className="flex items-center justify-between pt-8 border-t-2 border-[var(--neon-green)]/20">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--neon-green)]/30 to-transparent flex items-center justify-center text-3xl">
                            {testimonials[activeIndex].avatar}
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[var(--neon-green)] rounded-full flex items-center justify-center">
                            <Quote size={12} className="text-black" />
                          </div>
                        </div>
                        <div>
                          <p className="font-bold text-lg">{testimonials[activeIndex].author}</p>
                          <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</p>
                          <p className="text-xs text-[var(--neon-green)]">{testimonials[activeIndex].company}</p>
                        </div>
                      </div>

                      {/* Номер отзыва */}
                      <div className="hidden sm:block text-6xl font-bold text-[var(--neon-green)]/20">
                        0{activeIndex + 1}
                      </div>
                    </div>
                  </div>

                  {/* Декоративные углы */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[var(--neon-green)]" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[var(--neon-green)]" />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Кнопки навигации */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4 -mx-4 sm:-mx-20">
              <motion.button
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="pointer-events-auto w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[var(--neon-green)] text-black flex items-center justify-center shadow-lg hover:shadow-[var(--neon-green)]/50"
              >
                <ChevronLeft size={24} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="pointer-events-auto w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[var(--neon-green)] text-black flex items-center justify-center shadow-lg hover:shadow-[var(--neon-green)]/50"
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </div>

          {/* Индикаторы */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="relative group"
              >
                <div
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === index ? 'bg-[var(--neon-green)] w-12' : 'bg-muted w-2'
                  }`}
                />
                {activeIndex === index && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -inset-1 bg-[var(--neon-green)]/20 blur-md rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
