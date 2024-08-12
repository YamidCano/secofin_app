<template>
  <q-card class="q-ma-lg">
    <q-card-section>
      <div class="text-h6">Actualizar AFP</div>
      <div class="row q-mt-md">
        <div class="col">
          <q-input class="q-px-sm" outlined label="Nombre" v-model="nombre" :loading="loading" />
        </div>
        <div class="col">
          <q-input type="number" class="q-px-sm" outlined label="Nit" v-model="nit" :loading="loading" />
        </div>
      </div>

    {{ StoreEditData.EditAfp }}
    </q-card-section>
    <q-card-actions vertical align="right">
      <q-btn flat @click="update">Actualizar</q-btn>
    </q-card-actions>
  </q-card>
</template>
<script setup>
import { ref, onMounted } from "vue"
import serviceAfp from "src/services/serviceAfp"
import { Notify } from 'quasar'
const nombre = ref("")
const nit = ref('')

// Loading
const loading = ref(false)

import { EditDataStore } from 'stores/app'
const StoreEditData = EditDataStore()

import { useRouter } from 'vue-router'
const router = useRouter()

onMounted(async () => {
  await showAfp()
});

const showAfp = async () => {
  try {
    loading.value = true
    const { data } = await serviceAfp.showAfp(StoreEditData.EditAfp);
    nombre.value = data.data.nombre
    nit.value = data.data.nit
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
      nombre: nombre.value,
      nit: nit.value
    }
    const { data } = await serviceAfp.updateAfp(StoreEditData.EditAfp, requestData);
    showNotify('positive', data.message)
    router.push({ name: "afpView" });
  } catch (error) {
    showNotify('negative', error.response?.data?.errors?.nombre || 'Error al actualizar la Afp');
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
