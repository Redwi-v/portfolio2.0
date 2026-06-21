import { ThemeProvider } from 'next-themes';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Stats } from './components/Stats';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { PageLoader } from './components/PageLoader';

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <LanguageProvider>
        <PageLoader />
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
          <Header />
          <main>
            <Hero />
            <About />
            <Services />
            <Stats />
            <Projects />
            {/* <Blog /> */}
            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
