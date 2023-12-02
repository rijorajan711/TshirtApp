import React from 'react'
import { useContext } from 'react'
import { addWishlistProductContext } from '../Context/WishlistContext'
import Card from '../Components/Card'
function WishList() {

    const {addWishlistProjectState,setAddWishlistProjectState}=useContext(addWishlistProductContext)
  return (
    <div className='min-h-screen flex flex-wrap justify-start gap-5 bg-slate-300 p-10'>
 
      {
             addWishlistProjectState?.length>0?addWishlistProjectState.map((product)=>(

                <Card product={product} />
             ))
             :<h1>Sorry</h1>

      }
      
       
    </div>
  )
}

export default WishList
