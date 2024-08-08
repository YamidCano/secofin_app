import Api from "./Api"

export default {
  getCesantias() {
    try {
      const response = Api().get("/cesantias");
      return response;
    } catch (error) {
      console.log("🚀 ~ getcesantias ~ error:", error)
      throw error;
    }
  },

  async addCesantias(requestData) {
    try {
      const response = Api().post("/cesantias/create", requestData);
      return response;
    } catch (error) {
      console.log("🚀 ~ addcesantias ~ error:", error)
      throw error;
    }
  },

  async showCesantias(cesantiasId) {
    try {
      const response = await Api().get(`/cesantias/show/${cesantiasId}`);
      return response;
    } catch (error) {
      console.log("🚀 ~ editcesantias ~ error:", error)
      throw error;
    }
  },

  async updateCesantias(cesantiasId, requestData) {
    try {
      const response = await Api().put(`/cesantias/update/${cesantiasId}`, requestData);
      return response;
    } catch (error) {
      console.log("🚀 ~ updatecesantias ~ error:", error)
      throw error;
    }
  },

  async deleteCesantias(cesantiasId) {
    try {
      const response = await Api().delete(`/cesantias/delete/${cesantiasId}`);
      return response;
    } catch (error) {
      console.log("🚀 ~ deletecesantias ~ error:", error)
      throw error;
    }
  },

  async updateStatus(cesantiasId) {
    try {
      const response = await Api().put(`/cesantias/updateStatus/${cesantiasId}`);
      return response;
    } catch (error) {
      console.log("🚀 ~ updateStatus ~ error:", error)
      throw error;
    }
  },
}
