import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, DollarSign, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Bankroll Management for Disc Golf Betting | Complete Guide | DiscGolfOdds.com",
  description:
    "Master bankroll management for disc golf betting. Learn unit sizing, risk management, and profit strategies to maximize long-term success.",
  keywords: "bankroll management, disc golf betting, unit sizing, risk management, betting strategy",
}

export default function BankrollManagementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/betting-strategy" className="inline-flex items-center text-green-200 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Betting Strategy
          </Link>
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">Bankroll Management for Disc Golf Betting</h1>
              <p className="text-green-100 text-lg">
                The foundation of successful long-term betting: protecting and growing your bankroll
              </p>
              <div className="flex items-center gap-4 mt-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Beginner Friendly
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  12 min read
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                Why Bankroll Management Matters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                Bankroll management is the most important skill for any sports bettor, yet it's often overlooked by
                beginners eager to start winning big. Even the best handicappers in the world will go broke without
                proper bankroll management.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                In disc golf betting, where variance can be high and upsets are common, protecting your bankroll becomes
                even more critical. A single bad week of betting can wipe out months of profits if you're not managing
                your money properly.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Key Benefits of Proper Bankroll Management:</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Protects against losing streaks and bad variance</li>
                  <li>• Allows you to bet consistently over the long term</li>
                  <li>• Reduces emotional decision-making</li>
                  <li>• Maximizes long-term profit potential</li>
                  <li>• Helps you sleep better at night</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Unit Sizing */}
          <Card>
            <CardHeader>
              <CardTitle>The Unit System: Your Foundation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                The unit system is the cornerstone of bankroll management. Instead of betting random amounts, you bet in
                "units" - a fixed percentage of your total bankroll.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-3">Conservative Approach (Recommended)</h4>
                  <div className="space-y-2 text-sm text-blue-700">
                    <div className="flex justify-between">
                      <span>1 Unit =</span>
                      <span className="font-semibold">1-2% of bankroll</span>
                    </div>
                    <div className="flex justify-between">
                      <span>$1,000 bankroll =</span>
                      <span className="font-semibold">$10-20 per unit</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Max bet =</span>
                      <span className="font-semibold">3-5 units</span>
                    </div>
                  </div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-3">Aggressive Approach</h4>
                  <div className="space-y-2 text-sm text-orange-700">
                    <div className="flex justify-between">
                      <span>1 Unit =</span>
                      <span className="font-semibold">3-5% of bankroll</span>
                    </div>
                    <div className="flex justify-between">
                      <span>$1,000 bankroll =</span>
                      <span className="font-semibold">$30-50 per unit</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Max bet =</span>
                      <span className="font-semibold">5-7 units</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-1">Important Rule:</h4>
                    <p className="text-sm text-yellow-700">
                      Never bet more than 5% of your bankroll on a single wager, regardless of how confident you feel.
                      Even "sure things" can lose in disc golf.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bet Sizing Strategy */}
          <Card>
            <CardHeader>
              <CardTitle>Bet Sizing Based on Confidence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                Not all bets are created equal. Your bet size should reflect your confidence level and the perceived
                value of the wager.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-800">5 Units - Maximum Confidence</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    Reserved for your absolute best bets with significant perceived value
                  </p>
                  <p className="text-xs text-gray-600">
                    Example: Betting on Paul McBeth at +400 when you believe his true odds are +200
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-blue-800">3 Units - High Confidence</h4>
                  <p className="text-sm text-gray-700 mb-2">Strong value plays with solid reasoning behind them</p>
                  <p className="text-xs text-gray-600">
                    Example: Backing a course specialist at a venue where they've historically performed well
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-yellow-800">2 Units - Moderate Confidence</h4>
                  <p className="text-sm text-gray-700 mb-2">Decent value with some uncertainty</p>
                  <p className="text-xs text-gray-600">
                    Example: Betting on an emerging player who's shown recent improvement
                  </p>
                </div>

                <div className="border-l-4 border-gray-500 pl-4">
                  <h4 className="font-semibold text-gray-800">1 Unit - Low Confidence</h4>
                  <p className="text-sm text-gray-700 mb-2">Small value plays or experimental bets</p>
                  <p className="text-xs text-gray-600">Example: Long-shot prop bets or testing a new betting theory</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Record Keeping */}
          <Card>
            <CardHeader>
              <CardTitle>Tracking Your Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                Detailed record-keeping is essential for understanding your betting performance and identifying areas
                for improvement.
              </p>

              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-900 mb-3">Essential Tracking Metrics:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span>Date and tournament</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span>Bet type and selection</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span>Odds and stake amount</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span>Reasoning for the bet</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span>Result (win/loss/push)</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span>Profit/loss amount</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span>Running bankroll total</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span>Lessons learned</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Key Performance Indicators:</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-blue-700">
                  <div>
                    <p className="font-medium">Win Rate</p>
                    <p>Percentage of bets won</p>
                  </div>
                  <div>
                    <p className="font-medium">ROI</p>
                    <p>Return on investment</p>
                  </div>
                  <div>
                    <p className="font-medium">Units Won/Lost</p>
                    <p>Total profit in units</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Common Mistakes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                Common Bankroll Management Mistakes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Chasing Losses</h4>
                  <p className="text-sm text-red-700">
                    Increasing bet sizes after losses to "get even quickly." This is the fastest way to go broke.
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Betting Too Big</h4>
                  <p className="text-sm text-red-700">
                    Risking more than 5% of bankroll on any single bet, even on "sure things."
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Not Adjusting Unit Size</h4>
                  <p className="text-sm text-red-700">
                    Failing to recalculate unit size as bankroll grows or shrinks over time.
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Emotional Betting</h4>
                  <p className="text-sm text-red-700">
                    Making bets based on emotions rather than calculated bankroll management principles.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Steps */}
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Your Bankroll Management Action Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Set Your Bankroll</h4>
                    <p className="text-sm text-gray-700">
                      Determine how much money you can afford to lose without affecting your lifestyle
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Calculate Unit Size</h4>
                    <p className="text-sm text-gray-700">Set 1 unit = 1-2% of your total bankroll</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Create Tracking System</h4>
                    <p className="text-sm text-gray-700">
                      Set up a spreadsheet or use an app to track all your bets and results
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Stick to the Plan</h4>
                    <p className="text-sm text-gray-700">Follow your unit sizing regardless of recent wins or losses</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Review Monthly</h4>
                    <p className="text-sm text-gray-700">
                      Analyze your performance and adjust unit size based on bankroll changes
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
