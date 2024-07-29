<template>
  <q-dialog v-model="dialogVisible" persistent transition-show="rotate" transition-hide="rotate"
    backdrop-filter="backdropFilter">
    <q-card class="bg-red text-white text-center" style="width: 300px">
      <q-card-section>
        <q-icon :name="icon" color="white" size="10em" />
        <div class="text-h6">¿Estás seguro de Eliminar?</div>
        ¡No podrás revertir esto!
      </q-card-section>
      <q-card-actions class="bg-white justify-between">
        <q-btn flat v-close-popup color="red" label="Cancelar" />
        <q-btn flat label="Sí, eliminarlo" color="primary" @click="confirmAction" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, defineProps, toRefs } from 'vue'

const dialogVisible = ref(false)
const props = defineProps({
  confirm: Function,
  icon: {
    type: String,
    default: 'mdi-delete-outline'
  },
  id: {
    type: Number,
    default: null
  }
})

const { id } = toRefs(props)

const confirmAction = () => {
  if (id.value !== null) {
    props.confirm(id.value)
  }
  dialogVisible.value = false
}


</script>
