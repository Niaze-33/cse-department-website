import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Faculty", href: "#faculty" },
    { name: "Research", href: "#research" },
    { name: "Admissions", href: "#admissions" },
    { name: "Contact", href: "#contact" },
  ]

  const academicLinks = [
    { name: "Undergraduate", href: "#undergraduate" },
    { name: "Graduate", href: "#graduate" },
    { name: "PhD Programs", href: "#phd" },
    { name: "Course Catalog", href: "#courses" },
    { name: "Academic Calendar", href: "#calendar" },
    { name: "Student Portal", href: "#portal" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Department Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-sm">CSE</span>
              </div>
              <span className="font-bold text-lg">CSE-BU</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Department of Computer Science & Engineering, University of Barishal. Fostering excellence in teaching,
              research, and innovation.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-primary-foreground/80 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic */}
          <div>
            <h3 className="font-bold text-lg mb-4">Academic</h3>
            <ul className="space-y-2">
              {academicLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-primary-foreground/80 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">Kornokathi, Barishal-8254, Bangladesh</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">0431-2177771-77</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">registrar@bu.ac.bd</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 text-sm">
              © 2025 Department of Computer Science & Engineering, University of Barishal. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-primary-foreground/80 hover:text-accent text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-accent text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
