import React,{useState,useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'
import {Row,Col,ListGroup,Image,Card} from 'react-bootstrap'
import Review from './Review'

function RestaurantsDetails() {
    const [data,setData] = useState([]) 
    const params = useParams()
 async function fetchData() {
    await fetch('/restaurants.json')
    .then((data) => data.json())
    .then((res) => setData(res.restaurants))   
 }
 useEffect(() =>{
    fetchData()
 },[])

// console.log("my id is",params.id);
const restaurantData =data.find((item) =>item.id == params.id)
// console.log("my details is",restaurantData);

  return (<>
  <Link className='btn btn-outline-dark my-2 mx-3 rounded btn-sm' to="/">Back</Link>
  {
   restaurantData ? (
      <Row className="my-3">
         <Col md={3}>
            <Image className ="img mx-2 rounded cards" src={restaurantData.photograph} alt ={restaurantData.name} fluid></Image>
         </Col>
         <Col md={4}>
            <ListGroup.Item>
               <h2>{restaurantData.name}</h2>
               <p>{restaurantData.neighborhood}</p>
            </ListGroup.Item>
            <ListGroup.Item>
               <p>Cusine Type:{restaurantData.cuisine_type}</p>
            </ListGroup.Item>
            <ListGroup.Item>
               <p>Address:{restaurantData.address}</p>
            </ListGroup.Item>
         </Col>
         <Col md={4}>
            <ListGroup.Item>
               <h4>Operationg Hours:</h4>
               <p>Monday :{restaurantData.operating_hours.Monday}</p>
               <p>Tuesday :{restaurantData.operating_hours.Tuesday}</p>
               <p>Wednesday :{restaurantData.operating_hours.Wednesday}</p>
               <p>Thursday :{restaurantData.operating_hours.Thursday}</p>
               <p>Friday :{restaurantData.operating_hours.Friday}</p>
               <p>Saturday :{restaurantData.operating_hours.Saturday}</p>
               <p>Sunday :{restaurantData.operating_hours.Sunday}</p>
               
            </ListGroup.Item>
         </Col>
         <Row>
            <Card className='my-3 mx-2 p-3 rounded card'>
             <Review data ={restaurantData.reviews}/>
            </Card>
         </Row>
      </Row>
    ):'null'
    }</>
   // <h1>restaurantData.name</h1>

    
      )
}

export default RestaurantsDetails