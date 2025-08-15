import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Target, Users, Trophy, Clock } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "What is Disc Golf? Complete Guide to the Sport | DiscGolfOdds.com",
  description:
    "Learn everything about disc golf - rules, formats, scoring, and why it's perfect for betting. Complete beginner's guide to understanding the sport.",
}

export default function WhatIsDiscGolfPage() {
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm font-serif text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/guides" className="hover:text-foreground">
                Guides
              </Link>
            </li>
            <li>/</li>
            <li className="text-foreground">What is Disc Golf?</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold font-sans text-foreground mb-4">What is Disc Golf?</h1>
          <p className="text-xl font-serif text-muted-foreground">
            A complete guide to understanding disc golf - the fastest growing sport perfect for betting
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-sans">Disc Golf Basics</CardTitle>
            </CardHeader>
            <CardContent className="font-serif">
              <p className="mb-4">
                Disc golf is a precision sport played much like traditional golf, but instead of hitting a ball into a
                hole, players throw specialized discs toward elevated metal baskets. The objective is simple: complete
                each hole in the fewest throws possible.
              </p>
              <p>
                What makes disc golf exciting for betting is its combination of skill, strategy, and the unpredictable
                elements that can dramatically change outcomes - from weather conditions to course layouts.
              </p>
            </CardContent>
          </Card>

          {/* Key Elements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Target className="h-5 w-5 text-primary mr-2" />
                  <CardTitle className="font-sans">Equipment</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="font-serif">
                <ul className="space-y-2">
                  <li>
                    <strong>Drivers:</strong> Long-distance throws off the tee
                  </li>
                  <li>
                    <strong>Mid-range:</strong> Controlled approach shots
                  </li>
                  <li>
                    <strong>Putters:</strong> Short, accurate throws near the basket
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Trophy className="h-5 w-5 text-primary mr-2" />
                  <CardTitle className="font-sans">Scoring</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="font-serif">
                <ul className="space-y-2">
                  <li>
                    <strong>Par:</strong> Expected throws for each hole
                  </li>
                  <li>
                    <strong>Birdie:</strong> One under par (-1)
                  </li>
                  <li>
                    <strong>Eagle:</strong> Two under par (-2)
                  </li>
                  <li>
                    <strong>Ace:</strong> Hole-in-one
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Tournament Formats */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-sans">Tournament Formats</CardTitle>
              <CardDescription className="font-serif">Understanding different competition styles</CardDescription>
            </CardHeader>
            <CardContent className="font-serif">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold font-sans mb-2">Stroke Play</h4>
                  <p>
                    Most common format where total strokes across all rounds determine the winner. Used in DGPT events.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold font-sans mb-2">Match Play</h4>
                  <p>
                    Head-to-head competition where players compete hole-by-hole. Great for betting on individual
                    matchups.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold font-sans mb-2">Doubles</h4>
                  <p>Team format where two players alternate throws. Adds strategy and unpredictability.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Scene */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-sans">Professional Disc Golf</CardTitle>
              <CardDescription className="font-serif">The competitive landscape</CardDescription>
            </CardHeader>
            <CardContent className="font-serif">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold font-sans mb-2">DGPT (Disc Golf Pro Tour)</h4>
                  <p className="mb-4">
                    The premier professional tour featuring the world's best players competing for significant prize
                    money.
                  </p>
                  <Badge variant="secondary" className="font-serif">
                    Primary Betting Focus
                  </Badge>
                </div>
                <div>
                  <h4 className="font-semibold font-sans mb-2">Major Championships</h4>
                  <ul className="space-y-1">
                    <li>• PDGA World Championships</li>
                    <li>• US Disc Golf Championship</li>
                    <li>• European Open</li>
                    <li>• Worlds Masters Cup</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Why Bet on Disc Golf */}
          <Card className="mb-8 bg-accent/10 border-accent/20">
            <CardHeader>
              <CardTitle className="font-sans text-accent">Why Disc Golf is Perfect for Betting</CardTitle>
            </CardHeader>
            <CardContent className="font-serif">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                  <h4 className="font-semibold font-sans mb-2">Skill vs. Luck</h4>
                  <p className="text-sm">
                    Perfect balance of player skill and course conditions creates exciting betting opportunities.
                  </p>
                </div>
                <div className="text-center">
                  <Clock className="h-8 w-8 text-accent mx-auto mb-2" />
                  <h4 className="font-semibold font-sans mb-2">Multiple Rounds</h4>
                  <p className="text-sm">
                    Multi-day tournaments offer various betting markets and live betting opportunities.
                  </p>
                </div>
                <div className="text-center">
                  <Target className="h-8 w-8 text-accent mx-auto mb-2" />
                  <h4 className="font-semibold font-sans mb-2">Detailed Stats</h4>
                  <p className="text-sm">
                    Rich statistical data helps informed betting decisions on player performance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Next Steps */}
        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h3 className="text-xl font-bold font-sans text-foreground mb-4">Ready to Start Betting?</h3>
          <p className="font-serif text-muted-foreground mb-6">
            Now that you understand disc golf, learn how to place your first bet and start winning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="font-serif">
              <Link href="/guides/how-to-bet">
                How to Bet on Disc Golf <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild className="font-serif bg-transparent">
              <Link href="/guides/odds-explained">Learn About Odds</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
