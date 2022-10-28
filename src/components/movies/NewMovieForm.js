import './NewMovieForm.css';
import Card from 'react-bootstrap/Card';
import { useRef } from 'react'; //use Ref for reading Values
import '../layout/Layout.css';


function NewMovieForm(props) {

    //using 'useRef' to reference the value input from users
    const titleInputRef = useRef();
    const categoryInputRef = useRef();
    const imageInputRef = useRef();
    const coverImageInputRef = useRef();
    const ratingInputRef = useRef();
    const descriptionInputRef = useRef();


    //submit handler to add form inputs
    function submitHandler(event){
        event.preventDefault();

        //referencing the current value
        const enteredTitle = titleInputRef.current.value;
        const enterCategory = categoryInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredCoverImage = coverImageInputRef.current.value;
        const enteredRating = ratingInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const movieData = {
            title: enteredTitle,
            category: enterCategory,
            image: enteredImage,
            coverImage: enteredCoverImage,
            rating: enteredRating,
            description: enteredDescription
        };
        //passing added data as props
        props.onAddMovies(movieData);
    }

    return (
        <Card>
            <form className='form' onSubmit={submitHandler}>
                <div className='control'>
                    <label htmlFor='title'>Movie Title</label>
                    <input type="text" required id="title" ref={titleInputRef} />
                </div>
                <div className="control">
                    <label htmlFor="category">Movie Category</label>
                    <select name="category" id="category">
                        <option value="action">Action</option>
                        <option value="family">Family</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="horror">Horror</option>
                    </select>
                </div>
                <div className='control'>
                    <label htmlFor='image'>Movie Image</label>
                    <input type="url" required id="image" ref={imageInputRef}/>
                </div>
                <div className='control'>
                    <label htmlFor='cover'>Cover Movie Image</label>
                    <input type="url" required id="cover" ref={coverImageInputRef}/>
                </div>
                <div className='control'>
                    <label htmlFor='rating'>Rating</label>
                    <input type="text" required id="rating" ref={ratingInputRef} />
                </div>
                <div className='control'>
                    <label htmlFor='description'>Description</label>
                    <textarea required rows="5" id="description" ref={descriptionInputRef} />
                </div>
                <div>
                <button className='formBtn'>Add Movie</button>
                </div>
            </form>
        </Card>
    )

}

export default NewMovieForm