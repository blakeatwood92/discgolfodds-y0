import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, MapPin, Trophy, TrendingUp, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Best Bets: 2025 DGPT Ledgestone Open Pre-Event Odds Analysis | DiscGolfOdds.com",
  description:
    "Complete pre-event odds analysis for the 2025 DGPT Ledgestone Open. Expert picks, betting odds, and comprehensive tournament preview.",
  keywords: "DGPT Ledgestone Open 2025, disc golf betting odds, Gannon Buhr, Holyn Handley, tournament analysis",
}

const mpoOdds = [
  { player: "Gannon Buhr", odds: "+208", payout: "$61.60", favorite: true },
  { player: "Anthony Barela", odds: "+539", payout: "$127.80" },
  { player: "Calvin Heimburg", odds: "+588", payout: "$137.60" },
  { player: "Ezra Robinson", odds: "+644", payout: "$148.80" },
  { player: "Richard Wysocki", odds: "+682", payout: "$156.40" },
  { player: "Isaac Robinson", odds: "+1158", payout: "$251.60" },
  { player: "Paul McBeth", odds: "+1212", payout: "$262.40" },
  { player: "Sullivan Tipton", odds: "+2497", payout: "$519.40" },
  { player: "Ezra Aderhold", odds: "+2686", payout: "$557.20" },
  { player: "Corey Ellis", odds: "+2709", payout: "$561.80" },
  { player: "Aaron Gossage", odds: "+2833", payout: "$586.60" },
  { player: "Adam Hammes", odds: "+2885", payout: "$597.00" },
  { player: "Väinö Mäkelä", odds: "+3523", payout: "$724.60" },
  { player: "Chris Dickerson", odds: "+4530", payout: "$926.00" },
  { player: "Eagle McMahon", odds: "+10653", payout: "$2,150.60" },
]

const fpoOdds = [
  { player: "Holyn Handley", odds: "+147", payout: "$49.40", favorite: true },
  { player: "Missy Gannon", odds: "+312", payout: "$82.40" },
  { player: "Ohn Scoggins", odds: "+423", payout: "$104.60" },
  { player: "Kat Mertsch", odds: "+1314", payout: "$282.80" },
  { player: "Paige Pierce", odds: "+1436", payout: "$307.20" },
  { player: "Valerie Mandujano", odds: "+1664", payout: "$352.80" },
  { player: "Cadence Burge", odds: "+1735", payout: "$367.00" },
  { player: "Rebecca Cox", odds: "+3868", payout: "$793.60" },
  { player: "Catrina Allen", odds: "+4248", payout: "$869.60" },
  { player: "Macie Velediaz", odds: "+5028", payout: "$1,025.60" },
]

const mpoH2H = [
  { matchup: "Anthony Barela vs Calvin Heimburg", favorite: "Anthony Barela", odds: "-116", payout: "$37.24" },
  { matchup: "Ezra Robinson vs Isaac Robinson", favorite: "Ezra Robinson", odds: "-140", payout: "$34.29" },
  { matchup: "Richard Wysocki vs Sullivan Tipton", favorite: "Richard Wysocki", odds: "-252", payout: "$27.94" },
]

const fpoH2H = [
  { matchup: "Holyn Handley vs Missy Gannon", favorite: "Holyn Handley", odds: "-160", payout: "$32.50" },
  { matchup: "Ohn Scoggins vs Valerie Mandujano", favorite: "Ohn Scoggins", odds: "-102", payout: "$39.61" },
]

