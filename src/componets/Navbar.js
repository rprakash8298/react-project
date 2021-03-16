import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
const Navbar = () => {

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"       aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
       <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
            <Link to='/' className='nav-link'>Home</Link>
      </li>
      <li class="nav-item">
            <Link to='/login' className='nav-link'>login</Link>
      </li>
      <li class="nav-item">
            <Link to='/register' className='nav-link'>Register</Link>
      </li>
        <li className="nav-item">
             <Link to='/dashboard' className='nav-link'>Dashboard</Link>               
      </li>
    </ul>
  </div>
</nav>
        </div>
    )
}

export default Navbar