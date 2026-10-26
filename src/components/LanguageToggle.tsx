import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLocale, Locale, LanguageOption } from '@/src/context/LocaleContext';

interface LanguageToggleProps {
  variant?: 'dropdown' | 'pills';
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  variant = 'dropdown',
  className = '',
}) => {
  const { locale, setLocale, languages, currentLanguage } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (variant === 'pills') {
    return (
      <div className={`flex items-center gap-1.5 p-1 bg-purple-950/70 rounded-xl border border-purple-800 ${className}`}>
        {languages.map((lang) => {
          const isActive = lang.code === locale;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => setLocale(lang.code)}
              className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1 transition-all cursor-pointer ${
                isActive
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'text-purple-200 hover:text-white hover:bg-purple-900/60'
              }`}
              title={lang.nativeLabel}
            >
              <span>{lang.flag}</span>
              <span className="uppercase text-[11px]">{lang.code}</span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-purple-900/60 hover:bg-purple-800/80 text-purple-100 hover:text-white border border-purple-700/60 transition-all text-xs font-bold cursor-pointer shadow-xs"
        aria-haspopup="true"
        aria-expanded={isOpen}
        title="Switch language / Yan èdè"
      >
        <Globe className="w-3.5 h-3.5 text-amber-300" />
        <span className="flex items-center gap-1">
          <span>{currentLanguage.flag}</span>
          <span className="uppercase tracking-wider font-extrabold text-[11px]">
            {currentLanguage.code}
          </span>
        </span>
        <ChevronDown
          className={`w-3 h-3 text-purple-300 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-white border border-purple-100 shadow-2xl py-1.5 z-50 animate-scale-in text-slate-900 overflow-hidden">
          <div className="px-3 py-1.5 border-b border-purple-100/80 bg-purple-50/50">
            <span className="text-[10px] font-extrabold text-purple-900 uppercase tracking-wider block">
              Select Language
            </span>
          </div>

          <div className="py-1">
            {languages.map((lang) => {
              const isSelected = lang.code === locale;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => {
                    setLocale(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-purple-50 text-purple-950 font-bold'
                      : 'text-slate-700 hover:bg-purple-50/60 hover:text-purple-900'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base leading-none">{lang.flag}</span>
                    <div>
                      <div className="font-semibold">{lang.label}</div>
                      <div className="text-[10px] text-slate-600 font-normal">
                        {lang.nativeLabel}
                      </div>
                    </div>
                  </div>
                  {isSelected && (
                    <Check className="w-4 h-4 text-purple-700 stroke-[2.5]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
