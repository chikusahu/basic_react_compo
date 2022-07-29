import React, { useState} from 'react';

export default function CheckBox(props){
    const [knowJava,setKnowJava] = useState('');
    const [knowReact,setKnowReact] = useState('');
    const [knowNothing,setknowNothing]=useState('');

    return (
        <div>
            <label>Skills:</label>
            <label>
                <input type="CheckBox" checked={knowJava?true:false} onChange={(e)=>setKnowJava(e.target.checked?'JavaScript':'')}></input>
                JavaScript
            </label>
            <label>
                <input type="CheckBox" checked={knowReact?true:false} onChange={(e)=>setKnowReact(e.target.checked?'ReactJS':'')}></input>
                ReactJS
            </label>
            <label>
                <input type="CheckBox" checked={knowReact?true:false} onChange={(e)=>setKnowReact(e.target.checked?'ReactJS':'')}></input>
                ReactJS
            </label>
            
            <small>Skills: {knowJava},{knowReact}</small>
        </div>
    )
}

// git config --global user.email "you@example.com"
//   git config --global user.name "Your Name"