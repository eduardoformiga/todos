<template>
  <div>
    <header>
      <div class="logo">
        <img src="../assets/images/icon-checked.svg" class="icon-checked" />
        <div class="title">to-do</div>
      </div>
    </header>
    <main>
      <nuxt />
    </main>
    <footer>
      <p class="first-line">
        Um teste projetado pela
        <span>Guava</span>
      </p>
      <p class="second-line">
        Ilustrações por
        <span>Open Doodles</span> | Inter UI Font Family por
        <span>Rasmus Andersson</span>
      </p>
    </footer>
  </div>
</template>

<style lang="scss">
header {
  height: 175px;
  background-color: $secondary;
  .logo {
    display: flex;
    align-items: center;
    padding-top: 28px;
    margin: auto;
    width: 120px;
    .icon-checked {
      width: 34px;
      height: 35px;
    }
    .title {
      font-size: 24px;
      font-weight: bold;
      letter-spacing: -0.5px;
      color: $primary;
      padding-top: 5px;
      padding-left: 10px;
    }
  }
}
main {
  background-color: $white;
}
footer {
  transform: translateY($translate-size);
  p {
    padding-top: 20px;
    font-family: InterUI;
    font-size: 12px;
    text-align: center;
    color: $accent;
    span {
      color: $active;
    }

    &.second-line {
      padding-top: 12px;
      font-size: 10px;
    }
  }
}
</style>
