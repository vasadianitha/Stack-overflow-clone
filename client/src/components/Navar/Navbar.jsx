import React , { useEffect} from 'react';
import {Link , useNavigate} from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import decode from 'jwt-decode'

import logo from '../../assets/logo.png';
import search from '../../assets/search.jpg';
import Avatar from '../../components/Avatar/Avatar';
import { setCurrentUser } from '../../actions/currentUser'
import './Navbar.css';

const Navbar = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    var User = useSelector((state) => (state.currentUserReducer))

    const handleLogout = () => {
        dispatch({ type : 'LOGOUT'})
        navigate('/')
        dispatch(setCurrentUser(null))
    }

    useEffect(() => {
        const token = User?.token
        if(token){
            const decodedToken = decode(token)
            if(decodedToken.exp * 1000  < new Date().getTime()){
                handleLogout()
            }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    },[User?.token,dispatch])

   


  return (
    <nav className='main-nav'>
        <div className="navbar">
            <Link to='/' className='nav-item nav-logo'>
                <img src={logo} alt='logo' height='25' />
            </Link>
            <Link to='/' className='nav-item nav-btn'>About</Link>
            <Link to='/' className='nav-item nav-btn'>Products</Link>
            <Link to='/' className='nav-item nav-btn'>For Teams</Link>
            <form action="">
                <input type="text" placeholder='search...' />
                <img src={search} alt="search" className='search-icon' width='30' />
            </form>
            { User === null ?
                <Link to='/Auth' className='nav-item nav-links'>Log in</Link> : 
                <>
                    <Avatar backgroundColor='#009dff' px="13px" py="9px" borderRadius="50%" color="white"><Link to={`/Users/${User?.result?._id}`} style={{color:'white',textDecoration:'none'}}>{ User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
                    <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>
                </>
            }
        </div>
    </nav>
  )
}

export default Navbar