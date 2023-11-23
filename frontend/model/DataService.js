export default class DataService {
  constructor() {
    axios.defaults.baseURL = "http://localhost:8000/api/poets/";
  }

  async getData(uri, callback) {
    try {
      const response = await axios.get(uri);
      callback(response);
    } catch (error) {
      console.log(error);
    }
  }

  async postData(uri, data) {
    try {
      const response = await axios.post(uri, data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  async putData(uri, id, data) {
    try {
      const response = await axios.put(uri + "/" + id, data);
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  }

  async deleteData(uri, id) {
    try {
      const response = await axios.delete(uri + "/" + id);
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  }
}
