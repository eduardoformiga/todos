<template>
  <div class="image-button" v-on="$listeners">
    <img :src="require('@/assets/images/' + imgName)" :alt="alt" />
  </div>
</template>

<script>
export default {
  name: 'ImageButton',
  props: {
    imgName: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.image-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border: solid 1px $active;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  margin-left: 8px;
}
</style>
