import react, { useEffect, useState } from 'react'
import countries from '../countries.json'
import Router, { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'

export const RegisterSide = ({ language = 'de', user, setUser, error, setError, isLoading, setStage, setLoading }) => {


    const router = useRouter();
    const [servererr, setServererr] = useState();

    async function registeri() {
        if (user.firstName === undefined || user.firstName.trim() === "" || (user.firstName.indexOf("@") !== -1)) return setError(6)
        if (user.lastName === undefined || user.lastName.trim() === "" || (user.lastName.indexOf("@") !== -1)) return setError(7)
        if (user.gender === undefined || user.gender.trim() === "") return setError(8)
        if (user.address === undefined || user.address.trim() === "") return setError(9)
        // if (user.houseNumber === undefined || user.houseNumber.trim() === "") return setError(10)
        if (user.zipCode === undefined || user.zipCode.trim() === "" || (user.zipCode.indexOf("@") !== -1)) return setError(11)
        if (user.City === undefined || user.City.trim() === "" || /\d/.test(user.City)) return setError(12)
        if (user.Country === undefined || user.Country.trim() === "") return setError(13)
        if (user.birthday === undefined || user.birthday.trim() === "" || parseInt(user.birthday.substr(0, 4)) < 1925 || new Date(user.birthday) > new Date()) return setError(14)
        if (user.email === undefined || user.email.trim() === "" || (user.email.indexOf("@") === -1)) return setError(15)
        if (user.password === undefined || user.password.trim() === "" || user.password.length < 6) return setError(16)
        // if (user.mobilPhone === undefined || user.mobilPhone.trim() === "" || !/^\d+$/.test(user.mobilPhone)) return setError(17)
        if (user.mobilPhone === undefined || user.mobilPhone.trim() === "" || (user.mobilPhone.indexOf("@") !== -1) || /[a-zA-Z]/i.test(user.mobilPhone)) return setError(17)
        if (user.agb === undefined || user.agb === 0) return setError(23)
        if (user.pp === undefined || user.pp === 0) return setError(24)
        try {
            setLoading(1)
            const response = await fetch('http://localhost:3300/users/register', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    id: 'bearer',
                    auth: `SPX Yz.828`
                },
                body: JSON.stringify(
                    user
                )
            })
            if (!response.ok) {
                setLoading(0);
                response.text().then(errorMessage => {
                    setServererr(errorMessage)
                });
                throw new Error(`HTTP error! status: ${response.status}`);

            }

            const data = await response.json();


            // console.log('returned userobject' , data , data.email , data.passwordHash)

            if (data) {

                // TODO automatischer SignIn und weiterleitung in die Userarea nach erfolgreicher Registrierung

                // signIn('credentials', { 
                //     username: data.email, 
                //     password: data.passwordHash,

                // })

                // signIn('credentials', {
                //     email: data.email,
                //     password: data.passwordHash,
                //     // You could include more fields if required by your `credentials` provider
                //     callbackUrl: `${window.location.origin}/userarea`
                // })
            }

            setLoading(0)
        } catch (e) {
            console.log(e)
            setError(1)
        }
    }


    // console.log(user)


    function handleChange(e) {
        e.preventDefault()
        setUser(ps => ({ ...ps, [e.target.name]: e.target.value }))
        setError(0)
        setServererr(null)
    }




    return (
        <main>
            <div className='container container-fluid' style={{ minHeight: '100vh' }}>
                <div className='row w-100'>
                    <div className='col-12 '>
                        <div className='d-flex flex-row justify-content-center align-items-center w-100 h-100'>
                            <div className="text-center text-dark w-100 p-3" style={{ maxWidth: 600 }}>
                                <h3 className="text-white mt-5">{language === 'de' ? 'Registrierung bei MapMyMeet' : 'registration for MapMyMeet'}</h3>
                                <p className="color4">{language === 'de' ? 'Erstellen Sie hier zunächst Ihr Konto:' : 'Create an account here first:'}</p>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <InputLabel label={language === 'de' ? 'Vorname' : 'First Name'} name="firstName" action={handleChange} />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <InputLabel label={language === 'de' ? 'Nachname' : 'Last Name'} name="lastName" action={handleChange} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 ">
                                        <InputLabel label={language === 'de' ? "Straße + Hausnummer" : 'Address + house number'} name="address" action={handleChange} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <InputLabel label={language === 'de' ? 'PLZ' : "Zip Code"} name="zipCode" action={handleChange} />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <InputLabel label={language === 'de' ? 'Ort' : "City"} name="City" action={handleChange} />
                                    </div>
                                </div>
                                <InputLabel7 label={language === 'de' ? 'Land' : "Country"} name="Country" action={handleChange} />
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <InputLabel6 label={language === 'de' ? "Geschlecht" : 'Gender'} name="gender" action={handleChange} />
                                    </div>
                                    <label htmlFor="" className="mt-1 d-flex d-md-none justify-content-center" style={{ fontSize: 10 }}>Geburtsdatum</label>
                                    <div className="col-12 col-md-6 d-flex justify-content-between d-flex d-md-none mb-2">

                                        <select name="" id="" className="form-control form-control-sm" value={user.birthday !== "" ? parseInt(user.birthday.substr(8, 2)) : "-1"} onChange={(e) =>
                                            parseInt(e.target.value) === -1 ? alert('Bitte geben ein gültiges tag') :
                                                (setUser(ps => ({
                                                    ...ps,
                                                    birthday: new Date(new Date(user.birthday).setDate(parseInt(e.target.value))).toISOString().substring(0, 10)
                                                })))
                                        }>
                                            <option value={-1} >Tag</option>
                                            {Array.from({ length: 31 }, (_, i) => (
                                                <option value={i + 1} key={i}>{i + 1}</option>
                                            )
                                            )}
                                        </select>
                                        <select name="" id="" className="form-control form-control-sm mx-2" value={user.birthday.substr(5, 2)} onChange={(e) =>
                                            e.target.value === "" ? alert('Bitte geben ein gültiges tag') :
                                                (

                                                    setUser(ps => ({
                                                        ...ps,
                                                        birthday: user.birthday.substr(0, 5) + e.target.value + user.birthday.substr(7, 3)
                                                    })), console.log(user.birthday)
                                                )
                                        }>
                                            <option value={""} >Monat</option>

                                            <option value={"01"} >1</option>
                                            <option value={"02"} >2</option>
                                            <option value={"03"} >3</option>
                                            <option value={"04"} >4</option>
                                            <option value={"05"} >5</option>
                                            <option value={"06"} >6</option>
                                            <option value={"07"} >7</option>
                                            <option value={"08"} >8</option>
                                            <option value={"09"} >9</option>
                                            <option value={"10"} >10</option>
                                            <option value={"11"} >11</option>
                                            <option value={"12"} >12</option>


                                        </select>
                                        <select name="" id="" className="form-control form-control-sm" value={user.birthday !== "" ? parseInt(user.birthday.substr(0, 4)) : "-1"} onChange={(e) =>
                                            parseInt(e.target.value) === -1 ? alert('Bitte geben ein gültiges tag') :
                                                (setUser(ps => ({
                                                    ...ps,
                                                    birthday: new Date(new Date(user.birthday).setFullYear(parseInt(e.target.value))).toISOString().substring(0, 10)
                                                })), console.log(user.birthday)
                                                )
                                        }>
                                            <option value={-1}>Jahr</option>
                                            {Array.from({ length: 110 }, (_, i) => (
                                                <option value={2021 - i} key={i}>{2021 - i}</option>
                                            )
                                            )}
                                        </select>
                                    </div>
                                    <div className="col-12 col-md-6 d-flex justify-content-between d-md-flex d-none mb-2">
                                        <InputLabel2 label={language === 'de' ? 'Geburtsdatum' : "Birth date"} name="birthday" action={handleChange} />
                                    </div>

                                </div>
                                <InputLabel3 label={language === 'de' ? 'E-Mail Adresse' : "Email address"} name="email" action={handleChange} />
                                <InputLabel4 label={language === 'de' ? 'Passwort festlegen' : "Password"} name="password" action={handleChange} />
                                <InputLabel4 label={language === 'de' ? 'Passwort wiederholen' : "Confirm password"} name="password" action={handleChange} />
                                <InputLabel label={language === 'de' ? 'Handynummer' : "Mobile number "} name="mobilPhone" action={handleChange} />
                                <p className="text-start" style={{ fontSize: 12 }}> Warum werde ich nach meinen persönlichen Daten gefragt? Als Dienstleistungsunternehmen erheben wir routinemässig die persönlichen Daten unserer Patienten. Ihre Daten unterliegen damit der. Weitere Details entnehmen Sie bitte den Datenschutzbestimmungen am unteren Ende unserer Homepage.</p>


                                <div className="form-check py-2 text-start d-flex align-items-center gap-2">
                                    <input className="form-check-input" style={{ width: 25, height: 25 }} type="checkbox" checked={!user.agb || user.agb === 0 ? false : true} onChange={(e) => { setUser(ps => ({ ...ps, agb: e.target.checked ? 1 : 0 })); setError(0) }} />
                                    <label className="form-check-label fw-light ms-2" style={{ fontSize: 12 }} htmlFor="flexCheckDefault">
                                        {language === 'de' ? <span style={{ fontSize: 12 }}> Ich erkläre mich mit den <a target="_blank" rel="noreferrer" href="https://ingenium-labs.de/agb?l=de"> <span className="text-primary" style={{ fontSize: 12 }}>AGB </span> </a>einverstanden.</span> : <span style={{ fontSize: 12 }}> I accept the <a href="https://ingenium-labs.de/agb?l=de"> <span style={{ fontSize: 12 }}>Terms of Service. </span></a></span>}
                                    </label>
                                </div>
                                <div className="form-check py-2 text-start d-flex align-items-start gap-2">
                                    <input className="form-check-input" style={{ minWidth: 25, height: 25 }} type="checkbox" checked={!user.pp || user.pp === 0 ? false : true} onChange={(e) => { setUser(ps => ({ ...ps, pp: e.target.checked ? 1 : 0 })); setError(0) }} />
                                    <label className="form-check-label fw-light ms-2" style={{ fontSize: 12 }} htmlFor="flexCheckDefault">
                                        {language === 'de' ? <span style={{ fontSize: 12 }}> Ich habe die <a target="_blank" rel="noreferrer" href="https://ingenium-labs.de/pp?l=de">  <span className="text-primary" style={{ fontSize: 12 }}>Datenschutzerklärung </span>  </a>gelesen und erkläre mich damit einverstanden.</span> : <span style={{ fontSize: 12 }}>I have read and agree to the  <a href="https://ingenium-labs.de/pp?l=de"> <span style={{ fontSize: 12 }}>privacy policy. </span></a></span>}
                                    </label>
                                </div>
                                <div className="form-check py-2 text-start d-flex align-items-start gap-2">
                                    <input className="form-check-input" style={{ minWidth: 25, height: 25 }} type="checkbox" checked={!user.newsletter || user.newsletter === 0 ? false : true} onChange={(e) => { setUser(ps => ({ ...ps, newsletter: e.target.checked ? 1 : 0 })); setError(0) }} />
                                    <label className="form-check-label fw-light ms-2" style={{ fontSize: 12 }} htmlFor="flexCheckDefault">
                                        {language === 'de' ? 'Ich bin damit einverstanden, dass Ingenium mich in Bezug auf neue Dienstleistungsservice und Angebote per E-Mail informiert. Diese Einwilligung kann ich jederzeit für die Zukunft widerrufen.' : 'I consent to Ingenium informing me by email about new  services and offers.  I can revoke this consent at any time for the future.'}
                                    </label>
                                </div>

                                <button className="btn btn-color1 px-5 rounded-pill text-white  my-4" onClick={() => registeri()}>{isLoading === 1 ? <span className="spinner-border" /> : language === 'de' ? 'Registrieren' : 'Create'}</button>

                                <br />

                                {error === 6 && <span className="text-danger">{language === 'de' ? 'Bitte geben Sie Ihren Vornamen ein.' : 'Please type your first name.'}</span>}
                                {error === 7 && <span className="text-danger">{language === 'de' ? 'Bitte geben Sie Ihren Nachnamen ein.' : 'Please type your last name.'}</span>}
                                {error === 8 && <span className="text-danger">{language === 'de' ? 'Bitte wählen Sie Ihr Geschlecht.' : 'Please select your gender.'}</span>}
                                {error === 9 && <span className="text-danger">{language === 'de' ? 'Bitte geben Sie Ihren Adresse an.' : 'Please type your address.'}</span>}
                                {error === 11 && <span className="text-danger">{language === 'de' ? 'Bitte geben Sie Ihren PLZ an.' : 'Please type your Zip Code.'}</span>}
                                {error === 12 && <span className="text-danger">{language === 'de' ? 'Bitte geben Sie Ihren ort an.' : 'Please type your city.'}</span>}
                                {error === 13 && <span className="text-danger">{language === 'de' ? 'Bitte geben Sie Ihren Land an.' : 'Please select your country.'}</span>}
                                {error === 14 && <span className="text-danger">{language === 'de' ? 'Bitte wählen Sie Ihr Geburtsdatum.' : 'Please select your birth date.'}</span>}
                                {error === 15 && <span className="text-danger">{language === 'de' ? 'Bitte geben Sie Ihre E-Mail Adresse an.' : 'Please type your email address.'}</span>}
                                {error === 16 && <span className="text-danger">{language === 'de' ? 'Bitte geben Sie ein gültiges Passwort mit mindestens 6 Zeichen ein.' : 'Please insert a valid password with minimum 6 characters.'}</span>}
                                {error === 17 && <span className="text-danger">{language === 'de' ? 'Bitte geben Sie Ihre Handynummer an.' : 'Please type your mobile number.'}</span>}
                                {error === 18 && <span className="text-danger">{language === 'de' ? 'Für die eingegebene E-Mail besteht bereits ein Konto. Bitte versuchen Sie, sich dort anzumelden.' : 'The inserted email has been used for an existing account. Please try to log in instead.'}</span>}
                                {error === 23 && <span className="text-danger">{language === 'de' ? 'Um fortzufahren, müssen Sie unsere allgemeinen Geschäftsbedingungen akzeptieren.' : 'You need to accept our terms and conditions in order to proceed.'}</span>}
                                {error === 24 && <span className="text-danger">{language === 'de' ? 'Um fortzufahren, müssen Sie unsere Datenschutzbestimmungen akzeptieren.' : 'You need to accept our privacy policy in order to proceed.'}</span>}
                                {error === 25 && <span className="text-danger">{language === 'de' ? 'Um fortzufahren, müssen Sie unsere Geschäftsbedingungen akzeptieren.' : 'You need to accept our policy in order to proceed.'}</span>}
                                {servererr && <span className='text-danger'>{servererr}</span>}


                            </div >
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}



