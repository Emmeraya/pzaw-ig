// interface Props{
//   /** comment looklike  */
//   name:string;
//   /** ? means optional */
//   age?: string;
// }
import './App.css'
interface props{
  title?:string;
  year?:number;
  autor?:string;
  img?:string;
  m_link?:string;
}

function Movie({title, year, img}:props){
    return(
    <div>
        <img src={img} className='img'></img>
        <p>{title}</p>
        <p>{year}</p>
      </div>
    );
}
function Music({title, year, img, m_link}:props){
    return(
      <div>
        <img src={img} className='img'></img>
        <br />
        <a href={m_link}>{title}</a>
        <p>{year}</p>
        
      </div>
    );
}
function Bookss({title, autor, year, img}:props){
    return(
      <div>
        <img src={img} className='img'></img>
        <p>{title}</p>
        <p>{autor}</p>
        <p>{year}</p>
      </div>
    );
}
function App(){
  const Movies=[
    {
      title: "Andor", 
      year: 2022,
      img: "./Andor.jpg"
    },
    {
      title: "Frieren",
      year: 2020,
      img: "./frieren.jpg"
    },
    {
      title:"Project Hail Mary",
      year:2026,
      img:"./phm.jpg"
    }
  ]
  const Musike=[
    {
      title:"Zoltraak",
      year:2023,
      img:"./frieren.jpg",
      m_link:"https://www.youtube.com/watch?v=M7gm_r8hXoU"
    },
    {
      title:"An Dro From Other Mother",
      year:2026,
      img:"./an_dro.jpg",
      m_link:"https://www.youtube.com/watch?v=Aaj0LMGF5uw"
    },
    {
      title:"Here I Come (There You Go)",
      year:2016,
      img:"./here_I_come_RR.jpg",
      m_link:"https://www.youtube.com/watch?v=W5L2QGgmz_k"
    },
    {
      title:"The Jester and The Queen",
      year:2026,
      img:"./jester_and_queen.jpg",
      m_link:"https://www.youtube.com/watch?v=kUWTWWY-sXE"
    }
  ]
  const Books=[
    {
      title:"Thrawn",
      year:2016,
      img:"./thrawn.jpg",
      autor:"Timothy Zahn"
    },
    {
      title:"Zbrodnia i kara",
      year:1867,
      img:"./zbrod_i_kar.jpg",
      autor:"Fiodor Dostojewski"
    },
    {
      title:"Koniec I Początek",
      year:2016,
      img:"./kon_i_pocz.jpg",
      autor:"Chuck Wendig"
    }
  ]
  return(
    <div>
      <h1>MOVIES AND SERIALS</h1><br />
      <div className='put_correct'>
         {Movies.map(m=> <Movie title={m.title} year={m.year} img={m.img} />)}
      </div>

      <div>
      <h1>Books</h1><br />
      <div className='put_correct'>
        {Books.map(b=> <Bookss title={b.title} year={b.year} img={b.img} autor={b.autor} />)}
      </div>
      </div>
    <div>
      <h1>Music/Albums</h1><br />
      <div className='put_correct'>
        {Musike.map(mm=> <Music title={mm.title} year={mm.year} img={mm.img} m_link={mm.m_link} />)}
      </div>
     
    </div>
    </div>
    
  );
}


export default App
