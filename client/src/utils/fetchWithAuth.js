// src/utils/fetchWithAuth.js

const fetchWithAuth = async (url, options = {}) => {
    const token = localStorage.getItem("token");
  
    const headers = {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
      ...options.headers,
    };
  
    const response = await fetch(url, {
      ...options,
      headers,
    });
  
    return response;
  };
  
  export default fetchWithAuth;
  