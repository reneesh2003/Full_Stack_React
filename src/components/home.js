import React, { useState } from 'react'
import { useLocation,useNavigate,Link } from 'react-router-dom'
import axios from 'axios'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Home() {
	const history=useNavigate()
	const location=useLocation()

	async function submit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:8000/home/account")
			.then(res=>{
				if(res.data["email"]){
				  history("/home/account",{state:res.data})
				}})
            .catch(e=>{
              alert("error")
              console.log(e)
            })
        }
        catch(e){
            console.log(e)
        }
        }

  return (
    <div>
		<div style={{position:'relative',minHeight:100+'vh'}} className="container-fluid">
            <div className="row text-center text-white bg-primary mb-3 p-3" style={{borderBottomLeftRadius:60+"%",borderBottomRightRadius:60+"%"}}>
				<h2>E-commerce</h2>
				<p>WELCOME {location.state.name}</p>
			</div>
			<div style={{position:"absolute",top:10,right:10}}>
			<button onClick={submit}type='submit'><AccountCircleIcon/>My Account</button>
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
      </div>
		
    
    </div>
  )
}

export default Home 