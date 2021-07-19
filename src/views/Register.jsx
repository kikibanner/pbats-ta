import React from 'react';
import { NavLink } from 'react-router-dom'

function Register(props) {
    return (
        <div class="container col-10 col-sm-4 mt-4">
            <NavLink activeClassName='text-warning' className="buttonijo btn" to="/login">
                <span class="material-icons">arrow_back</span>
            </NavLink>
            <form action="">
                <div class="row mt-4">
                    <div class="col-6">
                        <label class="form-label" for="firstname">Nama Depan</label>
                        <input class="form-control" type="text" name="firstname" id="firstname" />
                    </div>
                    <div class="col-6">
                        <label class="form-label" for="lastname">Nama Belakang</label>
                        <input class="form-control" type="text" name="lastname" id="lastname" />
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col">
                        <label class="form-label" for="email">Email</label>
                        <input class="form-control" type="text" name="email" id="email" />
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col">
                        <label class="form-label" for="gender">Jenis Kelamin</label>
                        <input class="form-select" type="text" name="gender" id="gender" />
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col">
                        <label class="form-label" for="dob">Tanggal Lahir</label>
                        <input class="form-control" type="date" name="dob" id="dob" />
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col">
                        <label class="form-label" for="password">Kata Sandi</label>
                        <input class="form-control" type="password" name="password" id="password" />
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col">
                        <label class="form-label" for="password_confirm">Konfirmasi Kata Sandi</label>
                        <input class="form-control" type="password" name="password_confirm" id="password_confirm" />
                    </div>
                </div>
                <div class="d-grid gap-2 mb-4">
                    <NavLink activeClassName='text-warning' className="mt-4 btn p-6 buttonijo" to="/login">
                        Daftar
                    </NavLink>
                </div>
            </form>
        </div>
    );
}

export default Register;