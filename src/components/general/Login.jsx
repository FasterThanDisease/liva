import React from "react";
import { useEffect, useState, useContext } from "react";
import { authFetch } from "@/components/lib/fetch";
import { useAuth } from "@/components/context/AuthContext";

export default function Login() {

    const { user, logout, login } = useAuth();
    const [credentials, setCredentials] = useState({ username: '', password: '' })

    console.log(user);

    function handleChange(e) {
        const { name, value } = e.target
        setCredentials(ps => ({ ...ps, [name]: value }))
    }





    return (
        <main className="">
            <section className="">
                <div className="container ">
                    <div className="row " style={{ paddingTop: 200, paddingBottom: 50 }}>
                        {!user?.auth ?
                            <div className="col-12 col-md-6">
                                <div className="col-12">
                                    <label>Username</label>
                                    <input className="form-control" type="email" onChange={e => handleChange(e)} name="username" />
                                </div>
                                <div className="col-12">
                                    <label>Passwort</label>
                                    <input className="form-control" type="password" onChange={e => handleChange(e)} name="password" />
                                </div>
                                <button className="mt-2 w-100 btn btn-dark" onClick={() => login(credentials.username, credentials.password)}>Login</button>
                            </div> : <div className="col-12 col-md-6">
                                <button className="btn btn-danger" onClick={() => logout()}>Logout</button>
                            </div>
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}
