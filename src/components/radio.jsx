import React, { useState } from 'react';

export default function Radio(props) {
    const [gender, setGender] = useState('');

    return (
        <div onChange={(e) => setGender(e.target.value)}>
            <label>Gender:</label>
            <label>
                <input type="radio" name='Gender' value='MALE'></input>Male
            </label>
            <label>
                <input type="radio" name="Gender" value='FEMALE'></input>Female
            </label>
            <small>
                You selected : {gender}
            </small>
        </div>
    )
}