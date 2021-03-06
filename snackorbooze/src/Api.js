import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.
  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {

  static async getItems() {
    //update getSnacks to get all Item Types (Snacks & Drinks)
    const snacks = await axios.get(`${BASE_API_URL}/snacks`);
    const drinks = await axios.get(`${BASE_API_URL}/drinks`);
    return {snacks: snacks.data, drinks: drinks.data}
  }

  static async addNewItem(type, item) {
    // async function to add a new item
    const resp = await axios.post(`${BASE_API_URL}/${type}`, item)
    if (resp.status === 201) {
      return true;
    }
    return false;
  }

}

export default SnackOrBoozeApi;
