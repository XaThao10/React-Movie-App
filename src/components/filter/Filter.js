import MovieItems from './MovieItems';
import Button from 'react-bootstrap/Button';


function Filter(props) {

    const filterResult = (catItem) =>{
        const result = props.movies.filter((curData) =>{
            return curData.category === catItem
        })
    }

    return(
        <div>
             <Button variant="warning">Warning</Button>
        </div>
    );
}

export default Filter;