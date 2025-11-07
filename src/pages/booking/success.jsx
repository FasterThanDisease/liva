import React, { useState, useEffect, useRef } from "react";
import { CiCalendar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiBoxList } from "react-icons/ci";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("../../components/utils/map"), { ssr: false });
import QRCode from "qrcode";
import { gsap } from "gsap";

export default function Successappointment({ appointment, tenant, service }) {
    const [qrcodeUrl, setQrcodeUrl] = useState("");
    const [showContent, setShowContent] = useState(false);

    const circleRef = useRef(null);
    const checkRef = useRef(null);
    const morphContainer = useRef(null);
    const contentRef = useRef(null);



    useEffect(() => {
        if (!appointment || !tenant) return;

        const start = new Date(appointment.startTime.replace(" ", "T"));
        const end = new Date(appointment.endTime);

        const formatUTC = (date) =>
            date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

        const googleDates = `${formatUTC(start)}/${formatUTC(end)}`;

        const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Termine bei ${tenant.name}&dates=${googleDates}&details=Termin+bei+${tenant.name}+mit+${appointment.order.ordererName}&location=${encodeURIComponent(`${tenant.address}, ${tenant.zipCode} ${tenant.city}`)}`;

        QRCode.toDataURL(calendarUrl)
            .then(setQrcodeUrl)
            .catch(console.error);
    }, [appointment, tenant]);

    useEffect(() => {
        // GSAP Timeline Animation
        const tl = gsap.timeline({
            defaults: { ease: "power2.out" },
            onComplete: () => setShowContent(true),
        });

        // Step 1: Circle Pop-in
        tl.fromTo(
            circleRef.current,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }
        );

        // Step 2: Draw Checkmark
        tl.fromTo(
            checkRef.current,
            { strokeDasharray: 100, strokeDashoffset: 100 },
            { strokeDashoffset: 0, duration: 0.8 },
            "-=0.2"
        );

        // Step 3: Morph + Move up
        tl.to(morphContainer.current, {
            borderRadius: "20px",
            width: "85%",
            height: "80px",
            y: -120,
            backgroundColor: "#28a745",
            duration: 1.2,
            ease: "power3.inOut",
            delay: 0.3,
        });

        // Step 4: Fade in content
        tl.fromTo(
            contentRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1 },
            "-=0.3"
        );
    }, []);

    if (!appointment || !tenant) {
        return <p>Termin nicht gefunden.</p>;
    }

    console.log(appointment, tenant, service)

    console.log(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        `${tenant.address}, ${tenant.zipCode} ${tenant.city}`
    )}`)

    return (
        <main
            className="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-white overflow-hidden"
            style={{ paddingBottom: 80, paddingTop: 200 }}
        >
            {/* Morph Container (Circle -> Rectangle) */}
            <div
                ref={morphContainer}
                style={{
                    backgroundColor: "#d1f7d1",
                    width: 180,
                    height: 180,
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <svg
                    ref={circleRef}
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                    stroke="none"
                >
                    <circle
                        cx="50"
                        cy="50"
                        r="48"
                        stroke="#28a745"
                        strokeWidth="4"
                        fill="none"
                    />
                    <path
                        ref={checkRef}
                        d="M30 52 L45 67 L70 35"
                        stroke="#28a745"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                    />
                </svg>
            </div>

            {/* CONTENT SECTION */}
            <div
                ref={contentRef}
                className="text-center  container-fluid"
                style={{ opacity: 0, maxWidth: 600 }}
            >
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-success fw-bold mb-3">
                            TERMIN ERFOLGREICH GEBUCHT
                        </h3>
                        <p className="text-muted mb-4">
                            Vielen Dank! Wir konnten Ihren Termin erfolgreich bestätigen. <br />Sie
                            erhalten in Kürze eine E-Mail mit allen Informationen.
                        </p>

                        <div className="text-center d-none d-md-block">
                            <p>Scannen Sie den QR-Code, um den Termin in Ihren Kalender zu speichern:</p>
                            {qrcodeUrl && (
                                <img
                                    src={qrcodeUrl}
                                    alt="QR Code"
                                    width={200}
                                    height={200}
                                    style={{ objectFit: "cover" }}
                                />
                            )}
                        </div>

                        <div className="ticket-card">
                            <div className="ticket-header d-flex justify-content-between align-items-center">
                                <span>
                                    <strong>Auftragsnummer:</strong> {appointment.order.orderNo}
                                </span>
                            </div>
                            <div className="ticket-divider"></div>
                            <div className="ticket-body">
                                <div className="d-flex justify-content-between align-items-center py-2">
                                    <div className="d-flex justify-content-start align-items-center p-0">
                                        <div className="me-2">
                                            <CiBoxList size={30} color="black" />
                                        </div>
                                        <span><strong>{service.name} &#8226; {service.durationMinutes} Min.</strong></span>
                                    </div>
                                    <span>{parseFloat(service.price).toFixed(2).replace('.', ',')} €</span>
                                </div>
                            </div>

                            <div className="ticket-divider"></div>
                            <div className="ticket-body">
                                <div className="d-flex justify-content-start align-items-center py-2">
                                    <div className="me-2"><CiLocationOn size={30} color="black" /></div>
                                    <span><strong>{tenant.address} {tenant.zipCode} {tenant.city}</strong></span>
                                </div>
                                <div className="d-flex justify-content-start align-items-center py-2">
                                    <div className="me-2"><CiCalendar size={30} color="black" /></div>
                                    <span><strong>{new Date(appointment.startTime).toLocaleDateString('de-DE')}</strong></span>
                                </div>
                                <div className="d-flex justify-content-start align-items-center py-2">
                                    <div className="me-2"><CiClock2 size={30} color="black" /></div>
                                    <span><strong>{new Date(appointment.startTime).toLocaleTimeString('de-DE').substring(0, 5)} - {new Date(appointment.endTime).toLocaleTimeString('de-DE').substring(0, 5)}</strong></span>
                                </div>
                            </div>



                        </div>

                        {/* <div className="py-3">
                            {tenant && <Map address={tenant.faddress} zipCode={tenant.fzipCode} city={tenant.fcity} />}
                        </div> */}


                    </div>
                </div>
            </div>
        </main>
    );
}


export async function getServerSideProps(context) {
    const { orderNo } = context.query;

    if (!orderNo) {
        return { notFound: true };
    }

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appointments/fetchData?OrderNo=${encodeURIComponent(orderNo)}`, {
            method: "GET",
            headers: { "Content-Type": "application/json", "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
        });

        if (!res.ok) {
            return { notFound: true };
        }

        const data = await res.json();

        return {
            props: {
                appointment: data.appointmentWithOrderAndTenant,
                tenant: data.tenant,
                service: data.service
            }
        };
    } catch (e) {
        console.error(e);
        return { notFound: true };
    }
}
