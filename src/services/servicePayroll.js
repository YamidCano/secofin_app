import Api from "./Api"

export default {
  getPayroll() {
    try {
      const response = Api().get("/payroll");
      return response;
    } catch (error) {
      console.log("🚀 ~ getPayroll ~ error:", error)
      throw error;
    }
  },

  async addPayroll(requestData) {
    try {
      const response = Api().post("/payroll/create", requestData);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async editPayroll(PayrollId) {
    try {
      const response = await Api().get('/payroll/edit/${PayrollId}');
      return response;
    } catch (error) {
      console.log("🚀 ~ editPayroll ~ error:", error)
      throw error;
    }
  },

  async updatePayroll(PayrollId, requestData) {
    try {
      const response = await Api().put('/payroll/update/${PayrollId}, requestData');
      return response;
    } catch (error) {
      console.log("🚀 ~ updatePayroll ~ error:", error)
      throw error;
    }
  },

  async deletePayroll(PayrollId) {
    try {
      const response = await Api().delete('/payroll/delete/${PayrollId}');
      return response;
    } catch (error) {
      console.log("🚀 ~ deletePayroll ~ error:", error)
      throw error;
    }
  },
}
