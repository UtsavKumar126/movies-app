import React,{useState} from "react";
import MoviesList from "./Components/MoviesList";
import MoviesDisplay from "./Components/MoviesDisplay";



const App=()=>{

    const[selectedMovie,setSelectedMovie]=useState(null);

    return(
        <div>
            <MoviesList setSelectedMovie={setSelectedMovie}/>
            <MoviesDisplay selectedMovie={selectedMovie}/>
        </div>
    )
}


export default App