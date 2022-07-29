import React, { useState} from 'react';

export default function InputFile(props){
    const [theName,setTheName] = useState('hiwe');

    return (
        <div>
            <label>Profile Photo :</label>
            <input type="file" onChange={(e)=>setTheName(e.target.value)}></input>
            <small>You have entered: {theName}</small>
        </div>
    )
}