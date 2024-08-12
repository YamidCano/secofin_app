import Api from "./Api"

export default {
  getAfp() {
    try {
      const response = Api().get("/afp");
      return response;
    } catch (error) {
      console.log("🚀 ~ getAfp ~ error:", error)
      throw error;
    }
  },

  async addAfp(requestData) {
    try {
      const response = Api().post("/afp/create", requestData);
      return response;
    } catch (error) {
      console.log("🚀 ~ addAfp ~ error:", error)
      throw error;
    }
  },

  async showAfp(AfpId) {
    try {
      const response = await Api().get(`/afp/show/${AfpId}`);
      return response;
    } catch (error) {
      console.log("🚀 ~ editAfp ~ error:", error)
      throw error;
    }
  },

  async updateAfp(AfpId, requestData) {
    try {
      const response = await Api().put(`/afp/update/${AfpId}`, requestData);
      return response;
    } catch (error) {
      console.log("🚀 ~ updateAfp ~ error:", error)
      throw error;
    }
  },

  async deleteAfp(AfpId) {
    try {
      const response = await Api().delete(`/afp/delete/${AfpId}`);
      return response;
    } catch (error) {
      console.log("🚀 ~ deleteAfp ~ error:", error)
      throw error;
    }
  },

  async updateStatus(AfpId) {
    try {
      const response = await Api().put(`/afp/updateStatus/${AfpId}`);
      return response;
    } catch (error) {
      console.log("🚀 ~ updateStatus ~ error:", error)
      throw error;
    }
  },
}
