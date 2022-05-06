import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  //target es el numero de usuarios virtuales
  stages: [
    { target: 15, duration: '1m' },
  ],
};

export default function () {
  //guardo la respuesta del get en la variable res para despues validar el status 200
  const res = http.get('https://pokeapi.co/api/v2/pokemon/ditto');
  sleep(1);
  check(res, {'status is 200': (r) => r.status === 200,});

}