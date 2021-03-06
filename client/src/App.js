import logo from './logo.svg';
import './App.css';
import GetUsers from './Components/GetUsers'
import CreactUser from './Components/creatuser/CreactUser';
import HomePage from './Components/Home/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css';
import Myprofile from './Components/MyProfile'
import EditUser from './Components/EditUser'
import GetPassword from './Components/Password/Getpassword'
import CreatPassword from './Components/Password/CreatPassword'
import Login from './Components/Password/login'
import Car from './Carusela/carusel'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/navbar'






function App() {

  
 

  return (
    <div className="App">
        <Navbar/>
      <BrowserRouter>

        <Switch>
          <Route exact path="/CreatPassword" component={CreatPassword} />
          <Route exact path="/getpassword" component={GetPassword} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/GetUsers" component={GetUsers} />
          <Route exact path="/CreactUser" component={CreactUser} />
          <Route path='/User/:id' exact component={Myprofile} />
          <Route path='/User/edit/:id' exact component={EditUser} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Car" component={Car} />

        </Switch>
      </BrowserRouter>
         

    </div>
  );
}

export default App;
