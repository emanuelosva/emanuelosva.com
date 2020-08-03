<style>
  .Home {
    box-sizing: border-box;
    padding: 10px;
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

  .Home-wrapper h1 {
    font-family: "Poppins";
    font-weight: 700;
  }

  .Home-wrapper h1 strong {
    color: #ff4301;
  }
  .Home-wrapper h2,
  h1 {
    text-transform: uppercase;
  }

  .Home-wrapper p {
    font-weight: 300;
  }
</style>

<svelte:head>
  <title>Emaneul Osorio</title>
</svelte:head>

<div class="Home">
  <div class="Home-container">
    <div class="Home-wrapper">
      <figure class="Home-wrapper__image">
        <img src="/profile-main.png" alt="Emanuel Osorio" />
      </figure>
    </div>
    <div class="Home-wrapper">
      <h2>Hi There!</h2>
      <h1>
        I'm
        <strong>Emanuel Osorio</strong>
      </h1>
      <p>I'm a mexican web developer</p>
    </div>
  </div>
</div>
