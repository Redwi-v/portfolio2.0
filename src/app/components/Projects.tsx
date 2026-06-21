import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { useInView } from "../hooks/useInView";
import { useState } from "react";

export function Projects() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Pogovorim.online - Psychologists services",
      category: "Web Development",
      tech: ["NextJs", "Node.js", "MongoDB"],
      image: "👩‍💼",
      gradient: "from-blue-500/20 to-purple-500/20",
      github: "https://pogovorim.online",
      link: "https://pogovorim.online",
    },
        {
      title: "Invesrerium quests - Cryptocurrency",
      category: "Web Development",
      tech: ["NextJs", "Node.js", "Cryptocurrency", ],
      image: "💵",
      gradient: "from-blue-500/20 to-purple-500/20",
      github: "https://github.com/Redwi-v/invesrerium_quests",
      link: "https://invesrerium-quests.vercel.app/",
    },
            {
      title: "Pet project",
      category: "Web Development",
      tech: ["React", "Node.js", "MongoDB"],
      image: "🍕",
      gradient: "from-blue-500/20 to-purple-500/20",
      github: "https://github.com/Redwi-v/pizza",
      link: "https://pizza-5477d.web.app",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-32 px-4 sm:px-6 lg:px-8 bg-card/30 relative overflow-hidden"
    >
      {/* Фоновый эффект */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-[var(--neon-green)]/10 blur-3xl rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          {/* Креативный заголовок */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "100px" } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="h-1 bg-[var(--neon-green)] mb-6"
              />
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-wider">
                {t.projects.title}
              </h2>
            </div>
            <p className="text-xl text-muted-foreground lg:pb-2">
              {t.projects.showcaseView}
            </p>
          </div>
        </motion.div>

        {/* Сетка проектов */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="relative h-full bg-card border-2 border-border overflow-hidden">
                {/* Изображение проекта */}
                <div
                  className={`relative aspect-[4/3] bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                >
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.2 : 1,
                      rotate: hoveredIndex === index ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-8xl"
                  >
                    {project.image}
                  </motion.div>

                  {/* Overlay при наведении */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center gap-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-14 h-14 rounded-full bg-[var(--neon-green)] flex items-center justify-center text-black"
                      onClick={() => {
                        window.location.href = project.link;
                      }}
                    >
                      <ExternalLink size={24} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-14 h-14 rounded-full border-2 border-[var(--neon-green)] flex items-center justify-center text-[var(--neon-green)]"
                      onClick={() => {
                        window.location.href = project.github;
                      }}
                    >
                      <Github size={24} />
                    </motion.button>
                  </motion.div>

                  {/* Неоновая линия сверху */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: hoveredIndex === index ? "100%" : 0 }}
                    className="absolute top-0 left-0 h-1 bg-[var(--neon-green)]"
                  />
                </div>

                {/* Информация о проекте */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--neon-green)] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.category}
                    </p>
                  </div>

                  {/* Технологии */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs border border-[var(--neon-green)]/30 text-[var(--neon-green)] rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Прогресс бар (декоративный) */}
                  <div className="pt-4">
                    <div className="h-1 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "100%" } : {}}
                        transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                        className="h-full bg-gradient-to-r from-[var(--neon-green)] to-[var(--neon-green-dark)]"
                      />
                    </div>
                  </div>
                </div>

                {/* Декоративные углы */}
                <motion.div
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0.3,
                  }}
                  className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[var(--neon-green)]"
                />
                <motion.div
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0.3,
                  }}
                  className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[var(--neon-green)]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
