import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Kinder() {
    return (
        <>
            <Head>
                <title>Kinderfriseur Kassel | Liva Hairdresser & Barber</title>
                <meta
                    name="description"
                    content="Kinderfriseur in Kassel-Wilhelmshöhe mit entspannter Atmosphäre, kostenfreien Getränken und Kinderspielzeug. Jetzt Termin bei Liva Hairdresser & Barber buchen."
                />
                <meta name="robots" content="index,follow" />
                <link rel="canonical" href="https://liva-salon.de/kinder" />
            </Head>

            <main>
                <section
                    className="d-flex align-items-center text-white position-relative"
                    style={{ minHeight: "90vh", background: "#111" }}
                >
                    <Image
                        src="/img/salon.webp"
                        alt="Kinderfriseur in Kassel bei Liva Hairdresser & Barber"
                        fill
                        style={{ objectFit: "cover", opacity: 0.4 }}
                        priority
                    />

                    <div className="container text-center position-relative">
                        <h1 style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", fontWeight: 700 }}>
                            Kinderfriseur in Kassel
                        </h1>

                        <p className="mt-3 mx-auto" style={{ maxWidth: 780 }}>
                            Kinderhaarschnitte in entspannter Atmosphäre – mit kostenfreien Getränken
                            und Kinderspielzeug für einen angenehmen Besuch.
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
                            <h2>Kinderhaarschnitte mit Ruhe und Geduld</h2>
                            <p className="mt-3 text-secondary">
                                Ein Friseurbesuch mit Kindern soll so angenehm wie möglich sein.
                                Deshalb legen wir bei Liva Hairdresser & Barber Wert auf eine
                                freundliche, entspannte Atmosphäre und einen geduldigen Umgang.
                            </p>
                            <p className="text-secondary">
                                Für Familien bieten wir in unserem Salon in Kassel-Wilhelmshöhe
                                kostenfreie Getränke und Kinderspielzeug an, damit sich Kinder
                                und Eltern während des Besuchs wohlfühlen können.
                            </p>
                        </div>
                    </div>
                </section>

                <section id="information" className="bg-light py-5">
                    <div className="container">
                        <div className="row text-center mb-4">
                            <h2>Was Eltern und Kinder bei uns erwartet</h2>
                        </div>

                        <div className="row g-4">
                            {[
                                {
                                    title: "Kinderfreundliche Atmosphäre",
                                    text: "Wir nehmen uns Zeit und sorgen für einen ruhigen, angenehmen Friseurbesuch.",
                                },
                                {
                                    title: "Kostenfreie Getränke",
                                    text: "Während des Termins stehen kostenfreie Getränke für einen entspannten Aufenthalt bereit.",
                                },
                                {
                                    title: "Kinderspielzeug im Salon",
                                    text: "Spielzeug hilft dabei, die Wartezeit angenehmer zu gestalten und den Besuch aufzulockern.",
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
                                src="/img/img3.webp"
                                alt="Kinderhaarschnitt in Kassel"
                                width={900}
                                height={700}
                                className="img-fluid rounded-4"
                            />
                        </div>

                        <div className="col-md-6 mt-4 mt-md-0">
                            <h2>Familienfreundlicher Friseurbesuch in Kassel-Wilhelmshöhe</h2>
                            <p className="text-secondary mt-3">
                                Gerade bei Kindern ist ein angenehmes Umfeld besonders wichtig.
                                Deshalb möchten wir den Besuch im Salon so unkompliziert und entspannt
                                wie möglich gestalten.
                            </p>
                            <p className="text-secondary">
                                Wenn du einen Kinderfriseur in Kassel suchst, bei dem nicht nur der
                                Haarschnitt, sondern auch die Atmosphäre stimmt, bist du bei uns richtig.
                            </p>

                            <Link
                                href="https://buchung.treatwell.de/ort/liva-hairdresser-barber/"
                                className="btn btn-dark mt-3"
                            >
                                Termin für Kinder buchen
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="text-center py-5 bg-dark text-white">
                    <h2>Kinderhaarschnitt in angenehmer Atmosphäre</h2>
                    <p className="mt-2">
                        Jetzt Termin beim Kinderfriseur in Kassel vereinbaren.
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
                                <h3 style={{ fontSize: "1.2rem" }}>Gibt es bei euch Kinderhaarschnitte?</h3>
                                <p className="text-secondary">
                                    Ja, wir bieten Kinderhaarschnitte in einer entspannten und freundlichen Umgebung an.
                                </p>

                                <h3 style={{ fontSize: "1.2rem" }}>Gibt es etwas für Kinder während des Besuchs?</h3>
                                <p className="text-secondary">
                                    Ja, bei uns gibt es Kinderspielzeug und kostenfreie Getränke, damit der Besuch angenehmer wird.
                                </p>

                                <h3 style={{ fontSize: "1.2rem" }}>Ist eine Terminbuchung sinnvoll?</h3>
                                <p className="text-secondary">
                                    Ja, wir empfehlen einen Termin, damit wir ausreichend Zeit für den Besuch einplanen können.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


            </main>
        </>
    );
}