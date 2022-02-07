import axios from 'axios';

export class AppService {
  static async post(url: string, data: any) {
    let response = await axios.post(url, data, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        // "X-CSRF-TOKEN": token,
        // "Content-Type": "multipart/form-data",
        'Content-Type': 'application/json',
      },
    });
    return response;
  }

  static async get(url: string) {
    let response = await axios.post(url);
    return response;
  }
}
