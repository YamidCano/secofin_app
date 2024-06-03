<template>
  <q-card class="rounded-xl q-my-lg q-pa-lg">
    <q-table flat bordered title="Nomina " :rows="payroll" :columns="columns" :filter="filter"
      no-data-label="No se encontraron resultados" no-results-label="No se encontraron resultados en la busqueda"
      row-key="name">
      <template v-slot:top-right>
        <q-input clearable dense debounce="300" outlined v-model="filter" placeholder="Buscar">
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:no-data="{ icon, message, filter }">
        <div class="full-width row flex-center q-gutter-sm">
          <span>
            {{ message }}
          </span>
          <q-icon size="2em" :name="filter ? 'mdi-text-box-search' : icon" />
        </div>
      </template>
    </q-table>
  </q-card>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import servicePayroll from 'src/services/servicePayroll'

const payroll = ref([]);
const filter = ref('');

const columns = [
  { name: 'names', align: 'left', label: 'Nombres', field: 'names', sortable: true },
  { name: 'surname', align: 'left', label: 'Apellidos', field: 'surname', sortable: true },
  { name: 'document', align: 'left', label: 'Documento', field: 'document', sortable: true },
  { name: 'position', align: 'left', label: 'Posicion', field: 'position', sortable: true },
  { name: 'risk', align: 'left', label: 'Riesgo', field: 'risk', sortable: true },
  { name: 'worked_days', align: 'left', label: 'Dias trabajados', field: 'worked_days', sortable: true },
  { name: 'salary', align: 'left', label: 'Salario', field: 'salary', sortable: true },
];

onMounted(async () => {
  await getPayroll();
});

const getPayroll = async () => {
  try {
    // loading.value = true;
    const { data } = await servicePayroll.getPayroll();
    payroll.value = data.data;

    // loading.value = false;
  } catch (error) {
    console.error(error);
  }
};
</script>
