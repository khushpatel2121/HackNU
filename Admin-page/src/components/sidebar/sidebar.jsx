import React from 'react'
import './sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import {Link} from "react-router-dom"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sideWrapper'>
        <div className='sideMenu'>
        <h3 className='sideTitle'>Dashboard </h3>
        <ul className='sideList'>
        <Link className='link' to="/">
         <li className='sideListItem'>
       <HomeIcon className='sideIcon'
       /> Home
      </li>
      </Link>
      <Link to="/analysis" className='link'>

      <li className='sideListItem'>
       <EqualizerIcon className='sideIcon'
       /> Analytics
      </li>
      </Link>
      <li className='sideListItem'>
       <AutoGraphIcon className='sideIcon'
       />Sales
      </li>
        </ul>
        </div>
        <div className='sideMenu'>
    
        <ul className='sideList'>
        {/* <Link to="/users" className="link">

         <li className='sideListItem'>
       <HomeIcon className='sideIcon'
       /> Users
      </li>
        </Link>
        <Link className='link' to='/products'>
      <li className='sideListItem'>
       <EqualizerIcon className='sideIcon'
       /> Products
      </li>
      </Link>
      <li className='sideListItem'>
       <AutoGraphIcon className='sideIcon'
       />Tranascations
      </li>
      <li className='sideListItem'>
       <AutoGraphIcon className='sideIcon'
       />Reports
      </li>
        </ul>
        </div>
        <div className='sideMenu'>
        <h3 className='sideTitle'>Notifications</h3>
        <ul className='sideList'>
         <li className='sideListItem'>
       <HomeIcon className='sideIcon'
       /> Home
      </li>
      <li className='sideListItem'>
       <EqualizerIcon className='sideIcon'
       /> Analytics
      </li>
      <li className='sideListItem'>
       <AutoGraphIcon className='sideIcon'
       />Sales
      </li>
        </ul>
        </div>
        <div className='sideMenu'>
        <h3 className='sideTitle'>Staff</h3>
        <ul className='sideList'>
         <li className='sideListItem'>
       <HomeIcon className='sideIcon'
       /> Home
      </li>
      <li className='sideListItem'>
       <EqualizerIcon className='sideIcon'
       /> Analytics
      </li>
      <li className='sideListItem'>
       <AutoGraphIcon className='sideIcon'
       />Sales
      </li> */}
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
