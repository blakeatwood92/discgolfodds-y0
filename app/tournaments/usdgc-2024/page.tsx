import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Trophy, MapPin, Calendar, Users, DollarSign, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "USDGC 2024 Analysis | United States Disc Golf Championship Preview",
  description:
    "Complete analysis of the 2024 United States Disc Golf Championship at Winthrop Arena. Course breakdown, player analysis, and betting insights.",
  keywords: "USDGC 2024, Winthrop Arena, disc golf championship betting, tournament analysis",
}

const topContenders = [
  {
    name: "Calvin Heimburg",
    odds: "+300",
    analysis:
      "Defending champion with exceptional course management skills. Winthrop Arena suits his technical style perfectly.",
    strengths: ["Course experience", "Accuracy", "Mental game"],
    recommendation: "Strong favorite with proven track record",
  },
  {
    name: "Paul McBeth",
    odds: "+400",
    analysis: "5-time USDGC champion who knows how to win at Winthrop. Experience gives him a significant edge.",
    strengths: ["Experience", "Clutch performance", "Course knowledge"],
    recommendation: "Great value for a proven champion",
  },
  {
    name: "Eagle McMahon",
    odds: "+600",
    analysis: "Power player who has adapted his game for technical courses. Strong recent form at similar venues.",
    strengths: ["Distance", "Improved accuracy", "Youth"],
    recommendation: "High upside pick with good odds",
  },
]

export default function USDGC2024Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/tournaments" className="inline-flex items-center text-orange-200 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tournament Analysis
          </Link>
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-2xl">
              <Trophy className="w-12 h-12" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">United States Disc Golf Championship 2024</h1>
              <div className="space-y-1 text-orange-100">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="text-xl">Rock Hill, South Carolina</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="text-xl">October 3-6, 2024</span>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-4 text-sm">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Major Championship
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  $75,000 Purse
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  72 Player Field
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tournament Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-orange-600" />
                  Tournament Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The United States Disc Golf Championship is the most exclusive tournament in professional disc golf,
                  featuring only 72 invited players competing at the legendary Winthrop Arena in Rock Hill, South
                  Carolina.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Known for its incredibly challenging layout and pristine conditions, Winthrop Arena has been the home
                  of the USDGC since 1999. The course demands precision, course management, and mental fortitude above
                  raw distance.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With its invitation-only format and rich history, the USDGC represents the pinnacle of disc golf
                  competition and is considered one of the most prestigious titles in the sport.
                </p>
              </CardContent>
            </Card>

            {/* Course Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-orange-600" />
                  Winthrop Arena Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Course Characteristics</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 18 holes, Par 64</li>
                      <li>• Length: 8,400+ feet</li>
                      <li>• Mix of open and wooded holes</li>
                      <li>• Significant elevation changes</li>
                      <li>• Premium rough and hazards</li>
                      <li>• Immaculate course conditions</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Key Success Factors</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Course management over raw distance</li>
                      <li>• Consistent putting under pressure</li>
                      <li>• Experience with premium rough penalties</li>
                      <li>• Mental toughness for 4-day grind</li>
                      <li>• Adaptability to changing conditions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Top Contenders */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-orange-600" />
                  Top Contenders Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {topContenders.map((player) => (
                    <div key={player.name} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900 text-lg">{player.name}</h4>
                        <Badge variant="outline" className="text-green-600 font-bold">
                          {player.odds}
                        </Badge>
                      </div>
                      <p className="text-gray-700 text-sm mb-3">{player.analysis}</p>
                      <div className="mb-3">
                        <p className="font-medium text-green-800 mb-1 text-sm">Key Strengths:</p>
                        <div className="flex flex-wrap gap-1">
                          {player.strengths.map((strength) => (
                            <Badge key={strength} variant="outline" className="text-xs text-green-700">
                              {strength}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="bg-orange-50 p-2 rounded">
                        <p className="text-sm font-medium text-orange-800">Betting Recommendation:</p>
                        <p className="text-sm text-orange-700">{player.recommendation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tournament Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tournament Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Format</span>
                  <span className="font-semibold">Invitation Only</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Field Size</span>
                  <span className="font-semibold">72 players</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rounds</span>
                  <span className="font-semibold">4 rounds</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Course</span>
                  <span className="font-semibold">Winthrop Arena</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Defending Champion</span>
                  <span className="font-semibold">Calvin Heimburg</span>
                </div>
              </CardContent>
            </Card>

            {/* Betting Strategy */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <DollarSign className="w-5 h-5 mr-2 text-orange-600" />
                  Betting Strategy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Course Specialists</h4>
                  <p className="text-sm text-green-700">
                    Players with Winthrop experience have a huge advantage. Look for past USDGC winners and frequent
                    competitors.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Technical Players</h4>
                  <p className="text-sm text-blue-700">
                    Accuracy and course management trump distance. Favor players known for consistency over power.
                  </p>
                </div>

                <Link
                  href="https://coolbet.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Bet on USDGC
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
