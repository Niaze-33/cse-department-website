import { Card, CardContent } from "@/components/ui/card"
import { Monitor, Wifi, Database, Cpu, Globe, Shield } from "lucide-react"

export function FacilitySection() {
  const facilities = [
    {
      icon: Monitor,
      title: "Computer Labs",
      description: "State-of-the-art computer labs with latest hardware and software for hands-on learning.",
      image: "/modern-computer-lab-students.png",
    },
    {
      icon: Database,
      title: "Database Lab",
      description: "Dedicated database laboratory for learning database design, management, and optimization.",
      image: "/modern-server-room.png",
    },
    {
      icon: Globe,
      title: "Network Lab",
      description: "Advanced networking laboratory with Cisco equipment for network configuration and security.",
      image: "/network-lab.png",
    },
    {
      icon: Cpu,
      title: "Hardware Lab",
      description: "Electronics and hardware lab for embedded systems and microprocessor programming.",
      image: "/electronics-lab.png",
    },
    {
      icon: Shield,
      title: "Cybersecurity Lab",
      description: "Specialized lab for cybersecurity research and ethical hacking practices.",
      image: "/cybersecurity-lab.png",
    },
    {
      icon: Wifi,
      title: "Research Center",
      description: "Dedicated research facility for faculty and graduate students with high-speed internet.",
      image: "/modern-research-center.png",
    },
  ]

  return (
    <section id="facilities" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Facilities & Labs</h2>
          <p className="text-muted-foreground text-lg mb-6">
            World-class facilities to support your learning and research
          </p>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={facility.image || "/placeholder.svg"}
                  alt={facility.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center">
                    <facility.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{facility.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{facility.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
