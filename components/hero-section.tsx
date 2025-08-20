"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Users, Award, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const slides = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/385440995_786835713450838_1581342109887070293_n.jpg-JxmA5SG7CnBJXQYlzXPDPM53Aq3pJ3.jpeg",
      alt: "University of Barishal Campus Aerial View",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Barishal_University.jpg-5cW83vlSW6qiAktx7rI2tyiK0kHenN.jpeg",
      alt: "University Academic Building with Lake Reflection",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bar.jpg-2sJeJUvbW1OJlLl1sxBhQIw2NqldWJ.jpeg",
      alt: "University of Barishal Building at Night",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Academic_Buildings_of_the_University_of_Barishal.jpg-rLt0PMETLntHKrH7yf5wTbSaZU3NOt.jpeg",
      alt: "Academic Building Perfect Water Reflection",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6214fe354054d.jpg-g6fAZ3YhYL6hm3yMI42gD0pNylaX36.webp",
      alt: "University Campus with Natural Landscaping",
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [slides.length])

  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) nextSlide()
    if (isRightSwipe) prevSlide()
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  if (isLoading) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 to-amber-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading...</p>
        </div>
      </section>
    )
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <img
              src={slide.src || "/placeholder.svg"}
              alt={slide.alt}
              className="w-full h-full object-cover transition-transform duration-1000"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Department of Computer Science & Engineering
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8">University of Barishal</p>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Fostering excellence in teaching, research, and innovation. Preparing students for successful careers in the
            ever-evolving field of computing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Explore Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Apply Now
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <Users className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">500+</h3>
              <p className="text-white/80">Students</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <BookOpen className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">15+</h3>
              <p className="text-white/80">Faculty Members</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <Award className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
              <p className="text-white/80">Research Publications</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
