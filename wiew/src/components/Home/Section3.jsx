import React, { useEffect, useState } from 'react'
import './Section3.css'
import { RiDeleteBin5Line } from "react-icons/ri";


const Section3 = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("http://localhost:3000/")
      .then(data => data.json())
      .then(articles => setData(articles))
      console.log("ddfdfd");
  }

  useEffect(() => {
    getData()
     

  }, []) 


  const deleteArticle = (id) => {
    fetch(`http://localhost:3000/${id}`, {
      method: 'DELETE',
    } );
    getData()

  }
console.log(data);
return (
  <div style={{ display: "flex", justifyContent: 'center', alignItems: "center", flexDirection: "column" }}> <div id='section3'>
    {
      data.map(item => {
        return <div className='card1'>
          <img src={item.img} alt="" />
          <span>{item.date}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p> ♡15 Likes
          </p>
          <button style={{ border: "none" }} onClick={() => deleteArticle(item._id)}><RiDeleteBin5Line /></button>
        </div>
      })
    }

  </div>
    <button style={{ backgroundColor: "#8490ff ", border: "none", borderRadius: 15, padding: "10px 15px", color: "white" }} >Load More</button>
  </div>
)
}

export default Section3