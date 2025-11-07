import React, { useEffect, useState, useRef } from "react";
import { useOnClickOutside } from "../hooks/useOutsideClick";

import { Button } from "@/components/ui/button"
import {
    DrawerActionTrigger,
    DrawerBackdrop,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerRoot,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { useRouter } from "next/router";
import { IoHomeSharp } from "react-icons/io5";
import { GiBarefoot } from "react-icons/gi";
import { FaQuestion } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { GiCarWheel } from "react-icons/gi";



export default function SideSlider({ open, setOpen, Children }) {
    const router = useRouter();

    const btnRef = React.useRef()

    const [stage, setStage] = useState(0)

    function process() {
        setOpen(false)
    }

    function link(k) {
        router.push(k)
        setOpen(false)
    }


    function link(k) {
        router.push(k)
        return setOpen(false)

    }



    useOnClickOutside(btnRef, () => setOpen(false));
    return (
        <div className="d-flex d-xl-none " style={{ zIndex: 9999 }} >
            <DrawerRoot placement="top" size={'xl'} open={open} onClose={() => setOpen(false)}>
                <DrawerBackdrop />
                <DrawerContent roundedBottom="l3" backgroundColor="white">
                    <DrawerHeader>
                        <DrawerTitle>Werkstatt Boxenstopp</DrawerTitle>
                    </DrawerHeader>
                    <DrawerBody>
                        <div ref={btnRef} className="d-flex flex-column gap-3 " style={{ minHeight: 500 }}>

                            <div className="d-flex align-items-center pointer p-3 grey-hover border border-sm shadow shadow-sm"
                                onClick={() => link('/')}>
                                <div className="icon-container bg1">
                                    <IoHomeSharp color="white" size={25} />
                                </div>
                                <span className="ms-3" style={{ fontSize: '1.2em', fontWeight: 500 }}>Startseite</span>
                            </div>

                            <div className="d-flex align-items-center pointer p-3 grey-hover border border-sm shadow shadow-sm"
                                onClick={() => link('/leistungen')}>
                                <div className="icon-container bg1">
                                    <GiCarWheel color="white" size={25} />
                                </div>
                                <span className="ms-3" style={{ fontSize: '1.2em', fontWeight: 500 }}>Leistungen</span>
                            </div>

                            <div className="d-flex align-items-center pointer p-3 grey-hover border border-sm shadow shadow-sm"
                                onClick={() => link('/kontakt')}>
                                <div className="icon-container bg1">
                                    <IoMdMail color="white" size={25} />
                                </div>
                                <span className="ms-3" style={{ fontSize: '1.2em', fontWeight: 500 }}>Kontakt</span>
                            </div>
                            <div className="d-flex align-items-center pointer p-3 grey-hover border border-sm shadow shadow-sm"
                                onClick={() => link('/faq')}>
                                <div className="icon-container bg1">
                                    <FaQuestion color="white" size={25} />
                                </div>
                                <span className="ms-3" style={{ fontSize: '1.2em', fontWeight: 500 }}>FAQ</span>
                            </div>

                        </div>
                    </DrawerBody>
                    <DrawerCloseTrigger backgroundColor="black" onClick={() => setOpen(false)} />
                </DrawerContent>
            </DrawerRoot>
        </div>


    )
}
