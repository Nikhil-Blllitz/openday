"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, MapPin, Calendar, Clock } from "lucide-react"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    setIsLoaded(true)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
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

      {/* Navbar */}
      {/* <nav className="fixed top-0 left-0 w-full z-40 bg-white border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="font-display text-xl font-black tracking-tighter">
              <span className="text-purple-600">INTUIT</span>
              <span className="text-black">_CIT</span>
            </div>
            <div className="hidden md:flex space-x-1">
              {["HOME", "ABOUT", "BOOK A STALL", "RSVP"].map((item, index) => (
                <Link
                  key={index}
                  href={
                    item === "HOME"
                      ? "/"
                      : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                  }
                  className={`
                    px-3 py-2 font-display text-sm font-black tracking-wider
                    ${
                      pathname ===
                      (item === "HOME"
                        ? "/"
                        : `/${item.toLowerCase().replace(/\s+/g, "-")}`)
                        ? "bg-purple-600 text-white"
                        : "hover:bg-black hover:text-white transition-colors duration-100"
                    }
                    border-2 border-black hover:border-purple-600
                  `}
                >
                  {item}
                </Link>
              ))}
            </div>
            <button className="md:hidden">
              <div className="w-6 h-0.5 bg-black mb-1.5"></div>
              <div className="w-6 h-0.5 bg-black mb-1.5"></div>
              <div className="w-6 h-0.5 bg-black"></div>
            </button>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-16">
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-20 pointer-events-none">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-gray-400"></div>
          ))}
        </div>

        <div className="glitch-container relative z-20 mb-8">
          <h1 className="text-5xl md:text-8xl font-display font-black tracking-tighter text-center glitch-text">
            <span className="block">INTUIT CIT</span>
            <span className="block text-purple-600">OPEN DAY</span>
          </h1>
          <div className="absolute inset-0 glitch-effect"></div>
        </div>

        <h2 className="text-xl md:text-3xl font-display mb-12 tracking-tight text-center">
          <span className="block">CIT's FIRST</span>
          <span className="block text-purple-600">OPEN DAY TECH FEST</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <button className="brutalist-button bg-purple-600 text-white border-2 border-black px-8 py-4 font-display font-black text-lg tracking-wider flex items-center hover:bg-white hover:text-purple-600 transition-colors duration-100">
            BOOK A STALL
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
          <button className="brutalist-button bg-transparent text-black border-2 border-black px-8 py-4 font-display font-black text-lg tracking-wider flex items-center hover:bg-black hover:text-white transition-colors duration-100">
            RSVP NOW
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-6 border-b-2 border-r-2 border-black rotate-45"></div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="relative min-h-screen bg-purple-600 text-white py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-16 border-b-4 border-white pb-4">
            EVENT_DETAILS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="border-2 border-white p-6 bg-white text-black hover:bg-purple-800 hover:text-white transition-colors duration-200">
                <div className="flex items-start">
                  <Calendar className="h-8 w-8 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-display font-black mb-2">
                      DATE & TIME
                    </h3>
                    <p className="font-display text-lg">MARCH 25, 2025</p>
                    <div className="flex items-center mt-2">
                      <Clock className="h-5 w-5 mr-2" />
                      <p className="font-display">10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-2 border-white p-6 bg-white text-black hover:bg-purple-800 hover:text-white transition-colors duration-200">
                <div className="flex items-start">
                  <MapPin className="h-8 w-8 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-display font-black mb-2">
                      LOCATION
                    </h3>
                    <p className="font-display">
                      CAMBRIDGE INSTITUTE OF TECHNOLOGY
                    </p>
                    <p className="font-display">KR PURAM, BANGALORE</p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-white p-6 bg-white text-black hover:bg-purple-800 hover:text-white transition-colors duration-200">
                <h3 className="text-xl font-display font-black mb-4">
                  WHAT TO EXPECT
                </h3>
                <ul className="space-y-2 font-display">
                  <li className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-purple-600 mr-2"></span>
                    TECH TALKS & WORKSHOPS
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-purple-600 mr-2"></span>
                    NETWORKING OPPORTUNITIES
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-purple-600 mr-2"></span>
                    PRODUCT SHOWCASES
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-purple-600 mr-2"></span>
                    CAREER GUIDANCE
                  </li>
                </ul>
              </div>
            </div>

            <div className="h-full">
              <div className="border-4 border-white h-full">
                <div className="relative w-full h-full min-h-[400px]">
                  <div className="absolute inset-0 bg-white flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="w-16 h-16 border-4 border-black border-t-transparent animate-spin rounded-full mx-auto mb-4"></div>
                      <p className="font-display font-black text-black">
                        MAP LOADING...
                      </p>
                      <p className="font-display text-sm mt-2 text-black">
                        CAMBRIDGE INSTITUTE OF TECHNOLOGY
                      </p>
                      <p className="font-display text-sm text-black">
                        KR PURAM, BANGALORE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-black py-8 px-4 border-t-4 border-purple-600">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-display font-black mb-4 text-purple-600">
                CONTACT
              </h3>
              <p className="font-display">EMAIL: INFO@INTUITCIT.COM</p>
              <p className="font-display">PHONE: +91 9876543210</p>
            </div>
            <div>
              <h3 className="text-xl font-display font-black mb-4 text-purple-600">
                FOLLOW US
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-100"
                >
                  <span className="font-display font-black">FB</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-100"
                >
                  <span className="font-display font-black">IG</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-100"
                >
                  <span className="font-display font-black">TW</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-display font-black mb-4 text-purple-600">
                ORGANIZED BY
              </h3>
              <p className="font-display">CAMBRIDGE INSTITUTE OF TECHNOLOGY</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-300 text-center">
            <p className="font-display text-sm">
              © 2025. CAMBRIDGE INSTITUTE OF TECHNOLOGY. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

