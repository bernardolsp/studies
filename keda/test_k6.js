import http from 'k6/http';
export const options = {
  vus: 100,
  duration: '3m',
};
export default function () {
  http.get('http://127.0.0.1:5000/');
  http.get('http://127.0.0.1:5000/hello');
  http.get('http://127.0.0.1:5000/');
  http.get('http://127.0.0.1:5000/');
  http.get('http://127.0.0.1:5000/');
  http.get('http://127.0.0.1:5000/');
  http.get('http://127.0.0.1:5000/');

}