import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    scenarios: {
        ejercicio1: {
            executor: 'ramping-vus',
            startVUs: 0,
            stages: [
                {duration: '10s', target: 5}
            ],
            gracefulRampDown: '10s',
            env: {MYVAR: 'example'},
            tags: {my_tag: 'example'},
        },
        ejercicio2: {
            executor: 'ramping-vus',
            startVUs: 0,
            stages: [
                {duration: '1m', target: 15}
            ],
            gracefulRampDown: '10s',
            env: {MYVAR: 'example'},
            tags: {my_tag: 'example'},
        },
        ejercicio3: {
            executor: 'ramping-vus',
            startVUs: 0,
            stages: [
                { duration: '2m30s', target: 20 },
                { duration: '30s', target: 2 },
                { duration: '10s', target: 0 },
            ],
            gracefulRampDown: '10s',
            env: {MYVAR: 'example'},
            tags: {my_tag: 'example'},
        },
    },
}

export default function () {
  const res = http.get('https://httpbin.test.k6.io');
  sleep(1);
  check(res, { 'status is 200': (r) => r.status == 200 });
}