import { faBars, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = ({ openSideBar }) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/login')
  }
  return (
    <nav className="navbar navbar-expand-lg bg-nav px-1" >
      <div className="container-fluid dashboard">
        <button onClick={openSideBar} className='btn' ><FontAwesomeIcon color='lightblue' icon={faBars} /></button>
        <Link className="navbar-brand ms-3" to='/'>Dashboard</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon color='lightblue' size='lg' icon={faBars} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <Link className="nav-link" aria-current="page" to='/'>Home</Link>
            </li> */}
          </ul>
          <div className='dropdown' >
            <h6 className='mx-2 my-2' style={{ color: 'white' }} >Welcome!</h6>
          </div>
          <div className="dropdown me-5">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Account
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li className="dropdown-item">
                <Link onClick={logout} to='/login'><FontAwesomeIcon color='lightblue' icon={faRightToBracket} /><span className='ms-2'>Log-out</span></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
