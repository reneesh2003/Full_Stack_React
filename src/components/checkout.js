import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate,useLocation } from 'react-router-dom'

function Checkout() {
    const history=useNavigate()
    const location=useLocation()

    const [addr,setaddr]=useState('')
    const [cardno,setcardno]=useState('')
    const [cardname,setcardname]=useState('')
    const [valid,setvalid]=useState('')
    const [cvv,setcvv]=useState('')


    async function submit(e){
        e.preventDefault()
        try{
            console.log(location.state.product)
            await axios.post("http://localhost:8000/home/product/donecheckout",{p:location.state.product,addr})
            .then(res=>{
				if(res){
                    console.log(res)
				  history("/home",{state:res.data})
				}})
            .catch(e=>{
              alert("error")
              console.log(e)
            })}
        catch(e){
                console.log(e)
            }
    }
  return (
    <div><div><div style={{position:'relative',minHeight:100+'vh'}} className="container-fluid">
    <div className="row text-center text-white bg-primary mb-3 p-3" style={{borderBottomLeftRadius:60+"%",borderBottomRightRadius:60+"%"}}>
        <h2>E-commerce</h2>
    </div>
    <div className='row d-flex justify-content-center align-items-center'>
    <form className='col-md-9 col-lg-6 col-xl-4 '>
        <label className='form-label text-dark' htmlFor='addr'>Address</label>
        <textarea onChange={(e)=>{setaddr(e.target.value)}} className='form-control border border-dark' id='addr' placeholder={"Enter your Address....."}></textarea><br/>
        <fieldset className='form-control border border-dark'>
            Enter Card Details<br/><br/>
            <label style={{width:200+'px'}}>Card No:</label>
            <input type='text' onChange={(e)=>{setcardno(e.target.value)}} className='col-xl-4'></input><br/><br/>
            <label style={{width:200+'px'}}>Card Holder Name:</label>
            <input type='text' onChange={(e)=>{setcardname(e.target.value)}} className='col-xl-4'></input><br/><br/>
            <label style={{width:200+'px'}}>Valid Till:</label>
            <input type='text' onChange={(e)=>{setvalid(e.target.value)}} className='col-xl-4'></input><br/><br/>
            <label style={{width:200+'px'}}>CVV:</label>
            <input type='text' onChange={(e)=>{setcvv(e.target.value)}} className='col-xl-4'></input><br/><br/>
        </fieldset>
    </form>
</div><button className='btn btn-primary m-4' onClick={submit} >Submit</button>
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

export default Checkout