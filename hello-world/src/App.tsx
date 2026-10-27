import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


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
interface AlbumProps {
  coverUrl: string;
  title: string;
  band: string;
  genre: string;
  releaseYear: number;
  tracks: TrackProps[];
}
interface TrackProps {
  index: number;
  title: string;
  length: string;
  onSongClick?: (songTitle: string) => void;
}

function Movie({title, year, img, rating}: Movie_props){
  return(
    <div className="card h-100" onClick={() => console.log(`Wybrano film: ${title}`)}>
      <img src={img} className="card-img-top" alt={title} />

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{year}</p>

        <button className="btn btn-primary" onClick={(e) => {
          e.stopPropagation();
          console.log(`Pokaż szczegóły dla ${title}`);
        }}>
          Pokaż szczegóły
        </button>

        <p className="card-text">{rating}/10</p>
        {rating >= 8 && <span className="badge bg-success">Polecany</span>}
      </div>
    </div>
  )
}
function Bookss({title, autor, year, img}: Book_props){
  return(
    <div className="card h-100">
      <img src={img} className="card-img-top" alt={title} />

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{autor}</p>
        <p className="card-text">{year}</p>

        {year < 2000 && <span className="badge bg-primary">Klasyka</span>}
      </div>
    </div>
  )
}
function Album(props: AlbumProps) {

   function handleSongClick(songTitle: string) {
    console.log(`Wybrano utwór: ${songTitle} z ${props.title}`);
  }

  return (
    <div className="card h-100">
      <img src={props.coverUrl} className="card-img-top" alt={props.title} /> 
       <div className="card-body">
        <h5 className="card-title">{props.title}</h5> 
        <p className="card-text"> {props.band} &bull; {props.releaseYear} &bull; {props.genre} </p>

        {props.tracks.length > 0 ? (
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>L.p.</th>
                  <th>Tytuł</th>
                  <th className="text-end">Czas trwania</th>
                </tr>
              </thead>
              <tbody>
                {props.tracks.map(track => ( <Track key={track.index} index={track.index} title={track.title} length={track.length} onSongClick={handleSongClick} /> ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="alert alert-warning">
            Brak utworów
          </div>
        )}
      </div>
    </div>
  );
}
function Track(props: TrackProps) {
  return (
    <tr onClick={() => props.onSongClick?.(props.title)} style={{cursor: "pointer"}}>
      <td>{props.index}</td>
      <td>{props.title}</td>
      <td className="text-end">{props.length}</td>
    </tr>
  );
}

//listy zwijane
interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
}

function CollapsibleSection(props: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section>
      <h1 onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: "pointer" }}>
        {isOpen ? "v" : ">"} {props.title}
      </h1>

      {isOpen && props.children}
    </section>
  );
}


function App(){
  const [movieSearch, setMovieSearch] = useState("");
  const [bookSearch, setBookSearch] = useState("");
  const [albumSearch, setAlbumSearch] = useState("");
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
    coverUrl: "./frieren.jpg",
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
const filteredMovies = Movies_s.filter(m =>
  m.title.toLowerCase().includes(movieSearch.toLowerCase())
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
    <div className="container">
      
    <CollapsibleSection title="Movies/Serials">
      <input type="text" id="movie-search" className="form-control" placeholder="Wpisz tytuł" value={movieSearch} onChange={(e) => { setMovieSearch(e.target.value); console.log(e.target.value); }} />
      <p>Wpisano: {movieSearch}</p>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {filteredMovies.length > 0 ? (
          filteredMovies.map(m =>
            <div className="col" key={m.title}>
              <Movie title={m.title} year={m.year} img={m.img} rating={m.rating} />
            </div>
          )
          ) : (
            <p>Nie znaleziono filmów</p>
          )}
          </div>
      </CollapsibleSection>

    <CollapsibleSection title="Books">
      <input type="text" id="book-search" className="form-control" placeholder="Wpisz tytuł" value={bookSearch} onChange={(e) => { setBookSearch(e.target.value); console.log(e.target.value); }} />
      <p>Wpisano: {bookSearch}</p>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {Books_s.map(b =>
          <div className="col" key={b.title}>
            <Bookss title={b.title} year={b.year} img={b.img} autor={b.autor} />
          </div>
        )}
      </div>
    </CollapsibleSection>

    <CollapsibleSection title="Albums">
      <input type="text" id="album-search" className="form-control" placeholder="Wpisz tytuł" value={albumSearch} onChange={(e) => { setAlbumSearch(e.target.value); console.log(e.target.value); }} />
      <p>Wpisano: {albumSearch}</p>

      <div className="row row-cols-1 row-cols-lg-2 g-3">
        {Albums_s.map(album =>
          <div className="col" key={album.title}>
            <Album {...album} />
          </div>
        )}
      </div>
    </CollapsibleSection>

    <CollapsibleSection title="Movies po 2010">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {newMovies.map(movie =>
          <div className="col" key={movie.title}>
            <Movie title={movie.title} year={movie.year} img={movie.img} rating={movie.rating} />
          </div>
        )}
      </div>
    </CollapsibleSection>

    <CollapsibleSection title="books od najnowszej">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {newestBooks.map(book =>
          <div className="col" key={book.title}>
            <Bookss {...book} />
          </div>
        )}
      </div>
    </CollapsibleSection>

    <CollapsibleSection title="najwięcej utworów">
      <div className="row row-cols-1 row-cols-lg-2 g-3">
        <div className="col">
          <Album {...longestAlbum} />
        </div>
      </div>
    </CollapsibleSection>

    </div>
    
  );
}


export default App
