import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, ArrowLeft, Share2, TrendingUp } from "lucide-react"

// Mock article data - in a real app, this would come from a CMS or database
const articles = {
  "worlds-2024-preview": {
    title: "PDGA World Championships 2024: Complete Betting Preview",
    excerpt:
      "Everything you need to know about betting on the biggest disc golf tournament of the year, including player analysis and value picks.",
    category: "Tournament Preview",
    date: "2024-08-10",
    readTime: "8 min read",
    author: "Mike Johnson",
    image: "/placeholder-cwycg.png",
    content: `
      <p>The PDGA World Championships represent the pinnacle of competitive disc golf, and for bettors, it's the most exciting tournament of the year. With the world's best players competing for the ultimate prize, the betting opportunities are endless.</p>
      
      <h2>Tournament Overview</h2>
      <p>This year's Worlds will be held at the legendary Pickard Park in Des Moines, Iowa, known for its challenging mixed terrain and elevation changes. The tournament format includes multiple rounds across different courses, testing every aspect of a player's game.</p>
      
      <h2>Top Contenders Analysis</h2>
      <h3>Calvin Heimburg (+300)</h3>
      <p>The defending world champion enters with excellent form and course knowledge. His precision and course management skills make him the betting favorite.</p>
      
      <h3>Paul McBeth (+350)</h3>
      <p>The six-time world champion never counts out at Worlds. McBeth's experience and clutch performance in major tournaments make him a solid pick.</p>
      
      <h3>Gannon Buhr (+400)</h3>
      <p>The young phenom has been on fire this season. His power and consistency could be the difference at this year's Worlds.</p>
      
      <h2>Betting Strategy</h2>
      <p>Consider spreading your bets across multiple players rather than going all-in on the favorite. The tournament's multi-round format creates opportunities for upsets and comebacks.</p>
    `,
  },
  "mcbeth-odds-analysis": {
    title: "Paul McBeth Odds Analysis: Is the GOAT Still Worth Betting?",
    excerpt:
      "Breaking down Paul McBeth's recent performance and whether his current odds offer value for disc golf bettors.",
    category: "Player Analysis",
    date: "2024-08-08",
    readTime: "6 min read",
    author: "Sarah Chen",
    image: "/paul-mcbeth-disc-golf.png",
    content: `
      <p>Paul McBeth's dominance in professional disc golf is undeniable, but as bettors, we need to look beyond reputation and examine whether his current odds provide value in today's competitive landscape.</p>
      
      <h2>Recent Performance Analysis</h2>
      <p>Over the past 12 months, McBeth has maintained a top-5 finish rate of 78%, with 4 tournament victories. While impressive, this represents a slight decline from his peak years of 2018-2020.</p>
      
      <h2>The Competition Factor</h2>
      <p>The emergence of players like Calvin Heimburg, Eagle McMahon, and Gannon Buhr has created a more competitive field. McBeth's odds often don't reflect this increased competition.</p>
      
      <h2>Betting Recommendation</h2>
      <p>McBeth remains a solid bet for top-3 finishes and is still the best clutch performer in the sport. However, his outright win odds often provide poor value. Consider him for place bets and head-to-head matchups instead.</p>
    `,
  },
  "live-betting-guide": {
    title: "Live Betting on Disc Golf: Complete Strategy Guide",
    excerpt: "Master the art of live betting on disc golf tournaments with our comprehensive strategy guide and tips.",
    category: "Betting Strategy",
    date: "2024-08-05",
    readTime: "10 min read",
    author: "Tom Rodriguez",
    image: "/live-betting-disc-golf.png",
    content: `
      <p>Live betting on disc golf offers unique opportunities that traditional pre-tournament betting can't match. With real-time odds adjustments based on player performance, weather conditions, and course dynamics, savvy bettors can find tremendous value.</p>
      
      <h2>Understanding Live Betting Markets</h2>
      <p>Live disc golf betting typically includes tournament winner adjustments, round winner bets, and prop bets like next player to ace or bogey. These markets shift rapidly based on current performance.</p>
      
      <h2>Key Strategies</h2>
      <h3>Weather Monitoring</h3>
      <p>Wind conditions can dramatically shift player advantages. Monitor weather apps and adjust bets accordingly when conditions favor certain playing styles.</p>
      
      <h3>Course Knowledge</h3>
      <p>Understanding which holes favor different players gives you an edge in round winner and prop betting markets.</p>
      
      <h2>Timing Your Bets</h2>
      <p>The best live betting opportunities often come after the first round when odds adjust but before the field settles into their rhythm.</p>
    `,
  },
  "dgpt-championship-recap": {
    title: "DGPT Championship 2023 Recap: Betting Lessons Learned",
    excerpt: "Analyzing the 2023 DGPT Championship results and what they teach us about disc golf betting strategies.",
    category: "Tournament Recap",
    date: "2024-07-30",
    readTime: "7 min read",
    author: "Mike Johnson",
    image: "/placeholder-7azm0.png",
    content: `
      <p>The 2023 DGPT Championship provided several valuable lessons for disc golf bettors. Paul McBeth's victory at +250 odds demonstrated the importance of experience in high-pressure situations.</p>
      
      <h2>Key Takeaways</h2>
      <h3>Experience Matters</h3>
      <p>McBeth's clutch performance in the final round showed why veteran players often provide value in major championships, even when their regular season form suggests otherwise.</p>
      
      <h3>Course Conditions</h3>
      <p>The windy conditions at Hornets Nest favored players with superior course management skills, highlighting the importance of weather analysis in betting decisions.</p>
      
      <h2>Betting Performance Review</h2>
      <p>Pre-tournament favorites performed well, with 4 of the top 5 betting choices finishing in the top 10. This suggests that disc golf betting markets are becoming more efficient.</p>
    `,
  },
  "weather-impact-betting": {
    title: "How Weather Impacts Disc Golf Betting: Complete Analysis",
    excerpt:
      "Understanding how different weather conditions affect player performance and betting odds in professional disc golf.",
    category: "Betting Strategy",
    date: "2024-07-25",
    readTime: "9 min read",
    author: "Sarah Chen",
    image: "/disc-golf-windy.png",
    content: `
      <p>Weather is perhaps the most underestimated factor in disc golf betting. Wind, rain, and temperature can dramatically shift the competitive landscape and create betting opportunities for prepared bettors.</p>
      
      <h2>Wind Impact Analysis</h2>
      <p>Strong winds favor players with superior disc selection and course management skills. Power throwers often struggle more than finesse players in windy conditions.</p>
      
      <h3>Players Who Excel in Wind</h3>
      <ul>
        <li>Calvin Heimburg - Exceptional disc selection</li>
        <li>Nate Sexton - Conservative, smart play</li>
        <li>James Conrad - Adaptable throwing style</li>
      </ul>
      
      <h2>Rain and Wet Conditions</h2>
      <p>Wet conditions slow down discs and make footing treacherous. Players with strong short games and conservative strategies gain advantages.</p>
      
      <h2>Temperature Effects</h2>
      <p>Cold weather makes discs more stable, while hot weather makes them more understable. Understanding these physics helps predict player performance.</p>
    `,
  },
  "fpo-rising-stars": {
    title: "FPO Rising Stars: Best Betting Values in Women's Disc Golf",
    excerpt:
      "Identifying the best betting opportunities in the rapidly growing FPO division with emerging talent and shifting odds.",
    category: "Player Analysis",
    date: "2024-07-20",
    readTime: "8 min read",
    author: "Tom Rodriguez",
    image: "/placeholder-czxe9.png",
    content: `
      <p>The FPO (Female Professional Open) division is experiencing unprecedented growth, with new talent emerging and established players reaching new heights. This creates excellent betting opportunities for informed bettors.</p>
      
      <h2>Current FPO Landscape</h2>
      <p>Kristin Tattar's dominance has been challenged by rising stars like Eveliina Salonen and Ella Hansen, creating more competitive and valuable betting markets.</p>
      
      <h3>Top Betting Targets</h3>
      <h4>Eveliina Salonen</h4>
      <p>The Finnish phenom has shown incredible consistency and power. Her odds often undervalue her true chances, especially on longer courses.</p>
      
      <h4>Ella Hansen</h4>
      <p>Hansen's breakthrough season has established her as a legitimate contender. Look for value when she's playing courses that suit her aggressive style.</p>
      
      <h2>Betting Strategy for FPO</h2>
      <p>FPO betting markets are less efficient than MPO, creating more opportunities for value. Focus on head-to-head matchups and top-3 finishes rather than outright winners.</p>
    `,
  },
}

