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
      'endPoint': 'https://<your-app-name>.skygeario.com/', // trailing slash is required
      'apiKey': '<your-api-key>',
    });
    promise.then(()=> this.isConfigurated = true);
    return promise;
  }
}
