import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Footer() {
    const language = 'de'
    return (
        <footer className='bg-dark text-white' style={{ minHeight: 300 }}>
            <div className="container" style={{}}>
                <div className="row justify-content-start mb-2 p-0">
                    <div className="col-12 py-md-5 d-flex justify-content-start  p-0">
                        <div className="d-flex justify-content-start align-items-center p-0">

                            <Image src='/logo.webp' alt='Liva Hairdress Logo' loading='lazy' width={313} height={188} style={{ objectFit: 'cover', objectPosition: 'center center' }} />
                        </div>
                    </div>
                </div>

                <div className="row justify-content-start justify-content-xl-start  ">
                    <div className="col-12 col-md-3 ">
                        <h3><b>Links</b></h3>
                        <ul style={{ listStyle: "none", padding: 0 }}>
                            <li className="pointer text-dark"  ><Link className='text-white' style={{ textDecoration: 'none' }} href='/kontakt'><span className='hover-border pointer'>Kontakt</span></Link></li>
                            <li className="pointer text-dark"  ><Link className='text-white' style={{ textDecoration: 'none' }} href='/about'><span className='hover-border pointer'>Über uns</span></Link></li>
                            {/* <li className="pointer text-dark"  ><Link className='text-white' style={{ textDecoration: 'none' }} href='/ablauf'><span className='hover-border pointer'>So funktioniert es</span></Link></li>
                            <li className="pointer" ><Link className='text-white' style={{ textDecoration: 'none' }} href='/faq' ><span className='hover-border pointer'>FAQ</span></Link> </li> */}

                        </ul>
                    </div>
                    {/* <div className='col-12 col-md-6 col-xl-4'>

                        <h3><b>Dienstleistungen</b></h3>
                        <ul style={{ listStyle: "none", padding: 0 }}>
                            <li className='pointer' ><Link className='text-white' href='/cleaning' style={{ textDecoration: 'none' }}><span className='hover-border pointer'>Photovoltaik</span></Link></li>
                            <li className="pointer" ><Link className='text-white' href="/hausmeister" style={{ textDecoration: 'none' }}><span className='hover-border pointer'>Balkonkraftwerk</span></Link> </li>
                            <li className="pointer" ><Link className='text-white' href="/winterdienst" style={{ textDecoration: 'none' }}><span className='hover-border pointer'>Wallbox</span></Link> </li>
                            <li className="pointer" ><Link className='text-white' href="/winterdienst" style={{ textDecoration: 'none' }}><span className='hover-border pointer'>Batteriespeicher</span></Link> </li>
                            <li className="pointer" ><Link className='text-white' href="/winterdienst" style={{ textDecoration: 'none' }}><span className='hover-border pointer'>Klimaanlage</span></Link> </li>
                            <li className="pointer" ><Link className='text-white' href="/winterdienst" style={{ textDecoration: 'none' }}><span className='hover-border pointer'>Wartung & Service</span></Link> </li>
                        </ul>
                    </div> */}

                    <div className='col-12 col-md-3 '>

                        <h3><b>Kontakt</b></h3>
                        <ul style={{ listStyle: "none", padding: 0 }}>
                            <li className="pointer" ><Link className='text-white' href="mailto:sher_2323@hotmail.com" style={{ textDecoration: 'none' }}><span className='hover-border pointer'>sher_2323@hotmail.com</span></Link> </li>
                            <li className="pointer" ><span className='hover-border pointer'>Wilhelmshöher Allee 185</span> </li>
                            <li className="pointer mt-5" ><Link className='text-white' href="tel:+4956134914" style={{ textDecoration: 'none' }}><span className='hover-border pointer' >(+49) 561 349 14</span></Link> </li>
                            <li className="pointer" ><span className='hover-border pointer'>Di-Sa, 9.00-19:00 Uhr</span> </li>
                            <li className="pointer mt-3" ><span className='hover-border pointer'>Oder über unser <Link href={'/kontakt'} className='text-white fw-bold' style={{ textDecoration: 'underline' }}>Kontaktformular</Link></span> </li>


                        </ul>
                    </div>
                </div>


            </div>
            <div className='container-fluid py-3  '>
                <div className="row">

                    <hr />

                    <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-start justify-content-md-between w-100">
                        <span className="text-center text-md-start" style={{ flex: 1, fontWeight: 300, fontSize: 12 }}>
                            {`Copyright © ${new Date().getFullYear()} Liva Hairdress | Wilhelmshöher Allee 185, 34121 Kassel, Germany`}
                        </span>
                        <div className="d-flex flex-wrap justify-content-center justify-content-md-end align-items-start   " style={{ fontSize: 12, fontWeight: 300, flex: 1 }}>
                            <Link className='text-white px-2' style={{ textDecoration: 'none' }} href='/agb'><span className="me-2 pointer" >{language === 'de' ? 'AGB' : 'Terms of use'}</span></Link>
                            <span className="me-2">|</span>
                            <Link className='text-white px-2' style={{ textDecoration: 'none' }} href='/impressum'><span className="me-2 pointer" >{language === 'de' ? 'Impressum' : 'Imprint'}</span></Link>
                            <span className="me-2">|</span>
                            <Link className='text-white px-2' style={{ textDecoration: 'none' }} href='/pp'><span className="me-2 pointer" >{language === 'de' ? 'Datenschutz-Bestimmungen' : 'Privacy policy'}</span></Link>
                            <span className="me-2">|</span>
                            <Link className='text-white px-2' style={{ textDecoration: 'none' }} href='/widerrufsbelehrung'><span className="me-2 pointer" >{language === 'de' ? 'Widerrufsrecht' : 'Right of withdrawal'}</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

