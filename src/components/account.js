import { useLocation,useNavigate,Link } from 'react-router-dom'
import axios from 'axios'
import React, {useState } from 'react'

function Account() {
  const history=useNavigate()
    const [d, dd] = useState('disabled');
    const location=useLocation()
    const edit=(e)=>{
      e.preventDefault ()
      document.getElementById("name").removeAttribute("disabled");
      document.getElementById("mno").removeAttribute("disabled");
      document.getElementById("password").removeAttribute("disabled");
    }

    const [name,setName]=useState(location.state.name)
    const [password,setPassword]=useState(location.state.password)
    const [mno,setMno]=useState(location.state.mno)

    async function update(e){
      e.preventDefault()
      console.log("test")
      try{
        await axios.post("http://localhost:8000/home/account/update",{name,password,mno})
      .then(res=>{
				if(res==="updated"){
          document.getElementById("name").setAttribute("disabled");
      document.getElementById("mno").setAttribute("disabled");
      document.getElementById("password").setAttribute("disabled");
				  history("/home/account",{})
				}})
            .catch(e=>{
              alert("error")
              console.log(e)
            })
          }
    catch(e){
        console.log(e)
    }}
  return (
    <div><div><div style={{position:'relative',minHeight:100+'vh'}} className="container-fluid">
    <div className="row text-center text-white bg-primary mb-3 p-3" style={{borderBottomLeftRadius:60+"%",borderBottomRightRadius:60+"%"}}>
        <h2>E-commerce</h2>
        <p>WELCOME {location.state.name}</p>
    </div>
    
    <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5 text-center">
                <img src="../images/login.jfif" className="img-fluid" alt='login' ></img>
            </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1" style={{height:600+'px'}}>
          <form >
            <label>Name</label>
            <input type='text' value={name} id='name' disabled onChange={(e)=>{setName(e.target.value)}}></input>
            <label>Email</label>
            <input type='text' value={location.state.email} id='email' disabled></input>
            <label>Password</label>
            <input type='text' value={password} id='password' disabled onChange={(e)=>{setPassword(e.target.value)}}></input>
            <label>Mno</label>
            <input type='number' value={mno} id='mno' disabled onChange={(e)=>{setMno(e.target.value)}}></input>
            <button onClick={edit}>Edit</button>
            <button onClick={update}>Update</button>
          </form>
        </div>
        </div>




</div>
<div style={{position:'absolute',bottom:0, height: 120+'px', width: 100+'%'}} className="text-center bg-primary p-4">
<div className="text-white col mb-3 mb-md-0">
<p>Copyright © 2022.(Reneesh) - Full Stack React Project. All Rights Reserved</p>
</div>
<div className="px-4">
<a disabled="#!" className="text-white me-sm-4">
  <i className="fab fa-facebook-f"></i>
</a>
<a disabled="#!" className="text-white me-sm-4">
  <i className="fab fa-twitter"></i>
</a>
<a disabled="#!" className="text-white me-sm-4">
  <i className="fab fa-google"></i>
</a>
<a disabled="#!" className="text-white me-sm-4">
  <i className="fab fa-linkedin-in"></i>
</a>
</div>
</div></div></div>
  )
}

export default Account
