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
  )
}
// function Music({title, year, img, m_link}:props){
//   return(
//     <div>
//       <img src={img} className='img'></img>
//       <br />
//       <a href={m_link}>{title}</a>
//       <p>{year}</p> 
//     </div>
//   )
// }

interface TrackProps {
  index: number;
  title: string;
  length: string;
}

function Track(props: TrackProps) {
  return (
    <tr>
      <td>{props.index}</td>
      <td>{props.title}</td>
      <td>{props.length}</td>
    </tr>
  );
}

interface AlbumProps {
  coverUrl: string;
  title: string;
  band: string;
  genre: string;
  releaseYear: number;
  children: React.ReactNode;
}

function Album(props: AlbumProps) {
  return (
    <div>
      <img style={{ height: 375 }} src={props.coverUrl} />
      <h2>{props.title}</h2>
      <span>{props.band} </span> &bull;
      <span>{props.releaseYear} </span> &bull;
      <span>{props.genre}</span>

      <table style={{ width: "100%" }}>
        <thead>
          <th>L.p.</th>
          <th>Tytuł</th>
          <th>Czas trwania</th>
        </thead>
        <tbody>{props.children}</tbody>
      </table>
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
  )
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
        {/* {Musike.map(mm=> <Music title={mm.title} year={mm.year} img={mm.img} m_link={mm.m_link} />)} */}
        <h1>Albumy</h1>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px", justifyContent: "center" }}>
          <Album
            releaseYear={2026}
            band="Evan Call"
            title="Frieren: Beyond Journey's End - Season 2 (Original Soundtrack)"
            genre="anime soundtrack"
            coverUrl="https://soundcloud.com/evancall-music/sets/frieren-beyond-journeys-end-7"
          >
            <Track index={1} title="The Journey Continues" length="3:09" />
            <Track index={2} title="Ripples in a River of Time" length="2:32" />
            <Track index={3} title="The Winding Road" length="2:48" />
            <Track index={4} title="Villages and Vagabonds" length="2:06" />
            <Track index={5} title="Walk the Good Path" length="2:19" />
            <Track index={6} title="Reflections" length="2:48" />
            <Track index={7} title="Memories - Wayfarers of Time" length="2:52" />
            <Track index={8} title="Ready Your Weapon" length="2:21" />
            <Track index={9} title="Castles and Cobblestone" length="2:04" />
            <Track index={10} title="Tune for a Traveller" length="2:18" />
            <Track index={11} title="Happiness for Fern" length="2:00" />
            <Track index={12} title="Spells and Spoils" length="2:26" />
            <Track index={13} title="An Afternoon Date" length="2:12" />
            <Track index={14} title="Kind-Hearted Warrior" length="2:18" />
            <Track index={15} title="Heart of a Hero" length="2:48" />
            <Track index={16} title="Hero of the South" length="3:22" />
            <Track index={17} title="From One Hero to Another" length="2:43" />
            <Track index={18} title="Under Heavy Wings" length="2:56" />
            <Track index={19} title="Four Swords of Despair" length="2:39" />
            <Track index={20} title="Divine Revolte" length="2:44" />
            <Track index={21} title="First-Class Mage (feat. Alina Lesnik)" length="2:34" />
            <Track index={22} title="The Golden Land" length="2:59" />
          </Album>
          <Album
            releaseYear={2021}
            band="MARINA"
            title="Ancient Dreams in a Modern Land"
            genre="electropop"
            coverUrl="https://tracksrio.com.br/web/image/product.template/1528/image_1920?unique=f686367"
          >
            <Track index={1} title="Ancient Dreams in a Modern Land" length="3:26" />
            <Track index={2} title="Venus Fly Trap" length="2:38" />
            <Track index={3} title="Man's World" length="3:28" />
            <Track index={4} title="Purge the Poison" length="3:16" />
            <Track index={5} title="Highly Emotional People" length="3:34" />
            <Track index={6} title="New America" length="3:52" />
            <Track index={7} title="Pandora's Box" length="3:32" />
            <Track index={8} title="I Love You but I Love Me More" length="3:43" />
            <Track index={9} title="Flowers" length="3:54" />
            <Track index={10} title="Goodbye" length="4:42" />
          </Album>
          <Album
            releaseYear={2025}
            band="Lilith Max"
            title="Call Down the Dragon"
            genre="fantasy folk"
            coverUrl="https://f4.bcbits.com/img/a2268608534_10.jpg"
          >
            <Track index={1} title="Seraph" length="3:11" />
            <Track index={2} title="Maiden's Night" length="3:22" />
            <Track index={3} title="Call Down the Dragon" length="2:58" />
            <Track index={4} title="Dark Erl King" length="3:10" />
            <Track index={5} title="Set in Stone" length="3:03" />
          </Album>
        </div>
      </div>
     
    </div>
    </div>
    
  );
}


export default App
