import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Bell, FileText, Clock, Trophy } from "lucide-react"

export function NoticeBoard() {
  const notices = [
    {
      icon: Bell,
      title: "Class Test for CSE-2101",
      description: "Class Test for CSE-2101 will be held on 20 August, 2025 at 10:00 AM in Classroom 1.",
      date: "2025-08-15",
      type: "Academic",
      urgent: true,
    },
    {
      icon: FileText,
      title: "Android App Development Workshop",
      description: "Registration for the Android App Development Workshop is open now! Limited seats available.",
      date: "2025-08-10",
      type: "Workshop",
      urgent: false,
    },
    {
      icon: Trophy,
      title: "National ICT Award 2025",
      description: "Congratulations! Our department has won the National ICT Award 2025.",
      date: "2025-08-05",
      type: "Achievement",
      urgent: false,
    },
    {
      icon: Calendar,
      title: "Lab Classes Postponed",
      description: "All lab classes will be postponed on 21 August, 2025.",
      date: "2025-08-01",
      type: "Notice",
      urgent: false,
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Notice Board</h2>
          <p className="text-muted-foreground text-lg mb-6">Latest Announcements & Updates</p>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {notices.map((notice, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-shadow duration-300 ${notice.urgent ? "border-l-4 border-l-destructive" : ""}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full ${notice.urgent ? "bg-destructive/10" : "bg-primary/10"}`}>
                        <notice.icon className={`h-5 w-5 ${notice.urgent ? "text-destructive" : "text-primary"}`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold text-foreground">{notice.title}</CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant={notice.urgent ? "destructive" : "secondary"}>{notice.type}</Badge>
                          {notice.urgent && (
                            <Badge variant="destructive" className="text-xs">
                              Urgent
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {new Date(notice.date).toLocaleDateString()}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{notice.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
