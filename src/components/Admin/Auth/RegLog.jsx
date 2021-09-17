import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'

const RegLog = () => {
    const [data, setData] = useState({
        email:'',
        password:''
    })
    const history=useHistory()
    const credential={
        RedflukID:'Redfluk@fluk.com',
        password:'admin'
    }

    const verify=(e)=>{
        e.preventDefault()
        if(data.email !== credential.RedflukID && data.password!==credential.password){
            history.push('/')
        }else{
            localStorage.setItem('SupAd',JSON.stringify({data}))
            window.location.href='#/admin/signup'
            
        }
    }
    const handle=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    return (
        <>  
            
            <div className="log-container">
        <div className="log-container-wrapper">
          <div className="title">
            <span>RedFluk SuperAdmin</span>
          </div>
          <form onSubmit={verify}>
            <div className="row">
              <i className="fas fa-user" />
              <input type="text" name='email' required placeholder="ID" onChange={handle} />
            </div>
            <div className="row">
              <i className="fas fa-lock" />
              <input type="password" name='password' required placeholder="Pass" onChange={handle} />
            </div>
            <div className="row button">
            <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
        </>
    )
}

export default RegLog
