import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, Target, DollarSign, Brain, BarChart3, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Disc Golf Betting Strategy Guide | Winning Tips & Strategies | DiscGolfOdds.com",
  description:
    "Master disc golf betting with proven strategies, bankroll management tips, value betting techniques, and expert insights from professional bettors.",
  keywords:
    "disc golf betting strategy, bankroll management, value betting, live betting tips, disc golf odds analysis",
}

const strategyArticles = [
  {
    id: "bankroll-management",
    title: "Bankroll Management for Disc Golf Betting",
    excerpt: "Learn how to manage your betting bankroll effectively to maximize long-term profits and minimize risk.",
    category: "Money Management",
    readTime: "12 min read",
    difficulty: "Beginner",
    icon: DollarSign,
    keyPoints: ["Unit sizing", "Risk management", "Profit tracking", "Withdrawal strategies"],
  },
  {
    id: "value-betting-techniques",
    title: "Finding Value in Disc Golf Betting Markets",
    excerpt:
      "Advanced techniques for identifying profitable betting opportunities and exploiting market inefficiencies.",
    category: "Advanced Strategy",
    readTime: "15 min read",
    difficulty: "Advanced",
    icon: Target,
    keyPoints: ["Market analysis", "Odds comparison", "Expected value", "Line shopping"],
  },
  {
    id: "live-betting-strategies",
    title: "Live Betting Strategies for Disc Golf Tournaments",
    excerpt: "How to capitalize on in-play betting opportunities during disc golf tournaments with real-time analysis.",
    category: "Live Betting",
    readTime: "10 min read",
    difficulty: "Intermediate",
    icon: Clock,
    keyPoints: ["Round-by-round analysis", "Momentum shifts", "Weather changes", "Leaderboard moves"],
  },
  {
    id: "weather-impact-analysis",
    title: "Weather Impact on Disc Golf Betting Odds",
    excerpt: "Understanding how weather conditions affect player performance and create betting value.",
    category: "Environmental Factors",
    readTime: "8 min read",
    difficulty: "Intermediate",
    icon: Brain,
    keyPoints: ["Wind analysis", "Rain effects", "Temperature impact", "Course conditions"],
  },
  {
    id: "statistical-analysis",
    title: "Statistical Analysis for Disc Golf Betting",
    excerpt: "Using data and statistics to make informed betting decisions and identify profitable patterns.",
    category: "Data Analysis",
    readTime: "18 min read",
    difficulty: "Advanced",
    icon: BarChart3,
    keyPoints: ["Performance metrics", "Course history", "Head-to-head records", "Trend analysis"],
  },
  {
    id: "tournament-specific-strategies",
    title: "Tournament-Specific Betting Strategies",
    excerpt: "Tailored approaches for different tournament types, from majors to regular tour events.",
    category: "Tournament Strategy",
    readTime: "14 min read",
    difficulty: "Intermediate",
    icon: TrendingUp,
    keyPoints: ["Major championships", "Course specialists", "Field strength", "Format differences"],
  },
]

const quickTips = [
  {
    title: "Start Small",
    description: "Begin with small bets while learning the market and building your knowledge base.",
  },
  {
    title: "Track Everything",
    description: "Keep detailed records of all bets, wins, losses, and the reasoning behind each wager.",
  },
  {
    title: "Shop for Lines",
    description: "Compare odds across multiple sportsbooks to ensure you're getting the best value.",
  },
  {
    title: "Specialize",
    description: "Focus on specific tournaments, players, or bet types where you can develop expertise.",
  },
  {
    title: "Manage Emotions",
    description: "Never chase losses or bet more than planned, regardless of recent results.",
  },
  {
    title: "Stay Informed",
    description: "Follow player news, course conditions, and weather forecasts that could impact outcomes.",
  },
]

export default function BettingStrategyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Disc Golf <span className="text-orange-200">Betting Strategy</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto">
              Master the art of disc golf betting with proven strategies, expert insights, and winning techniques
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <DollarSign className="w-4 h-4 mr-1" />
                Bankroll Management
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Target className="w-4 h-4 mr-1" />
                Value Betting
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <BarChart3 className="w-4 h-4 mr-1" />
                Statistical Analysis
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick Tips Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Essential Betting Tips</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quick wins you can implement immediately to improve your disc golf betting results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickTips.map((tip, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-orange-600">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Strategy Articles */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Strategy Guides</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              In-depth articles covering every aspect of successful disc golf betting
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {strategyArticles.map((article) => (
              <Card
                key={article.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <article.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={
                          article.difficulty === "Beginner"
                            ? "secondary"
                            : article.difficulty === "Intermediate"
                              ? "default"
                              : "destructive"
                        }
                        className="mb-2"
                      >
                        {article.difficulty}
                      </Badge>
                      <p className="text-sm text-gray-500">{article.readTime}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit mb-3 text-orange-600 border-orange-200">
                    {article.category}
                  </Badge>
                  <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">{article.excerpt}</p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Topics Covered:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {article.keyPoints.map((point, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <Link
                      href={`/betting-strategy/${article.id}`}
                      className="text-orange-600 hover:text-orange-700 font-medium hover:underline"
                    >
                      Read Full Guide →
                    </Link>
                    <Button size="sm" variant="outline" className="text-orange-600 border-orange-200 bg-transparent">
                      {article.difficulty}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Betting Calculator Section */}
        <Card className="mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-blue-900">Betting Calculator Tools</CardTitle>
            <p className="text-blue-700">Essential tools for calculating odds, payouts, and bankroll management</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Odds Calculator</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Convert between different odds formats and calculate payouts
                </p>
                <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 bg-transparent">
                  Use Calculator
                </Button>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Bankroll Tracker</h3>
                <p className="text-sm text-gray-600 mb-3">Track your betting performance and manage your bankroll</p>
                <Button variant="outline" size="sm" className="text-green-600 border-green-200 bg-transparent">
                  Start Tracking
                </Button>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Target className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Value Finder</h3>
                <p className="text-sm text-gray-600 mb-3">Identify value bets by comparing odds across sportsbooks</p>
                <Button variant="outline" size="sm" className="text-orange-600 border-orange-200 bg-transparent">
                  Find Value
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Success Stories</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">From Beginner to Profitable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 text-sm mb-4">
                  "I started with $500 and followed the bankroll management strategies. After 6 months of disciplined
                  betting, I've grown my bankroll to $1,200 with a 15% ROI."
                </p>
                <p className="text-green-600 text-xs font-semibold">- Mike, Toronto</p>
              </CardContent>
            </Card>
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Value Betting Success</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 text-sm mb-4">
                  "Using the statistical analysis techniques, I identified undervalued players and hit a 25-1 longshot
                  at the European Open. The key is patience and proper research."
                </p>
                <p className="text-blue-600 text-xs font-semibold">- Sarah, California</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Apply These Strategies?</h3>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Start implementing these proven betting strategies with your Coolbet account and exclusive welcome bonus
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50" asChild>
              <Link href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                Start Betting on Coolbet
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
              asChild
            >
              <Link href="/retailers">Get Your Bonus</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
