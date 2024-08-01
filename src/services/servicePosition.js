import Api from "./Api"

export default {
  getPosition() {
    try {
      const response = Api().get("/position");
      return response;
    } catch (error) {
      throw error;
    }
  },

  async addPosition(requestData) {
    try {
      const response = Api().post("/position/create", requestData);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async editPosition(PositionId) {
    try {
      const response = await Api().get('/position/edit/${PositionId}');
      return response;
    } catch (error) {
      throw error;
    }
  },

  async updatePosition(PositionId, requestData) {
    try {
      const response = await Api().put('/position/update/${PositionId}, requestData');
      return response;
    } catch (error) {
      throw error;
    }
  },

  async deletePosition(PositionId) {
    try {
      const response = await Api().delete('/position/delete/${PositionId}');
      return response;
    } catch (error) {
      throw error;
    }
  },
}
