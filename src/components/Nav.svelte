<script>
  export let segment;
</script>

<style>
  @media screen and (min-width: 768px) {
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
    width: 50px;
    height: 50px;
    margin: 0 0 0.8em 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: #4a3f35;
    border-radius: 25px;
  }

  .Nav ul li a {
    display: flex;
    text-decoration: none;
  }

  .Nav ul li a i {
    position: relative;
    right: 0px;
    z-index: 2000;
    font-size: 1.2em;
    color: #ffffff;
  }

  [aria-current] i {
    color: orange;
  }
</style>

<nav class="Nav">
  <ul>
    <li>
      <a aria-current={segment === '.' ? 'page' : undefined} href=".">
        <i class="fa fa-home" />
      </a>
    </li>
    <li>
      <a
        aria-current={segment === 'about' ? 'page' : undefined}
        rel="prefetch"
        href="about">
        <i class="fa fa-user" />
      </a>
    </li>
    <li>
      <a
        aria-current={segment === 'portfolio' ? 'page' : undefined}
        rel="prefetch"
        href="portfolio">
        <i class="fa fa-briefcase" />
      </a>
    </li>
    <li>
      <a
        aria-current={segment === 'contact' ? 'page' : undefined}
        rel="prefetch"
        href="contact">
        <i class="fa fa-envelope" />
      </a>
    </li>
    <li>
      <a
        aria-current={segment === 'blog' ? 'page' : undefined}
        rel="prefetch"
        href="blog">
        <i class="fas fa-blog" />
      </a>
    </li>
  </ul>
</nav>
