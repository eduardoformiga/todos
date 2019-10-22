<template>
  <div class="task">
    <checkbox></checkbox>
    <input-text></input-text>
  </div>
</template>

<script>
import Checkbox from './Checkbox'
import InputText from './InputText'
export default {
  name: 'Task',
  components: {
    Checkbox,
    InputText
  }
}
</script>

<style lang="scss" scoped>
.task {
  padding: 8px 24px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: $grey-light-1;
  }
}
</style>
