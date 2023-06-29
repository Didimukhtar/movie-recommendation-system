import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header'
import Search from '../components/Search'
import Footer from '../components/Footer'
import React, { useState, useEffect } from 'react'
import { Movies, Recommendations } from '../moviesdb'
import RecommendationResult from '../components/RecommendationResult';

const Recommend = () => {
  const [recommendations, setRecommendations] = useState(null)
  const [movie, setMovie] = useState('')
  const [showResult, setShowResult] = useState(false)


  useEffect(() => {
    if (movie && recommendations) {
      setShowResult(true)
    } else {
      setShowResult(false)
    }
  }, [movie, recommendations])

  const getSearchValue = (data) => {
    fetchRecommendations(data)
  }

  const getMovieByTitle = (title) => {
    for (let movie of Movies) {
      if (movie.title === title) {
        return movie
      }
    }

    return 'Movie not found'
  }

  const getMoviesByIndex = (indices) => {
    let movies = []
    for (let index of indices) {
      movies.push(Movies[index])
    }
    return movies
  }

  const getSimilarMovies = (index) => {
    let similarMoviesIndex 
    for (let recommendation of Recommendations) {
      if (index === recommendation.movie_index ) {
        similarMoviesIndex = recommendation.top_sim.slice(0,10)
        break
      }
    }
    return getMoviesByIndex(similarMoviesIndex)
  }

  const fetchRecommendations = (data) => {
    const movie = getMovieByTitle(data)
    let similarMovies
    console.log(movie)
    if (movie === 'Movie not found') {
      //return {mov:movie, rec:'Movie not found'} 
      setMovie(movie)
      setRecommendations('Movie not found')
    } else {
      //return {mov:movie, rec:getSimilarMovies(movie.movie_index)}
      similarMovies = getSimilarMovies(movie.movie_index)
      setMovie(movie)
      setRecommendations(similarMovies)
    }
    console.log(similarMovies)
  }

  return (
    <div>
      <Header />
      <Search getSearchValue={getSearchValue}/>
      {showResult && <RecommendationResult recommendations={recommendations} movie={movie}/>}
      <Footer />
    </div>
  )
}

export default Recommend