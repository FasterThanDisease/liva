import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
    return (
        <>
            <Head>
                <title>404 – Seite nicht gefunden | Liva Hairdresser & Barber</title>
                <meta
                    name="description"
                    content="Die angeforderte Seite wurde nicht gefunden. Zurück zur Startseite von Liva Hairdresser & Barber in Kassel."
                />
                <meta name="robots" content="noindex,follow" />
                <link rel="canonical" href="https://liva-salon.de/404" />
            </Head>

            <main
                className="d-flex align-items-center justify-content-center text-center"
                style={{
                    minHeight: "100vh",
                    padding: "40px 20px",
                    background: "#111",
                    color: "white",
                }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-8">
                            <span
                                className="d-inline-block mb-3"
                                style={{
                                    fontSize: "1rem",
                                    letterSpacing: "0.2em",
                                    textTransform: "uppercase",
                                    opacity: 0.8,
                                }}
                            >
                                Fehler 404
                            </span>

                            <h1
                                style={{
                                    fontSize: "clamp(2.5rem, 7vw, 5rem)",
                                    fontWeight: 700,
                                    marginBottom: "1rem",
                                }}
                            >
                                Diese Seite wurde nicht gefunden
                            </h1>

                            <p
                                className="mx-auto"
                                style={{
                                    maxWidth: "700px",
                                    fontSize: "1.1rem",
                                    lineHeight: 1.7,
                                    opacity: 0.9,
                                }}
                            >
                                Die von dir aufgerufene Seite existiert nicht mehr, wurde verschoben
                                oder die Adresse wurde falsch eingegeben.
                            </p>

                            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mt-4">
                                <Link
                                    href="/"
                                    className="btn btn-color1"
                                    style={{
                                        letterSpacing: "1px",
                                        padding: "12px 24px",
                                        textDecoration: "none",
                                    }}
                                >
                                    Zur Startseite
                                </Link>

                                <Link
                                    href="/#kontakt"
                                    className="btn btn-outline-light"
                                    style={{
                                        letterSpacing: "1px",
                                        padding: "12px 24px",
                                        textDecoration: "none",
                                    }}
                                >
                                    Kontakt aufnehmen
                                </Link>
                            </div>

                            <div className="mt-5" style={{ opacity: 0.75 }}>
                                <p className="mb-2">
                                    Beliebte Seiten:
                                </p>
                                <div className="d-flex flex-wrap justify-content-center gap-3">
                                    <Link href="/" className="text-white">
                                        Startseite
                                    </Link>
                                    <Link href="/frauen" className="text-white">
                                        Damen
                                    </Link>
                                    <Link href="/datenschutz" className="text-white">
                                        Datenschutz
                                    </Link>
                                    <Link href="/agb" className="text-white">
                                        AGB
                                    </Link>
                                    <Link href="/widerruf" className="text-white">
                                        Widerrufsbelehrung
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}