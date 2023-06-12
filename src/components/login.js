import React, { useState } from 'react'
import {useNavigate,Link} from 'react-router-dom'
import axios from 'axios'

function Login() {

    const history=useNavigate()

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    
    async function submit(e){
        e.preventDefault();
        
        try{
            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
              if(res.data==="exist"){
                history("/home",{state:{id:email}})
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
    <div>
        <div className="container-fluid">
            <div className="row">
                <form id="myform" action="/register" method="post" className="row text-white text-center p-4">
                    <div className="col-md-3 border border-dark bg-secondary p-2 m-2">Sign in using Existing Account</div>
                    <button className="col-md-3 bg-primary p-2 m-2" >Register For A New Account</button>
                </form>
            </div>
        <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5 text-center">
                <img src="./images/login.jfif" className="img-fluid" alt='login' ></img>
            </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form action="/home" method="post">
            <h5 className="text-center ">Login</h5>
            <div className="form-outline mb-4">
                <label htmlFor="email">Email</label>
                <input className="form-control" type="email" onChange={(e)=>{setEmail(e.target.value)}} name="email" id="email" placeholder="Enter a valid E-mail " required /><br/>            
            </div>
  
            <div className="form-outline mb-3">
              <label htmlFor="password">Password</label>
              <input className="form-control" type="password" onChange={(e)=>{setPassword(e.target.value)}} name="password" id="password" placeholder="Enter your Password " required/><br/> 
            </div>
  
            <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                <label className="form-check-label" htmlFor="form2Example3">
                  Remember me
                </label>
                </div>
            </div>
  
            <div className="text-center text-lg-start mt-4 pt-2">
            <input onClick={submit}  style={{paddingLeft: 2.5+'rem', paddingRight: 2.5+'rem'}} type="submit" id="submitDetails" name="submitDetails" className="btn btn-primary btn-lg registerbtn" value="Login" />   <br/>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account?</p>
            <Link to="/signup">Signup</Link>
                  <br/>
                  <br/>
            </div>
  
          </form>
        </div>
      </div>
    </div>
    <div style={{position:'absolute', bottom:'0', height: 120+'px', width: 100+'%'}} className="text-center bg-primary p-4">
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
    </div>
  </div>
  )
}

export default Login