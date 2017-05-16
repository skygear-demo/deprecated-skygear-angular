import { Injectable } from '@angular/core';
import skygear from 'skygear';

@Injectable()
export class SkygearService {
  isConfigurated = false;
  getSkygear() {
    if (this.isConfigurated) {
      return Promise.resolve(skygear);
    }
    let promise = skygear.config({
      'endPoint': 'https://skygearangular.skygeario.com/', // trailing slash is required
      'apiKey': '8397832bcb9d4c57b5833b532ef1a77c',
    });
    promise.then(()=> this.isConfigurated = true);
    return promise;
  }
}
