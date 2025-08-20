import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WelcomeMessage } from "@/components/welcome-message"
import { DepartmentHighlights } from "@/components/department-highlights"
import { NoticeBoard } from "@/components/notice-board"
import { ProgramsSection } from "@/components/programs-section"
import { FacilitySection } from "@/components/facility-section"
import { StudentsSection } from "@/components/students-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WelcomeMessage />
        <DepartmentHighlights />
        <NoticeBoard />
        <ProgramsSection />
        <FacilitySection />
        <StudentsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
