import React, { useState, useRef } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

export function Paragraph({ title, children, open, handletoggle }) {

    const contentRef = useRef(null);

    return (
        <div
            className={`col-12 pointer py-3 paragraph ${open ? "active" : ""}`}
            onClick={handletoggle}
        >
            <div className="bg-white border-bottom  rounded-4  text-dark w-100 p-3 rounded ">
                {/* Frage & Icon in einer Zeile */}
                <div className="d-flex justify-content-between align-items-center w-100">
                    <p
                        style={{ flex: 9, fontSize: '1.2em', fontWeight: 500, marginBottom: 0 }}
                        className="ms-3 d-flex align-items-center"
                    >
                        {title}
                    </p>
                    <div className="d-flex align-items-center" style={{ flex: 1 }}>
                        <div className={`icon-wrapper ${open ? "open" : ""}`}>
                            {open ? <FaMinus size={30} color="black" /> : <FaPlus size={25} color="black" />}
                        </div>
                    </div>
                </div>

                {/* Antwortbereich */}
                <div
                    className="faq-content text-start overflow-hidden"
                    style={{
                        maxHeight: open ? `${contentRef.current?.scrollHeight}px` : "0px",
                        opacity: open ? 1 : 0,
                        transition: "max-height 0.3s ease-out, opacity 0.3s ease-out",
                    }}
                    ref={contentRef}
                >
                    <div className="p-3">{children}</div>
                </div>
            </div>
        </div>


    );
}
