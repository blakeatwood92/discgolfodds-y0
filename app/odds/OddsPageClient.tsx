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

  const tournaments = [
    {
      id: 1,
      name: "Discraft's Ledgestone Open",
      location: "Peoria, IL",
      date: "2025-08-17",
      status: "live",
      rounds: 4,
      currentRound: 3,
    },
    {
      id: 2,
      name: "LWS Open at Idlewild",
      location: "Burlington, KY",
      date: "2025-08-24",
      status: "upcoming",
      rounds: 3,
    },
    {
      id: 3,
      name: "Discraft Great Lakes Open",
      location: "Milford, MI",
      date: "2025-09-07",
      status: "upcoming",
      rounds: 4,
    },
    {
      id: 4,
      name: "Green Mountain Championship",
      location: "Jeffersonville, VT",
      date: "2025-09-21",
      status: "upcoming",
      rounds: 4,
    },
    {
      id: 5,
      name: "MVP Open",
      location: "Leicester, MA",
      date: "2025-09-28",
      status: "upcoming",
      rounds: 3,
    },
    {
      id: 6,
      name: "US Disc Golf Championship",
      location: "Rock Hill, SC",
      date: "2025-10-12",
      status: "upcoming",
      rounds: 4,
    },
  ]

  const outrightOdds = [
    {
      player: "Paul McBeth",
      odds: "+220",
      decimal: "3.20",
      movement: "up",
      change: "+20",
      tournament: "Discraft's Ledgestone Open",
    },
    {
      player: "Ricky Wysocki",
      odds: "+280",
      decimal: "3.80",
      movement: "down",
      change: "-30",
      tournament: "Discraft's Ledgestone Open",
    },
    {
      player: "Calvin Heimburg",
      odds: "+350",
      decimal: "4.50",
      movement: "up",
      change: "+50",
      tournament: "Discraft's Ledgestone Open",
    },
    {
      player: "Eagle McMahon",
      odds: "+450",
      decimal: "5.50",
      movement: "stable",
      change: "0",
      tournament: "Discraft's Ledgestone Open",
    },
    {
      player: "Simon Lizotte",
      odds: "+550",
      decimal: "6.50",
      movement: "up",
      change: "+100",
      tournament: "LWS Open at Idlewild",
    },
    {
      player: "Gannon Buhr",
      odds: "+600",
      decimal: "7.00",
      movement: "down",
      change: "-50",
      tournament: "LWS Open at Idlewild",
    },
    {
      player: "Paige Pierce",
      odds: "+160",
      decimal: "2.60",
      movement: "down",
      change: "-20",
      tournament: "Green Mountain Championship",
    },
    {
      player: "Catrina Allen",
      odds: "+200",
      decimal: "3.00",
      movement: "up",
      change: "+25",
      tournament: "Green Mountain Championship",
    },
    {
      player: "Kristin Tattar",
      odds: "+240",
      decimal: "3.40",
      movement: "stable",
      change: "0",
      tournament: "MVP Open",
    },
    {
      player: "Eveliina Salonen",
      odds: "+320",
      decimal: "4.20",
      movement: "up",
      change: "+40",
      tournament: "MVP Open",
    },
  ]

  const matchups = [
    {
      player1: "Paul McBeth",
      player1Odds: "-105",
      player2: "Ricky Wysocki",
      player2Odds: "-115",
      tournament: "Discraft's Ledgestone Open",
    },
    {
      player1: "Calvin Heimburg",
      player1Odds: "+110",
      player2: "Eagle McMahon",
      player2Odds: "-130",
      tournament: "LWS Open at Idlewild",
    },
    {
      player1: "Paige Pierce",
      player1Odds: "-140",
      player2: "Catrina Allen",
      player2Odds: "+120",
      tournament: "Green Mountain Championship",
    },
    {
      player1: "Simon Lizotte",
      player1Odds: "+105",
      player2: "Gannon Buhr",
      player2Odds: "-125",
      tournament: "LWS Open at Idlewild",
    },
  ]

  const propBets = [
    {
      market: "Will there be an ace in Round 3?",
      yes: "+140",
      no: "-170",
      tournament: "Discraft's Ledgestone Open",
    },
    {
      market: "Lowest Round Score at Idlewild",
      over: "Under 55.5 (-120)",
      under: "Over 55.5 (+100)",
      tournament: "LWS Open at Idlewild",
    },
    {
      market: "Total Aces in Tournament",
      over: "Over 3.5 (+110)",
      under: "Under 3.5 (-130)",
      tournament: "Green Mountain Championship",
    },
    {
      market: "Will Paul McBeth make the final card?",
      yes: "-200",
      no: "+170",
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
                  <strong>Live:</strong> Discraft's Ledgestone Open - Round 3 in progress
                </span>
              </div>
              <Badge variant="secondary" className="font-serif">
                <Clock className="h-3 w-3 mr-1" />
                Updated 1 min ago
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
                  <SelectItem value="Discraft's Ledgestone Open">Discraft's Ledgestone Open</SelectItem>
                  <SelectItem value="LWS Open at Idlewild">LWS Open at Idlewild</SelectItem>
                  <SelectItem value="Discraft Great Lakes Open">Discraft Great Lakes Open</SelectItem>
                  <SelectItem value="Green Mountain Championship">Green Mountain Championship</SelectItem>
                  <SelectItem value="MVP Open">MVP Open</SelectItem>
                  <SelectItem value="US Disc Golf Championship">US Disc Golf Championship</SelectItem>
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
                  tournament: "Discraft's Ledgestone Open",
                  time: "1 hour ago",
                  change: "+200 → +220",
                  direction: "down",
                },
                {
                  player: "Calvin Heimburg",
                  tournament: "LWS Open at Idlewild",
                  time: "3 hours ago",
                  change: "+300 → +350",
                  direction: "down",
                },
                {
                  player: "Paige Pierce",
                  tournament: "Green Mountain Championship",
                  time: "5 hours ago",
                  change: "+180 → +160",
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
