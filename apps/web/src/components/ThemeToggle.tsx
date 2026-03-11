import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
  const { dark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all active:scale-90 ${
        dark
          ? 'bg-white/5 text-amber-400 hover:bg-white/10 border border-white/5'
          : 'bg-gray-100 text-gray-400 hover:bg-gray-200 border border-gray-200/50'
      }`}
      aria-label="Toggle theme"
    >
      {dark ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}
