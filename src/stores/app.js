// En tu módulo de almacenamiento useAppStore.js
import { defineStore } from 'pinia';
import { parse, stringify } from 'zipson'
import { encryptStorage } from './encryptStorage';

export const useAppStore = defineStore('secofin', {
  state: () => ({
    user: null,
    role: null,
    permissions: null,
    token: null,
  }),

  persist: {
    storage: encryptStorage,
    serializer: {
      deserialize: parse,
      serialize: stringify
    }
  },

  actions: {

    setUserData(data) {
      this.user = data;
    },

    setTokenData(data) {
      this.token = data;
    },

    setRoleData(data) {
      this.role = data;
    },

    setPermissionsData(data) {
      this.permissions = data;
    },

    logout() {
      this.token = '';
      this.user = '';
      this.role = '';
      this.permissions = '';
      localStorage.removeItem('secofin');
    },
  },

});

export const EditDataStore = defineStore('editData', {
  state: () => ({
    EditARL: null,
    EditEPS: null,
    EditCesantias: null,
    EditPensiones: null,
  }),

  persist: {
    storage: encryptStorage,
    serializer: {
      deserialize: parse,
      serialize: stringify
    }
  },

  actions: {
    setEditARL(data) {
      this.EditARL = data;
    },

    setEditEPS(data) {
      this.EditEPS = data;
    },

    setEditCesantias(data) {
      this.EditCesantias = data;
    },

    setEditPensiones(data) {
      this.EditPensiones = data;
    }
  },

});
