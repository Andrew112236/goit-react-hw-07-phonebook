import axios from 'axios';

const BASE_URL = 'https://652bc69cd0d1df5273eeb1cd.mockapi.io';

const api = axios.create({
  baseURL: BASE_URL,
});

const resources = resource => {
  return {
    getAll: () => api.get(`/${resource}`),

    get: id => api.get(`/${resource}/${id}`),

    create: newContact => api.post(`/${resource}`, newContact),

    update: (id, data) => api.put(`/${resource}/${id}`, data),

    delete: id => api.delete(`/${resource}/${id}`),
  };
};

const contactsApi = resources('contacts');

export default contactsApi;
