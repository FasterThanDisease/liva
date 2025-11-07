import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const LOCAL_STORAGE_KEY = 'checkoutData';

const defaultData = {
    stage: 0,
    staffId: 0,
    tenantId: 52,
    paymentmethod: 'invoice',
    order: {},
    user: { email: '', firstName: '', lastName: '' },
    guest: { name: '', email: '', phone: '' },
    from: '',
    timeslot: null,
};

const CheckoutContext = createContext({
    order: defaultData,
    setOrder: () => { },
});

export const useCheckout = () => useContext(CheckoutContext);

export function CheckoutProvider({ children }) {
    const [order, setOrderState] = useState(defaultData);
    const { user } = useAuth();

    // Lädt gespeicherte Daten aus localStorage beim ersten Render
    useEffect(() => {
        const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (savedData) {
            try {
                setOrderState(JSON.parse(savedData));
            } catch (e) {
                console.error('Fehler beim Parsen von localStorage checkoutData:', e);
            }
        }
    }, []);

    useEffect(() => {
        if (user) {
            setOrder(ps => ({ ...ps, user: user }))
        }
    }, [user])

    // Speichert aktuelle Daten in localStorage bei jeder Änderung
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(order));
    }, [order]);

    const setOrder = (data) => {
        setOrderState(data);
    };

    return (
        <CheckoutContext.Provider value={{ order, setOrder }}>
            {children}
        </CheckoutContext.Provider>
    );
}
