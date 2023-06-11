import React, { useState } from 'react'
import {useNavigate,Link} from 'react-router-dom'
import axios from 'axios'

function Signup() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    
    async function submit(e){
        e.preventDefault();
        
        try{
            await axios.post("http://localhost:3000/signup",{
                email,password
            })
        }
        catch(e){
            console.log(e)
        }
        }

  return (
    <div>
        <div class="container-fluid">
            <div class="row">
                <form id="myform" action="/register" method="post" class="row text-white text-center p-4">
                    <div class="col-md-3 border border-dark bg-secondary p-2 m-2">Sign in using Existing Account</div>
                    <button class="col-md-3 bg-primary p-2 m-2" >Register For A New Account</button>
                </form>
            </div>
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5 text-center">
                <img src="./images/login.jfif" class="img-fluid" alt='login' ></img>
            </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form action="/home" method="post">
            <h5 class="text-center ">Login</h5>
            <div class="form-outline mb-4">
                <label for="email">Email</label>
                <input class="form-control" type="email" onChange={(e)=>{setEmail(e.target.value)}} name="email" id="email" placeholder="Enter a valid E-mail " required /><br/>            
            </div>
  
            <div class="form-outline mb-3">
              <label for="password">Password</label>
              <input class="form-control" type="password" onChange={(e)=>{setPassword(e.target.value)}} name="password" id="password" placeholder="Enter your Password " required/><br/> 
            </div>
  
            <div class="d-flex justify-content-between align-items-center">
                <div class="form-check mb-0">
                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                <label class="form-check-label" for="form2Example3">
                  Remember me
                </label>
                </div>
            </div>
  
            <div class="text-center text-lg-start mt-4 pt-2">
            <input onClick={submit}  style={{paddingLeft: 2.5+'rem', paddingRight: 2.5+'rem;'}} type="submit" id="submitDetails" name="submitDetails" class="btn btn-primary btn-lg registerbtn" value="Login" />   <br/>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account?</p>
            <Link to="/signup">Signup</Link>
                  <br/>
                  <br/>
            </div>
  
          </form>
        </div>
      </div>
    </div>
    <div style={{position:'absolute', bottom:'0', height: 120+'px', width: 100+'%'}} class="text-center bg-primary p-4">
      <div class="text-white col mb-3 mb-md-0">
        <p>Copyright © 2022.(Reneesh) - Full Stack React Project. All Rights Reserved</p>
      </div>
      <div class="px-4">
        <a href="#!" class="text-white me-sm-4">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#!" class="text-white me-sm-4">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#!" class="text-white me-sm-4">
          <i class="fab fa-google"></i>
        </a>
        <a href="#!" class="text-white me-sm-4">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  </div>
  )
}

export default Signup