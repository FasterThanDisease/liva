import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCheckout } from "@/components/context/CheckoutContext";

export default function Serviceauswahl({ services }) {

    const [data, setData] = useState(services)
    const { order, setOrder } = useCheckout();



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



    return (
        <main>
            <div className="container" style={{ paddingTop: 50, paddingBottom: 50 }}>
                <motion.div className="row"
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="col-12">
                        <h4>Service Auswahl</h4>
                        <div className="row justify-content-start align-items-stretch">
                            {services.map((k, i) => (
                                <div key={i} className="col-12 col-md-3" onClick={() => handleSelectService(k)}>
                                    <div className="d-flex h-100 ">
                                        <div className="d-flex flex-column gap-2 justify-content-start align-items-start bg-darki border border-md rounded rounded-3 p-3">
                                            <span><strong>{k.name}</strong></span>
                                            <p className="text-secondary">{k.description}</p>
                                            <div className="d-flex justify-content-end w-100">
                                                <span><strong>{parseFloat(k.price).toFixed(2).replace('.', ',')}€</strong></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    )

}




export async function getStaticProps() {
    const tenantId = 52;



    const servicesRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appointments/getservices`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
        body: JSON.stringify({ tenantId }),
    });
    const services = await servicesRes.json();


    return {
        props: { services },
        revalidate: 60 * 60,
    };
}

