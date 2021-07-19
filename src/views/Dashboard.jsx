import React from 'react';
import { NavLink } from 'react-router-dom'

import robot from './assets/robot.svg'
import statistics from './assets/statistics.svg'
import hospital from './assets/hospital.svg'
import arrow from './assets/arrow.svg'
import news from './assets/news.svg'

function Dashboard(props) {
    return (
        <div>
            <div className="container col-11 col-sm 4 mt-4">
                <div className="my-5 greetings">
                    <h3><b>Halo, Akbar</b></h3>
                    <p>Bagaimana kondisi anda hari ini?</p>

                    {/* BIG BUTTON TEST */}
                    <NavLink activeClassName='text-warning' to="/form">
                        <div className="card card-test">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-3 d-flex align-items-center justify-content-center">
                                        <img src={robot} alt="" />
                                    </div>
                                    <div className="col-7 teks pt-3">
                                        <p>
                                            <b>Uji Mandiri COVID-19</b>
                                            <br />
                                            Diagnosa dini dengan kecerdasan buatan
                                        </p>
                                    </div>
                                    <div className="col-2 d-flex align-items-center justify-content-center">
                                        <img src={arrow} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </div>

                <div className="my-5 services">
                    <p><b>Layanan</b></p>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-4">
                                <div className="hospital d-flex align-items-center justify-content-center">
                                    <img src={hospital} alt="" />
                                </div>
                                <p className="mt-2 caption-icons">
                                    <b>RS</b>
                                </p>
                            </div>
                            <div className="col-4">
                                <div className="statistics d-flex align-items-center justify-content-center">
                                    <img src={statistics} alt="" />
                                </div>
                                <p className="mt-2 caption-icons">
                                    <b>Statistics</b>
                                </p>
                            </div>
                            <div className="col-4">
                                <div className="news d-flex align-items-center justify-content-center">
                                    <img src={news} alt="" />
                                </div>
                                <p className="mt-2 caption-icons">
                                    <b>Berita</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-5 history">
                    <p><b>Riwayat Pengujian</b></p>

                    <div className="card border-light my-2 shadow-sm">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-7">
                                    <div className="row"><div className="col date">July 12 19, 2021</div></div>
                                    <div className="row"><div className="col city">Magetan</div></div>
                                </div>
                                <div className="col-5 diagnose negative" style={{textAlign: 'right'}}><b>Negatif</b></div>
                            </div>
                        </div>
                    </div>

                    <div className="card border-light my-2 shadow-sm">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-7">
                                    <div className="row"><div className="col date">June 19, 2021</div></div>
                                    <div className="row"><div className="col city">South Tangerang</div></div>
                                </div>
                                <div className="col-5 diagnose positive" style={{textAlign: 'right'}}><b>Positif</b></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card border-light my-2 shadow-sm">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-7">
                                    <div className="row"><div className="col date">June 17, 2021</div></div>
                                    <div className="row"><div className="col city">South Tangerang</div></div>
                                </div>
                                <div className="col-5 diagnose negative" style={{textAlign: 'right'}}><b>Negatif</b></div>
                            </div>
                        </div>
                    </div>

                    
                    
                </div>

            </div>
        </div>
    );
}

export default Dashboard;