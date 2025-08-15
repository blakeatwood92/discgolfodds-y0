import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Calendar, MapPin, Trophy, Users, Target } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Disc Golf Pro Tour Events - DGPT Schedule & Betting | DiscGolfOdds.com",
  description:
    "Complete DGPT event schedule with dates, locations, past winners, and betting markets. Find the best odds for all major disc golf tournaments.",
}

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: "dgpt-championship-2024",
      name: "DGPT Championship",
      location: "Charlotte, NC",
      venue: "Hornets Nest Park",
      date: "October 24-27, 2024",
      status: "upcoming",
      purse: "$75,000",
      rounds: 4,
      pastWinner: "Paul McBeth (2023)",
      description: "The season finale featuring the top 72 players competing for the biggest purse of the year.",
      bettingMarkets: ["Tournament Winner", "Top 3 Finish", "Head-to-Head", "Round Props"],
    },
    {
      id: "mvp-open-2024",
      name: "MVP Open",
      location: "Maple Hill, MA",
      venue: "Maple Hill Disc Golf Course",
      date: "November 15-17, 2024",
      status: "upcoming",
      purse: "$50,000",
      rounds: 3,
      pastWinner: "Eagle McMahon (2023)",
      description: "One of the most challenging wooded courses on tour, testing precision and course management.",
      bettingMarkets: ["Tournament Winner", "Top 5 Finish", "Matchups", "Ace Props"],
    },
    {
      id: "las-vegas-challenge-2024",
      name: "Las Vegas Challenge",
      location: "Las Vegas, NV",
      venue: "Wildhorse Golf Club",
      date: "December 5-8, 2024",
      status: "live",
      purse: "$60,000",
      rounds: 4,
      currentRound: 2,
      pastWinner: "Ricky Wysocki (2023)",
      description: "Desert golf at its finest with elevation changes and challenging pin positions.",
      bettingMarkets: ["Live Winner", "Round Winner", "Head-to-Head", "Cut Props"],
    },
  ]

  const pastEvents = [
    {
      id: "worlds-2024",
      name: "PDGA World Championships",
      location: "Peoria, IL",
      venue: "Multiple Courses",
      date: "August 6-10, 2024",
      status: "completed",
      winner: "Gannon Buhr",
      runnerUp: "Paul McBeth",
      purse: "$100,000",
      rounds: 5,
      winningScore: "-42",
    },
    {
      id: "european-open-2024",
      name: "European Open",
      location: "Nokere, Belgium",
      venue: "De Kraaien",
      date: "July 18-21, 2024",
      status: "completed",
      winner: "Calvin Heimburg",
      runnerUp: "Eagle McMahon",
      purse: "$80,000",
      rounds: 4,
      winningScore: "-28",
    },
    {
      id: "us-disc-golf-championship-2024",
      name: "US Disc Golf Championship",
      location: "Rock Hill, SC",
      venue: "Winthrop University",
      date: "June 20-23, 2024",
      status: "completed",
      winner: "Paul McBeth",
      runnerUp: "Ricky Wysocki",
      purse: "$75,000",
      rounds: 4,
      winningScore: "-35",
    },
  ]

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-sans text-foreground mb-4">Disc Golf Pro Tour Events</h1>
          <p className="text-xl font-serif text-muted-foreground max-w-3xl mx-auto">
            Complete schedule of DGPT tournaments with betting markets, past winners, and comprehensive event details
          </p>
        </div>

        {/* Event Tabs */}
        <Tabs defaultValue="upcoming" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 font-serif">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>

          {/* Upcoming Events */}
          <TabsContent value="upcoming">
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <div className="flex items-center mb-2">
                          <CardTitle className="font-sans text-2xl mr-3">{event.name}</CardTitle>
                          <Badge variant={event.status === "live" ? "default" : "secondary"} className="font-serif">
                            {event.status === "live" ? "Live Now" : "Upcoming"}
                          </Badge>
                        </div>
                        <CardDescription className="font-serif text-lg">{event.description}</CardDescription>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <Button asChild className="font-serif">
                          <Link href={`/events/${event.id}`}>
                            View Details <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-primary mr-2" />
                        <div>
                          <div className="font-semibold font-sans text-sm">Date</div>
                          <div className="font-serif text-sm text-muted-foreground">{event.date}</div>
                        </div>
                      </div>
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
                      <div className="flex items-center">
                        <Trophy className="h-5 w-5 text-primary mr-2" />
                        <div>
                          <div className="font-semibold font-sans text-sm">Prize Pool</div>
                          <div className="font-serif text-sm text-muted-foreground">{event.purse}</div>
                          <div className="font-serif text-xs text-muted-foreground">{event.rounds} rounds</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-primary mr-2" />
                        <div>
                          <div className="font-semibold font-sans text-sm">Defending Champion</div>
                          <div className="font-serif text-sm text-muted-foreground">{event.pastWinner}</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-semibold font-sans mb-3">Available Betting Markets:</h4>
                      <div className="flex flex-wrap gap-2">
                        {event.bettingMarkets.map((market, index) => (
                          <Badge key={index} variant="outline" className="font-serif">
                            {market}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <Button className="bg-primary hover:bg-primary/90 font-serif">
                        <Target className="mr-2 h-4 w-4" />
                        Bet on Coolbet
                      </Button>
                      <Button variant="outline" className="font-serif bg-transparent" asChild>
                        <Link href={`/events/${event.id}`}>View Full Details</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Past Events */}
          <TabsContent value="past">
            <div className="space-y-6">
              {pastEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <div className="flex items-center mb-2">
                          <CardTitle className="font-sans text-2xl mr-3">{event.name}</CardTitle>
                          <Badge variant="secondary" className="font-serif">
                            Completed
                          </Badge>
                        </div>
                        <CardDescription className="font-serif text-lg">
                          {event.location} • {event.date}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="flex items-center">
                        <Trophy className="h-5 w-5 text-primary mr-2" />
                        <div>
                          <div className="font-semibold font-sans text-sm">Winner</div>
                          <div className="font-serif text-sm text-muted-foreground">{event.winner}</div>
                          <div className="font-serif text-xs text-muted-foreground">{event.winningScore}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-primary mr-2" />
                        <div>
                          <div className="font-semibold font-sans text-sm">Runner-up</div>
                          <div className="font-serif text-sm text-muted-foreground">{event.runnerUp}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 text-primary mr-2" />
                        <div>
                          <div className="font-semibold font-sans text-sm">Venue</div>
                          <div className="font-serif text-sm text-muted-foreground">{event.venue}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-primary mr-2" />
                        <div>
                          <div className="font-semibold font-sans text-sm">Prize Pool</div>
                          <div className="font-serif text-sm text-muted-foreground">{event.purse}</div>
                          <div className="font-serif text-xs text-muted-foreground">{event.rounds} rounds</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Button variant="outline" className="font-serif bg-transparent" asChild>
                        <Link href={`/events/${event.id}`}>
                          View Event Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Event Calendar Preview */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="font-sans">2024 DGPT Season Highlights</CardTitle>
            <CardDescription className="font-serif">Key tournaments and major championships</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold font-sans text-primary mb-2">25+</div>
                <div className="font-serif text-sm">DGPT Events</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold font-sans text-primary mb-2">$2M+</div>
                <div className="font-serif text-sm">Total Prize Money</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold font-sans text-primary mb-2">150+</div>
                <div className="font-serif text-sm">Elite Players</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="mt-12 p-6 bg-accent rounded-lg text-center">
          <h3 className="text-2xl font-bold font-sans text-accent-foreground mb-4">
            Ready to Bet on Disc Golf Events?
          </h3>
          <p className="font-serif text-accent-foreground/90 mb-6">
            Get your exclusive Coolbet bonus and start betting on DGPT tournaments
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
