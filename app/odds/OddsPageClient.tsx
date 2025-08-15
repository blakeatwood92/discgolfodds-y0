"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, TrendingUp, TrendingDown, Search, Filter, Clock, Target } from "lucide-react"
import Link from "next/link"

export default function OddsPageClient() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedEvent, setSelectedEvent] = useState("all")
  const [selectedDate, setSelectedDate] = useState("all")

  // Mock data - in real implementation, this would come from Coolbet API
  const tournaments = [
    {
      id: 1,
      name: "DGPT Championship",
      location: "Charlotte, NC",
      date: "2024-10-24",
      status: "upcoming",
      rounds: 4,
    },
    {
      id: 2,
      name: "MVP Open",
      location: "Maple Hill, MA",
      date: "2024-11-15",
      status: "upcoming",
      rounds: 3,
    },
    {
      id: 3,
      name: "Las Vegas Challenge",
      location: "Las Vegas, NV",
      date: "2024-12-05",
      status: "live",
      rounds: 4,
      currentRound: 2,
    },
  ]

  const outrightOdds = [
    {
      player: "Paul McBeth",
      odds: "+250",
      decimal: "3.50",
      movement: "up",
      change: "+25",
      tournament: "DGPT Championship",
    },
    {
      player: "Ricky Wysocki",
      odds: "+300",
      decimal: "4.00",
      movement: "down",
      change: "-50",
      tournament: "DGPT Championship",
    },
    {
      player: "Calvin Heimburg",
      odds: "+400",
      decimal: "5.00",
      movement: "up",
      change: "+100",
      tournament: "DGPT Championship",
    },
    {
      player: "Eagle McMahon",
      odds: "+500",
      decimal: "6.00",
      movement: "stable",
      change: "0",
      tournament: "DGPT Championship",
    },
    {
      player: "Simon Lizotte",
      odds: "+600",
      decimal: "7.00",
      movement: "up",
      change: "+50",
      tournament: "DGPT Championship",
    },
    {
      player: "Paige Pierce",
      odds: "+180",
      decimal: "2.80",
      movement: "down",
      change: "-20",
      tournament: "MVP Open",
    },
    {
      player: "Catrina Allen",
      odds: "+220",
      decimal: "3.20",
      movement: "up",
      change: "+30",
      tournament: "MVP Open",
    },
    {
      player: "Kristin Tattar",
      odds: "+250",
      decimal: "3.50",
      movement: "stable",
      change: "0",
      tournament: "MVP Open",
    },
  ]

  const matchups = [
    {
      player1: "Paul McBeth",
      player1Odds: "-110",
      player2: "Ricky Wysocki",
      player2Odds: "-110",
      tournament: "DGPT Championship",
    },
    {
      player1: "Calvin Heimburg",
      player1Odds: "+120",
      player2: "Eagle McMahon",
      player2Odds: "-140",
      tournament: "DGPT Championship",
    },
    {
      player1: "Paige Pierce",
      player1Odds: "-150",
      player2: "Catrina Allen",
      player2Odds: "+130",
      tournament: "MVP Open",
    },
  ]

  const propBets = [
    {
      market: "Will there be an ace in Round 1?",
      yes: "+150",
      no: "-180",
      tournament: "DGPT Championship",
    },
    {
      market: "Lowest Round Score",
      over: "Under 58.5 (-110)",
      under: "Over 58.5 (-110)",
      tournament: "DGPT Championship",
    },
    {
      market: "Total Aces in Tournament",
      over: "Over 2.5 (+120)",
      under: "Under 2.5 (-140)",
      tournament: "MVP Open",
    },
  ]

  const filteredOdds = outrightOdds.filter((odd) => {
    const matchesSearch = odd.player.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesEvent = selectedEvent === "all" || odd.tournament === selectedEvent
    return matchesSearch && matchesEvent
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold font-sans text-foreground">
                DiscGolfOdds.com
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/odds" className="text-primary font-serif">
                Live Odds
              </Link>
              <Link href="/guides" className="text-muted-foreground hover:text-foreground font-serif">
                Betting Guides
              </Link>
              <Link href="/bonuses" className="text-muted-foreground hover:text-foreground font-serif">
                Coolbet Bonuses
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold font-sans text-foreground mb-4">Live Disc Golf Odds</h1>
          <p className="text-xl font-serif text-muted-foreground">
            Real-time odds and betting markets for all major disc golf tournaments
          </p>
        </div>

        {/* Live Updates Banner */}
        <Card className="mb-8 bg-accent/10 border-accent/20">
          <CardContent className="py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-3"></div>
                <span className="font-serif text-sm">
                  <strong>Live:</strong> Las Vegas Challenge - Round 2 in progress
                </span>
              </div>
              <Badge variant="secondary" className="font-serif">
                <Clock className="h-3 w-3 mr-1" />
                Updated 2 min ago
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-sans flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Filter Odds
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search players..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 font-serif"
                />
              </div>
              <Select value={selectedEvent} onValueChange={setSelectedEvent}>
                <SelectTrigger className="font-serif">
                  <SelectValue placeholder="Select tournament" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Tournaments</SelectItem>
                  <SelectItem value="DGPT Championship">DGPT Championship</SelectItem>
                  <SelectItem value="MVP Open">MVP Open</SelectItem>
                  <SelectItem value="Las Vegas Challenge">Las Vegas Challenge</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedDate} onValueChange={setSelectedDate}>
                <SelectTrigger className="font-serif">
                  <SelectValue placeholder="Select date range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Dates</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Odds Tabs */}
        <Tabs defaultValue="outright" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 font-serif">
            <TabsTrigger value="outright">Tournament Winners</TabsTrigger>
            <TabsTrigger value="matchups">Head-to-Head</TabsTrigger>
            <TabsTrigger value="props">Prop Bets</TabsTrigger>
          </TabsList>

          {/* Tournament Winners */}
          <TabsContent value="outright">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredOdds.map((odd, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="font-sans text-lg">{odd.player}</CardTitle>
                        <CardDescription className="font-serif">{odd.tournament}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary" className="font-serif">
                            {odd.odds}
                          </Badge>
                          {odd.movement !== "stable" && (
                            <div
                              className={`flex items-center text-xs ${
                                odd.movement === "up" ? "text-green-600" : "text-red-600"
                              }`}
                            >
                              {odd.movement === "up" ? (
                                <TrendingUp className="h-3 w-3 mr-1" />
                              ) : (
                                <TrendingDown className="h-3 w-3 mr-1" />
                              )}
                              {odd.change}
                            </div>
                          )}
                        </div>
                        <div className="text-xs font-serif text-muted-foreground mt-1">Decimal: {odd.decimal}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-primary hover:bg-primary/90 font-serif" asChild>
                      <a href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                        Bet on Coolbet <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Head-to-Head Matchups */}
          <TabsContent value="matchups">
            <div className="space-y-6">
              {matchups.map((matchup, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="font-sans text-center">{matchup.tournament}</CardTitle>
                    <CardDescription className="font-serif text-center">Head-to-Head Matchup</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-muted rounded-lg">
                        <div className="font-semibold font-sans mb-2">{matchup.player1}</div>
                        <Badge variant="secondary" className="font-serif mb-3">
                          {matchup.player1Odds}
                        </Badge>
                        <Button className="w-full bg-primary hover:bg-primary/90 font-serif" size="sm" asChild>
                          <a href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                            Bet Now
                          </a>
                        </Button>
                      </div>
                      <div className="text-center p-4 bg-muted rounded-lg">
                        <div className="font-semibold font-sans mb-2">{matchup.player2}</div>
                        <Badge variant="secondary" className="font-serif mb-3">
                          {matchup.player2Odds}
                        </Badge>
                        <Button className="w-full bg-primary hover:bg-primary/90 font-serif" size="sm" asChild>
                          <a href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                            Bet Now
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Prop Bets */}
          <TabsContent value="props">
            <div className="space-y-6">
              {propBets.map((prop, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="font-sans flex items-center">
                      <Target className="h-5 w-5 mr-2" />
                      {prop.market}
                    </CardTitle>
                    <CardDescription className="font-serif">{prop.tournament}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-muted rounded-lg">
                        <div className="font-semibold font-sans mb-2">
                          {prop.yes ? "Yes" : prop.over ? "Over" : "Option 1"}
                        </div>
                        <Badge variant="secondary" className="font-serif mb-3">
                          {prop.yes || prop.over}
                        </Badge>
                        <Button className="w-full bg-primary hover:bg-primary/90 font-serif" size="sm" asChild>
                          <a href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                            Bet Now
                          </a>
                        </Button>
                      </div>
                      <div className="text-center p-4 bg-muted rounded-lg">
                        <div className="font-semibold font-sans mb-2">
                          {prop.no ? "No" : prop.under ? "Under" : "Option 2"}
                        </div>
                        <Badge variant="secondary" className="font-serif mb-3">
                          {prop.no || prop.under}
                        </Badge>
                        <Button className="w-full bg-primary hover:bg-primary/90 font-serif" size="sm" asChild>
                          <a href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                            Bet Now
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Odds Movement History */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="font-sans">Recent Odds Movements</CardTitle>
            <CardDescription className="font-serif">Track how odds have changed over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                {
                  player: "Paul McBeth",
                  tournament: "DGPT Championship",
                  time: "2 hours ago",
                  change: "+250 → +275",
                  direction: "up",
                },
                {
                  player: "Ricky Wysocki",
                  tournament: "DGPT Championship",
                  time: "4 hours ago",
                  change: "+250 → +300",
                  direction: "down",
                },
                {
                  player: "Paige Pierce",
                  tournament: "MVP Open",
                  time: "6 hours ago",
                  change: "+200 → +180",
                  direction: "up",
                },
              ].map((movement, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center">
                    <div
                      className={`w-2 h-2 rounded-full mr-3 ${
                        movement.direction === "up" ? "bg-green-500" : "bg-red-500"
                      }`}
                    ></div>
                    <div>
                      <div className="font-semibold font-sans text-sm">{movement.player}</div>
                      <div className="font-serif text-xs text-muted-foreground">{movement.tournament}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-serif text-sm">{movement.change}</div>
                    <div className="font-serif text-xs text-muted-foreground">{movement.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="mt-12 p-6 bg-accent rounded-lg text-center">
          <h3 className="text-2xl font-bold font-sans text-accent-foreground mb-4">Ready to Place Your Bets?</h3>
          <p className="font-serif text-accent-foreground/90 mb-6">
            Join Coolbet now and get your exclusive $40 welcome bonus
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-accent hover:bg-white/90 font-serif" asChild>
            <Link href="/bonuses">
              Claim Bonus & Start Betting <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
