 import axios from "axios";
class ProService{

    constructor(){       
        this.baseURL= 'https://fakestoreapi.com/products'
    }

    async getProducts() {
        try {
          const response = await axios.get(this.baseURL);
          return response.data;
        } catch (error) {
          throw error;
        }
      }
    
    async getProduct(id) {
        try {
          const response = await axios.get(this.baseURL.concat('/') + id);
          return response.data;
        } catch (error) {
          throw error;
        }
      }

  }

export default new ProService();
