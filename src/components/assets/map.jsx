"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const Map = dynamic(() => import("./Leafletmap"), { ssr: false });
export default Map;
