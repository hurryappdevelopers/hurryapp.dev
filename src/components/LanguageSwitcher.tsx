import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";

const flags: { lang: Language; flag: string; label: string }[] = [
  { lang: "pt", flag: "🇧🇷", label: "Português" },
  { lang: "en", flag: "🇺🇸", label: "English" },
  { lang: "de", flag: "🇩🇪", label: "Deutsch" },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      {flags.map(({ lang, flag, label }) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          title={label}
          className={`text-xl leading-none p-1.5 rounded-md transition-all ${
            language === lang
              ? "bg-primary/20 scale-110"
              : "opacity-60 hover:opacity-100 hover:bg-muted/50"
          }`}
        >
          {flag}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
