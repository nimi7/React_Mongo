import React, {useEffect , useReducer, useState } from 'react';
import Axios from 'axios';
import {Navbar, Nav, Form, FormControl,Button} from 'react-bootstrap';

export default function MyNavbar() {
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
    return (
        <div>
            <>
        
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="/">Home Page</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/GetUsers">Get Users</Nav.Link>
                        <Nav.Link href="/CreactUser">Creat User</Nav.Link>
                        <Nav.Link href="/getpassword">Get Password</Nav.Link>
                        <Nav.Link href="/CreatPassword">Sign up</Nav.Link>
                        <Nav.Link href="/Login">Log In</Nav.Link>
                    </Nav>
                    <Form inline>
                        
                        <Button variant="outline-primary"> Well Come Back - {getPassword} - </Button>
                    </Form>
                </Navbar>
            </>
        </div>
    )
}