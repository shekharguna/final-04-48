import Carousel1 from "../comp/Carousel"
import Card1 from "../comp/Card"
import Card2 from "../comp/Card copy"
import { Link } from "react-router-dom"
import img1 from "../assets/tagline.jpg"
import img2 from "../assets/popular.jpg"
import img3 from "../assets/tshirtsq.jpg"
import img4 from "../assets/CASE.jpg"
import img5 from "../assets/hoodiessq.jpg"
import img6 from "../assets/tagline1.gif"


export default function Home(){
    return(
        <>
        <div>
    <Carousel1></Carousel1>
   <Card1></Card1>
   <Card2></Card2>
 
    
 
   </div>
   <img src={img1} className="py-3"></img>
   <img src={img2} className="py-3"></img>
   <div className=" grid grid-cols-3 gap-4">
   <Link to="/tshirtprod">
   <img src={img3}></img>
   </Link>
   <Link to="/caseprod">
   <img src={img4}></img>
   </Link>
   <Link to="/hoodieprod">
   <img src={img5}></img>
   </Link>
   </div>
   <img src={img6} className="py-3"></img>
   </>
    )
}