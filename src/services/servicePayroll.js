import {api} from "boot/axios"

export default {
  getPayroll() {
    try {
      const response = api.get("/payroll");
      return response;
    } catch (error) {
      console.log("🚀 ~ getPayroll ~ error:", error)
      throw error;
    }
  },

  async addPayroll(requestData) {
    try {
      const response = api.post("/payroll/create", requestData);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async editPayroll(PayrollId) {
    try {
      const response = await api.get('/payroll/edit/${PayrollId}');
      return response;
    } catch (error) {
      console.log("🚀 ~ editPayroll ~ error:", error)
      throw error;
    }
  },

  async updatePayroll(PayrollId, requestData) {
    try {
      const response = await api.put('/payroll/update/${PayrollId}, requestData');
      return response;
    } catch (error) {
      console.log("🚀 ~ updatePayroll ~ error:", error)
      throw error;
    }
  },

  async deletePayroll(PayrollId) {
    try {
      const response = await api.delete('/payroll/delete/${PayrollId}');
      return response;
    } catch (error) {
      console.log("🚀 ~ deletePayroll ~ error:", error)
      throw error;
    }
  },
}
