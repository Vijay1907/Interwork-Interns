
import Login from './components/Login';
import UsersDetail from './components/UsersDetail';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from 'react'
import Singup from './components/Singup';

function App() {

  const[email,setEmail]= useState("")
   
  const findLength=(obj)=>{
    let count=0;
     for(let keys in obj){
        if(obj[keys].length>0){
         count++;
        }
     }
     return count;
 }


  return (
    <>
     <BrowserRouter>
       <Routes>
       <Route exact path="/" element={<Singup/>} />
           <Route exact path="/login" element={<Login findLength={findLength} setEmail={setEmail}/>} />
           <Route exact path="/userDetail" element={<UsersDetail  email={email}/>} />
       </Routes>
     </BrowserRouter>
      </> 
       
  )
}

export default App;
