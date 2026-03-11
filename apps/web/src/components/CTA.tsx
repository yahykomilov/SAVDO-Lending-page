import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight, Sparkles, Shield, Clock } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLang } from '../context/LangContext';

export function CTA() {
  const ref = useScrollReveal();
  const { dark } = useTheme();
  const { t } = useLang();

  return (
    <section className={`py-16 md:py-24 ${dark ? '' : ''}`} ref={ref}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16">
        <div className="fade-up relative bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 rounded-3xl p-8 md:p-14 lg:p-20 overflow-hidden">
          {/* Floating shapes */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-emerald-400/20 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-700/30 rounded-full blur-[60px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/[0.03] rounded-full" />

          {/* Dot pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:20px_20px]" />

          <div className="relative text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/10 mb-6">
              <Sparkles size={12} className="text-white/70" />
              <span className="text-xs font-bold text-white/80">{t('cta.badge')}</span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              {t('cta.title')}
            </h2>

            <p className="text-sm md:text-base text-emerald-100/50 mb-8 leading-relaxed max-w-lg mx-auto">
              {t('cta.desc')}
            </p>

            <a
              href="#pricing"
              className="shimmer inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-600 rounded-2xl font-extrabold text-sm md:text-base active:scale-[0.97] transition-all hover:shadow-lg hover:shadow-white/20"
            >
              {t('cta.btn')}
              <ArrowRight size={16} />
            </a>

            <div className="flex items-center justify-center gap-6 mt-6">
              <div className="flex items-center gap-1.5 text-white/40">
                <Shield size={12} />
                <span className="text-xs">{t('cta.noCard')}</span>
              </div>
              <div className="flex items-center gap-1.5 text-white/40">
                <Clock size={12} />
                <span className="text-xs">{t('cta.fast')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
