import React from 'react'
import { useContext } from 'react'
import { addCartProductContext } from '../Context/CartContext'
import { addWishlistProductContext } from '../Context/WishlistContext'
import { ToastContainer,toast } from 'react-toastify'


function Card(prop) {
    const {addCartProjectState,setAddCartProjectState}=useContext(addCartProductContext)
    const {addWishlistProjectState,setAddWishlistProjectState}=useContext(addWishlistProductContext)
    
    const addtocart=(product)=>{
    const newAddCartProjectState=[...addCartProjectState]
    newAddCartProjectState.push(product)
    setAddCartProjectState(newAddCartProjectState)
    toast.warning("product added to cart")
    }


    const addtowishlist=(product)=>{

    
        const newAddWishlistProjectState=[...addWishlistProjectState]
        newAddWishlistProjectState.push(product)
        setAddWishlistProjectState(newAddWishlistProjectState)
        toast.warning("product added to wishlist")
    }

  return (
    
    
    <div className='group h-[400px]  w-[250px] flex gap-5 flex-col bg-slate-100 rounded-lg shadow-2xl hover:scale-[1.01] duration-700'>



  <div className='relative max-h-[50%] min-h-[50%] rounded-lg  '>
  <img className='absolute max-h-full min-h-full w-full rounded-lg ' src={prop?.product?.imageURL}></img>

  </div>




<div className='flex flex-col gap-3'>

    <h1 className='pl-2 font-serif text-2xl'>{prop?.product?.name}</h1>
    <span className='pl-2 font-serif text-2xl'></span>

  
    <span className='pl-4 font-bold text-lg '>Gender: {prop?.product?.gender}</span>
    <span className='pl-4 font-bold text-lg '>{prop?.product?.price} </span>

  {
    prop?.display?

    <div className='flex justify-between'>
   <button onClick={()=>addtocart(prop.product)} className='bg-slate-400 h-11 w-[45%]'>Add to Cart</button>
   <button onClick={()=>addtowishlist(prop.product)} className='bg-slate-400 h-11 w-[45%]'>Add to Wishlist</button>
    </div>:""

  }

</div>



</div>
  )
}

export default Card
