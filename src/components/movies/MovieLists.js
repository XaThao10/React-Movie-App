import './MovieLists.css';
import MovieItems from './MovieItems';
import '../layout/Layout.css';

function MovieList(props){
    return (
       <div className='contianer'>
            <div className="row">
                {props.movies.map( movies => (
                    <div key={movies.id} className="col-md-3">
                    <div key={movies.id} className='cardList'>
            <MovieItems
                key={movies.id} 
                id={movies.id}
                category={movies.category}
                image={movies.image}
                title={movies.title}
                rating={movies.rating}
                description={movies.description} 
                />
                </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default MovieList