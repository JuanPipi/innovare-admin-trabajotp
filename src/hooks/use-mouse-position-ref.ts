import { useEffect, useRef, RefObject } from "react"

export function useMousePositionRef(containerRef: RefObject<HTMLElement | null>) {
  const mousePositionRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const container = containerRef.current

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container
        ? container.getBoundingClientRect()
        : { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight }

      mousePositionRef.current = {
        x: e.clientX - rect.left - rect.width / 2,
        y: e.clientY - rect.top - rect.height / 2,
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [containerRef])

  return mousePositionRef
}
