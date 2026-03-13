import { useState } from "react";
import hurryIcon from "@/assets/hurryapp-icon.png";
import hurryText from "@/assets/hurryapp-text.png";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import type { TranslationKey } from "@/i18n/translations";

const navItems: { labelKey: TranslationKey; scrollId: string }[] = [
  { labelKey: "nav.home", scrollId: "home" },
  { labelKey: "nav.calculator", scrollId: "calculator" },
  { labelKey: "nav.services", scrollId: "services" },
  { labelKey: "nav.meeting", scrollId: "meeting" },
  { labelKey: "nav.contact", scrollId: "contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-2">
          <img src={hurryIcon} alt="HurryApp" className="h-10" />
          <img src={hurryText} alt="HurryApp" className="h-6 hidden sm:block" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.scrollId}
              onClick={() => scrollTo(item.scrollId)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t(item.labelKey)}
            </button>
          ))}
          <LanguageSwitcher />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            className="text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border/30 px-4 pb-4">
          {navItems.map((item) => (
            <button
              key={item.scrollId}
              onClick={() => scrollTo(item.scrollId)}
              className="block w-full text-left py-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              {t(item.labelKey)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
