import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, UserPlus, CreditCard, Target } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Beginner's Guide to Disc Golf Betting - Step by Step | DiscGolfOdds.com",
  description:
    "Complete beginner's guide to disc golf betting. Learn how to create a Coolbet account, deposit funds, and place your first winning bet.",
}

export default function BeginnersGuidePage() {
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
            <li className="text-foreground">Beginner's Guide</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold font-sans text-foreground mb-4">Beginner's Guide to Disc Golf Betting</h1>
          <p className="text-xl font-serif text-muted-foreground">
            Your complete step-by-step guide to placing your first disc golf bet on Coolbet
          </p>
        </div>

        {/* Progress Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: UserPlus, title: "Create Account", desc: "Sign up with Coolbet" },
            { icon: CreditCard, title: "Deposit Funds", desc: "Add money to bet" },
            { icon: Target, title: "Place Your Bet", desc: "Choose your wager" },
            { icon: CheckCircle, title: "Track & Win", desc: "Follow your bets" },
          ].map((step, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">
                  {index + 1}
                </div>
                <step.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <h3 className="font-semibold font-sans text-sm">{step.title}</h3>
                <p className="text-xs font-serif text-muted-foreground">{step.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Step 1: Create Account */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-sans flex items-center">
              <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-3">
                1
              </div>
              Create Your Coolbet Account
            </CardTitle>
            <CardDescription className="font-serif">Get started with our exclusive welcome bonus</CardDescription>
          </CardHeader>
          <CardContent className="font-serif">
            <div className="space-y-4">
              <div className="bg-accent/10 border border-accent/20 p-4 rounded-lg">
                <h4 className="font-semibold font-sans mb-2 text-accent">Exclusive Bonus: Bet $20, Get $40</h4>
                <p className="text-sm">New customers only. Use our link to claim this special offer.</p>
              </div>

              <div>
                <h4 className="font-semibold font-sans mb-2">What You'll Need:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Valid email address</li>
                  <li>• Phone number for verification</li>
                  <li>• Government-issued ID (driver's license or passport)</li>
                  <li>• Proof of address (utility bill or bank statement)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold font-sans mb-2">Account Creation Steps:</h4>
                <ol className="space-y-2 text-sm">
                  <li>1. Click our exclusive Coolbet link below</li>
                  <li>2. Fill in your personal details accurately</li>
                  <li>3. Verify your email address</li>
                  <li>4. Complete phone verification</li>
                  <li>5. Upload required documents for account verification</li>
                </ol>
              </div>

              <Button className="w-full font-serif" asChild>
                <a href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                  Create Coolbet Account - Get $40 Bonus
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Step 2: Deposit Funds */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-sans flex items-center">
              <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-3">
                2
              </div>
              Deposit Funds
            </CardTitle>
            <CardDescription className="font-serif">Add money to your account to start betting</CardDescription>
          </CardHeader>
          <CardContent className="font-serif">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold font-sans mb-2">Payment Methods:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Credit/Debit Cards (Visa, Mastercard)</li>
                    <li>• Bank Transfer</li>
                    <li>• E-wallets (PayPal, Skrill)</li>
                    <li>• Cryptocurrency (Bitcoin, Ethereum)</li>
                  </ul>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold font-sans mb-2">Deposit Limits:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Minimum: $10</li>
                    <li>• Maximum: $5,000 per transaction</li>
                    <li>• Daily limit: $10,000</li>
                    <li>• Instant processing for most methods</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-semibold font-sans mb-2 text-green-800 dark:text-green-200">Bonus Tip:</h4>
                <p className="text-sm">
                  Deposit at least $20 to qualify for the welcome bonus. Your bonus funds will be credited automatically
                  after your first bet.
                </p>
              </div>

              <div>
                <h4 className="font-semibold font-sans mb-2">How to Deposit:</h4>
                <ol className="space-y-1 text-sm">
                  <li>1. Log into your Coolbet account</li>
                  <li>2. Click "Deposit" in the top menu</li>
                  <li>3. Choose your preferred payment method</li>
                  <li>4. Enter deposit amount (minimum $20 for bonus)</li>
                  <li>5. Complete payment details and confirm</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step 3: Place Your First Bet */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-sans flex items-center">
              <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-3">
                3
              </div>
              Place Your First Bet
            </CardTitle>
            <CardDescription className="font-serif">
              Navigate to disc golf markets and make your selection
            </CardDescription>
          </CardHeader>
          <CardContent className="font-serif">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold font-sans mb-2">Finding Disc Golf Markets:</h4>
                <ol className="space-y-1 text-sm">
                  <li>1. Go to the Sports section</li>
                  <li>2. Look for "Other Sports" or search "Disc Golf"</li>
                  <li>3. Select the tournament you want to bet on</li>
                  <li>4. Browse available betting markets</li>
                </ol>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold font-sans mb-2">Recommended First Bets:</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <strong>Tournament Winner:</strong> Simple and straightforward - pick who you think will win
                  </div>
                  <div>
                    <strong>Head-to-Head:</strong> Choose between two players - easier than picking the overall winner
                  </div>
                  <div>
                    <strong>Top 3 Finish:</strong> Bet on a player to finish in the top 3 positions
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold font-sans mb-2">Placing the Bet:</h4>
                <ol className="space-y-1 text-sm">
                  <li>1. Click on the odds for your chosen selection</li>
                  <li>2. Enter your stake amount in the bet slip</li>
                  <li>3. Review potential winnings</li>
                  <li>4. Click "Place Bet" to confirm</li>
                  <li>5. Keep your bet slip reference number</li>
                </ol>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold font-sans mb-2 text-blue-800 dark:text-blue-200">Beginner Strategy:</h4>
                <p className="text-sm">
                  Start with small bets ($5-$20) while you learn. Focus on players you know and tournaments you follow.
                  Don't bet more than you can afford to lose.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step 4: Track Your Bets */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-sans flex items-center">
              <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-3">
                4
              </div>
              Track Your Bets and Results
            </CardTitle>
            <CardDescription className="font-serif">Monitor your wagers and learn from outcomes</CardDescription>
          </CardHeader>
          <CardContent className="font-serif">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold font-sans mb-2">Tracking Your Bets:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Check "My Bets" section in your account</li>
                    <li>• Follow live scores and leaderboards</li>
                    <li>• Set up notifications for bet results</li>
                    <li>• Keep a personal betting record</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold font-sans mb-2">Learning from Results:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Analyze why bets won or lost</li>
                    <li>• Note which strategies work best</li>
                    <li>• Track your overall profit/loss</li>
                    <li>• Adjust bet sizes based on confidence</li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold font-sans mb-2">Responsible Gambling:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Set daily, weekly, and monthly deposit limits</li>
                  <li>• Never chase losses with bigger bets</li>
                  <li>• Take breaks if you're on a losing streak</li>
                  <li>• Use Coolbet's responsible gambling tools</li>
                  <li>• Remember: betting should be fun, not stressful</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Mistakes */}
        <Card className="mb-8 bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
          <CardHeader>
            <CardTitle className="font-sans text-red-800 dark:text-red-200">
              Common Beginner Mistakes to Avoid
            </CardTitle>
          </CardHeader>
          <CardContent className="font-serif">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold font-sans mb-2">Betting Mistakes:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Betting too much too soon</li>
                  <li>• Always betting on favorites</li>
                  <li>• Not understanding the odds</li>
                  <li>• Betting on every tournament</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold font-sans mb-2">Research Mistakes:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Not checking player form</li>
                  <li>• Ignoring course conditions</li>
                  <li>• Following tips blindly</li>
                  <li>• Betting based on emotions</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="mb-8 bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="font-sans text-primary">Your Next Steps</CardTitle>
          </CardHeader>
          <CardContent className="font-serif">
            <div className="space-y-4">
              <p>
                Congratulations! You now have everything you need to start betting on disc golf. Here's what to do next
                to improve your betting success:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <h4 className="font-semibold font-sans mb-2">Learn More</h4>
                  <p className="text-sm mb-2">Study our advanced guides and betting strategies</p>
                  <Button variant="outline" size="sm" asChild className="font-serif bg-transparent">
                    <Link href="/guides">View All Guides</Link>
                  </Button>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold font-sans mb-2">Follow Events</h4>
                  <p className="text-sm mb-2">Stay updated with DGPT tournaments and player news</p>
                  <Button variant="outline" size="sm" asChild className="font-serif bg-transparent">
                    <Link href="/events">View Events</Link>
                  </Button>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold font-sans mb-2">Get Bonuses</h4>
                  <p className="text-sm mb-2">Maximize your bankroll with exclusive promotions</p>
                  <Button variant="outline" size="sm" asChild className="font-serif bg-transparent">
                    <Link href="/bonuses">View Bonuses</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="mt-12 p-6 bg-accent rounded-lg text-center">
          <h3 className="text-2xl font-bold font-sans text-accent-foreground mb-4">Ready to Start Betting?</h3>
          <p className="font-serif text-accent-foreground/90 mb-6">
            Create your Coolbet account now and claim your exclusive $40 welcome bonus
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-accent hover:bg-white/90 font-serif" asChild>
            <a href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
              Get Started with Coolbet <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
