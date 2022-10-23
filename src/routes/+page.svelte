<script>
	import { each } from "svelte/internal";
	import Popular from "../components/Popular.svelte";
	import SearchMovie from "../components/SearchMovie.svelte";
    const {popularMovies} = data

</script>
<SearchMovie />
<Popular {popularMovies} />
