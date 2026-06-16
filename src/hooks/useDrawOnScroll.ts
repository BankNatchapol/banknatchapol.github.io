import { type RefObject, useEffect } from 'react'

export function useDrawOnScroll(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.setAttribute('data-drawn', '') },
      { threshold: 0.15 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref])
}
