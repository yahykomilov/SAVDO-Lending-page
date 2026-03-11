import { useScrollReveal } from '../hooks/useScrollReveal';
import { Check, X, Zap, Crown, Rocket } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLang } from '../context/LangContext';

export function Pricing() {
  const ref = useScrollReveal();
  const { dark } = useTheme();
  const { t } = useLang();

  const plans = [
    {
      name: 'Standart',
      price: t('pricing.free'),
      priceNote: t('pricing.freeNote'),
      icon: Zap,
      popular: false,
      accent: false,
      features: [
        { text: t('pricing.s.1'), ok: true },
        { text: t('pricing.s.2'), ok: true },
        { text: t('pricing.s.3'), ok: true },
        { text: t('pricing.s.4'), ok: false },
        { text: t('pricing.s.5'), ok: false },
      ],
    },
    {
      name: 'Pro',
      price: '29,900',
      priceNote: t('pricing.month'),
      icon: Crown,
      popular: true,
      accent: true,
      features: [
        { text: t('pricing.p.1'), ok: true },
        { text: t('pricing.p.2'), ok: true },
        { text: t('pricing.p.3'), ok: true },
        { text: t('pricing.p.4'), ok: true },
        { text: t('pricing.p.5'), ok: true },
      ],
    },
    {
      name: 'Premium',
      price: '49,900',
      priceNote: t('pricing.month'),
      icon: Rocket,
      popular: false,
      accent: false,
      features: [
        { text: t('pricing.pr.1'), ok: true },
        { text: t('pricing.pr.2'), ok: true },
        { text: t('pricing.pr.3'), ok: true },
        { text: t('pricing.pr.4'), ok: true },
        { text: t('pricing.pr.5'), ok: true },
      ],
    },
  ];

  return (
    <section id="pricing" className={`py-16 md:py-24 ${dark ? '' : ''}`} ref={ref}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16">
        <div className="text-center mb-10 md:mb-14 fade-up">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-4 ${
            dark ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-emerald-50 border-emerald-100'
          }`}>
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse-dot" />
            <span className={`text-xs font-bold uppercase tracking-wider ${dark ? 'text-emerald-400' : 'text-emerald-600'}`}>
              {t('pricing.badge')}
            </span>
          </div>
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight ${dark ? 'text-white' : 'text-gray-900'}`}>
            {t('pricing.title')}
          </h2>
          <p className={`text-sm md:text-base mt-2 max-w-lg mx-auto ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
            {t('pricing.desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 stagger items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`fade-up rounded-2xl overflow-hidden transition-all ${
                plan.accent
                  ? 'gradient-border md:-mt-4 md:mb-4'
                  : ''
              }`}
            >
              <div className={`rounded-2xl overflow-hidden ${
                plan.accent
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                  : dark
                    ? 'bg-white/[0.03] text-white border border-white/5'
                    : 'bg-white text-gray-900 border border-gray-100'
              }`}>
                {plan.popular && (
                  <div className="bg-emerald-600/50 text-center py-1.5">
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">{t('pricing.popular')}</span>
                  </div>
                )}

                <div className="p-5 md:p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        plan.accent ? 'bg-white/15' : dark ? 'bg-emerald-500/10' : 'bg-gray-50'
                      }`}>
                        <plan.icon size={18} className={plan.accent ? 'text-white' : 'text-emerald-500'} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold">{plan.name}</h3>
                        <p className={`text-[11px] ${
                          plan.accent ? 'text-emerald-100/60' : dark ? 'text-gray-500' : 'text-gray-400'
                        }`}>{plan.priceNote}</p>
                      </div>
                    </div>
                    <span className="text-2xl md:text-3xl font-extrabold">{plan.price}</span>
                  </div>

                  <div className="space-y-2.5 mb-6">
                    {plan.features.map((f) => (
                      <div key={f.text} className="flex items-center gap-2.5">
                        {f.ok ? (
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                            plan.accent ? 'bg-white/20' : dark ? 'bg-emerald-500/10' : 'bg-emerald-50'
                          }`}>
                            <Check size={10} className={plan.accent ? 'text-white' : 'text-emerald-500'} />
                          </div>
                        ) : (
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                            plan.accent ? 'bg-white/10' : dark ? 'bg-white/5' : 'bg-gray-100'
                          }`}>
                            <X size={10} className={plan.accent ? 'text-white/30' : dark ? 'text-gray-600' : 'text-gray-300'} />
                          </div>
                        )}
                        <span className={`text-sm ${
                          f.ok ? '' : (plan.accent ? 'text-white/30' : dark ? 'text-gray-600' : 'text-gray-300')
                        }`}>{f.text}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full py-3 md:py-3.5 rounded-xl font-bold text-sm active:scale-[0.97] transition-all ${
                    plan.accent
                      ? 'bg-white text-emerald-600 hover:bg-emerald-50'
                      : dark
                        ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}>
                    {plan.price === t('pricing.free') ? t('pricing.startFree') : t('pricing.choose')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
