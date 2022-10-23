export const load = async ({fetch}) => {
    const apiKey = '04c35731a5ee918f014970082a0088b1'
    const fetchPopular = async () => {
        const Resp = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
        const RespData = await Resp.json();
        return RespData.results
    }
	return {
		popularMovies: fetchPopular()
	};
};
