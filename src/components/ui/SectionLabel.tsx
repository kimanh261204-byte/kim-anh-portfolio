import { motion } from 'framer-motion'

interface SectionLabelProps {
  children: string
  delay?: number
}

export default function SectionLabel({ children, delay = 0 }: SectionLabelProps) {
  return (
    <motion.div
      className="section-label mb-4"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.32, 0.72, 0, 1] }}
    >
      {children}
    </motion.div>
  )
}
