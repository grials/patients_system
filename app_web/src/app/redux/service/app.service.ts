import axios from 'axios';

export class AppService {
  static URL_PRUEBA = 'http://localhost:7500/api/prueba';

  static async getData() {
    let data = await axios.get(
      AppService.URL_PRUEBA
      // dataForm,
      // {
      //     headers: {
      //         "X-Requested-With": "XMLHttpRequest",
      //         "X-CSRF-TOKEN": token,
      //         // "Content-Type": "multipart/form-data",
      //         "Content-Type": "application/json",
      //     },
      // }
    );
    return data;
  }
}
