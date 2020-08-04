<script>
  export let text;
  export let highText;
</script>

<style>
  @media only screen and (min-width: 769px) {
    .Title h1 {
      font-size: 60px;
    }
  }

  @media only screen and (max-width: 768px) {
    .Title h1 {
      font-size: 40px;
    }
  }

  .Title h1 {
    font-family: "Poppins";
    font-weight: 700;
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
