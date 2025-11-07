import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { BsXCircleFill } from 'react-icons/bs';
import { useOnClickOutside } from '../hooks/useOutsideClick';
import { RxCross2 } from "react-icons/rx";

export default function Popup({ openState, closeAction, label, children }) {

    const ref = React.useRef();
    const stylePopup = {
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        width: '100%',
        right: 0,
        backgroundColor: "rgba(0,0,0,0.4)",
        zIndex: 9999999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    useOnClickOutside(ref, () => closeAction())


    useEffect(() => {
        if (openState) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [openState]);

    if (!openState) return null;



    return (
        <motion.div style={stylePopup} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} >
            <motion.div ref={ref} className="popi3 hidescrollbar" style={{ borderRadius: 5 }} initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
                <div className="d-flex flex-row align-items-center justify-content-between w-100 py-3 p-3"  >
                    {label && <span className='fw-bold'>{label}</span>}
                    <div className='icon-container'>
                        <RxCross2 size={28} onClick={closeAction} style={{ cursor: "pointer" }} />
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-between align-items-center ">
                    {children}
                </div>
            </motion.div>
        </motion.div>
    )
}
