<template>
  <q-card class="q-ma-lg">
    <q-card-section>
      <div class="text-h6">Actualizar ARL</div>
      <div class="row q-mt-md">
        <div class="col">
          <q-input class="q-px-sm" outlined label="Nombre ARL" v-model="nombre" :loading="loading" />
        </div>
      </div>
    </q-card-section>
    <q-card-actions vertical align="right">
      <q-btn flat @click="update">Actualizar</q-btn>
    </q-card-actions>
  </q-card>
</template>
<script setup>
import { ref, onMounted } from "vue"
import serviceArl from "src/services/serviceArl"
import { Notify } from 'quasar'
const nombre = ref("")
const roleId = ref('')

// Loading
const loading = ref(false)

import { EditDataStore } from 'stores/app'
const StoreEditData = EditDataStore()

import { useRouter } from 'vue-router'
const router = useRouter()

onMounted(async () => {
  await showArl()
});

const showArl = async () => {
  try {
    loading.value = true
    const { data } = await serviceArl.showArl(StoreEditData.EditARL);
    nombre.value = data.data.nombre
  } catch (error) {
    showNotify('negative', error.response?.data?.message || 'Error al obtener datos');
  } finally {
    loading.value = false;
  }
};

const update = async () => {
  loading.value = true;
  try {
    const requestData = {
      nombre: nombre.value
    }
    const { data } = await serviceArl.updateArl(StoreEditData.EditARL, requestData);
    showNotify('positive', data.message)
    router.push({ name: "arlView" });
  } catch (error) {
    showNotify('negative', error.response?.data?.errors?.nombre || 'Error al actualizar la ARL');
  } finally {
    loading.value = false;
  }
}

const showNotify = (type, message) => {
  Notify.create({
    message: message,
    type: type,
    badgeColor: 'white',
    badgeTextColor: 'dark',
    position: 'top-right',
    progress: true,
    // timeout: 0,
    actions: [{ icon: 'close', color: 'white' }]
  });
}

</script>
