import Api from "./Api"

export default {
  getPensiones() {
    try {
      const response = Api().get("/pensiones");
      return response;
    } catch (error) {
      console.log("🚀 ~ getpensiones ~ error:", error)
      throw error;
    }
  },

  async addPensiones(requestData) {
    try {
      const response = Api().post("/pensiones/create", requestData);
      return response;
    } catch (error) {
      console.log("🚀 ~ addpensiones ~ error:", error)
      throw error;
    }
  },

  async showPensiones(pensionesId) {
    try {
      const response = await Api().get(`/pensiones/show/${pensionesId}`);
      return response;
    } catch (error) {
      console.log("🚀 ~ editpensiones ~ error:", error)
      throw error;
    }
  },

  async updatePensiones(pensionesId, requestData) {
    try {
      const response = await Api().put(`/pensiones/update/${pensionesId}`, requestData);
      return response;
    } catch (error) {
      console.log("🚀 ~ updatepensiones ~ error:", error)
      throw error;
    }
  },

  async deletePensiones(pensionesId) {
    try {
      const response = await Api().delete(`/pensiones/delete/${pensionesId}`);
      return response;
    } catch (error) {
      console.log("🚀 ~ deletepensiones ~ error:", error)
      throw error;
    }
  },

  async updateStatus(pensionesId) {
    try {
      const response = await Api().put(`/pensiones/updateStatus/${pensionesId}`);
      return response;
    } catch (error) {
      console.log("🚀 ~ updateStatus ~ error:", error)
      throw error;
    }
  },
}
