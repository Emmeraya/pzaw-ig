import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';


interface HeaderProps{
  AmountOfItemsInCart : Number;
}

interface BodyProps{
  Books : any[];
}

interface BookProps{
  id: String;
  title: String;
  coverImg: string;
  discountedPrice: Number;
  originalPrice: Number;
  authors: String[];
  category: String;
  carrier: String;
  availableCopies: Number;
}

function Header( { AmountOfItemsInCart } : HeaderProps){
  return (<header className='head'>e-Księgarnia  <input type='button' value={"Koszyk"}/> : <div> { AmountOfItemsInCart.toString() } </div> </header>);

}

function Book( {id, title, coverImg, discountedPrice, originalPrice, authors, category, carrier, availableCopies} : BookProps ){
  return(<div className='card h-100'>
    <img className='card-img-top fixedImgSize' src={coverImg}/>
    <div className='card-body'>
    <p>{category}</p>
    <h5>{title}</h5>
    <p> {authors.map(author => <>{author} </>)} </p>
    <p> { (discountedPrice != null) ? <> <div className='Discount'> {discountedPrice} </div> <div> {originalPrice}</div> </> : <div> {originalPrice} </div> } </p>
    <p> Dostępne {availableCopies.toString()} sztuk</p>
    <button>Dodaj do koszyka</button>
    </div>
  </div>);
}

function cart(){
  return(  <article className="d-flex gap-2 border-bottom py-2">
            <img src="covers/3afaf9d27dd541ee917b065bf5cae3bb.webp"
              className="rounded"
                        style="width: 55px; height: 65px; object-fit: scale-down;"
                        alt="tytuł_książki"
                      />

                      <div className="flex-grow-1">
                        <div className="small fw-bold">
                          tytuł_książki
                        </div>

                        <div className="small text-primary">
                          0.00 zł
                        </div>

                        <div className="d-flex align-items-center justify-content-between mt-1">
                          <div className="btn-group btn-group-sm">
                            <button className="btn btn-outline-secondary">
                              -
                            </button>

                            <button className="btn btn-light" disabled>
                              ilość_sztuk
                            </button>

                            <button className="btn btn-outline-secondary">
                              +
                            </button>
                          </div>

                          <button className="btn btn-link text-danger p-0">
                            <i className="bi bi-trash"></i>
                          </button>
                        </div>
                      </div>
                    </article>          
);
}

function Body( {Books} : BodyProps){

  const [Filter, SetFilter] = useState("");
  const [SearchText, SetSearchTest] = useState("");
 
  function filterResults(book : BookProps){
    if( book.title.includes(SearchText) ){
      return true;
    }
    else{
      book.authors.forEach(author => {
        if(author.includes(SearchText)){
          return true;
        }
      });
    }
  }

  return (
    <>
      <div> <input type='text' placeholder='Wyszukaj po tytule lub autorze' onChange={(e) => SetSearchTest(e.currentTarget.value)} />  </div>
      <div>
        <button onClick={() => SetFilter("")}>Wszystkie</button>
        <button onClick={() => SetFilter("rozwój osobisty")}>Rozwój osobisty</button>
        <button onClick={() => SetFilter("informatyka")}>Informatyka</button>
        <button onClick={() => SetFilter("komiksy")}>Komiksy</button>
        <button onClick={() => SetFilter("psychologia")}>Psychologia</button>
        <button onClick={() => SetFilter("finanse")}>Finanse</button>
        <button onClick={() => SetFilter("zarządzanie")}>Zarządzanie</button>
        <button onClick={() => SetFilter("biznes")}>Biznes</button>
        <button onClick={() => SetFilter("marketing")}>Marketing</button>
        <button onClick={() => SetFilter("ekonomia")}>Ekonomia</button>
      </div>

      <div className='col-6 col-md-4 col-xl-3'>
        {Books
        .filter(book => filterResults(book))
        .filter(book => { if(Filter == ""){return true;} else{ return book.category == Filter;}})
        .map(book => <Book id={book.id} title={book.title} coverImg={book.coverImg} discountedPrice={book.discountedPrice} originalPrice={book.discountedPrice} authors={book.authors} category={book.category} carrier={book.carrier} availableCopies={book.availableCopies} />)}
      </div>
    </>
  );
}


