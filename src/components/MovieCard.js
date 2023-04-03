import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import moment from "moment/moment";

export default function MovieCard({movie}) {
    return (
        <Col className="d-flex align-items-stretch">
            <Card className="movie_card">
                <Card.Img src={`/posters/` + movie.img_name}></Card.Img>
                <Card.Body>
                    <Card.Text className="movie_rating"><Badge pill bg="warning" text="dark">	&#9733; {movie.vote_average}</Badge></Card.Text>
                    <Card.Title className="fw-bolder">{movie.title}</Card.Title>
                    <Card.Text className="movie_date">{moment(movie.release_date).format('MMM DD, YYYY')}</Card.Text>
                </Card.Body>
                
            </Card>
        </Col>
    );
}