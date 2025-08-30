"use client"
import { useEffect, useState } from "react"

type Item = { title: string; link: string; source: string; publishedAt: string | null; snippet: string; image?: string }

export default function DiscGolfNews({ q = "disc golf" }: { q?: string }) {
  const [items, setItems] = useState<Item[]>([])
  const [err, setErr] = useState<string | null>(null)

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch(`/api/discgolf-news?q=${encodeURIComponent(q)}`, { next: { revalidate: 300 } })
        if (!res.ok) throw new Error("Failed to load")
        const data = await res.json()
        setItems(data.items || [])
      } catch (e: any) {
        setErr(e.message || "Error")
      }
    }
    run()
  }, [q])

  if (err) return <div>Failed to load news.</div>
  if (!items.length) return <div>Loading news…</div>

  return (
    <div className="grid gap-4">
      {items.map((it, i) => (
        <a
          key={i}
          href={it.link}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl p-4 border hover:shadow"
        >
          <div className="text-sm opacity-70">{it.source || "Google News"}</div>
          <div className="font-semibold text-lg">{it.title}</div>
          {it.snippet && <div className="text-sm mt-1 opacity-80">{it.snippet}</div>}
          {it.publishedAt && <div className="text-xs mt-1 opacity-60">{new Date(it.publishedAt).toLocaleString()}</div>}
        </a>
      ))}
    </div>
  )
}
