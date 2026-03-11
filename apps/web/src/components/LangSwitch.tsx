import { useLang, Lang } from '../context/LangContext';
import { useTheme } from '../context/ThemeContext';

const langs: { code: Lang; label: string }[] = [
  { code: 'uz', label: "O'z" },
  { code: 'ru', label: 'Ру' },
  { code: 'en', label: 'En' },
];

export function LangSwitch() {
  const { lang, setLang } = useLang();
  const { dark } = useTheme();

  return (
    <div className={`flex rounded-xl overflow-hidden border ${
      dark ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-gray-100'
    }`}>
      {langs.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`px-2.5 py-1.5 text-[10px] font-bold transition-all ${
            lang === l.code
              ? 'bg-emerald-500 text-white'
              : dark ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-gray-700'
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
