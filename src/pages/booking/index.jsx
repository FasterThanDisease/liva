import React from "react";
import { useRouter } from "next/router";
import { useCheckout } from "@/components/context/CheckoutContext";

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
        <main className="bg-lighti container-padding min-vh-100">
            <section className="container-fluid container-md ">
                {/* Header */}
                <div className="text-start mb-5">

                    <h2 className="color1 ">Details auswählen</h2>
                </div>

                {/* Mitarbeiter-Auswahl */}
                <div className="mb-5">
                    <label className="form-label font2 fw-medium mb-2">
                        Mitarbeiter auswählen
                    </label>
                    <select
                        defaultValue={0}
                        onChange={(e) =>
                            setOrder((ps) => ({
                                ...ps,
                                staffId: parseInt(e.target.value),
                            }))
                        }
                        className="form-select shadow-sm rounded-3"
                    >
                        <option value={0}>Beliebiger Mitarbeiter</option>
                        {staff.map((k, i) => (
                            <option key={i} value={k.staffId}>
                                {k.firstName}
                            </option>
                        ))}
                    </select>
                </div>

                <hr className="my-5" />

                {/* Service-Auswahl */}
                <div>
                    <label className="form-label font2 fw-medium mb-4">
                        Service auswählen
                    </label>

                    <div className="row gy-4">
                        {services.map((s, i) => (
                            <div key={i} className="col-12 col-md-6 col-lg-4">
                                <div
                                    onClick={() => handleSelectService(s)}
                                    className="grey-hover pointer border rounded-4 p-4 h-100 d-flex flex-column justify-content-between shadow-sm"
                                    style={{
                                        backgroundColor: "",
                                        transition: "all 0.3s ease-in-out",
                                    }}
                                >
                                    <div>
                                        <h5 className="mb-2 color1">{s.name}</h5>
                                        <p className="text-muted mb-2 font2">
                                            Dauer: {s.durationMinutes} Minuten
                                        </p>
                                    </div>
                                    <div className="text-end mt-2">
                                        {s.price && (
                                            <span className="fw-bold color3 fs-5">
                                                {s.price.toFixed(2)} €
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
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
