<template>
  <input
    ref="input"
    v-model="inputedText"
    type="text"
    :placeholder="placeholder"
    class="input-text"
    aria-label="input text"
    @focus="handleFocus"
    @blur="handleBlur"
    @keypress.enter="handleKeyEnter"
    @keyup.esc="handleKeyEsc"
  />
</template>

<script>
export default {
  name: 'InputText',
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
      inputedText: this.text
    }
  },
  methods: {
    handleKeyEnter() {
      this.$emit('enter', this.inputedText)
    },
    handleKeyEsc() {
      // only emit when in edit mode
      if (this.text !== '') {
        this.inputedText = this.text
        this.$emit('esc', this.text)
      }
    },
    handleFocus() {
      this.$emit('focus')
    },
    handleBlur() {
      this.$emit('blur')
    },
    // used by parent component
    focus() {
      this.$refs.input.focus()
    },
    reset() {
      this.inputedText = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.input-text {
  display: inline-block;
  margin: 0;
  border: 0;
  padding: 3.5px 50px 3.5px 0;
  width: 100%;
  flex-grow: 1;
  vertical-align: middle;
  white-space: normal;
  background: none;
  line-height: 1;
  font-size: 16px;
  border-bottom: 1px solid $grey-light-2;
  box-sizing: content-box;

  &:not(:placeholder-shown) {
    border-bottom: 1px solid $active;
  }

  &:focus {
    outline: 0;
  }

  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: $inactive;
    opacity: 1; /* Firefox */
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: $inactive;
  }

  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: $inactive;
  }
}
</style>
