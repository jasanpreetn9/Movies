<script>
	import './global.css'
s</script>
<scelte:head>
	<title>Movie</title>
</scelte:head>
<nav>
	<a href="/">Movie DataBase</a>
</nav>

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
</style>

<slot />
