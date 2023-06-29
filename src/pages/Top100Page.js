import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Movies } from "../movies";
import MovieCard from "../components/MovieCard";

const Top100Page = () => {
    return (
        <>
			<Header />
			<Container className='heading mt-2 mb-2'>
				<h1 className="text-center">Top 100 Movies of All Time</h1>
			</Container>
			<Container fluid className="movies-list">
				<Row xs={1} md={4} className="g-4">
					{
						Movies.map(movie => {
							return (
								<MovieCard movie={movie}/>
							);
						})
					}
				</Row>
			</Container>
			<Footer />
		</>
    )
}

export default Top100Page