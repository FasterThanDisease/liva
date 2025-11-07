import Link from "next/link"
import Head from "next/head"

export default function Impressum() {


    return (
        <main>
            <div className="container-fluid container-md">
                <div className="row justify-content-center align-items-center text-center">
                    <div className="col-12">
                        <h1 className="display-3 color1">Impressum / Kontakt</h1>
                        <div className="mb-5">
                            <h3> Angaben gemäß § 5 TMG </h3>

                            <span className="text-secondary" style={{ fontSize: '1.2em' }}>
                                Hasan Omar <br />
                                Liva Hairdresser & Barber<br />
                                Wilhelmshöhe Allee 185  <br />
                                34121 Kassel<br />
                            </span>
                        </div>

                        <div className="mb-5">
                            <h3>Kontakt </h3>
                            <span className="text-secondary" style={{ fontSize: '1.2em' }}> Telefon:  0561 34914</span><br />
                            <span className="text-secondary" style={{ fontSize: '1.2em' }}>

                                E-Mail: <Link href={'mailto:sher_2323@hotmail.com'}><span className="color1"><u>sher_2323@hotmail.com</u></span></Link>
                            </span>
                        </div>

                        <div className="mb-5">
                            <h3>Umsetzung</h3>
                            <Link href='https://novaesolutions.de'><span className="color1" style={{ fontSize: '1.2em' }}><u>Nova eSolutions</u></span></Link>
                        </div>

                        <div className="mb-5">
                            <h3>Umsatzsteuer-ID</h3>
                            <span className="text-secondary" style={{ fontSize: '1.2em' }}>
                                Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
                                DE363709339
                            </span>
                        </div>



                    </div>
                </div>
            </div>
        </main>
    )
}