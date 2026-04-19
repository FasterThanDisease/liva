import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Paragraph } from "@/components/assets/paragraph";

export default function Frauen() {


    const [openFaqIndex, setOpenFaqIndex] = React.useState(null);

    const handleFaqToggle = (index) => {
        setOpenFaqIndex((prev) => (prev === index ? null : index));
    };



    return (
        <>
            <Head>
                <title>Damenfriseur Kassel | Liva Hairdresser & Barber</title>
                <meta
                    name="description"
                    content="Damenfriseur in Kassel-Wilhelmshöhe für moderne Haarschnitte, Styling und individuelle Beratung. Jetzt Termin bei Liva Hairdresser & Barber buchen."
                />
                <link rel="canonical" href="https://liva-salon.de/frauen" />
            </Head>

            <main>

                {/* HERO */}
                <section
                    className="d-flex align-items-center text-white position-relative"
                    style={{ minHeight: "90vh", background: "#111" }}
                >
                    <Image
                        src="/img/female-services.webp"
                        alt="Damenfriseur Kassel Styling"
                        fill
                        style={{ objectFit: "cover", opacity: 0.4, objectPosition: 'center top' }}
                        priority
                    />

                    <div className="container text-center position-relative">
                        <div className="row">
                            <div className="col-12">


                                <h1 style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", fontWeight: 700 }}>
                                    Damenfriseur in Kassel
                                </h1>

                                <p className="mt-3 mx-auto" style={{ maxWidth: 700 }}>
                                    Individuelle Haarschnitte, moderne Stylings und persönliche Beratung
                                    für Frauen in Kassel-Wilhelmshöhe.
                                </p>
                                <div className="d-flex justify-content-center align-items-center gap-3">
                                    <div className="mt-4">
                                        <Link
                                            href="https://buchung.treatwell.de/ort/liva-hairdresser-barber/"
                                            className="btn btn-color1"
                                        >
                                            Termin buchen
                                        </Link>
                                    </div>
                                    <div className="mt-4">
                                        <Link
                                            href="#information"
                                            scroll={false}
                                            className="btn btn-color1"
                                        >
                                            Mehr erfahren
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* INTRO */}
                <section className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2>Damenfriseur in Kassel-Wilhelmshöhe</h2>

                            <p className="mt-3 text-secondary">
                                Bei Liva Hairdresser & Barber erwartet dich mehr als nur ein
                                klassischer Friseurbesuch. Wir bieten moderne
                                Friseurleistungen für Frauen in Kassel – individuell
                                abgestimmt auf deinen Stil, deine Haarstruktur und deine Wünsche.
                            </p>

                            <p className="text-secondary">
                                Egal ob du einen neuen Look möchtest oder deinen bestehenden
                                Style perfektionieren willst – wir beraten dich ehrlich und
                                professionell.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SERVICES */}
                <section id="information" className="bg-light py-5">
                    <div className="container">
                        <div className="row text-center mb-4">
                            <h2>Unsere Leistungen für Frauen</h2>
                        </div>

                        <div className="row g-4">
                            {[
                                {
                                    title: "Individuelle Haarschnitte",
                                    text: "Moderne und klassische Schnitte passend zu deinem Typ.",
                                },
                                {
                                    title: "Styling & Finish",
                                    text: "Perfektes Styling für Alltag oder besondere Anlässe.",
                                },
                                {
                                    title: "Beratung",
                                    text: "Ehrliche und professionelle Beratung für deinen Look.",
                                },
                            ].map((item, i) => (
                                <div key={i} className="col-md-4">
                                    <div className="p-4 bg-white h-100 shadow-sm">
                                        <h3>{item.title}</h3>
                                        <p className="text-secondary">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* IMAGE + TEXT */}
                <section className="container-fluid container-md py-5">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <Image
                                src="/img/female-services.webp"
                                alt="Friseur für Frauen Kassel"
                                width={800}
                                height={600}
                                className="img-fluid rounded"
                            />
                        </div>

                        <div className="col-md-6 mt-4 mt-md-0">
                            <h2>Natürlich schöne Ergebnisse</h2>

                            <p className="text-secondary mt-3">
                                Unser Ziel ist es, dass du dich mit deinem neuen Look rundum
                                wohlfühlst. Wir arbeiten präzise, nehmen uns Zeit und gehen auf
                                deine individuellen Wünsche ein.
                            </p>

                            <p className="text-secondary">
                                Als Damenfriseur in Kassel legen wir großen Wert auf Qualität,
                                Details und eine entspannte Atmosphäre.
                            </p>

                            <Link
                                href="https://buchung.treatwell.de/ort/liva-hairdresser-barber/"
                                className="btn btn-dark mt-3"
                            >
                                Jetzt Termin sichern
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center py-5 bg-dark text-white">
                    <h2>Bereit für deinen neuen Look?</h2>
                    <p className="mt-2">
                        Buche jetzt deinen Termin beim Damenfriseur in Kassel.
                    </p>

                    <div className="d-flex justify-content-center">

                        <Link
                            href="https://buchung.treatwell.de/ort/liva-hairdresser-barber/"
                            className="btn btn-color1 mt-3"
                        >
                            Termin buchen
                        </Link>
                    </div>
                </section>


                {/* FAQ MINI */}
                <section className="bg-light py-5">
                    <div className="container">
                        <h2 className="text-center mb-4">Häufige Fragen</h2>

                        <div className="row justify-content-center">
                            <div className="col-lg-8">

                                <Paragraph handletoggle={() => handleFaqToggle(1)} title={'Benötige ich einen Termin?'} open={openFaqIndex === 1}>
                                    <p className="text-secondary">
                                        Wir empfehlen eine Terminbuchung, damit wir genügend Zeit für dich einplanen können.
                                    </p>
                                </Paragraph>

                                <Paragraph handletoggle={() => handleFaqToggle(2)} title={'Welche Leistungen bietet ihr für Frauen?'} open={openFaqIndex === 2}>
                                    <p className="text-secondary">
                                        Haarschnitte, Styling und individuelle Beratung stehen im Fokus.
                                    </p>
                                </Paragraph>

                                <Paragraph handletoggle={() => handleFaqToggle(3)} title={'Wo befindet sich der Salon?'} open={openFaqIndex === 3}>
                                    <p className="text-secondary">
                                        Wilhelmshöher Allee 185 in Kassel-Wilhelmshöhe.
                                    </p>
                                </Paragraph>



                            </div>
                        </div>
                    </div>
                </section>



            </main>
        </>
    );
}