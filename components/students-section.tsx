import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, ExternalLink } from "lucide-react"

export function StudentsSection() {
  const testimonials = [
    {
      name: "Sarah Ahmed",
      year: "4th Year, CSE",
      image: "/diverse-female-student.png",
      quote:
        "The faculty here are incredibly supportive and the research opportunities are amazing. I've been able to work on cutting-edge AI projects that will help me in my career.",
      rating: 5,
    },
    {
      name: "Rahman Khan",
      year: "Alumni, 2023",
      image: "/placeholder-6xtvn.png",
      quote:
        "The practical approach to learning here prepared me well for the industry. I landed a job at a top tech company right after graduation.",
      rating: 5,
    },
    {
      name: "Fatima Begum",
      year: "MS Student",
      image: "/female-graduate-student.png",
      quote:
        "The research environment is excellent. My thesis supervisor provides great guidance, and the lab facilities are state-of-the-art.",
      rating: 5,
    },
  ]

  const achievements = [
    {
      title: "National Programming Contest",
      description: "Our students regularly participate and win in national programming competitions.",
      icon: "🏆",
    },
    {
      title: "Industry Internships",
      description: "Strong industry connections provide excellent internship opportunities.",
      icon: "💼",
    },
    {
      title: "Research Publications",
      description: "Students co-author research papers with faculty members.",
      icon: "📚",
    },
    {
      title: "Tech Startups",
      description: "Many alumni have founded successful technology companies.",
      icon: "🚀",
    },
  ]

  return (
    <section id="students" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Student Life & Success</h2>
          <p className="text-muted-foreground text-lg mb-6">Hear from our students and discover their achievements</p>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Student Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">What Our Students Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-muted-foreground text-sm">{testimonial.year}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="relative">
                    <Quote className="h-6 w-6 text-muted-foreground/30 absolute -top-2 -left-1" />
                    <p className="text-muted-foreground italic pl-5">{testimonial.quote}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Student Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Student Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h4 className="font-bold text-foreground mb-2">{achievement.title}</h4>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            View Student Portal
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
