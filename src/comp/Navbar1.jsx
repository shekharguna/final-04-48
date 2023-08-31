import { Navbar } from "flowbite-react"
import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import img1 from "../assets/logo1.png"


export default function Navbar1(){
  const { loginWithRedirect, logout,  isAuthenticated} = useAuth0();
  
    return(
      <>
      
        <Navbar
  fluid={true}
 
  className="bg-zinc-800 mb-2 border-2 border-zinc-700 "
 >
 
  <Navbar.Brand

    to="/navbars"
  > 
  <img src={img1} className="h-16"></img>  
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
   
   <div className="flex flex-row gap-20 mr-32">
  <Link to="/" className=" font-semibold text-2xl font-sans  text-white hover:text-green-600  ">
      Home
      </Link>
   
      <Link to="/shoppingcart" className="font-semibold text-2xl font-sans  text-white hover:text-green-600">
      Shopping Cart
      </Link>
     
    <Link to="/about1" className="font-semibold text-2xl font-sans  text-white hover:text-green-600 mr-60">
      About
    </Link>

 
    </div>

  
   {
   isAuthenticated ? (
    <button className="hover:text-green-600 text-white font-semibold text-2xl font-sans" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
    Log Out
  </button>
   ) : (
    <button className="hover:text-green-600 text-white font-semibold text-2xl font-sans" onClick={() => loginWithRedirect()}>Log In</button>
   )
   
   }
   
    

   

    
  </Navbar.Collapse>
</Navbar>
</>
    )
}