export async function generateMetadata({ params }: { params: { articleId: string } }): Promise<Metadata> {
  const article = articles[params.articleId as keyof typeof articles]

  if (!article) {
    return {
      title: "Article Not Found | DiscGolfOdds.com",
    }
  }

  return {
    title: `${article.title} | DiscGolfOdds.com`,
    description: article.excerpt,
    keywords: `disc golf betting, ${article.category.toLowerCase()}, disc golf news`,
  }
}

export default function ArticlePage({ params }: { params: { articleId: string } }) {
  const article = articles[params.articleId as keyof typeof articles]

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/news" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to News
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-6">
              <img
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center gap-4 mb-4">
              <Badge variant="secondary">{article.category}</Badge>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                {new Date(article.date).toLocaleDateString()}
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-foreground mb-4">{article.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{article.excerpt}</p>

            <div className="flex items-center justify-between border-b border-border pb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">
                    {article.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">By {article.author}</p>
                  <p className="text-sm text-muted-foreground">Disc Golf Betting Expert</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>

          {/* Coolbet CTA */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Ready to Place Your Bets?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Use the insights from this analysis to make informed bets on Coolbet. New users get an exclusive welcome
                bonus!
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/bonuses">Get Coolbet Bonus</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/odds">View Live Odds</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </article>
      </div>
    </div>
  )
}
