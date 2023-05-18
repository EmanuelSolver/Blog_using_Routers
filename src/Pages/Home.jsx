import Highlights from "./Highlights"

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

const Home = ()=>{
    return(
        <>
        <div style={{display:"block", width:"70%", backgroundColor:"#ebf5f2", boxShadow:"5px 5px 5px #44635b", zIndex:"1"}}>
        {
        list.map((item, index)=>{
            return (
              <>
                  <h4 style={{color:"purple"}} key={index}>{item.title}</h4>
                  <p key={index}>{item.content}</p>
              </>
            )
               
        })
      }           
      </div>


    < Highlights/>

        </>
        
    )
}


export default Home