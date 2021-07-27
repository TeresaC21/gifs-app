import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";

import GifGridItem from "./GifGridItem";
//import { getGifs } from "../helpers/getGifs"; 

const GifGrid = ({ category }) => {

  const { data, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>

      {loading && <p className="animate__animated animate__flash">Cargando...</p> }

      <div className="card-grid">
        {data.map((image) => (
          <GifGridItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;