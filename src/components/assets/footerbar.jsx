import React from "react";
import { useRouter } from "next/router";



export default function Footerbar({ state, setState, setError, submit, loading, }) {

    const router = useRouter();

    async function registeri() {

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tenants/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY
                },
                body: JSON.stringify(state),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Fehler beim Registrieren: ${errorText}`);
            }

            const data = await response.json();
            const { message, identifier } = data
            if (message === '-1') {
                queueMicrotask(() => setError(803));
            }
            else if (message === "1") {
                router.push(`registrationsuccess?identifier=${identifier}`)
            }
            console.log("Tenant erfolgreich registriert:", data);

            // Optional: State oder UI zurücksetzen
            // setSupplier(initialSupplierState);
        } catch (err) {
            console.error("Fehler:", err.message);
            alert(`Fehler beim Registrieren: ${err.message}`);
        }

    }

    function onBack(k) {
        setError(null)
        setState(ps => ({ ...ps, stage: ps.stage === 0 ? null : ps.stage - 1 }))
    }

    function onNext() {
        setError(null)
        if (state.stage === 0) {
            setState(ps => ({ ...ps, stage: ps.stage + 1 }))
        }
        else if (state.stage === 1) {
            if (['', undefined, null].includes(state.tenantTypeId)) {
                return setError(31);
            }
        }
        else if (state.stage === 2) {
            if (state.services.length === 0) {
                return setError(2);
            }
            else {
                setState(ps => ({ ...ps, stage: ps.stage + 1 }))
            }
        }
        else if (state.stage === 3) {
            if (state.services.some(k => (k.durationMinutes == 0))) {
                return setError(55)
            }
            else if (state.services.some(k => (k.price == 0))) {
                return setError(56)
            }
            setState(ps => ({ ...ps, stage: ps.stage + 1 }))
        }

        else if (state.stage === 4) {
            if (
                state.hours.some(
                    (k) =>
                        [null, undefined, ""].includes(k.openTime) ||
                        [null, undefined, ""].includes(k.closeTime)
                )
            ) {
                return setError(33);
            }
            else {
                setState(ps => ({ ...ps, stage: ps.stage + 1 }))
            }
        }

        else if (state.stage === 5) {
            if (
                [state.email, state.address, state.phone, state.name, state.zipcode, state.city]
                    .some((value) => ['', undefined, null].includes(value))
            ) {
                setError(2);
            }
            else {
                setState(ps => ({ ...ps, stage: ps.stage + 1 }))
            }
        }
        else if (state.stage === 6) {
            if (
                [state.fname, state.fadress, state.fzip, state.fcity]
                    .some((value) => ['', undefined, null].includes(value))
            ) {
                setError(3);
            }
            else if (state.password !== state.passwordwdh) {
                return setError(44)
            }
            else {
                submit();
            }
        }

        else {
            setState(ps => ({ ...ps, stage: ps.stage + 1 }))
        }
    }

    return (
        <div className="w-100 fixed-bottom bg-white py-3 px-2 ">

            <div className="progress w-100  " style={{ minHeight: 15 }}>
                <div className="progress-bar bg1 position-relative  " role="progressbar" aria-label="Registration Supplier" title="Anbieterregistrierung Fortschrittsanzeige" aria-labelledby="labeldiv" style={{ width: `${((state.stage + 1) / 7) * 100}%`, minHeight: 15 }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                    <div className="position-absolute">
                        {/* <span className="font2 px-3 text-dark" style={{ fontSize: '1.2em' }}>{`${((order.stage + 1) / 5) * 100}%`}</span> */}
                    </div>
                </div>
            </div>

            <div className="d-flex d-flex justify-content-between align-items-center mt-3 ">


                <button
                    className="btn btn-link text-secondary"
                    onClick={onBack}
                    disabled={state.stage <= 0 ? true : false}
                >
                    <span style={{ fontSize: 15, fontWeight: 450 }}><u>Zurück</u></span>
                </button>
                <button
                    className="btn btn-color1 px-4"
                    onClick={() => state.stage >= 6 ? registeri() : onNext()}

                >
                    {loading ? <span className="spinner spinner-border"></span> : state.stage >= 6 ? 'Abschließen' : 'Weiter'}
                </button>
            </div>
        </div>
    );
}


