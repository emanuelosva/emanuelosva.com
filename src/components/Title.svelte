<script>
  export let text;
  export let highText;
</script>

<style>
  .Title h1 {
    font-family: "Poppins";
    font-weight: 700;
    font-size: 60px;
    text-transform: uppercase;
  }

  .Title h1 strong {
    color: #ff4301;
  }
</style>

<div class="Title">
  <h1>
    {text}
    <strong>{highText}</strong>
  </h1>
</div>