export const InputLabel = ({ label, action, name }) => (
    <div>
        <label style={{ fontSize: 14 }}>{label}</label>
        <input className="form-control form-control-sm mb-2 w-100" type="text" name={name} onChange={action} />
    </div>
)

export const InputLabel2a = ({ label, action, name }) => (
    <div>
        <label style={{ fontSize: 14 }}>{label}</label>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">+</span>
            </div>
            <input type="text" className="form-control form-control-sm mb-2 w-100" name={name} onChange={action} />
        </div>
    </div>
)

export const InputLabel2 = ({ label, action, name }) => (
    <div className="w-100">
        <label style={{ fontSize: 14 }}>{label}</label>
        <input className="form-control form-control-sm mb-2 w-100 py-0 d-flex justify-content-center align-items-center" type="date" min="1901-01-01" max="2021-12-31" name={name} onChange={action} />
    </div>
)

export const InputLabel3 = ({ label, action, name }) => (
    <div>
        <label style={{ fontSize: 14 }}>{label}</label>
        <input className="form-control form-control-sm mb-2 w-100" type="email" name={name} onChange={action} />
    </div>
)

export const InputLabel4 = ({ label, action, name }) => (
    <div>
        <label style={{ fontSize: 14 }}>{label}</label>
        <input className="form-control form-control-sm mb-2 w-100" type="password" name={name} onChange={action} />
    </div>
)

export const InputLabel5 = ({ label, action, name }) => (
    <div>
        <label style={{ fontSize: 14 }}>{label}</label>
        <input className="form-control form-control-sm mb-2 w-100" type="email" name={name} onChange={action} />
    </div>
)

export const InputLabel6 = ({ label, action, name }) => (
    <div>
        <label style={{ fontSize: 14 }}>{label}</label>
        <select name="gender" className="form-control form-control-sm mb-2 w-100" id="" onChange={action}>
            <option value=""></option>
            <option value="man">männlich</option>
            <option value="woman">weiblich</option>
            <option value="other">divers</option>
        </select>

    </div>
)

export const InputLabel7 = ({ label, action, name }) => (
    <div>
        <label style={{ fontSize: 14 }}>{label}</label>
        <select className="form-control form-control-sm mb-2 w-100" id="" name={name} onChange={action}>
            <option value=""></option>
            {countries.map((k, i) => (
                <option key={i} value={k.name}>{k.name}</option>
            ))}
        </select>

    </div>
)