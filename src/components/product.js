import React from 'react'
import axios from 'axios'
import {useNavigate,useLocation } from 'react-router-dom'


function Product() {
    const history=useNavigate()
    const location=useLocation()
    async function submit(e){
        e.preventDefault()
        try{
            await axios.post("http://localhost:8000/home/product/checkout",{p:location.state.product})
            .then(res=>{
				if(res){
                console.log(res)
				  history("/home/product/checkout",{state:res.data})
				}})
            .catch(e=>{
              alert("error")
              console.log(e)
            })}
        catch(e){
                console.log(e)
            }}
  return (
    <div><div><div style={{position:'relative',minHeight:100+'vh'}} className="container-fluid">
    <div className="row text-center text-white bg-primary mb-3 p-3" style={{borderBottomLeftRadius:60+"%",borderBottomRightRadius:60+"%"}}>
        <h2>E-commerce</h2>
    </div>

    <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-4 text-center m-3">
                <img src={"../images/"+location.state.image} className="img-fluid" alt='login' ></img>
                <button className='btn btn-primary mt-5' onClick={submit} style={{position:"relative",display:'block',left:45+'%'}}>Buy Now</button>
            </div>
            <div className="col-md-9 col-lg-6 col-xl-4 text-center m-3">
            <h2>{location.state.name}</h2>
            <h4>Price: {location.state.price}</h4>
                <div>{location.state.highlights}</div>
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

export default Product