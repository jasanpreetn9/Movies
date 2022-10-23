<script>
    export let data;
    import MovieCard from "../../../components/MovieCard.svelte";
	import SearchMovie from '../../../components/SearchMovie.svelte';
    console.log(data)
    const {searchMovie} = data
</script>

<SearchMovie />
<div class="searched-movie">
	{#each searchMovie as movie}
		<MovieCard {movie} />
	{/each}
</div>


<style>
	.searched-movie {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-column-gap: 1rem;
		grid-row-gap: 2rem;
	}
</style>