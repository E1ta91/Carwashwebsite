import { apiClient } from "./config";

export const apiBooking = async (payload) => {
    return apiClient.post('/users/booking', payload);
};
