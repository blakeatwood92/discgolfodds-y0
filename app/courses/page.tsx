import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Trophy, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Disc Golf Course Reviews | Top DGPT Courses & Hidden Gems | DiscGolfOdds.com",
  description:
    "Comprehensive reviews of top disc golf courses including Maple Hill, Winthrop Arena, Idlewild, and more. Course layouts, playing tips, and tournament history.",
  keywords:
    "disc golf courses, Maple Hill, Winthrop Arena, Idlewild, course reviews, DGPT courses, disc golf course guide",
}

const featuredCourses = [
  {
    id: "maple-hill",
    name: "Maple Hill Disc Golf Course",
    location: "Leicester, Massachusetts",
    state: "MA",
    difficulty: "Championship",
    rating: 4.9,
    holes: 18,
    par: 59,
    length: "8,400 ft",
    designer: "John Houck",
    established: 1996,
    tournaments: ["New England Open", "Maple Hill Open"],
    features: ["Wooded", "Elevation Changes", "Technical"],
    description: "The gold standard of disc golf courses, known for its pristine conditions and challenging layout.",
    image: "/maple-hill-course.png",
    playingTips: "Accuracy over distance. Course management is crucial.",
    notableHoles: ["Hole 3 - The Gauntlet", "Hole 17 - Island Green"],
  },
  {
    id: "winthrop-arena",
    name: "Winthrop Arena",
    location: "Rock Hill, South Carolina",
    state: "SC",
    difficulty: "Championship",
    rating: 4.8,
    holes: 18,
    par: 61,
    length: "9,200 ft",
    designer: "John Houck",
    established: 2008,
    tournaments: ["USDGC", "Winthrop Open"],
    features: ["Open", "Water Hazards", "Wind"],
    description: "Home of the USDGC, featuring challenging water carries and strategic shot placement.",
    image: "/winthrop-arena-course.png",
    playingTips: "Wind management essential. Conservative play often rewarded.",
    notableHoles: ["Hole 17 - Island Hole", "Hole 18 - Championship Finish"],
  },
  {
    id: "idlewild",
    name: "Idlewild Disc Golf Course",
    location: "Burlington, Kentucky",
    state: "KY",
    difficulty: "Championship",
    rating: 4.7,
    holes: 24,
    par: 77,
    length: "11,000 ft",
    designer: "Harold Duvall",
    established: 2001,
    tournaments: ["Idlewild Open", "DGPT Events"],
    features: ["Heavily Wooded", "Elevation", "Technical Lines"],
    description: "A true test of disc golf skill through dense woods and challenging elevation changes.",
    image: "/idlewild-course.png",
    playingTips: "Disc selection crucial. Multiple routes on most holes.",
    notableHoles: ["Hole 3 - The Tunnel", "Hole 15 - Downhill Bomber"],
  },
  {
    id: "toboggan",
    name: "Toboggan Course at Fort Custer",
    location: "Augusta, Michigan",
    state: "MI",
    difficulty: "Championship",
    rating: 4.6,
    holes: 18,
    par: 64,
    length: "8,800 ft",
    designer: "John Houck",
    established: 2009,
    tournaments: ["Toboggan Championship", "Great Lakes Open"],
    features: ["Rolling Hills", "Mixed Terrain", "Strategic"],
    description: "Beautiful rolling terrain with a mix of open and wooded holes requiring all shot shapes.",
    image: "/toboggan-course.png",
    playingTips: "Versatility key. Need full arsenal of shots.",
    notableHoles: ["Hole 9 - Roller Coaster", "Hole 16 - Risk/Reward"],
  },
  {
    id: "blue-lake-park",
    name: "Blue Lake Park",
    location: "Fairview, Oregon",
    state: "OR",
    difficulty: "Championship",
    rating: 4.5,
    holes: 27,
    par: 86,
    length: "12,500 ft",
    designer: "Jim Kenner",
    established: 1998,
    tournaments: ["Blue Lake Open", "Pacific Northwest Championships"],
    features: ["Wooded", "Water Features", "Long"],
    description: "Pacific Northwest gem featuring towering trees and challenging water hazards.",
    image: "/blue-lake-course.png",
    playingTips: "Stamina important. Long round with challenging conditions.",
    notableHoles: ["Hole 12 - Cathedral", "Hole 21 - Water Carry"],
  },
  {
    id: "dela",
    name: "Dela Disc Golf Course",
    location: "Oklahoma City, Oklahoma",
    state: "OK",
    difficulty: "Championship",
    rating: 4.4,
    holes: 18,
    par: 58,
    length: "7,800 ft",
    designer: "Nate Heinold",
    established: 2015,
    tournaments: ["Dela Open", "Oklahoma State Championships"],
    features: ["Open", "Wind", "Strategic"],
    description: "Modern championship course design with strategic shot placement and wind challenges.",
    image: "/dela-course.png",
    playingTips: "Wind reading essential. Course rewards smart play.",
    notableHoles: ["Hole 7 - Signature", "Hole 18 - Championship"],
  },
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-600 to-orange-500 text-white py-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/disc-golf-course-aerial.png')",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Disc Golf <span className="text-orange-200">Course Reviews</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto">
              In-depth reviews of championship courses, hidden gems, and tournament venues
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Trophy className="w-4 h-4 mr-1" />
                Championship Courses
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <MapPin className="w-4 h-4 mr-1" />
                Detailed Reviews
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Users className="w-4 h-4 mr-1" />
                Playing Tips
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Course Reviews Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Championship Course Reviews</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive reviews of the world's premier disc golf courses and tournament venues
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <Card
              key={course.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline" className="text-orange-600 border-orange-200">
                    {course.state}
                  </Badge>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium ml-1">{course.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">{course.name}</CardTitle>
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  {course.location}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-700 leading-relaxed">{course.description}</p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Holes</p>
                    <p className="font-semibold">{course.holes}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Par</p>
                    <p className="font-semibold">{course.par}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Length</p>
                    <p className="font-semibold">{course.length}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Difficulty</p>
                    <Badge variant="secondary" className="text-xs">
                      {course.difficulty}
                    </Badge>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2">Course Features:</p>
                  <div className="flex flex-wrap gap-1">
                    {course.features.map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-orange-800 mb-1">Playing Tip:</p>
                  <p className="text-sm text-orange-700">{course.playingTips}</p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <Link
                    href={`/courses/${course.id}`}
                    className="text-orange-600 hover:text-orange-700 font-medium text-sm hover:underline"
                  >
                    Full Review →
                  </Link>
                  <Link
                    href="https://coolbet.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-orange-600 text-white text-xs rounded hover:bg-orange-700 transition-colors"
                  >
                    Bet on Tournaments
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Course Categories */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <Trophy className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <CardTitle>Championship Venues</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Home to major tournaments and DGPT events. These courses test every aspect of disc golf skill.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <MapPin className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <CardTitle>Regional Gems</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Outstanding courses that may not host majors but offer exceptional disc golf experiences.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <CardTitle>Player Favorites</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Courses beloved by touring professionals for their design, challenge, and tournament atmosphere.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Bet on Tournament Action</h3>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Use course knowledge to make informed bets on tournaments at these championship venues
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
