import React,{useState} from "react";

import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'

import { signup } from "../../../action/admin";

const AdminReg = () => {
    const dispatch=useDispatch()
    const history=useHistory()
    const initialState={name:'',email:'',password:'',cPassword:''}
    const [form, setform] = useState(initialState)

    const handleSub=(e)=>{
        e.preventDefault();
        dispatch(signup(form,history))
    }

    const handleChange=(e)=>{
        setform({...form,[e.target.name]:e.target.value})
    }
    
    const ClearAd=()=>{
     localStorage.clear()
    }
  return (
    <>
      <div className="log-container">
        <div className="log-container-wrapper">
          <div className="title">
            <span>RedFluk Admin</span>
          </div>
          <form onSubmit={handleSub}>
            <div className="row">
              <i className="fas fa-user" />
              <input type="text" placeholder="Name" onChange={handleChange} name='name' required />
            </div>
            <div className="row">
              <i className="fas fa-user" />
              <input type="email" placeholder="Email" name='email' onChange={handleChange} required />
            </div>
            <div className="row">
              <i className="fas fa-lock" />
              <input type="password" placeholder="Password" name='password' onChange={handleChange} required />
            </div>
            <div className="row">
              <i className="fas fa-lock" />
              <input type="password" placeholder="Confirm Password" name='cPassword' onChange={handleChange} required />
            </div>
            <div className="row button">
              <button type="submit" onClick={ClearAd}>Register</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminReg;
