import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {
  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }
  // fetching the drinks using axios
  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }

  // method to add a snack or drink, just a regular post request with the item data, asking for type of item and item data that we'll take from a form
  static async addItem(type, itemData) {
    const result = await axios.post(`${BASE_API_URL}/${type}`, itemData);
    return result.data;
  }
}

export default SnackOrBoozeApi;
