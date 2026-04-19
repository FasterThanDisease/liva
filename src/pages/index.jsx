import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Contactcta from "@/components/utils/contactcta";
import { FiArrowUpRight } from "react-icons/fi";
import Contactinformation from "@/components/utils/contactinformation";
import { RxMinusCircled } from "react-icons/rx";
import FAQ from "@/components/utils/faq";
import { InstagramEmbed } from "react-social-media-embed";
import GoogleBadge from "@/components/utils/googlebadge";
import Reviewcard from "@/components/utils/reviewcard";
import { CiClock2 } from "react-icons/ci";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { useRouter } from "next/router";

const proposal = [
  {
    title: 'Typgerechte Beratung und trendige Frisurenverstärken', text: ' In unserem Salon bieten wir Ihnen typgerechte Beratung und trendige  Frisuren für jeden Anlass. Unsere erfahrenen Friseure gehen auf Ihre  individuellen Wünsche ein und zaubern Ihnen einen neuen Look, der Sie  perfekt in Szene setzt.',
    img: '/img/img3.webp',
    alt: 'Service-Foto-1 Liva Hairdress'
  },
  {
    title: 'Perfekte Haarschnitte und Bärte in gepflegter Atmosphäre',
    text: 'Klassische Haarschnitte und Pflege von Bärten entstehen bei uns an einem  Ort gepflegter Männlichkeit.',
    img: '/img/img1.webp',
    alt: 'Haarschnitt & Bartpflege Liva Hairdress'

  },
  {
    title: 'Immer auf dem neuesten Stand',
    text: 'Wir sind immer auf dem neuesten Stand der Technik und bieten Ihnen  innovative Styling-Techniken, die Ihre Haare zum Strahlen bringen.',
    img: '/img/img2.webp',
    alt: 'Serviceangebote-Foto-2 Liva Hairdress'
  }
]

const faqData = [
  {
    question: "Braucht man bei Liva Hairdresser & Barber einen Termin?",
    answer:
      "Ein Termin ist empfehlenswert, damit wir ausreichend Zeit für dich einplanen können. Du kannst deinen Besuch bequem online buchen oder uns direkt anrufen. Spontane Besuche sind je nach Auslastung ebenfalls möglich."
  },
  {
    question: "Welche Leistungen bietet ihr für Herren an?",
    answer:
      "Wir bieten klassische und moderne Herrenhaarschnitte, Bartpflege, Nassrasur, Konturenpflege sowie individuelle Beratung für deinen gewünschten Look an. Dabei legen wir Wert auf saubere Übergänge, präzise Schnitte und eine entspannte Atmosphäre."
  },
  {
    question: "Gibt es bei euch auch Friseurleistungen für Damen?",
    answer:
      "Ja, auch Damen sind bei uns herzlich willkommen. Wir bieten individuelle Friseurleistungen für Frauen, darunter Haarschnitte, Styling und persönliche Beratung, abgestimmt auf Haarstruktur, Stil und Wünsche."
  },
  {
    question: "Wo befindet sich euer Friseursalon in Kassel?",
    answer:
      "Du findest Liva Hairdresser & Barber in der Wilhelmshöher Allee 185, 34121 Kassel. Unser Salon liegt zentral in Kassel-Wilhelmshöhe und ist gut erreichbar."
  },
  {
    question: "Welche Öffnungszeiten habt ihr?",
    answer:
      "Unsere Öffnungszeiten sind Dienstag bis Freitag von 09:00 bis 19:00 Uhr und Samstag von 09:00 bis 17:00 Uhr. Sonntag und Montag ist der Salon geschlossen."
  }
];


