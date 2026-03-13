import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import iconOrcamento from "@/assets/icon-orcamento.png";
import watermark from "@/assets/watermark.png";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const EMAILJS_SERVICE_ID = "service_7i379qx";
const EMAILJS_TEMPLATE_ID = "template_6i532fz";
const EMAILJS_PUBLIC_KEY = "GlpJfG5_rfMC9ZlOj";

const CalculatorSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({ title: t("meeting.success") });
      setForm({ name: "", email: "", message: "" });
      setOpen(false);
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({ title: t("meeting.error"), variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="calculator" className="py-20 bg-background relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${watermark})`,
          backgroundRepeat: "repeat",
          backgroundSize: "auto 100%",
        }}
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">{t("calc.title")}</h2>
        <p className="text-muted-foreground mb-12 max-w-md mx-auto">{t("calc.subtitle")}</p>

        <div className="glass-card max-w-2xl mx-auto p-8 flex flex-col items-center gap-6">
          <img src={iconOrcamento} alt="Orçamento" className="h-[200px] w-auto object-contain" />
          <p className="text-muted-foreground">{t("calc.description")}</p>
          <button
            onClick={() => setOpen(true)}
            className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            {t("calc.cta")}
          </button>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">{t("calc.popup.title")}</DialogTitle>
            <DialogDescription>{t("calc.popup.subtitle")}</DialogDescription>
          </DialogHeader>

          <div className="bg-secondary/50 rounded-lg p-4 text-sm text-muted-foreground space-y-2 my-2">
            <p className="font-medium text-foreground">{t("calc.popup.guide.intro")}</p>
            <ul className="list-disc list-inside space-y-1">
              <li>{t("calc.popup.guide.q1")}</li>
              <li>{t("calc.popup.guide.q2")}</li>
              <li>{t("calc.popup.guide.q3")}</li>
              <li>{t("calc.popup.guide.q4")}</li>
              <li>{t("calc.popup.guide.q5")}</li>
            </ul>
            <p className="italic">{t("calc.popup.guide.extra")}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-muted-foreground mb-1">{t("meeting.name")}</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-muted-foreground mb-1">{t("meeting.email")}</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-muted-foreground mb-1">{t("calc.popup.message")}</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={6}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
                placeholder={t("calc.popup.placeholder")}
                required
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full bg-gradient-primary text-primary-foreground py-3 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {sending ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              {t("calc.popup.send")}
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CalculatorSection;
