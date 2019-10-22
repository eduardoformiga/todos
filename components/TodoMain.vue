<template>
  <div>
    <div class="container">
      <div class="title">Nenhuma tarefa criada ainda.</div>
      <div class="state-image">
        <img src="../assets/images/meditating.svg" alt="meditating" />
      </div>
      <section class="todo-list">
        <div class="todo-list__title">
          Que tal organizar as ideias criando uma lista agora?
        </div>
        <task></task>
      </section>
    </div>
  </div>
</template>

<script>
import Task from './Task'

export default {
  name: 'TodoDomain',
  components: { Task }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 800px;
  min-width: 320px;
  height: 422px;
  margin: auto;
  border-radius: 12px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.15);
  background-color: $white;
  transform: translateY($translate-size);

  .title {
    padding: 24px 0 12px;
    height: 29px;
    font-size: 24px;
    text-align: center;
    color: $primary;
  }
  .state-image {
    width: 272.3px;
    height: 209.2px;
    margin: auto;
  }
  .todo-list {
    padding-top: 34.4px;
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
</style>
