import React from "react";
import Head from "next/head";
import Link from "next/link";

const privacyConfig = {
    companyName: "Liva Hairdresser & Barber",
    legalName: "Liva Hairdresser & Barber", // ggf. vollständige Firmenbezeichnung ergänzen
    ownerName: "Bitte ergänzen",
    street: "Wilhelmshöher Allee 185",
    zip: "34121",
    city: "Kassel",
    country: "Deutschland",
    email: "info@liva-salon.de", // anpassen
    phone: "+49 561 34914",
    websiteUrl: "https://liva-salon.de",

    // Datenschutzbeauftragter: nur ausfüllen, wenn tatsächlich benannt
    hasDpo: false,
    dpoName: "",
    dpoEmail: "",
    dpoAddress: "",

    // Hosting
    hosterName: "IONOS",
    hosterAddress: "https://www.ionos.de",
    hosterPrivacyText:
        "Mit dem Hosting-Anbieter besteht – soweit gesetzlich erforderlich – ein Vertrag über Auftragsverarbeitung gemäß Art. 28 DSGVO.",

    // Buchung
    bookingProviderName: "Treatwell",
    bookingUrl: "https://buchung.treatwell.de/ort/liva-hairdresser-barber/",

    // CMS / CDN
    cmsProviderName: "Contentful",
    cmsPurpose:
        "Auslieferung und Verwaltung redaktioneller Inhalte, insbesondere von Inhalten für die Website.",

    // Social / Drittinhalte
    instagramProfileUrl: "https://www.instagram.com/liva.hairdresser.barber/", // konkret ergänzen
    facebookProfileUrl: "",

    // Aufsicht
    supervisoryAuthority:
        "Der Hessische Beauftragte für Datenschutz und Informationsfreiheit, Gustav-Stresemann-Ring 1, 65189 Wiesbaden",

    lastUpdated: "19.04.2026",
};

const sectionStyle = {
    marginBottom: "2.5rem",
};

const h2Style = {
    fontSize: "2rem",
    fontWeight: 500,
    marginBottom: "1rem",
};

const h3Style = {
    fontSize: "1.25rem",
    fontWeight: 400,
    marginTop: "1.25rem",
    marginBottom: "0.75rem",
};

