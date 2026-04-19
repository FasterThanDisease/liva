import React from "react";
import Link from "next/link";
import Head from "next/head";
import Contactform from "@/components/utils/contactform";

export default function Contactpage() {



    return (
        <>
            <Head>
                {/* Grundlegende Meta-Tags */}
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title> Liva Hairdresser & Barber | Kontakt</title>
                <meta
                    name="description"
                    content="Liva Hairdresser & Barber bietet trendige Haarschnitte, Bartpflege und exklusive Barber-Dienstleistungen in Kassel. Jetzt Termin buchen!"
                />
                <meta
                    name="keywords"
                    content="Liva Hairdresser, Barbershop Kassel, Friseur Kassel, Herrenfriseur Kassel, Bartpflege Kassel, Haarschnitt Kassel, Friseur Termin online, Friseursalon Kassel, Barber Kassel, Styling Kassel"
                />
                <meta name="author" content="Liva Hairdresser & Barber" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="canonical" href="https://liva-salon.de/kontakt" />

                {/* Favicon & Icons */}
                <link rel="shortcut icon" href="/favicon-32x32.png" type="image/x-icon" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

                {/* Preconnect & Prefetch */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link rel="preconnect" href="https://maps.googleapis.com" />
                <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="true" />

                {/* Preload Images */}
                <link
                    rel="preload"
                    as="image"
                    href="/hero.webp"
                    type="image/webp"
                    imageSrcSet="/hero.webp 1920w, /hero.webp 1280w"
                    fetchPriority="high"
                />

                <link
                    rel="preload"
                    as="image"
                    href="/logo.webp"
                    type="image/webp"
                    imageSrcSet="/hero.webp 1920w, /hero.webp 1280w"
                    fetchPriority="high"
                />

                {/* Open Graph */}
                <meta property="og:locale" content="de_DE" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Liva Hairdresser & Barber – Haarschnitte & Barbershop in Kassel" />
                <meta property="og:description" content="Trendige Haarschnitte, Bartpflege und exklusive Barber-Dienstleistungen in Kassel – Jetzt Termin bei Liva buchen!" />
                <meta property="og:url" content="https://liva-salon.de/kontakt" />
                <meta property="og:site_name" content="Liva Hairdresser & Barber" />
                <meta property="og:image" content="/logo.webp" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Liva Hairdresser & Barber – Haarschnitte & Barbershop in Kassel" />
                <meta name="twitter:description" content="Trendige Haarschnitte, Bartpflege und exklusive Barber-Dienstleistungen in Kassel – Jetzt Termin bei Liva buchen!" />
                <meta name="twitter:image" content="/logo.webp" />



                {/* JSON-LD Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "HairSalon",
                            "@id": "https://liva-salon.de/#business",
                            "name": "Liva Hairdresser & Barber",
                            "url": "https://liva-salon.de/",
                            "image": [
                                "https://liva-salon.de/img/salon.webp",
                                "https://liva-salon.de/img/barbershop-haircut.webp"
                            ],
                            "logo": "https://liva-salon.de/logo.webp",
                            "description":
                                "Friseur und Barbershop in Kassel-Wilhelmshöhe für Haarschnitte, Bartpflege und Styling.",
                            "telephone": "+49 561 34914",
                            "priceRange": "€€",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Wilhelmshöher Allee 185",
                                "postalCode": "34121",
                                "addressLocality": "Kassel",
                                "addressCountry": "DE"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": 51.3128387,
                                "longitude": 9.4534646
                            },
                            "hasMap": "https://www.google.com/maps?cid=2575779791805942780",
                            "areaServed": ["Kassel", "Wilhelmshöhe"],
                            "openingHoursSpecification": [
                                {
                                    "@type": "OpeningHoursSpecification",
                                    "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday"],
                                    "opens": "09:00",
                                    "closes": "19:00"
                                },
                                {
                                    "@type": "OpeningHoursSpecification",
                                    "dayOfWeek": "Saturday",
                                    "opens": "09:00",
                                    "closes": "17:00"
                                }
                            ],
                            "sameAs": [
                                "https://www.instagram.com/liva.hairdresser.barber/"
                            ]
                        })
                    }}
                />
            </Head>

            <main className="font1">

                <section>
                    <div className="bg1 d-none d-md-block" style={{ minHeight: 300 }}>

                    </div>
                    <div className="bg1 d-block d-md-none" style={{ minHeight: 200 }}>
                    </div>
                    <div className="container" style={{ marginTop: '-10%', paddingBottom: 100 }}>
                        <div className="col-12 p-5 bg-white shadow shadow-md rounded rounded-3">

                            <div className="row p-0">

                                <Contactform />

                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}