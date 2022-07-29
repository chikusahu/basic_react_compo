import React, { useState, useEffect } from 'react';

const list = [
    {
        key: 'IN',
        value: 'India'
    },
    {
        key: 'US',
        value: 'USA'
    }
    ,
    {
        key: 'CA',
        value: 'Canada'
    }
    ,
    {
        key: 'DU',
        value: 'Dubai'
    }
]

export default function DropDown(props) {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [cList, setCList] = useState([]);

    useEffect(()=>{
        fetch('https://api.worldbank.org/v2/country?format=json')
        .then(res=>res.json())
        .then(result=>{
            setCList(result[1])
        });
    },[])

    return (
        <div>
            <label>COuntry Name:</label>
            <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
                <option value=''>- select -</option>
                {cList.map((item, inx)=>{
                    return <option key={inx} value={item.id}>{item.name}</option>
                })}
                {/* <option value='IN'>India</option>
                <option value='US'>USA</option>
                <option value='CA'>Canada</option> */}
            </select>
            <small>You hv selected: {selectedCountry}</small>
        </div>
    )
}