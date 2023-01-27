import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import React from 'react'
import { useParams } from 'react-router-dom'

const DetailPage = () => {
    const [data, setData] = useState([])
    const {_id}=useParams()
    const getData=async()=>{
        const data= await axios.get(`http://localhost:8080/floraRow/${_id}`)
        setData(await data.data)
    }
    useEffect(() => {
      getData()
    
    
    }, [])
    
  return (
  
<div className='datass' style={{padding:"40px"}}>
    <div><img src={data?.imgUrl} alt="" style={{width:"300px", height:"400px"}}/></div>
    <div className='datass'>
        <h3>{data?.name}</h3>
        <p>{data?.price}$</p>
    </div>
   
 
</div>
   
  )
}

export default DetailPage