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
      title: "Поговорим.online - платформа для онлайн-консультаций с психологами",
      category: (
        <div>
          <span>Задачи:</span> <br />
          ✅ Разработал клиентскую часть платформы для онлайн-консультаций с психологами; <br />
          ✅ Реализовал многоролевой интерфейс (клиент, психолог, администратор) с разными ЛК; <br />
          ✅ Внедрил сценарии: поиск специалистов, запись, оплата, видеозвонок, отзывы; <br />
          ✅ Интегрировал REST API, обеспечил адаптивность и производительность. <br />
        </div>
      ),
      tech: ["NextJs", "Redux", "SCSS", "Webpack", "WebSockets", "TypeScript", "team-based development"],
      image: "/works/pogovorim.png",
      gradient: "from-blue-500/20 to-purple-500/20",
      link: "https://pogovorim.online",
    },
    {
      title: "«Кронфорт» — жилой комплекс в Кронштадте",
      category: (
        <div>
          Задачи: <br />
          ✅ Разработал лендинг-сайт для жилого комплекса «Кронфорт» в Кронштадте; <br />
          ✅ Реализовал карточки квартир с фильтрацией по количеству комнат, площади и этажу; <br />
          ✅ Создал ипотечный калькулятор с расчётом платежей по разным банкам; <br />
          ✅ Интегрировал карту локации с отображением инфраструктуры: парк «Остров фортов», набережная, детский сад,
          лицей. <br />
        </div>
      ),
      tech: ["NextJs", "Redux", "SCSS", "Webpack", "TypeScript", "REST API", "team-based development"],
      image: "/works/kronfort.png",
      gradient: "from-blue-500/20 to-purple-500/20",
      link: "https://kronfort.ru/",
    },
    {
      title: "«Котофей» — интернет-магазин детской одежды",
      category: (
        <div>
          Задачи: <br />
          ✅ Разработал клиентскую часть интернет-магазина для бренда детской одежды; <br />
          ✅ Создал каталог товаров с фильтрацией по возрасту, сезону, размеру и типу обуви; <br />
          ✅ Реализовал корзину, личный кабинет, и интеграцию с платежными системами; <br />
          ✅ Настроил адаптивную вёрстку для удобного просмотра на всех устройствах. <br />
        </div>
      ),
      tech: ["NextJs", "Redux", "TypeScript", "SCSS", "Webpack", "REST API"],
      image: "/works/kotofey.png",
      gradient: "from-blue-500/20 to-purple-500/20",
      link: "https://kotofey.ru/",
    },
    {
      title: "«SaucerSwap» — децентрализованная биржа с гибридной моделью AMM + Order Book на Hedera",
      category: (
        <div>
          Задачи: <br /> ✅ brРазработал веб-приложение DEX, объединяющее AMM-пулы (V1/V2) и он-чейн ордербук V3 с
          off-chain матчингом и он-чейн сеттлментом, запущенный в mainnet 12 июня 2026 года; <br /> ✅ Реализовал Smart
          Order Router (SOR) — off-chain слой котирования, который сканирует пулы V1 и V2, вычисляет лучший AMM-маршрут
          (direct, multi-hop, split) и сравнивает его с котировкой V3 ордербука, автоматически выбирая более выгодное
          исполнение без необходимости пользователю переключаться между интерфейсами; <br /> ✅ Спроектировал и
          реализовал единый слой выбора котировок: пользователь вводит токены и сумму один раз, система показывает
          выбранный маршрут, minimum received и комиссию интерфейса перед исполнением; <br /> ✅ Разработал модуль
          «Explore», превращающий данные протокола в queryable intelligence, а также Dashboard и Leaderboard с публичным
          слоем аккаунтов;
        </div>
      ),
      tech: ["NextJs", "Cryptocurrency", "Telegram Wallet api", "Node.js", "Web3.js"],
      image: "/works/SaucerSwap.png",
      gradient: "from-blue-500/20 to-purple-500/20",
      link: "https://www.saucerswap.finance/",
    },

    {
      category: (
        <div>
          Задачи: <br />
          ✅ Разработал веб-приложение для создания форм любой сложности — от простых опросов до многошаговых
          калькуляторов с ветвлениями;
          <br />
          ✅ Спроектировал визуальный редактор с поддержкой условной логики появления полей и страниц в стиле «если, то»
          — пользователь настраивает зависимости без написания кода;
          <br />
          ✅ Реализовал движок калькуляторов с формулами: расчёт стоимости, скидок, итоговых значений на основе ответов
          пользователя в реальном времени;
          <br />
          ✅ Создал систему сложных «деревьев ответов» для многоуровневых опросов и квизов с ветвлением сценариев;
          <br />
          ✅ Настроил интеграции с CRM (Bitrix24) и внешними сервисами для автоматической передачи данных из форм в
          бизнес-процессы заказчика;
          <br />
          ✅ Обеспечил кастомизацию внешнего вида форм под бренд клиента, адаптивную вёрстку и высокую скорость
          загрузки;
          <br />✅ Реализовал аналитику и отслеживание конверсии по каждому шагу формы.
        </div>
      ),
      title: "«FormDesigner» — российский конструктор веб-форм со сложной условной логикой и калькуляторами",
      tech: ["интеграции с CRM (Bitrix24)", "React", "TypeScript", "conditional logic"],
      image: "/works/catalog.png",
      gradient: "from-blue-500/20 to-purple-500/20",
      link: "https://formdesigner.ru",
    },

    {
      category: (
        <div>
          Задачи: <br />
          ✅ Разработал цифровой опыт для премиального skincare-бренда, получивший номинацию Awwwards; <br />
          ✅ Создал визуальную систему на основе элегантной типографики, тактильных изображений и тонких интерактивных
          взаимодействий; <br />
          ✅ Реализовал баланс между научным позиционированием бренда и художественной подачей — «science meets
          artistry»; <br />
          ✅ Настроил стратегическое использование цвета, типографики и imagery для вовлечения пользователя на каждом
          уровне скролла; <br />
          ✅ Обеспечил адаптивную вёрстку и высокую производительность на всех устройствах. <br />
        </div>
      ),
      title: "«Maison Des Elites» — премиальный лендинг бренда по уходу за кожей, где наука встречается с искусством",
      tech: ["Next.js", "TypeScript", "кастомные scroll-driven анимации"],
      image: "/works/Maison.png",
      gradient: "from-blue-500/20 to-purple-500/20",
      link: "https://mdebeauty.com",
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-32 px-4 sm:px-6 lg:px-8 bg-card/30 relative overflow-hidden">
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
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-wider">{t.projects.title}</h2>
            </div>
            <p className="text-xl text-muted-foreground lg:pb-2">{t.projects.showcaseView}</p>
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
                  className={`relative aspect-[2.5/3] bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                >
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.2 : 1,
                      rotate: hoveredIndex === index ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-8xl"
                  >
                    <img className="object-bottom" src={`${project.image}`} />
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
                    {project.github && (
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
                    )}
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
                      <a href={project.link}>{project.title}</a>
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.category}</p>
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
