<script>
	import './global.css'
	import SearchMovie from '../components/SearchMovie.svelte';
</script>
<scelte:head>
	<title>Movie</title>
</scelte:head>
<nav>
	<a href="/">Movie DataBase</a>
</nav>
<SearchMovie />

<style>
	nav {
		display: flex;
		min-height: 10vh;
		align-items: center;
		justify-content: center;
	}
	a {
		font-size: 1rem;
		font-weight: bold;
		font-family: 'Poppins';
		color: black;
		text-decoration: none;
	}
</style>

<slot />
