import {api} from "boot/axios"

export default {
  getFunctionary() {
    try {
      const response = api.get("/functionary");
      return response;
    } catch (error) {
      console.error("Service obtener - Error al obtener functionary", error);
      throw error;
    }
  },

  async addFunctionary(requestData) {
    try {
      const response = api.post("/functionary/create", requestData);
      return response;
    } catch (error) {
      console.error("Service add - Error al crear el functionary", error);
      throw error;
    }
  },

  async editFunctionary(functionaryId) {
    try {
      const response = await api.get('/functionary/edit/${functionaryId}');
      return response;
    } catch (error) {
      console.error("Service edit - Rol No Encontrado", error);
      throw error;
    }
  },

  async updateFunctionary(functionaryId, requestData) {
    try {
      const response = await api.put('/functionary/update/${functionaryId}, requestData');
      return response;
    } catch (error) {
      console.error("Service update - Rol No Encontrado", error);
      throw error;
    }
  },

  async deleteFunctionary(functionaryId) {
    try {
      const response = await api.delete('/functionary/delete/${functionaryId}');
      return response;
    } catch (error) {
      console.error("Service delete - Rol No Encontrado", error);
      throw error;
    }
  },
}
