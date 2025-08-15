import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Trophy, TrendingUp, Target, Calendar, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Paul McBeth Profile | 6x World Champion Stats & Analysis | DiscGolfOdds.com",
  description:
    "Complete Paul McBeth profile including career stats, major wins, playing style analysis, and betting insights. The GOAT of disc golf with 6 world championships.",
  keywords:
    "Paul McBeth, disc golf GOAT, 6x world champion, Paul McBeth stats, disc golf betting, PDGA 27523, Discraft Paul McBeth",
}

export default function PaulMcBethPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/players" className="inline-flex items-center text-orange-200 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Players
          </Link>
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-2xl">
              PM
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">Paul McBeth</h1>
              <p className="text-xl text-orange-100 mb-2">"The GOAT"</p>
              <div className="flex items-center gap-4 text-sm">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  PDGA #27523
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Rating: 1048
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  6x World Champion
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
            {/* Career Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-orange-600" />
                  Career Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Paul McBeth is widely regarded as the greatest disc golfer of all time. With 6 PDGA World
                  Championships and over 15 major tournament victories, McBeth has dominated the sport for over a
                  decade. His combination of power, precision, and mental fortitude has set the standard for
                  professional disc golf.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Known for his meticulous preparation and course management, McBeth rarely makes critical errors and
                  consistently performs under pressure. His signature Discraft sponsorship deal, reportedly worth over
                  $10 million, reflects his status as the sport's premier athlete.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  McBeth's playing style combines aggressive distance with surgical precision. He's equally comfortable
                  throwing massive hyzers and delicate anhyzers, making him dangerous on any course layout.
                </p>
              </CardContent>
            </Card>

            {/* Playing Style Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-orange-600" />
                  Playing Style Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Strengths</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        Exceptional consistency
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        Mental game mastery
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        All-weather performance
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        Course management
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        Clutch putting
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Preferred Conditions</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        Technical wooded courses
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        Moderate wind conditions
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        Championship pressure
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        Multi-round tournaments
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-orange-600" />
                  Recent Performance (2024)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="text-2xl font-bold text-orange-600">12</p>
                      <p className="text-sm text-gray-600">Tournament Wins</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="text-2xl font-bold text-orange-600">85%</p>
                      <p className="text-sm text-gray-600">Top 10 Finish Rate</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="text-2xl font-bold text-orange-600">1051</p>
                      <p className="text-sm text-gray-600">Current Rating</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Notable 2024 Results</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span>PDGA World Championships</span>
                        <Badge variant="outline" className="text-orange-600">
                          1st Place
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span>United States Disc Golf Championship</span>
                        <Badge variant="outline" className="text-orange-600">
                          2nd Place
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span>Disc Golf Pro Tour Championship</span>
                        <Badge variant="outline" className="text-orange-600">
                          1st Place
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Age</span>
                  <span className="font-semibold">32</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Height</span>
                  <span className="font-semibold">5'11"</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Throwing Style</span>
                  <span className="font-semibold">RHBH/RHFH</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sponsor</span>
                  <span className="font-semibold">Discraft</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Pro Since</span>
                  <span className="font-semibold">2008</span>
                </div>
              </CardContent>
            </Card>

            {/* Betting Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <DollarSign className="w-5 h-5 mr-2 text-orange-600" />
                  Betting Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Tournament Betting</h4>
                  <p className="text-sm text-orange-700">
                    McBeth is often the betting favorite but provides consistent value. His odds rarely reflect his true
                    winning percentage in major events.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Head-to-Head Value</h4>
                  <p className="text-sm text-blue-700">
                    Excellent value in matchup bets against younger players. His experience and consistency often
                    outweigh raw talent.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Course-Specific</h4>
                  <p className="text-sm text-green-700">
                    Particularly strong value on technical courses and in adverse weather conditions where his
                    experience shines.
                  </p>
                </div>

                <Link
                  href="https://coolbet.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Bet on Paul McBeth
                </Link>
              </CardContent>
            </Card>

            {/* Career Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Career Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Trophy className="w-4 h-4 mr-2 text-orange-600" />
                    <span>6x PDGA World Champion</span>
                  </div>
                  <div className="flex items-center">
                    <Trophy className="w-4 h-4 mr-2 text-orange-600" />
                    <span>5x USDGC Champion</span>
                  </div>
                  <div className="flex items-center">
                    <Trophy className="w-4 h-4 mr-2 text-orange-600" />
                    <span>3x Disc Golf Pro Tour Champion</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-orange-600" />
                    <span>100+ Career Wins</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-2 text-orange-600" />
                    <span>$750,000+ Career Earnings</span>
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
