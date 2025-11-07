import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine, RiPhoneFill } from "react-icons/ri";
import { register } from '@/pages/api/user';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';

export default function AuthForm({ closeAction }) {
    const router = useRouter();
    const [stage, setStage] = useState(0); // 0 = Login, 1 = Register
    const { login } = useAuth(); // Annahme: register existiert im Kontext
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
        passwordwdh: "",
        phone: "",
    });



    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState(false);

    // === Input Validierung ===
    const validateInputs = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const sanitizedEmail = credentials.username.trim().toLowerCase();
        const sanitizedPassword = credentials.password.trim();

        if (!emailRegex.test(sanitizedEmail)) {
            setError("Bitte gib eine gültige E-Mail-Adresse ein.");
            return false;
        }
        if (sanitizedPassword.length < 6) {
            setError("Das Passwort muss mindestens 6 Zeichen lang sein.");
            return false;
        }
        if (stage === 1 && sanitizedPassword !== credentials.passwordwdh.trim()) {
            setError("Die Passwörter stimmen nicht überein.");
            return false;
        }

        setCredentials((prev) => ({
            ...prev,
            username: sanitizedEmail,
            password: sanitizedPassword,
        }));
        return true;
    };

    const handleChange = (e) => {
        setError(null);
        setCredentials((ps) => ({ ...ps, [e.target.name]: e.target.value }));
    };

    // === Login Funktion ===
    async function handleLogin() {
        if (!validateInputs()) return;
        setLoading(true);
        try {
            const success = await login(credentials.username, credentials.password);
            if (success) {
                closeAction();
            } else {
                setError("Ungültige E-Mail oder Passwort.");
            }
        } catch (error) {
            console.error("Anmeldefehler:", error);
            setError("Fehler bei der Anmeldung.");
        } finally {
            setLoading(false);
        }
    }

    // === Registrierung ===
    async function handleRegister() {
        if (!validateInputs()) return;
        setLoading(true);
        try {
            const success = await register(credentials);
            console.log(success)
            if (success) {
                if (success.code === -1) {
                    setError("Diese E-Mail-Adresse existiert bereits. Bitte melde dich an oder registriere dich mit einer anderen");
                }
                else if (success.code === -2) {
                    setError("Fehler bei der Registrierung, bitte wenden Sie sich an den Support");
                }
                else if (success.code === 1) {
                    alert("Registrierung erfolgreich! Du kannst dich jetzt anmelden.");
                    setStage(0);
                }
            } else {
                setError("Fehler bei der Registrierung, bitte wenden Sie sich an den Support");
            }
        } catch (error) {
            console.error("Registrierungsfehler:", error);
            setError("Fehler bei der Registrierung.");
        } finally {
            setLoading(false);
        }
    }

    // === UX: Enter Key Support ===
    const handleKeyDown = async (event) => {
        if (event.key === "Enter") {
            stage === 0 ? await handleLogin() : await handleRegister();
        }
    };

    // === Gemeinsames UI ===
    return (
        <>

            <div className="w-100 p-3 ">
                <div className="">

                    {stage === 1 && (
                        <div className="container-fluid">
                            <div className="row p-0 ">
                                <div className="col-md-6 mb-3 p-0">
                                    <div className="form-floating">
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="firstname"
                                            id="firstname"
                                            onChange={handleChange}
                                            value={credentials.firstname}
                                            placeholder="Vorname"
                                            onKeyDown={handleKeyDown}
                                            required
                                        />
                                        <label htmlFor="firstname">Vorname</label>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 p-0">
                                    <div className="form-floating">
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="lastname"
                                            id="lastname"
                                            onChange={handleChange}
                                            value={credentials.lastname}
                                            placeholder="Nachname"
                                            onKeyDown={handleKeyDown}
                                            required
                                        />
                                        <label htmlFor="lastname">Nachname</label>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )}

                    {/* E-Mail */}
                    <div className="form-floating mb-3">
                        <input
                            className="form-control"
                            type="email"
                            name="username"
                            id="username"
                            onChange={handleChange}
                            value={credentials.username}
                            placeholder="E-Mail Adresse"
                            onKeyDown={handleKeyDown}
                            required
                        />
                        <label className='d-flex align-items-center' htmlFor="username">
                            <div>
                                <MdEmail className="me-1" />
                            </div>
                            <span>

                                E-Mail-Adresse
                            </span>
                        </label>
                    </div>

                    {/* Passwort */}
                    <div className="form-floating mb-3">
                        <input
                            className="form-control"
                            type="password"
                            name="password"
                            id="password"
                            onChange={handleChange}
                            value={credentials.password}
                            placeholder="Passwort"
                            onKeyDown={handleKeyDown}
                            required
                        />
                        <label className='d-flex align-items-center' htmlFor="password">
                            <div>
                                <RiLockPasswordLine className="me-1" />
                            </div>
                            <span>

                                Passwort
                            </span>

                        </label>
                    </div>

                    {/* Passwort Wiederholung nur bei Registrierung */}
                    {stage === 1 && (
                        <div className="form-floating mb-3">
                            <input
                                className="form-control"
                                type="password"
                                name="passwordwdh"
                                id="passwordwdh"
                                onChange={handleChange}
                                value={credentials.passwordwdh}
                                placeholder="Passwort wiederholen"
                                onKeyDown={handleKeyDown}
                                required
                            />
                            <label className='d-flex align-items-center' htmlFor="passwordwdh">
                                <div>
                                    <RiLockPasswordLine className="me-1" />
                                </div>
                                <span>

                                    Passwort wiederholen
                                </span>

                            </label>
                        </div>
                    )}

                    {/* Telefonnummer (optional) */}
                    {stage === 1 && (
                        <div className="form-floating mb-3">
                            <input
                                className="form-control"
                                type="tel"
                                name="phone"
                                id="phone"
                                onChange={handleChange}
                                value={credentials.phone}
                                placeholder="Telefonnummer (optional)"
                                pattern="^[0-9+\s()-]*$"
                                onKeyDown={handleKeyDown}
                            />
                            <label className='d-flex align-items-center' htmlFor="phone">
                                <div>
                                    <RiPhoneFill className="me-1" />
                                </div>
                                <span>

                                    Telefonnummer
                                </span>

                            </label>
                        </div>
                    )}

                    {/* Fehlermeldung */}
                    {error && <div className="alert alert-danger py-2">{error}</div>}

                    {/* Button */}
                    <button
                        className="btn btn-dark w-100 py-2 mt-2"
                        disabled={loading}
                        onClick={stage === 0 ? handleLogin : handleRegister}
                    >
                        {loading ? (
                            <span className="spinner-border spinner-border-sm"></span>
                        ) : stage === 0 ? (
                            "Anmelden"
                        ) : (
                            "Registrieren"
                        )}
                    </button>

                    {/* Umschalter */}
                    <div className="text-center mt-3">
                        {stage === 0 ? (
                            <span>
                                Noch kein Konto?{" "}
                                <button
                                    className="btn btn-link p-0"
                                    onClick={() => setStage(1)}
                                >
                                    Jetzt registrieren
                                </button>
                            </span>
                        ) : (
                            <span>
                                Bereits registriert?{" "}
                                <button
                                    className="btn btn-link p-0"
                                    onClick={() => setStage(0)}
                                >
                                    Hier anmelden
                                </button>
                            </span>
                        )}
                    </div>
                </div>
            </div>

        </>
    );
}
