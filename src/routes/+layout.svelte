<script>
	import './global.css';
</script>

<scelte:head>
	<title>Movie</title>
</scelte:head>
<nav>
	<a href="/">Movie DataBase</a>
</nav>

<slot />

<footer>
	<p>Data imported from <a href="../../static/tmdb.svg">TMDB</a></p>
</footer>

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
		color: white;
		text-decoration: none;
	}
	footer {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
