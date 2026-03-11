import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problems } from './components/Problems';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { useTheme } from './context/ThemeContext';

export default function App() {
  const { dark } = useTheme();

  return (
    <div className={`relative min-h-screen overflow-x-hidden ${dark ? 'bg-gray-950' : 'bg-white'}`}>
      {/* Animated gradient blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className={`absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[120px] animate-blob ${dark ? 'bg-emerald-900/20' : 'bg-emerald-200/30'}`} />
        <div className={`absolute top-1/3 -left-40 w-[400px] h-[400px] rounded-full blur-[120px] animate-blob-reverse ${dark ? 'bg-purple-900/15' : 'bg-purple-200/20'}`} />
        <div className={`absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full blur-[120px] animate-blob ${dark ? 'bg-blue-900/10' : 'bg-blue-200/15'}`} style={{ animationDelay: '2s' }} />
      </div>

      <Navbar />
      <Hero />
      <Problems />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
