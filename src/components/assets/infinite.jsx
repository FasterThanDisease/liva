import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { useInView } from "react-intersection-observer";
import { CiLocationOn } from "react-icons/ci";
import { useRouter } from "next/router";
import { CiClock2, CiClock1, CiCalendar, CiAt, CiPhone } from "react-icons/ci";
import { GoHeart, GoHeartFill } from "react-icons/go";


const GET_SUPPLIER_LIST = gql`
  query Query($search: String, $location: String, $limit: Int, $offset: Int) {
    getSupplierList(search: $search, location: $location, limit: $limit, offset: $offset) {
      supplierId
      b_name
      b_zip
      b_address
      b_city
      b_country
      description
      b_phonenumber
      slug
    }
  }
`;

const dayMap = {
    Sunday: "So",
    Monday: "Mo",
    Tuesday: "Di",
    Wednesday: "Mi",
    Thursday: "Do",
    Friday: "Fr",
    Saturday: "Sa"
};

const SkeletonLoader = () => (
    <div className="col-12 p-3 py-5 bg-white shadow-lg border">
        <div className="skeleton skeleton-title"></div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text"></div>
    </div>
);

const InfiniteScrollList = ({ search }) => {

    const router = useRouter();
    const [likedSuppliers, setLikedSuppliers] = useState([]);

    // Lade die gespeicherten Likes beim ersten Rendern
    useEffect(() => {
        const storedLikes = JSON.parse(localStorage.getItem("likedSuppliers")) || [];
        setLikedSuppliers(storedLikes);
    }, []);

    // Funktion zum Liken/Unliken
    const toggleLike = (id) => {
        let updatedLikes;

        if (likedSuppliers.includes(id)) {
            updatedLikes = likedSuppliers.filter((item) => item !== id); // Entferne das Like
        } else {
            updatedLikes = [...likedSuppliers, id]; // Füge das Like hinzu
        }

        setLikedSuppliers(updatedLikes);
        localStorage.setItem("likedSuppliers", JSON.stringify(updatedLikes));
    };



    const LIMIT = 10;
    const { data, loading, fetchMore } = useQuery(GET_SUPPLIER_LIST, {
        variables: { search: search.search, location: search.location, limit: LIMIT, offset: 0 },
        notifyOnNetworkStatusChange: true,
    });




    const { ref, inView } = useInView({ threshold: 1.0 });

    const loadMore = () => {
        if (!loading && data?.getSupplierList?.length % LIMIT === 0) {
            fetchMore({
                variables: { search: "", location: "", offset: data.getSupplierList.length, limit: LIMIT },
                updateQuery: (prevResult, { fetchMoreResult }) => {
                    if (!fetchMoreResult || !fetchMoreResult.getSupplierList) return prevResult;
                    return {
                        getSupplierList: [...prevResult.getSupplierList, ...fetchMoreResult.getSupplierList],
                    };
                },
            });
        }
    };

    React.useEffect(() => {
        if (inView) loadMore();
    }, [inView]);

    return (
        <>

            {loading && Array.from({ length: 5 }).map((_, index) => <SkeletonLoader key={index} />)}

            {data?.getSupplierList?.map((k, i) => (
                <div key={i} className="col-12 col-md-10 d-flex justify-content-around align-items-start offset-md-1 py-5 bg-white shadow-lg border border-md position-relative" style={{ borderRadius: '15px' }}>
                    <div className="d-flex flex-column justify-content-start align-items-start p-2 gap-2 pointer" style={{ flex: 7 }} onClick={() => router.push(`/locations/${k.slug}`)} >
                        <p style={{ fontSize: '1.5em' }}><strong>{k.b_name}</strong></p>
                        <div className="d-flex justify-content-start align-items-center">

                            <div className="me-2">
                                <CiPhone size={25} color="black" />
                            </div>
                            <span>{k.b_phonenumber}</span>
                        </div>

                        <div className="d-flex justify-content-start align-items-center">

                            <div className="me-2">
                                <CiLocationOn size={25} color="black" />

                            </div>
                            <span>{k.b_address}, {k.b_zip} {k.b_city} {k.b_country}</span>
                        </div>


                    </div>
                    <div>

                    </div>
                    <div className="d-flex flex-column justify-content-start align-items-start p-2 gap-2 pointer" style={{ flex: 3 }} onClick={() => router.push(`/locations/${k.slug}`)} >
                        <p style={{ fontSize: '1.5em' }}><strong>Öffnungszeiten</strong></p>

                        <div className="d-flex justify-content-start align-items-center">

                            <div className="me-2">
                                <CiClock1 size={25} color="black" />

                            </div>
                            <span>{formatOpeningHours(`Sunday: [Closed], Monday: [7 AM-8 PM], Tuesday: [7 AM-8 PM], Wednesday: [7 AM-8 PM], Thursday: [7 AM-8 PM], Friday: [7 AM-8 PM], Saturday: [10 AM-3 PM]`)}</span>
                        </div>



                    </div>

                    <div className="position-absolute" style={{ top: 7, right: 7 }}>
                        {likedSuppliers.includes(k.supplierId) ? <GoHeartFill size={25} className="pointer" onClick={() => toggleLike(k.supplierId)} /> : <GoHeart size={25} className="pointer" onClick={() => toggleLike(k.supplierId)} />}

                    </div>

                </div>
            ))}

            <div ref={ref} className="text-center p-4">
                {loading && <span>Lade mehr...</span>}
            </div>
        </>

    );
};

export default InfiniteScrollList;



// Funktion zum Umwandeln der Öffnungszeiten
const formatOpeningHours = (openingHoursString) => {
    const entries = openingHoursString.split(", ").map(entry => {
        const [day, time] = entry.split(": ");
        return { day: dayMap[day], time: time.replace(/\[|\]/g, '') };
    });

    // Gruppieren der Tage mit denselben Öffnungszeiten
    const grouped = [];
    let lastGroup = null;

    entries.forEach(({ day, time }) => {
        if (lastGroup && lastGroup.time === time) {
            lastGroup.days.push(day);
        } else {
            lastGroup = { days: [day], time };
            grouped.push(lastGroup);
        }
    });

    // Formatierung der Gruppen
    return grouped.map(({ days, time }) => {
        if (days.length > 1) {
            return (`${days[0]}-${days[days.length - 1]}: ${time}`);
        }
        return `${days[0]}: ${time}\n`;
    }).join(", ");
};