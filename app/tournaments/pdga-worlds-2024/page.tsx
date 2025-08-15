import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Trophy, MapPin, Calendar, Users, DollarSign, Target, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "PDGA World Championships 2024 Analysis | Emporia Tournament Preview",
  description:
    "Complete analysis of the 2024 PDGA World Championships in Emporia, Kansas. Course breakdown, player analysis, betting odds, and tournament predictions.",
  keywords: "PDGA Worlds 2024, Emporia disc golf, world championships betting, disc golf tournament analysis",
}

const courseBreakdown = [
  {
    name: "Jones East",
    holes: 18,
    par: 61,
    length: "8,200 ft",
    difficulty: "Championship",
    features: ["Open", "Wind", "Strategic"],
    description: "Open course that rewards distance and wind management skills.",
  },
  {
    name: "Jones Gold",
    holes: 18,
    par: 59,
    length: "7,800 ft",
    difficulty: "Championship",
    features: ["Mixed", "Technical", "Elevation"],
    description: "Mix of open and wooded holes with elevation changes.",
  },
  {
    name: "Country Club",
    holes: 18,
    par: 58,
    length: "7,400 ft",
    difficulty: "Championship",
    features: ["Wooded", "Technical", "Precision"],
    description: "Technical wooded course requiring accuracy and course management.",
  },
]

const topContenders = [
  {
    name: "Paul McBeth",
    odds: "+250",
    analysis: "6-time world champion with unmatched Emporia experience. Historically performs well in Kansas wind.",
    strengths: ["Experience", "Wind play", "Mental game"],
    concerns: ["Age", "Recent form"],
    recommendation: "Strong value despite being favorite",
  },
  {
    name: "Calvin Heimburg",
    odds: "+400",
    analysis: "Defending USDGC champion with excellent course management skills. Thrives on technical courses.",
    strengths: ["Accuracy", "Putting", "Consistency"],
    concerns: ["Distance", "Wind struggles"],
    recommendation: "Great value on technical courses",
  },
  {
    name: "Gannon Buhr",
    odds: "+500",
    analysis: "Young star with incredible distance and improving consistency. Could be breakthrough tournament.",
    strengths: ["Distance", "Youth", "Momentum"],
    concerns: ["Experience", "Pressure"],
    recommendation: "High upside pick with good odds",
  },
  {
    name: "Ricky Wysocki",
    odds: "+600",
    analysis: "Two-time world champion who excels in challenging conditions. Strong wind player.",
    strengths: ["Power", "Wind play", "Experience"],
    concerns: ["Consistency", "Putting"],
    recommendation: "Solid value for experienced bettor",
  },
]

const historicalData = [
  { year: 2023, winner: "Gannon Buhr", location: "Emporia, KS", winningScore: "-42" },
  { year: 2022, winner: "Paul McBeth", location: "Emporia, KS", winningScore: "-38" },
  { year: 2021, winner: "Paul McBeth", location: "Emporia, KS", winningScore: "-35" },
  { year: 2019, winner: "Paul McBeth", location: "Peoria, IL", winningScore: "-41" },
]

