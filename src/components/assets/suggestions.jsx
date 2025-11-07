import React, { useState, useEffect } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { useRouter } from "next/router";
import { IoIosHeart } from "react-icons/io";
import ImageSlider from "./imageslider";


const FETCH_SUGGESTIONS = gql`
query TenantSuggestions{
tenantSuggestions {
    key
    tenants {
      address
      city
      country
      email
      name
      phone
      averageRating
      reviewCount
      slug
      tenantId
      tenantTypeId
      zipCode
      images {

        imageId
        imageName
        imageUrl
        tenantId

      }
      services {

        description
        durationMinutes
        name
        price
        serviceId
        tenantId

      }
    }
  }
}
`

const demoImages = [
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
];




export default function Suggestions({ tenants }) {

    const router = useRouter();

    const { data, loading, error } = useQuery(FETCH_SUGGESTIONS);

    // const loading = true;

    // const data = demoData

    console.log(data)

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


    return (
        <div className="container-fluid p-md-5">
            {loading ? (
                Array.from({ length: 6 }).map((_, i) => (
                    <div
                        key={i}
                        className="d-flex gap-3 px-3 py-3 hidescrollbar"
                        style={{
                            overflowX: "auto",
                            overflowY: "hidden",
                            flexWrap: "nowrap",
                            scrollBehavior: "smooth",
                            WebkitOverflowScrolling: "touch",

                        }}
                    >
                        {Array.from({ length: 12 }).map((w, j) => (
                            <div key={j}
                                className="flex-shrink-0"
                                style={{
                                    width: "300px",
                                    minWidth: "300px",
                                    maxWidth: "320px",
                                    minHeight: '300px'
                                }}>
                                <div className="d-flex flex-column gap-4 h-100 justify-content-start align-items-start bg-white p-3 border border-sm skeleton">
                                    <div className="skeleton skeleton-image"></div>
                                    <div className="skeleton skeleton-title"></div>
                                    <div className="skeleton skeleton-text"></div>
                                    <div className="skeleton skeleton-text"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))
            ) : (
                data &&
                data.tenantSuggestions.map((cat, i) => (
                    <div key={i} className="mb-4">
                        <h4 className="mt-4 ms-3 mb-2">
                            <strong>Beliebte {cat.key}</strong>
                        </h4>

                        {/* Scrollbarer Bereich – für ALLE Bildschirmgrößen */}
                        <div
                            className="d-flex gap-3 px-3 "
                            style={{
                                overflowX: "auto",
                                overflowY: "hidden",
                                flexWrap: "nowrap",
                                scrollBehavior: "smooth",
                                WebkitOverflowScrolling: "touch",
                            }}
                        >
                            {cat.tenants.map((k, j) => {
                                const imgs = k.images.length > 0 ? k.images.map((img) => img.imageUrl) : demoImages;

                                return (
                                    <div
                                        key={j}
                                        className="flex-shrink-0"
                                        style={{
                                            width: "300px",
                                            minWidth: "300px",
                                            maxWidth: "320px",
                                        }}
                                    >
                                        <div className="d-flex flex-column h-100 justify-content-between align-items-start position-relative p-3 border rounded bg-white">
                                            <div>
                                                <ImageSlider images={imgs} maxHeight={"200px"} />
                                                <span>
                                                    <strong>{k.name}</strong>
                                                </span>
                                            </div>


                                            {<div className="d-flex justify-content-between  w-100 align-items-center text-muted mb-3">

                                                <div className="text-muted w-50">
                                                    <span>
                                                        {k.zipCode} {k.city}
                                                    </span>
                                                </div>

                                                <div className="w-50 d-flex justify-content-end align-items-center" >
                                                    {k.averageRating > 0 &&
                                                        <>
                                                            <div className="me-2">

                                                                <FaStar size={15} color="#cacaca" />
                                                            </div>
                                                            <span>
                                                                {k.averageRating}
                                                            </span>
                                                        </>}
                                                </div>
                                            </div>}



                                            <div className="w-100">
                                                {k.services.slice(0, 2).map((x, s) => (
                                                    <div
                                                        key={s}
                                                        className="d-flex w-100 justify-content-between align-items-center"
                                                    >
                                                        <span style={{ flex: 10 }}>{x.name}</span>
                                                        <span style={{ flex: 2 }} className="text-muted">
                                                            {parseFloat(x.price)
                                                                .toFixed(2)
                                                                .replace(".", ",")}
                                                            €
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                            <button
                                                className="btn btn-color1 w-100 mt-2"
                                                onClick={() =>
                                                    router.push(`/booking/${k.tenantId}/booking`)
                                                }
                                            >
                                                Zum Anbieter
                                            </button>

                                            <div
                                                className="position-absolute"
                                                style={{ top: 20, right: 20 }}
                                            >
                                                {likedSuppliers.includes(
                                                    k.tenantId
                                                ) ? (
                                                    <div
                                                        className="icon-container hoveri"
                                                        onClick={() => toggleLike(k.tenantId)}
                                                    >
                                                        <IoIosHeart size={30} color="black" />
                                                    </div>
                                                ) : (
                                                    <div
                                                        className="icon-container hoveri"
                                                        onClick={() => toggleLike(k.tenantId)}
                                                    >
                                                        <IoIosHeartEmpty size={30} color="black" />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))
            )}
        </div>
    );



}


export const demoData = {
    tenantSuggestions: [
        {
            key: "Friseure",
            tenants: [
                {
                    address: "Bahnhofstraße 12",
                    city: "Kassel",
                    country: "Deutschland",
                    email: "info@hairstyle-kassel.de",
                    name: "HairStyle Kassel",
                    phone: "0561 123456",
                    slug: "hairstyle-kassel",
                    tenantId: 1,
                    tenantTypeId: 2,
                    zipCode: "34117",
                    images: [
                        {
                            imageId: 1,
                            imageName: "salon_innen",
                            imageUrl:
                                "https://images.unsplash.com/photo-1589984662646-5c4a90e8d3b2?auto=format&fit=crop&w=800&q=60",
                            tenantId: 1,
                        },
                        {
                            imageId: 2,
                            imageName: "haarschnitt",
                            imageUrl:
                                "https://images.unsplash.com/photo-1593697820673-0cdd73d43e06?auto=format&fit=crop&w=800&q=60",
                            tenantId: 1,
                        },
                    ],
                    services: [
                        {
                            serviceId: 1,
                            tenantId: 1,
                            name: "Haarschnitt Damen",
                            description: "Waschen, Schneiden, Föhnen",
                            durationMinutes: 45,
                            price: 39.9,
                        },
                        {
                            serviceId: 2,
                            tenantId: 1,
                            name: "Haarschnitt Herren",
                            description: "Waschen, Schneiden, Stylen",
                            durationMinutes: 30,
                            price: 25.5,
                        },
                    ],
                },
                {
                    address: "Hauptstraße 44",
                    city: "Kassel",
                    country: "Deutschland",
                    email: "kontakt@cutandstyle.de",
                    name: "Cut & Style",
                    phone: "0561 987654",
                    slug: "cut-and-style",
                    tenantId: 2,
                    tenantTypeId: 2,
                    zipCode: "34119",
                    images: [
                        {
                            imageId: 3,
                            imageName: "salon_front",
                            imageUrl:
                                "https://images.unsplash.com/photo-1605980776566-02e55b5e4f91?auto=format&fit=crop&w=800&q=60",
                            tenantId: 2,
                        },
                    ],
                    services: [
                        {
                            serviceId: 3,
                            tenantId: 2,
                            name: "Färben & Schneiden",
                            description: "Coloration inklusive Haarschnitt",
                            durationMinutes: 90,
                            price: 69.9,
                        },
                    ],
                },
            ],
        },
        {
            key: "Kosmetikstudios",
            tenants: [
                {
                    address: "Wilhelmstraße 8",
                    city: "Kassel",
                    country: "Deutschland",
                    email: "beauty@glowup.de",
                    name: "GlowUp Kosmetikstudio",
                    phone: "0561 654321",
                    slug: "glowup-kosmetik",
                    tenantId: 3,
                    tenantTypeId: 3,
                    zipCode: "34117",
                    images: [
                        {
                            imageId: 4,
                            imageName: "studio",
                            imageUrl:
                                "https://images.unsplash.com/photo-1606899098930-3a79b1e6644d?auto=format&fit=crop&w=800&q=60",
                            tenantId: 3,
                        },
                    ],
                    services: [
                        {
                            serviceId: 4,
                            tenantId: 3,
                            name: "Gesichtsbehandlung",
                            description: "Tiefenreinigende Pflege für jeden Hauttyp",
                            durationMinutes: 60,
                            price: 59.9,
                        },
                        {
                            serviceId: 5,
                            tenantId: 3,
                            name: "Maniküre",
                            description: "Professionelle Handpflege und Nagelstyling",
                            durationMinutes: 30,
                            price: 29.9,
                        },
                    ],
                },
                {
                    address: "Goethestraße 11",
                    city: "Kassel",
                    country: "Deutschland",
                    email: "info@beautyqueen.de",
                    name: "Beauty Queen",
                    phone: "0561 333222",
                    slug: "beauty-queen",
                    tenantId: 4,
                    tenantTypeId: 3,
                    zipCode: "34121",
                    images: [
                        {
                            imageId: 5,
                            imageName: "beauty_room",
                            imageUrl:
                                "https://images.unsplash.com/photo-1606220945770-bb3aa4f9b91e?auto=format&fit=crop&w=800&q=60",
                            tenantId: 4,
                        },
                    ],
                    services: [
                        {
                            serviceId: 6,
                            tenantId: 4,
                            name: "Wimpernverlängerung",
                            description: "Einzelwimpern Technik, natürliches Ergebnis",
                            durationMinutes: 90,
                            price: 79.0,
                        },
                    ],
                },
            ],
        },
        {
            key: "Nagelstudios",
            tenants: [
                {
                    address: "Königsplatz 9",
                    city: "Kassel",
                    country: "Deutschland",
                    email: "info@nailart.de",
                    name: "Nail Art Kassel",
                    phone: "0561 112233",
                    slug: "nail-art-kassel",
                    tenantId: 5,
                    tenantTypeId: 4,
                    zipCode: "34117",
                    images: [
                        {
                            imageId: 6,
                            imageName: "nailstudio",
                            imageUrl:
                                "https://images.unsplash.com/photo-1608647332285-9222da3f1f3f?auto=format&fit=crop&w=800&q=60",
                            tenantId: 5,
                        },
                    ],
                    services: [
                        {
                            serviceId: 7,
                            tenantId: 5,
                            name: "Nagelmodellage",
                            description: "Neumodellage mit Gel",
                            durationMinutes: 75,
                            price: 49.9,
                        },
                        {
                            serviceId: 8,
                            tenantId: 5,
                            name: "Auffüllen",
                            description: "Auffüllen bestehender Nägel",
                            durationMinutes: 60,
                            price: 35.0,
                        },
                    ],
                },
            ],
        },
    ],
};
