import axios from 'axios';

export class RequestServer {
  static url = 'https://pixabay.com/api/';
  static key = '35857249-0d707f1bd6e70bbb52b237dd3';
  searchImg(value, page) {
    return axios.get(
      `${RequestServer.url}?q=${value}&page=${page}&key=${RequestServer.key}&image_type=photo&orientation=horizontal&per_page=12`
    );
  }
}
