import React from "react";


const MoviesDisplay=({selectedMovie})=>{
    return(
        <div className='movie-display'>
        {
          selectedMovie!=null&&(
            <div>
              <h1>{selectedMovie.title}</h1>
              <p>{selectedMovie.actor}</p>
              <p>{selectedMovie.genre}</p>
              <p>{selectedMovie.director}</p>
            </div>
          )
        }

      </div>
    )
}

export default MoviesDisplay