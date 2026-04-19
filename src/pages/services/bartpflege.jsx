import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Bartpflege() {
    return (
        <>
            <Head>
                <title>Bartpflege Kassel | Liva Hairdresser & Barber</title>
                <meta
                    name="description"
                    content="Bartpflege in Kassel-Wilhelmshöhe mit präzisem Bartschnitt, Konturen und gepflegtem Finish. Jetzt Termin bei Liva Hairdresser & Barber buchen."
                />
                <meta name="robots" content="index,follow" />
                <link rel="canonical" href="https://liva-salon.de/bartpflege" />
            </Head>

            <main>
                <section
                    className="d-flex align-items-center text-white position-relative"
                    style={{ minHeight: "90vh", background: "#111" }}
                >
                    <Image
                        src="/img/img1.webp"
                        alt="Bartpflege in Kassel bei Liva Hairdresser & Barber"
                        fill
                        style={{ objectFit: "cover", opacity: 0.4 }}
                        priority
                    />

                    <div className="container text-center position-relative">
                        <h1 style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", fontWeight: 700 }}>
                            Bartpflege in Kassel
                        </h1>

                        <p className="mt-3 mx-auto" style={{ maxWidth: 760 }}>
                            Präzise Bartpflege, saubere Konturen und ein gepflegter Look
                            für Herren in Kassel-Wilhelmshöhe.
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

                <section className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2>Professionelle Bartpflege und saubere Konturen</h2>
                            <p className="mt-3 text-secondary">
                                Ein gepflegter Bart braucht nicht nur die richtige Form, sondern auch
                                präzise Ausführung und ein stimmiges Gesamtbild. Bei Liva Hairdresser & Barber
                                in Kassel kümmern wir uns um Bartpflege mit Blick für Details.
                            </p>
                            <p className="text-secondary">
                                Ob kurzer Bart, Vollbart oder definierte Konturen – wir sorgen dafür,
                                dass dein Bart zu deinem Gesicht und deinem Stil passt.
                            </p>
                        </div>
                    </div>
                </section>

                <section id='information' className="bg-light py-5">
                    <div className="container">
                        <div className="row text-center mb-4">
                            <h2>Unsere Leistungen rund um Bartpflege</h2>
                        </div>

                        <div className="row g-4">
                            {[
                                {
                                    title: "Bart stutzen",
                                    text: "Sauberer Bartschnitt für eine gepflegte Form und ein ordentliches Finish.",
                                },
                                {
                                    title: "Konturen & Linien",
                                    text: "Präzise Konturen an Wangen, Hals und Übergängen für einen klaren Look.",
                                },
                                {
                                    title: "Bartpflege mit Beratung",
                                    text: "Individuelle Beratung zur passenden Form und Pflege für deinen Bartstil.",
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
                                src="/img/babershop-utils.webp"
                                alt="Bartpflege und Bartschnitt in Kassel"
                                width={900}
                                height={700}
                                className="img-fluid rounded-4"
                            />
                        </div>

                        <div className="col-md-6 mt-4 mt-md-0">
                            <h2>Bartpflege in Kassel-Wilhelmshöhe</h2>
                            <p className="text-secondary mt-3">
                                Eine gute Bartpflege macht den Unterschied zwischen ungepflegt und
                                stilvoll. Wir arbeiten sauber, individuell und abgestimmt auf deinen
                                Bartwuchs und deine gewünschte Form.
                            </p>
                            <p className="text-secondary">
                                Wenn du einen gepflegten Bart und professionelle Ausführung suchst,
                                bist du bei uns in Kassel genau richtig.
                            </p>

                            <Link
                                href="https://buchung.treatwell.de/ort/liva-hairdresser-barber/"
                                className="btn btn-dark mt-3"
                            >
                                Jetzt Bartpflege buchen
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="text-center py-5 bg-dark text-white">
                    <h2>Bereit für einen gepflegten Bart?</h2>
                    <p className="mt-2">
                        Buche jetzt deinen Termin für Bartpflege in Kassel.
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
                                <h3 style={{ fontSize: "1.2rem" }}>Bietet ihr reine Bartpflege an?</h3>
                                <p className="text-secondary">
                                    Ja, du kannst bei uns auch gezielt einen Termin für Bartpflege und Bartschnitt buchen.
                                </p>

                                <h3 style={{ fontSize: "1.2rem" }}>Wird auch auf die Gesichtsform geachtet?</h3>
                                <p className="text-secondary">
                                    Ja, wir beraten dich zur passenden Bartform und achten auf ein stimmiges Gesamtbild.
                                </p>

                                <h3 style={{ fontSize: "1.2rem" }}>Kann ich Bartpflege mit einem Haarschnitt kombinieren?</h3>
                                <p className="text-secondary">
                                    Ja, viele Kunden kombinieren Bartpflege mit einem Herrenhaarschnitt.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


            </main>
        </>
    );
}