import { useLocation,useNavigate} from 'react-router-dom'
import axios from 'axios'
import React, {useState } from 'react'

function Account() {
  const history=useNavigate()
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
    const [email,setEmail]=useState(location.state.email)
    async function update(e){
      e.preventDefault()
      try{
        await axios.post("http://localhost:8000/home/account/update",{name,password,mno})
      .then(res=>{
				if(res.data){
          document.getElementById("name").setAttribute("disabled","");
      document.getElementById("mno").setAttribute("disabled","");
      document.getElementById("password").setAttribute("disabled","");
				  history("/home/account",{state:res.data})
				}})
            .catch(e=>{
              alert("error")
              console.log(e)
            })
          }
    catch(e){
        console.log(e)
    }}

    async function home(e){
      e.preventDefault();
      try{
          await axios.post("http://localhost:8000/",{
            email,password
          })
          .then(res=>{
            if(res.data["email"]){
              history("/home",{state:res.data})
            }
            else if(res.data==="notexist"){
              alert("User have not signed up")
            }
          })
          .catch(e=>{
            alert("wrong details")
            console.log(e)
          })
      }
      catch(e){
          console.log(e)
      }
      }

  return (
    <div><div><div style={{position:'relative',minHeight:100+'vh'}} className="container-fluid">
      <button onClick={home} style={{position:'absolute',left:0+'%'}} className="btn btn-secondary mx-4 mt-2">Home</button>
    <div className="row text-center text-white bg-primary mb-3 p-3" style={{borderBottomLeftRadius:60+"%",borderBottomRightRadius:60+"%"}}>
        <h2>E-commerce</h2>
        <p>WELCOME {location.state.name}</p>
    </div>
    
    <div className="row d-flex justify-content-center align-items-center h-100" >
            <div className="col-md-9 col-lg-6 col-xl-5 text-center m-5"  style={{height:600+'px'}}>
                <img src="../images/account.jpg" className="img-fluid" alt='login' ></img>
            </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 " style={{height:600+'px'}}>
          <form className='form-control m-3' >
            <label className='form-label'>Name</label>
            <input className='form-control' type='text' value={name} id='name' disabled onChange={(e)=>{setName(e.target.value)}}></input>
            <label className='form-label'>Email</label>
            <input className='form-control' type='text' value={location.state.email} id='email' disabled onChange={(e)=>{setEmail(e.target.value)}} ></input>
            <label className='form-label'>Password</label>
            <input className='form-control' type='text' value={password} id='password' disabled onChange={(e)=>{setPassword(e.target.value)}}></input>
            <label className='form-label'>Mno</label>
            <input className='form-control' type='number' value={mno} id='mno' disabled onChange={(e)=>{setMno(e.target.value)}}></input>
            <button className='btn btn-primary m-4' style={{width:100+'px'}} onClick={edit}>Edit</button>
            <button className='btn btn-primary m-4' style={{width:100+'px'}} onClick={update}>Update</button>
          </form>
        </div>
</div>
<div style={{position:'absolute',bottom:0, height: 120+'px', width: 100+'%'}} className="text-center bg-primary p-4">
<div className="text-white col mb-3 mb-md-0">
<p>Copyright © 2022.(Reneesh) - Full Stack React Project. All Rights Reserved</p>
</div>
<div className="px-4">
<a href="#!" className="text-white me-sm-4">
  <i className="fab fa-facebook-f"></i>
</a>
<a href="#!" className="text-white me-sm-4">
  <i className="fab fa-twitter"></i>
</a>
<a href="#!" className="text-white me-sm-4">
  <i className="fab fa-google"></i>
</a>
<a href="#!" className="text-white me-sm-4">
  <i className="fab fa-linkedin-in"></i>
</a>
</div>
</div></div></div></div>
  )
}

export default Account
