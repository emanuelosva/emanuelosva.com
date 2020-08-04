<script>
  import Button from "./Button.svelte";

  let name;
  let email;
  let subject;
  let message;

  const sendMail = () => {
    console.log(name, email, subject, message);
    name = email = subject = message = "";
  };
</script>

<style>
  @media screen and (min-width: 1024px) {
    .EmailForm {
      box-sizing: border-box;
      height: 100%;
      display: flex;
      justify-content: stretch;
    }
    .Form {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }

    .Form-wrapper {
      width: 80%;
    }

    .Form-wrapper.info {
      display: flex;
      justify-content: space-between;
    }

    .Form-wrapper.message {
      display: block;
    }

    .Form-wrapper__input {
      margin: 0 0 4em 2em;
      padding: 0.5em 1em;
      color: #fff;
      font-size: 14px;
      background-color: #252525;
      border: none;
      border-radius: 20px;
      outline: none;
    }

    input.Form-wrapper__input {
      height: 32px;
    }

    textarea.Form-wrapper__input {
      box-sizing: border-box;
      width: 95%;
      padding: 1.5em;
      font-family: "Open Sans", sans-serif;
    }

    .Form-wrapper .button {
      display: block;
      margin: 0 0 4em 2em;
    }
  }
  .Form-wrapper__input {
    margin: 0 0 4em 2em;
    padding: 0.5em 1em;
    color: #fff;
    font-size: 14px;
    background-color: #252525;
    border: none;
    border-radius: 20px;
    outline: none;
  }

  input.Form-wrapper__input {
    height: 32px;
  }

  textarea.Form-wrapper__input {
    box-sizing: border-box;
    width: 95%;
    padding: 1.5em;
    font-family: "Open Sans", sans-serif;
  }
</style>

<div class="EmailForm">
  <div class="Form">
    <div class="Form-wrapper info">
      <input
        type="text"
        name="name"
        placeholder="YOUR NAME"
        class="Form-wrapper__input"
        bind:value={name} />
      <input
        type="email"
        name="email"
        placeholder="YOUR EMAIL"
        class="Form-wrapper__input"
        bind:value={email} />
      <input
        type="text"
        name="subject"
        placeholder="YOUR SUBJECT"
        class="Form-wrapper__input"
        bind:value={subject} />
    </div>
    <div class="Form-wrapper message">
      <textarea
        rows="4"
        type="text"
        name="message"
        placeholder="YOUR MESSAGE"
        class="Form-wrapper__input"
        bind:value={message} />
      <span class="button" on:click={sendMail}>
        <Button text="send message">
          <i class="fas fa-paper-plane" />
        </Button>
      </span>
    </div>
  </div>
</div>
