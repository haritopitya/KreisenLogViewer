import { Card } from 'react-bootstrap'
import { css } from '@emotion/react'


const MovieCard = ({ movie, onClick })=> {
    const { id, title, group,number } = movie
    const imgUrl = `https://img.youtube.com/vi/${id}/mqdefault.jpg`

    const onClickCard = () => onClick(group,number, id)

    return (
      <Card onClick={onClickCard} css={css({margin:5})}>
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    )
}

export default MovieCard
