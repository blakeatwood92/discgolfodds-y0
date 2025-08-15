interface StructuredDataProps {
  type: "article" | "event" | "organization" | "website"
  data: any
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
    }

    switch (type) {
      case "article":
        return {
          ...baseData,
          "@type": "Article",
          headline: data.title,
          description: data.description,
          author: {
            "@type": "Person",
            name: data.author || "DiscGolfOdds Team",
          },
          publisher: {
            "@type": "Organization",
            name: "DiscGolfOdds.com",
            logo: {
              "@type": "ImageObject",
              url: "https://discgolfodds.com/logo.png",
            },
          },
          datePublished: data.datePublished,
          dateModified: data.dateModified || data.datePublished,
          image: data.image,
          url: data.url,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": data.url,
          },
        }

      case "event":
        return {
          ...baseData,
          "@type": "SportsEvent",
          name: data.name,
          description: data.description,
          startDate: data.startDate,
          endDate: data.endDate,
          location: {
            "@type": "Place",
            name: data.location,
            address: data.address,
          },
          organizer: {
            "@type": "Organization",
            name: data.organizer || "PDGA",
          },
          sport: "Disc Golf",
          url: data.url,
        }

      default:
        return baseData
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
    />
  )
}
