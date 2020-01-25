import React, {
  useState,
  useEffect
} from 'react';
import axios from 'axios'

function Frase({frase}){
  return(
    <div className="frase">
      <h1>{frase.quote}</h1>
      <p>- {frase.author}</p>
    </div>
  )
}

const App = () => {


  const [frase, obtenerFrase] = useState({});
  console.log(frase)

  const consultarAPI = async () => {

    const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');

    //agregar el resultado de la api al state; similar a this.setsTATE

      obtenerFrase(resultado.data[0])



  }

  //consttal rest

  useEffect(
    () => {
      consultarAPI()
    },[]
  )

  return (
    <div className="contenedor">
    <Frase
    frase={frase}
    />
    <button
    onClick={consultarAPI}
    >Generar Nueva</button>
    </div>
  );
}

export default App;