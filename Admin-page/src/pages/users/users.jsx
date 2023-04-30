import React, { useEffect,useState } from 'react'
import "./users.css";
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import Sidebar from '../../components/sidebar/sidebar';
import Chart from '../../components/chart/Chart';
import { userData } from '../../dummy';
import axios from "axios";

const Users = () => {

const [user,setUser] = useState([]);

  useEffect(()=>{
    const FetchData = async()=>{
      const res = await axios.get("http://localhost:3000/api/users/");
      setUser(res.data);
      console.log(res.data);
    };
    FetchData()
  },[])

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'username', headerName: 'Username', width: 130 },
        { field: 'email', headerName: 'Email', width: 170 },
        {
          field: 'request',
          headerName: 'Request',
        
          width: 130,
        },
        {
          field: 'status',
          headerName: 'Status',
         
         
          width: 130,
         
        },
        // {
        //     field:'action',
        //     headerName:'Action',
        //     width:150,
        //     renderCell:(params)=>{
        //         return(
        //             <>
        //             <button className='userListEdit'>Edit</button>
        //             <button className='userListDelete'><DeleteIcon/></button>
        //             </>
        //         )
        //     }
        // }
      ];

      const rows = [
          { id: 1, Username: 'Snow', Email: 'Jon@khush.com', status:'pending',Transcation:'$120' },
        
      ];
      
  return (
    <div className='container'>
    <Sidebar/>
    <div className='users'>
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={user}
      columns={columns}
      disableRowSelectionOnClick
      paginationModel={{ page: 0, pageSize: 5 }}
      checkboxSelection
      getRowId={(user) => user._id}
    />
      
  </div>
  <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        </div>
       
        </div>
  )
}

export default Users
