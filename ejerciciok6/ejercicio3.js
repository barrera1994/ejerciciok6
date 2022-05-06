import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  //target es el numero de usuarios virtuales
  stages: [
    { duration: '2m30s', target: 20 },
    { duration: '30s', target: 2 },
    { duration: '10s', target: 0 },
  ],
};

export default function () {
  const res = http.get('https://httpbin.test.k6.io');
  sleep(1);
  check(res, { 'status is 200': (r) => r.status == 200 });
}