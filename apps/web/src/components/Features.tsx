import { useScrollReveal } from '../hooks/useScrollReveal';
import { Package, ShoppingCart, BarChart3, TrendingUp, Bell, Smartphone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLang } from '../context/LangContext';

const features = [
  { key: '1', icon: Package, gradient: 'from-emerald-500 to-emerald-600' },
  { key: '2', icon: ShoppingCart, gradient: 'from-blue-500 to-blue-600' },
  { key: '3', icon: BarChart3, gradient: 'from-violet-500 to-violet-600' },
  { key: '4', icon: TrendingUp, gradient: 'from-amber-500 to-orange-500' },
  { key: '5', icon: Bell, gradient: 'from-rose-500 to-pink-500' },
  { key: '6', icon: Smartphone, gradient: 'from-teal-500 to-cyan-500' },
];

export function Features() {
  const ref = useScrollReveal();
  const { dark } = useTheme();
  const { t } = useLang();

  return (
    <section id="features" className={`py-16 md:py-24 relative ${dark ? '' : ''}`} ref={ref}>
      <div className={`absolute inset-0 -z-10 ${dark ? 'grid-lines-dark' : 'grid-lines'}`} />

      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16">
        <div className="text-center mb-10 md:mb-14 fade-up">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-4 ${
            dark ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-emerald-50 border-emerald-100'
          }`}>
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse-dot" />
            <span className={`text-xs font-bold uppercase tracking-wider ${dark ? 'text-emerald-400' : 'text-emerald-600'}`}>
              {t('features.badge')}
            </span>
          </div>
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight ${dark ? 'text-white' : 'text-gray-900'}`}>
            {t('features.title')}
          </h2>
          <p className={`text-sm md:text-base mt-2 max-w-lg mx-auto ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
            {t('features.desc')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 stagger">
          {features.map((f) => (
            <div
              key={f.key}
              className={`fade-up group rounded-2xl p-5 md:p-6 border card-hover ${
                dark
                  ? 'bg-white/[0.03] border-white/5 hover:border-emerald-500/20'
                  : 'bg-white border-gray-100 hover:border-emerald-200'
              }`}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${f.gradient} rounded-xl flex items-center justify-center shadow-sm mb-4 group-hover:shadow-glow-green transition-shadow`}>
                <f.icon size={20} className="text-white" />
              </div>
              <h3 className={`text-sm md:text-base font-bold mb-1.5 ${dark ? 'text-white' : 'text-gray-900'}`}>
                {t(`features.${f.key}.title`)}
              </h3>
              <p className={`text-xs md:text-sm leading-relaxed ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
                {t(`features.${f.key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
