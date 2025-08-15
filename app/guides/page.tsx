import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BookOpen, Calculator, Target, Users } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Disc Golf Betting Guides - Learn to Bet Like a Pro | DiscGolfOdds.com",
  description:
    "Complete collection of disc golf betting guides. Learn the sport, betting types, odds, and strategies to maximize your winnings.",
}

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold font-sans text-foreground">
                DiscGolfOdds.com
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#odds" className="text-muted-foreground hover:text-foreground font-serif">
                Live Odds
              </Link>
              <Link href="/guides" className="text-primary font-serif">
                Betting Guides
              </Link>
              <Link href="/bonuses" className="text-muted-foreground hover:text-foreground font-serif">
                Coolbet Bonuses
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-sans text-foreground mb-4">Disc Golf Betting Guides</h1>
          <p className="text-xl font-serif text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know to become a successful disc golf bettor. From understanding the sport to
            advanced betting strategies.
          </p>
        </div>

        {/* Main Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[
            {
              icon: BookOpen,
              title: "What is Disc Golf?",
              description:
                "Complete introduction to disc golf - rules, formats, scoring, and why it's perfect for betting. Essential reading for newcomers.",
              link: "/guides/what-is-disc-golf",
              level: "Beginner",
              readTime: "8 min read",
            },
            {
              icon: Target,
              title: "How to Bet on Disc Golf",
              description:
                "Master every betting type from tournament winners to prop bets. Learn outright winners, matchups, and live betting strategies.",
              link: "/guides/how-to-bet",
              level: "Beginner",
              readTime: "12 min read",
            },
            {
              icon: Calculator,
              title: "Disc Golf Odds Explained",
              description:
                "Understand American, decimal, and fractional odds with real examples. Learn to calculate payouts and find value bets.",
              link: "/guides/odds-explained",
              level: "Intermediate",
              readTime: "10 min read",
            },
            {
              icon: Users,
              title: "Beginner's Guide",
              description:
                "Step-by-step walkthrough: create your Coolbet account, deposit funds, and place your first winning bet.",
              link: "/guides/beginners-guide",
              level: "Beginner",
              readTime: "15 min read",
            },
          ].map((guide, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-200 cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <guide.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-serif text-muted-foreground">{guide.readTime}</div>
                    <div className="text-xs font-serif bg-muted px-2 py-1 rounded mt-1">{guide.level}</div>
                  </div>
                </div>
                <CardTitle className="font-sans group-hover:text-primary transition-colors">{guide.title}</CardTitle>
                <CardDescription className="font-serif">{guide.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="p-0 h-auto font-serif text-primary hover:text-primary/80" asChild>
                  <Link href={guide.link}>
                    Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Path */}
        <Card className="mb-12 bg-muted/50">
          <CardHeader>
            <CardTitle className="font-sans text-center">Recommended Learning Path</CardTitle>
            <CardDescription className="font-serif text-center">
              Follow this sequence for the best learning experience
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              {[
                { step: 1, title: "What is Disc Golf?", link: "/guides/what-is-disc-golf" },
                { step: 2, title: "How to Bet", link: "/guides/how-to-bet" },
                { step: 3, title: "Odds Explained", link: "/guides/odds-explained" },
                { step: 4, title: "Beginner's Guide", link: "/guides/beginners-guide" },
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <Link href={item.link} className="flex flex-col items-center group">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mb-2 group-hover:bg-primary/80 transition-colors">
                      {item.step}
                    </div>
                    <span className="text-sm font-serif text-center group-hover:text-primary transition-colors">
                      {item.title}
                    </span>
                  </Link>
                  {index < 3 && <ArrowRight className="h-4 w-4 text-muted-foreground mx-4 hidden md:block" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Tips */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="font-sans text-lg">For Beginners</CardTitle>
            </CardHeader>
            <CardContent className="font-serif">
              <ul className="space-y-2 text-sm">
                <li>• Start with small bets while learning</li>
                <li>• Focus on tournament winners first</li>
                <li>• Research player form and course history</li>
                <li>• Use our Coolbet bonus to practice</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-sans text-lg">For Intermediate</CardTitle>
            </CardHeader>
            <CardContent className="font-serif">
              <ul className="space-y-2 text-sm">
                <li>• Explore head-to-head matchups</li>
                <li>• Learn to read odds movements</li>
                <li>• Try prop bets for better value</li>
                <li>• Track your betting performance</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-sans text-lg">For Advanced</CardTitle>
            </CardHeader>
            <CardContent className="font-serif">
              <ul className="space-y-2 text-sm">
                <li>• Master live betting strategies</li>
                <li>• Analyze course-specific data</li>
                <li>• Build statistical models</li>
                <li>• Hedge bets for guaranteed profits</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center p-8 bg-accent rounded-lg">
          <h3 className="text-2xl font-bold font-sans text-accent-foreground mb-4">Ready to Start Betting?</h3>
          <p className="font-serif text-accent-foreground/90 mb-6">
            Put your knowledge to work with our exclusive Coolbet welcome bonus
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-accent hover:bg-white/90 font-serif" asChild>
            <Link href="/bonuses">
              Claim Your $40 Bonus <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
