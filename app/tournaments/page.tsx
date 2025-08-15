import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Calendar, TrendingUp, DollarSign, MapPin, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Disc Golf Tournament Analysis | DGPT Events & Betting Insights | DiscGolfOdds.com",
  description:
    "Comprehensive analysis of major disc golf tournaments including PDGA Worlds, USDGC, DGPT events. Tournament stats, betting insights, and historical data.",
  keywords: "disc golf tournaments, PDGA Worlds, USDGC, DGPT, tournament analysis, disc golf betting, tournament stats",
}

const upcomingTournaments = [
  {
    id: "pdga-worlds-2024",
    name: "PDGA World Championships",
    location: "Emporia, Kansas",
    dates: "August 6-12, 2024",
    status: "upcoming",
    tier: "Major",
    purse: "$250,000",
    field: "144 MPO / 72 FPO",
    courses: ["Jones East", "Jones Gold", "Country Club"],
    defending: { mpo: "Gannon Buhr", fpo: "Kristin Tattar" },
    favorites: ["Paul McBeth", "Calvin Heimburg", "Ricky Wysocki"],
    analysis: "The most prestigious event in disc golf returns to Emporia with a loaded field.",
    bettingInsight: "McBeth historically performs well at Worlds, good value despite being favorite.",
  },
  {
    id: "usdgc-2024",
    name: "United States Disc Golf Championship",
    location: "Rock Hill, South Carolina",
    dates: "October 3-6, 2024",
    status: "upcoming",
    tier: "Major",
    purse: "$75,000",
    field: "72 MPO",
    courses: ["Winthrop Arena"],
    defending: { mpo: "Calvin Heimburg", fpo: "N/A" },
    favorites: ["Calvin Heimburg", "Paul McBeth", "Eagle McMahon"],
    analysis: "The most exclusive tournament in disc golf with only 72 invited players.",
    bettingInsight: "Course specialists have huge advantage. Look for players with Winthrop experience.",
  },
  {
    id: "european-open-2024",
    name: "European Open",
    location: "Nokia, Finland",
    dates: "July 11-14, 2024",
    status: "completed",
    tier: "Major",
    purse: "$120,000",
    field: "144 MPO / 72 FPO",
    courses: ["Beast", "Maple Hill Finland"],
    defending: { mpo: "Eagle McMahon", fpo: "Kristin Tattar" },
    winners: { mpo: "Gannon Buhr", fpo: "Kristin Tattar" },
    analysis: "European major with unique course challenges and international field.",
    bettingInsight: "European players often outperform odds on home soil.",
  },
]

const recentResults = [
  {
    tournament: "Disc Golf Pro Tour Championship",
    location: "Charlotte, NC",
    date: "October 2024",
    winners: { mpo: "Paul McBeth", fpo: "Paige Pierce" },
    purse: "$200,000",
    field: "Top 72 DGPT points earners",
  },
  {
    tournament: "PDGA World Championships",
    location: "Emporia, KS",
    date: "August 2024",
    winners: { mpo: "Gannon Buhr", fpo: "Kristin Tattar" },
    purse: "$250,000",
    field: "144 MPO / 72 FPO",
  },
  {
    tournament: "European Open",
    location: "Nokia, Finland",
    date: "July 2024",
    winners: { mpo: "Gannon Buhr", fpo: "Kristin Tattar" },
    purse: "$120,000",
    field: "144 MPO / 72 FPO",
  },
]

const tournamentStats = [
  {
    category: "Most Worlds Titles",
    leader: "Paul McBeth",
    count: "6 titles",
    years: "2012, 2013, 2014, 2015, 2019, 2022",
  },
  {
    category: "Most USDGC Titles",
    leader: "Paul McBeth",
    count: "5 titles",
    years: "2014, 2015, 2018, 2019, 2020",
  },
  {
    category: "Most DGPT Wins (2024)",
    leader: "Gannon Buhr",
    count: "4 wins",
    years: "Leading points race",
  },
  {
    category: "Highest Single Round",
    leader: "Eagle McMahon",
    count: "-18 (44)",
    years: "2023 Las Vegas Challenge",
  },
]

