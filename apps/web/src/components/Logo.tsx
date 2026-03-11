export function Logo({ size = 'md', white = false }: { size?: 'sm' | 'md' | 'lg'; white?: boolean }) {
  const sizes = {
    sm: { box: 36, text: 'text-lg' },
    md: { box: 40, text: 'text-xl' },
    lg: { box: 48, text: 'text-2xl' },
  };
  const s = sizes[size];

  return (
    <div className="flex items-center gap-2.5">
      <svg width={s.box} height={s.box} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
          <linearGradient id="barGrad" x1="0" y1="32" x2="0" y2="16" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="white" stopOpacity="0.95" />
            <stop offset="100%" stopColor="white" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <rect width="48" height="48" rx="14" fill="url(#logoGrad)" />
        <rect width="48" height="24" rx="14" fill="white" opacity="0.08" />
        <rect x="11" y="24" width="6" height="12" rx="2" fill="url(#barGrad)" />
        <rect x="21" y="18" width="6" height="18" rx="2" fill="url(#barGrad)" />
        <rect x="31" y="13" width="6" height="23" rx="2" fill="url(#barGrad)" />
        <path d="M14 28L24 20L34 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
        <circle cx="34" cy="14" r="2" fill="white" opacity="0.6" />
      </svg>
      <div className="flex flex-col">
        <span className={`${s.text} font-extrabold tracking-tight leading-none`}>
          <span className={white ? 'text-white' : 'text-emerald-600'}>Sav</span>
          <span className={white ? 'text-emerald-300' : 'text-gray-900'}>do</span>
        </span>
        {size !== 'sm' && (
          <span className={`text-[9px] font-medium tracking-widest uppercase ${white ? 'text-emerald-300/50' : 'text-gray-400'}`}>
            Aqlli daftar
          </span>
        )}
      </div>
    </div>
  );
}
