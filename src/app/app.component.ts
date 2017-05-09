import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { SkygearService } from './skygear.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Loading...';
  skygear = null;

  constructor(private skygearService: SkygearService) {
  }

  ngOnInit(): void {
    this.skygearService.getSkygear()
    .then(skygear=> {
      this.skygear = skygear;
      this.title = "Configurated";
    })
    .catch(error=> {
      this.title = "Cannot configure skygear";
    });
  }
}
