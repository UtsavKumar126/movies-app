import React,{useState} from "react";
import moviesData from "../data/moviesData";
import MoviesDisplay from "./MoviesDisplay";

const MoviesList=({setSelectedMovie})=>{

    
    return(
        <div>
        <div className='movies-list'>
        {
          moviesData.map((item)=>(
            <p onClick={()=>setSelectedMovie(item)}>{item.title}</p>
          ))
        }
        
        </div>
      </div>
    )
}

export default MoviesList