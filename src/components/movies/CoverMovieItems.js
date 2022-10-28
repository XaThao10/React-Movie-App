import './CoverMovieItems.css';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorite-context';
import { BsHeartFill, BsXLg } from "react-icons/bs";
import '../layout/Layout.css';


function CoverMovieItems(props){
    const favoriteCtx =  useContext(FavoritesContext)

   const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler(){
        if(itemIsFavorite){
            favoriteCtx.removeFavorite(props.id);
        }else{
            favoriteCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                rating: props.rating
            });
        }
    }

    return (
            <Card>
                <div className="image-container">
            <Card.Img src={props.coverImage} alt={props.alt} /></div>
            <div className='carousel-body'>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <div className='actions'>
              <button className='watchBtn'>Watch Now</button>  <button  className="favBtn" onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? <BsXLg />  : <BsHeartFill />}</button>
            </div>
            </Card.Body>
            </div>
            </Card>
    )
}

export default CoverMovieItems;