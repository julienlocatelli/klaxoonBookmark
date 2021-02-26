class AxiosApi {
  constructor(axios, baseUrl) {
    this.axios = axios;
    this.axios.defaults.baseURL = baseUrl;
  }

  get(url) {
    return this.axios.get(url);
  }

  post(url, body) {
    return this.axios.post(url, body);
  }

  put(url, body) {
    return this.axios.put(url, body);
  }
}

export default AxiosApi;
