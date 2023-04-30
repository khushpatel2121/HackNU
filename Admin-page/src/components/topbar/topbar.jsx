import React from 'react'
import "./topbar.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import PublicIcon from '@mui/icons-material/Public';
import Badge from '@mui/material/Badge';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/userSlice';

const Topbar = () => {
const {currentUser} = useSelector((state)=>state.user)
const dispatch = useDispatch();


  


  return (
    <>

    <div className='topbar'>
      <div className='wrapper'>
    <div className='left'>
    <Link className='link' to='/'>
        <span className='logo'>
           ALPINE
        </span>
        </Link>
        </div>
        <div className='right'>
        
{
  currentUser ? (<>
    <div className='token'>
<span>
  Token:-
</span>
<span>
  2332u9e
</span>
</div>
    <Badge  color="success" variant='dot' overlap="circular" badgeContent=" ">
  <NotificationsIcon className='icon' color="action" />
</Badge>
<Badge  color="success" variant='dot' overlap="circular" badgeContent=" ">
  <PublicIcon className='icon' color="action" />
</Badge>
<SettingsIcon className='icon' color="action"/>

    <img
    src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
    alt='profile img'
    className='Pimg'
/>
<button className='LObutton' onClick={()=>dispatch(logout())}>LOGOUT</button>
  </>
  ):(
    <Link className="link" to="/register">

    <span>
    Register
  </span>
    </Link>)
}

        </div>
      </div>
    </div>
    </>
  )
}

export default Topbar
