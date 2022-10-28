import { useContext } from 'react';
import FavoritesContext from '../store/favorite-context';
import MovieLists from '../components/movies/MovieLists';

function Favorites(){

    const favoriteCtx = useContext(FavoritesContext);

    let content; 

    if(favoriteCtx.totalFavorites === 0){
        content = <p>No favorites, start adding!</p>
    }else{
        content = <MovieLists movies={favoriteCtx.favorites} />
    }

    return(
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>

    );
}

export default Favorites;