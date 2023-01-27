import React, { useEffect, useState } from 'react'
import axios from "axios"
// import Link from 'antd/es/typography/Link'
import { Link } from 'react-router-dom'
import Spinner from '../../companents'
const DataSection = () => {
  const [isloadung, setIsLoadung] = useState(true)
    const [data, setData] = useState([])
    const [toogle, setToogle] = useState(true)
    const getData=async ()=>{
        const data= await axios.get("http://localhost:8080/floraRow")
    setData(await data.data)
    setIsLoadung(false)
    }
    useEffect(() => {
      getData()
    
    }, [])
    //delete
const handleDelete=async (_id)=>{
   await axios.delete(`http://localhost:8080/floraRow/${_id}`).then((data)=>axios.get("http://localhost:8080/floraRow").then((data)=> setData(data.data)))
}
//sort
const handleSort=(arr)=>{
  setToogle(!toogle)
  if(toogle){
    const sortedData=arr.sort((a,b)=>a.price-b.price)
    setData([...sortedData])
  }else{
    getData()
  }
}

//search name
const handleSearch= async(e)=>{
    const datas=await axios.get("http://localhost:8080/floraRow")
setData([...datas.data.filter((el)=>el.name.toLowerCase().includes(e.target.value.toLowerCase()))])
}



  return (
    <div className='container'>
<div className='datas'>
   <div className='dataheader'>
<p>Devoted to wonderful beauty</p>
<h2>Flowers Pricing</h2>
<button style={{color:"#25705C", backgroundColor:"#D8E3D5" ,padding:"15px 25px", border:"0"}} onClick={()=>{handleSort(data)}}>Sort</button><br></br>
<input type="text" style={{color:"#25705C", backgroundColor:"#D8E3D5" ,padding:"15px 25px", border:"0"}} placeholder='Search Name...' onChange={(e)=>{handleSearch(e)}}/>
  <br></br>
   </div>

<div className='containerDatas'>
{
  isloadung
  ?
  <Spinner/>
  :
  
    data?.map((el)=>{
        return(
<Link to={`/detail/${el._id}`}>
<div className='datass'>
<div><img src={el?.imgUrl} alt="" style={{width:"300px", height:"400px"}}/></div>
<div className='datass'>
    <h3>{el?.name}</h3>
    <p>{el?.price}$</p>
</div>
<Link to={'/'}> <button onClick={()=>{handleDelete(el._id)}} style={{color:"#25705C", backgroundColor:"#D8E3D5" ,padding:"15px 25px", border:"0"}}>Delete</button></Link>
<br></br><br></br>
</div>

</Link>
        )
    })
}

</div>

</div>
    </div>
  )
}

export default DataSection