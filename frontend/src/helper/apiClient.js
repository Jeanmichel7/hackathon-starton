import React from 'react';
import axios from 'axios';

const apiClient = () => {
    const axiosInstance = axios.create({
        baseURL: "http://localhost:4242/"
    });
  return (axiosInstance);
}
export default apiClient;

// sing body mouse lunar law unaware fiction beef oil despair credit depth