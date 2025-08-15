import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Calendar, MapPin, Trophy, Users, Target, TrendingUp } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Mock data - in real implementation, this would come from a database or API
const eventData = {
  "worlds-2024": {
    name: "PDGA World Championships 2024",
    location: "Des Moines, IA",
    venue: "Pickard Park",
    date: "August 27-31, 2024",
    status: "completed",
    purse: "$100,000",
    rounds: 5,
    pastWinner: "Gannon Buhr (2024)",
    description: "The most prestigious tournament in disc golf, featuring the world's best players.",
    courseInfo: {
      designer: "John Houck",
      established: "1985",
      holes: 18,
      par: 54,
      length: "7,500 ft",
      terrain: "Mixed woods and open",
    },
    pastWinners: [
      { year: 2024, winner: "Gannon Buhr", score: "-45" },
      { year: 2023, winner: "Calvin Heimburg", score: "-42" },
      { year: 2022, winner: "Paul McBeth", score: "-38" },
    ],
    currentOdds: [
      { player: "Calvin Heimburg", odds: "+300", movement: "up" },
      { player: "Paul McBeth", odds: "+350", movement: "stable" },
      { player: "Gannon Buhr", odds: "+400", movement: "up" },
      { player: "Eagle McMahon", odds: "+500", movement: "down" },
    ],
    bettingMarkets: [
      "Tournament Winner",
      "Top 3 Finish",
      "Head-to-Head Matchups",
      "Round Winner Props",
      "Hole-in-One Props",
      "Cut Line Props",
    ],
  },
  "usdgc-2024": {
    name: "United States Disc Golf Championship",
    location: "Rock Hill, SC",
    venue: "Winthrop University",
    date: "October 3-6, 2024",
    status: "upcoming",
    purse: "$75,000",
    rounds: 4,
    pastWinner: "Calvin Heimburg (2023)",
    description: "The most prestigious invitational tournament in disc golf.",
    courseInfo: {
      designer: "Harold Duvall",
      established: "1982",
      holes: 18,
      par: 54,
      length: "7,200 ft",
      terrain: "Parkland with water hazards",
    },
    pastWinners: [
      { year: 2023, winner: "Calvin Heimburg", score: "-32" },
      { year: 2022, winner: "Paul McBeth", score: "-28" },
      { year: 2021, winner: "Ricky Wysocki", score: "-30" },
    ],
    currentOdds: [
      { player: "Calvin Heimburg", odds: "+250", movement: "stable" },
      { player: "Paul McBeth", odds: "+300", movement: "up" },
      { player: "Ricky Wysocki", odds: "+400", movement: "down" },
      { player: "Eagle McMahon", odds: "+500", movement: "stable" },
    ],
    bettingMarkets: ["Tournament Winner", "Top 5 Finish", "Player Matchups", "Ace Props", "Lowest Round Score"],
  },
  "dgpt-championship": {
    name: "DGPT Championship",
    location: "Charlotte, NC",
    venue: "Hornets Nest Park",
    date: "October 24-27, 2024",
    status: "upcoming",
    purse: "$75,000",
    rounds: 4,
    pastWinner: "Paul McBeth (2023)",
    description: "The season finale featuring the top 72 players competing for the biggest purse of the year.",
    courseInfo: {
      designer: "John Houck",
      established: "1977",
      holes: 18,
      par: 54,
      length: "7,200 ft",
      terrain: "Mixed woods and open",
    },
    pastWinners: [
      { year: 2023, winner: "Paul McBeth", score: "-32" },
      { year: 2022, winner: "Ricky Wysocki", score: "-28" },
      { year: 2021, winner: "Calvin Heimburg", score: "-30" },
    ],
    currentOdds: [
      { player: "Paul McBeth", odds: "+250", movement: "up" },
      { player: "Ricky Wysocki", odds: "+300", movement: "down" },
      { player: "Calvin Heimburg", odds: "+400", movement: "stable" },
      { player: "Eagle McMahon", odds: "+500", movement: "up" },
    ],
    bettingMarkets: [
      "Tournament Winner",
      "Top 3 Finish",
      "Head-to-Head Matchups",
      "Round Winner Props",
      "Hole-in-One Props",
      "Cut Line Props",
    ],
  },
  "ledgestone-open": {
    name: "Ledgestone Insurance Open",
    location: "Peoria, IL",
    venue: "Northwood Park",
    date: "August 8-11, 2024",
    status: "completed",
    purse: "$50,000",
    rounds: 4,
    pastWinner: "Paul McBeth (2024)",
    description: "Elite Series event known for its challenging wooded course and premium production.",
    courseInfo: {
      designer: "Nate Heinold",
      established: "2010",
      holes: 18,
      par: 54,
      length: "6,900 ft",
      terrain: "Dense woods",
    },
    pastWinners: [
      { year: 2024, winner: "Paul McBeth", score: "-25" },
      { year: 2023, winner: "Calvin Heimburg", score: "-22" },
      { year: 2022, winner: "Eagle McMahon", score: "-20" },
    ],
    currentOdds: [
      { player: "Calvin Heimburg", odds: "+200", movement: "stable" },
      { player: "Paul McBeth", odds: "+250", movement: "up" },
      { player: "Eagle McMahon", odds: "+300", movement: "down" },
      { player: "Simon Lizotte", odds: "+400", movement: "stable" },
    ],
    bettingMarkets: ["Tournament Winner", "Top 5 Finish", "Player Matchups", "Ace Props", "Lowest Round Score"],
  },
  "great-lakes-open": {
    name: "Great Lakes Open",
    location: "Milford, MI",
    venue: "Kensington Metropark",
    date: "July 18-21, 2024",
    status: "completed",
    purse: "$40,000",
    rounds: 4,
    pastWinner: "Eagle McMahon (2024)",
    description: "Elite Series event featuring multiple courses and challenging conditions.",
    courseInfo: {
      designer: "Multiple",
      established: "1995",
      holes: 18,
      par: 54,
      length: "7,000 ft",
      terrain: "Mixed parkland",
    },
    pastWinners: [
      { year: 2024, winner: "Eagle McMahon", score: "-28" },
      { year: 2023, winner: "Ricky Wysocki", score: "-25" },
      { year: 2022, winner: "Calvin Heimburg", score: "-30" },
    ],
    currentOdds: [
      { player: "Eagle McMahon", odds: "+300", movement: "up" },
      { player: "Ricky Wysocki", odds: "+350", movement: "stable" },
      { player: "Calvin Heimburg", odds: "+400", movement: "down" },
      { player: "Paul McBeth", odds: "+450", movement: "stable" },
    ],
    bettingMarkets: ["Tournament Winner", "Top 3 Finish", "Head-to-Head Matchups", "Round Winner Props"],
  },
  "preserve-championship": {
    name: "The Preserve Championship",
    location: "Clearwater, MN",
    venue: "The Preserve at Boulder Creek",
    date: "September 12-15, 2024",
    status: "upcoming",
    purse: "$60,000",
    rounds: 4,
    pastWinner: "Calvin Heimburg (2023)",
    description: "Elite Series event on one of the most beautiful and challenging courses in disc golf.",
    courseInfo: {
      designer: "Cale Leiviska",
      established: "2018",
      holes: 18,
      par: 54,
      length: "7,400 ft",
      terrain: "Wooded with elevation",
    },
    pastWinners: [
      { year: 2023, winner: "Calvin Heimburg", score: "-35" },
      { year: 2022, winner: "Paul McBeth", score: "-32" },
      { year: 2021, winner: "Eagle McMahon", score: "-28" },
    ],
    currentOdds: [
      { player: "Calvin Heimburg", odds: "+200", movement: "stable" },
      { player: "Eagle McMahon", odds: "+300", movement: "up" },
      { player: "Paul McBeth", odds: "+350", movement: "down" },
      { player: "Simon Lizotte", odds: "+400", movement: "stable" },
    ],
    bettingMarkets: ["Tournament Winner", "Top 5 Finish", "Player Matchups", "Ace Props", "Weather Props"],
  },
}

