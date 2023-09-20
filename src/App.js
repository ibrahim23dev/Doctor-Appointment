
import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registation from "./Pages/Registation";
import Layout from "./Components/Common/Layout";
import Meet from "./Components/Appoinment/Meet";
import Room from "./Components/Room/Room";
import Patients from "./Pages/Patients";
import Doctor from "./Pages/Doctor";
function App() {
  return (
    <div>
<BrowserRouter>
  <Routes>
   <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
       <Route path="/meet" element={<Meet/>}/>
       <Route path="/room/:roomId" element={<Room/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/regis" element={<Registation/>}/>
       <Route path="/patients" element={<Patients/>}/>
       <Route path="/doctor" element={<Doctor/>}/>

   </Route>
  </Routes>
</BrowserRouter>
    </div>
  );
}
export default App;
