import axios from 'axios';

import { APP_CONFIG } from '@/helpers/config/app.config';

class Axios {
  public get axios() {
    return axios.create({
      baseURL: APP_CONFIG.BACK_URL,
      timeout: 1000,
    });
  }
}

export const provider = new Axios();
