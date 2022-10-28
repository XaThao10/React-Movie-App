import { useNavigate } from 'react-router-dom';
import NewMovieForm from '../components/movies/NewMovieForm';

function NewMovies(){
    const navigate = useNavigate(); //use to navigtae in browser history

    function addMoviesHandler(movieData){
        //sending request to database (adding "movies to add new table and '.json' as requirement)
        //Fetch send GET Request ~ second parameter
        fetch('Your_URL/movies.json',
        {
            method: 'POST', 
            body: JSON.stringify(movieData),
            headers: {
                'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate('/');
        });
    }

    return (
        <section>
            <h1>Add New Movie</h1>
            <NewMovieForm onAddMovies={addMoviesHandler}/>
        </section>
    );
}

export default NewMovies