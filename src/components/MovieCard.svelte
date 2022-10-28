<script>
	export let movie;
</script>

<div class="movie-card">
	<a data-sveltekit-prefetch data-sveltekit-noscroll href={'/' + movie.id}>
		<img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title} />
	</a>
	<div class="description">
		<p>{movie.title}</p>
	</div>
</div>

<style>
	img {
		width: 100%;
		object-fit: cover;
		border-radius: 1rem;
		margin-bottom: 1rem;
	}
	p {
		font-size: 0.9em;
	}
	.description {
		height: 5vh;
    }
	.movie-card {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 1rem;
	}
</style>
