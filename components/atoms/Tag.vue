<template>
  <span>
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'Tag'
}
</script>

<style lang="scss" scoped>
span {
  position: absolute;
  right: 0;
  padding: 4px;
  font-family: InterUI;
  font-size: 10px;
  border-radius: 4px;
  background-color: $grey-light-2;
  color: $inactive;
}
</style>
