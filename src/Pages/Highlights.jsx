
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
   
    return(
        <div >
            <h3 style={{textAlign:"center"}}>Highlights</h3>
         {
          list.map((item, index)=>{
              return <h4 key={index}>{item.title}</h4>
                 
          })
        }
        </div>
    )
}

export default Highlights
