import {api} from "boot/axios"

export default {
  getFunctionary() {
    try {
      const response = api.get("/functionary");
      return response;
    } catch (error) {
      console.log("🚀 ~ getFunctionary ~ error:", error)
      throw error;
    }
  },

  async addFunctionary(requestData) {
    try {
      const response = api.post("/functionary/create", requestData);
      return response;
    } catch (error) {
      console.log("🚀 ~ addFunctionary ~ error:", error)
      throw error;
    }
  },

  async editFunctionary(functionaryId) {
    try {
      const response = await api.get('/functionary/edit/${functionaryId}');
      return response;
    } catch (error) {
      console.log("🚀 ~ editFunctionary ~ error:", error)
      throw error;
    }
  },

  async updateFunctionary(functionaryId, requestData) {
    try {
      const response = await api.put('/functionary/update/${functionaryId}, requestData');
      return response;
    } catch (error) {
      console.log("🚀 ~ updateFunctionary ~ error:", error)
      throw error;
    }
  },

  async deleteFunctionary(functionaryId) {
    try {
      const response = await api.delete('/functionary/delete/${functionaryId}');
      return response;
    } catch (error) {
      console.log("🚀 ~ deleteFunctionary ~ error:", error)
      throw error;
    }
  },
}
