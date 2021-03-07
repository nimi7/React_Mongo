import React, { useEffect, useReducer, useState } from 'react';
import '../Home/home.css'
import Axios from 'axios'

import Session from 'cookie-session';

export default function HomePage(props) {
    const [see , setsee] = useState(true);
    const [getPassword , setGetPassword] = useState([]);
    useEffect(() => {
        Axios.get('/password')
            .then(res => {

                setGetPassword(res.data)

            })
            .catch(err => {
                console.log(err);
            })
    })
    
    console.log('this is coonnect',getPassword);


    function ClickMe(){
        setsee(val => !val)
    }
    
    return (
        <div>
            <h1> WellCome To HomePage</h1>
            
           <button onClick = {ClickMe}>Click To Hide</button>
            {see && <h1>Shut The Fuck up sss</h1>}
           
        </div>
    )
}