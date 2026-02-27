import React from 'react'
import Link from 'next/link';
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5'
import { CiClock2 } from "react-icons/ci";

export default function Contactinformation() {
    return (
        <div className="container-fluid container-md">
            <div className="row justify-content-start align-items-center">
                <div className="col-12 col-md-4">
                    <div className=" p-4 d-flex h-100  justify-content-start align-items-center text-white " >
                        <div style={{ flex: 1 }}>
                            <IoCallOutline size={35} color="white" />
                        </div>
                        <div className="text-start text-white ms-2" style={{ flex: 9 }}>
                            <span>Rufen Sie uns gerne an:</span>
                            <br />
                            <Link href="tel:+4956134914" className="text-dark" style={{ textDecoration: 'none' }} ><span className="text-white pointer" style={{ fontWeight: 400, fontSize: '1.1em' }}>(+49)561 34914</span></Link>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <div className=" p-4 d-flex h-100  justify-content-start align-items-center text-white " >
                        <div style={{ flex: 1 }}>
                            <IoLocationOutline size={35} color="white" />
                        </div>
                        <div className="text-start text-white ms-2" style={{ flex: 9 }}>
                            <span>Besuchen Sie uns vort Ort:</span>
                            <br />
                            <span style={{ fontWeight: 400, fontSize: '1.1em' }} >Wilhelmshöher Allee 185<br />
                                34121 Kassel</span>
                        </div>
                    </div>
                </div>


                <div className="col-12 col-md-4">
                    <div className=" p-4 d-flex h-100  justify-content-start align-items-center text-white " >
                        <div style={{ flex: 1 }}>
                            <CiClock2 size={35} color="white" />
                        </div>
                        <div className="text-start d-flex flex-column text-white ms-2" style={{ flex: 9 }}>
                            <span>Di-Fr: 09:00 - 19:00</span>
                            <span>Sa: 09:00 - 17:00</span>
                            <span>So & Mo: geschlossen</span>

                        </div>
                    </div>
                </div>




            </div>
        </div>
    )
}
