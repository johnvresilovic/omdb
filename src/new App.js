import {useState, useEffect} from 'react'
import './App.css';
// We import our components
import RecommendedMoviesDisplay from './components/RecommendedMoviesDisplay';
import Form from './components/Form';
export default function App() {
  const apiKey = '7427ace7' // our API key
  //State will live here
  const [movies, setMovies] = useState(null)
  //Function to getMovies
  const getMovies = async (searchTerm) => {
    // make fetch request and store response
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}&page=1`
      )
      // Parse JSON response into a javascript object
      const data = await response.json()
      //set the Movie state to the movie
      setMovies(data)
    } catch(e){
      console.error(e)
    }
  }
  //This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovies("Star");
  }, []);
  // USE OUR COMPONENTS IN APPs RETURNED JSX
  return (
    <div className="App">
      <Form recommendedmovies={getMovies}/>
      <RecommendedMoviesDisplay movies={movies} />
    </div>
  );
}