import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calculator, TrendingUp, DollarSign } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Disc Golf Odds Explained - Moneyline, Decimal & Fractional | DiscGolfOdds.com",
  description:
    "Master disc golf betting odds with real examples. Learn moneyline, decimal, and fractional odds to maximize your betting profits.",
}

export default function OddsExplainedPage() {
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
            <li className="text-foreground">Odds Explained</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold font-sans text-foreground mb-4">Disc Golf Odds Explained</h1>
          <p className="text-xl font-serif text-muted-foreground">
            Master betting odds to maximize your disc golf wagering profits
          </p>
        </div>

        {/* Odds Format Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: DollarSign, title: "American (+/-)", desc: "Most common in US", example: "+250, -150" },
            { icon: Calculator, title: "Decimal", desc: "Popular in Europe", example: "3.50, 1.67" },
            { icon: TrendingUp, title: "Fractional", desc: "Traditional UK format", example: "5/2, 2/3" },
          ].map((format, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <format.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold font-sans">{format.title}</h3>
                <p className="text-sm font-serif text-muted-foreground mb-2">{format.desc}</p>
                <Badge variant="secondary" className="font-serif">
                  {format.example}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* American Odds */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-sans flex items-center">
              <DollarSign className="h-5 w-5 text-primary mr-2" />
              American Odds (Moneyline)
            </CardTitle>
            <CardDescription className="font-serif">
              The most common format on Coolbet and US sportsbooks
            </CardDescription>
          </CardHeader>
          <CardContent className="font-serif">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold font-sans mb-2 text-green-800 dark:text-green-200">Positive Odds (+)</h4>
                  <p className="mb-2">Shows how much profit you make on a $100 bet.</p>
                  <div className="bg-background p-3 rounded border">
                    <div className="font-semibold">Example: Paul McBeth +250</div>
                    <div className="text-sm text-muted-foreground">Bet $100 → Win $250 profit (+ $100 stake back)</div>
                    <div className="text-sm text-muted-foreground">Total return: $350</div>
                  </div>
                </div>

                <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                  <h4 className="font-semibold font-sans mb-2 text-red-800 dark:text-red-200">Negative Odds (-)</h4>
                  <p className="mb-2">Shows how much you need to bet to win $100 profit.</p>
                  <div className="bg-background p-3 rounded border">
                    <div className="font-semibold">Example: Ricky Wysocki -150</div>
                    <div className="text-sm text-muted-foreground">Bet $150 → Win $100 profit (+ $150 stake back)</div>
                    <div className="text-sm text-muted-foreground">Total return: $250</div>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold font-sans mb-2">Real Disc Golf Example:</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Paul McBeth (Favorite)</span>
                    <Badge variant="secondary">-120</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Calvin Heimburg</span>
                    <Badge variant="secondary">+180</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Eagle McMahon</span>
                    <Badge variant="secondary">+220</Badge>
                  </div>
                </div>
                <div className="mt-3 text-sm text-muted-foreground">
                  <p>• McBeth: Bet $120 to win $100 (he's the favorite)</p>
                  <p>• Heimburg: Bet $100 to win $180 (underdog with good value)</p>
                  <p>• McMahon: Bet $100 to win $220 (bigger underdog, bigger payout)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Decimal Odds */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-sans flex items-center">
              <Calculator className="h-5 w-5 text-primary mr-2" />
              Decimal Odds
            </CardTitle>
            <CardDescription className="font-serif">Simple multiplication to calculate total returns</CardDescription>
          </CardHeader>
          <CardContent className="font-serif">
            <div className="space-y-4">
              <p>
                Decimal odds show your total return (including stake) for every $1 bet. Simply multiply your bet by the
                decimal odds.
              </p>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold font-sans mb-2">How to Calculate:</h4>
                <div className="space-y-2">
                  <div className="bg-background p-3 rounded">
                    <div className="font-semibold">Example: Simon Lizotte at 4.50 odds</div>
                    <div className="text-sm">$100 bet × 4.50 = $450 total return</div>
                    <div className="text-sm text-muted-foreground">Profit = $450 - $100 = $350</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold font-sans mb-2">Conversion Examples:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>+200 (American)</span>
                      <span>= 3.00 (Decimal)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>+150 (American)</span>
                      <span>= 2.50 (Decimal)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>-150 (American)</span>
                      <span>= 1.67 (Decimal)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>-200 (American)</span>
                      <span>= 1.50 (Decimal)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold font-sans mb-2">Quick Reference:</h4>
                  <div className="space-y-1 text-sm">
                    <div>• 2.00 = Even money (50/50 chance)</div>
                    <div>• 1.50 = Strong favorite</div>
                    <div>• 3.00 = Moderate underdog</div>
                    <div>• 5.00+ = Long shot</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Fractional Odds */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-sans flex items-center">
              <TrendingUp className="h-5 w-5 text-primary mr-2" />
              Fractional Odds
            </CardTitle>
            <CardDescription className="font-serif">
              Traditional format showing profit relative to stake
            </CardDescription>
          </CardHeader>
          <CardContent className="font-serif">
            <div className="space-y-4">
              <p>
                Fractional odds show the profit you'll make relative to your stake. The first number is your profit, the
                second is your stake.
              </p>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold font-sans mb-2">How to Read Fractional Odds:</h4>
                <div className="space-y-3">
                  <div className="bg-background p-3 rounded">
                    <div className="font-semibold">Example: Paige Pierce at 3/1 odds</div>
                    <div className="text-sm">For every $1 you bet, you win $3 profit</div>
                    <div className="text-sm">$100 bet = $300 profit + $100 stake = $400 total</div>
                  </div>
                  <div className="bg-background p-3 rounded">
                    <div className="font-semibold">Example: Catrina Allen at 1/2 odds</div>
                    <div className="text-sm">For every $2 you bet, you win $1 profit</div>
                    <div className="text-sm">$100 bet = $50 profit + $100 stake = $150 total</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold font-sans mb-2">Common Fractions:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>1/1 (Evens)</span>
                      <span>Double your money</span>
                    </div>
                    <div className="flex justify-between">
                      <span>2/1</span>
                      <span>Triple your money</span>
                    </div>
                    <div className="flex justify-between">
                      <span>5/1</span>
                      <span>Six times your money</span>
                    </div>
                    <div className="flex justify-between">
                      <span>1/2</span>
                      <span>Win half your stake</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold font-sans mb-2">Conversion to Decimal:</h4>
                  <div className="space-y-1 text-sm">
                    <div>• 3/1 = 4.00 decimal</div>
                    <div>• 2/1 = 3.00 decimal</div>
                    <div>• 1/1 = 2.00 decimal</div>
                    <div>• 1/2 = 1.50 decimal</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Understanding Probability */}
        <Card className="mb-8 bg-accent/5 border-accent/20">
          <CardHeader>
            <CardTitle className="font-sans text-accent">Understanding Implied Probability</CardTitle>
            <CardDescription className="font-serif">What odds really mean in terms of chances</CardDescription>
          </CardHeader>
          <CardContent className="font-serif">
            <div className="space-y-4">
              <p>
                Odds reflect the bookmaker's assessment of probability. Understanding this helps you find value bets.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-4 rounded-lg">
                  <h4 className="font-semibold font-sans mb-2">Probability Formula:</h4>
                  <div className="space-y-2 text-sm">
                    <div>• Decimal odds: 1 ÷ odds × 100</div>
                    <div>• Example: 3.00 odds = 33.3% chance</div>
                    <div>• Example: 1.50 odds = 66.7% chance</div>
                  </div>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <h4 className="font-semibold font-sans mb-2">Finding Value:</h4>
                  <div className="space-y-2 text-sm">
                    <div>• If you think a player has a 40% chance</div>
                    <div>• But odds suggest only 25% (4.00 odds)</div>
                    <div>• This could be a value bet</div>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold font-sans mb-2">Real Example:</h4>
                <p className="text-sm">
                  If Calvin Heimburg is +300 (4.00 decimal) to win a tournament, the bookmaker thinks he has a 25%
                  chance. If you've researched and believe he has a 35% chance based on his course history and recent
                  form, this represents good value.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Odds Movement */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-sans">Why Odds Change</CardTitle>
            <CardDescription className="font-serif">Understanding line movement in disc golf betting</CardDescription>
          </CardHeader>
          <CardContent className="font-serif">
            <div className="space-y-4">
              <p>
                Odds aren't static - they move based on various factors. Understanding why helps you time your bets.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold font-sans mb-2">Factors That Move Odds:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Betting volume on specific players</li>
                    <li>• Injury news or player withdrawals</li>
                    <li>• Weather forecast changes</li>
                    <li>• Recent tournament results</li>
                    <li>• Course condition updates</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold font-sans mb-2">Betting Strategy:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Bet early for best underdog odds</li>
                    <li>• Wait for favorites if expecting bad news</li>
                    <li>• Monitor weather forecasts</li>
                    <li>• Follow player social media for updates</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h3 className="text-xl font-bold font-sans text-foreground mb-4">Ready to Use Your Odds Knowledge?</h3>
          <p className="font-serif text-muted-foreground mb-6">
            Now that you understand odds, get started with our beginner's guide and exclusive Coolbet bonus.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="font-serif">
              <Link href="/guides/beginners-guide">
                Beginner's Guide <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild className="font-serif bg-transparent">
              <Link href="/bonuses">Get Coolbet Bonus</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