export const demoTestimonials = [
  {
    name: "Fabian Hüther",
    text: `5 Sterne
  Ich bin absolut begeistert vom Friseur Liva! Trotz später Uhrzeit wurde ich ganz unkompliziert und freundlich ohne Termin noch drangenommen – das ist heutzutage wirklich nicht selbstverständlich. Der Haarschnitt war genau so, wie ich es mir vorgestellt habe: präzise, akribisch und mit viel Liebe zum Detail umgesetzt. Man nimmt sich hier Zeit, hört zu und arbeitet wirklich kundenorientiert. Dazu gab es noch einen richtig leckeren Kaffee – kleine Geste, große Wirkung! Rundum empfehlenswert – ich komme definitiv wieder.`
  },
  {
    name: "Nicole",
    text: "Mein erster Termin bei Olivia heute – und ich bin rundum happy! Tolle Beratung, perfekter Schnitt und wunderschöne Highlights mit Gloss, inklusive Styling. Absolut empfehlenswert, gerne wieder!"
  },
  {
    name: "Jacob",
    text: `Absolut empfehlenswert!
Ein großartiger Friseursalon mit sehr freundlichem und kompetentem Team. Die Beratung ist ehrlich und professionell, auf Wünsche wird individuell eingegangen. Das Ergebnis ist immer zufriedenstellend – präzise geschnitten und top gestylt.`
  },
  {
    name: "Björn",
    text: "Liva ist einfach top! Meine zwei Kinder und ich gehen regelmäßig zum Salon zu Hasan und sind jedes Mal super zufrieden. Er ist immer freundlich, zuverlässig und macht seine Arbeit mit ganz viel Herz. Der Service ist klasse – absolut empfehlenswert!“"
  },
  {
    name: "Nikodem",
    text: "Taperfade Profis in Kassel! Kann ich nur weiterempfehlen! Habe lange nach einem Friseur gesucht, bei Liva bin ich endlich fündig geworden."
  },

  {
    name: 'Sarah',
    text: `Ich bin seit Jahren Kunde und fühle mich hier immer super aufgehoben. Inzwischen kommt auch meine Freundin mit – wir sind beide sehr zufrieden. Top Haarschnitte, gleichbleibend hohe Qualität bei jedem Friseur/ Friseurin und faires Preis-Leistungs-Verhältnis.
Das Team ist mega freundlich, Termine lassen sich bequem online buchen und auch spontan ist man sehr flexibel, oft ohne lange Wartezeit. Klare Empfehlung!`

  }];



const servicecarouselitems = [
  { title: 'Kinder', desc: 'kinderfreundliche Atmosphäre bei Liva Hairdress mit kostenlosen Getränken und Kinderspielzeug für die Wartezeit. Buchen Sie jetzt deinen nächsten Termin für oder mit deinem Kind', subtitle: 'Kinderfreundlicher Friseur in Kassel', img: '/kinderhaarschnitt.webp', url: '/services/kinder' },
  { title: 'Bartpflege', desc: 'Professionelle Bartpflege nach deinen Wünschen. Professionelle Bartpflege bei Liva Haidress. Bei Bedarf bekommst du bei uns auch die passenden Bartpflege-Produkte, um den perfekten Style zu kreiern!', subtitle: '', img: '/bartpflege.webp', url: '/services/bartpflege' },
  { title: "Woman's Treatment", desc: 'Angenehme Aufenthalte für einen neuen Beauty-Tag mit Liva Hairdress. Wir bieten unseren weiblichen Kundinnen professionellen Hair-Styling, Färb & Haarverlängerungs-Service an.', subtitle: 'Styling, Friseuren, Glow-Up', img: '/frauenhaarschnitt.webp', url: '/services/damen' },
  { title: 'Herren Haarschnitt', desc: 'Überzeuge dich von den professionellen Haarschnitten bei Liva Hairdress & Barber. Wir sind ein zertifizierter Meistebetrieb und können somit deine Wünsche Wirklichkeit werden lassen. Buche jetzt deinen Termin!', subtitle: '', img: '/maennerhaarschnitt.webp', url: '/services/herren' },

]


const days = [
  null,
  '09:00 - 19:00',
  '09:00 - 19:00',
  '09:00 - 19:00',
  '09:00 - 19:00',
  '09:00 - 19:00',
  null

]

const weeknames = [
  'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'
]





