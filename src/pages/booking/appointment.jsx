import React, { useState, useEffect } from "react";
import { useAuth } from "@/components/context/AuthContext";
import { useCheckout } from "@/components/context/CheckoutContext";
import { useRouter } from "next/router";
import { CiLocationOn } from "react-icons/ci";
import { CiClock2, CiClock1, CiCalendar, CiAt } from "react-icons/ci";
import { PiBuildingThin } from "react-icons/pi";
import { BsCaretRightFill, BsCaretLeft, BsCaretLeftFill } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";




function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Monate 0-11
    const day = String(date.getDate()).padStart(2, "0");
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}





export default function Index({ tenantId }) {

    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [currentDate, setCurrentDate] = useState(formatDate(new Date()));
    const [data, setData] = useState([]);
    const { order, setOrder } = useCheckout();
    const { login, logout, user } = useAuth();


    useEffect(() => {
        if (!order.tenantId) {
            setOrder(ps => ({ ...ps, tenantId }));
        }
    }, [tenantId, order.tenantId, setOrder]);



    const fetchAppointments = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appointments/free`, {
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY
            },
            method: "POST",
            body: JSON.stringify({ tenantId: order.tenantId, staffId: order.staffId, serviceId: order.serviceId, from: currentDate, to: formatDate(new Date(new Date().setDate(new Date().getDate() + 5))) }),
        });


        console.log(res)
        if (!res.ok) {
            setLoading(false);
            return;
        }
        const data = await res.json();
        console.log(data)
        setData(data);
        setLoading(false);
    };


    useEffect(() => {
        fetchAppointments();
    }, [order]);

    // console.log(data)

    // console.log(order.tenantId, order.staffId, order.serviceId)



    console.log(order)

    return (
        <main>
            <section className="container-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3><span style={{ fontSize: '', fontWeight: 600 }}>Termin auswählen</span></h3>
                        </div>
                        <div className="col-12">

                            <Calendar order={order} setOrder={setOrder} data={data} loading={loading} refetch={fetchAppointments} currentDate={currentDate} setCurrentDate={setCurrentDate} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}



export function Calendar({ supplier, order, setOrder, data, loading, refetch, currentDate, setCurrentDate }) {

    const router = useRouter();


    const [timeSlots, setTimeSlots] = useState([])
    const [timeFilter, setTimeFilter] = useState({ active: true, filter: 3 })



    const handleNextDay = () => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setDate(newDate.getDate() + 5);
            return newDate.toISOString().substr(0, 10);
        });
    };

    const handlepreviousDay = () => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setDate(newDate.getDate() - 5);
            return newDate.toISOString().substr(0, 10);
        });
    };




    const [weekOffset, setWeekOffset] = useState(0);
    // const { data, loading, refetch } = useQuery(FETCH_TIMES, {
    //     variables: { data: JSON.stringify({ id: order.tenantId, beginningDate: currentDate }) }
    // });

    useEffect(() => {
        if (data) {


            setTimeSlots(ps => [...data]) // Setze nur gefilterte Tage mit Einträgen
        }
    }, [data])






    useEffect(() => {
        refetch(); // Refetch the data when weekOffset changes
    }, [weekOffset, currentDate]);

    const handlePreviousWeek = () => {
        setWeekOffset(prev => prev - 1);
    };

    const handleNextWeek = () => {
        setWeekOffset(prev => prev + 1);
    };

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'short' });
    };



    const processTimeSlots = (slots) => {
        const grouped = {};
        slots.forEach(slot => {
            const date = slot.calendar_date;
            if (!grouped[date]) {
                grouped[date] = [];
            }
            grouped[date].push({ time: slot.times, isfree: slot.is_free });
        });
        return grouped;
    };

    const timeSlotsByDate = data ? processTimeSlots(timeSlots) : {};

    const isPastSlot = (dateStr, timeStr) => {
        const [year, month, day] = dateStr.split("T")[0].split("-");
        const [hour, minute] = timeStr.split(":");

        // Erzeuge vollständiges Datum inkl. Uhrzeit
        const slotDateTime = new Date(year, month - 1, day, hour, minute);

        return slotDateTime < new Date(); // true, wenn Slot in der Vergangenheit
    };


    const isToday = currentDate === new Date().toISOString().substr(0, 10);

    const goToCheckout = (date, slot) => {
        if (!order) return;

        const [hour, minute] = slot.time.split(":");
        const [year, month, day] = date.split("T")[0].split("-");

        // ISO-8601 String bauen, aber OHNE Zeitzone
        const isoString = `${year}-${month}-${day}T${hour}:${minute}:00`;

        setOrder(ps => ({
            ...ps,
            timeslot: isoString // Beispiel: "2025-09-01T08:00:00"
        }));

        router.push(`/booking/checkout`);
    };




    const { slug } = router.query

    if (loading) return <div>Loading...</div>;

    return (
        <>
            <div className=" " style={{ fontSize: 13 }}>
                {<div className="d-flex justify-content-between  align-items-center " >
                    <div className="d-flex flex-grow-1 justify-content-start">
                        <div
                            className='icon-container'
                            onClick={isToday ? undefined : handlepreviousDay}
                            style={{ opacity: isToday ? 0.3 : 1, pointerEvents: isToday ? "none" : "auto" }}
                        >
                            {isToday ? <BsCaretLeft /> : <BsCaretLeftFill />}
                        </div>
                    </div>
                    <div className="d-flex flex-grow-1 justify-content-end">
                        <div className='icon-container' onClick={handleNextDay}>{<BsCaretRightFill />}</div>
                    </div>

                </div>}
                <div className="table-responsive ">
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={currentDate} // sorgt dafür, dass beim Datumwechsel animiert wird
                            initial={{ x: 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -300, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            {timeSlots.length > 0 ? <table className="table table-borderless">

                                <thead>
                                    <tr>

                                        {Object.keys(timeSlotsByDate).map(date => (
                                            <th key={date}>{formatDate(date)}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading && <tr style={{ minHeight: 100 }}>
                                        <td colSpan={"6"} >
                                            <div className="w-100 d-flex justify-content-center">
                                                <span className="spinner-border "></span>
                                            </div>
                                        </td>
                                    </tr>}
                                    {/* Find all unique times across all days */}
                                    {!loading && Array.from(new Set(
                                        Object.values(timeSlotsByDate).flat().map(slot => slot.time)
                                    )).sort().filter((_, i) => i < timeFilter.filter).map(time => (
                                        <tr key={time}>

                                            {Object.keys(timeSlotsByDate).map(date => {
                                                const slots = timeSlotsByDate[date];
                                                const slot = slots.find(slot => slot.time === time);
                                                const isDisabled = !slot || isPastSlot(date, slot.time) || slot.isfree === 0;
                                                const buttonStyle = { backgroundColor: '#3f3f46', fontSize: 13, color: '#fff' }

                                                return (
                                                    <td
                                                        key={date}>
                                                        {isDisabled
                                                            ? <span>-</span> : <button
                                                                className="btn"
                                                                onClick={() => goToCheckout(date, slot)}
                                                                style={buttonStyle}>{slot.time.substr(0, 5)}</button>
                                                        }
                                                    </td>
                                                );
                                            })}
                                        </tr>

                                    ))}
                                    <tr>
                                        {!loading && <td colSpan={"6"}>
                                            <div className="w-100 d-flex justify-content-center pointer" onClick={() => setTimeFilter(ps => ({ ...ps, active: timeFilter.active === true ? false : true, filter: timeFilter.filter === 3 ? timeSlots.length : 3 }))}>
                                                <span className="text-uppercase" style={{ fontSize: 13 }} >{timeFilter.active ? 'Alle anzeigen' : 'Weniger anzeigen'}</span>
                                            </div>
                                        </td>}
                                    </tr>
                                </tbody>
                            </table> :
                                <div className="col-12 d-flex justify-content-center py-4">
                                    <span>Keine Termine verfügbar</span>
                                </div>
                            }
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

        </>
    )
}








