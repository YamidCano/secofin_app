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
                <q-btn v-if="props.row.status == 1" round outline color="primary" icon="mdi-pencil" size="sm"
                  @click="EditArl(props.row.id)">
                  <q-tooltip class="bg-primary" :offset="[8, 8]" anchor="top middle" self="bottom middle">
                    Editar
                  </q-tooltip>
                </q-btn>
                <q-btn round outline :color="props.row.status === 1 ? 'purple' : 'green'"
                  :icon="props.row.status === 1 ? 'mdi-close-thick' : 'mdi-check-bold'"
                  @click="handleStatus(props.row.id, props.row.status === 1 ? 2 : 1)" size="sm">
                  <q-tooltip :class="props.row.status === 1 ? 'bg-purple' : 'bg-green'" class="mobile-hide"
                    :offset="[8, 8]" anchor="top middle" self="bottom middle">
                    {{ props.row.status === 1 ? 'Desabilitar' : 'Habilitar' }}
                  </q-tooltip>
                </q-btn>
                <q-btn v-if="props.row.status == 1" round outline color="red" icon="mdi-delete"
                  @click="alertDialog = true; itemId = props.row.id" size=sm>
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

  <q-dialog v-model="DialogBlock" persistent transition-show="rotate" transition-hide="rotate"
    backdrop-filter="backdropFilter">
    <q-card :class="`${DialogColorBlock} text-primary text-center text-white`" style="width: 400px">
      <q-card-section>
        <q-icon :name="DialogIconBlock" color="white" size="10em" />
        <div class="text-h6">
          {{ DialogText1Block }}
        </div>
      </q-card-section>
      <q-card-actions class="bg-white justify-between">
        <q-btn flat v-close-popup color="red" label="Cancelar" />
        <q-btn flat :label="DialogbtnBlock" @click="updateStatus()" color="primary" />
      </q-card-actions>
    </q-card>
  </q-dialog>
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

//Dialogo Block
const DialogBlock = ref(false)
const DialogStatusBlock = ref('')
const DialogColorBlock = ref('')
const DialogIconBlock = ref('')
const DialogText1Block = ref('')
const DialogbtnBlock = ref('')
const elementID = ref('')

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
    console.error("Error al obtener ARL:", error);
    showNotify('negative', 'Error al obtener la lista de ARL');
  }
}

const EditArl = async (id) => {
  StoreEditData.setEditARL(id)
  router.push({ name: 'arlUpdate' })
}

const deleteARL = async (id) => {
  try {
    loading.value = true;
    const { data } = await serviceArl.deleteArl(id);
    await getArl();
    showNotify('positive', data.message);
  } catch (error) {
    console.error("Error al eliminar EPS:", error);
    showNotify('negative', error.response?.data?.message || 'Error al eliminar EPS');
  } finally {
    loading.value = false;
    alertDialog.value = false;
  }
}

const updateStatus = async () => {
  try {
    loading.value = true;
    const { data } = await serviceArl.updateStatus(elementID.value);
    await getArl()
    DialogBlock.value = false
    showNotify('positive', data.message);
  } catch (error) {
    console.error("Error al actualizar el estado:", error);
    showNotify('negative', error.response?.data?.message || 'Error al actualizar el estado');
  } finally {
    loading.value = false;
    alertDialog.value = false;
  }
}

const handleStatus = async (Id, newStatus) => {
  loading.value = true
  DialogBlock.value = true
  DialogStatusBlock.value = newStatus
  DialogColorBlock.value = `bg-${newStatus === 2 ? 'red' : 'green'}`
  DialogIconBlock.value = `mdi-${newStatus === 2 ? 'close-thick' : 'check-bold'}`
  DialogText1Block.value = `¿Estás seguro de ${newStatus === 2 ? 'Inactivar' : 'Activar'} la ARL?`
  DialogbtnBlock.value = `Sí, ${newStatus === 2 ? 'Inactivar' : 'Activar'}`
  elementID.value = Id
}

const showNotify = (type, message) => {
  Notify.create({
    message: message,
    type: type,
    position: 'top-right',
    badgeColor: 'white',
    badgeTextColor: 'dark',
    progress: true,
    actions: [{ icon: 'close', color: 'white' }]
  });
}
</script>