export default function TournamentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-600 to-orange-500 text-white py-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/tournament-podium.png')",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tournament <span className="text-orange-200">Analysis Hub</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto">
              In-depth analysis, statistics, and betting insights for major disc golf tournaments
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Trophy className="w-4 h-4 mr-1" />
                Major Championships
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <TrendingUp className="w-4 h-4 mr-1" />
                Statistical Analysis
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <DollarSign className="w-4 h-4 mr-1" />
                Betting Insights
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Upcoming Tournaments */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Major Tournament Analysis</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive breakdowns of the biggest events in professional disc golf
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {upcomingTournaments.map((tournament) => (
              <Card
                key={tournament.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge
                      variant={tournament.status === "upcoming" ? "default" : "secondary"}
                      className={tournament.status === "upcoming" ? "bg-orange-600" : ""}
                    >
                      {tournament.status === "upcoming" ? "Upcoming" : "Completed"}
                    </Badge>
                    <Badge variant="outline" className="text-orange-600 border-orange-200">
                      {tournament.tier}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">
                    {tournament.name}
                  </CardTitle>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {tournament.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {tournament.dates}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 text-sm leading-relaxed">{tournament.analysis}</p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Purse</p>
                      <p className="font-semibold text-green-600">{tournament.purse}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Field Size</p>
                      <p className="font-semibold">{tournament.field}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      {tournament.status === "upcoming" ? "Defending Champions:" : "2024 Winners:"}
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">
                        MPO: {tournament.winners?.mpo || tournament.defending.mpo}
                      </Badge>
                      {(tournament.winners?.fpo || tournament.defending.fpo) && (
                        <Badge variant="outline" className="text-xs">
                          FPO: {tournament.winners?.fpo || tournament.defending.fpo}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {tournament.favorites && (
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Betting Favorites:</p>
                      <div className="flex flex-wrap gap-1">
                        {tournament.favorites.map((player) => (
                          <Badge key={player} variant="secondary" className="text-xs">
                            {player}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="bg-orange-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-orange-800 mb-1">Betting Insight:</p>
                    <p className="text-sm text-orange-700">{tournament.bettingInsight}</p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <Link
                      href={`/tournaments/${tournament.id}`}
                      className="text-orange-600 hover:text-orange-700 font-medium text-sm hover:underline"
                    >
                      Full Analysis →
                    </Link>
                    <Link
                      href="https://coolbet.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-orange-600 text-white text-xs rounded hover:bg-orange-700 transition-colors"
                    >
                      Bet Now
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Results */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Recent Major Results</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {recentResults.map((result, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{result.tournament}</CardTitle>
                  <div className="text-sm text-gray-600">
                    <div className="flex items-center mb-1">
                      <MapPin className="w-3 h-3 mr-1" />
                      {result.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {result.date}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Champions:</p>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">MPO:</span>
                        <Badge variant="outline" className="text-orange-600">
                          {result.winners.mpo}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">FPO:</span>
                        <Badge variant="outline" className="text-orange-600">
                          {result.winners.fpo}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>
                      Purse: <span className="font-semibold text-green-600">{result.purse}</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tournament Statistics */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Tournament Records & Statistics</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tournamentStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Trophy className="w-12 h-12 text-orange-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">{stat.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-bold text-2xl text-orange-600 mb-2">{stat.count}</p>
                  <p className="font-semibold text-gray-900 mb-1">{stat.leader}</p>
                  <p className="text-xs text-gray-600">{stat.years}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tournament Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Tournament Categories</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Trophy className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                <CardTitle>Major Championships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  The most prestigious events in disc golf including Worlds, USDGC, and other major championships.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• PDGA World Championships</li>
                  <li>• United States Disc Golf Championship</li>
                  <li>• European Open</li>
                  <li>• Japan Open</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                <CardTitle>DGPT Elite Series</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Top-tier professional events that make up the Disc Golf Pro Tour's premier series.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Las Vegas Challenge</li>
                  <li>• Texas State Disc Golf Championship</li>
                  <li>• Ledgestone Insurance Open</li>
                  <li>• DGPT Championship</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                <CardTitle>Silver Series</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  High-level professional tournaments that offer significant points and prize money.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Jonesboro Open</li>
                  <li>• Green Mountain Championship</li>
                  <li>• Maple Hill Open</li>
                  <li>• Beaver State Fling</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Bet on Tournament Action</h3>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Use our tournament analysis and insights to make informed bets on upcoming disc golf events
          </p>
          <Link
            href="https://coolbet.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-white text-orange-600 font-bold rounded-lg hover:bg-orange-50 transition-colors"
          >
            Start Betting on Coolbet
          </Link>
        </div>
      </div>
    </div>
  )
}
