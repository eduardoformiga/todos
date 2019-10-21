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
      <p>bla bla</p>
      <p>
        Ilustrações por Open Doodles | Inter UI Font Family por Rasmus Andersson
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
    align-items: flex-end;
    padding-top: 28px;
    margin: auto;
    width: 120px;
    .title {
      font-size: 24px;
      font-weight: bold;
      letter-spacing: -0.5px;
      color: $primary;
      padding-left: 10px;
    }
  }
}
main {
  background-color: $white;
}
footer {
  p {
    font-family: InterUI;
    font-size: 12px;
    text-align: center;
    color: $accent;
  }
}
</style>
