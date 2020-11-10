import axios from "axios";

export async function httpCall(type, url, params, data) {
  switch (type) {
    case "get":
      return await axios.get(url, { params });
    case "post":
      return await axios.post(url, JSON.stringify(data));
    case "patch":
      return await axios.patch(url, JSON.stringify(data));
    case "put":
      return await axios.put(url, JSON.stringify(data));
    default:
      return {};
  }
}
