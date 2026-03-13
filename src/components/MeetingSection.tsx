import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

const EMAILJS_SERVICE_ID = "service_7i379qx";
const EMAILJS_TEMPLATE_ID = "template_6i532fz";
const EMAILJS_PUBLIC_KEY = "GlpJfG5_rfMC9ZlOj";

const MeetingSection = () => {
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "", message: "" });
  const [sending, setSending] = useState(false);
  const { t } = useLanguage();
  const { toast } = useToast();

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
          whatsapp: form.whatsapp,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({ title: t("meeting.success") });
      setForm({ name: "", email: "", whatsapp: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({ title: t("meeting.error"), variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="meeting" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-lg text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">{t("meeting.title")}</h2>
        <p className="text-muted-foreground mb-10">{t("meeting.subtitle")}</p>

        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-4 text-left">
          {[
            { label: t("meeting.name"), key: "name" as const, type: "text" },
            { label: t("meeting.email"), key: "email" as const, type: "email" },
            { label: t("meeting.whatsapp"), key: "whatsapp" as const, type: "tel" },
          ].map((field) => (
            <div key={field.key}>
              <label className="block text-sm text-muted-foreground mb-1">{field.label}</label>
              <input
                type={field.type}
                value={form[field.key]}
                onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                required
              />
            </div>
          ))}

          <div>
            <label className="block text-sm text-muted-foreground mb-1">{t("meeting.message")}</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="w-full bg-gradient-primary text-primary-foreground py-3 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
          >
            {sending ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
            {t("meeting.cta")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default MeetingSection;
