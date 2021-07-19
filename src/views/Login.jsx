import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'

import './styles.css'
import splash from './assets/splash.svg'
import splashBg from './assets/splash-bg.svg'

const bcrypt = require('bcryptjs')

function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)

    const handleLogin = (event) => {
        event.preventDefault()
        const pass = bcrypt.hashSync(password, bcrypt.genSaltSync())
        console.log('Masuk Dengan: ', {email,  pass})
        try {
            setUser(email)
            setEmail('')
            setPassword('')
        } catch (exception) {
            console.log('ERROR')
        }
    }

    const berhasilMasuk = () => (
        <div>
            <div className="mt-4">
                <div className="card border-success">
                    <div className="card-body">
                        <div className="container mt-3">
                            <div className="text-success">
                                <p className='text-center'><b>Berhasil Masuk!</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <NavLink activeClassName='text-warning' className="mt-4 btn p-6 buttonijo col-12 p-3" to="/dashboard" type='submit'>
                Menuju Dashboard
            </NavLink>
        </div>
    )

    const loginForm = () => (
        <div>
            <div className='mt-4'>
                <img src={splash} class="imgsplash" alt=""/>
                <img src={splashBg} class="imgsplash-bg" alt=""/>
            </div>

            {/* LOGIN FORM */}
            <form action="" onSubmit={handleLogin}>
                <div class="row mt-4">
                    <div class="col">
                        <label class="form-label" for="email">Email</label>
                        <input class="form-control" type="text" name="email" id="email" 
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col">
                        <label class="form-label" for="password">Kata Sandi</label>
                        <input class="form-control" type="password" name="password" id="password" 
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                    </div>
                </div>
                <div class="d-grid gap-2 mb-4">
                    <button className="mt-4 btn p-6 buttonijo" type="submit">Masuk</button>
                    {/* <NavLink activeClassName='text-warning' className="mt-4 btn p-6 buttonijo" to="/dashboard" type='submit'>
                        Masuk
                    </NavLink> */}    
                </div>
            </form>

            <p class="text-center">
                Belum punya akun?
                <br/>
                <b>
                    <NavLink activeClassName='text-warning' className="linkijo" to="/register">
                        Daftar
                    </NavLink>
                </b>
            </p>
        </div>
    )


    return (
        <div className="container col-10 col-sm-4 mt-4">

            {user === null && loginForm()}
            {user !== null && berhasilMasuk()}
        
        </div>
    );
}

export default Login;