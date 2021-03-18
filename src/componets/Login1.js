import React, { useState,useEffect } from 'react'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './Dashboard'
const url = 'http://localhost:4000/api'
const Login1 = ({history}) => {
    const [logindata, setLogindata] = useState({ email: "", password: "" })
    const [error, setError] = useState("")
    // const [user, setUser] = useState(false)
    //  const [loginState, setLoginState] = useState(false)
    const handleSubmit = (e) => {
        const value = e.target.value
        setLogindata({
            ...logindata,
            [e.target.name]:value
        })
    }
    useEffect(() => {
        if (localStorage.getItem('token') ) {
            history.push('/dash')
        }
    },[history])
    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${url}/login`, {email:logindata.email,password:logindata.password})
            console.log(response)
            if (response.data.token) {
                localStorage.setItem('token', JSON.stringify(response.data.token))
                history.push('/dash')  
            } else {
                setError(response.data)    
                
            }
             setTimeout(() => {
                  setError("")  
                },3000)
        } catch (error) {
            console.log(error)
            
        }
    }


    return (
        <div className='container-fluid' id='loginBack'>
            <div className="row mx-auto">
                <div className="col text-center d-flex justify-content-center mt-5">
                    <div className="card" style={{width:'20rem'}}>
                        {error && <p>{error }</p>}
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
