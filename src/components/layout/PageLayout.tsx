import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

const pageVariants = {
  initial: { opacity: 0, y: 20, scale: 0.992 },
  enter:   { opacity: 1, y: 0,  scale: 1,     transition: { duration: 0.55, ease: [0.32, 0.72, 0, 1] } },
  exit:    { opacity: 0, y: -12, scale: 0.988, transition: { duration: 0.32, ease: [0.32, 0.72, 0, 1] } },
}

interface PageLayoutProps {
  children: ReactNode
  className?: string
}

export default function PageLayout({ children, className = '' }: PageLayoutProps) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="enter"
      exit="exit"
      className={`page-wrap ${className}`}
    >
      {children}
    </motion.div>
  )
}
