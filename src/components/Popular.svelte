<script>
	import MovieCard from './MovieCard.svelte';
	export let popularMovies;
</script>

<h1>Popular Movies</h1>
<main>
	{#each popularMovies as movie}
		<MovieCard {movie} />
	{/each}

</main>

<style>
	main {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		grid-column-gap: 1rem;
		grid-row-gap: 2rem;
	}
</style>
