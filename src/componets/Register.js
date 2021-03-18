import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
const url = 'http://localhost:4000/api'
const Register = ({history}) => {
    // const initialValue = { name:'', email:'', password:'', age:'' }
    const [user, setUser] = useState({name:'', email:'', password:'', age:''})
    const handleChange = (e) => {
        const value = e.target.value
        setUser({
            ...user,
            [e.target.name]:value
        })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${url}/add_user`, { name:user.name,email:user.email,password:user.password,age:user.age })
            // localStorage.setItem('token', JSON.stringify(response.data.token))
            history.push('/login')
        } catch (e) {
            console.log(e)
        }
    }
    
    return (
        <div className="container-fluid" id='loginBack'>

            <div className=' text-center d-flex justify-content-center'>
                <div className="card mt-5" style={{width:'20rem'}}>
                    <form className='p-3'onSubmit={handleSubmit}>
                        <h3 className='mb-3'>Signup</h3>
                    <div className="form-group">
                        <input type="text" className='form-control' name='name' value={user.name} placeholder='enter your name' onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <input type="text" className='form-control' name='email' value={user.email} placeholder='enter your email' onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" className='form-control' value={user.password} name='password' placeholder="enter password" onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className='form-control' name='age' value={user.age} placeholder="enter age" onChange={handleChange}/>
                    </div>
                        <button className='btn btn-outline-success rounded-pill' type='submit'>register</button><br/>
                        <Link to='/login' className='m-3' >Back to Login</Link>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Register

