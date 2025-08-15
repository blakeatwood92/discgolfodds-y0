import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Users, BookOpen, Zap, Target, Trophy } from "lucide-react"
import DiscGolfNews from "@/components/disc-golf-news"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg mr-3 flex items-center justify-center">
                <Target className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-bold font-sans text-foreground">DiscGolfOdds.com</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/odds"
                className="text-muted-foreground hover:text-primary font-serif transition-colors duration-200"
              >
                Live Odds
              </a>
              <a
                href="/guides"
                className="text-muted-foreground hover:text-primary font-serif transition-colors duration-200"
              >
                Betting Guides
              </a>
              <a
                href="/news"
                className="text-muted-foreground hover:text-primary font-serif transition-colors duration-200"
              >
                News
              </a>
              <a
                href="/retailers"
                className="text-muted-foreground hover:text-primary font-serif transition-colors duration-200"
              >
                Disc Retailers
              </a>
              <a
                href="/events"
                className="text-muted-foreground hover:text-primary font-serif transition-colors duration-200"
              >
                Events
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url('/placeholder-sr9dm.png')`,
          }}
        />
        <div className="absolute inset-0 hero-gradient" />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <div className="mb-6">
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm font-serif text-sm px-4 py-2">
              🔥 Live Odds Available Now
            </Badge>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold font-sans text-white mb-6 leading-tight">
            Elevate Your Game: <br />
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              💰 Bet on Disc Golf
            </span>
          </h1>
          <p className="text-2xl md:text-3xl font-serif text-white/95 mb-10 leading-relaxed">
            ⚡ Live Odds, Expert Guides & 💳 Secure Betting
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-serif text-lg px-8 py-4 animate-pulse-glow"
            >
              💳 Start Betting <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-serif text-lg px-8 py-4 bg-transparent backdrop-blur-sm transition-all duration-300"
            >
              View Live Odds
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-muted to-card relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url('/disc-golf-aerial.png')`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 font-serif text-sm px-4 py-2 mb-4">
              🎯 Featured Markets
            </Badge>
            <h2 className="text-4xl font-bold font-sans text-foreground mb-6">Live Disc Golf Odds</h2>
            <p className="text-xl font-serif text-muted-foreground max-w-2xl mx-auto">
              Real-time betting odds from upcoming DGPT events with instant updates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { player: "Paul McBeth", odds: "+250", event: "DGPT Championship", trend: "up", change: "+15" },
              { player: "Ricky Wysocki", odds: "+300", event: "DGPT Championship", trend: "down", change: "-10" },
              { player: "Calvin Heimburg", odds: "+400", event: "DGPT Championship", trend: "up", change: "+25" },
            ].map((odd, index) => (
              <Card
                key={index}
                className="bg-card border-2 border-border card-hover-effect group cursor-pointer overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="font-sans text-card-foreground text-xl group-hover:text-primary transition-colors">
                        {odd.player}
                      </CardTitle>
                      <CardDescription className="font-serif text-base">{odd.event}</CardDescription>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={odd.trend === "up" ? "default" : "secondary"}
                        className={`font-serif text-sm ${odd.trend === "up" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                      >
                        <TrendingUp className={`h-4 w-4 mr-1 ${odd.trend === "down" ? "rotate-180" : ""}`} />
                        {odd.odds}
                      </Badge>
                      <p className={`text-xs mt-1 ${odd.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                        {odd.change}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 font-serif text-lg py-3 transition-all duration-300"
                    asChild
                  >
                    <a href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                      Bet on Coolbet
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-card to-muted relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
            backgroundImage: `url('/disc-golf-forest-throw.png')`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-secondary/10 text-secondary border-secondary/20 font-serif text-sm px-4 py-2 mb-4">
              📰 Latest News
            </Badge>
            <h2 className="text-4xl font-bold font-sans text-foreground mb-6">Live Disc Golf News</h2>
            <p className="text-xl font-serif text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest disc golf news, tournament results, and player updates
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <DiscGolfNews q="disc golf" />
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-serif text-lg px-8 py-3 bg-transparent"
              asChild
            >
              <a href="/news">
                View All News <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 font-serif text-sm px-4 py-2 mb-4">
              📊 Platform Stats
            </Badge>
            <h2 className="text-4xl font-bold font-sans text-foreground mb-6">🏆 Trusted by Disc Golf Bettors</h2>
            <p className="text-xl font-serif text-muted-foreground max-w-2xl mx-auto">
              Join thousands of players who trust our expert analysis and live odds
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {[
              { number: "50K+", label: "Monthly Users", icon: Users, emoji: "👥" },
              { number: "95%", label: "Accuracy Rate", icon: Target, emoji: "🎯" },
              { number: "24/7", label: "Live Updates", icon: Zap, emoji: "⚡" },
              { number: "100+", label: "Tournaments Covered", icon: Trophy, emoji: "🏆" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-border group-hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold font-sans text-foreground mb-2">{stat.number}</div>
                  <div className="text-muted-foreground font-serif">
                    {stat.emoji} {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-border text-center">
            <h3 className="text-2xl font-bold font-sans text-foreground mb-4">💰 Ready to Start Betting?</h3>
            <p className="text-muted-foreground font-serif mb-6 max-w-2xl mx-auto">
              Get exclusive access to live odds, expert analysis, and betting strategies from the disc golf pros. 🎯
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary-90 font-serif text-lg px-8 py-3"
                asChild
              >
                <a href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                  💳 Start Betting on Coolbet
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-serif text-lg px-8 py-3 bg-transparent"
                asChild
              >
                <a href="/odds">View Live Odds</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 font-serif text-sm px-4 py-2 mb-4">
              🎯 Featured Markets
            </Badge>
            <h2 className="text-4xl font-bold font-sans text-foreground mb-6">Live Disc Golf Odds</h2>
            <p className="text-xl font-serif text-muted-foreground max-w-2xl mx-auto">
              Real-time betting odds from upcoming DGPT events with instant updates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { player: "Paul McBeth", odds: "+250", event: "DGPT Championship", trend: "up", change: "+15" },
              { player: "Ricky Wysocki", odds: "+300", event: "DGPT Championship", trend: "down", change: "-10" },
              { player: "Calvin Heimburg", odds: "+400", event: "DGPT Championship", trend: "up", change: "+25" },
            ].map((odd, index) => (
              <Card
                key={index}
                className="bg-card border-2 border-border card-hover-effect group cursor-pointer overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="font-sans text-card-foreground text-xl group-hover:text-primary transition-colors">
                        {odd.player}
                      </CardTitle>
                      <CardDescription className="font-serif text-base">{odd.event}</CardDescription>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={odd.trend === "up" ? "default" : "secondary"}
                        className={`font-serif text-sm ${odd.trend === "up" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                      >
                        <TrendingUp className={`h-4 w-4 mr-1 ${odd.trend === "down" ? "rotate-180" : ""}`} />
                        {odd.odds}
                      </Badge>
                      <p className={`text-xs mt-1 ${odd.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                        {odd.change}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary-90 font-serif text-lg py-3 transition-all duration-300"
                    asChild
                  >
                    <a href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                      Bet on Coolbet
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-secondary/10 text-secondary border-secondary/20 font-serif text-sm px-4 py-2 mb-4">
              📚 Learn & Win
            </Badge>
            <h2 className="text-4xl font-bold font-sans text-foreground mb-6">Master Disc Golf Betting</h2>
            <p className="text-xl font-serif text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know to start winning at disc golf betting 🎯
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: BookOpen,
                title: "📖 How to Bet on Disc Golf",
                description:
                  "Master the fundamentals of disc golf betting, from tournament winners to detailed prop bets",
                link: "/guides/how-to-bet",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: TrendingUp,
                title: "📊 Disc Golf Odds Explained",
                description: "Decode moneyline, decimal, and fractional odds with real-world examples and strategies",
                link: "/guides/odds-explained",
                color: "from-green-500 to-green-600",
              },
              {
                icon: Users,
                title: "🛒 Best Disc Retailers",
                description: "Find the best places to buy disc golf discs in Canada and USA with fast shipping 🚚",
                link: "/retailers",
                color: "from-primary to-secondary",
              },
            ].map((guide, index) => (
              <Card
                key={index}
                className="bg-card border-2 border-border card-hover-effect group cursor-pointer overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${guide.color}`} />
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-6">
                    <div className={`p-4 bg-gradient-to-br ${guide.color} rounded-xl shadow-lg`}>
                      <guide.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="font-sans text-card-foreground text-xl group-hover:text-primary transition-colors leading-tight">
                    {guide.title}
                  </CardTitle>
                  <CardDescription className="font-serif text-base leading-relaxed">
                    {guide.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto font-serif text-primary hover:text-primary/80 text-lg group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Read Complete Guide <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 font-serif text-sm px-4 py-2 mb-4">
              📊 Platform Stats
            </Badge>
            <h2 className="text-4xl font-bold font-sans text-foreground mb-6">🏆 Trusted by Disc Golf Bettors</h2>
            <p className="text-xl font-serif text-muted-foreground max-w-2xl mx-auto">
              Join thousands of players who trust our expert analysis and live odds
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {[
              { number: "50K+", label: "Monthly Users", icon: Users, emoji: "👥" },
              { number: "95%", label: "Accuracy Rate", icon: Target, emoji: "🎯" },
              { number: "24/7", label: "Live Updates", icon: Zap, emoji: "⚡" },
              { number: "100+", label: "Tournaments Covered", icon: Trophy, emoji: "🏆" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-border group-hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold font-sans text-foreground mb-2">{stat.number}</div>
                  <div className="text-muted-foreground font-serif">
                    {stat.emoji} {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-border text-center">
            <h3 className="text-2xl font-bold font-sans text-foreground mb-4">💰 Ready to Start Betting?</h3>
            <p className="text-muted-foreground font-serif mb-6 max-w-2xl mx-auto">
              Get exclusive access to live odds, expert analysis, and betting strategies from the disc golf pros. 🎯
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary-90 font-serif text-lg px-8 py-3"
                asChild
              >
                <a href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                  💳 Start Betting on Coolbet
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-serif text-lg px-8 py-3 bg-transparent"
                asChild
              >
                <a href="/odds">View Live Odds</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-slate-900 to-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg mr-3 flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold font-sans text-white">DiscGolfOdds.com</h3>
              </div>
              <p className="font-serif text-slate-300 leading-relaxed">
                Your ultimate resource for disc golf betting odds, expert guides, and exclusive bonuses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold font-sans text-white mb-6 text-lg">Betting Guides</h4>
              <ul className="space-y-3 font-serif text-slate-300">
                <li>
                  <a href="/guides/how-to-bet" className="hover:text-primary transition-colors duration-200">
                    How to Bet on Disc Golf
                  </a>
                </li>
                <li>
                  <a href="/guides/odds-explained" className="hover:text-primary transition-colors duration-200">
                    Odds Explained
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors duration-200">
                    Beginner's Guide
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold font-sans text-white mb-6 text-lg">Live Odds</h4>
              <ul className="space-y-3 font-serif text-slate-300">
                <li>
                  <a href="/events" className="hover:text-primary transition-colors duration-200">
                    DGPT Events
                  </a>
                </li>
                <li>
                  <a href="/tournaments" className="hover:text-primary transition-colors duration-200">
                    Major Championships
                  </a>
                </li>
                <li>
                  <a href="/odds" className="hover:text-primary transition-colors duration-200">
                    Player Props
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold font-sans text-white mb-6 text-lg">Disc Retailers</h4>
              <ul className="space-y-3 font-serif text-slate-300">
                <li>
                  <a href="/retailers" className="hover:text-primary transition-colors duration-200">
                    Canada Retailers
                  </a>
                </li>
                <li>
                  <a href="/retailers" className="hover:text-primary transition-colors duration-200">
                    USA Retailers
                  </a>
                </li>
                <li>
                  <a href="/retailers" className="hover:text-primary transition-colors duration-200">
                    Buying Guides
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-12 pt-8 text-center">
            <p className="font-serif text-slate-400">© 2024 DiscGolfOdds.com. All rights reserved. Bet responsibly.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
