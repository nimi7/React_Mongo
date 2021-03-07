import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Button, Card, Media } from 'react-bootstrap'
import Moment from 'moment'
import { Link } from "react-router-dom";
import './Getuser.css'






export default function GetUsers(props) {
    const [allUsers, setallUsers] = useState([]);
    const [Search, setSearch] = useState('');
    

    
    useEffect(() => {
        Axios.get('/User')
            .then(res => {

                setallUsers(res.data)
                console.log('this is server call!!!!')

            })
            .catch(err => {
                console.log(err);
            })
    },allUsers , console.log('this is server call!!!!!'))
    const isLoaded = () => {
        window.scroll(0, 0);
    }
    const Delete = (id) => {
        Axios.delete('/User/' + id);
    }



    


    return (

        <div>
            <h1>Get User </h1>
            {JSON.stringify(props.user)}
            {allUsers.map((props) => {
                return <div className='UserCard'>

                    <Media>
                        <Media.Body>
                            <Link onClick={isLoaded} to={{
                                pathname: `/User/${props._id}`,
                                state: {
                                    name: props.name,
                                    last: props.last,
                                    email: props.email,
                                    id: props._id,
                                    pic: props.pic,
                                    date: props.date

                                },
                            }}
                            > <h5>{props.name} {props.last}</h5></Link>
                            <p>
                                <h3>{props.email}</h3>
                            </p>
                            <h6> {Moment(props.date).format('HH:mm:ss')} <strong>  : עודכן לאחרונה  </strong> </h6>
                            <h6>  </h6>
                            <Link onClick={isLoaded} to={{
                                pathname: `/User/edit/${props._id}`,
                                state: {
                                    name: props.name,
                                    last: props.last,
                                    email: props.email,
                                    id: props._id,
                                    pic: props.pic,
                                    date: props.date

                                },
                            }}
                            > <Button variant="success" >Update</Button></Link>
                            <Button variant="danger" onClick={() => Delete(props._id)}>Delete</Button>

                        </Media.Body>

                        <img
                            width={220}
                            height={200}
                            className="ml-3"
                            src={props.pic}
                            alt="Generic placeholder"
                        />


                    </Media>

                </div>

            })}

                
            <h1> Search Try</h1>
            <input type='text' onChange={(e) => { setSearch(e.target.value) }} placeholder='Search...' />

            {allUsers.filter((props, key) => {
                if (Search == '') {
                    return props
                } else if (props.name.toLowerCase().includes(Search.toLowerCase()) || props.last.toLowerCase().includes(Search.toLowerCase())) {
                    return props
                }
            }).map((props, key) => {
                return <div className='UserCard'>

                    <Media>
                        <Media.Body>
                            <Link onClick={isLoaded} to={{
                                pathname: `/User/${props._id}`,
                                state: {
                                    name: props.name,
                                    last: props.last,
                                    email: props.email,
                                    id: props._id,
                                    pic: props.pic,
                                    date: props.date

                                },
                            }}
                            > <h5>{props.name} {props.last}</h5></Link>
                            <p>
                                <h3>{props.email}</h3>
                            </p>
                            <h6>{props.date} <strong>  : עודכן לאחרונה  </strong> </h6>
                            <Link onClick={isLoaded} to={{
                                pathname: `/User/edit/${props._id}`,
                                state: {
                                    name: props.name,
                                    last: props.last,
                                    email: props.email,
                                    id: props._id,
                                    pic: props.pic,
                                    date: props.date

                                },
                            }}
                            > <Button variant="success" >Update</Button></Link>
                            <Button variant="danger" onClick={() => Delete(props._id)}>Delete</Button>

                        </Media.Body>

                        <img
                            width={220}
                            height={200}
                            className="ml-3"
                            src={props.pic}
                            alt="Generic placeholder"
                        />


                    </Media>

                </div>
            })}






        </div>

    )
}



// {allUsers.map((props) => {
//     return <div className='profilCard'>
//         <Media >
//             <img
//                 width={220}
//                 height={220}
//                 className="mr-3"
//                 src={props.pic}
//                 alt="Generic placeholder"
//             />
//             <Media.Body>
//             <Link onClick={isLoaded} to={{
//                         pathname: `/User/${props._id}`,
//                         state: {
//                             name: props.name,
//                             last: props.last,
//                             email: props.email,
//                             id: props._id,
//                             pic: props.pic,
//                             date : props.date

//                         },
//                     }}
//                     > <h5>{props.name} {props.last}</h5></Link>

//                 <p>
//                     Email:{props.email}
//                 </p>
//                 <div className='Myprofilebtn'>

//                     <Link onClick={isLoaded} to={{
//                         pathname: `/User/edit/${props._id}`,
//                         state: {
//                             name: props.name,
//                             last: props.last,
//                             email: props.email,
//                             id: props._id,
//                             pic: props.pic,
//                             date : props.date

//                         },
//                     }}
//                     > <Button variant="primary" >Update</Button></Link>
//                     <Button variant="primary" onClick={()=> Delete(props._id)}>Delete</Button>
//                 <h3>Last Update : {props.date}</h3>    

//                 </div>

//             </Media.Body>

//         </Media>

//     </div>



// })}