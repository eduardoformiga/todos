<template id="modal">
  <div class="modal">
    <div class="modal-window">
      <div class="header">Remover task?</div>
      <p>{{ task.text }}</p>
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
  .modal-window {
    position: absolute;
    top: 50%;
    left: 50%;
    transition: 0.5s;
    width: 100%;
    min-width: 300px;
    max-width: 400px;
    background: $white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transform: translate(-50%, -50%);
    padding: 1em;
    color: $black;
    text-align: center;

    .header {
      font-size: 24px;
      font-weight: bold;
      letter-spacing: -0.5px;
      color: $primary;
      padding: 10px;
    }
    p {
      padding: 16px;
    }

    .actions {
      display: flex;
      justify-content: center;
      padding-top: 10px;

      button {
        font-size: inherit;
        margin: 4px;
        border: none;
        border-radius: 4px;
        padding: 6px 8px;
        cursor: pointer;
      }

      .cancel {
        border: 1px solid $primary;
        background: $white;
        color: $primary;
      }

      .confirm {
        background: $primary;
        color: white;
      }
    }
  }
}

.actions button {
  font-size: inherit;
  margin: 4px;
  border: none;
  padding: 6px 8px;
  cursor: pointer;
}

.appear-enter {
  opacity: 0;
  .modal-window {
    transform: translate(-75%, -50%);
  }
}

.appear-enter-active {
  transition: 0.5s;
}

.appear-leave-active {
  opacity: 0;
  transition: 0.5s;
  .modal-window {
    transform: translate(0, -50%);
  }
}

@media screen and (max-width: 450px) {
  .modal {
    top: -190px;
    .modal-window {
      width: 85%;
    }
  }
}
</style>
