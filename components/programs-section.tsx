"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, BookOpen, Award, ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export function ProgramsSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const programs = [
    {
      icon: GraduationCap,
      title: "Bachelor of Science (B.Sc.)",
      subtitle: "Computer Science & Engineering",
      duration: "4 Years",
      description:
        "Comprehensive undergraduate program covering fundamental and advanced topics in computer science and engineering.",
      features: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Systems",
        "Computer Networks",
        "Artificial Intelligence",
        "Web Development",
      ],
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: BookOpen,
      title: "Master of Science (M.Sc.)",
      subtitle: "Computer Science & Engineering",
      duration: "2 Years",
      description:
        "Advanced graduate program focusing on specialized areas of computer science with research opportunities.",
      features: [
        "Advanced Algorithms",
        "Machine Learning",
        "Distributed Systems",
        "Research Methodology",
        "Thesis Work",
        "Industry Collaboration",
      ],
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      icon: Award,
      title: "Doctor of Philosophy (Ph.D.)",
      subtitle: "Computer Science & Engineering",
      duration: "3-5 Years",
      description:
        "Research-intensive doctoral program for students pursuing careers in academia and advanced research.",
      features: [
        "Original Research",
        "Publication Requirements",
        "Teaching Experience",
        "Conference Presentations",
        "Dissertation Defense",
        "Academic Mentorship",
      ],
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
  ]

  const toggleExpanded = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  return (
    <section ref={sectionRef} id="programs" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Academic Programs</h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-6 max-w-2xl mx-auto">
            Explore our comprehensive degree programs designed to prepare you for success
          </p>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className={`hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer ${
                isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => toggleExpanded(index)}
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto transition-all duration-300 group-hover:scale-110 ${program.bgColor}`}
                >
                  <program.icon className={`h-8 w-8 ${program.color}`} />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold text-foreground mb-2">{program.title}</CardTitle>
                <p className="text-primary font-semibold text-sm sm:text-base">{program.subtitle}</p>
                <p className="text-muted-foreground text-xs sm:text-sm">{program.duration}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{program.description}</p>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    expandedCard === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pt-4">
                    <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Key Areas:</h4>
                    <ul className="space-y-1">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-muted-foreground text-xs sm:text-sm flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 pt-4">
                  <Button
                    className="flex-1 bg-transparent text-xs sm:text-sm"
                    variant="outline"
                    onClick={(e) => {
                      e.stopPropagation()
                      // Handle learn more action
                    }}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="sm:w-auto w-full"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleExpanded(index)
                    }}
                  >
                    {expandedCard === index ? (
                      <>
                        <ChevronUp className="h-4 w-4 mr-1" />
                        Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4 mr-1" />
                        More
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
