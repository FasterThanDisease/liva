import React, { useState, useEffect } from 'react'
import { IoMdArrowForward } from "react-icons/io";
import { toaster } from '../ui/toaster';

export default function Contact() {

    const [loading, setLoading] = useState(false);
    const [contact, setContact] = useState({ firstName: '', lastName: '', phone: '', email: '', topic: '' })
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(null)

    function handleChange(e) {
        const { name, value } = e.target
        setError(null)
        setContact((ps) => ({ ...ps, [name]: value }));
    }

    async function submit() {
        try {
            if (['', null, undefined].includes(contact.firstName)) return setError(20)
            if (['', null, undefined].includes(contact.phone)) return setError(22)
            if (['', null, undefined].includes(contact.email)) return setError(23)

            setLoading(true)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(contact.email)) return setError(24); // Fehlercode 24 für ungültige E-Mail-Adresse


            const phoneRegex = /^[\d\s\-+()]+$/;
            if (!phoneRegex.test(contact.phone)) return setError(25);




            const res = await fetch("/api/emailnodemailer", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(contact),
            });

            if (res.ok) {
                setSuccess(true)
                setContact({ firstName: '', lastName: '', phone: '', email: '', topic: '' })
                toaster.create({
                    title: 'Vielen Dank',
                    description: 'Wir haben Ihre Nachricht erhalten und melden uns schnellstmöglich',
                    type: 'success', // success | error | warning | loading
                    closable: true,
                });
            } else {
                const err = await res.json();
                setError(99)
            }
        } catch (err) {
            console.log(err)
            setLoading(false)
            setError(99)
        }
        finally {

            setLoading(false);

        }


    }


    console.log(contact)

    return (

        <div className="container-fluid  p-0">
            <div className="row text-dark p-0" >

                <div className="col-12 py-3  ">
                    <div className='form-floating'>
                        <input className='form form-control ' onChange={(e) => handleChange(e)} type='text' placeholder='Vor- und Nachnamr' value={contact.firstName} name='firstName' />
                        <label htmlFor='Name'>Vor- und Nachname  <span className='text-danger'>*</span></label>
                    </div>
                </div>
                <div className="col-12 py-3  ">
                    <div className='form-floating'>
                        <input className='form form-control' onChange={(e) => handleChange(e)} type='email' placeholder='E-Mail-Adresse' autoComplete='email' value={contact.email} name='email' />
                        <label htmlFor='email'>E-Mail Adresse  <span className='text-danger'>*</span></label>
                    </div>
                </div>
                <div className="col-12 py-3">
                    <div className='form-floating'>
                        <input className='form form-control' onChange={(e) => handleChange(e)} type='text' placeholder='Telefonnummer' autoComplete='tel' value={contact.phone} name='phone' />
                        <label htmlFor='email'>Telefonnummer  </label>
                    </div>
                </div>


                <div className="col-12 py-3">
                    <textarea
                        className="form form-control"
                        placeholder="Ihre Nachricht an mich"
                        value={contact.topic}
                        name="topic"
                        onChange={(e) => handleChange(e)}
                        maxLength={5000} // hier wird die Eingabe begrenzt
                    />
                    <small className="text-muted">{contact.topic.length}/5000 Zeichen</small>
                </div>

                <div className="col-12 py-4">
                    <button
                        onClick={() => submit()}
                        className="btn btn-color1">
                        <span className="hover-item"><IoMdArrowForward size={25} /></span>
                        <span className="button-text">{loading ? <span className='spinner spinner-border' /> : 'Absenden'}</span>
                    </button>
                    <div className='py-2'>
                        {error === 20 && <span className='text-danger'>Bitte geben Sie Ihren Namen an.</span>}
                        {error === 22 && <span className='text-danger'>Bitte geben Sie Ihre Telefonnummer an.</span>}
                        {error === 23 && <span className='text-danger'>Bitte geben E-Mail Adresse an.</span>}
                        {error === 25 && <span className='text-danger'>Bitte geben Sie eine gültige Telefonnummer an.</span>}
                        {error === 24 && <span className='text-danger'>Bitte geben Sie eine gültige E-Mail Adresse an.</span>}
                        {error === 99 && <span className='text-danger'>Es ist ein Fehler aufgetreten. Bitte wenden Sie sich mit Ihrem Anliegen direkt an <a href='mailto:info.novaesolutions@gmail.com'>info.novaesolutions@gmail.com</a>.</span>}
                    </div>
                </div>
            </div>
        </div>

    )
}
