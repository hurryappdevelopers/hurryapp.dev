import { Code, Layers, Monitor } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

const items: {icon: typeof Monitor;textKey: TranslationKey;}[] = [
{ icon: Monitor, textKey: "dev.item1" },
{ icon: Layers, textKey: "dev.item2" },
{ icon: Code, textKey: "dev.item3" }];


const DevelopmentSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">{t("dev.title")}</h2>
          <p className="text-muted-foreground leading-relaxed">{t("dev.desc1")}</p>
          <p className="text-muted-foreground mt-4">{t("dev.desc2")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {items.map((item, i) =>
          <div key={i} className={`rounded-2xl p-6 text-center backdrop-blur-md border border-border/30 ${
          i === 0 ? 'bg-gradient-to-br from-[hsl(320,80%,58%,0.15)] to-[hsl(280,70%,55%,0.08)]' :
          i === 1 ? 'bg-gradient-to-br from-[hsl(260,70%,55%,0.15)] to-[hsl(230,50%,50%,0.08)]' :
          'bg-gradient-to-br from-[hsl(230,50%,50%,0.15)] to-[hsl(320,80%,58%,0.08)]'}`
          }>
              <p className="text-sm leading-relaxed text-yellow-400">{t(item.textKey)}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default DevelopmentSection;