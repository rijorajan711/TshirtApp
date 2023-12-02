
import React,{createContext,useState} from "react"
export const addCartProductContext=createContext() 
function CartContext({children}) {
    const [addCartProjectState,setAddCartProjectState]=useState([])
  return (
    <div>

<addCartProductContext.Provider value={{addCartProjectState,setAddCartProjectState}}>

{children}
   </addCartProductContext.Provider>
      
    </div>
  )
}

export default CartContext






