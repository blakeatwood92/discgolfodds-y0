"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, RefreshCw } from "lucide-react"

interface NewsItem {
  title: string
  link: string
  source: string
  publishedAt: string | null
  snippet: string
  image?: string
}

interface NewsResponse {
  query: string
  count: number
  items: NewsItem[]
}

export function LiveNewsSection() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchNews = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch("/api/news?q=disc golf")
      if (!response.ok) {
        throw new Error("Failed to fetch news")
      }
      const data: NewsResponse = await response.json()
      setNews(data.items.slice(0, 6)) // Show top 6 articles
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load news")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNews()
  }, [])

  const getNewsImage = (index: number) => {
    const fallbackImages = [
      "/disc-golf-course-aerial.png",
      "/disc-golf-forest-throw.png",
      "/paul-mcbeth-disc-golf.png",
      "/disc-golf-windy.png",
      "/disc-golf-tournament-crowd.png",
      "/placeholder-disc-golf.png",
    ]
    return fallbackImages[index % fallbackImages.length]
  }

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="animate-pulse overflow-hidden">
            <div className="h-48 bg-muted"></div>
            <CardHeader>
              <div className="h-4 bg-muted rounded w-3/4"></div>
              <div className="h-6 bg-muted rounded"></div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="h-3 bg-muted rounded"></div>
                <div className="h-3 bg-muted rounded w-5/6"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <Card className="p-8 text-center">
        <p className="text-muted-foreground mb-4">Failed to load live news: {error}</p>
        <Button onClick={fetchNews} variant="outline">
          <RefreshCw className="h-4 w-4 mr-2" />
          Try Again
        </Button>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">📡 Live updates from Google News • {news.length} articles</p>
        <Button onClick={fetchNews} variant="outline" size="sm">
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48 overflow-hidden">
              <img
                src={item.image || getNewsImage(index)}
                alt={item.title}
                className="w-full h-full object-cover transition-transform hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = getNewsImage(index)
                }}
              />
              <div className="absolute top-3 left-3">
                <Badge variant="secondary" className="text-xs bg-black/70 text-white border-0">
                  {item.source || "News"}
                </Badge>
              </div>
              {item.publishedAt && (
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="text-xs bg-black/70 text-white border-0">
                    {new Date(item.publishedAt).toLocaleDateString()}
                  </Badge>
                </div>
              )}
            </div>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg leading-tight line-clamp-2">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              {item.snippet && <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{item.snippet}</p>}
              <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  Read Full Article 📖
                  <ExternalLink className="h-3 w-3 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
