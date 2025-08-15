import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Target, TrendingUp, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Course Management & Shot Selection | Disc Golf Strategy Guide",
  description:
    "Master disc golf course management with strategic shot selection, risk assessment, and smart decision-making techniques to lower your scores.",
  keywords: "disc golf course management, shot selection, disc golf strategy, risk assessment, course navigation",
}

export default function CourseManagementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/strategy" className="inline-flex items-center text-orange-200 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Strategy Guides
          </Link>
          <h1 className="text-4xl font-bold mb-4">Course Management & Shot Selection</h1>
          <p className="text-xl text-orange-100">Master strategic course navigation for consistently lower scores</p>
          <div className="flex items-center gap-4 mt-4 text-sm">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              8 min read
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Intermediate
            </Badge>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Target className="w-6 h-6 mr-2 text-orange-600" />
              Strategic Course Navigation
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Course management is the difference between good players and great players. While raw throwing power and
              accuracy are important, the ability to think strategically about each hole and make smart decisions under
              pressure separates tournament winners from the field.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This guide will teach you how to analyze holes, assess risk vs reward, and make strategic decisions that
              consistently lower your scores.
            </p>
          </div>

          {/* Hole Analysis Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-orange-600" />
                Pre-Shot Hole Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">1. Identify the Ideal Landing Zone</h4>
                <p className="text-gray-700">
                  Before selecting your disc, identify where you want your disc to land for the best approach shot. This
                  "working backwards" approach helps you choose the right line and disc selection.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">2. Assess Hazards and Penalties</h4>
                <p className="text-gray-700">
                  Map out all potential hazards: OB lines, water, thick rough, and mandatories. Understanding penalty
                  strokes helps you choose between aggressive and conservative lines.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">3. Consider Pin Position</h4>
                <p className="text-gray-700">
                  Front pin positions often favor aggressive approaches, while back pins reward conservative placement
                  shots. Adjust your strategy based on pin placement and surrounding obstacles.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Risk Assessment */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-orange-600" />
                Risk vs Reward Decision Making
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">The 80% Rule</h4>
                <p className="text-orange-700">
                  Only attempt shots you can execute successfully 8 out of 10 times. This conservative approach prevents
                  big numbers and keeps you in contention throughout the round.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">When to Play Aggressive</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>You're behind late in the round and need to make up strokes</li>
                  <li>The penalty for missing is minimal (rough vs OB)</li>
                  <li>You're throwing a shot you've practiced extensively</li>
                  <li>Weather conditions favor your throwing style</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">When to Play Conservative</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Leading or tied late in the round</li>
                  <li>Severe penalties for missing (water, OB, drop zones)</li>
                  <li>Unfavorable weather conditions</li>
                  <li>Early in the round when pars keep you in position</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Shot Selection Strategies */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Advanced Shot Selection Strategies</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Placement Over Power</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Focus on disc placement rather than maximum distance. A well-placed 300-foot shot often sets up easier
                  approaches than a 400-foot bomb in the rough.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Shape Selection</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Choose shot shapes that match your natural throwing motion and the hole design. Don't force unnatural
                  lines when simpler shapes are available.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Approach Planning</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Always consider your approach shot when selecting your drive. Position yourself for comfortable
                  approach angles and distances you're confident with.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Escape Route Planning</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Before throwing, identify your "Plan B" if the shot doesn't go as intended. Having escape routes
                  planned reduces panic and poor decision-making.
                </p>
              </div>
            </div>
          </div>

          {/* Tournament Application */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Tournament Application</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Course management becomes even more critical in tournament play where every stroke matters:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <strong>Practice Round Strategy:</strong> Use practice rounds to identify safe landing zones and
                  potential trouble spots
                </li>
                <li>
                  <strong>Scoring Pace:</strong> Adjust your risk tolerance based on your position on the leaderboard
                </li>
                <li>
                  <strong>Pressure Management:</strong> Stick to your course management plan even when feeling pressure
                  to make up strokes
                </li>
                <li>
                  <strong>Weather Adaptation:</strong> Have backup plans for different weather conditions that may arise
                  during the tournament
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Betting Connection */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 text-white mb-8">
            <h3 className="text-2xl font-bold mb-4">Apply Your Knowledge to Betting</h3>
            <p className="text-orange-100 mb-4">
              Understanding course management helps you evaluate player performance and make smarter betting decisions.
              Players with strong course management skills often outperform their rankings on challenging courses.
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
    </div>
  )
}
