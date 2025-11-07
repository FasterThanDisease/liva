import React from "react";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

export default function Contactdetails({ layout = 'column' }) {


    return (
        <>{layout === 'column' &&
            <div className="col-12 text-dark bg1">
                <div className="d-flex justify-content-start align-items-start py-3">
                    <div style={{ width: 40 }}>
                        <IoCallOutline size={35} color="#000" />
                    </div>
                    <div className="ms-3">
                        <span>Rufen Sie uns gerne an:</span><br />
                        <Link href="tel:+4915168160376" style={{ textDecoration: 'none' }}>
                            <span className="text-dark pointer" style={{ fontWeight: 500, fontSize: '1.1em' }}>
                                (+49) 151 68160376
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="d-flex justify-content-start align-items-start py-3">
                    <div style={{ width: 40 }}>
                        <IoLocationOutline size={35} color="#000" />
                    </div>
                    <div className="ms-3">
                        <span>Besuchen Sie uns vor Ort:</span><br />
                        <span className="color1 text-dark pointer" style={{ fontWeight: 500, fontSize: '1.1em' }}
                            onClick={() => router.push('https://maps.app.goo.gl/cniytAJAN5iJmyN86')}>
                            Bodelschwighstr. 10
                        </span>
                    </div>
                </div>

                <div className="d-flex justify-content-start align-items-start py-3">
                    <div style={{ width: 40 }}>
                        <AiOutlineMail size={35} color="#000" />
                    </div>
                    <div className="ms-3">
                        <span>Schreiben Sie uns eine Mail:</span><br />
                        <Link href="mailto:info@novaesolutions@gmail.com" style={{ textDecoration: 'none' }}>
                            <span className="text-dark pointer" style={{ fontWeight: 500, fontSize: '1.1em' }}>
                                info@novaesolutions@gmail.com
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        }

            {layout === 'row' && <div className="container-fluid">
                <div className="row justify-content-center">


                    <div className="col-12 col-md-4 text-dark d-flex justify-content-center align-items-start py-3">
                        <div style={{ width: 40 }}>
                            <IoCallOutline size={35} color="#000" />
                        </div>
                        <div className="ms-3">
                            <span>Rufen Sie uns gerne an:</span><br />
                            <Link href="tel:+4915168160376" style={{ textDecoration: 'none' }}>
                                <span className="text-dark pointer" style={{ fontWeight: 500, fontSize: '1.1em' }}>
                                    (+49) 151 68160376
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 text-dark d-flex justify-content-center align-items-start py-3">
                        <div style={{ width: 40 }}>
                            <IoLocationOutline size={35} color="#000" />
                        </div>
                        <div className="ms-3">
                            <span>Besuchen Sie uns vor Ort:</span><br />
                            <span className="color1 text-dark pointer" style={{ fontWeight: 500, fontSize: '1.1em' }}
                                onClick={() => router.push('https://maps.app.goo.gl/cniytAJAN5iJmyN86')}>
                                Bodelschwighstr. 10
                            </span>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 text-dark d-flex justify-content-center align-items-start py-3">
                        <div style={{ width: 40 }}>
                            <AiOutlineMail size={35} color="#000" />
                        </div>
                        <div className="ms-3">
                            <span>Schreiben Sie uns eine Mail:</span><br />
                            <Link href="mailto:info@novaesolutions@gmail.com" style={{ textDecoration: 'none' }}>
                                <span className="text-dark pointer" style={{ fontWeight: 500, fontSize: '1.1em' }}>
                                    info@novaesolutions@gmail.com
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}