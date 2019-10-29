<template>
  <div class="input-tag">
    <input-text
      ref="inputText"
      type="text"
      :placeholder="placeholder"
      :text="text"
      class="input"
      @blur="showTag = false"
      @focus="showTag = true"
      @enter="handleKeyEnter"
      @esc="handleKeyEsc"
    />
    <tag v-if="showTag">Enter ↵</tag>
  </div>
</template>

<script>
import InputText from '../atoms/InputText'
import Tag from '../atoms/Tag'

export default {
  name: 'InputTag',
  components: {
    InputText,
    Tag
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      showTag: false
    }
  },
  methods: {
    handleKeyEnter(inputedText) {
      this.$emit('enter', inputedText)
    },
    handleKeyEsc() {
      this.$emit('esc', this.text)
    },
    // Usado pelo pai para focar o input
    focus() {
      this.$refs.inputText.focus()
    },
    reset() {
      this.$refs.inputText.reset()
    }
  }
}
</script>

<style lang="scss" scoped>
.input-tag {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
</style>
