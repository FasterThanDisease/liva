import React from 'react'
import Link from 'next/link';
import { CiChat1 } from "react-icons/ci";

export default function Contactcta() {
    return (
        <section
            className="position-fixed  d-flex justify-content-center align-items-center"
            style={{
                bottom: 10,
                right: 10,
                padding: '30px',
                transform: 'translateY(-50%)',
                backgroundColor: '#ecdf97', // Gelb
                borderRadius: '50px',
                width: '70px',
                height: '70px',
                zIndex: 9999,
            }}
        >
            <Link href={'/kontakt'} >
                <CiChat1 size={55} color="white" />
            </Link>
        </section>
    )
}
