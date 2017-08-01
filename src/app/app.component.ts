import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import skygear from 'skygear';
import { SkygearService } from './skygear.service';


const Note = skygear.Record.extend('Note');

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
    .then((skygear) => {
      this.skygear = skygear;
      this.title = "Configurated";
    })
    .then(() => {
      return this.skygear.auth.signupAnonymously();
    })
    .then((user) => {
      return this.title = "Signed up anonymous user: " + user.id;
    })
    .catch((error) => {
      this.title = "Cannot configure skygear";
    });
  }

  addNewRecord() {
    this.skygearService.getSkygear()
    .then((skygear) => {
      this.skygear = skygear;
      return this.skygear.publicDB.save(new Note({
        'content': 'Hello World'
      }));
    })
    .then((record)=> {
      this.title = "Saved record: " + record.id;
    });
  }
}
