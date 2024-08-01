import Api from "./Api"

export default {
  getArl() {
    try {
      const response = Api().get("/arl");
      return response;
    } catch (error) {
      console.log("🚀 ~ getArl ~ error:", error)
      throw error;
    }
  },

  async addArl(requestData) {
    try {
      const response = Api().post("/arl/create", requestData);
      return response;
    } catch (error) {
      console.log("🚀 ~ addArl ~ error:", error)
      throw error;
    }
  },

  async showArl(ArlId) {
    try {
      const response = await Api().get(`/arl/show/${ArlId}`);
      return response;
    } catch (error) {
      console.log("🚀 ~ editArl ~ error:", error)
      throw error;
    }
  },

  async updateArl(ArlId, requestData) {
    try {
      const response = await Api().put(`/arl/update/${ArlId}`, requestData);
      return response;
    } catch (error) {
      console.log("🚀 ~ updateArl ~ error:", error)
      throw error;
    }
  },

  async deleteArl(ArlId) {
    try {
      const response = await Api().delete(`/arl/delete/${ArlId}`);
      return response;
    } catch (error) {
      console.log("🚀 ~ deleteArl ~ error:", error)
      throw error;
    }
  },

  async updateStatus(ArlId) {
    try {
      const response = await Api().put(`/arl/updateStatus/${ArlId}`);
      return response;
    } catch (error) {
      console.log("🚀 ~ updateStatus ~ error:", error)
      throw error;
    }
  },
}
