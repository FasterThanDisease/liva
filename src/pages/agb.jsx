import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function AGB() {
    return (
        <>
            <Head>
                <title>AGB | Liva Hairdresser & Barber</title>
                <meta name="description" content="Allgemeine Geschäftsbedingungen von Liva Hairdresser & Barber." />
            </Head>

            <main className="container py-5">
                <h1>Allgemeine Geschäftsbedingungen (AGB)</h1>

                <h2>1. Geltungsbereich</h2>
                <p>
                    Diese Allgemeinen Geschäftsbedingungen gelten für alle Dienstleistungen
                    von Liva Hairdresser & Barber, insbesondere für Terminbuchungen,
                    Friseurdienstleistungen sowie Kontakt- und Newsletteranfragen über die Website.
                </p>

                <h2>2. Leistungen</h2>
                <p>
                    Wir bieten Friseur- und Barberdienstleistungen an. Der genaue Leistungsumfang ergibt sich
                    aus der jeweiligen Beschreibung auf der Website oder bei Terminbuchung.
                </p>

                <h2>3. Terminvereinbarung</h2>
                <p>
                    Termine können online oder telefonisch vereinbart werden. Mit der Buchung
                    kommt ein verbindlicher Termin zustande.
                </p>

                <h2>4. Terminabsagen</h2>
                <p>
                    Termine können bis spätestens 24 Stunden vorher kostenfrei storniert werden.
                    Bei kurzfristigen Absagen behalten wir uns vor, eine Ausfallpauschale zu berechnen.
                </p>

                <h2>5. Preise & Zahlung</h2>
                <p>
                    Es gelten die zum Zeitpunkt der Buchung angegebenen Preise. Die Zahlung erfolgt
                    in der Regel vor Ort im Salon.
                </p>

                <h2>6. Haftung</h2>
                <p>
                    Wir haften nur für Schäden, die auf vorsätzlichem oder grob fahrlässigem Verhalten beruhen.
                    Für allergische Reaktionen oder individuelle Unverträglichkeiten übernehmen wir keine Haftung,
                    sofern diese nicht bekannt waren.
                </p>

                <h2>7. Kontaktformular & Kommunikation</h2>
                <p>
                    Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren, erklären Sie sich damit
                    einverstanden, dass wir Ihre Angaben zur Bearbeitung Ihrer Anfrage verwenden.
                </p>
                <p>
                    Die Verarbeitung erfolgt gemäß unserer Datenschutzerklärung und dient ausschließlich
                    der Kommunikation und Bearbeitung Ihrer Anfrage.
                </p>

                <h2>8. Newsletter</h2>
                <p>
                    Wenn Sie sich für unseren Newsletter anmelden, verwenden wir Ihre E-Mail-Adresse,
                    um Ihnen Informationen zu unseren Dienstleistungen, Angeboten und Aktionen zuzusenden.
                </p>
                <p>
                    Die Anmeldung erfolgt im Double-Opt-In-Verfahren. Sie können den Newsletter jederzeit
                    über den Abmeldelink oder durch Mitteilung an uns abbestellen.
                </p>

                <h2>9. Datenschutz</h2>
                <p>
                    Informationen zur Verarbeitung personenbezogener Daten finden Sie in unserer{" "}
                    <Link href="/datenschutz">Datenschutzerklärung</Link>.
                </p>

                <h2>10. Schlussbestimmungen</h2>
                <p>
                    Es gilt das Recht der Bundesrepublik Deutschland. Sollten einzelne Bestimmungen
                    unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
                </p>

                <Link href="/" className="btn btn-dark mt-4">
                    Zurück zur Startseite
                </Link>
            </main>
        </>
    );
}