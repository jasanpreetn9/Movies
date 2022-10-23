export const load = ({fetch, params}) => {
    const apiKey = '04c35731a5ee918f014970082a0088b1'
    const fetchMovie = async(id) => {
        const resp = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
        const respData = await resp.json(resp);
        return respData
    }

    return {
        movieDetail: fetchMovie(params.movieId)
    }
}