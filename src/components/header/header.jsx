import React from "react"
import "./header.css"
import { Link } from "react-router-dom"
import logoEmpresa from '../../assets/logo-gray.png';

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img src={logoEmpresa} /></Link>
                <Link to="/peliculas" style={{textDecoration: "none"}}><span>Peliculas</span></Link>
                <Link to="/series" style={{textDecoration: "none"}}><span>Series</span></Link>
            </div>
        </div>
    )
}

export default Header