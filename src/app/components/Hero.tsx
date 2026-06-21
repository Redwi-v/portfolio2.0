import {
  Download,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Code2,
  Terminal,
  Send,
} from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { ParticleBackground } from "./ParticleBackground";
import { useState, useEffect } from "react";

export function Hero() {
  const { t } = useLanguage();
  const [glitchText, setGlitchText] = useState(t.hero.titleHighlight);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchText((prev) => {
        const chars = "!@#$%^&*()_+-=[]{}|;:<>?/~`";
        const randomChar = chars[Math.floor(Math.random() * chars.length)];
        const pos = Math.floor(Math.random() * prev.length);
        const newText = prev.split("");
        newText[pos] = randomChar;
        setTimeout(() => setGlitchText(t.hero.titleHighlight), 50);
        return newText.join("");
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [t.hero.titleHighlight]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <ParticleBackground />

      {/* Геометрические фигуры на фоне */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-10 w-64 h-64 border-2 border-[var(--neon-green)]/10 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-40 left-20 w-32 h-32 border-2 border-[var(--neon-green)]/20"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
        />
        <motion.div
          animate={{
            x: [0, 100, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 right-1/4 w-48 h-48 bg-[var(--neon-green)]/5 blur-3xl rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex max-lg:flex-col gap-16 max-lg:gap-2 items-center pb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge с иконкой */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--neon-green)]/30 bg-[var(--neon-green)]/5 backdrop-blur-sm"
            >
              <Terminal size={16} className="text-[var(--neon-green)]" />
              <span className="text-sm text-[var(--neon-green)]">
                {t.hero.greeting}
              </span>
            </motion.div>

            {/* Креативный заголовок с глитч-эффектом */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <div className="relative inline-block">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-foreground">{t.hero.title}</span>
                  <br />
                  <span className="relative inline-block">
                    <span className="text-[var(--neon-green)] relative z-10">
                      {glitchText}
                    </span>
                    <motion.span
                      animate={{
                        opacity: [0, 0.5, 0],
                        x: [-2, 2, -2],
                      }}
                      transition={{
                        duration: 0.3,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                      className="absolute top-0 left-0 text-[var(--neon-green)] opacity-50"
                      style={{ textShadow: "2px 0 #ff00ff" }}
                    >
                      {t.hero.titleHighlight}
                    </motion.span>
                  </span>
                  <br />
                  <span className="relative">
                    {t.hero.subtitle}
                    <motion.div
                      animate={{ width: ["0%", "100%"] }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="absolute bottom-0 left-0 h-1 bg-[var(--neon-green)]"
                    />
                  </span>
                </h1>
              </div>
            </motion.div>

            {/* Креативное описание */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative pl-6 border-l-2 border-[var(--neon-green)]/50"
            >
              <p className="text-muted-foreground text-lg max-w-xl">
                {t.hero.description}
              </p>
            </motion.div>

            {/* Кнопки с уникальным дизайном */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(0, 255, 136, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const block = document.getElementById("contact");
                  if (!block) return;
                  block.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="group relative px-8 py-4 rounded-none bg-[var(--neon-green)] text-black font-bold overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-black"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center gap-2  transition-colors">
                  <Mail size={20} />
                  {t.hero.hireMeButton}
                </span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="../../../assets/AndreyKaysinDev.pdf"
                download={true}
                className="group relative px-8 py-4 rounded-none border-2 border-[var(--neon-green)] text-[var(--neon-green)] font-bold overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 "
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center gap-2  transition-colors">
                  <Download size={20} />
                  {t.hero.downloadCV}
                </span>
              </motion.a>
            </motion.div>

            {/* Социальные ссылки с креативным дизайном */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-3 pt-4"
            >
              {[
                { icon: Github, href: "https://github.com/Redwi-v", color: "#333" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/redwi-%D0%BA%D0%B0%D0%B9%D1%81%D0%B8%D0%BD-1a712740a/", color: "#0077b5" },
                { icon: Send, href: "https://t.me/REDWI_a", color: "#1da1f2" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative group"
                >
                  <div className="w-12 h-12 flex items-center justify-center border-2 border-[var(--neon-green)]/30 hover:border-[var(--neon-green)] transition-all clip-hexagon">
                    <social.icon
                      size={20}
                      className="relative z-10 group-hover:text-[var(--neon-green)] transition-colors"
                    />
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Креативная правая часть */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-[350px] min-lg:ml-auto"
          >
            <div className="relative w-full aspect-square max-w-lg">
              {/* Центральное изображение */}
              <motion.div
                animate={{
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="relative w-full h-full"
              >
                <div
                  className="absolute inset-8 bg-gradient-to-br from-[var(--neon-green)]/20 via-transparent to-[var(--neon-green)]/10 flex items-center justify-center backdrop-blur-sm border-2 border-[var(--neon-green)]/30"
                  style={{
                    clipPath:
                      "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                  }}
                >
                  <div className="w-52 h-52 rounded-full bg-gradient-to-br from-[var(--neon-green)]/30 to-transparent flex items-center justify-center text-7xl overflow-hidden">
                    <img src="../../../assets/avatar.jpg" />
                  </div>
                </div>
              </motion.div>

              {/* Вращающиеся элементы */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              ></motion.div>

              {/* Плавающие иконки кода */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 right-0 text-[var(--neon-green)]/30"
              >
                <Code2 size={48} />
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-10 left-0 text-[var(--neon-green)]/20"
              >
                <Terminal size={56} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
