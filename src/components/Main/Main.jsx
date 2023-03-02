import React from "react";
import { ItemDetail } from "../Item/ItemDetail";
import {ItemListContainer} from "../Item/ItemListContainer";
import { Routes, Route } from "react-router-dom";

export const Main = () => {
    return (
        <main>
            <Routes>
                <Route path='/producto/:producto.Id' element= {<ItemDetail/>}/>
                <Route path='/productos' element= {<ItemListContainer/>}/>
                <Route path='/productos/:categoria/:subcategoria' element= {<ItemListContainer/>}/>
            </Routes>
        </main>
    )
}