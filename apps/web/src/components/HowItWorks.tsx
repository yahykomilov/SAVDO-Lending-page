import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLang } from '../context/LangContext';
import { UserPlus, PackagePlus, ShoppingBag, BarChart2 } from 'lucide-react';

const steps = [
  { key: '1', icon: UserPlus },
  { key: '2', icon: PackagePlus },
  { key: '3', icon: ShoppingBag },
  { key: '4', icon: BarChart2 },
];

export function HowItWorks() {
  const ref = useScrollReveal();
  const { t } = useLang();

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-emerald-600 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-400/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-700/30 rounded-full blur-[100px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 lg:px-16">
        <div className="text-center mb-10 md:mb-14 fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/10 mb-4">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse-dot" />
            <span className="text-xs font-bold text-white/80 uppercase tracking-wider">{t('how.badge')}</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">{t('how.title')}</h2>
          <p className="text-sm md:text-base text-emerald-100/50 mt-2">{t('how.desc')}</p>
        </div>

        {/* Desktop: horizontal stepper */}
        <div className="hidden md:grid md:grid-cols-4 gap-6 stagger">
          {steps.map((step, i) => (
            <div key={step.key} className="fade-up relative text-center">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute top-7 left-[60%] right-[-40%] h-px bg-white/10 hidden md:block" />
              )}

              <div className="relative inline-flex flex-col items-center">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/10 mb-4">
                  <step.icon size={22} className="text-white" />
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-lg flex items-center justify-center text-xs font-extrabold text-emerald-600">
                  {i + 1}
                </span>
              </div>

              <h3 className="text-sm font-bold text-white mb-1">{t(`how.${step.key}.title`)}</h3>
              <p className="text-xs text-emerald-100/40 leading-relaxed max-w-[200px] mx-auto">{t(`how.${step.key}.desc`)}</p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden relative stagger">
          <div className="absolute left-[19px] top-6 bottom-6 w-px bg-white/10" />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={step.key} className="fade-up flex items-start gap-4 relative">
                <div className="relative z-10 shrink-0">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10">
                    <step.icon size={16} className="text-white" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-md flex items-center justify-center text-[10px] font-extrabold text-emerald-600">
                    {i + 1}
                  </span>
                </div>
                <div className="pt-1.5">
                  <h3 className="text-sm font-bold text-white mb-0.5">{t(`how.${step.key}.title`)}</h3>
                  <p className="text-xs text-emerald-100/40 leading-relaxed">{t(`how.${step.key}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
