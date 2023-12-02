import React from 'react'
import { useContext } from 'react'
import { addCartProductContext } from '../Context/CartContext'
import Card from '../Components/Card'
function Cart() {

    const {addCartProjectState,setAddCartProjectState}=useContext(addCartProductContext)
  return (
    <div className='min-h-screen flex flex-wrap justify-start gap-5 bg-slate-300 p-10'>
 
      {
             addCartProjectState?.length>0?addCartProjectState.map((product)=>(

                <Card product={product} />
             ))
             :<h1>Sorry</h1>

      }
      
       
    </div>
  )
}

export default Cart
