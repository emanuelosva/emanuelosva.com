<script>
  import { goto } from "@sapper/app";
  export let url;
  export let text;

  // Hover icon effect
  let hovering;
  const hoverTrue = () => (hovering = true);
  const hoverFalse = () => (hovering = false);

  const navigate = async () => {
    await goto(url);
  };
</script>

<style>
  .Button {
    box-shadow: none;
    height: 43px;
    width: 230px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 21px;
    background-color: #fa7d09;
    cursor: pointer;
  }

  .Button-text {
    margin-right: 10px;
    font-size: 15px;
    font-family: "Poppins";
    font-weight: 400;
    line-height: 46px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  .Button-icon {
    display: none;
  }

  .active {
    display: inline;
  }
</style>

<div
  class="Button"
  on:click={navigate}
  on:mouseover={hoverTrue}
  on:mouseout={hoverFalse}>
  <p class="Button-text">{text}</p>
  <div class="Button-icon" class:active={hovering}>
    <slot />
  </div>
</div>
