import React, { useState } from "react";
import { FaUser, FaFolder, FaCog } from "react-icons/fa";
import Link from "next/link";

export default function Tabbar({ tabs }) {
    const [activeTab, setActiveTab] = useState(tabs[0].name);


    return (

        <div className="tabs">
            {tabs.map((tab) => (
                <div
                    key={tab.name}
                    className={`tab item ${activeTab === tab.name ? "active" : ""}`}
                    onClick={() => setActiveTab(tab.name)}
                >
                    <a href={tab.section} scroll={false} style={{ textDecoration: 'none', color: '#000', textDecorationColor: 'none' }}>

                        {tab.icon}
                        {tab.name}

                    </a>
                </div>
            ))}
        </div>

    );
};


