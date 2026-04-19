import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Widerruf() {
    return (
        <>
            <Head>
                <title>Widerrufsbelehrung | Liva Hairdresser & Barber</title>
                <meta name="description" content="Widerrufsbelehrung von Liva Hairdresser & Barber." />
            </Head>

            <main className="container py-5">
                <h1>Widerrufsbelehrung</h1>

                <h2>Widerrufsrecht</h2>
                <p>
                    Verbraucher haben grundsätzlich das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
                    einen Vertrag zu widerrufen.
                </p>

                <h2>Ausnahmen vom Widerrufsrecht</h2>
                <p>
                    Das Widerrufsrecht kann vorzeitig erlöschen bei Dienstleistungen, wenn:
                </p>
                <ul>
                    <li>die Dienstleistung zu einem bestimmten Termin erbracht wird</li>
                    <li>der Kunde ausdrücklich zugestimmt hat, dass die Leistung vor Ablauf der Widerrufsfrist beginnt</li>
                </ul>

                <p>
                    Bei gebuchten Friseurterminen, die zu einem festen Zeitpunkt stattfinden,
                    besteht daher in der Regel kein Widerrufsrecht gemäß § 312g Abs. 2 Nr. 9 BGB.
                </p>

                <h2>Widerrufsfrist</h2>
                <p>
                    Die Widerrufsfrist beträgt 14 Tage ab dem Tag des Vertragsabschlusses,
                    sofern kein Ausschlussgrund vorliegt.
                </p>

                <h2>Ausübung des Widerrufs</h2>
                <p>
                    Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer eindeutigen Erklärung
                    (z. B. per E-Mail) über Ihren Entschluss informieren.
                </p>

                <h2>Folgen des Widerrufs</h2>
                <p>
                    Wenn Sie diesen Vertrag widerrufen, erstatten wir Ihnen alle Zahlungen,
                    die wir von Ihnen erhalten haben, unverzüglich und spätestens binnen 14 Tagen.
                </p>

                <h2>Muster-Widerrufsformular</h2>
                <p>
                    (Wenn Sie den Vertrag widerrufen wollen, können Sie dieses Formular verwenden:)
                </p>

                <p>
                    An:<br />
                    Liva Hairdresser & Barber<br />
                    Wilhelmshöher Allee 185<br />
                    34121 Kassel<br />
                </p>

                <p>
                    Hiermit widerrufe ich den von mir abgeschlossenen Vertrag über die Erbringung
                    der folgenden Dienstleistung:
                </p>

                <p>
                    Datum: ____________ <br />
                    Name: ____________ <br />
                    Unterschrift: ____________
                </p>

                <Link href="/" className="btn btn-dark mt-4">
                    Zurück zur Startseite
                </Link>
            </main>
        </>
    );
}