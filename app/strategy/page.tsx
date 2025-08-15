import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, User, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Disc Golf Strategy Guides | Master Your Game | DiscGolfOdds.com",
  description:
    "Comprehensive disc golf strategy guides covering course management, wind play, mental game, and tournament preparation. Improve your disc golf game with expert tips.",
  keywords:
    "disc golf strategy, disc golf tips, course management, wind play, disc golf mental game, tournament preparation",
}

const strategyGuides = [
  {
    id: "course-management",
    title: "Course Management & Shot Selection",
    description: "Master the art of strategic course navigation and smart shot selection for lower scores.",
    readTime: "8 min read",
    difficulty: "Intermediate",
    category: "Strategy",
    excerpt:
      "Learn how to analyze holes, choose conservative vs aggressive lines, and manage risk vs reward decisions.",
  },
  {
    id: "wind-play-techniques",
    title: "Wind Play Techniques & Disc Selection",
    description: "Dominate windy conditions with proper disc selection and throwing techniques.",
    readTime: "10 min read",
    difficulty: "Advanced",
    category: "Technique",
    excerpt: "Master headwind, tailwind, and crosswind strategies with specific disc recommendations.",
  },
  {
    id: "mental-game-pressure",
    title: "Mental Game & Pressure Situations",
    description: "Develop mental toughness and perform under pressure in tournaments.",
    readTime: "7 min read",
    difficulty: "All Levels",
    category: "Mental Game",
    excerpt: "Build confidence, manage nerves, and maintain focus during crucial tournament moments.",
  },
  {
    id: "tournament-preparation",
    title: "Tournament Preparation Guide",
    description: "Complete guide to preparing for disc golf tournaments from practice to performance.",
    readTime: "12 min read",
    difficulty: "Intermediate",
    category: "Tournament",
    excerpt: "Everything from course scouting to warm-up routines and equipment preparation.",
  },
  {
    id: "disc-selection-strategy",
    title: "Strategic Disc Selection",
    description: "Choose the right disc for every situation with advanced selection strategies.",
    readTime: "9 min read",
    difficulty: "Intermediate",
    category: "Equipment",
    excerpt: "Learn flight number analysis, plastic selection, and situational disc choices.",
  },
  {
    id: "scoring-optimization",
    title: "Scoring Optimization Techniques",
    description: "Advanced techniques to consistently lower your scores and break through plateaus.",
    readTime: "11 min read",
    difficulty: "Advanced",
    category: "Strategy",
    excerpt: "Statistical analysis of scoring opportunities and advanced course strategy.",
  },
]

export default function StrategyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-600 to-orange-500 text-white py-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/disc-golf-forest-throw.png')",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Master Your <span className="text-orange-200">Disc Golf Game</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto">
              Comprehensive strategy guides from course management to mental game mastery
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <TrendingUp className="w-4 h-4 mr-1" />
                Improve Your Scores
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <User className="w-4 h-4 mr-1" />
                Expert Tips
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Strategy Guides Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Strategy Guides</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take your disc golf game to the next level with our comprehensive strategy guides
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strategyGuides.map((guide) => (
            <Card
              key={guide.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-orange-600 border-orange-200">
                    {guide.category}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {guide.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">{guide.title}</CardTitle>
                <CardDescription className="text-gray-600">{guide.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">{guide.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {guide.readTime}
                  </div>
                  <Link
                    href={`/strategy/${guide.id}`}
                    className="text-orange-600 hover:text-orange-700 font-medium text-sm hover:underline"
                  >
                    Read Guide →
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Bet on Your Improved Game?</h3>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Apply these strategies and start betting on disc golf tournaments with confidence
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
