import './App.css'
import {useState} from "React"
interface CharacterProps{
  Name:string;
  Race:string;
  Class:string;
  Level:number;
  Description:string;
  Public:boolean;
}
function CharacterForm(CharacterData:CharacterProps){
  const [character, setCharacter] = useState({
    Name:"",
    Race:"",
    Class:"",
    Level:1,
    Desc:"",
    Public:true

});

  function handleChange(event) {
    const {id,value} = event.target;
    setCharacter(prev =>({
      ...prev,
      [id]:value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(character.Name+ " "+ character.Class);
  }
  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor='Name'>Nazwa:</label><input type="text" id="Name" value={character.Name} onChange={(event) => handleChange(event)} /><br/>
      <label htmlFor='Race'>Rasa</label>
        <select id="Race" value={character.Race} onChange={(event) => handleChange(event)}>
          <option value="">Wybierz</option>
          <option value="Dwarf">Dwarf</option>
          <option value="Elf">Elf</option>
          <option value="Orc">Ork</option>
          <option value="Human">Człowiek</option>
        </select><br/>
        <label htmlFor='Class'>Klasa</label>
        <select id="Class" value={character.Class} onChange={(event) => handleChange(event)}>
          <option value="">Wybierz</option>
          <option value="warrior">Wojownik</option>
          <option value="archer">Łucznik</option>
          <option value="Mage">Mag</option>
        </select><br/>
      <label htmlFor='Level'>Poziom:</label><input type="number" id="Level" value={character.Level} onChange={(event) => handleChange(event)}/><br/>
      <label htmlFor='Desc'>Opis:</label><textarea id="Desc" maxLength={200} value={character.Desc}onChange={(event) => handleChange(event)} style={{ width:"100px", height:"50px"}} /><br/>
      <label htmlFor='Public'>Publiczna postać:</label><input type="checkbox" id="Public" checked={character.Public} onChange={(event) => handleChange(event)}/><br/>
      <button type="submit">Wyślij</button>
    </form>
  )
}
function App() {
  return(
    <CharacterForm name={''} race={''} class={''} level={1} description={''} public={false}></CharacterForm>
  )
}

export default App
