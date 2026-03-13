import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";
import iconResponsive from "@/assets/icon-responsive.png";
import iconCustom from "@/assets/icon-custom.png";
import iconIntegration from "@/assets/icon-integration.png";
import iconDesign from "@/assets/icon-design.png";
import iconFaster from "@/assets/icon-faster.png";
import iconPlatforms from "@/assets/icon-platforms.png";

const features: {image: string;titleKey: TranslationKey;descKey: TranslationKey;}[] = [
{ image: iconResponsive, titleKey: "features.responsive.title", descKey: "features.responsive.desc" },
{ image: iconCustom, titleKey: "features.custom.title", descKey: "features.custom.desc" },
{ image: iconIntegration, titleKey: "features.integration.title", descKey: "features.integration.desc" },
{ image: iconDesign, titleKey: "features.design.title", descKey: "features.design.desc" },
{ image: iconFaster, titleKey: "features.faster.title", descKey: "features.faster.desc" },
{ image: iconPlatforms, titleKey: "features.platforms.title", descKey: "features.platforms.desc" }];

const FeaturesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-4 text-yellow-400">{t("features.title")}</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto leading-relaxed">{t("features.subtitle")}</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) =>
          <div key={feature.titleKey} className="glass-card p-6 hover:border-primary/30 transition-colors group">
              <img src={feature.image} alt="" className="w-12 h-12 object-contain mb-4" />
              <h3 className="text-lg font-semibold font-display mb-2">{t(feature.titleKey)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t(feature.descKey)}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default FeaturesSection;