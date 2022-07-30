import React,{useState,useEffect} from 'react'

function RestaurantsDetails() {
    const [data,setData] = useState([]) 
 async function fetchData() {
    await fetch('/restaurants.json')
    .then((data) => data.json())
    .then((res) => setData(res.restaurants))   
 }
 useEffect(() =>{
    fetchData()
 },[])


  return (
    <div>RestaurantsDetails</div>
  )
}

export default RestaurantsDetails