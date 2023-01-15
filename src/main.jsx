import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Main = () => {
const [data , setData] = useState([]);
const [num,setNum] = useState(Math.floor(Math.random() * data.length));



useEffect(() => {

  (async() => 
  {
   await  axios.get("https://type.fit/api/quotes")
   .then(res => setData(res.data)).catch(error => console.log(error))
  })();
},[])

  return (
    <div className='flex flex-col justify-center items-center ' >
        <span className=' border-black border-t border-b pt-4 pb-4 text-3xl w-72 md:w-96 flex justify-center font-bold' >Random Quote Generator</span>
        <div  className='
        w-80 md:w-[44rem] flex flex-col  justify-center items-center border border-black mt-12 shad bg-[#BA274A] rounded-3xl h-[18.75rem]  gap-10 px-5
       
        '>
                <span className='text-2xl md:text-3xl font-pacifico text-center  ' >{data[num]?.text}</span>
                <span className=' text-xl md:text-2xl font-bebas font-bold  ' >{`-${data[num]?.author}-`}</span>
        </div>
        <button onClick={()=>{
            setNum(Math.floor(Math.random() * data.length))
            }} className=' btn ' >Click for a new quote</button>

        <div className='flex flex-col justify-center items-center mt-5 '>
        <span>{`Quote Number: ${num}`}</span>
          <a className='font-bebas underline ' href="https://type.fit/api/quotes" target="_blank" >Used Api</a>
        </div>
        
    </div>
  )
}

export default Main;