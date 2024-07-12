<template>
  <q-card class="q-ma-lg">
    <q-table
      flat
      bordered
      :rows="functionary"
      :columns="columns"
      :filter="filter"
      no-data-label="No se encontraron resultados"
      no-results-label="No se encontraron resultados en la busqueda"
      row-key="name"
    >
      <template v-slot:top-left>
        <q-btn
          outline
          color="primary"
          icon="mdi-plus"
          label="Crear"
          :to="{ name: 'functionaryCreate' }"
        />
      </template>
      <template v-slot:top-right>
        <q-input
          clearable
          dense
          debounce="300"
          outlined
          v-model="filter"
          placeholder="Buscar"
        >
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
          <q-td key="names" :props="props">
            {{ props.row.names }}
          </q-td>
          <q-td key="surname" :props="props">
            {{ props.row.surname }}
          </q-td>
          <q-td key="document" :props="props">
            {{ props.row.document }}
          </q-td>
          <q-td key="actions" :props="props">
            <div class="q-gutter-sm">
              <q-btn round outline color="primary" icon="mdi-pencil" size="sm" @click="edit(props.row.id)">
                <q-tooltip
                  class="bg-primary"
                  :offset="[8, 8]"
                  anchor="top middle"
                  self="bottom middle"
                >
                  Editar Rol
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
import { ref, onMounted } from "vue";
import serviceFunctionary from "src/services/serviceFunctionary";
import { data } from "autoprefixer";
const functionary = ref([]);
const filter = ref("");

const columns = [
  {
    name: "names",
    align: "left",
    label: "Nombres",
    field: "names",
    sortable: true,
  },
  {
    name: "surname",
    align: "left",
    label: "Apellidos",
    field: "surname",
    sortable: true,
  },
  {
    name: "document",
    align: "left",
    label: "Documento",
    field: "document",
    sortable: true,
  },
  { name: 'actions', align: 'center', label: 'Opciones', field: 'actions' },
];

onMounted(async () => {
  await getFunctionary();
});

const getFunctionary = async () => {
  try {
    const { data } = await serviceFunctionary.getFunctionary();
    functionary.value = data.data;

    loading.value = false;
  } catch (error) {
    console.error(error);
  console.log(data)
  }

};

const edit = async (id) => {
  console.log(id)
}

</script>
