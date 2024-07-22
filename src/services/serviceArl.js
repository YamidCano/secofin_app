import {api} from "boot/axios"

export default {
  getArl() {
    try {
      const response = api.get("/arl");
      return response;
    } catch (error) {
      console.error("Service obtener - Error al obtener Arl", error);
      throw error;
    }
  },

  async addArl(requestData) {
    try {
      const response = api.post("/arl/create", requestData);
      return response;
    } catch (error) {
      console.error("Service add - Error al crear el Arl", error);
      throw error;
    }
  },

  async editArl(ArlId) {
    try {
      const response = await api.get(`/arl/edit/${ArlId}`);
      return response;
    } catch (error) {
      console.error("Service edit - Rol No Encontrado", error);
      throw error;
    }
  },

  async updateArl(ArlId, requestData) {
    try {
      const response = await api.put(`/arl/update/${ArlId}`, requestData);
      return response;
    } catch (error) {
      console.error("Service update - Rol No Encontrado", error);
      throw error;
    }
  },

  async deleteArl(ArlId) {
    try {
      const response = await api.delete(`/arl/delete/${ArlId}`);
      return response;
    } catch (error) {
      console.error("Service delete - Rol No Encontrado", error);
      throw error;
    }
  },
}
