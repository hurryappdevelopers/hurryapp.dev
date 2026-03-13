import { useState, useRef } from "react";
import { ExternalLink } from "lucide-react";
import portfolioAdega from "@/assets/portfolio-adega.png";
import portfolioLogo2 from "@/assets/portfolio-logo2.jpg";
import portfolioSuperloja from "@/assets/portfolio-superloja.jpg";
import portfolioAdegaDetail from "@/assets/portfolio-adega-detail.jpg";
import portfolioEncomendeartLogo from "@/assets/portfolio-encomendeart-logo.jpg";
import portfolioEncomendeartDetail from "@/assets/portfolio-encomendeart-detail.jpg";
import portfolioCoordenacaoLogo from "@/assets/portfolio-coordenacao-logo.jpg";
import portfolioCoordenacaoDetail from "@/assets/portfolio-coordenacao-detail.jpg";
import portfolioLocarcarroLogo from "@/assets/portfolio-locarcarro-logo.png";
import portfolioLocarcarroDetail from "@/assets/portfolio-locarcarro-detail.jpg";
import portfolioUseplusLogo from "@/assets/portfolio-useplus-logo.png";
import portfolioUseplusDetail from "@/assets/portfolio-useplus-detail.jpg";
import portfolioRapidoLogo from "@/assets/portfolio-rapidonobairro-logo.jpg";
import portfolioRapidoDetail from "@/assets/portfolio-rapidonobairro-detail.png";
import portfolioYnosLogo from "@/assets/portfolio-ynos-logo.jpg";
import portfolioYnosDetail from "@/assets/portfolio-ynos-detail.jpg";
import portfolioEsteiraLogo from "@/assets/portfolio-esteira-logo.jpg";
import portfolioEsteiraDetail from "@/assets/portfolio-esteira-detail.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

interface PortfolioItem {
  image: string;
  name: string;
  details?: {
    photos: string[];
    description: string;
    descriptionKey: string;
    link?: string;
  };
}

const portfolioItems: PortfolioItem[] = [
  {
    image: portfolioAdega,
    name: "Adega Ventura",
    details: {
      photos: [portfolioAdegaDetail],
      description: "",
      descriptionKey: "portfolio.adega.description",
      link: "https://adegaventura.com.br/version-test",
    },
  },
  {
    image: portfolioLogo2,
    name: "Super Loja",
    details: {
      photos: [portfolioSuperloja],
      description: "",
      descriptionKey: "portfolio.client.description",
    },
  },
  {
    image: portfolioEncomendeartLogo,
    name: "EncomendeArt",
    details: {
      photos: [portfolioEncomendeartDetail],
      description: "",
      descriptionKey: "portfolio.encomendeart.description",
    },
  },
  {
    image: portfolioCoordenacaoLogo,
    name: "Coordenação de Equipe",
    details: {
      photos: [portfolioCoordenacaoDetail],
      description: "",
      descriptionKey: "portfolio.coordenacao.description",
      link: "https://coordenao-71272.bubbleapps.io/version-test/login",
    },
  },
  {
    image: portfolioLocarcarroLogo,
    name: "Locar Carro Elétrico",
    details: {
      photos: [portfolioLocarcarroDetail],
      description: "",
      descriptionKey: "portfolio.locarcarro.description",
      link: "https://ericacoelhoama.bubbleapps.io/version-test",
    },
  },
  {
    image: portfolioUseplusLogo,
    name: "Use+",
    details: {
      photos: [portfolioUseplusDetail],
      description: "",
      descriptionKey: "portfolio.useplus.description",
      link: "https://usemais.app/",
    },
  },
  {
    image: portfolioRapidoLogo,
    name: "Rápido no Bairro",
    details: {
      photos: [portfolioRapidoDetail],
      description: "",
      descriptionKey: "portfolio.rapidonobairro.description",
      link: "https://rapidonobairro.com.br/",
    },
  },
  {
    image: portfolioYnosLogo,
    name: "Ynos",
    details: {
      photos: [portfolioYnosDetail],
      description: "",
      descriptionKey: "portfolio.ynos.description",
      link: "https://www.ynosseguros.com.br/",
    },
  },
  {
    image: portfolioEsteiraLogo,
    name: "Esteira Imobiliária",
    details: {
      photos: [portfolioEsteiraDetail],
      description: "",
      descriptionKey: "portfolio.esteira.description",
      link: "https://imoplan-32099.bubbleapps.io/",
    },
  },
];

const PortfolioSection = () => {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<string>(portfolioItems[0].name);
  const detailsRef = useRef<HTMLDivElement>(null);

  const selectedItem = portfolioItems.find((item) => item.name === selected);

  const handleSelect = (name: string) => {
    setSelected(name);
    if (window.innerWidth < 1024 && detailsRef.current) {
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-center">
          {t("portfolio.title")}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8">
          {/* Cards list - left side */}
          <div className="flex flex-col gap-3 max-h-[400px] lg:max-h-[600px] overflow-y-auto pr-2 portfolio-scrollbar">
            {portfolioItems.map((item) => (
              <div
                key={item.name}
                onClick={() => handleSelect(item.name)}
                className={`glass-card p-4 flex items-center gap-4 cursor-pointer transition-all ${
                  selected === item.name
                    ? "portfolio-selected"
                    : "hover:border-primary/30"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 object-contain rounded-md flex-shrink-0"
                />
                <p className="text-sm font-medium text-foreground">{item.name}</p>
              </div>
            ))}
          </div>

          {/* Details - right side */}
          {selectedItem?.details && (
            <div ref={detailsRef} className="glass-card p-6 md:p-10 text-left animate-in fade-in duration-300">
              <h3 className="text-2xl font-bold font-display mb-4">
                {selectedItem.name}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t(selectedItem.details.descriptionKey as any)}
              </p>

              {selectedItem.details.link && (
                <a
                  href={selectedItem.details.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
                >
                  {t("portfolio.viewProject" as any)}
                  <ExternalLink size={16} />
                </a>
              )}

              {selectedItem.details.photos.length > 0 && (
                <div className="grid grid-cols-1 gap-4">
                  {selectedItem.details.photos.map((photo, idx) => (
                    <img
                      key={idx}
                      src={photo}
                      alt={`${selectedItem.name} screenshot ${idx + 1}`}
                      className="rounded-lg w-full object-cover border border-border"
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
