import React, { useState, useEffect } from "react";
import { SiContentful, SiSendgrid } from "react-icons/si";
import { FaStripe } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { VscAzure } from "react-icons/vsc";
import { PiFramerLogoLight } from "react-icons/pi";


export default function Partners() {


    return (
        <div className="col-12  d-flex flex-wrap gap-3" style={{ paddingTop: 50 }}>
            <div style={{ flex: 1 }}>
                <SiContentful size={100} color="black" />
            </div>
            <div style={{ flex: 1 }}>
                <FaStripe size={100} color="black" />
            </div>
            <div style={{ flex: 1 }}>
                <FaBootstrap size={100} color="black" />
            </div>
            <div style={{ flex: 1 }}>
                <RiNextjsFill size={100} color="black" />
            </div>
            <div style={{ flex: 1 }}>
                <VscAzure size={100} color="black" />
            </div>
            <div style={{ flex: 1 }}>
                <SiSendgrid size={100} color="black" />
            </div>
            <div style={{ flex: 1 }}>
                <PiFramerLogoLight size={100} color="black" />
            </div>

        </div>
    )
}