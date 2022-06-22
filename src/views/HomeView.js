import { css } from '@emotion/react';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import MovieCardList from '../components/home/MovieCardList';
import { getGroups, getMovies, getFlightNumbers } from '../utils/movie';

const HomeView = () => {
    const [movies, setMovies] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        const f = async () => {
            const tfList = await getGroups()
            let movies = []
            for (const tfId of tfList) {
                const flightList = await getFlightNumbers(tfId)
                for (const flightNumber of flightList) {
                    const movieList = await getMovies(tfId, flightNumber)
                    movies = movies.concat(movieList)
                }

            }
            setMovies(movies)
        }
        f();
    },[])
    const onClick = (group,number, id) => {
        navigate(`/viewer/${group}/${number}/${id}`)
    }
    return (
        <div css={css({ overflowY: 'scroll' })}>
            <MovieCardList movies={movies} onClick={onClick} />
        </div>
    )
}
export default HomeView