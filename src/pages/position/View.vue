<template>
  <q-card class="q-ma-lg">
    <q-table flat bordered title="Posiciones" :rows="position" :columns="columns" :filter="filter" no-data-label="No se encontraron resultados" no-results-label="No se encontraron resultados en la busqueda" row-key="name">
      <template v-slot:top-left>
        <q-btn outline color="primary" icon="mdi-plus" label="Crear" :to="{ name: 'positionCreate' }"/>
      </template>
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
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="actions" :props="props">
            <div class="q-gutter-sm">
              <q-btn round outline color="primary" icon="mdi-pencil" size="sm" :to="{ name: 'functionaryUpdate' }">
                <q-tooltip class="bg-primary" :offset="[8, 8]" anchor="top middle" self="bottom middle">
                  Editar
                </q-tooltip>
              </q-btn>

              <q-btn round outline color="primary" icon="mdi-delete" size="sm" @click="edit(props.row.id)">
                <q-tooltip class="bg-primary" :offset="[8, 8]" anchor="top middle" self="bottom middle">
                  Eliminar
                </q-tooltip>
              </q-btn>
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-card>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import servicePosition from 'src/services/servicePosition'

const position = ref([]);
const filter = ref('');

const columns = [
  { name: 'name', align: 'left', label: 'Nombres', field: 'name', sortable: true },
  { name: 'actions', align: 'center', label: 'Opciones', field: 'actions' },
];

onMounted(async () => {
  await getPosition();
});

const getPosition = async () => {
  try {
    // loading.value = true;
    const { data } = await servicePosition.getPosition();
    position.value = data.data;

    // loading.value = false;
  } catch (error) {
    console.error(error);
  }
};
</script>
