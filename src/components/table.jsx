import React, { useState } from 'react';

export default function Table(props) {


    return (
        <table border='1'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Qualification</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Chandan kumar sahu</td>
                    <td>21</td>
                    <td>B.tech (Final year)</td>
                </tr>
                <tr>
                    <td>Deepak kumar sahu</td>
                    <td>18</td>
                    <td>+2</td>
                </tr>
            </tbody>
        </table>
    )
}