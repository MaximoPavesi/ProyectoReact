import React, {useState, useEffect} from "react";
import {ItemCount} from "./ItemCount"
import data from "../data"
import {useParams} from "react-router-dom"

export const ItemDetail = () => {
    const {productoId} = useParams()
    const [producto, setProducto] = useState()

    useEffect(()=> {
        const getproducto = new Promise ((resolve, reject) => {
            setTimeout(()=> {
                if(data.length){
                    resolve(data.find(producto => productoId === productoId))
                } else {
                    reject("No hay productos para mostrar")
                }
            },2000)
        })
        setProducto()
        getproducto.then(res => {
            setProducto(res)
        })
        .catch(err => {
            <p>{err}</p>
        })
    }, [productoId])

    return(
        producto ?
        <div key={producto.id} className="detailContainer">
            <div className="detailFoto">
                <img src={require(`../../img/productos/${producto.img}`)} alt={producto.modelo} />
            </div>
            <div className="detailProducto">
                <h2 className="detailTitulo">{producto.modelo}</h2>
                <h3 className="detailPrecio">{producto.precio}</h3>
                <p className="detailDescripcion">{producto.descripcion}</p>
                <ItemCount stock={producto.stock}/>
                <p>En stock: {producto.stock}</p>
            </div>
        </div>
        :
        <div className="detailContainer">
            <h2 className="mensaje">Cargando...</h2>
        </div>
    )
}