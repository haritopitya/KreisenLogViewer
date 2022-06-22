import { getAxios } from './axios';


const getGroups = async () => {
    const axios = getAxios()
    const response = await axios.get('/data/list.json', {
        params: {
            random: Math.random()
        }
    })
    return response.data
}

const getFlightNumbers = async (group) => {
    const axios = getAxios();
    const response = await axios.get(`/data/${group}/list.json`, {
        params: {
            random: Math.random()
        }
    })
    return response.data
}

const getMovies = async (group, number) => {
    const axios = getAxios()
    const response = await axios.get(`/data/${group}/${number}/youtube.json`, {
        params: {
            random: Math.random()
        }
    })
    const movies = response.data

    for (const movie of movies) {
        movie.group = group
        movie.number = number
    }

    movies.sort((a, b) => a.title < b.title ? -1 : 1)

    return movies
}

const getMovie = async (group,number, id) => {
    const axios = getAxios()
    const response = await axios.get(`/data/${group}/${number}/youtube.json`)
    const movies = response.data

    for (const movie of movies) {
        if (movie.id === id) return movie
    }

    return null
}

export {
    getGroups,
    getFlightNumbers,
    getMovies,
    getMovie,
};
