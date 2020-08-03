<script>
  import Title from "../components/Title.svelte";
  import EmailForm from "../components/EmailForm.svelte";
  import CircleAnchor from "../components/CircleAnchor.svelte";
</script>

<style>
  .Contact {
    padding: 6em;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }

  .Contact-container {
    width: 100%;
    margin: 3em 0 0 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-flow: row;
  }

  .Contact-wrapper h2 {
    text-transform: uppercase;
  }

  .Contact-wrapper__info {
    margin: 1.5em 0;
    display: flex;
    align-items: center;
  }

  .Contact-wrapper__info i {
    margin: 0 0.5em 0 0;
    font-size: 40px;
    color: #fa7d09;
  }

  .Contact-wrapper__info-data {
    height: 40px;
    padding: 0;
  }

  .Contact-wrapper__info-data span {
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    opacity: 0.8;
    text-transform: uppercase;
  }
  .Contact-wrapper__info-data p {
    margin: 0;
    font-weight: 400;
    font-size: 15px;
  }

  .Contact-wapper__links {
    display: flex;
  }

  .Contact-wapper__links i {
    color: #ffffff;
  }
</style>

<svelte:head>
  <title>Contact</title>
</svelte:head>

<div class="Contact">
  <Title text="Get in" highText="Touch" />
  <div class="Contact-container">
    <div class="Contact-wrapper">
      <h2>Contact me!</h2>
      <p>Some fancy text here...</p>
      <div class="Contact-wrapper__info">
        <i class="fa fa-envelope" />
        <div class="Contact-wrapper__info-data">
          <span>Mail me</span>
          <p>emanuelosva@gmail.com</p>
        </div>
      </div>
      <div class="Contact-wrapper__info">
        <i class="fas fa-phone-square" />
        <div class="Contact-wrapper__info-data">
          <span>Call me</span>
          <p>+52 55 12 39 28 73</p>
        </div>
      </div>
      <div class="Contact-wapper__links">
        <CircleAnchor ref="https://github.com/emanuelosva">
          <i class="fab fa-github" />
        </CircleAnchor>
        <CircleAnchor ref="https://facebook.com">
          <i class="fab fa-facebook-f" />
        </CircleAnchor>
        <CircleAnchor ref="https://twitter.com">
          <i class="fab fa-twitter" />
        </CircleAnchor>
        <CircleAnchor ref="https://instagram.com">
          <i class="fab fa-instagram" />
        </CircleAnchor>
      </div>
    </div>
    <div class="Contact-wrapper">
      <EmailForm />
    </div>
  </div>
</div>
