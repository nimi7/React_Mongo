import React, {useEffect , useReducer, useState } from 'react';
import Axios from 'axios';
import {ReactSession} from 'react-client-session';
import Cookies from 'js-cookie'


export default function GetPassword(){ 
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
    const isLoaded = () => {
        window.scroll(0, 0);
    }

        console.log('getusers',getPassword);
        

    return(
        <div>
            
            <a href='/CreatPassword'>Creact Password</a>
            <h2>{getPassword}</h2>
 


        </div>
    )
}