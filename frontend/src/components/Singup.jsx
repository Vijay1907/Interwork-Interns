
import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Singup() {
  const navigate = useNavigate();
    const [fullname, setName] = useState({
      // userName: '',
      // userEmail: '',
      // password: '',
      // businessName: '',
      // businessContact: '',
      // address: '',
      // city: '',
      // country: '',
      // userContact: '',
  
    });
  
    const onSubmit = (e) => {
      e.preventDefault()
      axios.post(`/adduserdata`, fullname)
      .then(res => {
        if(res.data.success){
          navigate("/login")
        }else{
          alert(res.data.message)
        }
      }).catch(()=>{
        console.log("error occured")
      })
      
    
    }
  
    const inputEvent = (event) => {
      const {name, value} = event.target
      setName({
        ...fullname,
        [name]:value
      })
  
  
    }
    console.log(fullname)
  
    return (
  
      <form className="form">
        <div className="App">
          <h1>SIGNUP</h1>
        </div>
        <div className="main">
  
          <div className="move">
            <div >
              <label>USER NAME</label>
              <br></br>
  
              <input type="text" defaultValue={fullname.userName} name="userName" placeholder="NAME" id="userName" onChange={inputEvent}></input>
              <br></br>
              <br></br>
              <label>USER CONTACT</label>
  
              <br></br>
              <input type="number" defaultValue={fullname.userContact} name="userContact" placeholder="NAME" id="userContact" onChange={inputEvent}></input>
              <br></br>
              <br></br>
              <label>USER EMAIL</label>
  
              <br></br>
              <input type="email" defaultValue={fullname.userEmail} name="userEmail" placeholder="NAME" id="userEmail" onChange={inputEvent}></input>
            </div>
          </div>
  
          <div >
            <div className="second">
              <label>PASSWORD</label>
              <br></br>
              <input type="text" defaultValue={fullname.password} name="password" placeholder="NAME" id="password" onChange={inputEvent}></input>
              <br></br>
              <br></br>
              <label>BUISNESS NAME</label>
  
              <br></br>
              <input type="text" defaultValue={fullname.businessName} name="businessName" placeholder="NAME" id="buisnessName" onChange={inputEvent}></input>
              <br></br>
              <br></br>
              <label>BUISNESS CONTACT</label>
              <br></br>
              <input type="number" defaultValue={fullname.businessContact} name="businessContact" placeholder="NAME" id="buisnessContact" onChange={inputEvent}></input>
            </div>
          </div>
  
          <div >
            <div className="third">
              <label>ADDRESS</label>
              <br></br>
              <input type="text" defaultValue={fullname.address} name="address" placeholder="NAME" id="adress" onChange={inputEvent}></input>
              <br></br>
              <br></br>
              <label>CITY</label>
              <br></br>
              <input type="text" defaultValue={fullname.city} name="city" placeholder="NAME" id="city" onChange={inputEvent}></input>
              <br></br>
              <br></br>
              <label>COUNTRY</label>
              <br></br>
              <input type="text" defaultValue={fullname.country} name="country" placeholder="NAME" id="country" onChange={inputEvent}></input>
            </div>
          </div>
  
  
          <div className="button">
            <button onClick={onSubmit}>SIGN-UP</button>
  
  
          </div>
        </div>
  
  
      </form>
    );
  }

export default Singup