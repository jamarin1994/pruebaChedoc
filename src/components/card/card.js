import React, { useEffect , useState } from "react";
import { Link } from "react-router-dom";
// import datosJson from '../../data/sample.json'
import logoloading from '../../assets/loading.jpg';
import "./card.css"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

const Cards = (datosJson) => {
  let dataMostrar = datosJson.details.entries;
  let cambiarFiltroPelicula = (datosJson.programType === "peliculas") ? "movie" : datosJson.programType

  const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 


    return (
    <>
      {
        isLoading
        ?
        <div className="cards">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />
                <img className="cards__img" src={`${logoloading}`} />
            </SkeletonTheme>
        </div>
        :

      dataMostrar.map((value, index) => (
      <Link style={{textDecoration:"red", color:"white"}} key={index}>
      {(value.programType === cambiarFiltroPelicula && value.releaseYear >=2010) ?

        <div className="cards">
          <img className="cards__img" src={`${value?value.images["Poster Art"].url:""}`} />
          {/* <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} /> */}
          <div className="cards__overlay">
            <div className="card__title">{value.title}</div>
            <div className="card__runtime">
                {value?value.releaseYear:""}
            </div>
            <div className="card__description">{value ? value.description.slice(0,70)+"..." : ""}</div>
          </div>
        </div>
        : null}
    </Link>
      ))
      };
    </>
    ) 
}
export default Cards