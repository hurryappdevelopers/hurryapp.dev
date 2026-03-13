export type Language = "pt" | "en" | "de";

export const translations = {
  // Navbar
  "nav.home": { pt: "Início", en: "Home", de: "Startseite" },
  "nav.calculator": { pt: "Calculadora", en: "Calculator", de: "Rechner" },
  "nav.services": { pt: "Serviços", en: "Services", de: "Dienstleistungen" },
  "nav.meeting": { pt: "Reunião", en: "Meeting", de: "Besprechung" },
  "nav.contact": { pt: "Contato", en: "Contact", de: "Kontakt" },

  // Hero
  "hero.tag": { pt: "Desenvolvimento de Software", en: "Software Development", de: "Softwareentwicklung" },
  "hero.title1": { pt: "Aplicações muito mais rápidas com ", en: "Applications much faster with ", de: "Anwendungen viel schneller mit " },
  "hero.title2": { pt: "especialistas No-code", en: "No-code experts", de: "No-Code-Experten" },
  "hero.description": {
    pt: "Criamos e desenvolvemos sistemas complexos sob medida. Ao dominar a tecnologia No-code, entregamos a mesma qualidade da programação padrão até 5x mais rápido.",
    en: "We create and develop complex bespoke systems. By mastering No-code technology, we can deliver the same quality as standard programming up to 5x faster.",
    de: "Wir erstellen und entwickeln komplexe maßgeschneiderte Systeme. Durch die Beherrschung der No-Code-Technologie liefern wir die gleiche Qualität wie Standardprogrammierung bis zu 5x schneller.",
  },
  "hero.cta": { pt: "Tire suas dúvidas", en: "Clear your doubts", de: "Klären Sie Ihre Fragen" },

  // Calculator
  "calc.title": { pt: "Calculadora", en: "Calculator", de: "Rechner" },
  "calc.subtitle": { pt: "Estime quanto seu projeto vai custar", en: "Estimate how much your project will cost", de: "Schätzen Sie, wie viel Ihr Projekt kosten wird" },
  "calc.description": { pt: "Entre em contato para um orçamento personalizado.", en: "Contact us for a personalized quote for your project.", de: "Kontaktieren Sie uns für ein individuelles Angebot." },
  "calc.cta": { pt: "Solicitar Orçamento", en: "Get a Quote", de: "Angebot anfordern" },
  "calc.popup.title": { pt: "Solicitar Orçamento", en: "Request a Quote", de: "Angebot anfordern" },
  "calc.popup.subtitle": { pt: "Responda às perguntas abaixo para que possamos elaborar um orçamento mais acertivo.", en: "Answer the questions below so we can prepare a more accurate quote.", de: "Beantworten Sie die folgenden Fragen, damit wir ein genaueres Angebot erstellen können." },
  "calc.popup.guide.intro": { pt: "Por favor, aborde os seguintes pontos:", en: "Please address the following points:", de: "Bitte gehen Sie auf folgende Punkte ein:" },
  "calc.popup.guide.q1": { pt: "É um app criado do zero ou serão modificações em um app já existente?", en: "Is it a new app from scratch or modifications to an existing one?", de: "Ist es eine neue App von Grund auf oder Änderungen an einer bestehenden?" },
  "calc.popup.guide.q2": { pt: "Utilizará banco de dados do Bubble ou integração com algum outro?", en: "Will it use Bubble's database or integrate with another one?", de: "Wird die Bubble-Datenbank verwendet oder eine Integration mit einer anderen?" },
  "calc.popup.guide.q3": { pt: "Será para uso interno ou necessita de publicação em App Store?", en: "Is it for internal use or does it need App Store publishing?", de: "Ist es für den internen Gebrauch oder muss es im App Store veröffentlicht werden?" },
  "calc.popup.guide.q4": { pt: "Terá integração com pagamentos ou qualquer outro serviço?", en: "Will it have payment integration or any other service?", de: "Wird es eine Zahlungsintegration oder einen anderen Dienst geben?" },
  "calc.popup.guide.q5": { pt: "Tem prazo pré-estabelecido ou orçamento limite?", en: "Do you have a set deadline or budget limit?", de: "Gibt es eine feste Frist oder ein Budgetlimit?" },
  "calc.popup.guide.extra": { pt: "Nos forneça o máximo de informação possível para que nossa resposta seja mais acertiva.", en: "Provide as much information as possible so our response can be more accurate.", de: "Geben Sie so viele Informationen wie möglich an, damit unsere Antwort genauer sein kann." },
  "calc.popup.message": { pt: "Descreva seu projeto", en: "Describe your project", de: "Beschreiben Sie Ihr Projekt" },
  "calc.popup.placeholder": { pt: "Responda às perguntas acima e adicione qualquer detalhe extra sobre seu projeto...", en: "Answer the questions above and add any extra details about your project...", de: "Beantworten Sie die obigen Fragen und fügen Sie weitere Details zu Ihrem Projekt hinzu..." },
  "calc.popup.send": { pt: "Enviar Solicitação", en: "Send Request", de: "Anfrage senden" },

  // Features / Services
  "features.title": { pt: "Nossos Serviços", en: "Our Services", de: "Unsere Dienstleistungen" },
  "features.subtitle": {
    pt: "Desenvolvemos aplicativos completos e responsivos utilizando ferramentas No-code de alta performance. Entregamos projetos com layouts totalmente personalizáveis, integrações de API com serviços de pagamento, automações inteligentes com N8N e WhatsApp, banco de dados externo com Supabase quando necessário, e muito mais — tudo com agilidade e qualidade profissional.",
    en: "We build complete, responsive applications using high-performance No-code tools. We deliver projects with fully customizable layouts, API integrations with payment services, smart automations with N8N and WhatsApp, external databases with Supabase when needed, and much more — all with speed and professional quality.",
    de: "Wir entwickeln vollständige, responsive Anwendungen mit leistungsstarken No-Code-Tools. Wir liefern Projekte mit vollständig anpassbaren Layouts, API-Integrationen mit Zahlungsdiensten, intelligenten Automatisierungen mit N8N und WhatsApp, externen Datenbanken mit Supabase bei Bedarf und vielem mehr — alles mit Geschwindigkeit und professioneller Qualität.",
  },
  "features.responsive.title": { pt: "Design responsivo", en: "Responsive design", de: "Responsives Design" },
  "features.responsive.desc": { pt: "Posicionamos dinamicamente os elementos do app para manter a harmonia ajustada ao tamanho da tela do dispositivo", en: "We dynamically position the app elements to maintain harmony adjusted to the screen size of the access device", de: "Wir positionieren die App-Elemente dynamisch, um die Harmonie an die Bildschirmgröße anzupassen" },
  "features.custom.title": { pt: "Alto grau de personalização", en: "High degree of customization", de: "Hoher Anpassungsgrad" },
  "features.custom.desc": { pt: "Aplicações mais ágeis e responsivas. Priorizamos lógica otimizada, buscando o caminho mais eficiente", en: "More agile and responsive applications. We prioritize optimized logic, seeking the most efficient path", de: "Agilere und reaktionsfähigere Anwendungen. Wir priorisieren optimierte Logik" },
  "features.integration.title": { pt: "Integração com outras plataformas", en: "Integration with other platforms", de: "Integration mit anderen Plattformen" },
  "features.integration.desc": { pt: "Integrações de API levarão seu app a um nível tecnológico extremamente avançado, de métodos de pagamento a IA", en: "API integrations will take your app to an extremely advanced technological level, from payment methods to AI", de: "API-Integrationen bringen Ihre App auf ein extrem fortschrittliches technologisches Niveau" },
  "features.design.title": { pt: "Bubble Design", en: "Bubble Design", de: "Bubble Design" },
  "features.design.desc": { pt: "Ver todas as telas do seu projeto prontas antes de iniciar o desenvolvimento pode reduzir o tempo de entrega em até 10x", en: "Seeing all your project's screens ready before starting development can reduce delivery time by up to 10x", de: "Alle Bildschirme Ihres Projekts vor Entwicklungsbeginn fertig zu sehen, kann die Lieferzeit um bis zu 10x verkürzen" },
  "features.faster.title": { pt: "Aplicações Mais Rápidas", en: "Faster Applications", de: "Schnellere Anwendungen" },
  "features.faster.desc": { pt: "Construímos apps mais rápidos usando ferramentas No-code que simplificam o desenvolvimento", en: "We build faster apps using No-code tools that simplify development and accelerate feature delivery", de: "Wir erstellen schnellere Apps mit No-Code-Tools, die die Entwicklung vereinfachen" },
  "features.platforms.title": { pt: "WEB/Android/iOS", en: "WEB/Android/iOS", de: "WEB/Android/iOS" },
  "features.platforms.desc": { pt: "Os usuários podem acessar seu app via link, pelo navegador, ou baixando da Play Store ou Apple Store", en: "Users can access your app via link, through the browser, or by downloading it from Play Store or Apple Store", de: "Benutzer können über Link, Browser oder Download aus dem Play Store oder Apple Store zugreifen" },

  // Development
  "dev.title": { pt: "Desenvolvimento", en: "Development", de: "Entwicklung" },
  "dev.desc1": { pt: "Ao dominar a tecnologia No-code, podemos entregar um produto de alto nível pela metade do custo/tempo do mercado tradicional.", en: "By mastering No-code technology, we can deliver a high-level product at half the cost/time of the traditional market.", de: "Durch die Beherrschung der No-Code-Technologie können wir ein High-Level-Produkt zu halben Kosten/Zeit liefern." },
  "dev.desc2": { pt: "A área de Desenvolvimento é responsável pelas seguintes etapas de um projeto:", en: "The Development area is responsible for the following stages of a project:", de: "Der Entwicklungsbereich ist für folgende Projektphasen verantwortlich:" },
  "dev.item1": { pt: "Desenvolver um escopo, esclarecendo dúvidas e organizando as etapas seguintes.", en: "Develop a scope, clarifying doubts and organizing the next steps.", de: "Einen Umfang entwickeln, Fragen klären und die nächsten Schritte organisieren." },
  "dev.item2": { pt: "Desenvolver os layouts das páginas e tornando-as intuitivas com um IU e UX incrível.", en: "Develop page layouts making them intuitive with an incredible UI and UX.", de: "Seitenlayouts entwickeln und sie mit einer großartigen UI und UX intuitiv gestalten." },
  "dev.item3": { pt: "Programar as funcionalidades e integrar com os serviços externos necessários.", en: "Program the functionalities and integrate with the necessary external services.", de: "Die Funktionalitäten programmieren und mit den erforderlichen externen Diensten integrieren." },

  // Portfolio
  "portfolio.title": { pt: "Portfólio", en: "Portfolio", de: "Portfolio" },
  "portfolio.viewProject": { pt: "Visualizar Projeto", en: "View Project", de: "Projekt ansehen" },

  // How we work
  "how.title": { pt: "Como trabalhamos?", en: "How do we work?", de: "Wie arbeiten wir?" },
  "how.understand.title": { pt: "Entender", en: "Understand", de: "Verstehen" },
  "how.understand.desc": { pt: "Reunimos suas ideias e necessidades em um escopo de solução inicial. Definimos metas e focamos nas funções essenciais.", en: "We bring together your ideas and needs into an initial solution scope. We define goals and focus on the functions essential to your success.", de: "Wir bringen Ihre Ideen und Bedürfnisse in einen ersten Lösungsumfang zusammen." },
  "how.plan.title": { pt: "Planejar", en: "Plan", de: "Planen" },
  "how.plan.desc": { pt: "Você concorda com o escopo do trabalho, e preparamos modelos e protótipos para garantir que todos entendam os caminhos possíveis.", en: "You agree to the work scope, and we prepare models and prototypes to ensure that everyone understands the possible client paths.", de: "Sie stimmen dem Arbeitsumfang zu, und wir bereiten Modelle und Prototypen vor." },
  "how.build.title": { pt: "Construir", en: "Build", de: "Bauen" },
  "how.build.desc": { pt: "Construímos sua solução em sprints semanais, usando plataformas No-code. Mantemos você informado em cada etapa.", en: "We build your solution in weekly sprints, using No-code platforms that we consider the best option. We keep you informed every step of the way.", de: "Wir bauen Ihre Lösung in wöchentlichen Sprints mit No-Code-Plattformen." },
  "how.improve.title": { pt: "Melhorar", en: "Improve", de: "Verbessern" },
  "how.improve.desc": { pt: "Após a entrega, focamos em melhoria contínua. Coletamos feedback, analisamos dados e implementamos ajustes.", en: "After delivery, we focus on continuous improvement. We collect feedback, analyze data and implement adjustments in regular cycles.", de: "Nach der Lieferung konzentrieren wir uns auf kontinuierliche Verbesserung." },

  // Meeting
  "meeting.title": { pt: "Agende uma reunião conosco!", en: "Schedule a meeting with us!", de: "Vereinbaren Sie ein Treffen mit uns!" },
  "meeting.subtitle": { pt: "Nossos profissionais estão prontos para ajudá-lo!", en: "Our professionals are ready to assist you!", de: "Unsere Fachleute stehen Ihnen zur Verfügung!" },
  "meeting.name": { pt: "Seu Nome", en: "Your Name", de: "Ihr Name" },
  "meeting.email": { pt: "Seu Email", en: "Your Email", de: "Ihre E-Mail" },
  "meeting.whatsapp": { pt: "Whatsapp", en: "Whatsapp", de: "Whatsapp" },
  "meeting.message": { pt: "Sua Mensagem", en: "Your Message", de: "Ihre Nachricht" },
  "meeting.cta": { pt: "Agendar Reunião", en: "Schedule Meeting", de: "Besprechung vereinbaren" },
  "meeting.success": { pt: "Email enviado com sucesso!", en: "Email sent successfully!", de: "E-Mail erfolgreich gesendet!" },
  "meeting.error": { pt: "Erro ao enviar email. Tente novamente.", en: "Error sending email. Please try again.", de: "Fehler beim Senden der E-Mail. Bitte versuchen Sie es erneut." },

  // Portfolio details
  "portfolio.adega.description": {
    pt: "Aplicativo completo para gestão de adegas, com catálogo de vinhos, controle de estoque e experiência de compra personalizada.",
    en: "Complete wine cellar management app with wine catalog, stock control, and personalized shopping experience.",
    de: "Komplette Weinkeller-Management-App mit Weinkatalog, Bestandskontrolle und personalisiertem Einkaufserlebnis.",
  },
  "portfolio.client.description": {
    pt: "Projeto de estudo desenvolvido em FlutterFlow. Um app multiempresas personalizável, permitindo que diferentes negócios configurem suas lojas com identidade visual própria, catálogo de produtos e gestão de pedidos.",
    en: "A study project built with FlutterFlow. A customizable multi-business app that allows different companies to set up their stores with their own branding, product catalog, and order management.",
    de: "Ein Studienprojekt, entwickelt mit FlutterFlow. Eine anpassbare Multi-Unternehmens-App, die verschiedenen Unternehmen ermöglicht, ihre Geschäfte mit eigenem Branding, Produktkatalog und Bestellverwaltung einzurichten.",
  },
  "portfolio.encomendeart.description": {
    pt: "Layout completo criado em Figma com foco em responsividade. Um projeto de design para e-commerce de arte personalizada, com navegação intuitiva e experiência visual refinada em todos os dispositivos.",
    en: "Complete layout designed in Figma with a focus on responsiveness. A design project for a custom art e-commerce, with intuitive navigation and refined visual experience across all devices.",
    de: "Vollständiges Layout in Figma mit Fokus auf Responsivität. Ein Designprojekt für einen personalisierten Kunst-E-Commerce mit intuitiver Navigation und raffiniertem visuellen Erlebnis auf allen Geräten.",
  },
  "portfolio.coordenacao.description": {
    pt: "App responsivo para coordenação de equipes em eventos. Permite cadastrar membros, montar grupos de trabalho por dia, organizar calendários de eventos e controlar dias de pagamento.",
    en: "Responsive app for team coordination at events. Allows registering members, assembling work groups by day, organizing event calendars, and managing payment schedules.",
    de: "Responsive App zur Teamkoordination bei Veranstaltungen. Ermöglicht die Registrierung von Mitgliedern, die Zusammenstellung von Arbeitsgruppen nach Tag, die Organisation von Eventkalendern und die Verwaltung von Zahlungsterminen.",
  },
  "portfolio.locarcarro.description": {
    pt: "App desenvolvido em Bubble onde usuários podem cadastrar seus carros elétricos para aluguel. Inclui gestão de veículos, reservas e experiência completa de locação.",
    en: "App built with Bubble where users can list their electric cars for rental. Includes vehicle management, bookings, and a complete rental experience.",
    de: "In Bubble entwickelte App, in der Benutzer ihre Elektroautos zur Vermietung anbieten können. Umfasst Fahrzeugverwaltung, Buchungen und ein komplettes Mieterlebnis.",
  },
  "portfolio.useplus.description": {
    pt: "App com espaço dedicado para doação, troca e venda de itens infantis. Uma plataforma colaborativa que conecta famílias para reaproveitar produtos de forma prática e sustentável.",
    en: "App with a dedicated space for donating, exchanging, and selling children's items. A collaborative platform that connects families to reuse products in a practical and sustainable way.",
    de: "App mit einem eigenen Bereich zum Spenden, Tauschen und Verkaufen von Kinderartikeln. Eine kollaborative Plattform, die Familien verbindet, um Produkte praktisch und nachhaltig wiederzuverwenden.",
  },
  "portfolio.rapidonobairro.description": {
    pt: "App de bairro onde os comércios locais podem divulgar seus negócios, produtos e serviços para a comunidade ao redor de forma prática e acessível.",
    en: "A neighborhood app where local businesses can promote their shops, products, and services to the surrounding community in a practical and accessible way.",
    de: "Eine Nachbarschafts-App, in der lokale Geschäfte ihre Produkte und Dienstleistungen praktisch und zugänglich für die umliegende Gemeinschaft bewerben können.",
  },
  "portfolio.ynos.description": {
    pt: "Sistema completo de gestão para corretora de seguros. Inclui controle de contratos, gestão de projetos e tarefas com acompanhamento, avaliação de colaboradores, banco de horas com registro de entrada e saída, e organização de férias.",
    en: "Complete management system for an insurance brokerage. Includes contract management, project and task tracking, employee evaluation, time tracking with clock-in/out, and vacation scheduling.",
    de: "Komplettes Verwaltungssystem für eine Versicherungsmaklergesellschaft. Umfasst Vertragsverwaltung, Projekt- und Aufgabenverfolgung, Mitarbeiterbewertung, Zeiterfassung mit Ein-/Ausstempeln und Urlaubsplanung.",
  },
  "portfolio.esteira.description": {
    pt: "Uma plataforma multiempresas com cadastro interno para imobiliária, um completo banco de dados para imóveis. Painel da imobiliária com cadastro dos imóveis, com link de formulário para possíveis compradores ou locatários, painel exclusivo para estes incluírem seus documentos e acompanhar o andamento até aprovação.",
    en: "A multi-company platform with internal registration for real estate agencies, featuring a complete property database. Includes a real estate panel with property listings, form links for potential buyers or tenants, and an exclusive panel for them to submit documents and track progress until approval.",
    de: "Eine Multi-Unternehmensplattform mit interner Registrierung für Immobilienagenturen und einer vollständigen Immobiliendatenbank. Enthält ein Immobilienpanel mit Objekteinträgen, Formularlinks für potenzielle Käufer oder Mieter sowie ein exklusives Panel zur Dokumenteneinreichung und Fortschrittsverfolgung bis zur Genehmigung.",
  },

  // Footer
  "footer.tagline": { pt: "Desenvolvimento de software com expertise No-code.", en: "Software development with No-code expertise.", de: "Softwareentwicklung mit No-Code-Expertise." },
  "footer.solutions": { pt: "Soluções", en: "Solutions", de: "Lösungen" },
  "footer.navigation": { pt: "Navegação", en: "Navigation", de: "Navigation" },
  "footer.dev": { pt: "Desenvolvimento", en: "Development", de: "Entwicklung" },
  "footer.api": { pt: "Integrações API", en: "API Integrations", de: "API-Integrationen" },
  "footer.design": { pt: "Design", en: "Design", de: "Design" },
  "footer.support": { pt: "Suporte", en: "Support", de: "Support" },
  "footer.rights": { pt: "Todos os direitos reservados.", en: "All rights reserved.", de: "Alle Rechte vorbehalten." },
} as const;

export type TranslationKey = keyof typeof translations;
