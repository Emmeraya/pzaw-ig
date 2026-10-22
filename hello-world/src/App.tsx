import './App.css'
interface Book_props{
  title:string;
  year:number;
  autor:string;
  img:string;
}
interface Movie_props{
  title:string;
  year:number;
  img:string;
  rating: number;
}
function Movie({title, year, img, rating}: Movie_props){
  return(
    <div>
      <img src={img} className='img'></img>
      <p>{title}</p>
      <p>{year}</p>
      {rating >= 8 && <span>Polecany</span>}
      <p>{rating}/10</p>
    </div>
  )
}
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
  tracks: TrackProps[];
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
         <tbody>
          {props.tracks.length > 0 ? (props.tracks.map(track => (
              <Track key={track.index} index={track.index} title={track.title} length={track.length} />
          ))) : (
            <tr>
              <td colSpan={3}>Brak utworów</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function Bookss({title, autor, year, img}:Book_props){
  return(
    <div>
      <img src={img} className='img'></img>
      <p>{title}</p>
      <p>{autor}</p>
      <p>{year}</p>
      {year < 2000 && <span>Klasyka</span>}
    </div>
  )
}
function App(){
  const Movies=[
    {
      title: "Andor", 
      year: 2022,
      img: "./Andor.jpg",
      rating: 10
    },
    {
      title: "Frieren",
      year: 2020,
      img: "./frieren.jpg",
      rating: 7
    },
    {
      title:"Project Hail Mary",
      year:2026,
      img:"./phm.jpg",
      rating: 9
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
  const Albums = [
  {
    band: "Evan Call",
    title: "Frieren: Beyond Journey's End - Season 2 (Original Soundtrack)",
    releaseYear: 2026,
    genre: "anime soundtrack",
    coverUrl: "https://cdn.albumoftheyear.org/album/1765747-frieren-beyond-journeys-end-season-2-original-soundtrack_040943.jpg",
    tracks: [
      { index: 1, title: "The Journey Continues", length: "3:09" },
      { index: 2, title: "Ripples in a River of Time", length: "2:32" },
      { index: 3, title: "The Winding Road", length: "2:48" },
      { index: 4, title: "Villages and Vagabonds", length: "2:06" },
      { index: 5, title: "Walk the Good Path", length: "2:19" },
      { index: 6, title: "Reflections", length: "2:48" },
      { index: 7, title: "Memories - Wayfarers of Time", length: "2:52" },
      { index: 8, title: "Ready Your Weapon", length: "2:21" },
      { index: 9, title: "Castles and Cobblestone", length: "2:04" },
      { index: 10, title: "Tune for a Traveller", length: "2:18" },
      { index: 11, title: "Happiness for Fern", length: "2:00" },
      { index: 12, title: "Spells and Spoils", length: "2:26" },
      { index: 13, title: "An Afternoon Date", length: "2:12" },
      { index: 14, title: "Kind-Hearted Warrior", length: "2:18" },
      { index: 15, title: "Heart of a Hero", length: "2:48" },
      { index: 16, title: "Hero of the South", length: "3:22" },
      { index: 17, title: "From One Hero to Another", length: "2:43" },
      { index: 18, title: "Under Heavy Wings", length: "2:56" },
      { index: 19, title: "Four Swords of Despair", length: "2:39" },
      { index: 20, title: "Divine Revolte", length: "2:44" },
      { index: 21, title: "First-Class Mage (feat. Alina Lesnik)", length: "2:34" },
      { index: 22, title: "The Golden Land", length: "2:59" }
    ]
  },
  {
    band: "MARINA",
    title: "Ancient Dreams in a Modern Land",
    releaseYear: 2021,
    genre: "electropop",
    coverUrl: "https://tracksrio.com.br/web/image/product.template/1528/image_1920?unique=f686367",
    tracks: [
      { index: 1, title: "Ancient Dreams in a Modern Land", length: "3:26" },
      { index: 2, title: "Venus Fly Trap", length: "2:38" },
      { index: 3, title: "Man's World", length: "3:28" },
      { index: 4, title: "Purge the Poison", length: "3:16" },
      { index: 5, title: "Highly Emotional People", length: "3:34" },
      { index: 6, title: "New America", length: "3:52" },
      { index: 7, title: "Pandora's Box", length: "3:32" },
      { index: 8, title: "I Love You but I Love Me More", length: "3:43" },
      { index: 9, title: "Flowers", length: "3:54" },
      { index: 10, title: "Goodbye", length: "4:42" }
    ]
  },
  {
    band: "Lilith Max",
    title: "Call Down the Dragon",
    releaseYear: 2025,
    genre: "fantasy folk",
    coverUrl: "https://f4.bcbits.com/img/a2268608534_10.jpg",
    tracks: [
      { index: 1, title: "Seraph", length: "3:11" },
      { index: 2, title: "Maiden's Night", length: "3:22" },
      { index: 3, title: "Call Down the Dragon", length: "2:58" },
      { index: 4, title: "Dark Erl King", length: "3:10" },
      { index: 5, title: "Set in Stone", length: "3:03" }
    ]
  }
];
const Movies_s = [...Movies].sort((a, b) =>
  a.title.localeCompare(b.title)
);

const Books_s = [...Books].sort((a, b) =>
  a.title.localeCompare(b.title)
);

const Albums_s = [...Albums].sort((a, b) =>
  a.title.localeCompare(b.title)
);
const longestAlbum = Albums.reduce((a, b) =>
  a.tracks.length > b.tracks.length ? a : b
);
const newMovies = Movies.filter(movie => movie.year > 2010);
const newestBooks = [...Books].sort((a, b) => b.year - a.year);
  return(
    <div>
      <h1>MOVIES AND SERIALS</h1><br />
      <div className='put_correct'>
         {Movies_s.map(m=> <Movie title={m.title} year={m.year} img={m.img} rating={m.rating} />)}
      </div>

      <div>
      <h1>Books</h1><br />
      <div className='put_correct'>
        {Books_s.map(b=> <Bookss title={b.title} year={b.year} img={b.img} autor={b.autor} />)}
      </div>
      </div>
    <div>
      <h1>Music/Albums</h1><br />
      <div className='put_correct'>
        <h1>Albumy</h1>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px", justifyContent: "center" }}>
          {Albums_s.map((album) => <Album key={album.title} band={album.band} title={album.title} releaseYear={album.releaseYear} genre={album.genre} coverUrl={album.coverUrl} tracks={album.tracks}/>)}
        </div>
      </div>
      </div>
      <br />

      <h2>Filmy wydane po 2010 roku</h2>
      <div className='put_correct'>
      {newMovies.map(movie => <Movie key={movie.title} title={movie.title} year={movie.year} img={movie.img} rating={movie.rating} /> )}
      </div>

      <h2>Książki od najnowszej</h2>
      <div className='put_correct'>
      {newestBooks.map(book => <Bookss key={book.title} {...book} /> )}
      </div>
      
      <h2>Album z największą liczbą utworów</h2>
      <div className='put_correct'>
        <Album band={longestAlbum.band} title={longestAlbum.title} releaseYear={longestAlbum.releaseYear} genre={longestAlbum.genre} coverUrl={longestAlbum.coverUrl} tracks={longestAlbum.tracks} />
         
      </div>


    
    </div>
    
  );
}


export default App
