import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, TrendingUp, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Disc Golf Player Profiles | Pro Player Stats & Analysis | DiscGolfOdds.com",
  description:
    "Comprehensive profiles of top disc golf professionals including Paul McBeth, Ricky Wysocki, Calvin Heimburg, and more. Player stats, betting insights, and performance analysis.",
  keywords:
    "disc golf players, Paul McBeth, Ricky Wysocki, Calvin Heimburg, Eagle McMahon, Kristin Tattar, Paige Pierce, PDGA professionals",
}

const maleProPlayers = [
  {
    id: "paul-mcbeth",
    name: "Paul McBeth",
    nickname: "The GOAT",
    pdgaNumber: "27523",
    rating: 1048,
    worldTitles: 6,
    majorWins: 15,
    careerEarnings: "$750,000+",
    playingStyle: "Power & Precision",
    strengths: ["Consistency", "Mental Game", "All Conditions"],
    recentForm: "Excellent",
    bettingInsight: "Always a favorite, but odds often undervalue his consistency",
    image: "/paul-mcbeth-profile.png",
  },
  {
    id: "ricky-wysocki",
    name: "Ricky Wysocki",
    nickname: "Socket",
    pdgaNumber: "38008",
    rating: 1042,
    worldTitles: 2,
    majorWins: 8,
    careerEarnings: "$400,000+",
    playingStyle: "Aggressive Power",
    strengths: ["Distance", "Scrambling", "Clutch Performance"],
    recentForm: "Strong",
    bettingInsight: "Great value bet in windy conditions and wooded courses",
    image: "/ricky-wysocki-profile.png",
  },
  {
    id: "calvin-heimburg",
    name: "Calvin Heimburg",
    nickname: "Big Jerm's Protégé",
    pdgaNumber: "46823",
    rating: 1040,
    worldTitles: 1,
    majorWins: 4,
    careerEarnings: "$300,000+",
    playingStyle: "Technical Precision",
    strengths: ["Accuracy", "Course Management", "Putting"],
    recentForm: "Excellent",
    bettingInsight: "Undervalued on technical courses, great head-to-head value",
    image: "/calvin-heimburg-profile.png",
  },
  {
    id: "eagle-mcmahon",
    name: "Eagle McMahon",
    nickname: "The Eagle",
    pdgaNumber: "37817",
    rating: 1038,
    worldTitles: 0,
    majorWins: 3,
    careerEarnings: "$250,000+",
    playingStyle: "Athletic Power",
    strengths: ["Distance", "Forehand", "Course Reading"],
    recentForm: "Good",
    bettingInsight: "High ceiling player, good value when odds are long",
    image: "/eagle-mcmahon-profile.png",
  },
]

const femaleProPlayers = [
  {
    id: "kristin-tattar",
    name: "Kristin Tattar",
    nickname: "The Estonian Eagle",
    pdgaNumber: "70296",
    rating: 965,
    worldTitles: 2,
    majorWins: 6,
    careerEarnings: "$150,000+",
    playingStyle: "Consistent Precision",
    strengths: ["Putting", "Mental Game", "All-Around"],
    recentForm: "Dominant",
    bettingInsight: "Current world #1, often good value despite being favorite",
    image: "/kristin-tattar-profile.png",
  },
  {
    id: "paige-pierce",
    name: "Paige Pierce",
    nickname: "Fierce Pierce",
    pdgaNumber: "29190",
    rating: 963,
    worldTitles: 5,
    majorWins: 12,
    careerEarnings: "$200,000+",
    playingStyle: "Power & Finesse",
    strengths: ["Distance", "Consistency", "Experience"],
    recentForm: "Strong",
    bettingInsight: "Veteran experience shows in majors, good value in big events",
    image: "/paige-pierce-profile.png",
  },
  {
    id: "catrina-allen",
    name: "Catrina Allen",
    nickname: "Cat",
    pdgaNumber: "13829",
    rating: 955,
    worldTitles: 1,
    majorWins: 8,
    careerEarnings: "$180,000+",
    playingStyle: "Aggressive Attack",
    strengths: ["Power", "Scrambling", "Clutch"],
    recentForm: "Good",
    bettingInsight: "Boom or bust player, great value when odds are long",
    image: "/catrina-allen-profile.png",
  },
]

export default function PlayersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-600 to-orange-500 text-white py-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/disc-golf-tournament-crowd.png')",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Disc Golf <span className="text-orange-200">Pro Players</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto">
              Comprehensive profiles, statistics, and betting insights for top PDGA professionals
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Trophy className="w-4 h-4 mr-1" />
                World Champions
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <TrendingUp className="w-4 h-4 mr-1" />
                Betting Analysis
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Target className="w-4 h-4 mr-1" />
                Performance Stats
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Male Pro Division */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Male Pro Division (MPO)</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The world's elite male disc golf professionals competing at the highest level
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {maleProPlayers.map((player) => (
            <Card
              key={player.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-xl">
                    {player.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">
                      {player.name}
                    </CardTitle>
                    <p className="text-orange-600 font-medium">{player.nickname}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline" className="text-xs">
                        Rating: {player.rating}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        #{player.pdgaNumber}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">World Titles</p>
                    <p className="font-semibold text-orange-600">{player.worldTitles}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Major Wins</p>
                    <p className="font-semibold text-orange-600">{player.majorWins}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Playing Style</p>
                    <p className="font-semibold">{player.playingStyle}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Recent Form</p>
                    <Badge variant={player.recentForm === "Excellent" ? "default" : "secondary"} className="text-xs">
                      {player.recentForm}
                    </Badge>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2">Key Strengths:</p>
                  <div className="flex flex-wrap gap-1">
                    {player.strengths.map((strength) => (
                      <Badge key={strength} variant="outline" className="text-xs">
                        {strength}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-orange-800 mb-1">Betting Insight:</p>
                  <p className="text-sm text-orange-700">{player.bettingInsight}</p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <Link
                    href={`/players/${player.id}`}
                    className="text-orange-600 hover:text-orange-700 font-medium text-sm hover:underline"
                  >
                    View Full Profile →
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

        {/* Female Pro Division */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Female Pro Division (FPO)</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The world's elite female disc golf professionals setting new standards
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {femaleProPlayers.map((player) => (
            <Card
              key={player.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-orange-500 flex items-center justify-center text-white font-bold">
                    {player.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg group-hover:text-orange-600 transition-colors">
                      {player.name}
                    </CardTitle>
                    <p className="text-orange-600 font-medium text-sm">{player.nickname}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline" className="text-xs">
                        Rating: {player.rating}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-gray-600">World Titles</p>
                    <p className="font-semibold text-orange-600">{player.worldTitles}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Major Wins</p>
                    <p className="font-semibold text-orange-600">{player.majorWins}</p>
                  </div>
                </div>

                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-orange-800 mb-1">Betting Insight:</p>
                  <p className="text-sm text-orange-700">{player.bettingInsight}</p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <Link
                    href={`/players/${player.id}`}
                    className="text-orange-600 hover:text-orange-700 font-medium text-sm hover:underline"
                  >
                    Full Profile →
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

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Bet on Your Favorite Players</h3>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Use these player insights to make informed betting decisions on upcoming tournaments
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
