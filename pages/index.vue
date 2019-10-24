<template>
  <div class="container">
    <img
      v-if="$mq == 'lg'"
      class="bg-illustration"
      src="../assets/images/background-illustration.svg"
      alt="background-ilustration"
    />
    <div class="title">Nenhuma tarefa criada ainda.</div>
    <div class="state-image">
      <picture>
        <source
          srcset="../assets/images/meditating-sm.svg"
          media="(max-width: 450px)"
        />
        <img src="../assets/images/meditating.svg" alt="meditating" />
      </picture>
    </div>
    <section class="todo-list">
      <div class="todo-list__title">
        Que tal organizar as ideias criando uma lista agora?
      </div>
      <task></task>
    </section>
    <img
      v-if="$mq == 'lg'"
      class="bg-illustration-right"
      src="../assets/images/background-illustration-tree.png"
      alt="background-ilustration-tree"
    />
  </div>
</template>

<script>
import Task from '../components/organisms/Task'

export default {
  components: { Task }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  max-width: 800px;
  min-width: 320px;
  height: 422px;
  margin: auto;
  border-radius: 12px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.15);
  background-color: $white;
  transform: translateY($translate-size);

  .bg-illustration {
    position: absolute;
    top: 98px;
    left: -120px;
  }
  .bg-illustration-right {
    position: absolute;
    width: 100px;
    height: 180px;
    right: -120px;
    bottom: -54px;
  }

  .title {
    padding: 24px 50px;
    font-size: 24px;
    text-align: center;
    color: $primary;
  }
  .state-image {
    display: flex;
    justify-content: center;
    img {
      max-width: 100%;
      height: auto;
    }
  }
  .todo-list {
    padding-top: 40px;
    .todo-list__title {
      padding: 0 24px 12px 24px;
      font-size: 16px;
      color: $primary;
    }
  }
}

@media screen and (max-width: 855px) {
  .container {
    margin: 0 1.75rem;
  }
}

@media screen and (max-width: 450px) {
  .container {
    height: 382px;
    transform: translateY($translate-size-mobile);
  }
}
</style>
