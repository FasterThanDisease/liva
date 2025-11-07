import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdArrowForward } from 'react-icons/io';
import { HiMiniPhone } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import Image from 'next/image';


export default function Header() {
    const router = useRouter();
    const [isOpen2, setIsOpen2] = useState(false);
    const [hideTopBar, setHideTopBar] = useState(false);

    useEffect(() => {
        let lastScrollTop = 0;

        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop && scrollTop > 50) {
                setHideTopBar(true); // Scroll nach unten → verstecke Topbar
            } else {
                setHideTopBar(false); // Scroll nach oben → zeige Topbar
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <header className="fixed-top" style={{ zIndex: 999999 }}>


            <div className={` d-flex w-100 justify-content-center bg1 topbar ${hideTopBar ? 'hidden' : ''}`}>
                <div className="d-flex justify-content-start align-items-center text-dark text-center py-3 " style={{ fontSize: '1.2em' }}>
                    <span>
                        Auch ohne Termin - Jetzt anrufen: <a href="tel:+4956134914" className="text-dark text-decoration-none pointer"><u>(+49) 561 349 14</u></a>
                    </span>
                </div>
            </div>



            <div className="container-fluid">
                {/* <div className="row bg-white justify-content-start align-items-center shadow shadow-bottom shadow-sm py-2">
             
                    <div className="col-6 col-md-6 d-flex align-items-center justify-content-start">
                        <picture>

                            <Image
                                src="/logo.webp"
                                onClick={() => router.push('/')}
                                className="pointer"
                                alt="Liva Hairdress Logo"
                                priority
                                width={150}
                                height={150}
                                style={{ objectFit: 'contain', cursor: 'pointer' }}
                            />
                        </picture>
                    </div>

                 
                    <div className="col-xl-6 d-none d-xl-flex align-items-center justify-content-center">
                        <Link href="/" className="text-dark text-decoration-none px-5">
                            <span className="font2 span-hover " style={{ fontSize: '1.1em' }}>Startseite</span>
                        </Link>
                        <div className="nav-item">
                            <div className="d-flex justify-content-center align-items-center">
                                <div onClick={() => router.push('/')} className='pointer' style={{ flex: 1, alignSelf: 'center' }}><span className=' pointer span-hover font1' style={{ fontSize: '1.1em' }}>Dienstleistungen</span></div>
                                <div style={{ flex: 0.1, alignSelf: 'center', textAlign: 'center' }}>
                                    <IoIosArrowDown className='icon' size={20} style={{ alignSelf: 'center' }} />
                                </div>
                            </div>
                            <div className="dropdown-content">
                                <Link href="/leistungen" className="text-dark text-decoration-none d-block py-2 font1">Haarschnitt</Link>
                                <Link href="/leistungen" className="text-dark text-decoration-none d-block py-2 font1">Frisuren</Link>
                                <Link href="/leistungen" className="text-dark text-decoration-none d-block py-2 font1">Bart</Link>
                                <Link href="/leistungen" className="text-dark text-decoration-none d-block py-2 font1">Pflege</Link>
                            </div>
                        </div>




                        <Link href="/kontakt" className="text-dark text-decoration-none px-5">
                            <span className="font2 span-hover" style={{ fontSize: '1.1em' }}>Kontakt</span>
                        </Link>
                    </div>



                  
                    <div className="d-flex d-xl-none col-6 justify-content-end align-items-center">
                        <RxHamburgerMenu size={30} className="pointer" onClick={() => setIsOpen2(!isOpen2)} />
                    </div>
                </div> */}
            </div>
        </header>
    );
}
