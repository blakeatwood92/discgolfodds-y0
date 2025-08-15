import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Disc, Target, Users, Star, ShoppingCart } from "lucide-react"

export const metadata: Metadata = {
  title: "Disc Golf Equipment Guide | Disc Reviews & Selection Tips | DiscGolfOdds.com",
  description:
    "Comprehensive disc golf equipment guides including disc reviews, flight numbers explained, beginner recommendations, and pro player disc selections.",
  keywords:
    "disc golf discs, disc golf equipment, flight numbers, disc selection, Innova discs, Discraft discs, disc golf gear",
}

const discCategories = [
  {
    id: "drivers",
    name: "Distance Drivers",
    description: "High-speed discs designed for maximum distance and power shots",
    icon: "🚀",
    speedRange: "9-14",
    uses: ["Tee shots", "Maximum distance", "Open fairways"],
    popular: ["Destroyer", "Wraith", "Boss", "Force"],
  },
  {
    id: "fairway-drivers",
    name: "Fairway Drivers",
    description: "Controlled distance with accuracy for tight fairways and placement",
    icon: "🎯",
    speedRange: "6-9",
    uses: ["Controlled distance", "Tight fairways", "Approach shots"],
    popular: ["TeeBird", "Leopard", "Eagle", "Thunderbird"],
  },
  {
    id: "midranges",
    name: "Mid-Range Discs",
    description: "Versatile discs for approach shots and shorter drives",
    icon: "⚖️",
    speedRange: "4-6",
    uses: ["Approach shots", "Short drives", "Upshots"],
    popular: ["Roc", "Buzzz", "Mako3", "Truth"],
  },
  {
    id: "putters",
    name: "Putters",
    description: "Low-speed discs for putting and short, controlled shots",
    icon: "🎪",
    speedRange: "1-4",
    uses: ["Putting", "Short approaches", "Controlled shots"],
    popular: ["Aviar", "Judge", "Luna", "Pure"],
  },
]

const featuredDiscs = [
  {
    id: "innova-destroyer",
    name: "Innova Destroyer",
    manufacturer: "Innova",
    type: "Distance Driver",
    speed: 12,
    glide: 5,
    turn: -1,
    fade: 3,
    rating: 4.8,
    price: "$15-20",
    description: "The most popular distance driver in disc golf, trusted by pros worldwide",
    pros: ["Reliable fade", "Great distance", "Wind fighter"],
    cons: ["Requires arm speed", "Overstable for beginners"],
    bestFor: "Intermediate to advanced players seeking reliable distance",
    image: "/destroyer-disc.png",
  },
  {
    id: "discraft-buzzz",
    name: "Discraft Buzzz",
    manufacturer: "Discraft",
    type: "Mid-Range",
    speed: 5,
    glide: 4,
    turn: -1,
    fade: 1,
    rating: 4.9,
    price: "$12-16",
    description: "The gold standard mid-range disc, perfect for any skill level",
    pros: ["Straight flight", "Versatile", "Great feel"],
    cons: ["Can be flippy in wind", "Limited fade"],
    bestFor: "All skill levels, essential disc for any bag",
    image: "/buzzz-disc.png",
  },
  {
    id: "innova-aviar",
    name: "Innova Aviar",
    manufacturer: "Innova",
    type: "Putter",
    speed: 2,
    glide: 3,
    turn: 0,
    fade: 1,
    rating: 4.7,
    price: "$8-12",
    description: "The classic putter that started it all, still a favorite among pros",
    pros: ["Consistent", "Great feel", "Proven track record"],
    cons: ["Basic flight", "Limited glide"],
    bestFor: "Traditional putting style, reliable short game",
    image: "/aviar-disc.png",
  },
  {
    id: "innova-teebird",
    name: "Innova TeeBird",
    manufacturer: "Innova",
    type: "Fairway Driver",
    speed: 7,
    glide: 5,
    turn: 0,
    fade: 2,
    rating: 4.8,
    price: "$13-17",
    description: "The ultimate control driver for accurate fairway shots",
    pros: ["Straight flight", "Reliable fade", "Versatile"],
    cons: ["Limited distance", "Requires clean release"],
    bestFor: "Controlled drives and long approaches",
    image: "/teebird-disc.png",
  },
]

