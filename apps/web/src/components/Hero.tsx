import { ArrowRight, BarChart3, Package, TrendingUp, Zap, Play } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLang } from '../context/LangContext';
import { useCountUp } from '../hooks/useCountUp';

export function Hero() {
  const { dark } = useTheme();
  const { t } = useLang();

  const traders = useCountUp(1200);
  const accounts = useCountUp(50);
  const rating = useCountUp(49);

  return (
    <section className={`relative overflow-hidden ${dark ? '' : ''}`}>
      {/* Background mesh */}
      <div className={`absolute inset-0 -z-10 ${dark ? 'mesh-bg-dark' : 'mesh-bg'}`} />
      <div className={`absolute inset-0 -z-10 ${dark ? 'dot-pattern-dark' : 'dot-pattern'}`} />

      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16 pt-12 md:pt-20 lg:pt-28 pb-12 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column — text */}
          <div>
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 ${
              dark ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-emerald-50 border-emerald-100'
            }`}>
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse-dot" />
              <span className={`text-xs font-semibold ${dark ? 'text-emerald-400' : 'text-emerald-700'}`}>{t('hero.badge')}</span>
            </div>

            <h1 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5 ${dark ? 'text-white' : 'text-gray-900'}`}>
              {t('hero.title1')}{' '}
              <span className="text-gradient-hero">{t('hero.title2')}</span>
            </h1>

            <p className={`text-base md:text-lg leading-relaxed mb-8 max-w-lg ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
              {t('hero.desc')}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="#pricing"
                className="shimmer inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-bold text-sm shadow-lg shadow-emerald-500/20 hover:shadow-glow-green active:scale-[0.97] transition-all"
              >
                {t('hero.cta')}
                <ArrowRight size={16} />
              </a>
              <a
                href="#how-it-works"
                className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-sm border active:scale-[0.97] transition-all ${
                  dark
                    ? 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <Play size={14} className="fill-current" />
                {t('hero.demo')}
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8">
              <div ref={traders.ref} className="text-center">
                <p className={`text-xl md:text-2xl font-extrabold ${dark ? 'text-white' : 'text-gray-900'}`}>
                  {traders.count.toLocaleString()}+
                </p>
                <p className={`text-xs ${dark ? 'text-gray-500' : 'text-gray-400'}`}>{t('hero.traders')}</p>
              </div>
              <div ref={accounts.ref} className="text-center">
                <p className={`text-xl md:text-2xl font-extrabold ${dark ? 'text-white' : 'text-gray-900'}`}>
                  {accounts.count}M+
                </p>
                <p className={`text-xs ${dark ? 'text-gray-500' : 'text-gray-400'}`}>{t('hero.accounts')}</p>
              </div>
              <div ref={rating.ref} className="text-center">
                <p className={`text-xl md:text-2xl font-extrabold ${dark ? 'text-white' : 'text-gray-900'}`}>
                  4.{rating.count < 10 ? rating.count : 9}
                </p>
                <p className={`text-xs ${dark ? 'text-gray-500' : 'text-gray-400'}`}>{t('hero.rating')}</p>
              </div>
            </div>
          </div>

          {/* Right column — App preview */}
          <div className="relative">
            {/* Glow behind card */}
            <div className={`absolute -inset-4 rounded-3xl blur-2xl ${dark ? 'bg-emerald-500/10' : 'bg-emerald-500/5'}`} />

            <div className={`relative rounded-2xl lg:rounded-3xl border overflow-hidden ${
              dark
                ? 'bg-gray-900/80 border-white/10 shadow-glass-dark'
                : 'bg-white border-gray-200/50 shadow-glass'
            }`}>
              {/* Header bar */}
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-4 md:px-6 md:py-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-emerald-100/70 text-[11px] md:text-xs font-medium">{t('hero.today')}</p>
                    <p className="text-white text-xl md:text-2xl font-extrabold">
                      2,450,000 <span className="text-sm font-medium text-emerald-200/70">{t('hero.sum')}</span>
                    </p>
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/15 rounded-xl flex items-center justify-center">
                    <TrendingUp size={18} className="text-white" />
                  </div>
                </div>
              </div>

              <div className="p-4 md:p-5 space-y-3">
                {/* Mini stats */}
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { label: t('hero.profit'), value: '680K', icon: TrendingUp, bg: dark ? 'bg-emerald-500/10' : 'bg-emerald-50', color: 'text-emerald-500' },
                    { label: t('hero.sales'), value: '12 ta', icon: Package, bg: dark ? 'bg-blue-500/10' : 'bg-blue-50', color: 'text-blue-500' },
                    { label: t('hero.products'), value: '48', icon: BarChart3, bg: dark ? 'bg-violet-500/10' : 'bg-violet-50', color: 'text-violet-500' },
                  ].map((s) => (
                    <div key={s.label} className={`${s.bg} rounded-xl p-3 text-center`}>
                      <s.icon size={14} className={`${s.color} mx-auto mb-1`} />
                      <p className={`text-sm font-extrabold ${dark ? 'text-white' : 'text-gray-900'}`}>{s.value}</p>
                      <p className={`text-[10px] ${dark ? 'text-gray-500' : 'text-gray-400'}`}>{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Product list */}
                {[
                  { name: 'Olma', qty: '50 kg', price: '8,000', trend: '+12%', emoji: '🍎' },
                  { name: "Go'sht", qty: '15 kg', price: '95,000', trend: '+8%', emoji: '🥩' },
                  { name: 'Shakar', qty: '30 kg', price: '15,000', trend: '+5%', emoji: '🧂' },
                ].map((item) => (
                  <div key={item.name} className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
                    dark ? 'bg-white/5 hover:bg-white/8' : 'bg-gray-50 hover:bg-gray-100/70'
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-base ${
                        dark ? 'bg-white/10' : 'bg-white border border-gray-100'
                      }`}>
                        {item.emoji}
                      </div>
                      <div>
                        <p className={`text-[13px] font-bold ${dark ? 'text-white' : 'text-gray-800'}`}>{item.name}</p>
                        <p className={`text-[11px] ${dark ? 'text-gray-500' : 'text-gray-400'}`}>{item.qty}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`text-[13px] font-extrabold ${dark ? 'text-white' : 'text-gray-900'}`}>{item.price}</p>
                      <p className="text-[11px] text-emerald-500 font-bold">{item.trend}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div className={`absolute -bottom-3 -left-3 md:-bottom-4 md:-left-6 px-4 py-2.5 rounded-xl animate-float ${
              dark ? 'glass shadow-glass-dark' : 'glass-light shadow-glass'
            }`}>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <Zap size={12} className="text-white fill-white" />
                </div>
                <div>
                  <p className={`text-[10px] font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>+12% foyda</p>
                  <p className={`text-[9px] ${dark ? 'text-gray-400' : 'text-gray-500'}`}>Bu hafta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
