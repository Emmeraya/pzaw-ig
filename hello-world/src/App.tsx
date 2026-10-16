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

function Movies({title, year, img}:props){
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
function Books({title, autor, year, img}:props){
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
  return(
    <div>
      <h1>MOVIES AND SERIALS</h1><br />
      <div className='put_correct'>
        <Movies title="Andor" year={2022} img="./Andor.jpg"/>
        <Movies title="Frieren" year={2020} img="./frieren.jpg"/>
        <Movies title="Project Hail Mary" year={2026} img="./phm.jpg"/>
      </div>

      <div>
      <h1>Books</h1><br />
      <div className='put_correct'>
        <Books title="Thrawn" year={2016} img="./thrawn.jpg" autor="Timothy Zahn"/>
        <Books title="Zbrodnia i kara" year={1867} img="./zbrod_i_kar.jpg" autor="Fiodor Dostojewski"/>
        <Books title="Koniec I Początek" year={2016} img="./kon_i_pocz.jpg" autor="Chuck Wendig"/>
      </div>
      </div>
    <div>
      <h1>Music/Albums</h1><br />
      <div className='put_correct'>
        <Music title="Zoltraak" year={2023} img="./frieren.jpg" m_link="https://www.youtube.com/watch?v=M7gm_r8hXoU"/>
        <Music title="An Dro From Other Mother " year={2026} img="./an_dro.jpg" m_link="https://www.youtube.com/watch?v=Aaj0LMGF5uw"/>
        <Music title="Here I Come (There You Go)" year={2016} img="./here_I_come_RR.jpg" m_link="https://www.youtube.com/watch?v=W5L2QGgmz_k"/>
        <Music title="The Jester and The Queen" year={2026} img="./jester_and_queen.jpg" m_link="https://www.youtube.com/watch?v=kUWTWWY-sXE"/>
      </div>
     
    </div>
    </div>
    
  );
}


export default App
