import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  listar() {
    return [
      {id: 1, name: 'Carl', age: 32},
      {id: 2, name: 'Max', age: 22},
      {id: 3, name: 'Will', age: 38},
    ];
  }
}
