import MoviesList from "../components/movies/MovieLists";
import { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import CoverMovieList from "../components/movies/CoverMovieLists";
import Button from 'react-bootstrap/Button';


function AllMovies(){

  const [isloading, setIsLoading] = useState(true);
  const [loadedMovies, setLoadedMovies] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    //fecthing data form database
    fetch('https://movies-app-6ce8e-default-rtdb.firebaseio.com/movies.json'
    ).then(response =>{
      return response.json();
    }).then(data => {
      const movies = [];

      for (const key in data){
        const movie = {
          id: key,
          ...data[key] //spread operatore to get all the objecy 
        };

        //pushing movie to movies array
        movies.push(movie)
      }
      setIsLoading(false);
      setLoadedMovies(movies);
      setCategory(movies);
    });

  }, []);

  function eventCategoryClick(e){
    const nameSelecion = e.currentTarget.textContent;
    const filtered =  loadedMovies.filter((item) => item.category === nameSelecion);
    if(nameSelecion === 'All'){
      setCategory(loadedMovies);
    }else{
      setCategory(filtered);
    }
  }

  //check if it's loading
  if(isloading){
    return (
      <div><Spinner animation="border" variant="danger" /></div>
      );
  }

    return (
        <div>
            <h1>New Release</h1>
            <CoverMovieList movies={loadedMovies} />
            <h2>All Movies</h2>
            <div className="filterContainer">
              <Button className="filterBtn" variant="outline-warning" onClick={eventCategoryClick}>All</Button>
              <Button className="filterBtn" variant="outline-warning" onClick={eventCategoryClick}>Action</Button>
              <Button  className="filterBtn" variant="outline-warning" onClick={eventCategoryClick}>Family</Button>
              <Button className="filterBtn" variant="outline-warning" onClick={eventCategoryClick}>Fantasy</Button>
              <Button className="filterBtn" variant="outline-warning" onClick={eventCategoryClick}>Horror</Button>
            </div>
          <MoviesList movies={category} />
        </div>
    )
}

export default AllMovies;