"use client";

import { useEffect, useMemo, useState } from "react";

type Lang = "en" | "fr" | "de";

type Dict = {
  nav: { about: string; works: string; contact: string; language: string };
  hero: { name: string; tagline: string };
  about: { title: string; text: string };
  works: { title: string; hint: string };
  contact: { title: string; emailLabel: string };
  footer: string;
};

const DICT: Record<Lang, Dict> = {
  en: {
    nav: { about: "About", works: "Works", contact: "Contact", language: "Language" },
    hero: { name: "DAVID CHEN", tagline: "Designer · Art & Technology · Future Aesthetic" },
    about: {
      title: "About",
      text: "Transdisciplinary practice at the intersection of design, art, AI, and space. Building poetic systems for the future.",
    },
    works: { title: "Selected Works", hint: "Replace placeholders with images / links / case studies." },
    contact: { title: "Contact", emailLabel: "Email" },
    footer: "All rights reserved.",
  },
  fr: {
    nav: { about: "À propos", works: "Portfolio", contact: "Contact", language: "Langue" },
    hero: { name: "DAVID CHEN", tagline: "Designer · Art & Technologie · Esthétique du futur" },
    about: {
      title: "À propos",
      text: "Pratique transdisciplinaire à l’intersection du design, de l’art, de l’IA et de l’espace. Construire des systèmes poétiques pour le futur.",
    },
    works: { title: "Sélection", hint: "Remplacez les blocs par vos images / liens / études de cas." },
    contact: { title: "Contact", emailLabel: "Email" },
    footer: "Tous droits réservés.",
  },
  de: {
    nav: { about: "Über mich", works: "Arbeiten", contact: "Kontakt", language: "Sprache" },
    hero: { name: "DAVID CHEN", tagline: "Designer · Kunst & Technologie · Zukunftsästhetik" },
    about: {
      title: "Über mich",
      text: "Transdisziplinäre Praxis an der Schnittstelle von Design, Kunst, KI und Raum. Poetische Systeme für die Zukunft.",
    },
    works: { title: "Ausgewählte Arbeiten", hint: "Ersetze Platzhalter durch Bilder / Links / Case Studies." },
    contact: { title: "Kontakt", emailLabel: "E-Mail" },
    footer: "Alle Rechte vorbehalten.",
  },
};

const EMAIL = "ycyc878@hotmail.com";

// 你之后把这里替换成你的真实项目（图片/链接）
const WORKS = [
  { title: "Project 01", meta: "Placeholder", href: "#" },
  { title: "Project 02", meta: "Placeholder", href: "#" },
  { title: "Project 03", meta: "Placeholder", href: "#" },
  { title: "Project 04", meta: "Placeholder", href: "#" },
];

export default function Page() {
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    const saved = (localStorage.getItem("lang") as Lang | null) ?? "fr";
    if (["en", "fr", "de"].includes(saved)) setLang(saved);
  }, []);
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = useMemo(() => DICT[lang], [lang]);

  return (
    <main className="min-h-screen bg-[#0b0c0f] text-white selection:bg-white/20">
      {/* subtle background */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.35]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.10),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_30%_85%,rgba(255,255,255,0.05),transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.10),rgba(0,0,0,0.65))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.14]" />
      </div>

      {/* top nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href=" " className="text-xs tracking-[0.30em] text-white/85 hover:text-white">
            {t.hero.name}
          </a >

          <nav className="flex items-center gap-5 text-sm text-white/70">
            <a className="hover:text-white" href="#about">
              {t.nav.about}
            </a >
            <a className="hover:text-white" href="#works">
              {t.nav.works}
            </a >
            <a className="hover:text-white" href="#contact">
              {t.nav.contact}
            </a >

            <div className="ml-2 flex items-center gap-2">
              <span className="hidden sm:inline text-white/40">{t.nav.language}</span>
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value as Lang)}
                className="rounded-md border border-white/15 bg-black/30 px-2 py-1 text-white/85 outline-none hover:border-white/30"
              >
                <option value="en">EN</option>
                <option value="fr">FR</option>
                <option value="de">DE</option>
              </select>
            </div>
          </nav>
        </div>
      </header>

      {/* hero */}
      <section className="relative mx-auto max-w-6xl px-6 pt-16 pb-10">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
          <h1 className="text-4xl md:text-6xl font-light tracking-[0.18em] text-white/95">
            {t.hero.name}
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-white/60">
            {t.hero.tagline}
          </p >

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#works"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/[0.02] px-6 py-3 text-sm text-white/85 hover:bg-white/10 hover:text-white transition"
            >
              {t.nav.works}
            </a >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/[0.02] px-6 py-3 text-sm text-white/85 hover:bg-white/10 hover:text-white transition"
            >
              {t.nav.contact}
            </a >
          </div>
        </div>
      </section>

      {/* about */}
      <section id="about" className="relative mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-xl md:text-2xl font-light tracking-wide text-white/90">
          {t.about.title}
        </h2>
        <p className="mt-3 max-w-3xl text-white/60 leading-relaxed">
          {t.about.text}
        </p >
      </section>

      {/* works */}
      <section id="works" className="relative mx-auto max-w-6xl px-6 py-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl md:text-2xl font-light tracking-wide text-white/90">
            {t.works.title}
          </h2>
          <p className="hidden md:block text-sm text-white/45">{t.works.hint}</p >
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {WORKS.map((w) => (
            <a
              key={w.title}
              href={w.href}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm tracking-[0.22em] text-white/55">
                    {w.title.toUpperCase()}
                  </div>
                  <div className="mt-2 text-base text-white/80">{w.meta}</div>
                </div>
                <div className="text-white/35 group-hover:text-white/70 transition">→</div>
              </div>

              {/* image placeholder */}
              <div className="mt-5 h-40 rounded-2xl border border-white/10 bg-black/30 overflow-hidden">
                <div className="h-full w-full opacity-40 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_55%)]" />
              </div>

              <div className="mt-4 text-sm text-white/45">
                Click to open (you can replace with real link later)
              </div>
            </a >
          ))}
        </div>
      </section>

      {/* contact */}
      <section id="contact" className="relative mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <h2 className="text-xl md:text-2xl font-light tracking-wide text-white/90">
            {t.contact.title}
          </h2>

          <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-white/60">
              {t.contact.emailLabel}:{" "}
              <span className="text-white/85">{EMAIL}</span>
            </p >

            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/[0.02] px-6 py-3 text-sm text-white/85 hover:bg-white/10 hover:text-white transition"
            >
              Mail →
            </a >
          </div>

          <footer className="mt-8 text-xs text-white/35">
            © {new Date().getFullYear()} {t.hero.name} · {t.footer}
          </footer>
        </div>
      </section>

      {/* smooth scroll */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </main>
  );
}