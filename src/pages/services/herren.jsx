import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Herren() {
    return (
        <>
            <Head>
                <title>Herrenfriseur Kassel | Liva Hairdresser & Barber</title>
                <meta
                    name="description"
                    content="Herrenfriseur in Kassel-Wilhelmshöhe für moderne und klassische Haarschnitte, Styling und persönliche Beratung. Jetzt Termin bei Liva Hairdresser & Barber buchen."
                />
                <meta name="robots" content="index,follow" />
                <link rel="canonical" href="https://liva-salon.de/herren" />
            </Head>

            <main>
                <section
                    className="d-flex align-items-center text-white position-relative"
                    style={{ minHeight: "90vh", background: "#111" }}
                >
                    <Image
                        src="/img/barbershop-haircut.webp"
                        alt="Herrenfriseur in Kassel bei Liva Hairdresser & Barber"
                        fill
                        style={{ objectFit: "cover", opacity: 0.4 }}
                        priority
                    />

                    <div className="container text-center position-relative">
                        <h1 style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", fontWeight: 700 }}>
                            Herrenfriseur in Kassel
                        </h1>

                        <p className="mt-3 mx-auto" style={{ maxWidth: 760 }}>
                            Präzise Haarschnitte, moderne Styles und persönliche Beratung für Männer
                            in Kassel-Wilhelmshöhe.
                        </p>
                        <div className="d-flex justify-content-center align-items-center gap-2">


                            <Link
                                href="https://buchung.treatwell.de/ort/liva-hairdresser-barber/"
                                className="btn btn-color1"
                            >
                                Termin buchen
                            </Link>

                            <Link

                                href="#information"
                                scroll={false}
                                className="btn btn-outline-color1"
                            >
                                Mehr erfahren
                            </Link>



                        </div>
                    </div>
                </section>

                <section className="container py-5" id="informationen">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2>Moderne und klassische Herrenhaarschnitte</h2>
                            <p className="mt-3 text-secondary">
                                Bei Liva Hairdresser & Barber bieten wir Herrenhaarschnitte in Kassel
                                für jeden Stil und jeden Anlass. Ob klassisch, modern, sauberer Übergang
                                oder ein Look mit klarer Linie – wir nehmen uns Zeit für ein Ergebnis,
                                das zu dir passt.
                            </p>
                            <p className="text-secondary">
                                Unser Salon in Kassel-Wilhelmshöhe steht für präzises Arbeiten,
                                entspannte Atmosphäre und ehrliche Beratung.
                            </p>
                        </div>
                    </div>
                </section>

                <section id="information" className="bg-light py-5">
                    <div className="container">
                        <div className="row text-center mb-4">
                            <h2>Unsere Leistungen für Herren</h2>
                        </div>

                        <div className="row g-4">
                            {[
                                {
                                    title: "Klassische Haarschnitte",
                                    text: "Saubere, zeitlose Herrenhaarschnitte mit präziser Ausführung.",
                                },
                                {
                                    title: "Moderne Styles",
                                    text: "Von modernen Übergängen bis zu trendigen Looks – individuell auf dich abgestimmt.",
                                },
                                {
                                    title: "Persönliche Beratung",
                                    text: "Wir beraten dich ehrlich zu Schnitt, Styling und Pflege passend zu deinem Typ.",
                                },
                            ].map((item, i) => (
                                <div key={i} className="col-md-4">
                                    <div className="p-4 bg-white h-100 shadow-sm rounded-4">
                                        <h3>{item.title}</h3>
                                        <p className="text-secondary mb-0">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <Image
                                src="/img/img1.webp"
                                alt="Herrenhaarschnitt in Kassel"
                                width={900}
                                height={700}
                                className="img-fluid rounded-4"
                            />
                        </div>

                        <div className="col-md-6 mt-4 mt-md-0">
                            <h2>Herrenfriseur in Kassel-Wilhelmshöhe</h2>
                            <p className="text-secondary mt-3">
                                Unser Ziel ist ein Look, mit dem du dich im Alltag und zu besonderen
                                Anlässen wohlfühlst. Dabei achten wir nicht nur auf die Technik,
                                sondern auch auf Details, Symmetrie und ein stimmiges Gesamtbild.
                            </p>
                            <p className="text-secondary">
                                Wenn du einen Herrenfriseur in Kassel suchst, der Wert auf Qualität,
                                Stil und persönlichen Service legt, bist du bei uns richtig.
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


                <section className="text-center py-5 bg-dark text-white">
                    <h2>Bereit für deinen nächsten Haarschnitt?</h2>
                    <p className="mt-2">
                        Buche jetzt deinen Termin beim Herrenfriseur in Kassel.
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


                <section className="bg-light py-5">
                    <div className="container">
                        <h2 className="text-center mb-4">Häufige Fragen</h2>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <h3 style={{ fontSize: "1.2rem" }}>Benötige ich einen Termin?</h3>
                                <p className="text-secondary">
                                    Wir empfehlen eine Online-Buchung oder einen kurzen Anruf, damit wir
                                    deinen Termin optimal einplanen können.
                                </p>

                                <h3 style={{ fontSize: "1.2rem" }}>Bietet ihr auch klassische Herrenhaarschnitte an?</h3>
                                <p className="text-secondary">
                                    Ja, bei uns bekommst du sowohl klassische als auch moderne Herrenhaarschnitte.
                                </p>

                                <h3 style={{ fontSize: "1.2rem" }}>Wo liegt euer Salon?</h3>
                                <p className="text-secondary">
                                    Du findest uns in der Wilhelmshöher Allee 185 in 34121 Kassel.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
}