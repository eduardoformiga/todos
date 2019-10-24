<template>
  <label class="checkbox">
    <input type="checkbox" hidden />
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  name: 'Checkbox'
}
</script>

<style lang="scss" scoped>
.checkbox {
  display: block;
  position: relative;
  padding-left: 28px;
  margin-bottom: 28px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ .checkmark {
      background-color: $active;
      border: 1px solid $white;

      &:after {
        display: block;
      }
    }
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 26px;
    width: 26px;
    border: 1px solid $inactive;
    border-radius: 50%;

    &:after {
      content: '';
      position: absolute;
      display: none;
      top: 9px;
      left: 8px;
      height: 4px;
      width: 10px;
      border-left: 1px solid white;
      border-bottom: 1px solid white;
      transform: rotate(-47deg);
    }
  }
}
</style>
