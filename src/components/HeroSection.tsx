import devicesHero from "@/assets/devices-hero.png";
import watermark from "@/assets/watermark.png";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-[85vh] flex items-center pt-20 relative overflow-hidden bg-background">
      <div className="absolute inset-0 opacity-100" style={{ backgroundImage: `url(${watermark})`, backgroundRepeat: 'repeat', backgroundSize: 'auto 100%' }} />
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="animate-fade-in">
          <p className="font-medium mb-4 tracking-wider uppercase text-sm text-yellow-400">{t("hero.tag")}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6">
            {t("hero.title1")}
            <span className="text-gradient">{t("hero.title2")}</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed">
            {t("hero.description")}
          </p>
          <button
            onClick={scrollToContact}
            className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">

            {t("hero.cta")}
          </button>
        </div>

        <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <img src={devicesHero} alt="App screens on multiple devices" className="max-w-full h-auto" />
        </div>
      </div>
    </section>);

};

export default HeroSection;