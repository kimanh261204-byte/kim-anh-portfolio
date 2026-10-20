import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage, t } from "../../contexts/LanguageContext"
import { translations } from "../../i18n/translations"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { lang, setLang } = useLanguage()
  const nav = translations.nav

  const links = [
    { label: t(nav.about, lang),        to: "/about" },
    { label: t(nav.work, lang),         to: "/work" },
    { label: t(nav.process, lang),      to: "/process" },
    { label: t(nav.skills, lang),       to: "/skills" },
    { label: t(nav.achievements, lang), to: "/achievements" },
    { label: t(nav.contact, lang),      to: "/contact" },
  ]

  const isHome = location.pathname === "/"

  return (
    <>
      {/* Desktop Nav */}
      <nav className="fixed top-0 left-0 right-0 z-[300] flex items-center justify-between px-[clamp(24px,5vw,80px)] py-5 bg-[var(--bg)] border-b border-[var(--border)]">
        <NavLink
          to="/"
          className="flex items-center group"
          aria-label="Đỗ Kim Anh Portfolio"
        >
          <img
            src="/assets/logo.png"
            alt="Đỗ Kim Anh"
            className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right: lang toggle + page num */}
        <div className="hidden md:flex items-center gap-5">
          {/* Language toggle */}
          <div className="lang-toggle">
            <button
              className={`lang-btn ${lang === "vi" ? "active" : ""}`}
              onClick={() => setLang("vi")}
              aria-label="Tiếng Việt"
            >
              VI
            </button>
            <span style={{ color: "var(--border-mid)", fontSize: "0.6rem" }}>|</span>
            <button
              className={`lang-btn ${lang === "en" ? "active" : ""}`}
              onClick={() => setLang("en")}
              aria-label="English"
            >
              EN
            </button>
          </div>
          {isHome && (
            <span className="text-label">01 / 07</span>
          )}
        </div>

        {/* Mobile: lang + burger */}
        <div className="md:hidden flex items-center gap-4">
          <div className="lang-toggle">
            <button className={`lang-btn ${lang === "vi" ? "active" : ""}`} onClick={() => setLang("vi")}>VI</button>
            <span style={{ color: "var(--text-4)", fontSize: "0.6rem" }}>|</span>
            <button className={`lang-btn ${lang === "en" ? "active" : ""}`} onClick={() => setLang("en")}>EN</button>
          </div>
          <button
            className="flex flex-col gap-[5px] z-[500] relative"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block w-5 h-[1.5px] bg-[var(--text-1)] origin-center"
              animate={open ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-5 h-[1.5px] bg-[var(--text-1)]"
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="block w-5 h-[1.5px] bg-[var(--text-1)] origin-center"
              animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.25 }}
          >
            <div className="mt-4">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <NavLink
                    to={l.to}
                    className="block font-display font-bold text-[clamp(2.5rem,8vw,4rem)] leading-[1.1] tracking-tight text-[var(--text-4)] hover:text-[var(--text-1)] transition-colors duration-200 py-2"
                    style={{ letterSpacing: "-0.02em" }}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>
            <div className="mt-auto pt-12">
              <div className="text-label mb-2">Email</div>
              <a href="mailto:kimanh261204@gmail.com" className="text-sm text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors">
                kimanh261204@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
