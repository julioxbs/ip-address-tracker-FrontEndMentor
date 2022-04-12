import React, { useState } from 'react';
import Search from './Search';
import { useSelector } from 'react-redux';

export default function Header() {
    const data = useSelector((state) => state.receivingInfo);
    const [hide, setHide] = useState(true);

    return (
        <header>
            <h1 className="text-center mb-4 text-white">IP Address Tracker</h1>

            <Search />

            <button className="toggle__btn" onClick={() => setHide(!hide)}> <img src="/images/icon-arrow.svg" alt="toggle button" /> </button>

            <div className={hide ? 'results d-flex flex-md-row flex-column text-center text-md-start gap-3' : 'd-none'} >
                
                {data ?
                    <>
                        <div className="ip">
                            <p>IP ADDRESS</p>
                            <h3>{data.ip}</h3>
                        </div>

                        <div className="location">
                            <p>LOCATION</p>
                            <h3>{data.region}, {data.country}</h3>
                        </div>

                        <div className="timezone">
                            <p>TIMEZONE</p>
                            <h3>UCT {data.timezone}</h3>
                        </div>

                        <div className="ip">
                            <p>ISP</p>
                            <h3>{data.isp}</h3>
                        </div>
                    </>


                    :

                    <>
                        <div className="ip">
                            <p>IP ADDRESS</p>
                            <h3>192.212.174.101</h3>
                        </div>

                        <div className="location">
                            <p>LOCATION</p>
                            <h3>Brooklyn, NY 10001</h3>
                        </div>

                        <div className="timezone">
                            <p>TIMEZONE</p>
                            <h3>UCT-05:00</h3>
                        </div>

                        <div className="ip">
                            <p>ISP</p>
                            <h3>SpaceX Starlink</h3>
                        </div>
                    </>
                }
            </div>
        </header>
    )
}
