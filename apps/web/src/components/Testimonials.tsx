import { useScrollReveal } from '../hooks/useScrollReveal';
import { Star } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLang } from '../context/LangContext';

const testimonials = [
  { key: '1', initials: 'AK', gradient: 'from-emerald-500 to-teal-500' },
  { key: '2', initials: 'NR', gradient: 'from-violet-500 to-purple-500' },
  { key: '3', initials: 'BU', gradient: 'from-blue-500 to-cyan-500' },
];

export function Testimonials() {
  const ref = useScrollReveal();
  const { dark } = useTheme();
  const { t } = useLang();

  return (
    <section id="testimonials" className={`py-16 md:py-24 ${dark ? '' : 'bg-gray-50/50'}`} ref={ref}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16">
        <div className="text-center mb-10 md:mb-14 fade-up">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-4 ${
            dark ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-emerald-50 border-emerald-100'
          }`}>
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse-dot" />
            <span className={`text-xs font-bold uppercase tracking-wider ${dark ? 'text-emerald-400' : 'text-emerald-600'}`}>
              {t('testimonials.badge')}
            </span>
          </div>
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight ${dark ? 'text-white' : 'text-gray-900'}`}>
            {t('testimonials.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5 stagger">
          {testimonials.map((item) => (
            <div
              key={item.key}
              className={`fade-up rounded-2xl p-5 md:p-6 border card-hover ${
                dark
                  ? 'bg-white/[0.03] border-white/5 hover:border-emerald-500/20'
                  : 'bg-white border-gray-100 hover:border-emerald-200'
              }`}
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className={`text-sm leading-[1.8] mb-5 ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
                &ldquo;{t(`testimonials.${item.key}.text`)}&rdquo;
              </p>

              <div className={`flex items-center gap-3 pt-4 border-t ${dark ? 'border-white/5' : 'border-gray-100'}`}>
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                  <span className="text-white text-xs font-bold">{item.initials}</span>
                </div>
                <div>
                  <p className={`text-sm font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                    {t(`testimonials.${item.key}.name`)}
                  </p>
                  <p className={`text-xs ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
                    {t(`testimonials.${item.key}.role`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
