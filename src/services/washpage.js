import { apiClient } from "./config";

export const apiGetCarCare = async () => {
  return apiClient.get('/carcare'); 
}

export const apiGetCarCareById = async (id) => {
    return apiClient.get(`/carcare/${id}`);
}

export const apiPostCarcare = async (payload) => {
    return apiClient.post('/carcare', payload);
}

// export const apiGetCarServiceDetails = async () => {
//   const carServiceData= await apiClient.get('/carcare');
//   return carServiceData.data
// }