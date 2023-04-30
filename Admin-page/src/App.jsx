import AbcIcon from '@mui/icons-material/Abc';
import './App.css'
import Topbar from './components/topbar/topbar';
import Sidebar from './components/sidebar/sidebar';
import Home from './pages/Home/Home';
import Users from "./pages/users/users";
import {Routes,Route} from "react-router-dom"
import Register from './components/register/register';
import Login from './components/login/login';
import { Navigate } from 'react-router-dom';
import {useSelector} from "react-redux";
import Popup from './components/popup/Popup';

function App() {
  
  


    const ProtectedRoute = ({children}) =>{
      
      const {currentUser} = useSelector((state)=>state.user);
   
      if(!currentUser){
       return <Navigate to="/login"/>
      }
    
      return children
     }

  return (
    <>
     <Topbar/>
     
    
     <Routes>
  

        <Route path="/" element={
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute>
        }/>
        <Route path="/users" element={
          <ProtectedRoute>
              <Users/>
          </ProtectedRoute>
      }/>
     <Route path="/register" element={<Register/>}/>
     <Route path="/analysis" element={
      <ProtectedRoute>
        <Users/>
      </ProtectedRoute>
     }/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/edit" element={<Popup/>}/>
     </Routes>
 
     
    </>
  )
}

export default App
