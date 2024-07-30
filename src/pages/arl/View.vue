<template>
  <q-card class="q-ma-lg q-pa-lg">
    <div class="text-h6">Listado de ARL</div>
    <div>
      <q-table flat bordered separator="cell" :rows="arl" :columns="columns" :filter="filter" :pagination="pagination"
        no-data-label="No se encontraron resultados" no-results-label="No se encontraron resultados en la busqueda"
        row-key="name">
        <template v-slot:top-left>
          <q-btn outline color="primary" icon="mdi-plus" label="Crear" :to="{ name: 'arlCreate' }" />
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
              {{ props.row.nombre }}
            </q-td>
            <q-td key="status" :props="props">
              <div v-if="props.row.status == 1">
                <q-chip>
                  <q-avatar icon="mdi-check" color="green" text-color="white" />
                  Activo
                </q-chip>
              </div>
              <div v-else>
                <q-chip>
                  <q-avatar icon="mdi-alert" color="red" text-color="white" />
                  Inactivo
                </q-chip>
              </div>
            </q-td>
            <q-td key="actions" :props="props">
              <div class="q-gutter-sm">
                <q-btn v-if="props.row.status == 1" round outline color="primary" icon="mdi-pencil" size="sm" @click="EditArl(props.row.id)">
                  <q-tooltip class="bg-primary" :offset="[8, 8]" anchor="top middle" self="bottom middle">
                    Editar
                  </q-tooltip>
                </q-btn>
                <q-btn round outline :color="props.row.status == 1 ? 'red' : 'green'"
                  :icon="props.row.status == 1 ? 'mdi-close-thick' : 'mdi-check-bold'" size="sm"
                  @click="updateStatus(props.row.id)">
                  <q-tooltip :class="props.row.status == 1 ? 'bg-red' : 'bg-green'" :offset="[8, 8]" anchor="top middle"
                    self="bottom middle">
                    <div v-if="props.row.status == 1">Desabilitar</div>
                    <div v-else>Habilitar</div>
                  </q-tooltip>
                </q-btn>
                <q-btn v-if="props.row.status == 1" round outline color="red" icon="mdi-delete" @click="alertDialog = true; itemId = props.row.id"
                  size=sm>
                  <q-tooltip class="bg-red mobile-hide" :offset="[8, 8]" anchor="top middle" self="bottom middle">
                    Eliminar Registro
                  </q-tooltip>
                </q-btn>
              </div>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-card>
  <!-- Componete MyAlertDialog -->
  <MyAlertDialog v-model="alertDialog" :confirm="deleteARL" :id="itemId" />
</template>

<script setup>
import { ref, onMounted } from "vue"
import serviceArl from "src/services/serviceArl"
import MyAlertDialog from 'components/alertDialog.vue'
import { Notify } from 'quasar'
const arl = ref([]);
const filter = ref("")

//Componete MyAlertDialog
const loading = ref(true)
const alertDialog = ref(false)
const itemId = ref(null)

//Componete Table
const pagination = ref({
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage: 25
})

import { EditDataStore } from 'stores/app'
const StoreEditData = EditDataStore()

import { useRouter } from 'vue-router'
const router = useRouter()

const columns = [
  {
    name: "name",
    align: "left",
    label: "Nombres",
    field: "nombre",
    sortable: true,
  },
  {
    name: "status",
    align: "left",
    label: "Estado",
    field: "status",
    sortable: true,
  },
  { name: 'actions', align: 'center', label: 'Opciones', field: 'actions', style: 'width: 200px' },
];

onMounted(async () => {
  await getArl();
});

const getArl = async () => {
  try {
    const { data } = await serviceArl.getArl();
    arl.value = data.data
  } catch (error) {
    console.error(error);
  }
}

const EditArl = async (id) => {
  console.log("🚀 ~ EditArl ~ id:", id)
  try {
    StoreEditData.setEditARL(id)
    router.push({ name: 'arlUpdate' })
  } catch (error) {
    console.error(error);
  }
}

const deleteARL = async (id) => {
  try {
    loading.value = true;
    const { data } = await serviceArl.deleteArl(id);
    await getArl();
    showNotify('positive', data.message);
  } catch (error) {
    console.log("🚀 ~ deleteARL ~ error:", error)
    showNotify('negative', error.response?.data?.message || 'Error al eliminar el elemento');
  } finally {
    loading.value = false;
    alertDialog.value = false;
  }
}

const updateStatus = async (id) => {
  try {
    loading.value = true;
    const { data } = await serviceArl.updateStatus(id);
    await getArl();
    showNotify('positive', data.message);
  } catch (error) {
    console.log("🚀 ~ updateStatus ~ error:", error)
    showNotify('negative', error.response?.data?.message || 'Error al eliminar el elemento');
  } finally {
    loading.value = false;
    alertDialog.value = false;
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
