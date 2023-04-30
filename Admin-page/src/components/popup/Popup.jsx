import React, { useEffect, useState } from 'react';
import "./Pop.css";
import axios from "axios";



const Popup = ({item}) => {

  
 
  const [open,setOpen] = useState(true);
  const [packet,setPacket] = useState("");
  const [update,setUpdate] =useState(false);

  console.log(packet)

  const handleUpdate = async()=>{

 
 
// await axios.put(`http://localhost:3000/api/users/${item._id}`, )
// .then(response => {
//   console.log(response.data);
// })
// .catch(error => {
//   console.log(error);
// });
    
    

    try{
      await axios.put(`http://localhost:3000/api/users/${item._id}`,{
        data:[
          {
            requestType,
            request
          }
        ]
      })
      setUpdate(false)
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className='Popup' >
      <div className='WPopup' >
        <h1>
            Request
        </h1>
        <div className='content'onChange={(e)=>setPacket(e.target.value)}>
        {
                  update ? (
                    <textarea
                    type="text"
                      defaultValue={ item.data.map((req)=>(
                  req.request
              ))}
                      className="singlePostDescInput"
                      onChange={(e)=>setPacket(e.target.value)}
                    />
                  ):(
                    <p className="singlePostDesc"> 
                    { item.data.map((req)=>(
                  req.request
              ))}
                  </p>
              
                  )
                }
      
          
        </div>

        <div className='edit'>
            <span className='icons' onClick={handleUpdate}>Save</span>
            <span className='icons' onClick={()=>setUpdate(!update)}>Revert</span>
        </div>
      </div>
    </div>
  )
}

export default Popup
