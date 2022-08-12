import React ,{useEffect,useState} from 'react';
import './App.css';
import Movie from './Components/Movie';

// API STUFF 
const API = "3486479a17987c537f11bc5d054db1ad"
const FEATURED_API= "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3486479a17987c537f11bc5d054db1ad&page=1"

const IMG_API= "https://image.tmdb.org/t/p/w500"
//remove this comment
//const SEARCH_API="https://api.themoviedb.org/3/search/movie?&api_key=3486479a17987c537f11bc5d054db1ad&query="
function App() {

  const [movies,setMovies]  = useState([])
  const [searchterm, setSearchterm]  = useState('')

useEffect(()=>{
  getMovies(FEATURED_API)

},[])

const getMovies = (API)=>{

  fetch(API).
  then(res=>res.json())
  .then(data=>{
     console.log(data);
     setMovies(data.results);
  });
}

const handleOnSubmit = (e)=>{
  e.preventDefault();

  if(searchterm){
    getMovies(SEARCH_API + searchterm)
  setSearchterm("")
}

};


const handleOnChange = (e)=>{
  // console.log(e.target.value)
  setSearchterm(e.target.value)
}
  
  return (
    <>
      <header>

        <form onSubmit={handleOnSubmit}>
        <input className='search' type='text' placeholder="Search here" value={searchterm} onChange={handleOnChange}/>
        </form>

      </header>
    <div className="movie-container">


     

      {movies.length > 0 && movies.map(movie=>(
 <Movie key={movie.id} {...movie}/>
      ))}
    </div>
    </>
  );
}

export default App;
