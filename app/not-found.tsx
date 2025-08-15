import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Search, TrendingUp } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary/20 font-sans">404</h1>
          <h2 className="text-3xl font-bold text-foreground mb-4 font-sans">Page Not Found</h2>
          <p className="text-lg text-muted-foreground font-serif">
            The disc golf betting page you're looking for has gone out of bounds.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-sans">What you can do:</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button asChild variant="outline" className="h-auto p-4 font-serif bg-transparent">
                <Link href="/" className="flex flex-col items-center space-y-2">
                  <Home className="h-6 w-6" />
                  <span>Go Home</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 font-serif bg-transparent">
                <Link href="/odds" className="flex flex-col items-center space-y-2">
                  <TrendingUp className="h-6 w-6" />
                  <span>View Odds</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 font-serif bg-transparent">
                <Link href="/guides" className="flex flex-col items-center space-y-2">
                  <Search className="h-6 w-6" />
                  <span>Betting Guides</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 font-serif bg-transparent">
                <Link href="/retailers" className="flex flex-col items-center space-y-2">
                  <Search className="h-6 w-6" />
                  <span>Disc Retailers</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="bg-accent/50 rounded-lg p-6">
          <h3 className="text-xl font-bold font-sans text-accent-foreground mb-2">
            Don't Miss Out on Betting Opportunities
          </h3>
          <p className="font-serif text-accent-foreground/90 mb-4">
            While you're here, check out our exclusive Coolbet bonus offer
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 font-serif">
            <Link href="/retailers">View Disc Retailers</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
