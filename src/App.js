import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Frase({ frase }) {
  return (
    <div className="frase">
      <h1>{frase.quote}</h1>
      <p>-{frase.author}</p>
    </div>
  )
}

function App() {

  const [frase, setFrase] = useState({});

  const consultarAPI = async () => {
    const res = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    setFrase(res.data[0]);
  }

  useEffect(() => {
    consultarAPI();
  }, []);

  console.log(frase);

  return (
    <div className="contenedor">
      <Frase frase={frase} />
      <button onClick={consultarAPI}>Generar Nueva Frase</button>
    </div>
  );
}

export default App;