export default function LedgestoneOpenAnalysis() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">DiscGolfOdds.com</span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/odds" className="text-slate-600 hover:text-primary transition-colors">
                Live Odds
              </Link>
              <Link href="/guides" className="text-slate-600 hover:text-primary transition-colors">
                Betting Guides
              </Link>
              <Link href="/retailers" className="text-slate-600 hover:text-primary transition-colors">
                Disc Retailers
              </Link>
              <Link href="/events" className="text-slate-600 hover:text-primary transition-colors">
                Events
              </Link>
              <Link href="/news" className="text-slate-600 hover:text-primary transition-colors">
                News
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Navigation */}
        <Link
          href="/events"
          className="inline-flex items-center text-slate-600 hover:text-primary mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Events
        </Link>

        {/* Header */}
        <div className="mb-8">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">🏆 Tournament Analysis</Badge>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Best Bets: 2025 DGPT Ledgestone Open Pre-Event Odds Analysis
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            After a thrilling summer across the pond, professional disc golf returns its focus to the shores of the
            United States for the 2025 DGPT Ledgestone Open. Division leaders Holyn Handley and Gannon Buhr tee off in
            Illinois as the favorites in the pre-event odds, but they'll face stiff competition from a formidable field.
          </p>
        </div>

        {/* Betting Promotion */}
        <Card className="mb-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">💳 Exclusive Betting Bonus</h3>
                <p className="text-slate-600">Get $200 in bonus bets when you bet $5 on DGPT events</p>
              </div>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                  Claim Bonus
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Schedule and Viewing */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-primary" />📅 Schedule and How to Watch DGPT Ledgestone Open
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <Calendar className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">📅 Dates</h4>
                  <p className="text-slate-600">August 15-18, 2025</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">🏞️ Venue</h4>
                  <p className="text-slate-600">Lake Eureka Disc Golf Course, Illinois</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">⏰ Tee Times</h4>
                  <p className="text-slate-600">
                    FPO: 9:00 AM CDT
                    <br />
                    MPO: 3:00 PM CDT
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-slate-50 rounded-lg">
              <p className="text-slate-700">
                📺 <strong>Live Coverage:</strong> Watch every shot live on the Disc Golf Network from Thursday through
                Sunday. Gannon Buhr (MPO) and Holyn Handley (FPO) return as defending champions.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* MPO Event Winner Odds */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Trophy className="w-5 h-5 mr-2 text-primary" />🏆 MPO Event Winner Odds
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 mb-6">
              Reigning Ledgestone Open Champion and MPO DGPT World Standings leader Gannon Buhr arrives in Illinois as
              the player to beat. He's fresh off a World Championship title, his fourth tournament victory of the year,
              which makes him the winningest player in the division.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Player</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Odds</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">$20 Payout</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {mpoOdds.map((player, index) => (
                    <tr
                      key={index}
                      className={`border-b border-slate-100 hover:bg-slate-50 ${player.favorite ? "bg-primary/5" : ""}`}
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          {player.favorite && (
                            <Badge className="mr-2 bg-primary/10 text-primary border-primary/20">👑 Favorite</Badge>
                          )}
                          <span className="font-medium text-slate-900">{player.player}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 font-mono text-slate-700">{player.odds}</td>
                      <td className="py-3 px-4 font-semibold text-green-600">{player.payout}</td>
                      <td className="py-3 px-4">
                        <Button size="sm" variant="outline" asChild>
                          <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                            💳 Bet Now
                          </Link>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* MPO Expert Pick */}
        <Card className="mb-8 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center text-green-800">
              <TrendingUp className="w-5 h-5 mr-2" />🎯 MPO Expert Pick
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-green-900 mb-2">Gannon Buhr (+208)</h3>
                <p className="text-green-700">
                  The series leader and the winningest MPO player this season is an easy expert pick for the Ledgestone
                  Open. Potential payout of $61.60 on a $20 wager.
                </p>
              </div>
              <Button className="bg-green-600 hover:bg-green-700" asChild>
                <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                  💳 Back Our Pick
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* MPO Head-to-Head */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>⚔️ MPO Head-to-Head Matchups</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mpoH2H.map((match, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-slate-900">{match.matchup}</h4>
                    <p className="text-sm text-slate-600">Favorite: {match.favorite}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-slate-700">{match.odds}</p>
                    <p className="text-sm text-green-600">{match.payout}</p>
                  </div>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                      💳 Bet
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* FPO Event Winner Odds */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Trophy className="w-5 h-5 mr-2 text-primary" />👑 FPO Event Winner Odds
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 mb-6">
              Holyn Handley has epitomized consistency in 2025, finishing every tournament inside the top 10. The FPO
              World Standings leader is also a four-time winner this season and is heavily favored to get the job done
              in Eureka.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Player</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Odds</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">$20 Payout</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {fpoOdds.map((player, index) => (
                    <tr
                      key={index}
                      className={`border-b border-slate-100 hover:bg-slate-50 ${player.favorite ? "bg-primary/5" : ""}`}
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          {player.favorite && (
                            <Badge className="mr-2 bg-primary/10 text-primary border-primary/20">👑 Favorite</Badge>
                          )}
                          <span className="font-medium text-slate-900">{player.player}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 font-mono text-slate-700">{player.odds}</td>
                      <td className="py-3 px-4 font-semibold text-green-600">{player.payout}</td>
                      <td className="py-3 px-4">
                        <Button size="sm" variant="outline" asChild>
                          <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                            💳 Bet Now
                          </Link>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* FPO Expert Pick */}
        <Card className="mb-8 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center text-purple-800">
              <TrendingUp className="w-5 h-5 mr-2" />🎯 FPO Expert Pick
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">Holyn Handley (+147)</h3>
                <p className="text-purple-700">
                  FPO World Standings leader Holyn Handley is too consistent to ignore. Potential payout of $49.40 on a
                  $20 bet.
                </p>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                  💳 Back Our Pick
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* FPO Head-to-Head */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>⚔️ FPO Head-to-Head Matchups</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {fpoH2H.map((match, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-slate-900">{match.matchup}</h4>
                    <p className="text-sm text-slate-600">Favorite: {match.favorite}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-slate-700">{match.odds}</p>
                    <p className="text-sm text-green-600">{match.payout}</p>
                  </div>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                      💳 Bet
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Card className="mb-8 bg-amber-50 border-amber-200">
          <CardContent className="p-6">
            <h3 className="font-semibold text-amber-800 mb-2">⚠️ Odds Subject to Change</h3>
            <p className="text-amber-700 text-sm">
              Please note that the odds provided herein reflect the raw probability odds for this analysis and are based
              on the information available when publishing. Different sportsbooks may adjust these odds based on market
              conditions, bettor behaviors, and other factors that could influence the betting landscape.
            </p>
          </CardContent>
        </Card>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-primary to-secondary text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">🎯 Ready to Place Your Bets?</h2>
            <p className="text-lg mb-6 opacity-90">
              Armed with these insights, prepare to place your bets on the DGPT Discraft Ledgestone Open. Secure the
              latest futures odds and special promotions at our partner sportsbooks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                  💳 Start Betting Now
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                asChild
              >
                <Link href="/guides">📚 View Betting Guides</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