export default function EventDetailPage({ params }: { params: { eventId: string } }) {
  const event = eventData[params.eventId as keyof typeof eventData]

  if (!event) {
    notFound()
  }

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
              <Link href="/odds" className="text-muted-foreground hover:text-foreground font-serif">
                Live Odds
              </Link>
              <Link href="/guides" className="text-muted-foreground hover:text-foreground font-serif">
                Betting Guides
              </Link>
              <Link href="/events" className="text-primary font-serif">
                Events
              </Link>
              <Link href="/bonuses" className="text-muted-foreground hover:text-foreground font-serif">
                Coolbet Bonuses
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm font-serif text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/events" className="hover:text-foreground">
                Events
              </Link>
            </li>
            <li>/</li>
            <li className="text-foreground">{event.name}</li>
          </ol>
        </nav>

        {/* Event Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <div className="flex items-center mb-2">
                <h1 className="text-4xl font-bold font-sans text-foreground mr-4">{event.name}</h1>
                <Badge variant={event.status === "live" ? "default" : "secondary"} className="font-serif">
                  {event.status === "live" ? "Live Now" : "Upcoming"}
                </Badge>
              </div>
              <p className="text-xl font-serif text-muted-foreground">{event.description}</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button size="lg" className="bg-primary hover:bg-primary/90 font-serif" asChild>
                <a href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                  <Target className="mr-2 h-5 w-5" />
                  Bet on Coolbet
                </a>
              </Button>
            </div>
          </div>

          {/* Event Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-primary mr-2" />
                  <div>
                    <div className="font-semibold font-sans text-sm">Date</div>
                    <div className="font-serif text-sm text-muted-foreground">{event.date}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-2" />
                  <div>
                    <div className="font-semibold font-sans text-sm">Location</div>
                    <div className="font-serif text-sm text-muted-foreground">
                      {event.location}
                      <br />
                      {event.venue}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <Trophy className="h-5 w-5 text-primary mr-2" />
                  <div>
                    <div className="font-semibold font-sans text-sm">Prize Pool</div>
                    <div className="font-serif text-sm text-muted-foreground">{event.purse}</div>
                    <div className="font-serif text-xs text-muted-foreground">{event.rounds} rounds</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-primary mr-2" />
                  <div>
                    <div className="font-semibold font-sans text-sm">Defending Champion</div>
                    <div className="font-serif text-sm text-muted-foreground">{event.pastWinner}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Event Details Tabs */}
        <Tabs defaultValue="odds" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 font-serif">
            <TabsTrigger value="odds">Current Odds</TabsTrigger>
            <TabsTrigger value="course">Course Info</TabsTrigger>
            <TabsTrigger value="history">Past Winners</TabsTrigger>
            <TabsTrigger value="betting">Betting Markets</TabsTrigger>
          </TabsList>

          {/* Current Odds */}
          <TabsContent value="odds">
            <Card>
              <CardHeader>
                <CardTitle className="font-sans">Tournament Winner Odds</CardTitle>
                <CardDescription className="font-serif">
                  Live odds for {event.name} - Updated in real-time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {event.currentOdds.map((odd, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <div className="flex items-center">
                        <div className="font-semibold font-sans">{odd.player}</div>
                        {odd.movement !== "stable" && (
                          <div
                            className={`ml-2 flex items-center text-xs ${
                              odd.movement === "up" ? "text-green-600" : "text-red-600"
                            }`}
                          >
                            <TrendingUp className={`h-3 w-3 mr-1 ${odd.movement === "down" ? "rotate-180" : ""}`} />
                            {odd.movement}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant="secondary" className="font-serif">
                          {odd.odds}
                        </Badge>
                        <Button size="sm" className="font-serif" asChild>
                          <a href="https://coolbet.com" target="_blank" rel="noopener noreferrer">
                            Bet Now
                          </a>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline" className="font-serif bg-transparent" asChild>
                    <Link href="/odds">
                      View All Odds <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Course Info */}
          <TabsContent value="course">
            <Card>
              <CardHeader>
                <CardTitle className="font-sans">{event.venue}</CardTitle>
                <CardDescription className="font-serif">Course details and layout information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold font-sans mb-3">Course Statistics</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-serif">Designer:</span>
                        <span className="font-serif font-semibold">{event.courseInfo.designer}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-serif">Established:</span>
                        <span className="font-serif font-semibold">{event.courseInfo.established}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-serif">Holes:</span>
                        <span className="font-serif font-semibold">{event.courseInfo.holes}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-serif">Par:</span>
                        <span className="font-serif font-semibold">{event.courseInfo.par}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-serif">Length:</span>
                        <span className="font-serif font-semibold">{event.courseInfo.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-serif">Terrain:</span>
                        <span className="font-serif font-semibold">{event.courseInfo.terrain}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold font-sans mb-3">Betting Considerations</h4>
                    <div className="space-y-2 text-sm font-serif">
                      <p>• Course favors accuracy over distance</p>
                      <p>• Weather conditions can significantly impact scoring</p>
                      <p>• Local knowledge provides significant advantage</p>
                      <p>• Historically low-scoring tournament</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Past Winners */}
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle className="font-sans">Tournament History</CardTitle>
                <CardDescription className="font-serif">Past champions and winning scores</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {event.pastWinners.map((winner, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-4">
                          {winner.year}
                        </div>
                        <div>
                          <div className="font-semibold font-sans">{winner.winner}</div>
                          <div className="font-serif text-sm text-muted-foreground">Champion</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold font-sans">{winner.score}</div>
                        <div className="font-serif text-sm text-muted-foreground">Final Score</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Betting Markets */}
          <TabsContent value="betting">
            <Card>
              <CardHeader>
                <CardTitle className="font-sans">Available Betting Markets</CardTitle>
                <CardDescription className="font-serif">All betting options for this tournament</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {event.bettingMarkets.map((market, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <div className="flex items-center">
                        <Target className="h-4 w-4 text-primary mr-2" />
                        <span className="font-serif">{market}</span>
                      </div>
                      <Button size="sm" className="font-serif">
                        View Odds
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button className="bg-primary hover:bg-primary/90 font-serif" asChild>
                    <Link href="/odds">
                      View All Markets <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* CTA */}
        <div className="mt-12 p-6 bg-accent rounded-lg text-center">
          <h3 className="text-2xl font-bold font-sans text-accent-foreground mb-4">Ready to Bet on {event.name}?</h3>
          <p className="font-serif text-accent-foreground/90 mb-6">
            Get your exclusive Coolbet bonus and start betting on this tournament
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-accent hover:bg-white/90 font-serif" asChild>
            <Link href="/bonuses">
              Claim $40 Bonus <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export async function generateMetadata({ params }: { params: { eventId: string } }) {
  const event = eventData[params.eventId as keyof typeof eventData]

  if (!event) {
    return {
      title: "Event Not Found | DiscGolfOdds.com",
    }
  }

  return {
    title: `${event.name} - Betting Odds & Event Details | DiscGolfOdds.com`,
    description: `${event.description} Get the latest odds, course info, and betting markets for ${event.name} at ${event.location}.`,
  }
}
