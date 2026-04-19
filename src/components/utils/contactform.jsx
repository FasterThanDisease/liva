import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoMdArrowForward } from "react-icons/io";
import Contact from "./contact";

export default function Contactform() {




    return (
        <>

            <div className="col-12 col-md-6 d-flex flex-column justify-content-start gap-2  align-items-start ">
                <span className="font1 color1 fw-semibold" style={{}}>WIR SIND FÜR SIE DA</span>
                <h2 className="">Kontakt </h2>
                <p>Sie möchten einen Termin vereinbaren oder haben Fragen? Wir sind gerne für Sie da! Rufen Sie uns an oder nutzen Sie unser praktisches Kontaktformular, um schnell und unkompliziert einen Termin zu buchen. Unser Salon ist gut erreichbar und bietet Parkmöglichkeiten. Wir freuen uns, Sie bald persönlich begrüßen zu dürfen!</p>
                <div className=" d-flex py-2  justify-content-start align-items-center " >
                    <div style={{ flex: 1 }}>
                        <IoCallOutline size={35} color="#ecdf97" />
                    </div>
                    <div className="text-start ms-2" style={{ flex: 9 }}>
                        <Link style={{ textDecoration: 'none' }} href={'tel:+4956134914'} className=""><span className="text-dark pointer " style={{ fontWeight: 500, }}><u>(+49) 561 349 14</u></span></Link>
                    </div>
                </div>

                <div className=" d-flex py-2  justify-content-start align-items-center " >
                    <div style={{ flex: 1 }}>
                        <IoLocationOutline size={35} color="#ecdf97" />
                    </div>
                    <div className="text-start ms-2" style={{ flex: 9 }}>

                        <Link style={{ textDecoration: 'none' }} href={'https://maps.app.goo.gl/ZBXS2mgJfDvG4W7S6'}>
                            <span className="color1 text-dark pointer " style={{ fontWeight: 500 }}><u>Wilhelmshöher Allee 185</u></span>
                        </Link>
                    </div>
                </div>
                <div className=" d-flex py-2  justify-content-start align-items-center " >
                    <div style={{ flex: 1 }}>
                        <CiMail size={35} color="#ecdf97" />
                    </div>
                    <div className="text-start ms-2" style={{ flex: 9 }}>

                        <Link className="" href="mailto:sher_2323@hotmail.com" style={{ textDecoration: 'none' }}> <span className="text-dark pointer " style={{ fontWeight: 500, }} ><u>sher_2323@hotmail.com</u></span></Link>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-10 col-xl-5 py-3  ">
                <Contact />
            </div>
            {/* 
            <div className="col-12 py-3">
                <div className="d-flex align-items-center">
                    <div style={{ flex: 1 }}>
                        <hr />
                    </div>
                    <div style={{ margin: "0 10px" }}>
                        <span>oder</span>
                    </div>
                    <div style={{ flex: 1 }}>
                        <hr />
                    </div>
                </div>
            </div> */}

            {/* <div className="col-12">
                <div className="row justify-content-start align-items-center  text-center text-md-start gy-4">
                    <div className="col-12 col-md-6">
                        <span>Kontaktieren Sie uns gerne über <b className="color1">WhatsApp</b> <br /> <b>schnell, bequem und unkompliziert</b> <br /> <i>"Wir haben ein offenes Ohr für Ihre Füße"</i></span>
                    </div>

                    <div className="col-12 col-md-6">
                        <Link style={{ textDecoration: 'none' }} href={'https://api.whatsapp.com/send/?phone=4917690785394&text=Guten%20Tag%20Frau%20Geist%2C%20ich%20kontaktiere%20Sie%2C%20da%20ich%20einen%20Termin%20zur%20Behandlung%20ben%C3%B6tige&type=phone_number&app_absent=0'}>
                            <div className="d-flex justify-content-center btn btn-color1 align-items-center p-3 border border-md  pointer">
                                <div className="me-4">
                                    <img src="/whatsapp.webp" alt="Whatsapp Logo" width={50} height={50} style={{ objectFit: 'cover' }} />
                                </div>
                                <span style={{ fontSize: '1.2em', fontWeight: 500 }}>Chat Starten</span>
                            </div>
                        </Link>
                    </div>
                </div>

            </div> */}

        </>

    )
}