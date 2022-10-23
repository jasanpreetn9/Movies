export const load = ({fetch, params}) => {
    const apiKey = '04c35731a5ee918f014970082a0088b1'
    const fetchMovie = async(id) => {
        const resp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&query=${id}&page=1&include_adult=false`);
        const respData = await resp.json(resp);
        return respData.results
    }

    return {
        searchMovie: fetchMovie(params.searchId)
    }
}