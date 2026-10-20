import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'

interface NextProjectProps {
  title: string
  path: string
  num: string
}

export default function NextProject({ title, path, num }: NextProjectProps) {
  const { lang } = useLanguage()

  return (
    <Link to={path} data-cursor="NEXT">
      <motion.div
        className="border-t border-[var(--border)] py-16 md:py-24 grid-container group"
        whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
        transition={{ duration: 0.2 }}
      >
        <div className="text-label mb-4">{lang === 'vi' ? 'Dự án tiếp theo' : 'Next Project'}</div>
        <div className="flex items-end justify-between gap-8">
          <div>
            <div className="font-display font-bold text-[var(--text-3)] group-hover:text-[var(--text-1)] transition-colors duration-300"
              style={{ fontSize: 'clamp(0.75rem, 1.5vw, 1rem)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '12px' }}>
              {num}
            </div>
            <div className="text-display group-hover:text-[var(--accent-dark)] text-[var(--text-1)] transition-colors duration-300" style={{ letterSpacing: '-0.03em' }}>
              {title}
            </div>
          </div>
          <div className="w-10 h-10 border border-[var(--border)] group-hover:border-[var(--accent-dark)] flex items-center justify-center transition-all duration-300 flex-shrink-0 text-[var(--text-2)] group-hover:text-[var(--text-1)]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 11L11 3M11 3H5M11 3v6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