export default function PDGAWorlds2024Page() {
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
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white font-bold text-2xl">
              <Trophy className="w-12 h-12" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">PDGA World Championships 2024</h1>
              <div className="space-y-1 text-orange-100">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="text-xl">Emporia, Kansas</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="text-xl">August 6-12, 2024</span>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-4 text-sm">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Major Championship
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  $250,000 Purse
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  144 MPO Field
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
                  The 2024 PDGA World Championships return to Emporia, Kansas, for the fourth consecutive year. This
                  prestigious event brings together the world's best disc golfers to compete for the sport's most
                  coveted title across three challenging championship courses.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Emporia has proven to be an ideal host city, with its combination of open prairie courses and
                  technical wooded layouts providing a comprehensive test of disc golf skills. The Kansas wind adds an
                  additional challenge that separates the elite players from the field.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With a record $250,000 purse and 144 of the world's top male professionals competing, the 2024 Worlds
                  promises to be the most competitive championship in disc golf history.
                </p>
              </CardContent>
            </Card>

            {/* Course Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-orange-600" />
                  Course Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {courseBreakdown.map((course) => (
                    <div key={course.name} className="border-l-4 border-orange-500 pl-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900 text-lg">{course.name}</h4>
                        <Badge variant="outline" className="text-orange-600">
                          {course.difficulty}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mb-3 text-sm">
                        <div>
                          <p className="text-gray-600">Holes</p>
                          <p className="font-semibold">{course.holes}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Par</p>
                          <p className="font-semibold">{course.par}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Length</p>
                          <p className="font-semibold">{course.length}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm mb-3">{course.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {course.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Contenders Analysis */}
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
                      <div className="grid md:grid-cols-2 gap-4 mb-3">
                        <div>
                          <p className="font-medium text-green-800 mb-1 text-sm">Strengths:</p>
                          <div className="flex flex-wrap gap-1">
                            {player.strengths.map((strength) => (
                              <Badge key={strength} variant="outline" className="text-xs text-green-700">
                                {strength}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="font-medium text-red-800 mb-1 text-sm">Concerns:</p>
                          <div className="flex flex-wrap gap-1">
                            {player.concerns.map((concern) => (
                              <Badge key={concern} variant="outline" className="text-xs text-red-700">
                                {concern}
                              </Badge>
                            ))}
                          </div>
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

            {/* Historical Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-orange-600" />
                  Historical Worlds Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {historicalData.map((year) => (
                    <div key={year.year} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-semibold text-gray-900">
                          {year.year} - {year.winner}
                        </p>
                        <p className="text-sm text-gray-600">{year.location}</p>
                      </div>
                      <Badge variant="outline" className="text-orange-600">
                        {year.winningScore}
                      </Badge>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Key Trends:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Paul McBeth has won 3 of the last 4 Emporia Worlds</li>
                    <li>• Winning scores have been getting lower (more competitive)</li>
                    <li>• Wind conditions significantly impact scoring</li>
                    <li>• Course management more important than raw distance</li>
                  </ul>
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
                  <span className="text-gray-600">Dates</span>
                  <span className="font-semibold">Aug 6-12, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location</span>
                  <span className="font-semibold">Emporia, KS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Purse</span>
                  <span className="font-semibold text-green-600">$250,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">MPO Field</span>
                  <span className="font-semibold">144 players</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">FPO Field</span>
                  <span className="font-semibold">72 players</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rounds</span>
                  <span className="font-semibold">5 rounds</span>
                </div>
              </CardContent>
            </Card>

            {/* Weather Forecast */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Weather Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-1">Wind Conditions</h4>
                    <p className="text-yellow-700">
                      Kansas wind is a major factor. Expect 10-20 mph winds with gusts up to 30 mph. Favor players with
                      strong wind management skills.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-1">Temperature</h4>
                    <p className="text-blue-700">
                      August temperatures typically range from 75-95°F. Heat and humidity can affect player stamina over
                      5 rounds.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Betting Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <DollarSign className="w-5 h-5 mr-2 text-orange-600" />
                  Betting Strategy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Best Value Bets</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Calvin Heimburg (+400) - Course management specialist</li>
                    <li>• Gannon Buhr (+500) - Defending champion with momentum</li>
                    <li>• Eagle McMahon (+800) - Strong in wind conditions</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Head-to-Head Bets</h4>
                  <p className="text-sm text-orange-700">
                    Look for matchups between power players vs. technical players. Technical players often outperform in
                    Emporia conditions.
                  </p>
                </div>

                <Link
                  href="https://coolbet.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Bet on PDGA Worlds
                </Link>
              </CardContent>
            </Card>

            {/* Key Storylines */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Key Storylines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">McBeth's Legacy</h4>
                    <p className="text-gray-700">Can Paul McBeth win his 7th world title and cement his GOAT status?</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Youth Movement</h4>
                    <p className="text-gray-700">
                      Will young stars like Gannon Buhr and Isaac Robinson continue their rise?
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">International Competition</h4>
                    <p className="text-gray-700">
                      Strong European contingent led by Kristian Kuoksa and Simon Lizotte.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
