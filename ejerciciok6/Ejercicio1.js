import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  //target es el numero de usuarios virtuales
  stages: [
    { target: 5, duration: '10s' },
  ],
};

export default function () {
  //guardo la respuesta del get en la variable res para despues validar el status 200
  const res = http.get('https://pokeapi.co/api/v2/pokemon/ditto');
  sleep(1);
  check(res, {'status is 200': (r) => r.status === 200,});

  //tiempo de respuesta en ms por cada iteracion
  console.log('Response time was ' + String(res.timings.duration) + ' ms');
}