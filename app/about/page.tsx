"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ComingSoonPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [dots, setDots] = useState(".")

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    setIsLoaded(true)

    // Animate dots
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "." : prev + "."))
    }, 500)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(interval)
    }
  }, [])

  if (!isLoaded) return null

  return (
    <main className="relative min-h-screen bg-white text-black overflow-hidden">
      {/* ASCII Art Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10 ascii-art"></div>

      {/* Custom cursor */}
      <div
        className="fixed w-6 h-6 border-2 border-purple-600 pointer-events-none z-50 hidden md:block"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-20 pointer-events-none">
        {Array.from({ length: 144 }).map((_, i) => (
          <div key={i} className="border border-gray-400"></div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="max-w-2xl w-full">
          <Link
            href="/"
            className="inline-flex items-center mb-8 font-display font-black text-lg border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors duration-100"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            BACK TO HOME
          </Link>

          <div className="border-4 border-black p-8 bg-white relative overflow-hidden">
            <div className="glitch-container">
              <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-6 glitch-text">
                COMING_SOON
              </h1>
            </div>

            <div className="flex items-center mb-8">
              <div className="h-1 bg-purple-600 flex-grow"></div>
              <div className="px-4 font-display font-black text-xl">PAGE UNDER CONSTRUCTION</div>
              <div className="h-1 bg-purple-600 flex-grow"></div>
            </div>

            <div className="text-center mb-8">
              <div className="inline-block border-2 border-black p-4 font-display font-black text-2xl">
                LOADING{dots}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="border-2 border-black p-4">
                <h3 className="font-display font-black text-xl mb-2">STATUS</h3>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-600 rounded-full mr-2 animate-pulse"></div>
                  <p className="font-display">DEVELOPMENT IN PROGRESS</p>
                </div>
              </div>
              <div className="border-2 border-black p-4">
                <h3 className="font-display font-black text-xl mb-2">ETA</h3>
                <p className="font-display">MARCH 15, 2025</p>
              </div>
            </div>

            <div className="text-center">
              <p className="font-display text-lg mb-4">We're working hard to bring you an amazing experience.</p>
              <p className="font-display">Check back soon or return to the homepage for more information.</p>
            </div>

            {/* ASCII art decoration */}
            <div className="absolute -bottom-10 -right-10 text-gray-200 text-6xl font-mono transform rotate-12 pointer-events-none">
              {"</>"}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

