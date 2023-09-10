// import * as React from 'react';
import datosJson from '../../data/sample.json'
import Card from '../../components/card/card'
import React, { useEffect , useState } from "react";
import "./peliculas.css"
import { useParams } from "react-router-dom"


const Peliculas = () => {
  
  let datosJsonMostrar=datosJson;

  let rutaActual= window.location.href.split("/");
  let page = rutaActual[rutaActual.length -1];

   const [movieList, setMovieList] = useState(null)
   const {type} = useParams()

   useEffect(() => {
    getData()
}, [])

useEffect(() => {
    getData()
}, [])

const getData = () => {
  let url = datosJson;

  fetch(url)
  .then(res => res.json())
  .then(movieList => setMovieList(movieList));
}

return (
  
  <div className="movie__list">
  <h2 className="list__title">{(type ? type : "Peliculas").toUpperCase()}</h2>
  <div className="list__cards">
  
   <Card details={datosJson} programType={page}/>
   {/* <Card details={movieList} programType={page}/> */}

  </div>
</div>
  );
}
export default Peliculas
