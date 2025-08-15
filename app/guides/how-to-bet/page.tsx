import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Target, TrendingUp, Users, Trophy } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "How to Bet on Disc Golf - Complete Betting Guide | DiscGolfOdds.com",
  description:
    "Learn all disc golf betting types: outright winners, matchups, props, and live betting. Expert strategies and tips for successful disc golf wagering.",
}

export default function HowToBetPage() {
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
            <li className="text-foreground">How to Bet on Disc Golf</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold font-sans text-foreground mb-4">How to Bet on Disc Golf</h1>
          <p className="text-xl font-serif text-muted-foreground">
            Master every type of disc golf bet from tournament winners to live props
          </p>
        </div>

        {/* Betting Types Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Trophy, title: "Outright Winners", desc: "Tournament champions" },
            { icon: Users, title: "Head-to-Head", desc: "Player matchups" },
            { icon: Target, title: "Prop Bets", desc: "Specific outcomes" },
            { icon: TrendingUp, title: "Live Betting", desc: "In-play wagering" },
          ].map((type, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <type.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold font-sans">{type.title}</h3>
                <p className="text-sm font-serif text-muted-foreground">{type.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Betting Types */}
        <div className="space-y-8">
          {/* Outright Winner Bets */}
          <Card>
            <CardHeader>
              <CardTitle className="font-sans flex items-center">
                <Trophy className="h-5 w-5 text-primary mr-2" />
                Outright Winner Bets
              </CardTitle>
              <CardDescription className="font-serif">Bet on who will win the entire tournament</CardDescription>
            </CardHeader>
            <CardContent className="font-serif">
              <div className="space-y-4">
                <p>
                  The most straightforward disc golf bet - pick the tournament winner before it starts. These bets
                  typically offer the best odds for underdogs and can provide significant payouts.
                </p>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold font-sans mb-2">Example:</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span>Paul McBeth</span>
                      <Badge variant="secondary">+250</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Ricky Wysocki</span>
                      <Badge variant="secondary">+300</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Calvin Heimburg</span>
                      <Badge variant="secondary">+400</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    A $100 bet on Calvin Heimburg at +400 would win $400 if he wins the tournament.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold font-sans mb-2">Strategy Tips:</h4>
                  <ul className="space-y-1">
                    <li>• Research recent form and course history</li>
                    <li>• Consider weather conditions and course layout</li>
                    <li>• Look for value in players with good course records</li>
                    <li>• Don't always bet the favorite - disc golf has many upsets</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Head-to-Head Matchups */}
          <Card>
            <CardHeader>
              <CardTitle className="font-sans flex items-center">
                <Users className="h-5 w-5 text-primary mr-2" />
                Head-to-Head Matchups
              </CardTitle>
              <CardDescription className="font-serif">
                Bet on which player will finish higher in the tournament
              </CardDescription>
            </CardHeader>
            <CardContent className="font-serif">
              <div className="space-y-4">
                <p>
                  Head-to-head bets pit two players against each other. You're betting on which player will have the
                  better tournament finish, regardless of who wins overall.
                </p>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold font-sans mb-2">Example Matchup:</h4>
                  <div className="flex justify-between items-center mb-2">
                    <span>Eagle McMahon vs. Simon Lizotte</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-2 bg-background rounded">
                      <div className="font-semibold">Eagle McMahon</div>
                      <Badge variant="secondary">-110</Badge>
                    </div>
                    <div className="text-center p-2 bg-background rounded">
                      <div className="font-semibold">Simon Lizotte</div>
                      <Badge variant="secondary">-110</Badge>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold font-sans mb-2">Why Bet Head-to-Head:</h4>
                  <ul className="space-y-1">
                    <li>• Easier to predict than outright winners</li>
                    <li>• Often more even odds between players</li>
                    <li>• Great for backing underdogs against favorites</li>
                    <li>• Available throughout the tournament</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Prop Bets */}
          <Card>
            <CardHeader>
              <CardTitle className="font-sans flex items-center">
                <Target className="h-5 w-5 text-primary mr-2" />
                Proposition (Prop) Bets
              </CardTitle>
              <CardDescription className="font-serif">
                Bet on specific events or achievements during the tournament
              </CardDescription>
            </CardHeader>
            <CardContent className="font-serif">
              <div className="space-y-4">
                <p>
                  Prop bets focus on specific outcomes within the tournament rather than overall winners. These can be
                  some of the most entertaining and profitable bets.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold font-sans mb-2">Popular Props:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Will there be a hole-in-one (ace)?</li>
                      <li>• Lowest single round score</li>
                      <li>• Total aces in the tournament</li>
                      <li>• Player to make the most birdies</li>
                      <li>• First round leader</li>
                      <li>• Will the winner be under par?</li>
                    </ul>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold font-sans mb-2">Example Props:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Ace in Round 1</span>
                        <Badge variant="secondary">+150</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>McBeth Lowest Round</span>
                        <Badge variant="secondary">+200</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Over 2.5 Total Aces</span>
                        <Badge variant="secondary">+180</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Live Betting */}
          <Card>
            <CardHeader>
              <CardTitle className="font-sans flex items-center">
                <TrendingUp className="h-5 w-5 text-primary mr-2" />
                Live Betting
              </CardTitle>
              <CardDescription className="font-serif">Bet on changing odds during the tournament</CardDescription>
            </CardHeader>
            <CardContent className="font-serif">
              <div className="space-y-4">
                <p>
                  Live betting allows you to place wagers while the tournament is in progress. Odds change in real-time
                  based on player performance and leaderboard position.
                </p>

                <div className="bg-accent/10 border border-accent/20 p-4 rounded-lg">
                  <h4 className="font-semibold font-sans mb-2 text-accent">Live Betting Advantages:</h4>
                  <ul className="space-y-1">
                    <li>• React to real-time performance</li>
                    <li>• Hedge existing bets</li>
                    <li>• Find value as odds shift</li>
                    <li>• Bet on momentum swings</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold font-sans mb-2">Live Betting Strategy:</h4>
                  <ul className="space-y-1">
                    <li>• Watch for weather changes affecting play</li>
                    <li>• Monitor leaderboard movements</li>
                    <li>• Look for overreactions in odds</li>
                    <li>• Consider course difficulty by round</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Betting Tips */}
        <Card className="mt-8 bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="font-sans text-primary">Expert Betting Tips</CardTitle>
          </CardHeader>
          <CardContent className="font-serif">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold font-sans mb-2">Research is Key</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Study player course history</li>
                  <li>• Check recent tournament results</li>
                  <li>• Consider weather forecasts</li>
                  <li>• Analyze course layout and difficulty</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold font-sans mb-2">Bankroll Management</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Never bet more than you can afford</li>
                  <li>• Use unit sizing (1-5% of bankroll)</li>
                  <li>• Don't chase losses</li>
                  <li>• Keep detailed records</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h3 className="text-xl font-bold font-sans text-foreground mb-4">Ready to Place Your First Bet?</h3>
          <p className="font-serif text-muted-foreground mb-6">
            Start with our exclusive Coolbet bonus and put your disc golf knowledge to the test.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="font-serif">
              <Link href="/bonuses">
                Get Coolbet Bonus <ArrowRight className="ml-2 h-4 w-4" />
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
