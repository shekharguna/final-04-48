
import image from "../assets/BABBAGE.jpg"
import image1 from "../assets/socrates.jpg"
import image2 from "../assets/beethoven.jpg"
import image3 from "../assets/ARISTOTLE.jpg"
import { Link } from "react-router-dom"

export default function Card1(){
    return( 
            <div className="flex flex-col md:flex-row justify-center align-center my-3 "> 
           
      <div className="m-2"> 
        <div className="md:max-w-sm  m1-16 "> 
        <Link to="/bcaproduct">
  <img src={image} className="opacity-100 hover:opacity-80"></img> 
  </Link>
  </div> 
</div> 

<div className="m-2"> 
        <div className="max-w-sm m1-16"> 
        <Link to="/philosophy">
  <img src={image1} className="opacity-100 hover:opacity-80"></img> 
  </Link>
  </div> 
</div> 
<div className="m-2"> 
        <div className="max-w-sm m1-16"> 
        <Link to="/musicproduct">
  <img src={image2} className="opacity-100 hover:opacity-80"></img>
  </Link>
  </div>
</div>
<div className="m-2">
        <div className="max-w-sm m1-16">
        <Link to="/zoology">
  <img src={image3} className="opacity-100 hover:opacity-80"></img>
  </Link>
  </div>
</div>

</div>

    )
}