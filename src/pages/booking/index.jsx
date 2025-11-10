import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { useCheckout } from "@/components/context/CheckoutContext";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa6";
import { useOnClickOutside } from "@/components/hooks/useOutsideClick";

export default function Serviceselect({ tenantConfig, services, staff, tenant }) {
    const router = useRouter();
    const { setOrder, order } = useCheckout();

    const handleSelectService = (selectedService) => {
        setOrder((prevOrder) => ({
            ...prevOrder,
            supplier: tenant,
            tenantName: tenantConfig.name, // statt tenantId
            serviceId: parseInt(selectedService.serviceId),
            order: selectedService,
        }));
        router.push(`/booking/appointment`);
    };


    console.log(order)
    return (
        <main className="bg-dark container-padding min-vh-100">
            <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="container-fluid container-md ">
                {/* Header */}
                <div className="text-start mb-5">

                    <h2 className="color1 ">Details auswählen</h2>
                </div>

                {/* Mitarbeiter-Auswahl */}
                <div className="mb-5">
                    <label className="form-label text-white  font2 fw-medium mb-2">
                        Mitarbeiter auswählen
                    </label>
                    <br />
                    <CustomSelect list={staff} setOrder={setOrder} order={order} />
                    {/* <select
                        defaultValue={0}
                        onChange={(e) =>
                            setOrder((ps) => ({
                                ...ps,
                                staffId: parseInt(e.target.value),
                            }))
                        }
                        className="form-select bg-darki text-white shadow-sm rounded-3"
                    >
                        <option value={0}>Beliebiger Mitarbeiter</option>
                        {staff.map((k, i) => (
                            <option key={i} value={k.staffId}>
                                {k.firstName}
                            </option>
                        ))}
                    </select> */}
                </div>

                <hr className="my-5" />

                {/* Service-Auswahl */}
                <div>
                    <label className="form-label text-white font2 fw-medium mb-4">
                        Service auswählen
                    </label>

                    <div className="row gy-4">
                        {services.map((s, i) => (
                            <div key={i} className="col-12 col-md-6 col-lg-4">
                                <div
                                    onClick={() => handleSelectService(s)}
                                    className="bg-darki pointer border rounded-4 p-4 h-100 d-flex flex-column justify-content-between shadow-sm"
                                    style={{
                                        backgroundColor: "",
                                        transition: "all 0.3s ease-in-out",
                                    }}
                                >
                                    <div>
                                        <h5 className="mb-2 color1">{s.name}</h5>
                                        <p className="text-white  mb-2 font2">
                                            Dauer: {s.durationMinutes} Minuten
                                        </p>
                                    </div>
                                    <div className="text-end mt-2">
                                        {s.price && (
                                            <span className="fw-bold color1 fs-5">
                                                {s.price.toFixed(2)} €
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </main>
    );
}


export async function getStaticProps() {
    const tenantId = 52;

    const tenantRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/appointments/gettenantbyid`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json", "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
            body: JSON.stringify({ TenantId: tenantId.toString() }),
        }
    );

    const tenant = await tenantRes.json();

    const servicesRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appointments/getservices`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
        body: JSON.stringify({ tenantId }),
    });
    const services = await servicesRes.json();

    const staffRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appointments/getstaff`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
        body: JSON.stringify({ tenantId }),
    });
    const staff = await staffRes.json();

    const tenantConfig = { id: tenantId, name: `Tenant ${tenantId}` };

    return {
        props: { tenantConfig, services, staff, tenant: tenant ?? null },
        revalidate: 60 * 60,
    };
}


export function CustomSelect({ list = [], setOrder, order }) {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef();

    useOnClickOutside(wrapperRef, () => setOpen(false));

    function handleSelect(staff) {
        setOrder((prev) => ({
            ...prev,
            staffId: staff ? parseInt(staff.staffId) : null,
        }));
        setOpen(false);
    }

    const selectedStaff = list.find(
        (k) => parseInt(k.staffId) === parseInt(order?.staffId)
    );

    return (
        <div
            ref={wrapperRef}
            className="position-relative d-inline-block text-white w-100 "
            style={{ minWidth: "14rem" }}
        >
            {/* Trigger */}
            <div
                onClick={() => setOpen(!open)}
                className="d-flex justify-content-start align-items-center p-3 border border-white rounded-4 pointer bg-transparent"
            >
                <FaUser size={28} className="me-2 text-white" />
                <span className="fw-bold">
                    {selectedStaff
                        ? `${selectedStaff.firstName} ${selectedStaff.lastName}`
                        : "Beliebiger Mitarbeiter"}
                </span>
            </div>

            {/* Dropdown */}
            {open && (
                <div
                    className="position-absolute bg-darki text-white shadow-lg rounded-4 mt-2 w-100"
                    style={{ left: 0, zIndex: 9999 }}
                >
                    <div className="d-flex flex-column w-100 p-2">
                        <span
                            className="p-2 border-hover rounded-3 pointer"
                            onClick={() => handleSelect(null)}
                        >
                            Beliebiger Mitarbeiter
                        </span>

                        {list.map((k, i) => (
                            <span
                                key={i}
                                className="p-2 border-hover rounded-3 pointer"
                                onClick={() => handleSelect(k)}
                            >
                                {k.firstName} {k.lastName}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}