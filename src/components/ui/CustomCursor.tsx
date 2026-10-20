import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)
  const [label, setLabel] = useState('')
  const pos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const rafId = useRef<number>(0)

  useEffect(() => {
    // Only on fine pointer devices
    if (!window.matchMedia('(pointer: fine)').matches) return

    const dot = dotRef.current!
    const ring = ringRef.current!
    const lbl = labelRef.current!

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      dot.style.left = e.clientX + 'px'
      dot.style.top = e.clientY + 'px'
      lbl.style.left = e.clientX + 'px'
      lbl.style.top = e.clientY + 'px'
    }

    const animate = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.1
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.1
      ring.style.left = ringPos.current.x + 'px'
      ring.style.top = ringPos.current.y + 'px'
      rafId.current = requestAnimationFrame(animate)
    }
    rafId.current = requestAnimationFrame(animate)

    document.addEventListener('mousemove', onMove)

    const hoverEls = () => document.querySelectorAll('a, button, [data-cursor]')

    const addHovers = () => {
      hoverEls().forEach(el => {
        el.addEventListener('mouseenter', () => {
          const cursorLabel = el.getAttribute('data-cursor') || ''
          setLabel(cursorLabel)
          dot.style.width = cursorLabel ? '0px' : '10px'
          dot.style.height = cursorLabel ? '0px' : '10px'
          ring.style.width = '56px'
          ring.style.height = '56px'
          ring.style.borderColor = 'rgba(197,255,0,0.5)'
          lbl.style.opacity = cursorLabel ? '1' : '0'
        })
        el.addEventListener('mouseleave', () => {
          setLabel('')
          dot.style.width = '6px'
          dot.style.height = '6px'
          ring.style.width = '36px'
          ring.style.height = '36px'
          ring.style.borderColor = 'rgba(242,242,239,0.25)'
          lbl.style.opacity = '0'
        })
      })
    }
    addHovers()

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
      <div ref={labelRef} className="cursor-label">{label}</div>
    </>
  )
}
