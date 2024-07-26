<template>
  <q-card class="q-ma-lg">
    <q-card-section>
      <div class="text-h6">Crear ARL</div>
      <div class="row q-mt-md">
        <div class="col">
          <q-input class="q-px-sm" outlined label="Nombre ARL" v-model="nombre" />
        </div>
      </div>
    </q-card-section>

    <q-card-actions vertical align="right">
      <q-btn flat @click="create">Crear</q-btn>
    </q-card-actions>
  </q-card>
</template>
<script setup>
import { ref, onMounted } from "vue"
import serviceArl from "src/services/serviceArl"
import { useRouter } from "vue-router"
import { Notify } from 'quasar'
const router = useRouter()
const nombre = ref("")

const create = async () => {
  try {
    const requestData = {
      nombre: nombre.value
    };
    const { data } = await serviceArl.addArl(requestData);
    console.log(data);
    router.push({ name: "arlView" });
    // loading.value = false;
  } catch (error) {
    console.error(error);
    showNotify('negative', error.response?.data?.errors?.name || 'Error al editar o creae Rol');
  }
};

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
};

</script>
