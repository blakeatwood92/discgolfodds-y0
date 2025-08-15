import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, Star, Trophy, Users, Target, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Maple Hill Disc Golf Course Review | Leicester, MA Championship Course",
  description:
    "Complete review of Maple Hill Disc Golf Course in Leicester, Massachusetts. Course layout, playing tips, tournament history, and betting insights for New England Open.",
  keywords:
    "Maple Hill disc golf, Leicester Massachusetts, New England Open, championship disc golf course, Maple Hill review",
}

export default function MapleHillPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/courses" className="inline-flex items-center text-orange-200 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Course Reviews
          </Link>
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold text-2xl">
              MH
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">Maple Hill Disc Golf Course</h1>
              <div className="flex items-center text-orange-100 mb-2">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-xl">Leicester, Massachusetts</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <Star className="w-4 h-4 mr-1" />
                  4.9/5 Rating
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Championship Course
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Est. 1996
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
            {/* Course Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-orange-600" />
                  Course Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Maple Hill Disc Golf Course is widely regarded as the gold standard of disc golf courses. Located in
                  the rolling hills of Leicester, Massachusetts, this pristine 18-hole championship course has been
                  setting the bar for course design and maintenance since 1996.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Designed by John Houck, Maple Hill features a perfect blend of technical wooded holes and strategic
                  open shots. The course is known for its immaculate conditions, with manicured fairways and
                  well-maintained baskets that provide a true test of disc golf skill.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The course plays at 8,400 feet with a par of 59, demanding accuracy and course management over raw
                  power. Every hole presents unique challenges, from tight wooded tunnels to strategic placement shots
                  around mature trees and elevation changes.
                </p>
              </CardContent>
            </Card>

            {/* Signature Holes */}
            <Card>
              <CardHeader>
                <CardTitle>Signature Holes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Hole 3 - "The Gauntlet" (Par 3, 285 ft)</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">
                    A tight, technical tunnel shot through mature trees with a slight dogleg right. The fairway is only
                    about 15 feet wide at its narrowest point, demanding pinpoint accuracy.
                  </p>
                  <p className="text-orange-700 text-sm font-medium">
                    Playing Tip: Use a stable to overstable mid-range. Aim for the gap and let the disc fade naturally.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Hole 9 - "The Cathedral" (Par 4, 520 ft)</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">
                    A majestic hole through towering pines with a slight uphill finish. The fairway opens up after the
                    initial tunnel, but pin placement requires precise approach shots.
                  </p>
                  <p className="text-orange-700 text-sm font-medium">
                    Playing Tip: Conservative drive to the opening, then strategic approach. Avoid going long.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Hole 17 - "Island Green" (Par 3, 310 ft)</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">
                    The course's most famous hole features a basket positioned on a small island of fairway surrounded
                    by thick rough and trees. Miss the island and you're scrambling for par.
                  </p>
                  <p className="text-orange-700 text-sm font-medium">
                    Playing Tip: Take your time and throw a disc you're confident with. Better to be short than long.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Tournament History */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-orange-600" />
                  Tournament History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Maple Hill has hosted numerous prestigious events, most notably the New England Open, which has become
                  one of the most anticipated tournaments on the disc golf calendar.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Recent Champions</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span>2024 New England Open - MPO</span>
                        <span className="font-medium">Calvin Heimburg</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span>2024 New England Open - FPO</span>
                        <span className="font-medium">Kristin Tattar</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span>2023 New England Open - MPO</span>
                        <span className="font-medium">Paul McBeth</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Course Records</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-orange-700">MPO Course Record</p>
                        <p className="font-semibold text-orange-800">-12 (47)</p>
                        <p className="text-xs text-orange-600">Paul McBeth, 2023</p>
                      </div>
                      <div>
                        <p className="text-orange-700">FPO Course Record</p>
                        <p className="font-semibold text-orange-800">-8 (51)</p>
                        <p className="text-xs text-orange-600">Paige Pierce, 2022</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Playing Strategy */}
            <Card>
              <CardHeader>
                <CardTitle>Playing Strategy & Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Course Management</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li>Accuracy is more important than distance - keep discs in bounds</li>
                      <li>Study each hole carefully during practice rounds</li>
                      <li>Conservative play often leads to better scores than aggressive lines</li>
                      <li>Pay attention to pin positions - they can dramatically change hole strategy</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Recommended Discs</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-gray-800 mb-1">Drivers</p>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Stable fairway drivers (TeeBird, Eagle)</li>
                          <li>• Overstable control drivers (Firebird)</li>
                          <li>• Understable for turnovers (Leopard)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 mb-1">Mid-ranges & Putters</p>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Stable mid-ranges (Roc, Buzzz)</li>
                          <li>• Overstable approach (Zone, Harp)</li>
                          <li>• Reliable putting putter</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Course Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Holes</span>
                  <span className="font-semibold">18</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Par</span>
                  <span className="font-semibold">59</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Length</span>
                  <span className="font-semibold">8,400 ft</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Designer</span>
                  <span className="font-semibold">John Houck</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Established</span>
                  <span className="font-semibold">1996</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Difficulty</span>
                  <Badge variant="outline" className="text-orange-600">
                    Championship
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Betting Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tournament Betting Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Course Specialists</h4>
                  <p className="text-sm text-orange-700">
                    Players with strong course management skills and accuracy excel here. Look for consistent players
                    over big arms.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Weather Impact</h4>
                  <p className="text-sm text-blue-700">
                    Wind can significantly affect scoring. Players comfortable in New England conditions have an
                    advantage.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Value Bets</h4>
                  <p className="text-sm text-green-700">
                    Technical specialists often outperform their odds. Look for players with strong putting and course
                    management.
                  </p>
                </div>

                <Link
                  href="https://coolbet.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Bet on New England Open
                </Link>
              </CardContent>
            </Card>

            {/* Course Features */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Course Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-orange-600" />
                    <span>Pro Shop & Rentals</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-orange-600" />
                    <span>Tournament Hosting</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-4 h-4 mr-2 text-orange-600" />
                    <span>Practice Baskets</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-orange-600" />
                    <span>Parking & Facilities</span>
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
