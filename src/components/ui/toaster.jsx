import React, { useState, useEffect } from 'react';

let addToastCallback; // globale Referenz für toaster.create
let toastId = 0;

export const toaster = {
  create: ({ title, type = 'success', duration = 3000 }) => {
    if (addToastCallback) {
      addToastCallback({ id: toastId++, message: title, type, duration });
    }
  }
};

export const Toaster = () => {
  const [toasts, setToasts] = useState([]);

  // Setze Callback global
  useEffect(() => {
    addToastCallback = (toast) => {
      setToasts(prev => [...prev, toast]);
    };
    return () => {
      addToastCallback = null;
    };
  }, []);

  // Automatisches Entfernen nach duration
  useEffect(() => {
    const timers = toasts.map(toast =>
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== toast.id));
      }, toast.duration)
    );
    return () => timers.forEach(t => clearTimeout(t));
  }, [toasts]);

  return (
    <div className="toaster-container">
      {toasts.map(toast => (
        <div key={toast.id} className={`toast ${toast.type}`}>
          <span>{toast.message}</span>
          <button onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}>
            ✕
          </button>
        </div>
      ))}
    </div>
  );
};
