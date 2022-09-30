import './App.css';
import React, { useState, useEffect } from "react"
import HttpClient from "./HttpClient";

const App = () => {
  const [apod, setApod] = useState({})

  useEffect(() => {
    HttpClient.getApod().then(apodData => {
      setApod(apodData.data)
    })
  }, [])
  return (
    <div style={{ maxWidth: 900, padding: 30 }}>
      <h1>CONSUMIENDO API DE LA NASA DESDE EL FRONT</h1>
      <h2>Imagen Astronómica del Día </h2>
      {apod && (
        <article>
          <header>
            {apod.title}-<i>{apod.date}</i>
          </header>
          <img src={apod.url} alt="APOD" width="800" height="auto" />
          <p>{apod.explanation}</p>
          <pre
            style={{
              overflowX: "auto",
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
            }}
          ></pre>
        </article>
      )}
    </div>
  )
}

export default App