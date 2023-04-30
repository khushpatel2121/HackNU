import React from 'react'
import "./widgetSm.css"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const WidgetSm = () => {
  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle' contentEditable>
      Recent requests
      </span>
        <ul className='widgetSmList'>
        <li className='widgetSmListItem'>
        <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='' className='widgetSmImg'/>
        <div className='widgetSmUser'>
        <span className='widgetSmUsername'>Manan Shah</span>
        <span className='widgetSmUserTitle'>Software Engineer</span>
        </div>
        <button className="widgetSmButton">
            <RemoveRedEyeIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        {/* <li className='widgetSmListItem'>
        <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='' className='widgetSmImg'/>
        <div className='widgetSmUser'>
        <span className='widgetSmUsername'>Anna Keller</span>
        <span className='widgetSmUserTitle'>Software Engineer</span>
        </div>
        <button className="widgetSmButton">
            <RemoveRedEyeIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
        <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='' className='widgetSmImg'/>
        <div className='widgetSmUser'>
        <span className='widgetSmUsername'>Anna Keller</span>
        <span className='widgetSmUserTitle'>Software Engineer</span>
        </div>
        <button className="widgetSmButton">
            <RemoveRedEyeIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
        <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='' className='widgetSmImg'/>
        <div className='widgetSmUser'>
        <span className='widgetSmUsername'>Anna Keller</span>
        <span className='widgetSmUserTitle'>Software Engineer</span>
        </div>
        <button className="widgetSmButton">
            <RemoveRedEyeIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
        <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='' className='widgetSmImg'/>
        <div className='widgetSmUser'>
        <span className='widgetSmUsername'>Anna Keller</span>
        <span className='widgetSmUserTitle'>Software Engineer</span>
        </div>
        <button className="widgetSmButton">
            <RemoveRedEyeIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
        <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='' className='widgetSmImg'/>
        <div className='widgetSmUser'>
        <span className='widgetSmUsername'>Anna Keller</span>
        <span className='widgetSmUserTitle'>Software Engineer</span>
        </div>
        <button className="widgetSmButton">
            <RemoveRedEyeIcon className="widgetSmIcon" />
            Display
          </button> */}
        {/* </li> */}
        </ul>
    </div>
  )
}


export default WidgetSm
