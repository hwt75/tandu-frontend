import axios from "axios";

const host = `${process.env.HOST}:${process.env.PORT}` || "failed";
const secret = process.env.SECRET_KEY || "failed";
export const axiosMethod = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

const generateRandomString = (length) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  };
  
  const createKey = (key) => {
    return generateRandomString(20) + "-" + key + "-" + generateRandomString(20);
  };
  
export const axiosRequest = (path, method, data) => {
  const url = `${host}${path}`;

  const axiosConfig = {
    url,
    method,
  };
  console.log(axiosConfig);
  axios.data = { code: createKey(secret) };

  return axios(axiosConfig);
};


