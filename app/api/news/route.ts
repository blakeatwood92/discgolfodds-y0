import { NextResponse } from "next/server"
import { XMLParser } from "fast-xml-parser"

export const revalidate = 0 // we’ll set caching via headers instead

function buildGoogleNewsUrl(q: string, hl = "en-CA", gl = "CA", ceid = "CA:en") {
  const base = "https://news.google.com/rss/search"
  const params = new URLSearchParams({ q, hl, gl, ceid })
  return `${base}?${params.toString()}`
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const q = searchParams.get("q") || "disc golf"

  const url = buildGoogleNewsUrl(q)
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } })
    if (!res.ok) {
      return NextResponse.json({ error: "Upstream RSS fetch failed" }, { status: 502 })
    }
    const xml = await res.text()

    const parser = new XMLParser({ ignoreAttributes: false })
    const parsed = parser.parse(xml)

    // Google News RSS structure: rss.channel.item[]
    const items = parsed?.rss?.channel?.item ?? []
    const normalized = items.map((it: any) => {
      // Many feeds include <source> and sometimes <media:content> / image in description
      const title = it.title
      const link = it.link
      const pubDate = it.pubDate || it["dc:date"]
      const source = it.source?.["#text"] || it.source || ""
      const snippet = (it.description || "").replace(/<[^>]+>/g, "").trim()

      // Try to extract first image if present in description
      let image: string | undefined
      const desc = it.description || ""
      const m = desc.match(/<img[^>]+src="([^"]+)"/i)
      if (m) image = m[1]

      return {
        title,
        link,
        source,
        publishedAt: pubDate ? new Date(pubDate).toISOString() : null,
        snippet,
        image,
      }
    })

    const resp = NextResponse.json({ query: q, count: normalized.length, items: normalized })
    resp.headers.set("Cache-Control", "s-maxage=300, stale-while-revalidate=60")
    resp.headers.set("Access-Control-Allow-Origin", "*")
    return resp
  } catch (e: any) {
    return NextResponse.json({ error: "Unexpected error", detail: e?.message }, { status: 500 })
  }
}
