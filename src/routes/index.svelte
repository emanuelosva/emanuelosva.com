<script>
  import Button from "../components/Button.svelte";
  import Title from "../components/Title.svelte";
</script>

<style>
  .Home {
    box-sizing: border-box;
    padding: 10px 0;
  }

  .Home-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .Home-wrapper {
    box-sizing: border-box;
    margin: 0 6em 0 0;
  }

  .Home-wrapper img {
    border-radius: 15px;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.9);
  }

  .Home-wrapper.info {
    padding-right: 2em;
  }

  .Home-wrapper h2 {
    margin: 0 0 0.7em 0;
    font-weight: 300;
  }
  .Home-wrapper h2,
  h1 {
    text-transform: uppercase;
  }

  .Home-wrapper p {
    font-weight: 400;
    line-height: 32px;
  }
</style>

<svelte:head>
  <title>Emaneul Osorio</title>
</svelte:head>

<div class="Home">
  <div class="Home-container">
    <div class="Home-wrapper">
      <figure class="Home-wrapper__image">
        <img src="profile-main.png" alt="Emanuel Osorio" />
      </figure>
    </div>
    <div class="Home-wrapper info">
      <h2>Hi There!</h2>
      <Title text="I'm" highText="Emanuel Osorio" />
      <p>
        I'm a mexican full stack web developer. Focused in backend development
        with Node.js and python. I'm passionate about building excellent
        products that improves the life of people and make a contribution to the
        world through the web.
      </p>
      <Button url="/about" text="more about me">
        <i class="fa fa-user" />
      </Button>
    </div>
  </div>
</div>
