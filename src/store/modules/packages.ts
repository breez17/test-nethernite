import {Action, Module, VuexModule} from "vuex-module-decorators";
import axios from "axios";

@Module
export default class extends VuexModule {
  @Action
  async getPackages() {
    try {
      const response = await axios.get(`https://data.jsdelivr.com/v1/stats/packages`);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
}
