<script>
  export let ref;
</script>

<style>
  a {
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    margin: 0 0.5em 0.5em 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color: #4a3f35;
    text-decoration: none;
  }

  a:hover {
    background-color: #fa7d09;
  }
</style>

<a href={ref} rel="external" target="_blank">
  <slot />
</a>
