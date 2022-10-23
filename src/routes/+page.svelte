<script>
	import { each } from "svelte/internal";
	import Popular from "../components/Popular.svelte";
	import SearchMovie from "../components/SearchMovie.svelte";
    export let data;
    const {popularMovies} = data

</script>
<SearchMovie />
<Popular {popularMovies} />
