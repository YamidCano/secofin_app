import Api from "./Api"

export default {
  getEps() {
    try {
      const response = Api().get("/eps");
      return response;
    } catch (error) {
      console.log("🚀 ~ geteps ~ error:", error)
      throw error;
    }
  },

  async addEps(requestData) {
    try {
      const response = Api().post("/eps/create", requestData);
      return response;
    } catch (error) {
      console.log("🚀 ~ addeps ~ error:", error)
      throw error;
    }
  },

  async showEps(epsId) {
    try {
      const response = await Api().get(`/eps/show/${epsId}`);
      return response;
    } catch (error) {
      console.log("🚀 ~ editeps ~ error:", error)
      throw error;
    }
  },

  async updateEps(epsId, requestData) {
    try {
      const response = await Api().put(`/eps/update/${epsId}`, requestData);
      return response;
    } catch (error) {
      console.log("🚀 ~ updateeps ~ error:", error)
      throw error;
    }
  },

  async deleteEps(epsId) {
    try {
      const response = await Api().delete(`/eps/delete/${epsId}`);
      return response;
    } catch (error) {
      console.log("🚀 ~ deleteeps ~ error:", error)
      throw error;
    }
  },

  async updateStatus(epsId) {
    try {
      const response = await Api().put(`/eps/updateStatus/${epsId}`);
      return response;
    } catch (error) {
      console.log("🚀 ~ updateStatus ~ error:", error)
      throw error;
    }
  },
}
