import React from "react";
import {Link} from "react-router-dom"

export const Item = ({id, img, modelo, precio}) => {
    return(
        <div className="card">
            <div className="cardFoto">
                <img src={require(`../../img/productos/${img}`)} alt={modelo} />
            </div>
            <p>{modelo}</p>
            <p>{precio}</p>
            <Link className="detalles" to={`/producto/${id}`}>Ver detalles</Link>
        </div>
    )
}