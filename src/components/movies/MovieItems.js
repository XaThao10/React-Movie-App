import './MovieItems.css';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorite-context';
import Card from 'react-bootstrap/Card';
import { BsHeartFill, BsXLg } from "react-icons/bs";
import '../layout/Layout.css';


function MovieItems(props){
   const favoriteCtx =  useContext(FavoritesContext)

   const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler(){
        if(itemIsFavorite){
            favoriteCtx.removeFavorite(props.id);
        }else{
            favoriteCtx.addFavorite({
                id: props.id,
                title: props.title,
                category: props.category,
                description: props.description,
                image: props.image,
                rating: props.rating
            });
        }
    }

    return (
            <Card>
                <div className="image-container">
            <Card.Img variant='top' src={props.image} alt={props.alt} /></div>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text><div className='rating-text'><b>Category:</b> {props.category} / <b>Rating:</b> {props.rating}</div></Card.Text>
                <Card.Text>{props.description}</Card.Text>
                <div className='actions'>
                <button className='watchBtn'>Watch Now</button>  <button  className="favBtn" onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? <BsXLg />  : <BsHeartFill />}</button>
                </div>
            </Card.Body>
            </Card>
    )
}

export default MovieItems;