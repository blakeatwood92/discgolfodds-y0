import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Disc Golf Betting News & Updates | DiscGolfOdds.com",
  description:
    "Latest disc golf betting news, tournament updates, player analysis, and betting insights from the DGPT and professional disc golf world.",
  keywords: "disc golf news, DGPT updates, disc golf betting news, tournament results, player analysis",
}

const newsArticles = [
  {
    id: "worlds-2024-preview",
    title: "PDGA World Championships 2024: Complete Betting Preview",
    excerpt:
      "Everything you need to know about betting on the biggest disc golf tournament of the year, including player analysis and value picks.",
    category: "Tournament Preview",
    date: "2024-08-10",
    readTime: "8 min read",
    featured: true,
    image: "/placeholder-cwycg.png",
  },
  {
    id: "mcbeth-odds-analysis",
    title: "Paul McBeth Odds Analysis: Is the GOAT Still Worth Betting?",
    excerpt:
      "Breaking down Paul McBeth's recent performance and whether his current odds offer value for disc golf bettors.",
    category: "Player Analysis",
    date: "2024-08-08",
    readTime: "6 min read",
    featured: true,
    image: "/paul-mcbeth-disc-golf.png",
  },
  {
    id: "live-betting-guide",
    title: "Live Betting on Disc Golf: Strategies That Actually Work",
    excerpt:
      "Learn how to capitalize on live disc golf betting opportunities with proven strategies from experienced bettors.",
    category: "Betting Strategy",
    date: "2024-08-05",
    readTime: "10 min read",
    featured: false,
    image: "/live-betting-disc-golf.png",
  },
  {
    id: "dgpt-championship-recap",
    title: "DGPT Championship Recap: Biggest Upsets and Betting Lessons",
    excerpt:
      "Analyzing the biggest surprises from the DGPT Championship and what they mean for future betting strategies.",
    category: "Tournament Recap",
    date: "2024-08-03",
    readTime: "7 min read",
    featured: false,
    image: "/placeholder-7azm0.png",
  },
  {
    id: "weather-impact-betting",
    title: "How Weather Conditions Affect Disc Golf Betting Odds",
    excerpt: "Understanding how wind, rain, and temperature changes can create betting value in disc golf tournaments.",
    category: "Betting Education",
    date: "2024-08-01",
    readTime: "5 min read",
    featured: false,
    image: "/disc-golf-windy.png",
  },
  {
    id: "fpo-rising-stars",
    title: "FPO Rising Stars: New Betting Opportunities in Women's Disc Golf",
    excerpt:
      "Spotlight on emerging talent in the FPO division and how to identify value bets on up-and-coming players.",
    category: "Player Analysis",
    date: "2024-07-28",
    readTime: "9 min read",
    featured: false,
    image: "/placeholder-czxe9.png",
  },
]

const categories = [
  "All",
  "Tournament Preview",
  "Player Analysis",
  "Betting Strategy",
  "Tournament Recap",
  "Betting Education",
]

export default function NewsPage() {
  const featuredArticles = newsArticles.filter((article) => article.featured)
  const regularArticles = newsArticles.filter((article) => !article.featured)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Disc Golf Betting News & Updates</h1>
            <p className="text-xl text-muted-foreground">
              Stay informed with the latest disc golf betting insights, tournament analysis, and player updates
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Articles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            Featured Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        {new Date(article.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors">
                    <Link href={`/news/${article.id}`}>{article.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <Button asChild variant="outline">
                    <Link href={`/news/${article.id}`}>Read Full Article</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button key={category} variant={category === "All" ? "default" : "outline"} size="sm" className="mb-2">
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Regular Articles */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {article.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight hover:text-primary transition-colors">
                    <Link href={`/news/${article.id}`}>{article.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                    <Button asChild variant="ghost" size="sm">
                      <Link href={`/news/${article.id}`}>Read More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mt-16 bg-primary/5 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get the latest disc golf betting news, tournament previews, and exclusive betting tips delivered to your
            inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
            />
            <Button>Subscribe</Button>
          </div>
        </section>

        {/* Coolbet CTA */}
        <section className="mt-12 bg-gradient-to-r from-primary to-secondary rounded-lg p-8 text-center text-primary-foreground">
          <h3 className="text-2xl font-bold mb-4">Ready to Bet on Disc Golf?</h3>
          <p className="mb-6 opacity-90">
            Join Coolbet today and get your exclusive welcome bonus to start betting on disc golf tournaments.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/bonuses">Claim Your Bonus</Link>
          </Button>
        </section>
      </div>
    </div>
  )
}
