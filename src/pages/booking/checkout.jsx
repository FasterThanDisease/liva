import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "@/components/context/AuthContext";
import { useCheckout } from "@/components/context/CheckoutContext";
import { useRouter } from "next/router";
import Popup from "@/components/assets/popup";
import { toaster } from "@/components/ui/toaster";
import { MdArrowBackIos } from "react-icons/md";
import { CreateIntent } from '../api/user';
import AuthForm from "@/components/assets/fastlogin";
import { useMutation } from "@tanstack/react-query";
import { FaCcAmex } from "react-icons/fa6";
import { PiBuildingThin } from "react-icons/pi";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { SiApplepay } from "react-icons/si";
import { CiBadgeDollar } from "react-icons/ci";
import { motion } from "framer-motion";
import NovaPayment from "@/components/assets/checkout";


const errors = {
    401: 'Bitte geben Sie die benötigten Informationen zum buchen an!',
    409: 'Bitte verwenden Sie eine andere E-Mail-Adresse oder melden Sie sich an!',
    78: 'Bitte melden Sie sich an oder erstellen Sie ein Konto, um die Vorauszahlung nutzen zu können.'

}

export default function CheckoutAppointment() {


    const paymentMethods = [

        { id: 'card', label: 'Kreditkarte' },
        { id: 'applepay', label: 'ApplePay' },
        { id: 'paypal', label: 'PayPal' },
    ];

    const effectRan = useRef(false);
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [tenants, setTenants] = useState([]);
    const { order, setOrder } = useCheckout();
    const { login, logout, user } = useAuth();
    const [error, setError] = useState(null);

    const ref = useRef();


    const [invoiceMode, setInvoiceMode] = useState(0)

    const [isLoading, setIsLoading] = useState(0)


    const [scriptLoaded, setScriptLoaded] = useState(0)
    const [clientSecret, setClientSecret] = useState('');
    const [paymentRef, setPaymentRef] = useState("")
    const [index, setIndex] = useState(user ? 1 : 0)

    const language = router.locale ?? 'de'

    const steps = [
        { title: 'Persönliche Angaben', description: 'Account erstellen' },
        { title: 'Zahlungsmethode', description: 'Zahlungsmethode wählen' },
        { title: 'Bestellung abschließen', description: 'Zahlung durchführen' },
    ]

    const generatePaymentRef = () => {
        return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
    };

    // Payment Intent erstellen
    const savePaymentReference = async () => {
        if (paymentRef) return; // Schon gesetzt, kein Duplikat

        const randomRef = generatePaymentRef();
        setPaymentRef(randomRef);

        const intentData = {
            Identifier: randomRef,
            CustomerNo: order.user.id,
            orderType: order.order.orderType,
            products: JSON.stringify(order.order).replace(/\"/g, '\''),
            status: 1,
            total: order.order.price * 100,
            tenantId: order.tenantId,
            serviceId: order.serviceId,
            staffId: order.staffId,
            starttime: order.timeslot
        };

        console.log('intendata sent to the backend', intentData)

        try {
            setLoading(true);
            const res = await CreateIntent(intentData);


            if (res.code !== 1) {
                console.error("CreateIntent failed", res);
                setPaymentRef(""); // zurücksetzen bei Fehler
                setLoading(false)
            }

            if (res.code === 1) {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/payments/createpaymentintent`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY
                    },
                    body: JSON.stringify({
                        Amount: order.order.price,
                        ConnectedAccountID: order.supplier.stripeAccountId,
                        Currency: "eur",
                        Identifier: order.order.buyerIPC,
                        OrderNo: randomRef,

                    })
                })

                if (!res.ok) {
                    console.log('res not ok', res)
                }

                const data = await res.json();
                const secretdata = JSON.parse(data)
                setLoading(false)

                // clientSecret setzen
                setClientSecret(secretdata.clientSecret);  // <-- genau hier
                setScriptLoaded(1);

            }



        } catch (error) {
            console.error(error);
            setLoading(false);
            setPaymentRef(""); // zurücksetzen bei Fehler
        }
    };


    useEffect(() => {
        if (user) {
            setOrder(ps => ({ ...ps, user: { ...ps.user, firstName: user.firstName, lastName: user.lastName, } }))
        }
        if (!user) {
            setOrder(ps => ({ ...ps, user: {} }))
        }
    }, [user])


    // useEffect(() => {
    //     if (error) {
    //         toaster.create({
    //             title: errors[error],
    //             type: 'error',
    //         })
    //     }
    //     return () => {
    //         setError(null);
    //     };
    // }, [error])





    // Mutation für Order erstellen
    const createOrderMutation = useMutation({
        mutationFn: async (order) => {
            setLoading(true)

            const purchase = {
                tenantId: parseInt(order.tenantId),
                CustomerNo: user?.id,
                ResourceId: 1,
                staffId: order.staffId ?? null,
                serviceId: order.serviceId,
                startTime: order.timeslot,
                paid: 0,
                identifier: order.identifier,
                guestname: order.guest.name,
                guestphone: order.guest.phone,
                guestemail: order.guest.email,
            };



            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appointments/book`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY,
                    id: `${process.env.NEXT_PUBLIC_ID}`,
                    auth: `SPX ${process.env.NEXT_PUBLIC_AUTH}`
                },
                body: JSON.stringify(purchase)
            });

            if (!res.ok) {
                throw {
                    status: res.status,

                };
            }

            return res.json();
        },
        onSuccess: (data) => {
            console.log("Order erfolgreich erstellt:", data);
            setLoading(false)

            localStorage.removeItem('checkoutData')

            if (data.orderNo) {
                router.push(`/booking/success?orderNo=${data.orderNo}`);
            }
        },
        onError: (error) => {
            console.log(error)
            if (error.status) {
                setError(409)
            }


            setLoading(false);
        }
    });




    async function placeOrder() {

        if (!user?.auth) {
            if (
                [order.guest.name, order.guest.email, order.guest.phone]
                    .some((value) => ['', undefined, null].includes(value))) {
                return setError(401);
            }
        }

        // const purchase = {
        //     tenantId: parseInt(order.tenantId),
        //     CustomerNo: order.customerNo,
        //     ResourceId: 1,
        //     staffId: order.staffId ?? 1,
        //     serviceId: order.serviceId,
        //     startTime: order.timeslot,
        //     paid: 0,
        //     identifier: order.identifier,
        //     guestname: order.guest.name,
        //     guestphone: order.guest.phone,
        //     guestemail: order.guest.email,
        // };

        createOrderMutation.mutate(order);

        // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appointments/book`, {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json',
        //        "X-API-KEY" : process.env.NEXT_PUBLIC_API_KEY ,
        //         id: `${process.env.NEXT_PUBLIC_ID}`,
        //         auth: `SPX ${process.env.NEXT_PUBLIC_AUTH}`
        //     },
        //     body: JSON.stringify(purchase)
        // });

        // if (!res.ok) {
        //     const errorText = await res.text(); // oder res.json() wenn der Server JSON liefert
        //     throw new Error(errorText);
        // }

        // const data = await res.json();

        // console.log(data)



    }







    // useEffect nur einmal ausführen (Strict Mode sicher)
    useEffect(() => {

        if (['card', 'wallet', 'paypal'].includes(order.paymentmethod)) {
            savePaymentReference();
        }

    }, [order.paymentmethod]);


    function handleChange(e) {
        setError(null);
        const { name, value } = e.target
        setOrder((ps => ({ ...ps, guest: { ...ps.guest, [name]: value } })))
    }


    function handleBack() {

        let k = 2

        if ([2.3, 2.2].includes(order.stage)) {
            k = 2
        }
        else {
            k = 0
        }

        setOrder((ps) => ({ ...ps, stage: k }))

    }

    console.log(order)

    function handleChangePaymentMethod(k) {
        if (!user) {
            return setError(78)
        }
        setOrder((ps) => ({
            ...ps,
            paymentmethod: k
        }));
        effectRan.current = false; // falls nötig für PaymentIntent
    }


    return (


        <section className="bg-dark  text-white min-vh-100" >
            {isOpen && <Popup openState={isOpen} closeAction={() => setIsOpen(false)} label={'Anmeldung'}>
                <AuthForm closeAction={() => setIsOpen(false)} />
            </Popup>}


            <div className="container-fluid container-padding container-lg " style={{ paddingBottom: 50 }}>
                <motion.div
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4 }}
                    className="row justify-content-center align-items-start gy-3">


                    <div className="col-12">
                        <div className="py-4 ">
                            <div className="d-flex justify-content-start py-2 align-items-center pointer" onClick={() => router.back()}>
                                <div className="me-2"><IoArrowBack size={20} color="#fff" /></div>
                                <span><u>Zurück</u></span>
                            </div>
                            <h4><strong>Online Termin vereinbaren</strong></h4>
                            <span>Bitte füllen Sie folgende Felder aus:</span>
                        </div>
                    </div>

                    <div className="col-12 col-md-8  " >

                        <div className="border border-md d-flex flex-column rounded rounded-3 p-3 bg-darki">
                            <span className="" style={{ fontSize: '1.2em', fontWeight: 500 }}>Als Gast buchen</span>
                            <span className="" style={{ fontSize: '1em', fontWeight: 500 }}>Du hast bereits einen Account? <span className="text-primary pointer" onClick={() => setIsOpen(true)} ><u>Anmelden</u></span> oder <span onClick={() => setIsOpen(true)} className="text-primary pointer"><u>Registrieren</u></span></span>

                            <div className="mt-4">
                                <input className="form form-control form-control-md" name="name" type="email" value={order.guest.name} placeholder="Vollständiger Name" onChange={e => handleChange(e)} />
                            </div>
                            <div className="mt-4">
                                <input className="form form-control form-control-md" name="email" type="text" value={order.guest.email} placeholder="E-Mail-Adresse" onChange={e => handleChange(e)} />
                            </div>
                            <div className="mt-4">
                                <input className="form form-control form-control-md" name="phone" type="text" value={order.guest.phone} placeholder="Telefonnummer" onChange={e => handleChange(e)} />
                            </div>
                        </div>


                        <div className="border border-md  bg-darki rounded mt-5 rounded-3 p-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <span className="" style={{ fontSize: '1.2em', fontWeight: 500 }}>Zahlung</span>

                                </div>
                                {/* <div className="text-right">
                                    <span className="text-success " style={{ fontSize: 13, fontWeight: 500 }}>Alle Zahlungen werden sicher verarbeitet</span>
                                </div> */}
                            </div>


                            <div
                                className="mt-2 d-flex align-items-center border p-3 py-4 rounded-3 bg-darki w-100"
                                onClick={() => {
                                    setOrder((ps) => ({
                                        ...ps,
                                        paymentmethod: 'invoice'
                                    }));
                                    effectRan.current = false; // extra Logik beibehalten
                                }}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="px-4">
                                    <input
                                        className="form-check-input me-2"
                                        type="radio"
                                        id="paymentInvoice"
                                        checked={order.paymentmethod === 'invoice'} // an andere angepasst
                                        readOnly
                                    />
                                    <label className="form-check-label mb-0" htmlFor="paymentInvoice">
                                        <strong>Vor Ort zahlen</strong>
                                    </label>
                                </div>
                            </div>



                            {/* <div className="py-3">

                                <span className="" style={{ fontSize: '1.2em', fontWeight: 500 }}>Oder alternativ</span>

                                <div className="rounded rounded-5 bg-lighti p-2">
                                    Zahle deinen Service im Voraus, um nicht mit Bardgeld vor Ort zahlen zu müssen.
                                </div>
                            </div> */}


                            {/* {paymentMethods.map((method) => (
                                <div
                                    key={method.id}
                                    className="d-flex align-items-center border p-3 py-4 rounded-3 grey-hover w-100 mt-3"
                                    onClick={() => handleChangePaymentMethod(method.id)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="px-4">
                                        <input
                                            type="radio"
                                            className="form-check-input me-2"
                                            id={`payment-${method.id}`}
                                            checked={order.paymentmethod === method.id}
                                            readOnly
                                        />
                                        <label className="form-check-label mb-0" htmlFor={`payment-${method.id}`}>
                                            <strong>{method.label}</strong>
                                        </label>
                                    </div>
                                </div>
                            ))} */}


                            {/*  Paymentprovider initialisierung   */}
                            {scriptLoaded === 1 && order.order.price !== 0 && ['card', 'wallet', 'paypal'].includes(order.paymentmethod) && <div>
                                <NovaPayment
                                    clientSecret={clientSecret}
                                    paymentmethod={order.paymentmethod}
                                    env={'test'}
                                    amount={order.order.price}
                                    paymentRef={paymentRef}
                                    edatum={order.order.edatum}
                                    disabled={false}
                                    user={user}

                                />
                            </div>}




                        </div>



                        {/* {user?.auth ? <span>eingeloggt als: {user.firstName} {user.lastName} <button className="btn btn-danger" onClick={() => logout()}>Abmelden</button></span> : <Login />} */}
                    </div>
                    <div className={` col-md-4  ${isOpen ? '' : ' sticky-top '}`} style={{}}>
                        <div className="d-flex flex-column justify-content-start align-items-start gap-2 p-3 p-md-5   bg-darki shadow shadow-md rounded rounded-3  " style={{ borderTop: '5px solid black', fontSize: 13 }}>
                            <h3 className="py-2" ><strong>Ihre Termindetails</strong></h3>
                            <div className="d-flex flex-row justify-content-start align-items-center">
                                <div className="me-3 "> <PiBuildingThin size={25} /> </div>
                                <span className="" style={{ fontSize: '1.3em', fontWeight: 400 }}>{order?.supplier?.name}</span>
                            </div>
                            <div className="d-flex flex-row justify-content-start align-items-center">
                                <div className="me-3   "> <CiLocationOn size={25} /> </div>
                                <span className="" style={{ fontSize: '1.3em', fontWeight: 400 }}>{order?.supplier?.address} {order?.supplier?.zipCode} {order?.supplier?.city} {order?.supplier?.country}</span>
                            </div>
                            <hr className="w-100" />
                            <div>
                                <div className="d-flex flex-row justify-content-start align-items-center">
                                    <div className="me-3   "> <CiClock2 size={25} /> </div>
                                    {order && order?.timeslot && <span className="me-3 " style={{ fontSize: '1.5em', fontWeight: 500 }}>{new Date(order?.timeslot).toLocaleDateString('de-DE')} {new Date(order?.timeslot).toLocaleTimeString('de-DE').substring(0, 5)}</span>}
                                </div>
                                <span className="py-3 pointer" style={{ fontSize: 13 }} onClick={() => router.back()}><u>Wähle eine andere Uhrzeit wählen</u></span>
                            </div>

                            <hr className="w-100" />
                            <div>
                                <div className="d-flex flex-row justify-content-start align-items-center">
                                    <div className=" "> <CiBadgeDollar size={25} /> </div>
                                    <div className="d-flex flex-column ">

                                        <span className="px-3" style={{ fontSize: '1.4em' }}><strong>{parseFloat(order.order.price).toFixed(2).replace('.', ',')} €</strong></span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {order.paymentmethod === 'invoice' && <button className="btn btn-color1 p-2 w-100 mt-2 " onClick={() => loading ? null : placeOrder()}>{loading ? <span className="spinner spinner-border"></span> : 'Termin buchen'}</button>}
                        {error === 803 && <span className="text-danger">Der Termin wurde bereits vergeben. Bitte wählen Sie einen anderen</span>}
                        {error === 401 && <span className="text-danger">Bitte melden Sie sich mit Ihrem Benutzerkonto an.</span>}
                    </div>
                </motion.div>

            </div>
        </section >


    )
}

const Profile = ({ user, order, setOrder }) => {
    return (
        <div className="col-12  d-flex flex-row justify-content-between align-items-center bg-darki shadow shadow-md grey-hover rounded rounded-3 p-3 py-3 hover-border " style={{ fontSize: 13 }}
            onClick={(e) => setOrder(ps => ({ ...ps, user: { ...user } }))}
        >
            <div className="d-flex justify-content-start align-items-center ">

                <div className="profile-picture me-3 " style={{ height: 30, width: 30 }}>
                    {user?.firstName?.substr(0, 1)}{user?.lastName?.substr(0, 1)}
                </div>
                <span>{user?.firstName} {user?.lastName}</span>
            </div>

            <div>
                <input style={{ width: 20, height: 20 }} className="form-check-input me-3" checked={user.clientId === order.user.clientId} type="checkbox" value="" id="flexCheckChecked" />
            </div>
        </div>
    )
}



