import { Link } from 'react-router-dom'
import { useState } from 'react'

const list = [
    {
        title: 'Weather',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quibusdam veritatis nobis praesentium molestiae debitis repudiandae dicta fuga facere dolores consectetur quisquam eaque, explicabo natus illum, necessitatibus aspernatur tenetur nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fugit quam magnam accusantium, veniam voluptas libero placeat voluptatibus necessitatibus veritatis perspiciatis incidunt enim tempora praesentium est porro ullam architecto dignissimos.'
    },
    {
        title: 'Environment',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quibusdam veritatis nobis praesentium molestiae debitis repudiandae dicta fuga facere dolores consectetur quisquam eaque, explicabo natus illum, necessitatibus aspernatur tenetur nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fugit quam magnam accusantium, veniam voluptas libero placeat voluptatibus necessitatibus veritatis perspiciatis incidunt enim tempora praesentium est porro ullam architecto dignissimos.'
    },
    {
        title: 'Technology',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quibusdam veritatis nobis praesentium molestiae debitis repudiandae dicta fuga facere dolores consectetur quisquam eaque, explicabo natus illum, necessitatibus aspernatur tenetur nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fugit quam magnam accusantium, veniam voluptas libero placeat voluptatibus necessitatibus veritatis perspiciatis incidunt enim tempora praesentium est porro ullam architecto dignissimos.'
    },
    {
        title: 'Health',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quibusdam veritatis nobis praesentium molestiae debitis repudiandae dicta fuga facere dolores consectetur quisquam eaque, explicabo natus illum, necessitatibus aspernatur tenetur nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fugit quam magnam accusantium, veniam voluptas libero placeat voluptatibus necessitatibus veritatis perspiciatis incidunt enim tempora praesentium est porro ullam architecto dignissimos.'
    }

]

const Highlights = ()=>{
   const [state, setState] = useState(false)

    const handleClick = ()=>{
        setState(!state)

    }

    return(
        <>
        <div style={{display:"block", position:"absolute", left:"70%", top:"15%", width:"30%", height:"100%", borderRight:"5px solid", borderBottom :"10px solid #95b4f8", textAlign:"center", boxShadow:"5px 3px 15px #2acfd1"}}>
            <h3 style={{textDecoration:"overline", paddingBottom:"20px"}} >Highlights</h3>
         {
          list.map((item, index)=>{
              return <Link style={{display: "block", color:"#3a0563", padding:"20px", textDecoration:"none", fontSize:"20px"}} onClick={handleClick} key={index}>{item.title} <br /> </Link> 
            
          })
        }
        {
            state && list.map((item, index)=>{
                return <p  key={index}>{item.content.slice(0, 50)}</p>
              
            })
        }
        </div>


        <div style={{position:"absolute", zIndex:"-1", left:"25%", top:"25%", width:"70%"}}>
            <img style={{width:"40%"}} src="./vite.svg" alt="" />

        </div>
        </>
        
    )
}

export default Highlights
