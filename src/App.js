import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import Row from "react-bootstrap/Row";
import { Movies } from "./movies";
import MovieCard from "./components/MovieCard";
import Footer from "./components/Footer";

export default function App() {
	return (
		<Container fluid className='App bg-light'>
			<Header />
			<Container className='heading bg-dark text-light mt-4'>
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
		</Container>	
	);
}