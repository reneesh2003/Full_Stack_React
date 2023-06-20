import React, { useState } from 'react'
import { useLocation,useNavigate,Link } from 'react-router-dom'
import axios from 'axios'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


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

  async function product(e){
    const p=e.currentTarget.getAttribute("data-value")
    e.preventDefault();
    try{
      await axios.post("http://localhost:8000/home/product",{p})
.then(res=>{
  if(res.data["product"]){
    history("/home/product",{state:res.data})
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
      <CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={100}
        totalSlides={3}
        interval={5000}
        isPlaying={true}
        dragEnabled={true}
        style={{height:500+'px',margin:20+'px'}}
      >
        <Slider style={{height:500+'px'}}>
          <Slide index={0}><img src='../images/1.jpg' height={500} width={800}></img></Slide>
          <Slide index={1}><img src='../images/2.jpg' height={500} width={800}/></Slide>
          <Slide index={2}><img src='../images/3.jpg'height={500} width={800}/></Slide>
        </Slider>
      </CarouselProvider>
      <div className="row d-flex justify-content-center align-items-center h-100 m-3">
            <div className="col-md-9 col-lg-4 col-xl-3 text-center">
                <img src="./images/laptop.webp" style={{height:200+'px',width:'auto'}} className="img-fluid" alt='login' ></img>
                <button className='btn btn-primary mt-2' data-value={"product1"} onClick={product} style={{position:"relative",display:'block',left:40+'%'}} >Buy Now</button>
            </div>
            <div className="col-md-9 col-lg-3 col-xl-3 text-center">
                <img src="./images/phone.webp" style={{height:200+'px',width:'auto'}}  className="img-fluid" alt='login' ></img>
                <button className='btn btn-primary mt-2' data-value={"product2"} onClick={product} style={{position:"relative",display:'block',left:40+'%'}}>Buy Now</button>
            </div>
            <div className="col-md-9 col-lg-4 col-xl-3 text-center">
                <img src="./images/airdopes.webp" style={{height:200+'px',width:'auto'}} className="img-fluid" alt='login' ></img>
                <button  className='btn btn-primary mt-2'data-value={"product3"} onClick={product} style={{position:"relative",display:'block',left:40+'%'}}>Buy Now</button>
            </div>
            </div>
		</div>
		<div style={{position:'relative',bottom:0, height: 120+'px', width: 100+'%'}} className="text-center bg-primary p-4">
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