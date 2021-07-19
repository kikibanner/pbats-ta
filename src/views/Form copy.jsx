import React, { useState, useEffect } from "react"
import { NavLink } from 'react-router-dom'
import axios from 'axios'

function Form() {
    const [prediction, setPrediction] = useState([])

    const [form, setForm] = useState({
        age: 0,
        gender: 1,
        indication: 0,
        fever: 0,
        cough: 0,
        sore_throat: 0,
        shortness_of_breath: 0,
        head_ache: 0,
        result: 1
    })
    const [count, setCount] = useState(1)

    const updateForm = (e) => {
        setForm({
        ...form,
        [e.target.name]: e.target.value,
        })
    }

    const updateGejala = (e) => {
        setForm({
        ...form,
        [e.target.name]: 1,
        })
    }

    const getPrediction = async () => {
        try {
            let response = await axios.get(`https://cors-anywhere.herokuapp.com/http://116.193.190.68:5000/covidtest/${[[ form.cough,form.fever, form.sore_throat, form.shortness_of_breath, form.head_ache, form.age, form.gender, form.indication, form.result ]]}`)
            setPrediction(response.result)
            console.log('====================================');
            console.log(response.result);
            console.log('====================================');
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        getPrediction()
    }, [])

    return (
        <div className="App container mt-4">
            <NavLink activeClassName='text-warning' className="buttonijo btn mb-5" to="/dashboard">
                <span className="material-icons">arrow_back</span>
            </NavLink>
        <h2>Step {count} dari 4</h2>
        <form
            className="col-md-4 form"
            onSubmit={() =>
            alert(
                `Isi form: ${[[
                    form.cough,
                    form.fever, 
                    form.sore_throat, 
                    form.shortness_of_breath, 
                    form.head_ache, 
                    form.age,  
                    form.gender,
                    form.indication,
                    form.result
                ]]}`

            )
            }
        >
            {count === 1 ? (
            <div className="form-group animate__animated animate__fadeInDown">
                <div className="card border-none bg-ijo mt-4">
                    <div className="card-body">Masukkan Usia Anda</div>
                    <div className="container mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="age"
                            onChange={updateForm}
                            value={form.age}
                        />
                    </div>
                </div>
            </div>
            ) : null}

            {count === 2 ? (
                <div className="form-group animate__animated animate__fadeInDown">
                    <div className="card border-none bg-ijo mt-4">
                        <div className="card-body">
                            Contact dengan pengidap COVID-19
                        </div>
                        <div className="container mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="indication"
                                onChange={updateForm}
                                value={form.indication}
                            />
                        </div>
                    </div>
                </div>
            ) : null}

            {count === 3 ? (
                <div className="form-group animate__animated animate__fadeInDown">
                    <div className="card border-none bg-ijo mt-4">
                        <div className="card-body">
                            Bepergian ke luar negeri
                        </div>
                        <div className="container mb-3">
                            {/* <select class="form-select" id="exampleFormControlSelect1" onChange={updateForm}>
                                <option value="0">Tidak</option>
                                <option value="1">Ya</option>
                            </select> */}
                            <input
                                type="text"
                                className="form-control"
                                name="indication"
                                onChange={updateForm}
                                value={form.indication}
                            />
                        </div>
                    </div>
                </div>
            ) : null}

            {count === 4 ? (
                <div className="form-group animate__animated animate__fadeInDown">
                    <div className="card border-none bg-ijo mt-4">
                        <div className="card-body">
                            Gejala
                        </div>
                        <div className="container mb-3">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value={form.cough} onChange={updateGejala} name='cough'/>
                                <label className="form-check-label">Batuk</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value={form.fever} onChange={updateGejala} name='fever'/>
                                <label className="form-check-label">Demam</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value={form.head_ache} onChange={updateGejala} name='head_ache'/>
                                <label className="form-check-label">Pusing</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox4" value={form.sore_throat} onChange={updateGejala} name='sore_throat'/>
                                <label className="form-check-label">Tenggorokan Kering</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value={form.shortness_of_breath} onChange={updateGejala} name='shortness_of_breath'/>
                                <label className="form-check-label">Sulit Bernapas</label>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}

            {count === 4 ? (
                <button className="btn buttonijo mt-4 col-12" type="submit">
                    Simpan
                </button>
            ) : null}
            
        </form>

        <div>
            <div className="row">
                <div className="col-6">
                    <button className="btn btn-secondary mt-4 col-12" onClick={() => setCount(count - 1)} disabled={count < 2}>
                        Kembali
                    </button>
                </div>
                <div className="col-6">
                    <button className="btn buttonijo mt-4 col-12" onClick={() => setCount(count + 1)} disabled={count > 3}>
                        Lanjut
                    </button>
                </div>
            </div>
        </div>

        </div>
    )
}

export default Form