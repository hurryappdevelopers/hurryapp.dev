import { Linkedin } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import hurryIcon from "@/assets/hurryapp-icon.png";
import hurryText from "@/assets/hurryapp-text.png";
import devErica from "@/assets/dev-erica.jpg";
import devSamuel from "@/assets/dev-samuel.jpg";
import iconAcheumdev from "@/assets/icon-acheumdev.png";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

const Footer = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems: {labelKey: TranslationKey;scrollId: string;}[] = [
  { labelKey: "nav.home", scrollId: "home" },
  { labelKey: "nav.calculator", scrollId: "calculator" },
  { labelKey: "nav.services", scrollId: "services" },
  { labelKey: "nav.meeting", scrollId: "meeting" },
  { labelKey: "nav.contact", scrollId: "contact" }];


  return (
    <footer id="contact" className="py-16 bg-card border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={hurryIcon} alt="HurryApp" className="h-10" />
              <img src={hurryText} alt="HurryApp" className="h-5" />
            </div>
            <p className="text-muted-foreground text-sm">{t("footer.tagline")}</p>
          </div>

          <div>
            <h4 className="font-semibold font-display mb-4">{t("footer.solutions")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{t("footer.dev")}</li>
              <li>{t("footer.api")}</li>
              <li>{t("footer.design")}</li>
              <li>{t("footer.support")}</li>
            </ul>
          </div>

          










          

          <div>
            <h4 className="font-semibold font-display mb-4">Developers</h4>
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <img src={devErica} alt="Erica" className="w-14 h-14 rounded-full object-cover border-2 border-primary/40" />
                <span className="text-sm text-muted-foreground">Erica</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img src={devSamuel} alt="Samuel" className="w-14 h-14 rounded-full object-cover border-2 border-accent/40" />
                <span className="text-sm text-muted-foreground">Samuel</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold font-display mb-4">Links Profissionais</h4>
            <div className="flex items-center gap-3">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="https://acheumdev.com.br/profissional/devsamuel" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity w-7 h-7 overflow-hidden">
                    <img src={iconAcheumdev} alt="AcheUmDev" className="h-7 w-auto max-w-none" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>Portifólio Acheumdev de Samuel</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="https://www.linkedin.com/in/erica-coelho-amaral-4a227265/" target="_blank" rel="noopener noreferrer" className="border-2 border-primary/40 rounded-full p-1.5 hover:opacity-80 transition-opacity">
                    <Linkedin size={16} className="text-primary" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>Linkedin de Erica</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="https://www.linkedin.com/in/samuel-gra%C3%A7as-166202315/" target="_blank" rel="noopener noreferrer" className="border-2 border-accent/40 rounded-full p-1.5 hover:opacity-80 transition-opacity">
                    <Linkedin size={16} className="text-accent" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>Linkedin de Samuel</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 flex justify-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} HurryApp Developers. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>);

};

export default Footer;