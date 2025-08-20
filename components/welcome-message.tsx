"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function WelcomeMessage() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-16 sm:py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Welcome Message</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <Card
            className={`bg-card border-border transition-all duration-700 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"}`}
          >
            <CardContent className="p-6 sm:p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
                <div className="flex-shrink-0">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1727721632.R.jpg-ZkboIBsCsLWDw6t24bHVgm5XdFD5nl.jpeg"
                    alt="Dr. Rahat Hossain Faisal"
                    className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2">
                    MESSAGE FROM THE DEPARTMENT HEAD
                  </h3>
                  <h4 className="text-base sm:text-lg md:text-xl text-primary font-semibold mb-2 sm:mb-4">
                    Dr. Rahat Hossain Faisal
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                    Chairman, Department of Computer Science and Engineering
                  </p>
                  <p className="text-sm sm:text-base text-foreground leading-relaxed">
                    Welcome to the Department of Computer Science and Engineering at the University of Barishal. Our
                    mission is to foster excellence in teaching, research, and innovation. We are committed to preparing
                    our students for successful careers in the ever-evolving field of computing, empowering them to
                    become leaders, innovators, and responsible citizens. Join us as we continue to build a vibrant
                    academic community dedicated to knowledge, discovery, and societal impact.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
