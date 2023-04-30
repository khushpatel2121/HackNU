import React from 'react'
import "./featured.css"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Featured = () => {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <span className='featuredTitle'>Requests</span>
        <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>2,415</span>
            <span className='featuredMoneyRate'>-11.4 <i className='featuredIcon'>  <ArrowUpwardIcon/></i></span>
            
            </div>
            <span className='report '>Compare to last month</span>
      </div>
      {/* <div className='featuredItem'>
        <span className='featuredTitle'>Revenue</span>
        <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>$2,415</span>
            <span className='featuredMoneyRate'>-11.4 <i className='featuredIcon'> <ArrowUpwardIcon/></i></span>
            
            </div>
            <span className='report '>Compare to last month</span>
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'>Revenue</span>
        <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>$2,415</span>
            <span className='featuredMoneyRate'>-11.4 <i className='featuredIcon'>  <ArrowUpwardIcon/></i></span>
            
            </div>
            <span className='report '>Compare to last month</span>
      </div> */}
    </div>
  )
}

export default Featured
