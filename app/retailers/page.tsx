import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Truck, CreditCard, Package, Star, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Best Disc Golf Retailers in Canada & USA - Where to Buy Discs | DiscGolfOdds.com",
  description:
    "Find the best disc golf retailers in Canada and USA. Compare shipping speeds, payment options, and disc selection from top online stores.",
}

export default function RetailersPage() {
  const retailers = [
    {
      name: "Infinite Discs",
      country: "USA",
      website: "infinitediscs.com",
      rating: 4.8,
      shipping: "1-3 business days",
      freeShipping: "$75+",
      selection: "15,000+ discs",
      payments: ["Credit Card", "PayPal", "Apple Pay", "Google Pay"],
      specialties: ["Largest selection", "Custom stamps", "Disc dyeing"],
      pros: ["Massive inventory", "Fast shipping", "Great customer service", "Detailed flight charts"],
      cons: ["Higher prices on some items", "Limited international shipping"],
    },
    {
      name: "Disc Golf Depot",
      country: "Canada",
      website: "discgolfdepot.ca",
      rating: 4.7,
      shipping: "2-5 business days",
      freeShipping: "$100 CAD+",
      selection: "8,000+ discs",
      payments: ["Credit Card", "PayPal", "Interac"],
      specialties: ["Canadian shipping", "Local tournaments", "Beginner packages"],
      pros: ["No customs fees", "CAD pricing", "Local support", "Tournament sponsorship"],
      cons: ["Smaller selection than US stores", "Longer shipping times"],
    },
    {
      name: "Dynamic Discs",
      country: "USA",
      website: "dynamicdiscs.com",
      rating: 4.6,
      shipping: "2-4 business days",
      freeShipping: "$50+",
      selection: "5,000+ discs",
      payments: ["Credit Card", "PayPal", "Klarna"],
      specialties: ["Trilogy discs", "Course design", "Player sponsorship"],
      pros: ["Manufacturer direct", "Exclusive releases", "Course accessories", "Educational content"],
      cons: ["Limited non-Trilogy brands", "Occasional stock issues"],
    },
    {
      name: "Ace Runners",
      country: "Canada",
      website: "acerunners.ca",
      rating: 4.5,
      shipping: "3-7 business days",
      freeShipping: "$75 CAD+",
      selection: "6,000+ discs",
      payments: ["Credit Card", "PayPal", "Interac", "Apple Pay"],
      specialties: ["Western Canada focus", "Local events", "Custom bags"],
      pros: ["Regional expertise", "Custom orders", "Event support", "Competitive pricing"],
      cons: ["Smaller inventory", "Limited eastern coverage"],
    },
    {
      name: "Disc Store",
      country: "USA",
      website: "discstore.com",
      rating: 4.4,
      shipping: "2-5 business days",
      freeShipping: "$60+",
      selection: "10,000+ discs",
      payments: ["Credit Card", "PayPal", "Amazon Pay"],
      specialties: ["Vintage discs", "Collector items", "Rare finds"],
      pros: ["Unique inventory", "Collector focus", "Detailed descriptions", "Authentication"],
      cons: ["Higher prices", "Limited new releases"],
    },
    {
      name: "Disc Golf United",
      country: "Canada",
      website: "discgolfunited.com",
      rating: 4.3,
      shipping: "3-6 business days",
      freeShipping: "$80 CAD+",
      selection: "4,000+ discs",
      payments: ["Credit Card", "PayPal", "Interac"],
      specialties: ["Community focus", "Local clubs", "Beginner friendly"],
      pros: ["Community support", "Educational resources", "Club partnerships", "Beginner packages"],
      cons: ["Smaller selection", "Slower shipping"],
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
              <Link href="/#odds" className="text-muted-foreground hover:text-foreground font-serif">
                Live Odds
              </Link>
              <Link href="/guides" className="text-muted-foreground hover:text-foreground font-serif">
                Betting Guides
              </Link>
              <Link href="/retailers" className="text-primary font-serif">
                Disc Retailers
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 font-serif bg-accent text-accent-foreground">Retailer Guide</Badge>
          <h1 className="text-4xl md:text-5xl font-bold font-sans text-foreground mb-4">Best Disc Golf Retailers</h1>
          <p className="text-xl font-serif text-muted-foreground max-w-3xl mx-auto">
            Find the best places to buy disc golf discs in Canada and USA. Compare shipping speeds, selection, and
            payment options.
          </p>
        </div>

        {/* Quick Comparison */}
        <Card className="mb-12 bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold font-sans text-foreground mb-2">
              📋 Quick Comparison Guide
            </CardTitle>
            <CardDescription className="text-lg font-serif">
              Key factors to consider when choosing a disc golf retailer 🛒
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="p-4 bg-accent rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Truck className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-semibold font-sans mb-2">🚚 Shipping Speed</h3>
                <p className="text-sm font-serif text-muted-foreground">1-7 business days typical</p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-accent rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Package className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-semibold font-sans mb-2">📦 Selection</h3>
                <p className="text-sm font-serif text-muted-foreground">4,000-15,000+ discs</p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-accent rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <CreditCard className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-semibold font-sans mb-2">💳 Payment Options</h3>
                <p className="text-sm font-serif text-muted-foreground">Credit, PayPal, Digital wallets</p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-accent rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Star className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-semibold font-sans mb-2">⭐ Customer Rating</h3>
                <p className="text-sm font-serif text-muted-foreground">4.3-4.8 stars average</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Retailer Cards */}
        <div className="space-y-8">
          {retailers.map((retailer, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="font-sans text-2xl">{retailer.name}</CardTitle>
                      <Badge variant={retailer.country === "Canada" ? "default" : "secondary"} className="font-serif">
                        <MapPin className="h-3 w-3 mr-1" />
                        {retailer.country === "Canada" ? "🇨🇦" : "🇺🇸"} {retailer.country}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(retailer.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="ml-2 font-serif text-sm">{retailer.rating}/5</span>
                      </div>
                    </div>
                    <p className="font-serif text-muted-foreground">{retailer.website}</p>
                  </div>
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-serif">
                    🛒 Visit Store <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Key Stats */}
                  <div>
                    <h4 className="font-semibold font-sans mb-3">📊 Key Information</h4>
                    <div className="space-y-2 text-sm font-serif">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-muted-foreground" />🚚 Shipping:
                        </span>
                        <span className="font-semibold">{retailer.shipping}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center">
                          <Truck className="h-4 w-4 mr-2 text-muted-foreground" />💰 Free Shipping:
                        </span>
                        <span className="font-semibold">{retailer.freeShipping}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center">
                          <Package className="h-4 w-4 mr-2 text-muted-foreground" />📦 Selection:
                        </span>
                        <span className="font-semibold">{retailer.selection}</span>
                      </div>
                    </div>

                    <h5 className="font-semibold font-sans mt-4 mb-2">💳 Payment Methods</h5>
                    <div className="flex flex-wrap gap-1">
                      {retailer.payments.map((payment, i) => (
                        <Badge key={i} variant="outline" className="text-xs font-serif">
                          {payment === "Credit Card" && "💳"}
                          {payment === "PayPal" && "🅿️"}
                          {payment === "Apple Pay" && "📱"}
                          {payment === "Google Pay" && "📱"}
                          {payment === "Interac" && "💳"}
                          {payment === "Klarna" && "💰"}
                          {payment === "Amazon Pay" && "📦"}
                          {payment}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div>
                    <h4 className="font-semibold font-sans mb-3">⭐ Specialties</h4>
                    <div className="space-y-2">
                      {retailer.specialties.map((specialty, i) => (
                        <div key={i} className="flex items-center text-sm font-serif">
                          <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                          {specialty}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pros & Cons */}
                  <div>
                    <div className="mb-4">
                      <h5 className="font-semibold font-sans mb-2 text-green-700 dark:text-green-400">Pros</h5>
                      <div className="space-y-1">
                        {retailer.pros.slice(0, 2).map((pro, i) => (
                          <div key={i} className="flex items-start text-sm font-serif">
                            <div className="w-1 h-1 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {pro}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold font-sans mb-2 text-red-700 dark:text-red-400">Cons</h5>
                      <div className="space-y-1">
                        {retailer.cons.slice(0, 2).map((con, i) => (
                          <div key={i} className="flex items-start text-sm font-serif">
                            <div className="w-1 h-1 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {con}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Buying Tips */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="font-sans text-2xl">💡 Disc Buying Tips</CardTitle>
            <CardDescription className="font-serif">
              Essential advice for purchasing disc golf discs online 🛒
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold font-sans mb-3">For Beginners</h4>
                <div className="space-y-2 font-serif text-sm">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong>Start with starter sets:</strong> Most retailers offer beginner packages with driver,
                      mid-range, and putter
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong>Choose lighter weights:</strong> 150-165g discs are easier to throw for beginners
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong>Understable discs:</strong> Look for negative turn numbers for easier distance
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold font-sans mb-3">For Advanced Players</h4>
                <div className="space-y-2 font-serif text-sm">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong>Plastic types matter:</strong> Premium plastics last longer and have different flight
                      characteristics
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong>Weight selection:</strong> Heavier discs (170-175g) for windy conditions and power throws
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong>Multiple copies:</strong> Buy multiples of discs you love in different stages of wear
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
