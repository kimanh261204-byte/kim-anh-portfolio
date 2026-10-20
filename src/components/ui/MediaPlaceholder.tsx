interface MediaPlaceholderProps {
  label?: string
  note?: string
  ratio?: string
  className?: string
}

export default function MediaPlaceholder({ label = '[ADD MEDIA]', note, ratio = '16/9', className = '' }: MediaPlaceholderProps) {
  return (
    <div
      className={`media-ph ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <span className="text-[11px] tracking-[0.14em] uppercase font-semibold text-[var(--accent-dark)] opacity-80">{label}</span>
      {note && <span className="text-[11px] text-[var(--text-3)]">{note}</span>}
    </div>
  )
}
