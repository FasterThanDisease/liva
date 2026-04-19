import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FiArrowUpRight } from "react-icons/fi";



export default function Services() {


    const services = [
        {
            title: 'Kinder',
            desc: 'Genießen Sie eine kinderfreundliche Atmosphäre bei Liva Hairdress. Mit kostenlosen Getränken und Spielmöglichkeiten sorgen wir für eine entspannte Wartezeit. Vereinbaren Sie jetzt einen Termin für Ihr Kind.',
            subtitle: 'Kinderfreundlicher Friseur in Kassel',
            img: '/kinderhaarschnitt.webp',
            url: '/services/kinder'
        },
        {
            title: 'Bartpflege',
            desc: 'Individuelle und professionelle Bartpflege ganz nach Ihren Wünschen. Bei Liva Hairdress erhalten Sie zudem hochwertige Pflegeprodukte für den perfekten Look.',
            subtitle: '',
            img: '/bartpflege.webp',
            url: '/services/bartpflege'
        },
        {
            title: "Women's Treatment",
            desc: 'Gönnen Sie sich eine Auszeit und erleben Sie professionelle Beauty- und Hair-Services. Wir bieten Styling, Colorationen und Haarverlängerungen auf höchstem Niveau.',
            subtitle: 'Styling, Coloration & Extensions',
            img: '/frauenhaarschnitt.webp',
            url: '/services/damen'
        },
        {
            title: 'Herren Haarschnitt',
            desc: 'Erleben Sie präzise und moderne Haarschnitte von einem zertifizierten Meisterbetrieb. Wir setzen Ihre individuellen Vorstellungen professionell um. Vereinbaren Sie jetzt Ihren Termin.',
            subtitle: '',
            img: '/maennerhaarschnitt.webp',
            url: '/services/herren'
        }
    ]

    return (
        <>
            <Head>
                {/* Grundlegende Meta-Tags */}
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Friseur Kassel Wilhelmshöhe | Liva Hairdresser & Barber</title>
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
                <link rel="canonical" href="https://liva-salon.de/services" />

                {/* Favicon & Icons */}
                <link rel="shortcut icon" href="/favicon-32x32.png" type="image/x-icon" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

                {/* Preconnect & Prefetch */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link rel="preconnect" href="https://maps.googleapis.com" />
                <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="true" />


                {/* Open Graph */}
                <meta property="og:locale" content="de_DE" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Liva Hairdresser & Barber – Haarschnitte & Barbershop in Kassel" />
                <meta property="og:description" content="Trendige Haarschnitte, Bartpflege und exklusive Barber-Dienstleistungen in Kassel – Jetzt Termin bei Liva buchen!" />
                <meta property="og:url" content="https://liva-salon.de/services" />
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
            <main>
                <section>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 bg-dark py-5 text-white">
                                <h1 className='display-5'>Liva Hairdress | Services</h1>
                                <span className=''>Entdecken Sie die vielfalt unserer besten Angebote für Sie & Ihn. Überzeugen Sie sich selbst von Liva Haidress und besuchen Sie uns vor Ort im Salon. </span>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container-fluid d-none d-md-block">
                        <div className="row p-0 ">
                            {services.map((k, i) =>
                                <div key={i} className='col-12 col-md-3 p-0 position-relative'>

                                    <Link href={k.url} style={{ textDecoration: "none" }}>

                                        {/* Bild */}
                                        <img
                                            src={`/services/${k.img}`}
                                            alt={`Service-Bild-${i}`}
                                            width="100%"
                                            height={700}
                                            className='overlay'
                                            style={{
                                                objectFit: "cover",
                                                objectPosition: "center",
                                                display: "block",
                                            }}
                                        />

                                        {/* Overlay */}
                                        <div
                                            style={{
                                                position: "absolute",
                                                inset: 0,
                                                background: "rgba(0,0,0,0.1)",
                                                zIndex: 1,
                                            }}
                                        />

                                        {/* Content */}
                                        <div
                                            className="glass-blur p-3 rounded-5 position-absolute d-flex flex-column justify-content-center align-items-start"
                                            style={{
                                                zIndex: 2,
                                                bottom: 15,
                                                left: 15,
                                                right: 15,
                                            }}
                                        >
                                            <div className="position-relative w-100">

                                                {/* Icon (kein extra Link!) */}
                                                <div
                                                    className="position-absolute"
                                                    style={{ right: 10, top: 10 }}
                                                >
                                                    <FiArrowUpRight size={30} color="black" />
                                                </div>

                                                <h4 className={`mb-1 ${i % 2 === 0 ? 'text-white' : 'text-dark'} `}>
                                                    <strong>{k.title}</strong>
                                                </h4>

                                                <p style={{ fontSize: 12 }} className={`mb-1 ${i % 2 === 0 ? 'text-white' : 'text-dark'} `}>
                                                    {k.desc}
                                                </p>
                                            </div>
                                        </div>

                                    </Link>

                                </div>

                            )}
                        </div>


                    </div>

                    <div className="container-fluid d-block d-md-none">

                        <div className="row p-0  d-flex justify-content-start align-items-center flex-nowrap  " style={{ overflowX: 'auto' }}>
                            {services.map((k, i) =>
                                <div key={i} className="p-0 position-relative" style={{ maxWidth: "500px" }}>
                                    <Link href={k.url} style={{ textDecoration: "none" }}>

                                        {/* Bild */}
                                        <img
                                            src={`/services/${k.img}`}
                                            alt={`Service-Bild-${i}`}
                                            width="100%"
                                            height={700}
                                            style={{
                                                objectFit: "cover",
                                                objectPosition: "center",
                                                display: "block",
                                            }}
                                        />

                                        {/* Overlay */}
                                        <div
                                            style={{
                                                position: "absolute",
                                                inset: 0,
                                                background: "rgba(0,0,0,0.1)",
                                                zIndex: 1,
                                            }}
                                        />

                                        {/* Content */}
                                        <div
                                            className="glass-blur p-3 rounded-5 position-absolute d-flex flex-column justify-content-center align-items-start"
                                            style={{
                                                zIndex: 2,
                                                bottom: 15,
                                                left: 15,
                                                right: 15,
                                            }}
                                        >
                                            <div className="position-relative w-100">

                                                {/* Icon (kein extra Link!) */}
                                                <div
                                                    className="position-absolute"
                                                    style={{ right: 10, top: 10 }}
                                                >
                                                    <FiArrowUpRight size={30} color="black" />
                                                </div>

                                                <h4 className={`mb-1 ${i % 2 === 0 ? 'text-white' : 'text-dark'} `}>
                                                    <strong>{k.title}</strong>
                                                </h4>

                                                <p style={{ fontSize: 12 }} className={`mb-1 ${i % 2 === 0 ? 'text-white' : 'text-dark'} `}>
                                                    {k.desc}
                                                </p>
                                            </div>
                                        </div>

                                    </Link>
                                </div>
                            )}

                        </div>

                    </div>


                </section>


            </main >
        </>

    )
}
