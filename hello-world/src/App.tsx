// interface Props{
//   /** comment looklike  */
//   name:string;
//   /** ? means optional */
//   age?: string;
// }
// function Greeter({name="anom", age="0"}: Props){
//   let tmp_age= Number(age);
//   if(tmp_age<30){
//     return(
//       <p>Witaj {name}</p>
//     );
//   }
//   else{
//     return (
//       <p>AAAAAAAAAAAAAA {name}</p>
//     );
//   }
// }
interface Props{
  title:string;
  year?:number;
  img?:string;
}
function Movies ({title, year, img}: Props)
{
  return(
    <div>
      <img src={img}></img>
      <p>{title}</p>
      <p>{year}</p>
    </div>
  );
}
function App(){
  return(
    <div>
      <Movies title="mewaa" year={123456} img="https://www.tapeciarnia.pl/248337_mewa_ocean_murek"/>
    </div>
  )
}
export default App
