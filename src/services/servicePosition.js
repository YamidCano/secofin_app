import {api} from "boot/axios"

export default {
  getPosition() {
    try {
      const response = api.get("/position");
      return response;
    } catch (error) {
      console.error("Service obtener - Error al obtener Position", error);
      throw error;
    }
  },

  async addPosition(requestData) {
    try {
      const response = api.post("/position/create", requestData);
      return response;
    } catch (error) {
      console.error("Service add - Error al crear el Position", error);
      throw error;
    }
  },

  async editPosition(PositionId) {
    try {
      const response = await api.get('/position/edit/${PositionId}');
      return response;
    } catch (error) {
      console.error("Service edit - Rol No Encontrado", error);
      throw error;
    }
  },

  async updatePosition(PositionId, requestData) {
    try {
      const response = await api.put('/position/update/${PositionId}, requestData');
      return response;
    } catch (error) {
      console.error("Service update - Rol No Encontrado", error);
      throw error;
    }
  },

  async deletePosition(PositionId) {
    try {
      const response = await api.delete('/position/delete/${PositionId}');
      return response;
    } catch (error) {
      console.error("Service delete - Rol No Encontrado", error);
      throw error;
    }
  },
}
