import { Link } from 'react-router-dom';
import './MainNav.css';
import {useContext} from 'react';
import FavoritesContext from '../../store/favorite-context';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MainNav(){

    const favoriteCtx = useContext(FavoritesContext);

    return (
         <Navbar collapseOnSelect expand='sm' >
            <Container>
                <Navbar.Toggle aria-controls='navbarScroll' data-bs-target="#navbarScroll" />
                    <Navbar.Collapse id='navbarScroll'>
                        <Navbar.Brand><Link to='/' className='logo'>MOVIES HUB</Link></Navbar.Brand>
                            <Nav>
                                    <Link to='/'>All Movies</Link>
                                    <Link to='/new-movie'>New Movies</Link>
                                    <Link to='/favorites'>My Favorites<span className='badge'>{favoriteCtx.totalFavorites}</span></Link>
                            </Nav>
              
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MainNav;