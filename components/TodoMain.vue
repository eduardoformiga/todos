<template>
  <div>
    <div class="container">
      <div class="title">Nenhuma tarefa criada ainda.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoDomain'
}
</script>

<style lang="scss" scoped>
.container {
  width: 800px;
  height: 422px;
  margin: auto;
  border-radius: 12px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.15);
  background-color: $white;
  transform: translateY(-75px);
  .title {
    font-family: InterUI;
    font-size: 24px;
    padding: 24px;
    text-align: center;
    color: $primary;
  }
}
</style>
