import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import watermark from "@/assets/watermark.png";
import type { TranslationKey } from "@/i18n/translations";

import defaultImg1 from "@/assets/how-step-1.png";
import defaultImg2 from "@/assets/how-step-2.png";
import defaultImg3 from "@/assets/how-step-3.png";
import defaultImg4 from "@/assets/how-step-4.png";

const defaultImages = [defaultImg1, defaultImg2, defaultImg3, defaultImg4];

const steps: {titleKey: TranslationKey;descKey: TranslationKey;}[] = [
{ titleKey: "how.understand.title", descKey: "how.understand.desc" },
{ titleKey: "how.plan.title", descKey: "how.plan.desc" },
{ titleKey: "how.build.title", descKey: "how.build.desc" },
{ titleKey: "how.improve.title", descKey: "how.improve.desc" }];


const HowWeWorkSection = () => {
  const { t } = useLanguage();
  const [images, setImages] = useState<string[]>(defaultImages);

  const handleImageUpload = (index: number) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/png,image/webp,image/svg+xml";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const url = URL.createObjectURL(file);
        setImages((prev) => {
          const next = [...prev];
          next[index] = url;
          return next;
        });
      }
    };
    input.click();
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${watermark})`,
          backgroundRepeat: "repeat",
          backgroundSize: "auto 100%",
        }}
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-12">{t("how.title")}</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) =>
          <div key={step.titleKey} className="glass-card p-6 text-center relative">
              

            
              <button
              onClick={() => handleImageUpload(i)}
              className="mx-auto mb-4 block cursor-pointer hover:opacity-80 transition-opacity"
              title="Clique para trocar a imagem">
              
                <img src={images[i]} alt={t(step.titleKey)} className="w-12 h-12 object-contain" />
              </button>
              <h3 className="font-semibold font-display mb-2">{t(step.titleKey)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t(step.descKey)}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default HowWeWorkSection;