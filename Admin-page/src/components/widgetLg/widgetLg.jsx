import React,{useEffect} from 'react'
import "./widget.css"
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import Popup from '../popup/Popup';
import {format}from "timeago.js";
import axios from "axios"


const WidgetLg = () => {

  const [open,setOpen] = useState(false);

  const [data,setData] = useState([]);

  useEffect(()=>{
    const fetchData =async()=>{
      const res = await axios.get("http://localhost:3000/api/users/");
      setData(res.data);
      console.log(res.data)
    };
    fetchData();
  },[])

 const handleEdit =()=>{
      setOpen(!open);
 }

    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
      };
  return (
    <div className='widgetlg'>
        <div className="widgetLg">
        
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
      <thead>

        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Edit</th>
          <th className="widgetLgTh">Status</th>
        </tr>
      </thead>
        {
          data.map((item)=>(<>

            {
          open&&<Popup item={item} open={open}/>
        }
        <tbody>

            <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">{item.username}</span>
          </td>
          <td className="widgetLgDate">{format(item.createdAt)}</td>
        
          <td className="widgetLgAmount" onClick={handleEdit}><EditIcon/></td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        </tbody>
          </>
          ))
        }
      
        {/* <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
         
          <td className="widgetLgAmount"><EditIcon/></td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
         
          <td className="widgetLgAmount"><EditIcon/></td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount"><EditIcon/></td>
         
          <td className="widgetLgStatus">
            <Button type="Approved" /> 
          </td>
        </tr>*/}
      </table>
    </div>
    </div>
  )
}

export default WidgetLg
