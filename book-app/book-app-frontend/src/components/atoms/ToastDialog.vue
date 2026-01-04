<script setup lang="ts">
import { ConfirmDialog, useConfirm, useToast } from 'primevue'
const confirm = useConfirm()
const toast = useToast()

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  accept: {
    type: Function,
    required: true
  },
  reject: {
    type: Function,
    required: true
  },
  severity: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: false,
    default: 'pi pi-exclamation-triangle'
  }
})

function show() {
  confirm.require({
    message: props.message,
    header: props.title,
    icon: props.icon,
    rejectProps: {
      label: 'Cancelar',
      severity: 'secondary',
      outlined: true
    },
    acceptProps: {
      label: 'Realizar',
      severity: props.severity
    },
    accept: () => {
      toast.add({
        severity: 'success',
        summary: 'Confirmado',
        detail: 'Se ha realizado la acción',
        life: 3000,
        closable: true
      })
      props.accept()
    },
    reject: () => {
      toast.add({
        severity: 'error',
        summary: 'Cancelado',
        detail: 'Haz cancelado la acción',
        life: 3000,
        closable: true
      })
      props.reject()
    }
  })
}

defineExpose({ show })
</script>

<template>
  <ConfirmDialog></ConfirmDialog>
</template>
