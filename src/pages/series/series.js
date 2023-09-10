import React, { useEffect , useState } from "react";
import datosJson from '../../data/sample.json'
import Card from '../../components/card/card'
import { useParams } from "react-router-dom"
import "./series.css"

const Series = () => {
  let datosJsonMostrar=datosJson;

  let rutaActual= window.location.href.split("/");
  let page = rutaActual[rutaActual.length -1];


  const [movieList, setMovieList] = useState([])
   const {type} = useParams()

   useEffect(() => {
    let url = datosJson;
    fetch(url)
        .then(res => res.json())
        .then(movieList => setMovieList(movieList))
    }, []);

return (
  <>
  {/* <div className='cards'>
  <Card details={datosJson} programType={page}/>
  </div> */}

<div className="movie__list">
  <h2 className="list__title">{(type ? type : "Series").toUpperCase()}</h2>
  <div className="list__cards">
  
   <Card details={datosJson} programType={page}/>

  </div>
</div>

  </>
  
  );
}
export default Series