export default function DatenschutzPage() {
    return (
        <>
            <Head>
                <title>Datenschutzerklärung | {privacyConfig.companyName}</title>
                <meta
                    name="description"
                    content={`Datenschutzerklärung von ${privacyConfig.companyName} mit Informationen zur Verarbeitung personenbezogener Daten auf der Website.`}
                />
                <meta name="robots" content="index,follow" />
                <link rel="canonical" href={`${privacyConfig.websiteUrl}/datenschutz`} />
            </Head>

            <main className="bg-white text-dark">
                <section style={{ paddingTop: 80, paddingBottom: 80 }}>
                    <div className="container-fluid container-md">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-10">
                                <h1
                                    style={{
                                        fontSize: "clamp(2.2rem, 5vw, 4rem)",
                                        fontWeight: 800,
                                        marginBottom: "1rem",
                                    }}
                                >
                                    Datenschutzerklärung
                                </h1>

                                <p className="text-secondary" style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>
                                    Mit dieser Datenschutzerklärung informieren wir Sie darüber, welche personenbezogenen
                                    Daten wir beim Besuch unserer Website und im Zusammenhang mit den von uns angebotenen
                                    Leistungen verarbeiten. Personenbezogene Daten sind alle Informationen, die sich auf
                                    eine identifizierte oder identifizierbare natürliche Person beziehen.
                                </p>

                                <p className="text-secondary" style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>
                                    Wir verarbeiten personenbezogene Daten ausschließlich im Rahmen der geltenden
                                    datenschutzrechtlichen Vorschriften, insbesondere der Datenschutz-Grundverordnung
                                    (DSGVO) und der einschlägigen nationalen Datenschutzbestimmungen.
                                </p>

                                <p className="text-secondary" style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
                                    Stand: {privacyConfig.lastUpdated}
                                </p>

                                <section style={sectionStyle}>
                                    <h2 style={h2Style}>1. Verantwortlicher</h2>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Verantwortlicher im Sinne der DSGVO ist:
                                    </p>
                                    <p style={{ lineHeight: 1.8 }}>
                                        <strong>{privacyConfig.legalName}</strong>
                                        <br />
                                        {privacyConfig.ownerName !== "Bitte ergänzen" ? (
                                            <>
                                                Inhaber/in: {privacyConfig.ownerName}
                                                <br />
                                            </>
                                        ) : null}
                                        {privacyConfig.street}
                                        <br />
                                        {privacyConfig.zip} {privacyConfig.city}
                                        <br />
                                        {privacyConfig.country}
                                        <br />
                                        E-Mail:{" "}
                                        <a href={`mailto:${privacyConfig.email}`} className="text-decoration-none">
                                            {privacyConfig.email}
                                        </a>
                                        <br />
                                        Telefon:{" "}
                                        <a href={`tel:${privacyConfig.phone.replace(/\s+/g, "")}`} className="text-decoration-none">
                                            {privacyConfig.phone}
                                        </a>
                                    </p>

                                    {privacyConfig.hasDpo && (
                                        <>
                                            <h3 style={h3Style}>Datenschutzbeauftragte/r</h3>
                                            <p style={{ lineHeight: 1.8 }}>
                                                {privacyConfig.dpoName}
                                                <br />
                                                {privacyConfig.dpoAddress}
                                                <br />
                                                E-Mail:{" "}
                                                <a href={`mailto:${privacyConfig.dpoEmail}`} className="text-decoration-none">
                                                    {privacyConfig.dpoEmail}
                                                </a>
                                            </p>
                                        </>
                                    )}
                                </section>

                                <section style={sectionStyle}>
                                    <h2 style={h2Style}>2. Allgemeine Hinweise zur Datenverarbeitung</h2>

                                    <h3 style={h3Style}>Umfang der Verarbeitung</h3>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies
                                        zur Bereitstellung einer funktionsfähigen Website, zur Darstellung unserer Inhalte,
                                        zur Bearbeitung von Anfragen, zur Terminvermittlung sowie zur Gewährleistung der
                                        Sicherheit und Stabilität unseres Online-Angebots erforderlich ist.
                                    </p>

                                    <h3 style={h3Style}>Rechtsgrundlagen</h3>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Soweit wir für Verarbeitungsvorgänge eine Einwilligung der betroffenen Person einholen,
                                        ist Art. 6 Abs. 1 lit. a DSGVO Rechtsgrundlage. Soweit die Verarbeitung zur Erfüllung
                                        eines Vertrags oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist,
                                        erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO. Soweit eine
                                        Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist, beruht sie
                                        auf Art. 6 Abs. 1 lit. c DSGVO. Soweit die Verarbeitung zur Wahrung berechtigter
                                        Interessen unseres Unternehmens oder eines Dritten erforderlich ist und keine
                                        überwiegenden Interessen, Grundrechte oder Grundfreiheiten der betroffenen Person
                                        entgegenstehen, erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                                    </p>

                                    <h3 style={h3Style}>Speicherdauer</h3>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Personenbezogene Daten werden gelöscht, sobald der Zweck der Speicherung entfällt,
                                        sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen oder eine weitere
                                        Speicherung zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
                                        erforderlich ist.
                                    </p>

                                    <h3 style={h3Style}>Empfänger</h3>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Innerhalb unseres Unternehmens erhalten nur diejenigen Stellen Zugriff auf Ihre Daten,
                                        die diese zur Erfüllung der genannten Zwecke benötigen. Darüber hinaus setzen wir
                                        externe Dienstleister ein, beispielsweise für Hosting, technische Bereitstellung von
                                        Inhalten, Terminbuchung oder die Einbindung externer Dienste. Diese Dienstleister
                                        werden – soweit erforderlich – auf Grundlage eines Vertrags über Auftragsverarbeitung
                                        gemäß Art. 28 DSGVO eingesetzt oder handeln als eigenständig Verantwortliche.
                                    </p>
                                </section>

                                <section style={sectionStyle}>
                                    <h2 style={h2Style}>3. Bereitstellung der Website und Server-Logfiles</h2>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Bei jedem Aufruf unserer Website erfasst unser Webserver bzw. der Hosting-Anbieter
                                        automatisiert Informationen, die Ihr Browser an unseren Server übermittelt. Dies sind
                                        insbesondere:
                                    </p>
                                    <ul style={{ lineHeight: 1.9 }}>
                                        <li>IP-Adresse des anfragenden Geräts</li>
                                        <li>Datum und Uhrzeit des Zugriffs</li>
                                        <li>Name und URL der abgerufenen Datei</li>
                                        <li>Website, von der aus der Zugriff erfolgt (Referrer-URL), sofern übermittelt</li>
                                        <li>verwendeter Browser und ggf. das Betriebssystem Ihres Endgeräts</li>
                                        <li>Statuscodes und übertragene Datenmengen</li>
                                        <li>technische Informationen zur Stabilität und Sicherheit der Verbindung</li>
                                    </ul>

                                    <p style={{ lineHeight: 1.8 }}>
                                        Die Verarbeitung dieser Daten erfolgt, um die Website technisch bereitzustellen, die
                                        Systemsicherheit und -stabilität zu gewährleisten, Missbrauch zu erkennen und
                                        erforderlichenfalls zu verfolgen sowie die technische Administration zu ermöglichen.
                                    </p>

                                    <p style={{ lineHeight: 1.8 }}>
                                        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in
                                        der sicheren, stabilen und ordnungsgemäßen Bereitstellung unseres Online-Angebots.
                                    </p>

                                    <p style={{ lineHeight: 1.8 }}>
                                        Hosting-Anbieter:
                                        <br />
                                        <strong>{privacyConfig.hosterName}</strong>
                                        <br />
                                        {privacyConfig.hosterAddress}
                                    </p>

                                    <p style={{ lineHeight: 1.8 }}>{privacyConfig.hosterPrivacyText}</p>
                                </section>

                                <section style={sectionStyle}>
                                    <h2 style={h2Style}>4. Kontaktaufnahme per E-Mail oder Telefon</h2>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Wenn Sie uns per E-Mail oder telefonisch kontaktieren, verarbeiten wir die von Ihnen
                                        mitgeteilten Daten, insbesondere Ihren Namen, Ihre Kontaktdaten und den Inhalt Ihrer
                                        Anfrage, um Ihr Anliegen zu bearbeiten.
                                    </p>

                                    <p style={{ lineHeight: 1.8 }}>
                                        Die Verarbeitung erfolgt zur Durchführung vorvertraglicher Maßnahmen oder zur Erfüllung
                                        eines Vertrags gemäß Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage hierauf gerichtet
                                        ist. In anderen Fällen erfolgt die Verarbeitung auf Grundlage unseres berechtigten
                                        Interesses an einer sachgerechten Bearbeitung von Kontaktanfragen gemäß Art. 6 Abs. 1
                                        lit. f DSGVO.
                                    </p>

                                    <p style={{ lineHeight: 1.8 }}>
                                        Die Daten werden gelöscht, sobald Ihre Anfrage abschließend bearbeitet wurde und keine
                                        gesetzlichen Aufbewahrungspflichten oder berechtigten Interessen an einer weiteren
                                        Speicherung entgegenstehen.
                                    </p>
                                </section>

                                <section style={sectionStyle}>
                                    <h2 style={h2Style}>5. Externe Online-Terminbuchung</h2>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Auf unserer Website verlinken wir auf das externe Buchungssystem{" "}
                                        <strong>{privacyConfig.bookingProviderName}</strong>, über das Termine online gebucht
                                        werden können. Wenn Sie auf den Buchungslink klicken, verlassen Sie unsere Website und
                                        werden auf die Seiten des jeweiligen Anbieters weitergeleitet.
                                    </p>

                                    <p style={{ lineHeight: 1.8 }}>
                                        Ab dem Zeitpunkt des Aufrufs der externen Buchungsseite ist der jeweilige Anbieter für
                                        die dortige Datenverarbeitung grundsätzlich selbst verantwortlich. Bitte beachten Sie
                                        die Datenschutzinformationen des Buchungsanbieters.
                                    </p>

                                    <p style={{ lineHeight: 1.8 }}>
                                        Soweit wir auf unserer Website lediglich einen Link zur Buchungsseite bereitstellen,
                                        verarbeiten wir im Zusammenhang mit dem Klick nur die technisch erforderlichen
                                        Zugriffsdaten im Rahmen der Bereitstellung unserer Website. Rechtsgrundlage hierfür ist
                                        Art. 6 Abs. 1 lit. f DSGVO.
                                    </p>

                                    <p style={{ lineHeight: 1.8 }}>
                                        Buchungslink:{" "}
                                        <a href={privacyConfig.bookingUrl} target="_blank" rel="noopener noreferrer">
                                            {privacyConfig.bookingUrl}
                                        </a>
                                    </p>
                                </section>

                                <section style={sectionStyle}>
                                    <h2 style={h2Style}>6. Content-Management und Content Delivery über {privacyConfig.cmsProviderName}</h2>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Für die Verwaltung und Auslieferung einzelner Inhalte unserer Website nutzen wir{" "}
                                        <strong>{privacyConfig.cmsProviderName}</strong>. Dabei können bei dem Abruf von
                                        Inhalten technisch erforderliche Daten, insbesondere IP-Adresse, Zeitpunkt des Abrufs
                                        sowie geräte- und browserbezogene Informationen, verarbeitet werden.
                                    </p>

                                    <p style={{ lineHeight: 1.8 }}>
                                        Zweck der Verarbeitung ist die zuverlässige, performante und sichere Bereitstellung der
                                        auf unserer Website eingebundenen Inhalte. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
                                        DSGVO. Unser berechtigtes Interesse liegt in einer effizienten und technisch stabilen
                                        Auslieferung unserer Inhalte.
                                    </p>

                                    <p style={{ lineHeight: 1.8 }}>
                                        {privacyConfig.cmsPurpose}
                                    </p>

                                    <p style={{ lineHeight: 1.8 }}>
                                        Sofern personenbezogene Daten in Staaten außerhalb der Europäischen Union bzw. des
                                        Europäischen Wirtschaftsraums übermittelt werden, erfolgt dies nur auf Grundlage einer
                                        geeigneten Rechtsgrundlage, insbesondere eines Angemessenheitsbeschlusses oder
                                        geeigneter Garantien wie Standardvertragsklauseln, soweit erforderlich.
                                    </p>
                                </section>

                                <section style={sectionStyle}>
                                    <h2 style={h2Style}>7. Einbindung von Google Maps</h2>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Auf unserer Website kann Kartenmaterial des Dienstes Google Maps eingebunden sein. Der
                                        Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
                                        Durch die Nutzung von Google Maps können personenbezogene Daten, insbesondere Ihre
                                        IP-Adresse sowie Nutzungs- und Gerätedaten, an Google übermittelt werden.
                                    </p>

                                    <p style={{ lineHeight: 1.8 }}>
                                        Die Einbindung dient dazu, unseren Standort anschaulich darzustellen und Ihnen die
                                        Anfahrt zu erleichtern.
                                    </p>

                                    <p style={{ lineHeight: 1.8 }}>
                                        Soweit Google Maps nicht rein technisch erforderlich ist, sollte die Einbindung erst
                                        nach Ihrer Einwilligung erfolgen. Rechtsgrundlage ist dann Art. 6 Abs. 1 lit. a DSGVO
                                        in Verbindung mit den einschlägigen Vorschriften zum Schutz der Privatsphäre auf
                                        Endeinrichtungen. Sofern Google Maps bereits beim Laden der Seite aktiviert wird, ist
                                        sicherzustellen, dass zuvor eine wirksame Einwilligung eingeholt wurde.
                                    </p>

                                    <p style={{ lineHeight: 1.8 }}>
                                        Es kann nicht ausgeschlossen werden, dass Daten auch an Server von Google in den USA
                                        übermittelt werden. Weitere Informationen finden Sie in den Datenschutzinformationen von
                                        Google.
                                    </p>
                                </section>

                                <section style={sectionStyle}>
                                    <h2 style={h2Style}>8. Einbindung von Instagram-Inhalten</h2>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Auf unserer Website können Inhalte von Instagram, etwa eingebettete Beiträge oder
                                        sonstige Social-Media-Elemente, angezeigt werden. Anbieter ist Meta Platforms Ireland
                                        Limited, Merrion Road, Dublin 4, D04 X2K5, Irland.
                                    </p>

                                    <p style={{ lineHeight: 1.8 }}>
                                        Bereits beim Laden eines eingebetteten Instagram-Inhalts können personenbezogene Daten,
                                        insbesondere Ihre IP-Adresse, technische Geräteinformationen, Browserinformationen und
                                        Nutzungsdaten, an Meta übermittelt werden. Dies kann auch dann erfolgen, wenn Sie kein
                                        Instagram-Konto besitzen oder dort nicht eingeloggt sind.
                                    </p>

                                    <p style={{ lineHeight: 1.8 }}>
                                        Die Einbindung von Instagram-Inhalten ist datenschutzrechtlich regelmäßig nur auf
                                        Grundlage Ihrer Einwilligung zulässig, soweit die Inhalte nicht technisch zwingend
                                        erforderlich sind. Rechtsgrundlage ist daher grundsätzlich Art. 6 Abs. 1 lit. a DSGVO.
                                        Wenn Sie Instagram-Inhalte auf Ihrer Website einsetzen, sollten diese erst nach einer
                                        ausdrücklichen Einwilligung geladen werden.
                                    </p>

                                    <p style={{ lineHeight: 1.8 }}>
                                        Weitere Informationen zur Datenverarbeitung durch Meta/Instagram finden Sie in den
                                        Datenschutzbestimmungen des Anbieters.
                                    </p>
                                </section>

                                <section style={sectionStyle}>
                                    <h2 style={h2Style}>9. Links zu unseren Social-Media-Profilen</h2>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Auf unserer Website können Links zu unseren Profilen in sozialen Netzwerken enthalten
                                        sein, beispielsweise zu Instagram oder Facebook. Wenn Sie einen solchen Link anklicken,
                                        verlassen Sie unsere Website und wechseln zum Angebot des jeweiligen Anbieters. Ab
                                        diesem Zeitpunkt ist der jeweilige Anbieter für die Verarbeitung personenbezogener Daten
                                        verantwortlich.
                                    </p>

                                    <p style={{ lineHeight: 1.8 }}>
                                        Sofern es sich lediglich um einfache Verlinkungen handelt, werden durch die bloße
                                        Anzeige der Links auf unserer Website noch keine Daten an die jeweiligen Anbieter
                                        übertragen.
                                    </p>

                                    {privacyConfig.instagramProfileUrl ? (
                                        <p style={{ lineHeight: 1.8 }}>
                                            Instagram:{" "}
                                            <a
                                                href={privacyConfig.instagramProfileUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {privacyConfig.instagramProfileUrl}
                                            </a>
                                        </p>
                                    ) : null}

                                    {privacyConfig.facebookProfileUrl ? (
                                        <p style={{ lineHeight: 1.8 }}>
                                            Facebook:{" "}
                                            <a
                                                href={privacyConfig.facebookProfileUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {privacyConfig.facebookProfileUrl}
                                            </a>
                                        </p>
                                    ) : null}
                                </section>

                                <section style={sectionStyle}>
                                    <h2 style={h2Style}>10. Cookies, Local Storage und Einwilligungsmanagement</h2>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Unsere Website kann technisch erforderliche Speicher- und Zugriffsvorgänge auf Ihrem
                                        Endgerät nutzen, um grundlegende Funktionen der Website bereitzustellen. Darüber hinaus
                                        können – je nach eingesetzten Diensten – weitere Informationen in Ihrem Endgerät
                                        gespeichert oder von dort ausgelesen werden, etwa im Zusammenhang mit Karten,
                                        Social-Media-Einbindungen oder sonstigen Drittinhalten.
                                    </p>

                                    <p style={{ lineHeight: 1.8 }}>
                                        Soweit solche Vorgänge nicht unbedingt erforderlich sind, erfolgen sie nur auf Grundlage
                                        Ihrer Einwilligung. Die Einwilligung können Sie jederzeit mit Wirkung für die Zukunft
                                        widerrufen. Ein Widerruf berührt die Rechtmäßigkeit der bis zum Widerruf erfolgten
                                        Verarbeitung nicht.
                                    </p>

                                    <p style={{ lineHeight: 1.8 }}>
                                        Sofern Sie ein Consent-Tool einsetzen, können Sie Ihre Auswahl über dieses Tool
                                        anpassen. Wenn Ihre Website derzeit Drittinhalte bereits ohne vorgeschaltete
                                        Einwilligung lädt, sollte dies technisch angepasst werden.
                                    </p>
                                </section>

                                <section style={sectionStyle}>
                                    <h2 style={h2Style}>11. Google Fonts</h2>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Sofern auf unserer Website Schriftarten von Google Fonts verwendet werden, kann beim
                                        Abruf der Schriftarten eine Verbindung zu Servern von Google aufgebaut werden. Dabei
                                        kann insbesondere Ihre IP-Adresse an Google übermittelt werden.
                                    </p>

                                    <p style={{ lineHeight: 1.8 }}>
                                        Wenn Google Fonts lokal auf unserem eigenen Server eingebunden sind, findet keine
                                        Verbindung zu Servern von Google zum Zweck des Schriftartenabrufs statt.
                                    </p>

                                    <p style={{ lineHeight: 1.8 }}>
                                        Bitte prüfen Sie daher technisch, ob Google Fonts auf Ihrer Website extern oder lokal
                                        eingebunden sind, und passen Sie diese Datenschutzerklärung entsprechend an. Bei einer
                                        externen Einbindung sollte die Verarbeitung nur auf einer geeigneten Rechtsgrundlage
                                        erfolgen.
                                    </p>
                                </section>

                                <section style={sectionStyle}>
                                    <h2 style={h2Style}>12. Datenübermittlung in Drittländer</h2>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Soweit wir Dienste von Anbietern mit Sitz in Staaten außerhalb der Europäischen Union
                                        bzw. des Europäischen Wirtschaftsraums nutzen oder Daten in diese Staaten übermittelt
                                        werden, erfolgt dies nur im Rahmen der gesetzlichen Zulässigkeit. Soweit kein
                                        Angemessenheitsbeschluss der Europäischen Kommission vorliegt, erfolgt eine
                                        Datenübermittlung in Drittländer grundsätzlich nur bei Vorliegen geeigneter Garantien,
                                        insbesondere Standardvertragsklauseln, oder auf Grundlage Ihrer ausdrücklichen
                                        Einwilligung.
                                    </p>

                                    <p style={{ lineHeight: 1.8 }}>
                                        Bitte beachten Sie, dass in Drittländern unter Umständen kein mit der EU vergleichbares
                                        Datenschutzniveau besteht und insbesondere Zugriffe staatlicher Stellen nicht
                                        ausgeschlossen werden können.
                                    </p>
                                </section>

                                <section style={sectionStyle}>
                                    <h2 style={h2Style}>13. Speicherdauer</h2>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Wir speichern personenbezogene Daten nur so lange, wie dies für die jeweiligen Zwecke
                                        erforderlich ist. Darüber hinaus speichern wir Daten, wenn und soweit wir hierzu
                                        gesetzlich verpflichtet sind, beispielsweise aufgrund handels- oder steuerrechtlicher
                                        Aufbewahrungspflichten, oder wenn wir die Daten zur Geltendmachung, Ausübung oder
                                        Verteidigung von Rechtsansprüchen benötigen.
                                    </p>

                                    <p style={{ lineHeight: 1.8 }}>
                                        Server-Logfiles werden in der Regel nur für einen begrenzten Zeitraum gespeichert,
                                        soweit dies zur Gewährleistung der Sicherheit, Stabilität und Missbrauchsabwehr
                                        erforderlich ist. Kommunikationsdaten aus Anfragen speichern wir nur solange, wie dies
                                        zur Bearbeitung des jeweiligen Anliegens erforderlich ist oder gesetzliche
                                        Aufbewahrungspflichten bestehen.
                                    </p>
                                </section>

                                <section style={sectionStyle}>
                                    <h2 style={h2Style}>14. Ihre Rechte als betroffene Person</h2>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Sie haben nach Maßgabe der gesetzlichen Vorschriften insbesondere folgende Rechte:
                                    </p>

                                    <ul style={{ lineHeight: 1.9 }}>
                                        <li>Recht auf Auskunft über die von uns verarbeiteten personenbezogenen Daten</li>
                                        <li>Recht auf Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten</li>
                                        <li>Recht auf Löschung Ihrer personenbezogenen Daten</li>
                                        <li>Recht auf Einschränkung der Verarbeitung</li>
                                        <li>Recht auf Datenübertragbarkeit</li>
                                        <li>Recht auf Widerspruch gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO</li>
                                        <li>Recht auf Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft</li>
                                        <li>Recht auf Beschwerde bei einer Datenschutzaufsichtsbehörde</li>
                                    </ul>

                                    <p style={{ lineHeight: 1.8 }}>
                                        Zur Ausübung Ihrer Rechte können Sie sich jederzeit an uns unter den oben genannten
                                        Kontaktdaten wenden.
                                    </p>
                                </section>

                                <section style={sectionStyle}>
                                    <h2 style={h2Style}>15. Widerspruchsrecht nach Art. 21 DSGVO</h2>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Soweit wir Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß
                                        Art. 6 Abs. 1 lit. f DSGVO verarbeiten, haben Sie das Recht, aus Gründen, die sich aus
                                        Ihrer besonderen Situation ergeben, jederzeit Widerspruch gegen die Verarbeitung Ihrer
                                        personenbezogenen Daten einzulegen.
                                    </p>

                                    <p style={{ lineHeight: 1.8 }}>
                                        Legen Sie Widerspruch ein, verarbeiten wir Ihre betroffenen personenbezogenen Daten
                                        nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung
                                        nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die
                                        Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
                                    </p>
                                </section>

                                <section style={sectionStyle}>
                                    <h2 style={h2Style}>16. Beschwerderecht bei einer Aufsichtsbehörde</h2>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Sie haben unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher
                                        Rechtsbehelfe das Recht, sich bei einer Datenschutzaufsichtsbehörde über die
                                        Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
                                    </p>

                                    <p style={{ lineHeight: 1.8 }}>
                                        Zuständig ist insbesondere:
                                        <br />
                                        {privacyConfig.supervisoryAuthority}
                                    </p>
                                </section>

                                <section style={sectionStyle}>
                                    <h2 style={h2Style}>17. Datensicherheit</h2>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Wir treffen geeignete technische und organisatorische Maßnahmen, um Ihre Daten gegen
                                        Verlust, Zerstörung, Manipulation und unberechtigten Zugriff zu schützen. Unsere
                                        Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend
                                        verbessert.
                                    </p>

                                    <p style={{ lineHeight: 1.8 }}>
                                        Diese Website nutzt eine verschlüsselte Verbindung, soweit dies technisch bereitgestellt
                                        ist. Sie erkennen eine verschlüsselte Verbindung in der Regel an der Zeichenfolge
                                        „https://“ in der Adresszeile Ihres Browsers.
                                    </p>
                                </section>

                                <section style={sectionStyle}>
                                    <h2 style={h2Style}>18. Änderungen dieser Datenschutzerklärung</h2>
                                    <p style={{ lineHeight: 1.8 }}>
                                        Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den
                                        aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in
                                        der Datenschutzerklärung umzusetzen, beispielsweise bei der Einführung neuer Services.
                                        Für Ihren erneuten Besuch gilt dann die jeweils aktuelle Datenschutzerklärung.
                                    </p>
                                </section>

                                <section style={{ marginTop: "3rem" }}>
                                    <div className="d-flex flex-wrap gap-3">
                                        <Link href="/" className="btn btn-dark">
                                            Zur Startseite
                                        </Link>
                                        <a href={`mailto:${privacyConfig.email}`} className="btn btn-outline-dark">
                                            Datenschutz anfragen
                                        </a>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}