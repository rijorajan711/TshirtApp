import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
 
<>
<div
      className={`max-h-28 min-h-28 bg-zinc-700 sticky top-0 opacity-75 w-full  lg:p-14 flex justify-between items-center flex-initial  z-50`}
     >
    <span className="font-semibold text-white lg:text-5xl ">Tshirt Shopping</span>
    <Link to={"/"}>
    <span className="font-semibold text-white lg:text-4xl">
      Home
    </span  >
    </Link>
    
   
    <Link to={"/cart"}>
    <span className="font-semibold text-white lg:text-4xl">
      Cart
    </span  >
    </Link>
    <Link to={"/wishlist"}>

        <span className="font-semibold text-white lg:text-4xl">
        WishList{" "}
        </span>

    </Link>
    </div>

</>
   
  )
}

export default Header
