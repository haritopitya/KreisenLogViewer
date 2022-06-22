import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MovieCard from './MovieCard'

const MovieCardList = ({ movies, onClick }) => {
  return (
    <Container>
      <Row>
        {
          movies && movies.map(movie => (
            <Col lg={4} key={movie.id}>
              <MovieCard
                movie={movie}
                onClick={onClick}
              />
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

export default MovieCardList
