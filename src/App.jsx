import React, { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MovieList } from './components/MovieList';
import { FilterButton } from './components/FilterButton';
import { Button, Form } from 'react-bootstrap';
import Rating from './components/Rating';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Details } from './components/Details';

const App = () => {
  const [movies, setMovies] = useState([
    // Movie objects...
    {
      id: 1,
      Title: "FAST X",
      Description: " Dom Toretto and his family are targeted by the vengeful son of drug kingpin Hernan Reyes. He and his brother are known across the land for their acts of bravery and courage so they try to beat him across the world.",
      Gender:"Action",
      Poster: "https://static.bunnycdn.ru/i/cache/images/2/26/26e5d063413fca41c8120643b655e2bc.jpg",
      trailer:"https://www.youtube.com/embed/32RAq6JzY-w",
      Rating: 3
    },
    {
      id: 2,
      Title: "The Super Mario",
      Description: "The main hero of the Mushroom Kingdom. Mario is always bright and cheerful and instantly recognizable with his blue overalls, red cap, and trademark moustache. He's a trusted friend of Princess Peach.",
      Gender:"Anime",
      Poster: "https://static.bunnycdn.ru/i/cache/images/a/a6/a626a19dca19799450594250720ebf38.jpg",
      trailer:"https://www.youtube.com/embed/TnGl01FkMMo",
      Rating: 4
    },
    {
      id: 3,
      Title: "The Covenant",
      Description: "In the film, Miles goes on an adventure with Gwen Stacy / Spider-Woman across the multiverse where he meets a team of Spider-People known as the Spider-Society,  but comes into conflict with them over handling a new threat.",
      Gender:"Action",
      Poster: "https://static.bunnycdn.ru/i/cache/images/3/3f/3f91fd4aecac8beea4e10a565f805576.jpg",
      trailer:"https://www.youtube.com/embed/02PPMPArNEQ",
      Rating: 5
    },
  
    {
      id: 4,
      Title: "Spider-Man",
      Description: "In the film, Miles goes on an adventure with Gwen Stacy / Spider-Woman across the multiverse where he meets a team of Spider-People known as the Spider-Society,  but comes into conflict with them over handling a new threat.",
      Gender:"Anime",
      Poster: "https://static.bunnycdn.ru/i/cache/images/1/1e/1e317d9e04806839aae58bd9e5a7f0fe.jpg",
      trailer:"https://www.youtube.com/embed/cqGjhVJWtEg",
      Rating: 4,
    },
    {
      id: 5,
      Title: "Mr. Bean's Holiday",
      Description: "production in 2007",
      Gender:"Comedy",
      Poster: "https://static.bunnycdn.ru/i/cache/images/2/25/2515d1ade3215b76a5fb72aa1d9038cb.jpg",
      trailer:"https://www.youtube.com/embed/hSxLUd8aly4",
      Rating: 3
    }
  ]);

//  states declaration of gender and title
  const [filterGender, setFilterGender] = useState('');
  const [filterTitle, setFilterTitle] = useState('');

  // function to filter by gender or/and title before creating the card and return the only the matches:
  const handleFilter = () => {
    const filteredMovies = movies.filter(movie => {
      const genderMatch = filterGender ? movie.Gender === filterGender : true;
      const titleMatch = filterTitle ? movie.Title.toLowerCase().includes(filterTitle.toLowerCase()) : true;
      return genderMatch && titleMatch;
    });
    return filteredMovies;
  };

    // function to handle the additin of a new object in the movies table
  const handleAdd = (newMovie) => {setMovies([...movies, newMovie]);};

    // function to create a new object and lounch addition to Movies
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Math.random(),
      Title: newTitle,
      Description: newDescript,
      Gender: newGender,
      Poster: newPoster,
      Rating: newRating,
    };

    handleAdd(newMovie);

    // Reset the input fields
    setnewTitle('');
    setnewDescript('');
    setnewGender('');
    setnewPoster('');
  };

  // 4 states of newMovie datas
  const [newTitle, setnewTitle] = useState("");
  const [newDescript, setnewDescript] = useState("");
  const [newGender, setnewGender] = useState("");
  const [newPoster, setnewPoster] = useState("");
  const [newRating, setnewRating] = useState(1);

  const ratingFunction = (x)=> setnewRating(x);
  return (
    <>
    <br />
          {/* call the component of filter */}
          <FilterButton 
        filterGender={filterGender}
        filterTitle={filterTitle}
        setFilterGender={setFilterGender}
        setFilterTitle={setFilterTitle}
      />
      <br />
      {/* router of each details */}
      <Router>
      <Routes>
      <Route path="/"  element={
      <MovieList allmovies={handleFilter()} />
      } />
      <Route path="/details/:id" element={<Details movies={movies} />} />
      </Routes>
      
      <br /> <br />
{/* Forum to enter new movie's datas */}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Movie`s Title:</Form.Label>
          <Form.Control
            type="text" value={newTitle}
            placeholder="Enter Movie's Title"
            onChange={e => setnewTitle(e.target.value)}
          />
        </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description:</Form.Label>
        <Form.Control as="textarea" value={newDescript} rows={3} placeholder="Enter the movie's description" onChange={e=>setnewDescript(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Gender:</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={newGender}
            onChange={e => setnewGender(e.target.value)}
          >
            <option>Choose the gender</option>
            <option value="Action">Action</option>
            <option value="Romance">Romance</option>
            <option value="Anime">Anime</option>
            <option value="Comedy">Comedy</option>
            <option value="Herror">Herror</option>
          </Form.Select>
        </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Poster`s link:</Form.Label>
          <Form.Control
            type="link"
            value={newPoster}
            placeholder="Enter Poster's link"
            onChange={e => setnewPoster(e.target.value)
            }
          />
        </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
          <Rating rating={newRating } ratingFunction={ratingFunction}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Router>

    </>
  );
}

export default App;