export default function Home({ tenantConfig, staff, tenant, instaPosts }) {

  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false);

  const router = useRouter();


  const [services, setServices] = useState([
    {
      categoryName: 'Haarschnitte',
      active: 1,
      servicelines: [{ name: 'klassischer Haarschnitt', price: 23.00 }, { name: 'Traditionelle Bart Nassrasur', price: 18.00 }, { name: 'Bart stutzen', price: 18.00 }, { name: 'Beratung, Haarschnitt & Bart stutzen', price: 38.00 }, { name: 'Dauerwelle', price: 85.00 }]
    },
    { active: 0, categoryName: 'Haarentfernung', servicelines: [{ name: 'Waxing - Wangen', price: 15.00 }, { name: 'Waxing - Ohren', price: 5.00 }, { name: 'Waxing - Nase', price: 5.00 }, { name: 'Ohrenhaare verbrennen', price: 3.00 }] },
    { active: 0, categoryName: 'Gesichtspflege', servicelines: [{ name: 'Wimpern färben', price: 12.00 }, { name: 'Augenbrauen färben & zupfen', price: 15.00 }, { name: 'Augenbrauen zupfen', price: 8.00 }] }
    ,]
  )


  const handleServiceClick = (index) => {
    setServices((prevServices) =>
      prevServices.map((service, i) => ({
        ...service,
        active: i === index ? 1 : 0,
      }))
    );
  };



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
        <link rel="canonical" href="https://liva-salon.de" />

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
        <meta property="og:url" content="https://liva-salon.de" />
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

        <Contactcta />

        <section className="hero d-flex align-items-center position-relative " style={{ minHeight: '100dvh', zIndex: 1 }}>
          <div className="position-absolute" style={{ right: 20, bottom: 20, zIndex: 2 }}>
            <GoogleBadge avg={'5,0'} count={'239'} />
          </div>
          <Image className="position-absolute" priority={true} src="/logo.webp" alt="Liva Hairdress Logo" width={313} height={200} style={{ maxHeight: '100px', maxWidth: '100px', objectFit: 'cover', objectPosition: 'center center', top: 50, left: 100 }} />

          <div className="position-absolute d-none d-xl-block   w-75" style={{ zIndex: 3, bottom: 50, left: '15%' }}>

            <div className="d-flex w-100 justify-content-center align-items-center">
              <div className="flex-grow-1" style={{ flex: 4, borderRight: '3px solid white' }}>
                <div className=" p-4 d-flex flex-column  h-100  justify-content-center align-items-center text-white " >
                  <div className="" style={{ flex: 1 }}>
                    <IoCallOutline size={50} color="white" />
                  </div>
                  <div className="divider mb-4" />
                  <div className="text-center  text-white ms-2" style={{ flex: 9 }}>
                    <span>Rufen Sie uns gerne an:</span>
                    <br />
                    <Link href="tel:+4956134914" className="text-dark" style={{ textDecoration: 'none' }} ><span className="text-white pointer" style={{ fontWeight: 400, fontSize: '1.1em' }}>(+49)561 34914</span></Link>
                  </div>
                </div>
              </div>

              <div className="flex-grow-1 d-none d-xl-block" style={{ flex: 4, borderRight: '3px solid white' }}>
                <div className=" p-4 d-flex flex-column  h-100  justify-content-center align-items-center text-white " >
                  <div className="" style={{ flex: 1 }}>
                    <IoLocationOutline size={50} color="white" />
                  </div>
                  <div className="divider mb-4" />
                  <div className="text-center  text-white ms-2" style={{ flex: 9 }}>
                    <span>Besuchen Sie uns vort Ort:</span>
                    <br />
                    <span style={{ fontWeight: 400, fontSize: '1.1em' }} >Wilhelmshöher Allee 185<br />
                      34121 Kassel</span>
                  </div>
                </div>
              </div>

              <div className="flex-grow-1 d-block d-xl-none" style={{ flex: 4 }}>
                <div className=" p-4 d-flex flex-column  h-100  justify-content-center align-items-center text-white " >
                  <div className="" style={{ flex: 1 }}>
                    <IoLocationOutline size={50} color="white" />
                  </div>
                  <div className="divider mb-4" />
                  <div className="text-center  text-white ms-2" style={{ flex: 9 }}>
                    <span>Besuchen Sie uns vort Ort:</span>
                    <br />
                    <span style={{ fontWeight: 400, fontSize: '1.1em' }} >Wilhelmshöher Allee 185<br />
                      34121 Kassel</span>
                  </div>
                </div>
              </div>



              <div className="flex-grow-1 d-none d-xl-block" style={{ flex: 4 }}>
                <div className=" p-4 d-flex flex-column  h-100  justify-content-center align-items-center text-white " >
                  <div className="" style={{ flex: 1 }}>
                    <CiClock2 size={50} color="white" />
                  </div>
                  <div className="divider mb-4" />
                  <div className="text-center  d-flex flex-column text-white ms-2" style={{ flex: 9 }}>
                    <span>Di-Fr: 09:00 - 19:00</span>
                    <span>Sa: 09:00 - 17:00</span>
                    <span>So & Mo: geschlossen</span>

                  </div>
                </div>





              </div>
            </div>
          </div>
          {/* <Link scroll={false} href='#section1'>
            <div className="position-absolute d-none d-md-block" style={{ left: '50%', bottom: 20 }}>
              <RxMinusCircled className="pointer hoveri" size={100} color="white" />
            </div>
          </Link> */}


          <div
            className="container-fluid position-relative"
            style={{ zIndex: 2, paddingTop: '7rem', paddingBottom: '7rem' }}
          >
            <div className="row justify-content-center text-center text-white">
              <div className="col-12 col-xl-10">
                <div className="mb-4 mb-md-5">
                  <h1 className="display-1 fw-bold mb-3">Willkommen bei Liva</h1>
                  <p
                    className="mb-0 mx-auto"
                    style={{
                      maxWidth: 700,
                      fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                      lineHeight: 1.6,
                    }}
                  >
                    Ihr Friseur in Kassel für modernes Hairstyling, Barber-Service und
                    persönliche Beratung.
                  </p>
                </div>

                <div className="d-flex flex-column flex-md-row justify-content-center align-items-stretch gap-3 mx-auto mb-5 mb-xl-6" style={{ maxWidth: 700 }}>
                  <Link
                    href="https://buchung.treatwell.de/ort/liva-hairdresser-barber/"
                    style={{ textDecoration: 'none' }}
                    className="w-100 w-md-auto"
                  >
                    <button
                      className="btn btn-color1 w-100 px-4 py-3"
                      style={{ letterSpacing: '2px' }}
                    >
                      ONLINE BUCHEN
                    </button>
                  </Link>

                  <Link
                    href="tel:+4956134914"
                    style={{ textDecoration: 'none' }}
                    className="w-100 w-md-auto"
                  >
                    <button
                      className="btn btn-color1 w-100 px-4 py-3"
                      style={{ letterSpacing: '2px' }}
                    >
                      ODER ANRUFEN
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>






        <section className="bg-dark" style={{ paddingTop: 100, paddingBottom: 50 }}>
          <div className="container-fluid container-md">
            <div className="row justify-content-center align-items-center">
              <div className="col-12 col-md-6 order-1 order-md-2 d-flex justify-content-center">
                <img src="/img/salon.webp" alt="Liva Hairdress & Barber Salon in Wilhelmshöhe" width={'100%'} height={400} style={{ objectFit: 'cover' }} />
              </div>
              <div className="col-12 col-md-6 order-2 order-md-1">
                <h3 className="color1">Liva Hairdress & Barber</h3>
                <p className="mt-3">Bei Liva Hairdresser & Barber erwartet dich ein moderner Friseursalon in zentraler Lage auf der Wilhelmshöher Allee in Kassel. <br /> Der Salon ist leicht erreichbar und lässt sich ideal in den Alltag integrieren – egal ob vor der Arbeit, in der Mittagspause oder nach Feierabend. <br /> Termine können jederzeit bequem über die Online-Buchung vereinbart werden, ganz ohne Wartezeiten oder komplizierte Abläufe.</p>
                <p className="mt-2">Wir freuen uns auf deinen Besuch</p>
              </div>
            </div>
          </div>
        </section>


        <section className="bg-dark" style={{ paddingBottom: 50 }}>
          <div className="container-fluid container-md">
            <div className="row p-0">
              <div className="col-12 col-md-6 p-0">
                <img src="/img/babershop-utils.webp" alt="Friseur Utensilien Foto" height={700} width={'100%'} style={{ objectFit: 'cover' }} />
              </div>
              <div className="col-12 col-md-6 d-flex flex-column p-4">
                <div>
                  <span style={{ padding: '10px 20px' }}>Services</span>
                  <div className="divider" />
                </div>

                <h3>Unsere besten Frisuren zum bezahlbaren Preis</h3>
                <p>Jeder Schnitt passend zu deinem Look. Unabhängig ob ein schneller Haarschnitt oder eine aufwendige Frisur. Das Team von Liva Hairdress & Barber passen sich individuell deinen Wünschen an. </p>
                <div className="d-flex flex-wrap gap-2">
                  {services.map((k, i) => (<button key={i} onClick={() => handleServiceClick(i)} className={`btn px-2 pointer text-dark ${k.active === 1 ? ' bg1 ' : ' text-dark bg-white '}`}>{k.categoryName}</button>))}
                </div>

                <div className="d-flex flex-column mt-4">
                  {services.find((k) => k.active === 1).servicelines.map((k, i) => (
                    <div key={i} className="d-flex justify-content-between px-2 py-2" style={{ borderBottom: '2px solid white' }}>
                      <span style={{ fontSize: '1.1em', fontWeight: 500 }}>{k.name}</span>
                      <span>{k.price.toFixed(2).replace('.', ',')} €</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>


        <section>
          <div className="container-fluid container-md">
            <div className="row">
              <div className="col-12">

              </div>
            </div>
          </div>



          <div className="container-fluid d-none d-md-block">
            <div className="row p-0 ">
              {servicecarouselitems.map((k, i) =>
                <div className='col-12 col-md-3 p-0 position-relative'>

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
              {servicecarouselitems.map((k, i) =>
                <div className="p-0 position-relative" style={{ maxWidth: "300px" }}>
                  <Link href={k.url} style={{ textDecoration: "none" }}>

                    {/* Bild */}
                    <img
                      src={`/services/${k.img}`}
                      alt={`Service-Bild-${i}`}
                      width="300px"
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




        <section>
          <div className="container-fluid container-md" style={{ paddingTop: 50, paddingBottom: 50 }}>

            <div className="row justify-content-center align-items-stretch">
              <div className="col-12 d-flex justify-content-center py-4">
                <h3 className="color3" style={{ fontSize: '4em', fontWeight: 500 }} >Über Uns</h3>
              </div>

              {proposal.map((k, i) => (
                <div key={i} className="col-12 col-md-4 p-3">
                  <div className="d-flex h-100">
                    <div className="d-flex flex-column justify-content-start align-items-center text-center">
                      <div className="profile-picture">
                        <picture>
                          <img src={k.img} alt={k.alt} />
                        </picture>
                      </div>

                      <h3 className="" style={{ fontSize: '1.5em' }}>{k.title}</h3>
                      <div className="divider" />
                      <div className="p-3">

                        <p className="text-secondary" style={{ fontSize: '1.2em' }}>{k.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section className="bg-dark text-white">
          <div className="container-fluid container-md" style={{ paddingTop: 50, paddingBottom: 50 }}>
            <div className="row justify-content-center align-items-center">
              <div className="col-12 col-md-6 d-flex flex-column justify-content-start align-items-start gap-3">
                <div>
                  <h3>Liva Hairdresser & Barber </h3>
                  <h3 className="color1">Kassel-Wilhelmshöhe</h3>
                </div>


                <p>
                  Liva Hairdresser & Barber steht für Qualität, Stilbewusstsein und persönliche Beratung.
                  Unser Salon auf der Wilhelmshöher Allee ist Anlaufpunkt für Kundinnen und Kunden aus ganz Kassel, die Wert auf professionelle Haarschnitte und gepflegte Looks legen.
                </p>
                <p>
                  Mit Erfahrung, Leidenschaft und einem geschulten Blick für Details sorgen wir täglich dafür, dass sich unsere Kunden wohlfühlen – und den Salon mit einem Lächeln verlassen.
                </p>
              </div>

              <div className="col-12 col-md-6 mt-3 p-md-5 d-flex justify-content-center">
                <img className="" width={'100%'} height={400} src="/img/barbershop-haircut.webp" alt="Liva Haidress Salon - Nahaufnahme Haarschere" style={{ objectFit: 'cover', objectPosition: 'center', borderRadius: '50px' }} />
              </div>
              <div className="col-12 mt-5">
                <p>Im Mittelpunkt steht ein freundliches und professionelles Team, das Wert auf persönlichen Umgang legt. Jeder Kunde wird ernst genommen und individuell beraten, ohne Zeitdruck oder Hektik. Gespräche entstehen ganz natürlich – ob man sich austauschen möchte oder lieber entspannen will, bleibt jedem selbst überlassen.</p>
              </div>
              <span className="py-3"><strong>Öffnungszeiten</strong></span>
              <div className="col-12 mt-3 d-flex">
                <div className="d-flex flex-column flex-md-row gap-5" style={{ flex: 8 }}>
                  <div className="d-flex flex-column">
                    <span className="color1">Di - Fr</span>
                    <span>09:00 - 19:00</span>
                  </div>
                  <div className="d-flex flex-column">
                    <span className="color1">Sa</span>
                    <span>09:00 - 17:00</span>
                  </div>
                  <div className="d-flex flex-column">
                    <span className="color1">So & Mo</span>
                    <span>Geschlossen</span>
                  </div>
                </div>
                <div style={{ flex: 4 }}>
                  <button className="btn btn-color1" onClick={() => router.push('https://buchung.treatwell.de/ort/liva-hairdresser-barber/')}>Termin Buchen</button>
                </div>
              </div>
            </div>
          </div>

        </section>




        <section className="">
          <div className="container-fluid container-md">
            <div className="row align-items-center">

              <div className="col-12 col-md-6 d-flex flex-column gap-3">

                <h3 className="mb-3">Women’s Treatment – individuelle Friseurleistungen für Frauen</h3>
                <p className="text-secondary">
                  Liva Hairdresser & Barber bietet nicht nur Services für Herren, sondern auch gezielte Angebote für Frauen.
                  Damen sind im Salon ausdrücklich willkommen und erhalten individuelle Behandlungen, die auf ihre Wünsche und ihren Stil abgestimmt sind.
                  Ob klassischer Schnitt, modernes Styling oder typgerechte Beratung – der Fokus liegt auf Qualität und persönlicher Betreuung.
                </p>

                <p className="fw-semibold mt-3">
                  Für Frauen, die Wert auf Stil, Qualität und persönliche Betreuung legen.
                </p>


                <Link href="/frauen" className="btn bg1 w-50 text-dark  mt-4 px-4 py-2">
                  Mehr erfahren
                </Link>

              </div>

              <div className="col-12 col-md-6 mt-4 mt-md-0">
                <picture>
                  <img src="/img/female-services.webp" width={'100%'} height={700} style={{ objectFit: 'cover', objectPosition: 'center top' }} />
                  {/* <Image
                    src="/img/female-services.webp"
                    alt="Liva Hairdress Womens Treatment"
                    className="img-contain rounded-3 shadow-sm"
                    priority
                    width={2000}
                    height={4000}
                    style={{ maxHeight: '600px' }}
                  /> */}
                </picture>
              </div>

            </div>
          </div>
        </section>


        <section id="soziales" style={{ paddingTop: 50, paddingBottom: 50 }}>
          <div className="container-fluid container-md">
            <div className="row justify-content-center align-items-center text-center">
              <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                <h3 className="color3" style={{ fontSize: '4em', fontWeight: 500 }} >Das sagen unsere Kunden über uns </h3>
              </div>

              <div className="col-12">
                <div className="masonry">
                  {demoTestimonials.map((t, index) => (
                    <Reviewcard
                      key={index}
                      name={t.name}
                      text={t.text}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>



        <section id="kontakt">
          <div className="container-fluid bg-light">
            <div className="row justify-content-center align-items-stretch ">

              {/* Kontaktinfo */}


              <div className="col-12 col-md-6 p-5 d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex h-100">
                  <div className="container">
                    <div className="row  justify-content-center align-items-center p-">
                      <h3 className="color3 display-3" style={{ fontSize: '4em', fontWeight: 500 }}>Kontaktiere uns</h3>

                      <div className="mt-5 text-center text-md-start">
                        <p className="py-3">Wir sind gern für dich da.</p>
                        <p className="text-secondary fs-5">
                          Wir schätzen unsere Kunden sehr und freuen uns, dass du unsere Website besuchst. Was können wir für dich tun?
                        </p>

                        <p className="fs-5">Liva Hairdresser & Barber</p>
                        <p className="text-secondary fs-5">Wilhelmshöher Allee 185, 34121 Kassel, Germany</p>

                        <p className="fs-5 me-2">Öffnungszeiten</p>
                        <div className="col-12 mt-3 d-flex">
                          <div className="d-flex flex-column flex-md-row gap-5" >
                            <div className="d-flex flex-column">
                              <span className="color3">Di - Fr</span>
                              <span>09:00 - 19:00</span>
                            </div>
                            <div className="d-flex flex-column">
                              <span className="color3">Sa</span>
                              <span>09:00 - 17:00</span>
                            </div>
                            <div className="d-flex flex-column">
                              <span className="color3">So & Mo</span>
                              <span>Geschlossen</span>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="col-12 col-md-6 p-0">


                <div className="map-responsive h-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2493.906813624968!2d9.45346457702644!3d51.31283872489745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bb3f55b17ce31f%3A0x23c879198474abfc!2sLiva%20Hairdresser%20%26%20Barber!5e0!3m2!1sen!2sde!4v1762440559162!5m2!1sen!2sde"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Liva Hairdresser & Barber Standort"
                  ></iframe>
                </div>

              </div>
            </div>
          </div>
        </section>








        <section className="bg-lighti" style={{ paddingTop: 100, paddingBottom: 50 }}>
          <div className="container-fluid container-md">
            <div className="row justify-content-center align-items-center">
              <div className="col-12 d-flex justify-content-center">
                <h3 className="color3" style={{ fontSize: '4em', fontWeight: 500 }}>Vernetze dich mit uns</h3>
              </div>
              {instaPosts.map((k, i) => (
                <div key={i} className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
                  <InstagramEmbed key={i} url={k.instaLink} width={328} />
                </div>
              ))}
            </div>
          </div>
        </section>


        <section className="" style={{ paddingTop: 80, paddingBottom: 80 }}>
          <div className="container-fluid container-md">
            <div className="row justify-content-center">
              <div className="col-12 text-center mb-5">
                <h2 className="color3" style={{ fontSize: '4em', fontWeight: 500 }}>
                  Häufige Fragen
                </h2>
                <p className="text-secondary mt-3">
                  Antworten auf die wichtigsten Fragen rund um Termine, Leistungen und unseren Standort in Kassel.
                </p>
              </div>

              <div className="col-12 col-lg-10">
                <div className="row">
                  <FAQ faqData={faqData} />
                </div>
              </div>
            </div>
          </div>
        </section>


      </main>
    </>
  );
}



// export async function getStaticProps() {
//   const tenantId = 52;

//   const tenantRes = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/appointments/gettenantbyid`,
//     {
//       method: "POST",
//       headers: { "Content-Type": "application/json", "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
//       body: JSON.stringify({ TenantId: tenantId.toString() }),
//     }
//   );

//   const tenant = await tenantRes.json();

//   const servicesRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appointments/getservices`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json", "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
//     body: JSON.stringify({ tenantId }),
//   });
//   const services = await servicesRes.json();

//   const staffRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appointments/getstaff`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json", "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
//     body: JSON.stringify({ tenantId }),
//   });
//   const staff = await staffRes.json();

//   const tenantConfig = { id: tenantId, name: `Tenant ${tenantId}` };

//   return {
//     props: { tenantConfig: tenantConfig ?? null, services: services ?? null, staff: staff ?? null, tenant: tenant ?? null },
//     revalidate: 60 * 60,
//   };
// }


export async function getServerSideProps() {

  const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACEID}/entries?content_type=instaPost&order=-sys.createdAt&limit=20`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ` + process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN
    }
  })
  const data1 = await res.json()
  let instaPosts = Array.from({ length: data1.items.length }, (k, i) => ({ ...data1.items[i].fields }))

  return { props: { instaPosts } }
}


