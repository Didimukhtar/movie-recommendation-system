import { Container, Row } from "react-bootstrap"
import MovieCard from './MovieCard'

export default function RecommendationResult({ recommendations, movie }) {
    if (recommendations === 'Movie not found') {
        return (
            <>
                <Container> Sorry we can't make any recomendations. Movie not found.</Container>
            </>
        )
    }
    return (
        <>
            <Container className="mx-auto">
                <h1 className="mb-2 text-dark">Your movie</h1>
                <MovieCard movie={movie} />
            </Container>
            <hr/>
            <Container className="">
                <h1 className="mb-2 text-dark">Recommendations</h1>
                <Row xs={1} md={4} className="g-4">
					{
						recommendations.map(movie => {
							return (
								<MovieCard movie={movie}/>
							);
						})
					}
				</Row>
            </Container>
        </>
    )
}