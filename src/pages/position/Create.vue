<template>
  <q-card class="q-ma-lg">
    <q-card-section>
      <div class="text-h6">Crear posicione</div>
      <div class="row q-mt-md">
        <div class="col">
          <q-input class="q-px-sm"outlined label="Nombre de la posicion" v-model="name"/>
        </div>
      </div>
    </q-card-section>
    <q-card-actions vertical align="right">
      <q-btn flat @click="create">Crear</q-btn>
    </q-card-actions>
  </q-card>
</template>
<script setup>
import { ref, onMounted } from "vue";
import servicePosition from "src/services/servicePosition";
import { useRouter } from "vue-router";
const router = useRouter();
const name = ref("");

const create = async () => {
  try {
    const requestData = {
      name: name.value,
    };
    const { data } = await servicePosition.addPosition(requestData);
    console.log(data);
    router.push({ name: "position" });
    // loading.value = false;
  } catch (error) {
    console.error(error);
  }
};
</script>
