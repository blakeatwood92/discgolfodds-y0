import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Wind, Disc, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Wind Play Techniques & Disc Selection | Advanced Disc Golf Strategy",
  description:
    "Master disc golf in windy conditions with advanced techniques, disc selection strategies, and flight path adjustments for headwinds, tailwinds, and crosswinds.",
  keywords: "disc golf wind play, windy disc golf, disc selection wind, headwind tailwind crosswind, disc golf weather",
}

export default function WindPlayPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/strategy" className="inline-flex items-center text-orange-200 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Strategy Guides
          </Link>
          <h1 className="text-4xl font-bold mb-4">Wind Play Techniques & Disc Selection</h1>
          <p className="text-xl text-orange-100">
            Dominate windy conditions with advanced techniques and smart disc choices
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              10 min read
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Advanced
            </Badge>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Wind className="w-6 h-6 mr-2 text-orange-600" />
            Mastering Wind Play
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wind is often considered the great equalizer in disc golf. While some players struggle in windy conditions,
            those who master wind play techniques gain a significant competitive advantage. Understanding how wind
            affects disc flight and adjusting your strategy accordingly can turn challenging conditions into scoring
            opportunities.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This comprehensive guide covers techniques for all wind conditions, disc selection strategies, and advanced
            flight path adjustments that will help you maintain consistency regardless of weather conditions.
          </p>
        </div>

        {/* Wind Types and Strategies */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Headwinds</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-3">
                Headwinds increase lift and can cause discs to turn over more dramatically.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Use more overstable discs</li>
                <li>• Throw with more hyzer angle</li>
                <li>• Reduce throwing power</li>
                <li>• Aim lower to penetrate wind</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Tailwinds</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-3">
                Tailwinds reduce lift and can cause discs to fade more aggressively.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Use more understable discs</li>
                <li>• Throw with less hyzer</li>
                <li>• Increase throwing power</li>
                <li>• Aim higher for extended glide</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Crosswinds</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-3">
                Crosswinds push discs laterally and require the most adjustment.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Adjust aim point significantly</li>
                <li>• Use wind to enhance flight path</li>
                <li>• Consider disc stability carefully</li>
                <li>• Plan for lateral drift</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Disc Selection Guide */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Disc className="w-5 h-5 mr-2 text-orange-600" />
              Wind-Specific Disc Selection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Wind Condition</th>
                    <th className="text-left py-2">Disc Stability</th>
                    <th className="text-left py-2">Recommended Discs</th>
                    <th className="text-left py-2">Flight Adjustments</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b">
                    <td className="py-3">Strong Headwind (15+ mph)</td>
                    <td>Very Overstable</td>
                    <td>Firebird, Force, Raptor</td>
                    <td>More hyzer, less power</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Moderate Headwind (8-15 mph)</td>
                    <td>Overstable</td>
                    <td>Thunderbird, Sexton Firebird</td>
                    <td>Slight hyzer adjustment</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Light Headwind (5-8 mph)</td>
                    <td>Stable</td>
                    <td>TeeBird, Eagle, Leopard3</td>
                    <td>Normal release, watch turn</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Tailwind (Any speed)</td>
                    <td>Understable</td>
                    <td>Roadrunner, Sidewinder</td>
                    <td>Less hyzer, more power</td>
                  </tr>
                  <tr>
                    <td className="py-3">Strong Crosswind</td>
                    <td>Depends on direction</td>
                    <td>Stable to overstable</td>
                    <td>Significant aim adjustment</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Advanced Techniques */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Advanced Wind Play Techniques</h3>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">The Wind Window Concept</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                Imagine a "window" through the wind where your disc needs to travel. In headwinds, this window is lower
                and narrower. In tailwinds, it's higher and wider. Visualizing this window helps with release angle and
                power selection.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Power Adjustment Formula</h4>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-orange-800 font-medium mb-2">Headwind: Reduce power by 10-20%</p>
                <p className="text-orange-800 font-medium mb-2">Tailwind: Increase power by 15-25%</p>
                <p className="text-orange-700 text-sm">
                  These percentages are starting points. Adjust based on wind strength and disc selection.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Crosswind Navigation</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                For right-to-left crosswinds (RHBH), aim right and let the wind bring the disc back. The key is
                determining how much to adjust your aim point based on wind strength and disc stability.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Light crosswind (5-10 mph): Aim 10-20 feet into the wind</li>
                <li>Moderate crosswind (10-15 mph): Aim 30-50 feet into the wind</li>
                <li>Strong crosswind (15+ mph): Consider alternative shot shapes or disc selection</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tournament Strategy */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-orange-600" />
              Tournament Wind Strategy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Pre-Round Preparation</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Check weather forecasts and wind direction changes throughout the day</li>
                <li>Practice with wind-specific discs during warm-up</li>
                <li>Identify holes where wind will be most challenging</li>
                <li>Plan conservative strategies for the most exposed holes</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">During the Round</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Constantly reassess wind conditions between holes</li>
                <li>Watch other players' shots to gauge wind effects</li>
                <li>Be willing to change disc selection mid-round</li>
                <li>Stay patient and stick to your wind strategy</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Betting Connection */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Wind Conditions & Betting Strategy</h3>
          <p className="text-orange-100 mb-4">
            Understanding how different players perform in windy conditions can give you an edge in disc golf betting.
            Some players excel in wind while others struggle, creating valuable betting opportunities.
          </p>
          <Link
            href="https://coolbet.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-bold rounded-lg hover:bg-orange-50 transition-colors"
          >
            Bet on Disc Golf at Coolbet
          </Link>
        </div>
      </div>
    </div>
  )
}
