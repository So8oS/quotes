import React from 'react'
import { useEffect, useState } from 'react'
import './main.css'
import axios from 'axios'

const Main = () => {
const [data , setData] = useState([]);
const [num,setNum] = useState(Math.floor(Math.random() * 1643));



  useEffect(() => {
      (async() =>{
        await  axios.get("https://type.fit/api/quotes")
        .then(res => setData(res.data)).catch(error => console.log(error))
        })();
    },[])

    console.log(data)


  return (
    <div className='main-comp' >
        <h1 className='title' >Random Quote Generator</h1>
        <div  className='container'>
            <div className='inner' >
                <h1 className='text' >{data[num]?.text}</h1>
                <h3 className='author' >{`-${data[num]?.author}-`}</h3>
            </div>
        </div>
        <button onClick={()=>{
            setNum(Math.floor(Math.random() * data.length))
            }} className='btn' >Click for a new quote</button>
        <p>Quote Number: {num}</p>

        <div className='footer'>
          <a href="https://type.fit/api/quotes" target="_blank">Used Api</a>
        </div>
    </div>
  )
}

export default Main;