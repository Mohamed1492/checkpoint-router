
import { Button, Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

export const MovieCard = (props) => {
console.log(props)
  return (
    <div className='movieCard'>
        {/* structure of each card with details of each movie */}
        <Card style={{ width: '19rem' }}>
      <Card.Img style={{ height: '23rem' }} variant="top" src={props.movie.Poster} />
      <Card.Body>
        <Card.Title ><h6>{props.movie.Title}</h6></Card.Title>
        <Card.Text>
        Description: {props.movie.Description}
        </Card.Text>
        <Card.Text>
        Gender: {props.movie.Gender}
        </Card.Text>
        {/* <Card.Text> */}
        <Rating rating={props.movie.Rating}/>
        {/* </Card.Text> */}
        <Link to={`/details/${props.movie.id}`} >
        <Button variant="primary">Watch now</Button>
        </Link>
      </Card.Body>
    </Card>
    </div>
  )
}