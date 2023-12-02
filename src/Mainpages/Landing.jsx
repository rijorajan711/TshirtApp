import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../Components/Card'
function Landing() {
     const[permenentAxiosResponse,setPermentAxiosResponse]=useState([])
     const [axiosResponse,setAxiosResponse]=useState([])
    const fetchingdata=()=>{

    axios.get("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json").then((result)=>{
    
    setAxiosResponse(result.data)
    setPermentAxiosResponse(result.data)
     }).catch((err)=>{
       console.log(err)
     })
    

    }


    useEffect(()=>{
       fetchingdata()
    },[])

    const searchItem=(e)=>{
        
        let typevalue=e.target.value.toLowerCase()

        if(typevalue){

              const searchResult=axiosResponse.filter((product)=>{
            let productName =product.gender.toLowerCase()
           return  productName==typevalue
        })

        if(searchResult.length===0){
            setAxiosResponse(permenentAxiosResponse)
        }else{
            
            setAxiosResponse(searchResult)
        }

       }else{
     
           setAxiosResponse(permenentAxiosResponse)
       }
        
        }
      


console.log(axiosResponse)
  return (


   <>

   <div className='flex w-full flex-col items-center justify-center flex-wrap bg-slate-300'>

  <div className='h-10 mt-10 focus:outline-none justify-center flex w-[50%]'>
    <input onChange={(e)=>searchItem(e)} className='h-full w-full pl-8' placeholder='Search By Gender Eg:women/men'></input> 
   
  </div>
  <div className='min-h-screen flex flex-wrap justify-center gap-5 bg-slate-300 p-10'>
     
     
     {
 
       axiosResponse.length>0? axiosResponse.map((product)=>(
         <Card key={product.id} product={product} display={true}/>
       )):<Card />
        

     }    
   
   
   
    </div>


   </div>

  
   
   
   
   </>
  )
}

export default Landing
