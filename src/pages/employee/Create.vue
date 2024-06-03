<template>
  <q-card class="q-ma-lg">
    <q-card-section>
      <div class="text-h6">Crear empleado</div>
      <div class="row q-mt-md">
        <div class="col">
          <q-input
            class="q-px-sm"
            outlined
            label="Nombres empleado"
            v-model="name"
          />
        </div>
        <div class="col">
          <q-input
            class="q-px-sm"
            outlined
            label="Apellidos empleado"
            v-model="surname"
          />
        </div>
      </div>
      <div class="row q-mt-md">
        <div class="col">
          <q-input
            type="number"
            class="q-px-sm"
            outlined
            label="Documento empleado"
            v-model="document"
          />
        </div>
        <div class="col">
          <q-select
            class="q-px-sm"
            outlined
            v-model="position"
            input-debounce="0"
            label="Cargo"
            :options="getposition"
            emit-value
            map-options
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey"> No results </q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>
      </div>

      {{ position }}
    </q-card-section>

    <q-card-actions vertical align="right">
      <q-btn flat @click="create">Crear</q-btn>
    </q-card-actions>
  </q-card>
</template>
<script setup>
import { ref, onMounted } from "vue";
import serviceFunctionary from "src/services/serviceFunctionary";
import servicePosition from "src/services/servicePosition";
import { useRouter } from "vue-router";
const router = useRouter();
const name = ref("");
const surname = ref("");
const document = ref("");
const position = ref("");
const getposition = ref([]);

const create = async () => {
  try {
    const requestData = {
      names: name.value,
      surname: surname.value,
      document: document.value,
      id_position: position.value,
    };
    const { data } = await serviceFunctionary.addFunctionary(requestData);
    console.log(data);
    router.push({ name: "employee" });
    // loading.value = false;
  } catch (error) {
    console.error(error);
  }
};

onMounted(async () => {
  await getPosition();
});

const getPosition = async () => {
  try {
    const { data } = await servicePosition.getPosition();
    getposition.value = data.data.map((item) => ({
      label: item.name,
      value: item.id,
    }));

    // loading.value = false;
  } catch (error) {
    console.error(error);
  }
};
</script>
