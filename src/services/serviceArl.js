import {api} from "boot/axios"

export default {
  getArl() {
    try {
      const response = api.get("/arl");
      return response;
    } catch (error) {
      console.log("🚀 ~ getArl ~ error:", error)
      throw error;
    }
  },

  async addArl(requestData) {
    try {
      const response = api.post("/arl/create", requestData);
      return response;
    } catch (error) {
      console.log("🚀 ~ addArl ~ error:", error)
      throw error;
    }
  },

  async showArl(ArlId) {
    try {
      const response = await api.get(`/arl/show/${ArlId}`);
      return response;
    } catch (error) {
      console.log("🚀 ~ editArl ~ error:", error)
      throw error;
    }
  },

  async updateArl(ArlId, requestData) {
    try {
      const response = await api.put(`/arl/update/${ArlId}`, requestData);
      return response;
    } catch (error) {
      console.log("🚀 ~ updateArl ~ error:", error)
      throw error;
    }
  },

  async deleteArl(ArlId) {
    try {
      const response = await api.delete(`/arl/delete/${ArlId}`);
      return response;
    } catch (error) {
      console.log("🚀 ~ deleteArl ~ error:", error)
      throw error;
    }
  },

  async updateStatus(ArlId) {
    try {
      const response = await api.put(`/arl/updateStatus/${ArlId}`);
      return response;
    } catch (error) {
      console.log("🚀 ~ updateStatus ~ error:", error)
      throw error;
    }
  },
}
