<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Secofin App </q-toolbar-title>

        <div>Admin</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Menu Principal </q-item-label>
        <q-list>
          <q-item clickable v-ripple :to="{ name: 'dashboard' }">
            <q-item-section>Dashboard</q-item-section>
          </q-item>
        </q-list>
      </q-list>
      <q-list>
        <q-item-label header>Tablas del sistema</q-item-label>
        <q-list>
          <q-item clickable v-ripple :to="{ name: 'functionary' }">
            <q-item-section>Empleados</q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'position' }">
            <q-item-section>Posiciones</q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'payroll' }">
            <q-item-section>Nominas</q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'arlView' }">
            <q-item-section>ARL</q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'epsView' }">
            <q-item-section>EPS</q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'afpView' }">
            <q-item-section>AFP</q-item-section>
          </q-item>
        </q-list>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

defineOptions({
  name: "MainLayout",
});

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
