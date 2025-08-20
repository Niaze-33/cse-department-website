"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users, GraduationCap, BookOpen, Microscope } from "lucide-react"

export function DepartmentHighlights() {
  const [counts, setCounts] = useState({
    students: 0,
    faculty: 0,
    publications: 0,
    labs: 0,
  })
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const targets = {
    students: 500,
    faculty: 15,
    publications: 50,
    labs: 8,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    const intervals = Object.keys(targets).map((key) => {
      const target = targets[key as keyof typeof targets]
      const increment = target / steps
      let current = 0

      const interval = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(interval)
        }
        setCounts((prev) => ({ ...prev, [key]: Math.floor(current) }))
      }, stepDuration)

      return interval
    })

    return () => intervals.forEach(clearInterval)
  }, [isVisible])

  const highlights = [
    {
      icon: Users,
      count: counts.students,
      label: "Students",
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: GraduationCap,
      count: counts.faculty,
      label: "Faculty Members",
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      icon: BookOpen,
      count: counts.publications,
      label: "Research Publications",
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      icon: Microscope,
      count: counts.labs,
      label: "Labs & Facilities",
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Department Highlights</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className={`text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 sm:p-8">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-all duration-300 group-hover:scale-110 ${item.bgColor}`}
                >
                  <item.icon className={`h-8 w-8 ${item.color}`} />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 transition-colors duration-300">
                  {item.count}+
                </h3>
                <p className="text-muted-foreground font-medium text-sm sm:text-base">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
