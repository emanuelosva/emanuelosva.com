<script>
  export let segment;
</script>

<style>
  @media screen and (max-width: 1024px) {
    .Nav {
      display: none;
    }
  }

  .Nav {
    position: absolute;
    left: calc(100vw - 120px);
    top: 30%;
    z-index: 1000;
  }

  .Nav ul {
    list-style: none;
  }

  .Nav ul li {
    box-sizing: border-box;
    background-color: #4a3f35;
    border-radius: 25px;
  }

  .Nav ul li a {
    box-sizing: border-box;
    width: 50px;
    height: 50px;
    margin: 0 0 0.8em 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    text-decoration: none;
  }

  .Nav ul li a i {
    position: relative;
    right: 0px;
    z-index: 2000;
    font-size: 1.2em;
    color: #ffffff;
  }

  [aria-current] a {
    background-color: #fa7d09;
  }
</style>

<nav class="Nav">
  <ul>
    <li aria-current={segment === undefined ? 'page' : undefined}>
      <a href="/">
        <i class="fa fa-home" />
      </a>
    </li>
    <li aria-current={segment === 'about' ? 'page' : undefined}>
      <a rel="prefetch" href="about">
        <i class="fa fa-user" />
      </a>
    </li>
    <li aria-current={segment === 'portfolio' ? 'page' : undefined}>
      <a rel="prefetch" href="portfolio">
        <i class="fa fa-briefcase" />
      </a>
    </li>
    <li aria-current={segment === 'contact' ? 'page' : undefined}>
      <a rel="prefetch" href="contact">
        <i class="fa fa-envelope" />
      </a>
    </li>
    <li aria-current={segment === 'blog' ? 'page' : undefined}>
      <a rel="prefetch" href="blog">
        <i class="fas fa-blog" />
      </a>
    </li>
  </ul>
</nav>
