import React,{createContext,useState} from "react"
export const addWishlistProductContext=createContext() 
function WishlistContext({children}) {
    const [addWishlistProjectState,setAddWishlistProjectState]=useState([])
  return (
    <div>
      <addWishlistProductContext.Provider value={{addWishlistProjectState,setAddWishlistProjectState}}>

{children}
   </addWishlistProductContext.Provider>
    </div>
  )
}

export default WishlistContext
