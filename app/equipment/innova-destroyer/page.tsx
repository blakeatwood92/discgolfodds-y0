import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Star, Users, Target, Wind } from "lucide-react"

export const metadata: Metadata = {
  title: "Innova Destroyer Review | Complete Disc Analysis & Flight Guide",
  description:
    "Complete Innova Destroyer review including flight characteristics, plastic types, pro player usage, and throwing tips. The most popular distance driver in disc golf.",
  keywords: "Innova Destroyer, Destroyer disc golf, distance driver review, Paul McBeth Destroyer, disc golf equipment",
}

export default function DestroyerReviewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/equipment" className="inline-flex items-center text-orange-200 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Equipment Guide
          </Link>
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-2xl">
              D
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">Innova Destroyer</h1>
              <p className="text-xl text-orange-100 mb-2">The World's Most Popular Distance Driver</p>
              <div className="flex items-center gap-4 text-sm">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <Star className="w-4 h-4 mr-1" />
                  4.8/5 Rating
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Speed 12 | Glide 5 | Turn -1 | Fade 3
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Distance Driver
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
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-orange-600" />
                  Disc Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Innova Destroyer is arguably the most iconic disc in disc golf history. Since its introduction, it
                  has become the go-to distance driver for players of all skill levels, from weekend warriors to world
                  champions. Its reliable flight pattern and consistent fade have made it a staple in virtually every
                  serious player's bag.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  With flight numbers of 12|5|-1|3, the Destroyer offers a perfect balance of distance potential and
                  reliability. The moderate turn (-1) allows for some right-hand movement during the high-speed portion
                  of flight, while the strong fade (3) ensures a dependable finish that players can count on.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  What sets the Destroyer apart is its versatility across different arm speeds and throwing styles. New
                  players can grow into the disc as their arm speed develops, while professionals rely on it for crucial
                  shots in tournament play.
                </p>
              </CardContent>
            </Card>

            {/* Flight Characteristics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wind className="w-5 h-5 mr-2 text-orange-600" />
                  Flight Characteristics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Flight Pattern</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        Initial straight flight with slight turn
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        Moderate high-speed turn (-1)
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        Reliable strong fade finish
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        Consistent skip pattern
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Throwing Techniques</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        Hyzer: Maximum distance and reliability
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                        Flat: Straight with predictable fade
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                        Anhyzer: Long turning flights
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                        Forehand: Excellent stability
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Arm Speed Requirements</h4>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-orange-700 font-medium">Beginner (300-350 ft)</p>
                      <p className="text-orange-600">Will fly overstable, good for learning fade</p>
                    </div>
                    <div>
                      <p className="text-orange-700 font-medium">Intermediate (350-400 ft)</p>
                      <p className="text-orange-600">Starts to turn slightly, more distance</p>
                    </div>
                    <div>
                      <p className="text-orange-700 font-medium">Advanced (400+ ft)</p>
                      <p className="text-orange-600">Full flight pattern, maximum potential</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Plastic Types */}
            <Card>
              <CardHeader>
                <CardTitle>Plastic Types & Characteristics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Star Plastic</h4>
                    <p className="text-gray-700 text-sm leading-relaxed mb-2">
                      Premium plastic with excellent grip and durability. Slightly more stable than Champion plastic
                      when new, but breaks in to a perfect flight pattern over time.
                    </p>
                    <p className="text-blue-700 text-sm font-medium">Best for: Most players, great all-around choice</p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Champion Plastic</h4>
                    <p className="text-gray-700 text-sm leading-relaxed mb-2">
                      Transparent, durable plastic that maintains stability longer. Slightly less stable than Star when
                      new, making it good for players with moderate arm speed.
                    </p>
                    <p className="text-purple-700 text-sm font-medium">
                      Best for: Players wanting consistent flight over time
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Pro Plastic</h4>
                    <p className="text-gray-700 text-sm leading-relaxed mb-2">
                      Baseline plastic that's less stable and breaks in quickly. More affordable option that provides
                      good grip in all weather conditions.
                    </p>
                    <p className="text-green-700 text-sm font-medium">
                      Best for: Budget-conscious players, wet conditions
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Halo Star Plastic</h4>
                    <p className="text-gray-700 text-sm leading-relaxed mb-2">
                      Premium plastic with a unique two-tone appearance. More overstable than regular Star plastic,
                      making it excellent for windy conditions and power throwers.
                    </p>
                    <p className="text-orange-700 text-sm font-medium">Best for: Advanced players, windy conditions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pro Player Usage */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-orange-600" />
                  Professional Player Usage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  The Destroyer is used by more touring professionals than any other distance driver. Here's how some
                  top players utilize this versatile disc:
                </p>

                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Paul McBeth</h4>
                    <p className="text-gray-700 text-sm">
                      Carries multiple Destroyers in different stages of wear. Uses beat-in ones for turnovers and fresh
                      ones for reliable fade. His signature 4x McBeth Destroyer is one of the most popular discs in the
                      sport.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Ricky Wysocki</h4>
                    <p className="text-gray-700 text-sm">
                      Known for throwing Destroyers on both backhand and forehand shots. Prefers Star plastic for its
                      grip and reliability in various weather conditions.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Nate Sexton</h4>
                    <p className="text-gray-700 text-sm">
                      Uses Destroyers as his primary distance driver, often throwing them on controlled anhyzer lines
                      for maximum distance while maintaining accuracy.
                    </p>
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
                <CardTitle className="text-lg">Flight Numbers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-blue-600 text-sm">Speed</p>
                    <p className="text-2xl font-bold text-blue-800">12</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-green-600 text-sm">Glide</p>
                    <p className="text-2xl font-bold text-green-800">5</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p className="text-yellow-600 text-sm">Turn</p>
                    <p className="text-2xl font-bold text-yellow-800">-1</p>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <p className="text-red-600 text-sm">Fade</p>
                    <p className="text-2xl font-bold text-red-800">3</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ratings */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Performance Ratings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Distance</span>
                  <div className="flex items-center">
                    <div className="w-20 h-2 bg-gray-200 rounded-full mr-2">
                      <div className="w-4/5 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-semibold">9/10</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Accuracy</span>
                  <div className="flex items-center">
                    <div className="w-20 h-2 bg-gray-200 rounded-full mr-2">
                      <div className="w-4/5 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-semibold">8/10</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Reliability</span>
                  <div className="flex items-center">
                    <div className="w-20 h-2 bg-gray-200 rounded-full mr-2">
                      <div className="w-full h-2 bg-orange-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-semibold">10/10</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Wind Resistance</span>
                  <div className="flex items-center">
                    <div className="w-20 h-2 bg-gray-200 rounded-full mr-2">
                      <div className="w-4/5 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-semibold">8/10</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recommendations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Best For</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Intermediate to advanced players</li>
                    <li>• Maximum distance drives</li>
                    <li>• Reliable fade shots</li>
                    <li>• Tournament play</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Consider Alternatives If</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• You're a complete beginner</li>
                    <li>• You prefer understable drivers</li>
                    <li>• You have limited arm speed</li>
                    <li>• You want more glide</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Similar Discs</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Discraft Force</li>
                    <li>• Dynamic Discs Trespass</li>
                    <li>• Latitude 64 Ballista</li>
                    <li>• MVP Photon</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Purchase Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Purchase Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price Range</span>
                    <span className="font-semibold">$15-20</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Availability</span>
                    <Badge variant="outline" className="text-green-600">
                      Widely Available
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Weight Range</span>
                    <span className="font-semibold">165-175g</span>
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
