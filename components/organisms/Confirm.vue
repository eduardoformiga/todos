<template id="modal">
  <div class="modal">
    <div class="modal-window">
      <p>
        Deseja deletar a task:
        <br />
        <strong>{{ task.text }}</strong> ?
      </p>
      <div class="actions">
        <button class="cancel" @click="onCancel">Cancelar</button>
        <button class="confirm" @click="onConfirm">Confirmar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Confirm',
  props: {
    task: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    onConfirm() {
      this.$emit('confirm')
    },
    onCancel() {
      this.$emit('cancel')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
}

.modal-window {
  position: absolute;
  top: 50%;
  left: 50%;
  transition: 0.5s;
  width: 100%;
  min-width: 400px;
  max-width: 600px;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transform: translate(-50%, -50%);
  padding: 1em;
  color: black;
  text-align: center;
}

.modal-window .actions {
  display: flex;
  justify-content: flex-end;
}

.actions button {
  font-size: inherit;
  margin: 4px;
  border: none;
  padding: 6px 8px;
  cursor: pointer;
}

.actions .cancel {
  border: 1px solid $primary;
  background: $white;
  color: $primary;
}

.actions .confirm {
  background: $primary;
  color: white;
}

.appear-enter {
  opacity: 0;
}

.appear-enter .modal-window {
  transform: translate(-75%, -50%);
}

.appear-enter-active {
  transition: 0.5s;
}

.appear-leave-active .modal-window {
  transform: translate(0, -50%);
}

.appear-leave-active {
  opacity: 0;
  transition: 0.5s;
}
</style>
