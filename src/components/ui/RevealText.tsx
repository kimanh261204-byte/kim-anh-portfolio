import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface RevealTextProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div'
}

export default function RevealText({ children, delay = 0, className = '', as: Tag = 'div' }: RevealTextProps) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: '110%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        transition={{ duration: 0.7, delay, ease: [0.32, 0.72, 0, 1] }}
      >
        <Tag className={className}>{children}</Tag>
      </motion.div>
    </div>
  )
}
