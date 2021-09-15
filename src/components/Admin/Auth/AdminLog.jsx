import React,{useState} from "react";

import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { signin } from "../../../action/admin";
import {Button} from '@material-ui/core'

const AdminLog = () => {
  const dispatch=useDispatch()
    const history=useHistory()
    const initialState={email:'',password:''}
    const [form, setform] = useState(initialState)

    const handleSub=(e)=>{
        e.preventDefault();
        dispatch(signin(form))
    }

    const handleChange=(e)=>{
        setform({...form,[e.target.name]:e.target.value})
    }
    
    if(signin.status===400){
      console.log('enter correct pass')
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
              <input type="email" name="email" onChange={handleChange} placeholder="Email" required />
            </div>
            <div className="row">
              <i className="fas fa-lock" />
              <input type="password" name="password" onChange={handleChange} placeholder="Password" required />
            </div>
            <div className="row button">
            <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLog;
