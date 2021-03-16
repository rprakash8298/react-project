import React, { useState } from 'react'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './Dashboard'
const url = 'http://localhost:4000/api'
const Login1 = () => {
    const [logindata, setLogindata] = useState({ email: "", password: "" })
    // const [error, setError] = useState([])
    // const [user, setUser] = useState(false)
    //  const [loginState, setLoginState] = useState(false)
    const handleSubmit = (e) => {
        const value = e.target.value
        setLogindata({
            ...logindata,
            [e.target.name]:value
        })
    }
    const handleLogin = async (e) => {
        e.preventDefault()
        const response = await axios.post(`${url}/login`, {email:logindata.email,password:logindata.password})
        console.log(response.data.token)
        localStorage.setItem('token', JSON.stringify(response.data.token))
        window.location='/dashboard'
    }


    return (
        <div className='container-fluid' id='loginBack'>
            <div className="row mx-auto">
                <div className="col text-center d-flex justify-content-center mt-5">
                    <div className="card" style={{width:'20rem'}}>
                        
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <h3 className='mb-3'>Login</h3>
                                <div className="form-group">
                                    <input type="text" className='form-control' placeholder='enter your email' name='email' value={logindata.email} onChange={handleSubmit }/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className='form-control' placeholder='enter your password' name='password' value={logindata.password} onChange={handleSubmit }/>
                                </div>

                                <button type='submit' className='btn btn-outline-danger rounded-pill'>login</button><br/>
                                 <Link className=' ' to='/register'>Back to Signup</Link>
                             </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login1
