import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { create } from '../features/receivingInfoSlice';
import axios from "axios";

export default function Search() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [data, setData] = useState(null);

  async function GetData(e, ipValue) {
    e.preventDefault();

    try {
      const res = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_g28diej6qmEoeLVULKHeo4DWbILpP&ipAddress=${ipValue}`);

      const { isp, ip, location: {city, region, country, timezone, lat, lng}} = res.data;
  
      let result = { ip, region, country, city, timezone, isp, lat, lng };
      setData(result);
    } catch (error) {
      console.log(error)
    }

    return dispatch(create(data));
  }

  return (
    <form onSubmit={(e) => GetData(e, value)} className="mx-auto">
      <label htmlFor="search" className="input-group">
        <input onChange={(e) => setValue(e.target.value)} class="form-control py-2 px-3 rounded-start" type="text" id="search" placeholder="Search for any IP address or domain" />

        <button type="submit" class="input-group-text rounded-end" id="basic-addon1">
          <img src="/images/icon-arrow.svg" alt="search icon" />
        </button>
      </label>
    </form>
  )
}
