import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight, BookOpen, XCircle, Clock, TrendingDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLang } from '../context/LangContext';

const problems = [
  { key: '1', icon: BookOpen, gradient: 'from-red-500 to-rose-500', bg: 'bg-red-500/10' },
  { key: '2', icon: XCircle, gradient: 'from-orange-500 to-amber-500', bg: 'bg-orange-500/10' },
  { key: '3', icon: Clock, gradient: 'from-amber-500 to-yellow-500', bg: 'bg-amber-500/10' },
  { key: '4', icon: TrendingDown, gradient: 'from-rose-500 to-pink-500', bg: 'bg-rose-500/10' },
];

export function Problems() {
  const ref = useScrollReveal();
  const { dark } = useTheme();
  const { t } = useLang();

  return (
    <section className={`py-16 md:py-24 ${dark ? '' : 'bg-gray-50/50'}`} ref={ref}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16">
        <div className="text-center mb-10 md:mb-14 fade-up">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-4 ${
            dark ? 'bg-red-500/10 border-red-500/20' : 'bg-red-50 border-red-100'
          }`}>
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse-dot" />
            <span className={`text-xs font-bold uppercase tracking-wider ${dark ? 'text-red-400' : 'text-red-500'}`}>
              {t('problems.badge')}
            </span>
          </div>
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight ${dark ? 'text-white' : 'text-gray-900'}`}>
            {t('problems.title')}
          </h2>
          <p className={`text-sm md:text-base mt-2 max-w-lg mx-auto ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
            {t('problems.desc')}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 stagger">
          {problems.map((p) => (
            <div
              key={p.key}
              className={`fade-up rounded-2xl p-5 md:p-6 border card-hover ${
                dark
                  ? 'bg-white/[0.03] border-white/5 hover:border-white/10'
                  : 'bg-white border-gray-100 hover:border-gray-200'
              }`}
            >
              <div className={`w-11 h-11 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center mb-4 shadow-sm`}>
                <p.icon size={18} className="text-white" />
              </div>
              <h3 className={`text-sm md:text-base font-bold mb-1 ${dark ? 'text-white' : 'text-gray-900'}`}>
                {t(`problems.${p.key}.title`)}
              </h3>
              <p className={`text-xs md:text-sm leading-relaxed ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
                {t(`problems.${p.key}.desc`)}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 md:mt-12 fade-up">
          <div className={`flex items-center gap-2 px-5 py-2.5 rounded-full border ${
            dark ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-emerald-50 border-emerald-100'
          }`}>
            <span className={`text-sm font-bold ${dark ? 'text-emerald-400' : 'text-emerald-600'}`}>
              {t('problems.solution')}
            </span>
            <ArrowRight size={14} className="text-emerald-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
