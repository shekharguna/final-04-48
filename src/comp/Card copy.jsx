
import { Link } from "react-router-dom"
import img1 from "../assets/SIGMUND.jpg"
import img2 from "../assets/antoine.jpg"
import img3 from "../assets/HERODETUS.jpg"
import img4 from "../assets/GEOFFERY.jpg"

export default function Card2(){
    return( 
            <div className="flex flex-col md:flex-row justify-center align-center my-3"> 
      <div className="m-2"> 
        <div className="max-w-sm m1-16"> 
        <Link to="/psychology">
  <img src={img1} className="opacity-100 hover:opacity-80"></img> 
  </Link>
  </div> 
</div> 
<div className="m-2"> 
        <div className="max-w-sm m1-16"> 
        <Link to="/chemistry">
  <img src={img2} className="opacity-100 hover:opacity-80"></img> 
  </Link>
  </div> 
</div> 
<div className="m-2"> 
        <div className="max-w-sm m1-16"> 
        <Link to="/history">
  <img src={img3} className="opacity-100 hover:opacity-80"></img>
  </Link>
  </div>
</div>
<div className="m-2">
        <div className="max-w-sm m1-16">
        <Link to="/english">
  <img src={img4} className="opacity-100 hover:opacity-80"></img>
  </Link>
  </div>
</div>

</div>

    )
}