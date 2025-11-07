import React, { useState, useEffect } from "react";
import styles from "../../styles/Toast.module.scss";

export default function Toast({ message, type, onClose }) {
    useEffect(() => {
        const timer = setTimeout(onClose, 5000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`${styles.toast} ${type === "success" ? styles.success : styles.error}`}>
            {message}
        </div>
    );
};