export default function EquipmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-600 to-orange-500 text-white py-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/disc-golf-equipment-spread.png')",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Disc Golf <span className="text-orange-200">Equipment Guide</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto">
              Complete disc reviews, selection guides, and equipment recommendations
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Disc className="w-4 h-4 mr-1" />
                Disc Reviews
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Target className="w-4 h-4 mr-1" />
                Selection Tips
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Users className="w-4 h-4 mr-1" />
                Pro Recommendations
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Flight Numbers Guide */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Flight Numbers</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Master disc selection with our comprehensive flight number guide
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                S
              </div>
              <CardTitle className="text-lg">Speed (1-14)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                How fast the disc needs to be thrown to achieve its intended flight pattern. Higher numbers require more
                arm speed.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                G
              </div>
              <CardTitle className="text-lg">Glide (1-7)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                The disc's ability to maintain loft during flight. Higher glide numbers mean the disc stays in the air
                longer.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                T
              </div>
              <CardTitle className="text-lg">Turn (-5 to +1)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                The disc's tendency to turn right (RHBH) during the high-speed portion of flight. Negative numbers turn
                more.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                F
              </div>
              <CardTitle className="text-lg">Fade (0-5)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                The disc's tendency to hook left (RHBH) at the end of flight as it slows down. Higher numbers fade more
                dramatically.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Disc Categories */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Disc Categories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the right disc type for every situation on the course
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {discCategories.map((category) => (
            <Card key={category.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">{category.icon}</div>
                <CardTitle className="text-lg">{category.name}</CardTitle>
                <Badge variant="outline" className="text-orange-600">
                  Speed {category.speedRange}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">{category.description}</p>

                <div>
                  <p className="font-medium text-gray-800 mb-2 text-sm">Best Uses:</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {category.uses.map((use) => (
                      <li key={use} className="flex items-center">
                        <div className="w-1 h-1 bg-orange-500 rounded-full mr-2"></div>
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-medium text-gray-800 mb-2 text-sm">Popular Models:</p>
                  <div className="flex flex-wrap gap-1">
                    {category.popular.map((disc) => (
                      <Badge key={disc} variant="secondary" className="text-xs">
                        {disc}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Disc Reviews */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Disc Reviews</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            In-depth reviews of the most popular discs in disc golf
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredDiscs.map((disc) => (
            <Card key={disc.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-orange-600">{disc.name}</CardTitle>
                    <p className="text-gray-600">{disc.manufacturer}</p>
                    <Badge variant="outline" className="mt-2">
                      {disc.type}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center mb-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium ml-1">{disc.rating}</span>
                    </div>
                    <p className="text-sm text-gray-600">{disc.price}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-center space-x-4 text-center">
                  <div className="bg-blue-50 p-2 rounded">
                    <p className="text-xs text-blue-600">Speed</p>
                    <p className="font-bold text-blue-800">{disc.speed}</p>
                  </div>
                  <div className="bg-green-50 p-2 rounded">
                    <p className="text-xs text-green-600">Glide</p>
                    <p className="font-bold text-green-800">{disc.glide}</p>
                  </div>
                  <div className="bg-yellow-50 p-2 rounded">
                    <p className="text-xs text-yellow-600">Turn</p>
                    <p className="font-bold text-yellow-800">{disc.turn}</p>
                  </div>
                  <div className="bg-red-50 p-2 rounded">
                    <p className="text-xs text-red-600">Fade</p>
                    <p className="font-bold text-red-800">{disc.fade}</p>
                  </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">{disc.description}</p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-green-800 mb-2 text-sm">Pros:</p>
                    <ul className="text-xs text-green-700 space-y-1">
                      {disc.pros.map((pro) => (
                        <li key={pro} className="flex items-center">
                          <div className="w-1 h-1 bg-green-500 rounded-full mr-2"></div>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-red-800 mb-2 text-sm">Cons:</p>
                    <ul className="text-xs text-red-700 space-y-1">
                      {disc.cons.map((con) => (
                        <li key={con} className="flex items-center">
                          <div className="w-1 h-1 bg-red-500 rounded-full mr-2"></div>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-orange-800 mb-1">Best For:</p>
                  <p className="text-sm text-orange-700">{disc.bestFor}</p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <Link
                    href={`/equipment/${disc.id}`}
                    className="text-orange-600 hover:text-orange-700 font-medium text-sm hover:underline"
                  >
                    Full Review →
                  </Link>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      <ShoppingCart className="w-3 h-3 mr-1" />
                      Buy Online
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Beginner Recommendations */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Beginner Starter Set Recommendations</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">Essential discs every new player should have in their bag</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-lg">
              <h4 className="font-bold mb-3">Driver: Innova Leopard</h4>
              <p className="text-blue-100 text-sm mb-2">Speed 6 | Glide 5 | Turn -2 | Fade 1</p>
              <p className="text-blue-100 text-sm">
                Understable fairway driver that's forgiving for beginners and teaches proper form.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg">
              <h4 className="font-bold mb-3">Mid-Range: Discraft Buzzz</h4>
              <p className="text-blue-100 text-sm mb-2">Speed 5 | Glide 4 | Turn -1 | Fade 1</p>
              <p className="text-blue-100 text-sm">
                Straight-flying mid-range that's versatile and reliable for all skill levels.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg">
              <h4 className="font-bold mb-3">Putter: Dynamic Discs Judge</h4>
              <p className="text-blue-100 text-sm mb-2">Speed 2 | Glide 4 | Turn 0 | Fade 1</p>
              <p className="text-blue-100 text-sm">
                Comfortable putter with good glide that's excellent for both putting and approaches.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Bet on the Pros?</h3>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Use your disc knowledge to make informed bets on professional tournaments
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
