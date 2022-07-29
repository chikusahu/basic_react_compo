import React, { useState} from 'react';

export default function InputText(props){
    const [theName,setTheName] = useState('');

    return (
        <div>
            <label>Name:</label>
            <input type="text" value={theName} placeholder="Enter text here" onChange={(e)=>setTheName(e.target.value)}></input>
            <small>You have entered: {theName}</small>
        </div>
    )
}