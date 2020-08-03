<script>
  import Nav from "../components/Nav.svelte";
  import BackFigure from "../components/BackFigure.svelte";
  export let segment;
</script>

<Nav {segment} />
<BackFigure />

<main>
  <slot />
</main>