function App( {} : BodyProps ) {
  const Books = [
  {
    "id": "p1378404436",
    "title": "Everything is F*cked. Gdy pozostaje tylko nadzieja",
    "coverImg": "covers/650e710a890248da92fb5052f087c13d.webp",
    "discountedPrice": 27.99,
    "originalPrice": 49.9,
    "authors": [
      "Manson Mark"
    ],
    "category": "rozwój osobisty",
    "carrier": "okładka miękka, wyd. 06.2023",
    "availableCopies": 13
  },
  {
    "id": "p1178255137",
    "title": "Subtelnie mówię F*ck! Sprzeczna z logiką metoda na szczęśliwe życie",
    "coverImg": "covers/15115250426585609.webp",
    "discountedPrice": null,
    "originalPrice": 38.29,
    "authors": [
      "Manson Mark"
    ],
    "category": "rozwój osobisty",
    "carrier": "okładka miękka, wyd. 02.2018",
    "availableCopies": 14
  },
  {
    "id": "p1279981801",
    "title": "Will",
    "coverImg": "covers/16297973660743943.webp",
    "discountedPrice": null,
    "originalPrice": 23.16,
    "authors": [
      "Smith Will",
      "Manson Mark"
    ],
    "category": "rozwój osobisty",
    "carrier": "okładka miękka, wyd. 11.2021",
    "availableCopies": 14
  },
  {
    "id": "p1640506273",
    "title": "Inżynieria AI. Tworzenie aplikacji z wykorzystaniem modeli bazowych",
    "coverImg": "covers/4f9e3be340e847dda0b12c2c395b3a9e.webp",
    "discountedPrice": 70.99,
    "originalPrice": 129.0,
    "authors": [
      "Chip Huyen"
    ],
    "category": "informatyka",
    "carrier": "okładka miękka",
    "availableCopies": 11
  },
  {
    "id": "p1421268110",
    "title": "Python. Instrukcje dla programisty",
    "coverImg": "covers/2046ba3c827c4df191c548a319ce6632.webp",
    "discountedPrice": 69.99,
    "originalPrice": 119.0,
    "authors": [
      "Matthes Eric"
    ],
    "category": "informatyka",
    "carrier": "okładka miękka, wyd. 11.2023",
    "availableCopies": 9
  },
  {
    "id": "p1765117370",
    "title": "Przetwarzanie danych w dużej skali. Niezawodność, skalowalność i konserwacja systemów. Wydanie II",
    "coverImg": "covers/761fb90c20df4a649afc26f7b043881c.webp",
    "discountedPrice": 78.99,
    "originalPrice": 149.0,
    "authors": [
      "Kleppmann Martin",
      "Chris Riccomini"
    ],
    "category": "informatyka",
    "carrier": "okładka miękka",
    "availableCopies": 0
  },
  {
    "id": "p1503825990",
    "title": "Excel w tydzień. Uwolnij potęgę danych!",
    "coverImg": "covers/9ec3afcd5c35489d96780d72c4cdadea.webp",
    "discountedPrice": 25.99,
    "originalPrice": 39.9,
    "authors": [
      "Mateusz Boryga"
    ],
    "category": "informatyka",
    "carrier": "okładka miękka, wyd. 09.2024",
    "availableCopies": 0
  },
  {
    "id": "p1500521455",
    "title": "Sztuka podstępu. Łamałem ludzi, nie hasła",
    "coverImg": "covers/b72d01bc04d34818ac1bc12982008659.webp",
    "discountedPrice": 39.99,
    "originalPrice": 59.9,
    "authors": [
      "Mitnick Kevin D.",
      "Simon William L.",
      "Wozniak Steve"
    ],
    "category": "informatyka",
    "carrier": "okładka miękka, wyd. 03.2022",
    "availableCopies": 11
  },
  {
    "id": "p1785509719",
    "title": "Python. Nowoczesne programowanie w prostych krokach. Wydanie III",
    "coverImg": "covers/90f8c25d5e2c4e4fad31c78ab6a21b4d.webp",
    "discountedPrice": 93.99,
    "originalPrice": 139.0,
    "authors": [
      "Lubanovic Bill"
    ],
    "category": "informatyka",
    "carrier": "okładka miękka",
    "availableCopies": 10
  },
  {
    "id": "p1734303982",
    "title": "Myślenie systemowe. Wprowadzenie",
    "coverImg": "covers/cfe37e35d5314af79d95a9d3b0d7364c.webp",
    "discountedPrice": 42.99,
    "originalPrice": 59.9,
    "authors": [
      "Meadows Donella H."
    ],
    "category": "informatyka",
    "carrier": "okładka miękka",
    "availableCopies": 6
  }
];

  const [AmountOfItems, SetAmountOfItems] = useState(0);

  return (
    <main>
      <Header AmountOfItemsInCart={AmountOfItems} />

      <Body Books={Books} />

    </main>
    )

}


export default App