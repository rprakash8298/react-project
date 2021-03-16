import React, {Component} from 'react'
import {useState,useEffect} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
const url = 'http://localhost:4000/api1'
const Dashboard = () => {
   
   
    const [taskData, setTaskData] = useState({name:"",completed:""})
     const handleSubmit = (e) => {
         const value = e.target.value
         setTaskData({
             ...taskData,
             [e.target.name]:value
         })
    }
   
    const [task, setTask] = useState([])
    useEffect(async () => {
         const config = {
            headers: {
                Authorization:JSON.parse( localStorage.getItem('token'))
            }
        };
        const response =await axios.get(`${url}/tasks`, config)
        setTask(response.data)
    },[task])
    
    const [success, setSucess] = useState([])
    const taskDataUpload = async (e) => {
        e.preventDefault()
        const config = {
            headers: {
                Authorization:JSON.parse( localStorage.getItem('token'))
            }
        };
        const response = await axios.post(`${url}/add_task`, { name: taskData.name, completed: taskData.completed },config)
        console.log(response)
        setSucess(response.data.msg)
    }
    
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <div className='card text-center' style={{ width: '18rem' }}>
                    <p>{success }</p>
                        <form className='p-3' onSubmit={taskDataUpload}>
                                <h3>Create Memory</h3>
                                <div className="form-group">
                                <input type="text" name='name' value={taskData.name} className='form-control' onChange={handleSubmit} />
                                </div>
                                <div className='form-group'>
                                <input type="text" name='completed' value={taskData.completed} className='form-control' onChange={handleSubmit}/>
                                </div>
                                <button type='submit' className='btn btn-primary'>create</button>
                            </form>
                        </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card" >
                        {task.map((tasks) => {
                            return (
                                <div className='card'>
                                    <h4>{tasks.name}</h4>
                                    <p>{ tasks.completed}</p>
                                </div>
                            )
                      })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard


// {task.map((tasks) => {
//                                 const { name, completed } = tasks
//                                 return <div>
//                                     <h3>{name}</h3>
//                                     <h4>{ completed}</h4>
//                                 </div>
//                             })}