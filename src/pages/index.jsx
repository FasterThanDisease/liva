import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { RxMinusCircled } from "react-icons/rx";



const proposal = [
  {
    title: 'Typgerechte Beratung und trendige Frisurenverstärken', text: ' In unserem Salon bieten wir Ihnen typgerechte Beratung und trendige  Frisuren für jeden Anlass. Unsere erfahrenen Friseure gehen auf Ihre  individuellen Wünsche ein und zaubern Ihnen einen neuen Look, der Sie  perfekt in Szene setzt.',
    img: '/img/img3.webp'
  },
  {
    title: 'Perfekte Haarschnitte und Bärte in gepflegter Atmosphäre',
    text: 'Klassische Haarschnitte und Pflege von Bärten entstehen bei uns an einem  Ort gepflegter Männlichkeit.',
    img: '/img/img1.webp'

  },
  {
    title: 'Immer auf dem neuesten Stand',
    text: 'Wir sind immer auf dem neuesten Stand der Technik und bieten Ihnen  innovative Styling-Techniken, die Ihre Haare zum Strahlen bringen.',
    img: '/img/img2.webp'
  }
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

export default function Home({ tenantConfig, services, staff, tenant }) {

  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false);


  return (
    <>
      <Head>
        {/* Grundlegende Meta-Tags */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Liva Hairdresser & Barber – Haarschnitte & Barbershop in Kassel</title>
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
              "name": "Liva Hairdresser & Barber",
              "url": "https://liva-salon.de",
              "image": "https://liva-salon.de/logo.png",
              "description": "Liva Hairdresser & Barber bietet trendige Haarschnitte, Bartpflege und exklusive Barber-Dienstleistungen in Kassel.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Wilhelmshöhe Allee 185",
                "addressLocality": "Kassel",
                "postalCode": "34121",
                "addressCountry": "DE"
              },
              "telephone": "+4956134914",
              "openingHours": "Mo-Fr 09:00-18:00",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 51.3116,
                "longitude": 9.4797
              },
              "priceRange": "€€",
              "sameAs": [
                "https://www.facebook.com/LivaHairdresser",
                "https://www.instagram.com/LivaHairdresser"
              ]
            })
          }}
        />
      </Head>

      <main>
        <section className="hero d-flex align-items-center position-relative " style={{ minHeight: '75dvh' }}>
          <Image className="position-absolute" priority={true} src="/logo.webp" alt="Liva Hairdress Logo" width={313} height={188} style={{ maxHeight: '100px', maxWidth: '100px', objectFit: 'cover', objectPosition: 'center center', top: 50, left: 100 }} />
          {/* <Link scroll={false} href='#section1'>
            <div className="position-absolute d-none d-md-block" style={{ left: '50%', bottom: 20 }}>
              <RxMinusCircled className="pointer hoveri" size={100} color="white" />
            </div>
          </Link> */}
          <div className="container-fluid" style={{ marginTop: 100, paddingBottom: 50 }}>
            <div className="row gx-5 justify-content-center " >

              <div className="col-12 d-flex flex-column justify-content-center  align-items-center text-white mb-4 mb-md-0">
                <h1 className="display-4 fw-bold ">Willkommen bei Liva</h1>
                <div className="d-flex flex-column flex-md-row  justify-content-center align-items-center gap-2 py-3">
                  <Link href={'/booking'} style={{ textDecoration: 'none' }}> <button className="btn btn-color1" style={{ letterSpacing: '2px' }}>ONLINE BUCHEN</button></Link>
                  <Link href={'tel:+4956134914'} style={{ textDecoration: 'none' }}><button className="btn btn-color1" style={{ letterSpacing: '2px' }}>ODER ANRUFEN</button></Link>

                </div>
              </div>
            </div >
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
                          <img src={k.img} />
                        </picture>
                      </div>
                      <h4 className="" style={{ fontSize: '1.5em' }}>{k.title}</h4>
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


        <section id="kontakt">
          <div className="container-fluid bg-light">
            <div className="row justify-content-center align-items-stretch p-0">
              {/* Kontaktinfo */}

              <div className="col-12 col-md-6 p-5 d-flex flex-column justify-content-center align-items-center">
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
                      <div className="pointer" onClick={() => setOpen(!open)}>
                        {open ? (
                          <div className="d-flex flex-column align-items-start">
                            {days.map((day, i) => (
                              <span
                                key={i}
                                className={`fs-5 ${((new Date().getDay() + 6) % 7 === i) ? 'color1' : ''}`}
                              >
                                {weeknames[i]} - {day ?? 'geschlossen'}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <div className="d-flex align-items-center">
                            <p className="me-2 mb-0">Heute geöffnet:</p>
                            <span className="fs-5">{days[(new Date().getDay() + 6) % 7]}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="col-12 col-md-6 p-0">
                <div className="map-responsive">
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


        <section id="soziales">
          <div className="container-fluid container-md">
            <div className="row justify-content-center align-items-center text-center">
              <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                <h3 className="color3" style={{ fontSize: '4em', fontWeight: 500 }} >Vernetze dich mit uns </h3>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}



export async function getStaticProps() {
  const tenantId = 52;

  const tenantRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/appointments/gettenantbyid`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
      body: JSON.stringify({ TenantId: tenantId.toString() }),
    }
  );

  const tenant = await tenantRes.json();

  const servicesRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appointments/getservices`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
    body: JSON.stringify({ tenantId }),
  });
  const services = await servicesRes.json();

  const staffRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appointments/getstaff`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
    body: JSON.stringify({ tenantId }),
  });
  const staff = await staffRes.json();

  const tenantConfig = { id: tenantId, name: `Tenant ${tenantId}` };

  return {
    props: { tenantConfig: tenantConfig ?? null, services: services ?? null, staff: staff ?? null, tenant: tenant ?? null },
    revalidate: 60 * 60,
  };
}
